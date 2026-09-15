// Shared helpers: fetching with retries, hashing, HTML -> text, RSS/Atom parsing, dates.
import { createHash } from "node:crypto";
import { parse } from "node-html-parser";

export const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36";

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** GET (or POST) a URL as text. Retries on network errors and 5xx; 4xx fails immediately. */
export async function fetchText(url, { timeoutMs = 30000, retries = 2, headers = {}, method = "GET", body } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        method,
        body,
        redirect: "follow",
        signal: ctrl.signal,
        headers: {
          "user-agent": UA,
          accept: "text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9",
          ...headers,
        },
      });
      const text = await res.text();
      if (!res.ok) {
        const err = new Error(`HTTP ${res.status} ${res.statusText} for ${url}`);
        err.noRetry = res.status < 500;
        throw err;
      }
      return { text, status: res.status, contentType: res.headers.get("content-type") || "", finalUrl: res.url };
    } catch (err) {
      lastErr = err;
      if (err.noRetry || attempt === retries) break;
      await sleep(1500 * (attempt + 1));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastErr;
}

export async function fetchJson(url, opts = {}) {
  const r = await fetchText(url, { ...opts, headers: { accept: "application/json", ...(opts.headers || {}) } });
  return JSON.parse(r.text);
}

export const sha256 = (s) => createHash("sha256").update(String(s)).digest("hex");
export const shortHash = (s) => sha256(s).slice(0, 12);

export function normalizeWs(s) {
  return String(s ?? "")
    .replace(/ /g, " ")
    .replace(/[ \t\r\f\v]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function parseHtml(html) {
  return parse(html, { blockTextElements: { script: true, style: true, noscript: true, pre: true } });
}

const NOISE = ["script", "style", "noscript", "svg", "iframe", "form", "button", "nav", "header", "footer"];

/** Visible text of an HTML string or parsed node, with boilerplate removed. Mutates a passed-in node. */
export function htmlToText(input, { remove = NOISE } = {}) {
  const root = typeof input === "string" ? parseHtml(input) : input;
  for (const sel of remove) for (const n of root.querySelectorAll(sel)) n.remove();
  return normalizeWs(root.structuredText ?? root.text);
}

export const stripTags = (s) => String(s ?? "").replace(/<[^>]+>/g, " ");
export const decodeEntities = (s) => parseHtml(`<p>${String(s ?? "")}</p>`).text;

export function excerpt(s, n = 600) {
  const t = normalizeWs(s);
  return t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t;
}

export const slugify = (s) =>
  normalizeWs(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const pad2 = (n) => String(n).padStart(2, "0");

/** Best-effort date -> YYYY-MM-DD. Handles ISO, RFC 2822, "20 Jul 2026", and dd-mm-yyyy slugs. */
export function parseDate(v) {
  if (!v) return null;
  const s = String(v).trim();
  let m;
  if ((m = s.match(/^(\d{4})-(\d{2})-(\d{2})/))) return `${m[1]}-${m[2]}-${m[3]}`;
  if ((m = s.match(/^(\d{2})-(\d{2})-(\d{4})$/))) return `${m[3]}-${m[2]}-${m[1]}`;
  if ((m = s.match(/^(\d{1,2})-([A-Za-z]{3})[a-z]*-(\d{4})$/))) return parseDate(`${m[2]} ${m[1]}, ${m[3]}`); // 10-Sep-2026
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return null;
  // Date-only strings parse as local midnight; keep the calendar date rather than the UTC instant.
  if (/\d:\d/.test(s)) return d.toISOString().slice(0, 10);
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

const MONTHS = "(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*";

/** Find a date inside free text (headings, slugs, URLs). Returns YYYY-MM-DD or null. */
export function extractDate(s) {
  if (!s) return null;
  const str = String(s);
  let m;
  if ((m = str.match(/\b(\d{4})-(\d{2})-(\d{2})\b/))) return `${m[1]}-${m[2]}-${m[3]}`;
  if ((m = str.match(new RegExp(`\\b(${MONTHS})\\.?\\s+(\\d{1,2})(?:st|nd|rd|th)?,?\\s+(\\d{4})\\b`, "i"))))
    return parseDate(`${m[1].slice(0, 3)} ${m[2]}, ${m[3]}`);
  if ((m = str.match(new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?\\s+(${MONTHS})\\.?,?\\s+(\\d{4})\\b`, "i"))))
    return parseDate(`${m[2].slice(0, 3)} ${m[1]}, ${m[3]}`);
  if ((m = str.match(/\b(\d{2})-(\d{2})-(\d{4})\b/))) return `${m[3]}-${m[2]}-${m[1]}`;
  if ((m = str.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/))) return `${m[3]}-${pad2(m[1])}-${pad2(m[2])}`;
  return null;
}

export const todayIso = () => new Date().toISOString().slice(0, 10);
export const daysAgoIso = (n) => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);

export async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await fn(items[i], i);
    }
  });
  await Promise.all(workers);
  return out;
}

const cdata = (s) => String(s ?? "").replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, "$1");

function feedBodyToText(raw) {
  let h = String(raw ?? "");
  // Some feeds escape their HTML (&lt;p&gt;...) instead of wrapping it in CDATA.
  if (!/<[a-z!/]/i.test(h) && /&(lt|gt|amp|#\d+);/i.test(h)) h = decodeEntities(h);
  return excerpt(htmlToText(h), 1500);
}

/** Minimal RSS 2.0 / Atom parser. Returns [{title, link, date, guid, text, categories}]. */
export function parseFeed(xml) {
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>|<entry\b[\s\S]*?<\/entry>/gi) || [];
  return blocks.map((b) => {
    const get = (tag) => {
      const m = b.match(new RegExp(`<${tag}(?=[\\s>])[^>]*>([\\s\\S]*?)<\\/${tag}\\s*>`, "i"));
      return m ? cdata(m[1]) : "";
    };
    const linkHref = b.match(/<link\b[^>]*\bhref="([^"]+)"/i);
    const link = (get("link") || (linkHref ? linkHref[1] : "")).trim();
    return {
      title: normalizeWs(decodeEntities(stripTags(get("title")))),
      link,
      date: parseDate(get("pubDate") || get("published") || get("updated") || get("dc:date")),
      guid: normalizeWs(stripTags(get("guid") || get("id"))) || link,
      text: feedBodyToText(get("content:encoded") || get("description") || get("summary") || get("content")),
      categories: [...b.matchAll(/<category\b[^>]*>([\s\S]*?)<\/category>/gi)]
        .map((m) => normalizeWs(stripTags(cdata(m[1]))))
        .filter(Boolean),
    };
  });
}
