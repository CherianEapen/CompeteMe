#!/usr/bin/env node
// Fetch every enabled source in sources.json, snapshot it, diff it against the previous snapshot,
// and write runs/<date>/diff.json + diff.md for the analysis step.
//
// usage: node scripts/fetch.mjs [--date YYYY-MM-DD] [--only id1,id2] [--baseline-days 14] [--no-save]
//   --no-save   compute the diff but leave snapshots/ untouched (dry run)
import fs from "node:fs";
import path from "node:path";
import {
  daysAgoIso, excerpt, extractDate, fetchJson, fetchText, htmlToText, mapLimit, normalizeWs, parseDate, parseFeed,
  parseHtml, sha256, shortHash, slugify, todayIso,
} from "./lib/util.mjs";

const args = parseArgs(process.argv.slice(2));
const RUN_DATE = args.date || todayIso();
const BASELINE_DAYS = Number(args["baseline-days"] || 14);
const SAVE = !args["no-save"];
const SNAP_DIR = "snapshots";
const RUN_DIR = path.join("runs", RUN_DATE);
const RAW_DIR = path.join(RUN_DIR, "raw");

// ------------------------------------------------------------------ source handlers
// Each returns { items: [{ key, title, date, url, text }], meta }. `key` must be stable across runs.

const HANDLERS = {
  rss,
  "html-sections": htmlSections,
  "link-list": linkList,
  sitemap,
  "jamf-khub": jamfKhub,
  "next-data": nextData,
  "d360-index": d360Index,
  "html-blocks": htmlBlocks,
  csv,
};

/** RSS / Atom feed. Optional include/exclude regex over includeFields (title, text, categories). */
async function rss(src, ctx) {
  const { text, finalUrl } = await fetchText(src.url);
  ctx.saveRaw("feed.xml", text);
  const items = parseFeed(text).map((e) => ({
    key: e.guid || e.link || e.title,
    title: e.title,
    date: e.date,
    url: e.link,
    text: e.text,
    _cats: e.categories,
  }));
  return { items: applyInclude(items, src), meta: { url: finalUrl, entries: items.length } };
}

/** One page split into sections by heading (e.g. Intune's "Week of …" h2s). */
async function htmlSections(src, ctx) {
  const { url, html } = await fetchPage(src);
  ctx.saveRaw("page.html", html);
  const root = parseHtml(html);
  const container = (src.container && root.querySelector(src.container)) || root.querySelector("main") || root.querySelector("body") || root;
  const skip = src.skipHeadings ? new RegExp(src.skipHeadings, "i") : null;
  const heads = container.querySelectorAll(src.sectionTag || "h2").map((h) => normalizeWs(h.text)).filter(Boolean);
  const full = htmlToText(container);
  const items = [];
  let cursor = 0;
  for (let i = 0; i < heads.length; i++) {
    const start = full.indexOf(heads[i], cursor);
    if (start < 0) continue;
    const bodyStart = start + heads[i].length;
    const next = i + 1 < heads.length ? full.indexOf(heads[i + 1], bodyStart) : -1;
    cursor = next < 0 ? full.length : next;
    if (skip && skip.test(heads[i])) continue;
    items.push({
      key: heads[i],
      title: heads[i],
      date: src.dateFromTitle ? extractDate(heads[i]) : null,
      url: `${url}#${slugify(heads[i])}`,
      text: excerpt(full.slice(bodyStart, next < 0 ? undefined : next), src.maxChars || 20000),
    });
    if (src.maxSections && items.length >= src.maxSections) break;
  }
  return { items, meta: { url, headings: heads.length } };
}

