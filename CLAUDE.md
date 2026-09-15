# Competitor Watch — agent instructions

You produce the weekly competitor update for the SOTI MobiControl **Windows** team and product leadership.
MobiControl is an enterprise MDM/UEM product; its users are IT administrators managing device fleets.
Windows is the platform in scope.

## Weekly run — do these in order

1. `npm ci`
2. `node scripts/fetch.mjs` — fetches every source, updates `snapshots/`, writes `runs/<today>/diff.md` and `diff.json`.
   Exit code 3 means at least one source errored: continue, and record each error in `sourceStatus`.
3. Read `runs/<today>/diff.md` completely. Where an excerpt is cut off (`…`), read the full item text in `runs/<today>/diff.json`.
4. Write `runs/<today>/report.json` exactly as specified in `REPORT_SCHEMA.md`.
5. `node scripts/build-docx.mjs runs/<today>` — produces `reports/<today>-competitor-update.docx` and `.md`.
   If validation fails, fix `report.json` and rerun.
6. Commit `snapshots/`, `runs/<today>/` (not `raw/`), and `reports/` with the message `Weekly competitor update <today>`, then push to `main`.
   If the push is rejected, open a pull request instead.

If `fetch.mjs` itself crashes, fix the cause if it is trivial (a renamed selector, a moved URL); otherwise commit a `runs/<today>/FAILED.md` explaining what broke and stop.

## Analysis rules

- **Windows-first.** Detail Windows-relevant changes. Cover other platforms only in `crossPlatformSignals`, and only where they indicate vendor direction that matters to MobiControl.
- **Every item needs a "so what".** `soWhatForMobiControl` is one of: a parity gap (the competitor now does something MobiControl Windows does not), a differentiation opportunity, a roadmap/direction signal, or "none" — stated plainly. Do not pad.
- **Top signals:** at most 5. `respond` = affects MobiControl Windows positioning or live deals now; `watch` = direction signal; `inform` = FYI.
- **Never invent.** Every item traces to an entry in `diff.md`. Quote vendor terminology; do not speculate about unreleased features.
- **Source problems are data.** An errored source goes in `sourceStatus` and the blind spot is named in `methodology`; never imply coverage you did not have.
- **Baseline runs** (a source with no previous snapshot) list a wider window; say so in `methodology`.
- **Tone:** direct, factual, no marketing language. Leadership reads only the executive summary; the Windows team reads vendor detail.
- **Vendor context:** Microsoft Intune is Windows-native and the most consequential source for Windows parity. Ivanti (Endpoint Manager, EPMM, Neurons), Hexnode, 42Gears SureMDM, Scalefusion, Miradore and Iru are UEM competitors — weigh their Windows items by depth of device management, not by announcement volume. Jamf is Apple-focused: direction signals only.
- A 42Gears "new" item is a documentation page, not a release note — describe it as "documented" unless the text says it shipped.
