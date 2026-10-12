# MobiControl Competitor Update — week ending 12 Oct 2026

Coverage: 2026-10-05 – 2026-10-12 · Generated: 2026-10-12

## Executive summary

- Windows 11 26H2 readiness became a live competitive axis this week. Microsoft published the Intune security baseline for 26H2 and added day-zero Settings Catalog support for its new policy settings; Iru declared 26H2 enrollment and target-version support the week before. MobiControl's own 26H2 position, and where a customer can read it, is the most urgent question these five reports have raised.
- Hexnode resumed shipping after eleven weeks of silence on its What's new page, with seven features including pre-approved enrollment for Windows using a mandatory serial, manufacturer and model match to prevent spoofing. The September reading that this was an engineering lull rather than a shift to pure marketing proved correct.
- Scalefusion's 1 Oct release is unusually Windows-heavy for them: self-service BitLocker key retrieval in the agent using Entra or domain credentials, plain-text logging for compliance-driven estates, and the removal of psexec and unused third-party components that were causing EDR and antivirus tools to misclassify the Scalefusion agent.
- Hexnode also added Linux patch management and a Jira ITSM integration, continuing the platform- and workflow-breadth expansion rather than deepening Windows.
- Quiet elsewhere: Iru shipped three macOS items, ManageEngine five bug fixes, and 42Gears, Jamf, Miradore and JumpCloud nothing. Ivanti's Q4 page is still absent two weeks after the quarter ended.

## Top signals

| Signal | Vendor | Why it matters | Urgency |
|---|---|---|---|
| Microsoft ships the Windows 11 26H2 security baseline and day-zero Settings Catalog support | Microsoft Intune | With Iru declaring 26H2 support last week, two vendors have now made public 26H2 claims. Customers planning 26H2 rollouts will ask what MobiControl supports and when, and the answer needs to exist before the question arrives. | Respond |
| Hexnode resumes shipping with pre-approved Windows enrollment | Hexnode | Bulk CSV pre-approval gated on a mandatory serial, manufacturer and model match is enrollment-security tooling for large Windows rollouts — and it ends an eleven-week product silence, so Hexnode is back to competing on features, not just content. | Watch |
| Scalefusion adds self-service BitLocker key retrieval in the Windows agent | Scalefusion | Users can view the BitLocker recovery key themselves using Entra or domain credentials, removing a common helpdesk ticket. Small feature, visible daily to IT operations teams. | Watch |
| Hexnode extends patch management to Linux | Hexnode | A single dashboard for Ubuntu and Fedora updates alongside Windows and macOS. Platform breadth in patching is becoming a checklist item in mixed-fleet evaluations where SOTI also competes. | Inform |

## Vendor detail

### Microsoft Intune

One new weekly section, plus two items added retroactively to the 28 Sep section. All of it is Windows 11 26H2 enablement and government-cloud expansion.

#### Intune security baseline for Windows 11, version 26H2

5 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-5-2026)

**What changed:** The Windows security baseline for Windows 11 26H2 is available in Intune, with new settings, updated default values and revised security guidance. Existing baseline profiles do not update automatically — administrators create a new profile or update an existing one to the latest version, and Microsoft advises reviewing settings before moving from a previous baseline, especially where profiles carry customisations. The Configure NetBIOS settings policy is excluded for now because it is supported only on Windows Insider builds.

**So what for MobiControl Windows:** Positioning rather than parity: Microsoft ships a curated, versioned security baseline for each Windows release, which MobiControl does not attempt and arguably should not. The practical exposure is the question behind it — whether MobiControl Windows is validated on 26H2 and can configure its new policy surface. That is worth confirming internally this week.

#### Day-zero Settings Catalog support for Windows 11 26H2, and Remote Help in GCCH

28 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-28-2026-service-release-2609)

**What changed:** Two items were added to the already-published 28 Sep section. Intune provides day-zero support in the Settings Catalog for validated Windows policy settings introduced with 26H2. Separately, Remote Help is now available in US Government Community Cloud High, extending the capability already in GCC; DoD environments are not supported.

**So what for MobiControl Windows:** Day-zero settings coverage is a structural advantage Microsoft has by owning the platform, and it is the hardest Intune claim for any third-party UEM to match on timing. The honest competitive answer is breadth and platform coverage elsewhere, not a race on Windows policy day-zero. Note also that Intune release notes are edited after publication — a second instance in two weeks.

