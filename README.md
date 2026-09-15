# MobiControl Competitor Watch

Weekly competitor intelligence for the SOTI MobiControl Windows team. A scheduled Claude Code cloud routine
clones this repository every Monday, runs the fetcher, analyses what changed since last week, and commits a Word report.

## How it works

```
sources.json ─► scripts/fetch.mjs ─► snapshots/ (memory)
                                   └► runs/<date>/diff.md + diff.json
                                            │  analysis (CLAUDE.md rules)
                                            ▼
                                      runs/<date>/report.json ─► scripts/build-docx.mjs ─► reports/<date>-competitor-update.docx + .md
```

| Path | Purpose |
|---|---|
| `sources.json` | The competitor sources and how each one is read (see *Source kinds*). |
| `scripts/fetch.mjs` | Fetches every source, normalises it into items, diffs against `snapshots/`, writes the run's diff. |
| `snapshots/<id>.json` | Last known state per source. Committed — this is the agent's memory between runs. |
| `runs/<date>/` | One folder per run: `diff.md` (for the analyst), `diff.json` (full text), `report.json` (the analysis). `raw/` is ignored by git. |
| `scripts/build-docx.mjs` | Renders `report.json` into `.docx` and `.md` under `reports/`. |
| `CLAUDE.md` | The instructions the routine follows. `REPORT_SCHEMA.md` is the `report.json` contract. |

## Run locally

```bash
npm ci
node scripts/fetch.mjs --no-save          # dry run: writes runs/<today>/ but leaves snapshots/ alone
node scripts/fetch.mjs                    # real run: also updates snapshots/
node scripts/build-docx.mjs runs/<today>  # once runs/<today>/report.json exists
```

Flags: `--only id1,id2` (subset of sources), `--date YYYY-MM-DD` (run folder name), `--baseline-days N`
(default 14 — the look-back window used when a source has no snapshot yet).

## Source kinds

| kind | Reads | Used for |
|---|---|---|
| `rss` | RSS/Atom feed; new entries by GUID | Intune blog, Iru updates, Hexnode blog, Scalefusion product updates |
| `html-sections` | One page split by headings; new or edited sections | Intune "What's new" |
| `link-list` | An index of links; new links are fetched for their text | Miradore releases, 42Gears press releases |
| `sitemap` | `sitemap.xml`; new URLs and changed `lastmod`, matching pages fetched | 42Gears SureMDM docs |
| `jamf-khub` | Fluid Topics API: newest "Jamf Pro Release Notes" map → topics | Jamf Pro |
| `next-data` | Items embedded in a Next.js page's `__NEXT_DATA__` | Hexnode "What's new" |
| `d360-index` | Document360 release index, then each new release's page body | Scalefusion release notes |
| `html-blocks` | Title/content element pairs, optionally across pages linked from a hub | Ivanti quarterly releases |
| `csv` | A CSV of dated release-note rows behind a vendor page | ManageEngine Endpoint Central (hotfix readme feed) |

Each item carries a `windows` relevance hint (`high` / `medium` / `none`) computed from keywords — a hint for the analyst, not a filter.

## Adding or fixing a source

1. Probe the URL with `curl`: is the content in the HTML, in a feed, in embedded JSON, or behind an API?
2. Add or edit the entry in `sources.json` with the matching kind, then `node scripts/fetch.mjs --no-save --only <id>` and read `runs/<today>/diff.md`.
3. Commit. The next weekly run baselines the source automatically.

## Known limitations

- Public vendor pages only. Analyst content (Gartner, IDC) and gated portals are out of scope.
- If a vendor restructures its site, that source fails; the run continues and the report's *Source status* table flags it.
- 42Gears SureMDM publishes no release notes; new or updated documentation pages are used as the release signal (Windows-related pages only in the report).
- Scalefusion's release-notes page renders client-side; the release index and per-release pages are read from the server-side state instead.

## Scheduling (Windows Task Scheduler)

The weekly run happens on Cherian's Windows machine, driven by `scripts/run-weekly.ps1`:

- Task **MobiControl Competitor Watch**, Mondays **10:00 Asia/Kolkata**, runs while logged on; if the
  machine was off at 10:00 it runs at the next opportunity.
- The script runs `npm ci`, the fetcher, then Claude Code headlessly for the analysis step
  (Read/Write/Glob/Grep only — it cannot run commands or touch git), then renders the Word report,
  commits and pushes.
- Each run appends to `logs/<date>.log` (git-ignored). Exit codes: `2` fetch produced no diff,
  `3` analysis failed or the CLI is not signed in, `4` every source errored, `5` render failed,
  `6`/`7` commit or push failed.

One-time prerequisite — the bundled Claude Code CLI keeps its own credentials and must be signed in once
(`scripts/run-weekly.ps1` aborts with exit 3 until it is):

```powershell
& (Get-ChildItem "$env:APPDATA\Claude\claude-code\*\claude.exe" | Sort-Object LastWriteTime -Descending)[0].FullName auth login
```

Register, inspect or trigger the task (the helper converts the XML to the UTF-16 `schtasks`
requires and points the task at this clone's path):

```powershell
powershell -ExecutionPolicy Bypass -File scripts\register-task.ps1
```

```powershell
schtasks /query /tn "MobiControl Competitor Watch" /v /fo list
```

```powershell
schtasks /run /tn "MobiControl Competitor Watch"
```

Run a week by hand instead:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\run-weekly.ps1
```

### Why not a cloud routine

A Claude Code cloud routine (`trig_01BZSLq8sPNGVhqTJ2wAM57J`) was built first and cannot work: the cloud
sandbox's egress proxy denies `CONNECT` to every non-allowlisted host, so all 13 vendor sites return HTTP 403
(`api.github.com` and `registry.npmjs.org` are allowed; `example.com` is not). Declaring the URLs on the
routine does not change it, and Claude's GitHub App has only read access, so a cloud run cannot push either.
The routine is left enabled as a canary — if one of its runs ever fetches successfully, the cloud option is
back on the table.