/** An index page of links (release list, press releases). New links are fetched for their text. */
async function linkList(src, ctx) {
  const { text: html, finalUrl } = await fetchText(src.url);
  ctx.saveRaw("list.html", html);
  const root = parseHtml(html);
  const re = new RegExp(src.linkPattern);
  const seen = new Set();
  const items = [];
  for (const a of root.querySelectorAll("a[href]")) {
    const href = a.getAttribute("href") || "";
    const abs = safeAbs(href, finalUrl);
    if (!abs || seen.has(abs) || !(re.test(href) || re.test(abs))) continue;
    seen.add(abs);
    const title = normalizeWs(a.text) || titleFromUrl(abs);
    items.push({ key: abs, title, date: extractDate(abs) || extractDate(title), url: abs, text: "" });
  }
  const prevByKey = new Map((ctx.prev?.items || []).map((p) => [p.key, p]));
  for (const it of items) if (prevByKey.has(it.key)) it.text = prevByKey.get(it.key).text || "";
  const toFetch = src.fetchNew === false ? [] : reportable(items.filter((it) => !prevByKey.has(it.key)), src, ctx).slice(0, src.maxFetch ?? 8);
  await mapLimit(toFetch, 3, async (it) => {
    try {
      const { text } = await fetchText(it.url);
      it.text = excerpt(htmlToText(pickMain(parseHtml(text))), src.maxChars || 6000);
      if (!it.date) it.date = extractDate(it.text.slice(0, 600));
    } catch (e) {
      it.text = `(fetch failed: ${e.message})`;
    }
  });
  return { items, meta: { url: finalUrl, links: items.length, fetched: toFetch.length } };
}