### Hexnode

Seven features on the What's new page, the first entries since 20 July. Two are Windows, two Apple, one Android, one Linux, one a service-desk integration.

#### Pre-approved enrollment for Windows devices

25 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.hexnode.com/forums/topic/streamline-your-rollouts-pre-approved-enrollment-comes-to-windows/)

**What changed:** Bulk CSV pre-approval onboarding for Windows devices, enforcing a mandatory three-way hardware match on serial number, manufacturer name and model name to prevent spoofing and streamline large-scale deployments.

**So what for MobiControl Windows:** Worth comparing directly. MobiControl supports enrollment rules and staged groups, but the specific combination here — a pre-authorised device list uploaded in bulk, with hardware attributes required to match before a device is admitted — is how security-conscious customers want large Windows rollouts gated. If our equivalent needs assembling from several features, that is a demo-level disadvantage even where the capability exists.

#### Patch failure reasons as a consolidated report

22 Sept 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://www.hexnode.com/mobile-device-management/help/patch-and-update-reports-in-hexnode-uem/)

**What changed:** A report detailing the exact reasons a software patch failed on specific devices, intended to shorten troubleshooting.

**So what for MobiControl Windows:** Third vendor in four weeks to ship patch reporting of this kind, after Iru's per-device build status and JumpCloud's per-device KB report. The pattern is consistent enough to treat as a category expectation: administrators want to know not just which devices are unpatched but why the patch failed.

#### Linux patch management, Jira ITSM integration and Apple updates

