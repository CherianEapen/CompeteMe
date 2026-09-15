// Render runs/<date>/report.json into reports/<periodEnd>-competitor-update.docx and .md
// usage: node scripts/build-docx.mjs runs/YYYY-MM-DD [outDir]
import fs from "node:fs";
import path from "node:path";
import {
  AlignmentType, BorderStyle, Document, ExternalHyperlink, Footer, HeadingLevel, Packer, PageNumber,
  Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType,
} from "docx";

// ---------------------------------------------------------------- validation
function validate(r) {
  const p = [];
  const req = (k, type) => {
    if (r[k] === undefined || r[k] === null) p.push(`missing "${k}"`);
    else if (type === "array" && !Array.isArray(r[k])) p.push(`"${k}" must be an array`);
    else if (type === "string" && typeof r[k] !== "string") p.push(`"${k}" must be a string`);
  };
  req("title", "string"); req("periodStart", "string"); req("periodEnd", "string");
  req("execSummary", "array"); req("topSignals", "array"); req("vendors", "array"); req("sourceStatus", "array");
  for (const [i, s] of (r.topSignals || []).entries()) {
    if (!s.headline) p.push(`topSignals[${i}].headline missing`);
    if (!["respond", "watch", "inform"].includes(s.urgency)) p.push(`topSignals[${i}].urgency must be respond|watch|inform`);
  }
  for (const [i, v] of (r.vendors || []).entries()) {
    if (!v.vendor) p.push(`vendors[${i}].vendor missing`);
    if (!Array.isArray(v.items)) { p.push(`vendors[${i}].items must be an array`); continue; }
    for (const [j, it] of v.items.entries()) {
      for (const k of ["title", "whatChanged", "soWhatForMobiControl"]) if (!it[k]) p.push(`vendors[${i}].items[${j}].${k} missing`);
    }
  }
  return p;
}

// ---------------------------------------------------------------- docx building blocks
const NAVY = "1F3864", BLUE = "2E5496", GREY = "595959", LIGHT = "F2F2F2";
const URGENCY = {
  respond: { label: "Respond", fill: "F8CBAD" },
  watch: { label: "Watch", fill: "FFE699" },
  inform: { label: "Inform", fill: "C6E0B4" },
};

const run = (text, o = {}) => new TextRun({ text: String(text ?? ""), ...o });
const para = (children, o = {}) =>
  new Paragraph({ children: Array.isArray(children) ? children : [run(children)], spacing: { after: 120 }, ...o });
const heading = (text, level) => new Paragraph({ children: [run(text)], heading: level });
const bullet = (children, level = 0) =>
  new Paragraph({ children: Array.isArray(children) ? children : [run(children)], bullet: { level }, spacing: { after: 60 } });
const hyperlink = (text, url) => new ExternalHyperlink({ children: [run(text, { style: "Hyperlink" })], link: url });