/** sitemap.xml: new URLs and changed <lastmod> are the signal; matching pages are fetched for text. */
async function sitemap(src, ctx) {
  const { text: xml } = await fetchText(src.url);
  ctx.saveRaw("sitemap.xml", xml);
  const items = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
    .map((m) => {
      const loc = (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1]?.trim();
      const lastmod = (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
      return loc ? { key: loc, title: titleFromUrl(loc), date: parseDate(lastmod), url: loc, text: "" } : null;
    })
    .filter(Boolean);
  const prevByKey = new Map((ctx.prev?.items || []).map((p) => [p.key, p]));
  const inc = src.fetchInclude ? new RegExp(src.fetchInclude, "i") : null;
  const candidates = [];
  for (const it of items) {
    const p = prevByKey.get(it.key);
    if (p && p.date === it.date) { it.text = p.text || ""; continue; }
    if (ctx.baseline && it.date && it.date < ctx.baselineCutoff) continue;
    if (!inc || inc.test(it.url)) candidates.push(it);
  }
  const toFetch = candidates.slice(0, src.maxFetch ?? 20);
  await mapLimit(toFetch, 4, async (it) => {
    try {
      const { text } = await fetchText(it.url);
      it.text = excerpt(htmlToText(pickMain(parseHtml(text))), src.maxChars || 4000);
    } catch (e) {
      it.text = `(fetch failed: ${e.message})`;
    }
  });
  return { items, meta: { urls: items.length, fetched: toFetch.length, fetchCandidates: candidates.length } };
}

/** Jamf Learning Hub (Fluid Topics). Picks the newest "Jamf Pro Release Notes X" map and pulls its topics. */
async function jamfKhub(src, ctx) {
  const maps = await fetchJson(`${src.base}/api/khub/maps`);
  const re = new RegExp(src.mapTitlePattern);
  const cands = maps.map((m) => ({ m, match: m.title.match(re) })).filter((x) => x.match);
  if (!cands.length) throw new Error(`no map title matched ${src.mapTitlePattern}`);
  cands.sort((a, b) => cmpVersion(b.match[1], a.match[1]));
  const { m: map, match } = cands[0];
  const version = match[1];
  const toc = await fetchJson(`${src.base}${map.mapApiEndpoint}/toc`);
  ctx.saveRaw("toc.json", JSON.stringify(toc, null, 1));
  const wanted = new Set(src.sections || []);
  const topics = [];
  const walk = (nodes, trail) => {
    for (const n of nodes) {
      const t = [...trail, n.title];
      if (!wanted.size || wanted.has(t[0])) topics.push({ n, t });
      if (n.children?.length) walk(n.children, t);
    }
  };
  walk(toc, []);
  const items = await mapLimit(topics, 4, async ({ n, t }) => {
    let text;
    try {
      const { text: html } = await fetchText(`${src.base}${map.mapApiEndpoint}/topics/${n.contentId}/content`);
      text = excerpt(htmlToText(html), src.maxChars || 8000);
    } catch (e) {
      text = `(fetch failed: ${e.message})`;
    }
    return {
      key: `${version} :: ${t.join(" > ")}`,
      title: `${t.join(" > ")} — Jamf Pro ${version}`,
      date: null,
      url: n.prettyUrl ? `${src.base}${n.prettyUrl}` : undefined,
      text,
    };
  });
  // Drop parent stubs (e.g. "Subscribe for Updates") whose real content lives in child topics.
  const kept = items.filter((it, i) => !(topics[i].n.children?.length && it.text.length < 300));
  return { items: kept, meta: { map: map.title, version, topics: kept.length } };
}

/** Next.js page: items live in the embedded __NEXT_DATA__ JSON (Hexnode "What's new"). */
async function nextData(src, ctx) {
  const { text: html, finalUrl } = await fetchText(src.url);
  ctx.saveRaw("page.html", html);
  const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!m) throw new Error("__NEXT_DATA__ not found");
  const data = JSON.parse(m[1]);
  const want = src.matchKeys || [];
  const found = [];
  (function walk(n) {
    if (Array.isArray(n)) return n.forEach(walk);
    if (n && typeof n === "object") {
      if (want.length && want.every((k) => k in n)) return found.push(n);
      Object.values(n).forEach(walk);
    }
  })(data.props?.pageProps ?? data);
  const f = src.fields || {};
  const items = found.map((o) => {
    const title = normalizeWs(o[f.title || "title"]);
    const date = parseDate(o[f.date || "date"]);
    const extras = [
      o.badge?.label ? `Badge: ${o.badge.label}` : null,
      Array.isArray(o.devices) && o.devices.length ? `Platforms: ${o.devices.join(", ")}` : null,
    ].filter(Boolean);
    return {
      key: `${title}|${date || ""}`,
      title,
      date,
      url: o[f.url || "url"] || finalUrl,
      text: [normalizeWs(o[f.text || "description"]), ...extras].filter(Boolean).join("\n"),
    };
  });
  return { items: dedupeByKey(items), meta: { url: finalUrl, found: found.length } };
}

/** Document360 page: the article body loads client-side, but the SSR state carries the release index. */
async function d360Index(src, ctx) {
  const { url, html } = await fetchPage(src);
  ctx.saveRaw("page.html", html);
  const m = html.match(/<script id="serverApp-state" type="application\/json">([\s\S]*?)<\/script>/);
  if (!m) throw new Error("serverApp-state not found");
  const article = ngState(m[1]).ARTICLE_BODY_TRANSFER_KEY?.result?.articleData;
  const children = article?.articleIndex?.children || [];
  if (!children.length) throw new Error("articleIndex.children is empty — page structure changed?");
  const items = dedupeByKey(children.map((c) => {
    const title = normalizeWs(c.title || c.name || c.heading || c.slug || "");
    const desc = normalizeWs(c.description || "");
    return {
      key: title || desc.slice(0, 80),
      title: title || desc.slice(0, 80),
      date: parseDate(c.firstPublishedDate || c.lastPublishedDate || c.updatedAt) || extractDate(title) || extractDate(desc),
      url: c.slug ? new URL(`/docs/${c.slug}`, url).toString() : url,
      text: excerpt(desc, src.maxChars || 8000),
    };
  }));
  // The index only carries a teaser; each release has its own page whose SSR state holds the full body.
  const prevByKey = new Map((ctx.prev?.items || []).map((p) => [p.key, p]));
  for (const it of items) if (prevByKey.has(it.key)) it.text = prevByKey.get(it.key).text || it.text;
  const toFetch = reportable(items.filter((it) => !prevByKey.has(it.key) && it.url !== url), src, ctx).slice(0, src.maxFetch ?? 6);
  await mapLimit(toFetch, 3, async (it) => {
    try {
      const { text: html } = await fetchText(it.url);
      const st = html.match(/<script id="serverApp-state" type="application\/json">([\s\S]*?)<\/script>/);
      const body = st && ngState(st[1]).ARTICLE_BODY_TRANSFER_KEY?.result?.articleData?.articleContentForSsr;
      if (body) it.text = excerpt(htmlToText(body), src.maxChars || 8000);
    } catch (e) {
      it.text += `\n(full text fetch failed: ${e.message})`;
    }
  });
  return { items, meta: { url, articleModifiedAt: article?.modifiedAt, articleTitle: article?.title, fetched: toFetch.length } };
}