5 Oct 2026  ·  Linux, macOS, Android  ·  Windows relevance: none · [Source](https://www.hexnode.com/forums/topic/patch-management-arrives-for-linux/)

**What changed:** Patch management for Ubuntu and Fedora in a single dashboard; automatic Jira ticket creation when Hexnode detects a device issue or security alert; macOS software updates moved to Apple's Declarative Device Management framework; Platform SSO for macOS using Entra ID or Okta; and remote eSIM profile deployment for Android.

**So what for MobiControl Windows:** Breadth expansion across platforms and into the service desk rather than depth on Windows. The Jira integration is the one to watch — pushing device issues into ITSM is how a UEM becomes embedded in a customer's operational workflow, which raises switching costs.

### Scalefusion

Release of 1 Oct (Dashboard v68.1.0, Windows MDM Agent v17.2.0, macOS Agent v6.5.12). Unusually, the Windows section leads.

#### BitLocker key visible in the agent using Entra or domain credentials

6 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://help.scalefusion.com/docs/scalefusion-october-1st-2026-release-notes)

**What changed:** Users can view the BitLocker recovery key within the Scalefusion agent by authenticating with Entra or domain credentials, on devices that are Entra or domain joined.

**So what for MobiControl Windows:** Small, concrete, and the kind of thing that wins demos. Recovery-key retrieval is a routine helpdesk ticket; letting the authenticated user self-serve removes it. Worth checking whether MobiControl surfaces BitLocker recovery keys to the user, to an administrator only, or not at all.

#### psexec and unused third-party components removed to stop EDR misclassification

6 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://help.scalefusion.com/docs/scalefusion-october-1st-2026-release-notes)

**What changed:** Scalefusion removed its use of psexec and other unused third-party components that could cause EDR, XDR or antivirus applications to incorrectly classify the Scalefusion agent. The notes still recommend adding signature- or path-based exceptions, acknowledging misclassification may persist.

**So what for MobiControl Windows:** Useful competitive intelligence, carefully used. A UEM agent that security tooling flags is a real deployment obstacle in regulated Windows estates, and Scalefusion has documented both the cause and that it is not fully resolved. If MobiControl's Windows agent does not require AV exceptions, that is a credible, verifiable differentiator — worth confirming before anyone uses it.

#### Plain-text logging for Windows

6 Oct 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://help.scalefusion.com/docs/scalefusion-october-1st-2026-release-notes)

**What changed:** Administrators can enable plain-text logging for all Scalefusion apps from Utilities, with logs rotated when the setting is toggled. Documented as intended for advanced enterprises or those whose compliance requirements dictate plain-text logs.

**So what for MobiControl Windows:** Niche but telling: compliance regimes that require readable audit logs are a real segment, and an encrypted-only log format can be a blocker. Worth knowing what format MobiControl's Windows agent logs are in and whether they can be read without vendor tooling.

### Iru

Three genuine updates, all macOS: agent releases 5.2.3 and 5.2.4, and an option for whether Custom App, Printer and Script Library Items are processed during or after Liftoff. The fetcher reported seventeen because Iru's URL migration, which began last week, moved another batch of already-published items onto the new dated URL scheme.

_No Windows-relevant changes detected this period._

### ManageEngine

Five rows on build 11.5.2627.56, all fixes and one operational enhancement.

#### Agent executables re-signed ahead of certificate expiry; OS deployment fixes

7 Oct 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** Agent executables across all modules were signed with a new digital certificate to maintain trusted verification before the existing certificate expires. Fixes covered slow software deployment package replication, package installation failing with missing files during OS deployment, manual computer name now taking priority over computer-specific settings during OS deployment, and Remote Control on macOS and Linux.

**So what for MobiControl Windows:** No competitive implication, but a useful operational reminder: agent code-signing certificate rotation is the kind of housekeeping that breaks deployments when missed. Worth confirming our own Windows agent certificate expiry is tracked.

## Cross-platform signals worth knowing

- **Hexnode:** macOS software update management moved to Apple's Declarative Device Management framework, replacing legacy MDM commands, and Platform SSO added for macOS with Entra ID or Okta. — _Completes the DDM migration that Jamf, Scalefusion and Ivanti have each reported since September. Every Apple-capable vendor tracked here has now moved; the deadline-driven platform migration is effectively done across the field._
- **Scalefusion:** A macOS maintenance fix addressed devices becoming unresponsive for 30 to 45 minutes after agent installation, regardless of agent version. — _A long-standing agent defect disclosed plainly in release notes. Worth noting how openly competitors document agent-level problems, since it sets the norm customers expect of SOTI._
- **Ivanti:** No Q4 2026 release page as of 12 Oct, two weeks after Q3 ended. — _Longer than the usual gap. Either a delayed quarterly publication or a change in how Ivanti communicates releases; worth watching one more week before reading anything into it._

## No change this week

42Gears, Jamf, Miradore, JumpCloud

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | ok | 1 new section (Week of 5 Oct); the 28 Sep section was edited again, adding 2 items |
| intune-blog | no-change |  |
| iru-updates | ok | Reported 17 new and 17 removed, but this is the second wave of the URL migration noted last week — only 3 items are dated after 5 Oct and only those are reported |
| hexnode-whats-new | ok | 7 new items, the first since 20 Jul 2026 |
| hexnode-blog | ok | 4 new posts, marketing content including a DPDPA compliance guide aimed at Indian enterprises |
| miradore-releases | no-change |  |
| 42gears-press | no-change |  |
| 42gears-docs | no-change | first week with no documentation changes since tracking began |
| jamf-pro-release-notes | no-change | still Jamf Pro 11.32.1 |
| scalefusion-release-notes | ok | 1 new release (1 Oct, Dashboard v68.1.0) |
| scalefusion-product-updates | no-change |  |
| ivanti-quarterly-releases | no-change | Q4 2026 page still not published, 2 weeks after the quarter ended |
| jumpcloud-release-notes | no-change |  |
| manageengine-endpoint-central | ok | 5 new rows on build 11.5.2627.56 |

## Appendix B. Method

Fourteen sources fetched by the scheduled run on 12 Oct 2026 and compared against the 5 Oct snapshots; all were reachable and none errored. One dating caveat carries over from last week: Iru is still migrating its release notes to a dated URL scheme, so a further 14 already-published items re-keyed and appeared as new. These were filtered by publication date, leaving the 3 genuinely new entries, and nothing is double-reported from earlier weeks. Hexnode's 7 What's new items carry publication dates from 22 Sep to 5 Oct — they were published to the page in a batch this week after an eleven-week gap, so some predate this reporting period. As in the four previous weeks the scheduled run fetched successfully but could not run its analysis step, and this report was written in-session from that run's preserved diff; the underlying data is the scheduled run's, unmodified. The cause of that analysis failure was identified today and the code fix verified, leaving only a one-time sign-in outstanding.