const thin = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };
const cell = (content, { width, fill, bold } = {}) =>
  new TableCell({
    children: Array.isArray(content) ? content : [para([run(content, { bold })], { spacing: { after: 0 } })],
    width: width ? { size: width, type: WidthType.PERCENTAGE } : undefined,
    shading: fill ? { fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
  });
const headerRow = (cols) =>
  new TableRow({ tableHeader: true, children: cols.map(([t, w]) => cell(t, { width: w, fill: LIGHT, bold: true })) });
const table = (rows) => new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders, rows });

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00Z` : iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

function itemMeta(it) {
  return [
    it.date ? fmtDate(it.date) : null,
    it.platforms?.length ? it.platforms.join(", ") : null,
    it.windowsRelevance ? `Windows relevance: ${it.windowsRelevance}` : null,
  ].filter(Boolean).join("  ·  ");
}

function buildDoc(r) {
  const c = [];
  let n = 0;
  const section = (t) => heading(`${++n}. ${t}`, HeadingLevel.HEADING_1);

  c.push(new Paragraph({ children: [run(r.title)], heading: HeadingLevel.TITLE }));
  c.push(para([
    run(`Coverage: ${fmtDate(r.periodStart)} – ${fmtDate(r.periodEnd)}`, { color: GREY }),
    run(`   ·   Generated: ${fmtDate(r.generatedAt || r.periodEnd)}`, { color: GREY }),
  ]));
  c.push(para([run(
    "Prepared for the MobiControl Windows team and product leadership. Windows-first: Windows-relevant changes in detail; " +
    "other platforms noted only where they signal direction.",
    { italics: true, color: GREY, size: 20 },
  )]));

  c.push(section("Executive summary"));
  for (const b of r.execSummary) c.push(bullet(b));

  c.push(section("Top signals"));
  if (r.topSignals.length) {
    c.push(table([
      headerRow([["Signal", 34], ["Vendor", 14], ["Why it matters to MobiControl", 40], ["Urgency", 12]]),
      ...r.topSignals.map((s) => new TableRow({ children: [
        cell(s.headline, { width: 34 }),
        cell(s.vendor || "", { width: 14 }),
        cell(s.whyItMatters || "", { width: 40 }),
        cell(URGENCY[s.urgency].label, { width: 12, fill: URGENCY[s.urgency].fill, bold: true }),
      ] })),
    ]));
  } else {
    c.push(para("No signals rose to the top this week."));
  }

  c.push(section("Vendor detail"));
  for (const v of r.vendors) {
    c.push(heading(v.vendor, HeadingLevel.HEADING_2));
    if (v.summary) c.push(para(v.summary));
    if (!v.items.length) c.push(para([run("No Windows-relevant changes detected this period.", { italics: true, color: GREY })]));
    for (const it of v.items) {
      c.push(heading(it.title, HeadingLevel.HEADING_3));
      const meta = itemMeta(it);
      if (meta || it.url) {
        const parts = [run(meta, { color: GREY, size: 18 })];
        if (it.url) parts.push(run(meta ? "  ·  " : "", { color: GREY, size: 18 }), hyperlink("Source", it.url));
        c.push(para(parts));
      }
      c.push(para([run("What changed: ", { bold: true }), run(it.whatChanged)]));
      c.push(para([run("So what for MobiControl Windows: ", { bold: true, color: BLUE }), run(it.soWhatForMobiControl)]));
    }
  }

  if (r.crossPlatformSignals?.length) {
    c.push(section("Cross-platform signals worth knowing"));
    for (const s of r.crossPlatformSignals) {
      c.push(bullet([run(`${s.vendor}: `, { bold: true }), run(s.signal), run(s.implication ? ` — ${s.implication}` : "", { italics: true })]));
    }
  }
  if (r.noChange?.length) {
    c.push(section("No change this week"));
    c.push(para(r.noChange.join(", ")));
  }

  c.push(heading("Appendix A. Source status", HeadingLevel.HEADING_1));
  c.push(table([
    headerRow([["Source", 40], ["Status", 15], ["Note", 45]]),
    ...r.sourceStatus.map((s) => new TableRow({ children: [
      cell(s.source, { width: 40 }),
      cell(s.status, { width: 15, fill: s.status === "error" ? "F8CBAD" : undefined }),
      cell(s.note || "", { width: 45 }),
    ] })),
  ]));
  if (r.methodology) {
    c.push(heading("Appendix B. Method", HeadingLevel.HEADING_1));
    c.push(para(r.methodology));
  }

  const hstyle = (id, name, size, color, before, outlineLevel) => ({
    id, name, basedOn: "Normal", next: "Normal", quickFormat: true,
    run: { size, bold: true, color, font: "Calibri" },
    paragraph: { spacing: { before, after: 100 }, outlineLevel },
  });

  return new Document({
    creator: "MobiControl Competitor Watch",
    title: r.title,
    description: "Weekly competitor update for the MobiControl Windows team",
    styles: {
      default: { document: { run: { font: "Calibri", size: 22 } } },
      paragraphStyles: [
        { id: "Title", name: "Title", basedOn: "Normal", run: { size: 40, bold: true, color: NAVY, font: "Calibri" }, paragraph: { spacing: { after: 120 } } },
        hstyle("Heading1", "Heading 1", 30, NAVY, 360, 0),
        hstyle("Heading2", "Heading 2", 26, BLUE, 280, 1),
        hstyle("Heading3", "Heading 3", 23, "404040", 200, 2),
      ],
    },
    sections: [{
      properties: { page: { margin: { top: 1080, bottom: 1080, left: 1260, right: 1260 } } },
      footers: {
        default: new Footer({ children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            run("SOTI internal · MobiControl Competitor Watch · page ", { size: 16, color: "808080" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "808080" }),
          ],
        })] }),
      },
      children: c,
    }],
  });
}

// ---------------------------------------------------------------- markdown twin
const md = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\n+/g, " ");

function buildMarkdown(r) {
  const L = [];
  L.push(`# ${r.title}`, "", `Coverage: ${r.periodStart} – ${r.periodEnd} · Generated: ${r.generatedAt || r.periodEnd}`, "");
  L.push("## Executive summary", "", ...r.execSummary.map((b) => `- ${b}`), "");
  L.push("## Top signals", "");
  if (r.topSignals.length) {
    L.push("| Signal | Vendor | Why it matters | Urgency |", "|---|---|---|---|");
    for (const s of r.topSignals) L.push(`| ${md(s.headline)} | ${md(s.vendor)} | ${md(s.whyItMatters)} | ${URGENCY[s.urgency].label} |`);
  } else L.push("No signals rose to the top this week.");
  L.push("", "## Vendor detail", "");
  for (const v of r.vendors) {
    L.push(`### ${v.vendor}`, "");
    if (v.summary) L.push(v.summary, "");
    if (!v.items.length) L.push("_No Windows-relevant changes detected this period._", "");
    for (const it of v.items) {
      L.push(`#### ${it.title}`, "");
      const meta = itemMeta(it);
      if (meta || it.url) L.push([meta, it.url ? `[Source](${it.url})` : ""].filter(Boolean).join(" · "), "");
      L.push(`**What changed:** ${it.whatChanged}`, "", `**So what for MobiControl Windows:** ${it.soWhatForMobiControl}`, "");
    }
  }
  if (r.crossPlatformSignals?.length) {
    L.push("## Cross-platform signals worth knowing", "");
    for (const s of r.crossPlatformSignals) L.push(`- **${s.vendor}:** ${s.signal}${s.implication ? ` — _${s.implication}_` : ""}`);
    L.push("");
  }
  if (r.noChange?.length) L.push("## No change this week", "", r.noChange.join(", "), "");
  L.push("## Appendix A. Source status", "", "| Source | Status | Note |", "|---|---|---|");
  for (const s of r.sourceStatus) L.push(`| ${md(s.source)} | ${s.status} | ${md(s.note || "")} |`);
  if (r.methodology) L.push("", "## Appendix B. Method", "", r.methodology);
  return L.join("\n") + "\n";
}

// ---------------------------------------------------------------- main
async function main() {
  const [runDir, outDirArg] = process.argv.slice(2);
  if (!runDir) {
    console.error("usage: node scripts/build-docx.mjs runs/YYYY-MM-DD [outDir]");
    process.exit(1);
  }
  const report = JSON.parse(fs.readFileSync(path.join(runDir, "report.json"), "utf8"));
  const problems = validate(report);
  if (problems.length) {
    console.error("report.json is invalid:\n - " + problems.join("\n - "));
    process.exit(2);
  }
  const outDir = outDirArg || "reports";
  fs.mkdirSync(outDir, { recursive: true });
  const baseName = `${report.periodEnd}-competitor-update`;
  const docxPath = path.join(outDir, `${baseName}.docx`);
  const mdPath = path.join(outDir, `${baseName}.md`);
  fs.writeFileSync(docxPath, await Packer.toBuffer(buildDoc(report)));
  fs.writeFileSync(mdPath, buildMarkdown(report));
  console.log(`wrote ${docxPath}\nwrote ${mdPath}`);
}

await main();