/** Angular TransferState JSON escapes a few characters as &q; &a; &s; &l; &g;. */
const ngState = (raw) =>
  JSON.parse(raw.replace(/&q;/g, '"').replace(/&a;/g, "&").replace(/&s;/g, "'").replace(/&l;/g, "<").replace(/&g;/g, ">"));

/** Title/content element pairs on one or more pages (Ivanti's quarterly release accordions). */
async function htmlBlocks(src, ctx) {
  let pages = src.url ? [src.url] : [];
  if (src.hub) {
    const { text: html, finalUrl } = await fetchText(src.hub.url);
    const re = new RegExp(src.hub.linkPattern);
    const found = new Set();
    for (const a of parseHtml(html).querySelectorAll("a[href]")) {
      const abs = safeAbs(a.getAttribute("href") || "", finalUrl);
      if (abs && re.test(abs)) found.add(abs);
    }
    pages = [...found].sort().reverse().slice(0, src.hub.latest ?? 1);
    if (!pages.length) throw new Error(`hub ${src.hub.url} had no links matching ${src.hub.linkPattern}`);
  }
  const items = [];
  for (const url of pages) {
    const { text: html } = await fetchText(url);
    const label = labelFromUrl(url);
    ctx.saveRaw(`${slugify(label)}.html`, html);
    const root = parseHtml(html);
    for (const t of root.querySelectorAll(src.titleSelector)) {
      const title = normalizeWs(t.text);
      if (!title) continue;
      let sib = t.nextElementSibling;
      while (sib && !matchesSel(sib, src.contentSelector)) {
        if (matchesSel(sib, src.titleSelector)) { sib = null; break; }
        sib = sib.nextElementSibling;
      }
      items.push({
        key: `${label} :: ${title}`,
        title: `${title} (${label})`,
        date: null,
        url,
        text: sib ? excerpt(htmlToText(sib), src.maxChars || 6000) : "",
      });
    }
  }
  return { items: applyInclude(dedupeByKey(items), src), meta: { pages } };
}

