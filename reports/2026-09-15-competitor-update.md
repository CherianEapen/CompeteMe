# MobiControl Competitor Update — pipeline verification, 15 Sep 2026

Coverage: 2026-09-15 – 2026-09-15 · Generated: 2026-09-15

## Executive summary

- This run verifies the local weekly pipeline; it is not a competitive read. All 13 sources were fetched successfully and every one returned no change against the snapshots taken earlier the same day, which is the expected result for a same-day re-run.
- The competitive content for 1–15 Sep 2026 is in the baseline report, reports/2026-09-15-baseline-competitor-update.docx. The first real weekly delta lands on Monday 21 Sep.

## Top signals

No signals rose to the top this week.

## Vendor detail

## No change this week

Microsoft Intune, Ivanti, Iru, Hexnode, 42Gears, Scalefusion, Miradore, Jamf, ManageEngine

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | no-change | 6 sections indexed |
| intune-blog | no-change | 20 posts indexed |
| iru-updates | no-change | 50 updates indexed |
| hexnode-whats-new | no-change | 23 items indexed |
| hexnode-blog | no-change | 3 product posts indexed |
| miradore-releases | no-change | 365 release pages indexed |
| 42gears-press | no-change | 103 press releases indexed |
| 42gears-docs | no-change | 928 doc pages indexed |
| jamf-pro-release-notes | no-change | Jamf Pro 11.32.0, 14 topics |
| scalefusion-release-notes | no-change | 24 releases indexed for 2026 |
| scalefusion-product-updates | no-change | 10 posts indexed |
| ivanti-quarterly-releases | no-change | Q3 and Q2 2026 pages |
| manageengine-endpoint-central | no-change | 399 Endpoint Central rows indexed |

## Appendix B. Method

Verification run of scripts/run-weekly.ps1 on 15 Sep 2026, executed on the Windows machine after the Claude Code cloud sandbox proved unable to reach any vendor site. All 13 sources fetched without error and none had changed since the baseline snapshots taken hours earlier, so there is nothing to analyse and no findings are reported. This confirms fetch, diff, render and commit work locally; the analysis step is exercised for the first time on the next scheduled run.
