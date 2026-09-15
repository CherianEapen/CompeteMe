# report.json — what the analysis step must write

Pipeline: `node scripts/fetch.mjs` → `runs/<date>/diff.md` + `diff.json` → **analysis writes `runs/<date>/report.json`** →
`node scripts/build-docx.mjs runs/<date>` → `reports/<periodEnd>-competitor-update.docx` (+ `.md`).

All strings are plain text (no Markdown). Dates are `YYYY-MM-DD`.

```json
{
  "title": "MobiControl Competitor Update — week ending 14 Sep 2026",
  "periodStart": "2026-09-08",
  "periodEnd": "2026-09-14",
  "generatedAt": "2026-09-14",
  "execSummary": ["3–5 bullets, leadership-readable. Lead with what changed and what it means for MobiControl Windows."],
  "topSignals": [
    { "headline": "Intune ships X for Windows", "vendor": "Microsoft Intune",
      "whyItMatters": "One or two sentences.", "urgency": "respond | watch | inform" }
  ],
  "vendors": [
    { "vendor": "Microsoft Intune",
      "summary": "Optional 1–2 sentence read of the vendor's week.",
      "items": [
        { "title": "Feature name",
          "date": "2026-09-10",
          "url": "https://…",
          "platforms": ["Windows"],
          "windowsRelevance": "high | medium | low",
          "whatChanged": "Factual description in the vendor's own terms.",
          "soWhatForMobiControl": "Parity gap, differentiation opportunity, roadmap signal, or explicitly none." }
      ] }
  ],
  "crossPlatformSignals": [ { "vendor": "Jamf", "signal": "…", "implication": "…" } ],
  "noChange": ["Miradore"],
  "sourceStatus": [ { "source": "intune-whats-new", "status": "ok | error | no-change", "note": "optional" } ],
  "methodology": "One paragraph: sources covered, how changes were detected, blind spots this week."
}
```

Rules
- Every vendor appears either in `vendors` (empty `items` is fine) or in `noChange`.
- `topSignals`: at most 5. `respond` = affects MobiControl Windows positioning or live deals now;
  `watch` = direction signal; `inform` = FYI.
- Windows-first. Non-Windows items belong in `crossPlatformSignals` only when they signal where a vendor is heading.
- Never invent. Every item must trace to an entry in `diff.md`. If a source errored, say so in `sourceStatus`, not in prose.