/** CSV table where each row is one release note (ManageEngine's readme feed). Newest rows first. */
async function csv(src, ctx) {
  const { text, finalUrl } = await fetchText(src.url);
  ctx.saveRaw("table.csv", text);
  const rows = parseCsv(text.replace(/^﻿/, ""));
  const header = (rows.shift() || []).map((h) => h.trim());
  const col = (name) => header.indexOf(name);
  const f = src.fields || {};
  const ci = {
    build: col(f.build || "Build Number"),
    type: col(f.type || "Type"),
    product: col(f.product || "Product"),
    text: col(f.text || "ReleaseNotes"),
    date: col(f.date || "Date"),
  };
  if (ci.text < 0) throw new Error(`CSV has no "${f.text || "ReleaseNotes"}" column; header = ${header.join(",")}`);
  const rowInclude = Object.entries(src.rowInclude || {}).map(([name, re]) => [col(name), new RegExp(re, "i")]);
  const items = [];
  for (const r of rows) {
    if (rowInclude.some(([i, re]) => i >= 0 && !re.test(r[i] || ""))) continue;
    const note = normalizeWs(r[ci.text]);
    if (!note) continue;
    const build = (r[ci.build] || "").trim(), type = (r[ci.type] || "").trim(), product = (r[ci.product] || "").trim();
    items.push({
      key: `${build}|${shortHash(note)}`,
      title: [build, type, product].filter(Boolean).join(" · "),
      date: parseDate(r[ci.date]),
      url: src.pageUrl || finalUrl,
      text: `${note}\nType: ${type}; Products: ${product}`,
    });
    if (src.maxRows && items.length >= src.maxRows) break;
  }
  return { items: dedupeByKey(items), meta: { url: finalUrl, rows: rows.length, kept: items.length } };
}

/** RFC 4180-style CSV parser: quoted fields may contain commas, quotes ("") and newlines. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else quoted = false;
      } else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some((v) => v !== "")) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); if (row.some((v) => v !== "")) rows.push(row); }
  return rows;
}

// ------------------------------------------------------------------ helpers

async function fetchPage(src) {
  const year = new Date().getFullYear();
  const urls = src.urlTemplate ? [year, year - 1].map((y) => src.urlTemplate.replace("{year}", y)) : [src.url];
  let lastErr;
  for (const url of urls) {
    try {
      const r = await fetchText(url);
      return { url: r.finalUrl || url, html: r.text };
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

function applyInclude(items, src) {
  const inc = src.include ? new RegExp(src.include, "i") : null;
  const exc = src.exclude ? new RegExp(src.exclude, "i") : null;
  const fields = src.includeFields || ["title", "text"];
  return items
    .filter((it) => {
      const s = fields.map((f) => (f === "categories" ? (it._cats || []).join(" ") : it[f] || "")).join("\n");
      return (!inc || inc.test(s)) && !(exc && exc.test(s));
    })
    .map(({ _cats, ...rest }) => rest);
}

/** Items a baseline run would report (dated within the window, or the first N undated). */
function reportable(items, src, ctx) {
  if (!ctx.baseline) return items;
  const dated = items.filter((it) => it.date && it.date >= ctx.baselineCutoff);
  const undated = items.filter((it) => !it.date).slice(0, src.baselineUndatedMax ?? 10);
  return [...dated, ...undated];
}

function pickMain(root) {
  for (const sel of ["article", "main", "[role=main]", ".entry-content", ".post-content", "#content", ".content"]) {
    const el = root.querySelector(sel);
    if (el && normalizeWs(el.text).length > 200) return el;
  }
  return root.querySelector("body") || root;
}

function matchesSel(el, sel) {
  if (!el || !sel || !el.getAttribute) return false;
  if (sel.startsWith(".")) return (el.getAttribute("class") || "").split(/\s+/).includes(sel.slice(1));
  if (sel.startsWith("#")) return el.getAttribute("id") === sel.slice(1);
  return (el.tagName || "").toLowerCase() === sel.toLowerCase();
}

function safeAbs(href, base) {
  try { return new URL(href, base).toString(); } catch { return null; }
}
const titleFromUrl = (url) => decodeURIComponent(url.split("/").filter(Boolean).pop() || url).replace(/[-_]+/g, " ");
const labelFromUrl = (url) => new URL(url).pathname.split("/").filter(Boolean).slice(-2).join(" ").toUpperCase();

function cmpVersion(a, b) {
  const pa = a.split(".").map(Number), pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d;
  }
  return 0;
}

function dedupeByKey(items) {
  const seen = new Set();
  return items.filter((it) => (seen.has(it.key) ? false : (seen.add(it.key), true)));
}

// Windows-relevance hint for the analysis step (a hint, not a filter).
const WIN_TERMS = /\bwindows\b|\bwin32\b|\bwin(?:dows)? ?1[01]\b|\bmsix?\b|\bappx\b|\bautopilot\b|\bbitlocker\b|\bwinget\b|windows update|\bwufb\b|\bdefender\b|hybrid (?:azure ad |entra )?join|group policy|\bgpo\b|\bpowershell\b|windows hello|\bsurface\b|windows server|\.exe\b|endpoint manager|\bepm\b|\buem\b|\bkiosk\b|\bdrivers?\b|\bfirmware\b|\bbios\b|\bcsp\b|\boma-?dm\b|\bwmi\b/gi;
const WIN_TITLE = /\bwindows\b|\bwin32\b|\bmsix?\b|\bautopilot\b|\bbitlocker\b|windows server|\bwinget\b/i;
function relevance(it) {
  const blob = `${it.title || ""}\n${it.text || ""}`;
  const hits = new Set([...blob.matchAll(WIN_TERMS)].map((m) => m[0].toLowerCase())).size;
  const windowsMentions = (blob.match(/\bwindows\b/gi) || []).length;
  return WIN_TITLE.test(it.title || "") || hits >= 3 || windowsMentions >= 5 ? "high" : hits >= 1 ? "medium" : "none";
}

function lineDiff(prevText, newText) {
  const toLines = (t) => normalizeWs(t).split("\n").map((l) => l.trim()).filter((l) => l.length > 2);
  const a = new Set(toLines(prevText)), b = new Set(toLines(newText));
  return { addedLines: [...b].filter((l) => !a.has(l)), removedLines: [...a].filter((l) => !b.has(l)) };
}

function computeDiff(src, prev, items, ctx) {
  if (!prev) {
    const fresh = reportable(items, src, ctx);
    return { new: fresh, changed: [], removedCount: 0, hiddenNew: items.length - fresh.length };
  }
  const trackChanges = src.trackChanges ?? !["rss", "link-list", "next-data"].includes(src.kind);
  const prevByKey = new Map(prev.items.map((p) => [p.key, p]));
  const fresh = items.filter((it) => !prevByKey.has(it.key));
  const changed = trackChanges
    ? items
        .filter((it) => prevByKey.has(it.key) && prevByKey.get(it.key).hash !== it.hash)
        .map((it) => ({ ...it, ...lineDiff(prevByKey.get(it.key).text, it.text), prevDate: prevByKey.get(it.key).date }))
    : [];
  const keys = new Set(items.map((i) => i.key));
  return { new: fresh, changed, removedCount: prev.items.filter((p) => !keys.has(p.key)).length, hiddenNew: 0 };
}

async function runSource(src) {
  const t0 = Date.now();
  const prevPath = path.join(SNAP_DIR, `${src.id}.json`);
  const prev = fs.existsSync(prevPath) ? JSON.parse(fs.readFileSync(prevPath, "utf8")) : null;
  const ctx = {
    prev,
    baseline: !prev,
    baselineCutoff: daysAgoIso(BASELINE_DAYS),
    saveRaw: (name, text) => { try { fs.writeFileSync(path.join(RAW_DIR, `${src.id}--${name}`), text); } catch {} },
  };
  const base = {
    id: src.id, vendor: src.vendor, kind: src.kind, url: src.url || src.urlTemplate || src.hub?.url || src.base,
    reportInclude: src.reportInclude, mdChars: src.mdChars, baseline: !prev,
  };
  try {
    const handler = HANDLERS[src.kind];
    if (!handler) throw new Error(`unknown kind "${src.kind}"`);
    const { items: raw, meta } = await handler(src, ctx);
    const items = raw.map((it) => ({ ...it, text: it.text || "", hash: sha256(`${it.title}\n${it.date || ""}\n${it.text || ""}`) }));
    for (const it of items) it.windows = relevance(it);
    const d = computeDiff(src, prev, items, ctx);
    const snapshot = { id: src.id, vendor: src.vendor, kind: src.kind, fetchedAt: new Date().toISOString(), meta, items };
    return {
      ...base,
      status: d.new.length || d.changed.length ? "ok" : "no-change",
      meta,
      counts: { total: items.length, new: d.new.length, changed: d.changed.length, removed: d.removedCount, hiddenNew: d.hiddenNew },
      new: d.new,
      changed: d.changed,
      snapshot,
      ms: Date.now() - t0,
    };
  } catch (err) {
    return { ...base, status: "error", error: String(err?.message || err), counts: { total: 0, new: 0, changed: 0, removed: 0, hiddenNew: 0 }, new: [], changed: [], ms: Date.now() - t0 };
  }
}

// ------------------------------------------------------------------ diff.md rendering

const md = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\n+/g, " ");

function filterReport(s, items) {
  const re = s.reportInclude ? new RegExp(s.reportInclude, "i") : null;
  const kept = re ? items.filter((it) => re.test(`${it.title}\n${it.url}\n${it.text}`)) : items;
  return kept.slice(0, 60);
}

function renderItem(it, s) {
  const head = [`- **${md(it.title)}**`, it.date, it.url ? `<${it.url}>` : null, `Windows: ${it.windows}`].filter(Boolean).join(" — ");
  const body = excerpt(it.text, s.mdChars ?? 1500);
  return [head, ...(body ? body.split("\n").map((l) => `  > ${l}`) : []), ""];
}

function renderChanged(it, s) {
  const head = [
    `- **${md(it.title)}**`,
    it.prevDate && it.prevDate !== it.date ? `lastmod ${it.prevDate} → ${it.date}` : null,
    it.url ? `<${it.url}>` : null,
    `Windows: ${it.windows}`,
  ].filter(Boolean).join(" — ");
  const out = [head];
  const add = (it.addedLines || []).slice(0, 40), rem = (it.removedLines || []).slice(0, 10);
  if (add.length) {
    out.push("  Added:");
    for (const l of add) out.push(`  + ${excerpt(l, 400)}`);
    if (it.addedLines.length > add.length) out.push(`  + … ${it.addedLines.length - add.length} more added lines`);
  }
  if (rem.length) {
    out.push("  Removed:");
    for (const l of rem) out.push(`  - ${excerpt(l, 200)}`);
    if (it.removedLines.length > rem.length) out.push(`  - … ${it.removedLines.length - rem.length} more removed lines`);
  }
  if (!add.length && !rem.length) out.push(`  (changed; no line-level detail${it.text ? "" : " — page text not fetched"})`);
  out.push("");
  return out;
}

function noteFor(s) {
  if (s.error) return s.error;
  const bits = [`${s.counts.total} items`];
  if (s.meta?.version) bits.push(`v${s.meta.version}`);
  if (s.counts.hiddenNew) bits.push(`${s.counts.hiddenNew} older items not listed (baseline)`);
  if (s.counts.removed) bits.push(`${s.counts.removed} removed`);
  return bits.join("; ");
}

function renderMarkdown(d) {
  const L = [];
  L.push(`# Competitor watch — fetch diff ${d.runDate}`, "");
  L.push(`Period: ${d.periodStart} → ${d.periodEnd}. Sources marked *baseline* have no previous snapshot and list only items dated within the last ${d.baselineDays} days (or the newest undated items). Full item text is in diff.json.`, "");
  L.push("## Summary", "", "| Source | Vendor | Status | New | Changed | Note |", "|---|---|---|---|---|---|");
  for (const s of d.sources) L.push(`| ${s.id} | ${s.vendor} | ${s.status}${s.baseline ? " (baseline)" : ""} | ${s.counts.new} | ${s.counts.changed} | ${md(noteFor(s))} |`);
  L.push("");
  const vendors = [...new Set(d.sources.map((s) => s.vendor))];
  for (const vendor of vendors) {
    L.push(`## ${vendor}`, "");
    for (const s of d.sources.filter((x) => x.vendor === vendor)) {
      L.push(`### ${s.id} — ${s.status}${s.baseline ? " (baseline)" : ""}`, "", `Kind: ${s.kind} · Source: ${s.url}`, "");
      if (s.error) { L.push(`ERROR: ${s.error}`, ""); continue; }
      const shownNew = filterReport(s, s.new), shownChanged = filterReport(s, s.changed);
      if (!shownNew.length && !shownChanged.length) {
        L.push(s.new.length || s.changed.length ? `${s.new.length} new / ${s.changed.length} changed items, none matching the report filter.` : "No new or changed items.", "");
        continue;
      }
      if (shownNew.length) {
        L.push(`#### New (${shownNew.length}${shownNew.length !== s.new.length ? ` shown of ${s.new.length}` : ""})`, "");
        for (const it of shownNew) L.push(...renderItem(it, s));
      }
      if (shownChanged.length) {
        L.push(`#### Changed (${shownChanged.length}${shownChanged.length !== s.changed.length ? ` shown of ${s.changed.length}` : ""})`, "");
        for (const it of shownChanged) L.push(...renderChanged(it, s));
      }
    }
  }
  return L.join("\n") + "\n";
}

// ------------------------------------------------------------------ main

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const [k, v] = a.slice(2).split("=");
    if (v !== undefined) out[k] = v;
    else if (argv[i + 1] && !argv[i + 1].startsWith("--")) out[k] = argv[++i];
    else out[k] = true;
  }
  return out;
}

function previousRunDate() {
  if (!fs.existsSync("runs")) return null;
  const dates = fs.readdirSync("runs").filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && d < RUN_DATE).sort();
  return dates.length ? dates[dates.length - 1] : null;
}

async function main() {
  fs.mkdirSync(SNAP_DIR, { recursive: true });
  fs.mkdirSync(RAW_DIR, { recursive: true });
  const only = args.only ? String(args.only).split(",") : null;
  const sources = JSON.parse(fs.readFileSync("sources.json", "utf8"))
    .filter((s) => s.enabled !== false)
    .filter((s) => !only || only.includes(s.id));
  if (!sources.length) throw new Error("no sources selected");

  const results = await mapLimit(sources, 4, runSource);
  const diff = {
    runDate: RUN_DATE,
    periodStart: previousRunDate() || daysAgoIso(7),
    periodEnd: RUN_DATE,
    baselineDays: BASELINE_DAYS,
    sources: results.map(({ snapshot, ...rest }) => rest),
  };
  fs.writeFileSync(path.join(RUN_DIR, "diff.json"), JSON.stringify(diff, null, 2));
  fs.writeFileSync(path.join(RUN_DIR, "diff.md"), renderMarkdown(diff));
  if (SAVE) for (const r of results) if (r.snapshot) fs.writeFileSync(path.join(SNAP_DIR, `${r.id}.json`), JSON.stringify(r.snapshot, null, 1));

  const w = (s, n) => String(s).padEnd(n);
  console.log(`${w("source", 30)}${w("status", 12)}${w("new", 5)}${w("chg", 5)}${w("total", 7)}${w("ms", 7)}note`);
  for (const r of results) console.log(`${w(r.id, 30)}${w(r.status + (r.baseline ? "*" : ""), 12)}${w(r.counts.new, 5)}${w(r.counts.changed, 5)}${w(r.counts.total, 7)}${w(r.ms, 7)}${r.error || ""}`);
  console.log(`\nwrote ${path.join(RUN_DIR, "diff.md")}${SAVE ? " and updated snapshots/" : " (snapshots untouched)"}`);
  if (results.some((r) => r.status === "error")) process.exitCode = 3;
}

await main();
