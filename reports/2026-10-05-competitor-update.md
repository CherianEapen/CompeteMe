# MobiControl Competitor Update — week ending 5 Oct 2026

Coverage: 2026-09-28 – 2026-10-05 · Generated: 2026-10-06

## Executive summary

- Three competitors moved into endpoint security functions in the same week: 42Gears shipped Just-In-Time local admin elevation for Windows, Scalefusion launched Veltar Vulnerability Management covering Windows OS and application vulnerabilities, and Hexnode added threat intelligence and automated remediation to its XDR. With Ivanti's Predictive Remediation and ManageEngine's Patch Reliability Score from earlier reports, five of the nine tracked vendors now sell security capability alongside device management.
- 42Gears' JIT Admin is the sharpest item: time-bound local administrator rights on Windows with an approval workflow and pre-approved app list, Enterprise tier only. Privilege elevation is a named requirement in Windows RFPs — Microsoft sells it as Endpoint Privilege Management — so this is a comparison MobiControl will be asked to answer.
- Iru now supports Windows 11 26H2 for enrollment and as a Managed OS target version. Worth confirming MobiControl's own 26H2 readiness and how quickly we state support publicly, since that claim is being made in-market now.
- 42Gears also connected SureIdP to Microsoft Entra as an External Authentication Method, enforcing its own MFA and device-based access policies for Entra-protected applications. Last month it looked like a replacement identity provider; this positions it as an addition to the customer's existing Entra estate, which is a far easier sale.
- Microsoft was quiet: no new weekly section, only an edit to the 28 Sep one, plus the routine monthly blog recap. Jamf, Miradore and Ivanti unchanged — Ivanti's Q4 page had not appeared by 5 Oct despite the quarter ending 30 Sep.

## Top signals

| Signal | Vendor | Why it matters | Urgency |
|---|---|---|---|
| 42Gears ships Just-In-Time local admin elevation for Windows | 42Gears | Time-bound admin rights with an approval workflow directly addresses the least-privilege requirement that appears in Windows security reviews. Microsoft charges for the equivalent via Endpoint Privilege Management, so a UEM competitor bundling it changes the comparison. | Respond |
| Iru declares support for Windows 11 26H2 | Iru | Enrollment support plus a Managed OS Library Item targeting 26H2. Speed of stated support for a new Windows feature release is visible to customers and easy to compare; our own 26H2 position should be known before a prospect asks. | Respond |
| Scalefusion launches Veltar Vulnerability Management across Windows and macOS | Scalefusion | Continuous vulnerability scanning tied to patch remediation inside the same console. The third vendor in six weeks to fold vulnerability or patch intelligence into UEM, which is becoming the category's expansion direction. | Watch |
| 42Gears SureIdP becomes an Entra External Authentication Method | 42Gears | Rather than replacing Entra, SureIdP now layers its MFA and device-based access policies onto Entra-protected apps with just-in-time user provisioning. A much lower-friction route into accounts that already run Entra. | Watch |
| Hexnode XDR gains threat intelligence, alert prioritisation and automated remediation | Hexnode | First product news from Hexnode since 20 July, and it is security rather than device management — consistent with the category-wide shift. | Inform |

## Vendor detail

### 42Gears

The busiest vendor this week. No press releases, but the documentation shows a Windows privilege-elevation feature, continued SureIdP expansion, and a revised Windows kiosk profile. Twelve new pages are mostly Apple migration guides and Android account settings, which are not Windows-relevant.

#### SureMDM Just-In-Time (JIT) Admin for Windows

24 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/suremdm-jit/suremdm-jit-admin)

**What changed:** Grants temporary, time-bound local administrator access on managed Windows devices to enforce least privilege, instead of permanent admin rights. Configured from Security > SureMDM JIT Admin > Windows, with optional email notification to administrators holding the Approve/Deny JIT Requests permission, a Pre-Approved Apps list, and Active and Scheduled Requests tabs. Documented as Enterprise tier only, requiring SureMDM Agent 6.10.0 or later. Disabling the feature can take up to 12 hours to revoke access unless entries are removed manually first.

**So what for MobiControl Windows:** Likely parity gap — verify. Removing standing local admin rights is a standard Windows hardening requirement, and the usual objection to doing it is that users then cannot install anything. A UEM-native elevation workflow answers that objection. If MobiControl has no equivalent, this is a feature competitors can raise in security-led evaluations; if it does, it is not currently positioned against this.

#### SureIdP as a Microsoft Entra External Authentication Method

24 Sept 2026  ·  Windows, macOS, Linux  ·  Windows relevance: medium · [Source](https://docs.42gears.com/suremdm/system-settings/system-settings/account-settings/sureidp/applications/ms-entra-id-eam)

**What changed:** SureIdP can act as an External Authentication Method for Microsoft Entra ID: Entra remains the primary identity provider while SureIdP performs policy-based external authentication, enforcing its own MFA, device-based access controls and authentication policies for Entra-protected applications, with just-in-time user provisioning on first authentication. Requires Entra ID Premium P1 or P2 and SureAuth enabled on the devices.

**So what for MobiControl Windows:** Sharpens the competitive read from two weeks ago. SureIdP is no longer only a rip-and-replace identity play that most Entra customers would reject; it can be sold as device-aware MFA layered onto the identity stack they already have. That makes 42Gears' identity expansion materially more likely to land in enterprise accounts.

#### Windows kiosk profile documented on Microsoft Assigned Access

21 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/windows-jobs-and-profiles/profiles-for-windows/kiosk-profile)

**What changed:** The Windows Kiosk Profile is documented as supporting Single App and Multi App kiosk modes built on Microsoft Assigned Access, with control over user logon type including auto-logon, app execution, taskbar and Start menu layouts, and File Explorer restrictions.

**So what for MobiControl Windows:** Kiosk lockdown on Windows is core SOTI territory, so the detail matters: 42Gears is building on Microsoft Assigned Access rather than a proprietary shell. Worth knowing whether MobiControl's Windows kiosk differentiates on capability beyond Assigned Access, because that is the comparison a technical evaluator will make.

#### Autopilot dual-enrollment guidance revised

21 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/windows-device-enrollment/autopilot-enrollment/deploying-suremdm-agent-dual-enrollment)

**What changed:** Updated guidance that devices enrolling through Autopilot via SureMDM arrive as EMM-enrolled, and that dual enrollment — deploying the SureMDM agent on top — is recommended to get full Windows management functionality.

**So what for MobiControl Windows:** Confirms 42Gears' Windows depth still depends on its agent rather than MDM alone, the same architecture MobiControl uses. Useful context: the agent-versus-MDM-only argument is one both vendors make against Intune, not against each other.

### Scalefusion

Release of 25 Sep (Dashboard v68.0.0, Windows MDM Agent v17.1.6) led by a new product, announced on the blog the same week.

#### Veltar Vulnerability Management

30 Sept 2026  ·  Windows, macOS  ·  Windows relevance: high · [Source](https://help.scalefusion.com/docs/scalefusion-september-25th-2026-release-notes)

**What changed:** Continuously scans enrolled devices for vulnerabilities based on reported OS versions and applications, with an overview dashboard by application, OS or device. For Windows OS vulnerabilities where patch availability cannot be determined, administrators are redirected to the Update & Patch screen for self-remediation; for Windows application vulnerabilities, they are directed to a matching patch in Windows App Patches where one exists, and told when none is available. macOS paths are more automated, patching directly through macOS update management or the App Catalog. Offered as a feature flag.

**So what for MobiControl Windows:** Watch rather than match. Note the asymmetry Scalefusion itself documents: the Windows remediation path is largely a hand-off to the existing patch screen, while macOS is end to end. The announcement is stronger than the Windows implementation, which is useful if this appears in a competitive comparison. The strategic point stands — detection and remediation in one console is where the category is heading.

### Iru

Fifteen genuine updates this week, back to a Windows cadence after a quiet week. Also a batch of catalog additions (Auto Apps including Microsoft 365 Copilot and Parallels Desktop 27), an expanded Identity activity log, and several Apple items.

#### Windows 11 26H2 support, including a Managed OS target

2 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.iru.com/updates/iru-now-supports-windows-11-26h2)

**What changed:** Devices running Windows 11 26H2 can be enrolled, and a new Managed OS Library Item for 26H2 lets teams set it as the target version to keep devices on a consistent supported release.

**So what for MobiControl Windows:** Two questions, both answerable internally rather than from this report. First, is MobiControl Windows validated on 26H2, and is that stated anywhere a customer can find it? Second, can an administrator set a target Windows build and hold devices at it, which is the capability Iru is marketing here. Assumption flagged: I do not know MobiControl's current 26H2 status, so this is a prompt to check, not a claimed gap.

#### Iru Agent for Windows 1.23.7 and new Windows Auto Apps

2 Oct 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://www.iru.com/updates/iru-agent-for-windows-release-1.23.7)

**What changed:** Agent release 1.23.7 with bug fixes and performance improvements, and additional Windows Auto Apps added to the catalog for all Iru Endpoint customers.

**So what for MobiControl Windows:** None individually. Cumulatively, Iru has now shipped Windows work in four of the five weeks covered by this report — the Windows push is sustained, not opportunistic.

### Hexnode

First product news since 20 July, delivered through the blog rather than the What's new page, which remains unchanged.

#### Hexnode XDR adds threat intelligence, alert prioritisation and automated remediation

30 Sept 2026  ·  Windows, macOS  ·  Windows relevance: medium · [Source](https://www.hexnode.com/blogs/hexnode-xdr-adds-threat-intelligence-alert-prioritization-and-automated-remediation/)

**What changed:** Threat intelligence, prioritisation of alerts and automated remediation added to Hexnode XDR, which covers Windows and macOS endpoints.

**So what for MobiControl Windows:** Confirms the September reading that Hexnode's investment is going into security and MSP rather than core device management. For MobiControl the relevant question is not XDR parity but whether buyers start requiring UEM and endpoint security from one vendor.

#### Continued MSP and comparison content

1 Oct 2026  ·  Windows, Android, Linux, macOS  ·  Windows relevance: low · [Source](https://www.hexnode.com/blogs/5-real-world-wildcard-policy-examples-in-hexnode/)

**What changed:** Three further posts: wildcard policy examples, iOS workflow automation, and a digital signage hardware comparison across Android, Windows, Linux and Apple platforms.

**So what for MobiControl Windows:** The digital signage piece is worth noting only because signage and kiosk are adjacent to SOTI's strongholds, and comparison content of this kind is usually written to capture evaluation-stage search traffic.

### JumpCloud

Two entries, both mostly identity. One touches managed Windows devices.

#### Automatic device registration for JumpCloud Go

30 Sept 2026  ·  Windows, macOS, Linux  ·  Windows relevance: medium · [Source](https://jumpcloud.com/support/release-notes-2026#september-30th-2026)

**What changed:** Managed Windows, macOS and Linux devices bound to a user now register for JumpCloud Go automatically after user sign-in, removing manual browser registration prompts. Administrators can control eligibility with device exclusion groups, with fallback to manual registration. The same entry adds a Custom Banned Password List and user-created folders in the User Portal.

**So what for MobiControl Windows:** None directly — this is identity enrollment friction, not device management. Noted because it shows JumpCloud using device management as the delivery mechanism for identity, the mirror image of 42Gears using identity to extend device management.

### Microsoft Intune

No new weekly section this week; the Week of 28 Sep section was edited after publication, with the Android eSIM bulk-management item removed. The monthly blog recap covers ground already reported.

#### September monthly recap; Android eSIM item withdrawn

29 Sept 2026  ·  Windows, Android, iOS, macOS  ·  Windows relevance: low · [Source](https://techcommunity.microsoft.com/t5/microsoft-intune-blog/what-s-new-in-microsoft-intune-september/ba-p/4537394)

**What changed:** The September recap highlights deployment plans for staged rollout and the extension of Enterprise Application Management, Cloud PKI and Remote Help into government cloud environments, building on Advanced Analytics and Endpoint Privilege Management in July. Separately, the bulk eSIM management item for corporate-owned Android Enterprise devices was removed from the Week of 28 Sep release notes after publication.

**So what for MobiControl Windows:** No new capability. The withdrawn eSIM item is worth remembering only as a caution: Intune release notes are edited after the fact, so a feature seen one week may be pulled the next. Microsoft's Endpoint Privilege Management being called out alongside 42Gears' new JIT Admin underlines that privilege elevation is now an expected UEM capability.

### ManageEngine

Five minor rows, no features.

#### Drive mapping credentials and software install-location reporting

24 Jun 2026  ·  Windows  ·  Windows relevance: low · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** Drive Mapping Configuration supports custom credentials for SMB network drives with automatic remapping at user logon, and software installation alerts now include the install location. Plus fixes to Firefox extension management, query reports and role-based access.

**So what for MobiControl Windows:** None. Routine maintenance in the 11.5.2627 service pack already covered last week.

## Cross-platform signals worth knowing

- **Iru:** Shipped a dynamic timeline view for Apple Managed OS showing when an update will be enforced and to which version, plus Safari extension management and new Siri and Apple Intelligence restrictions. — _The timeline view is the interesting one: making update enforcement dates visible rather than inferred. That is a usability idea that applies equally to Windows update rings._
- **JumpCloud:** Added App Settings Privacy policies for Apple MDM, recommending privacy permission defaults so users see a consolidated consent prompt — the same pattern Iru shipped for iPhone and iPad the week before. — _Two vendors independently shipping consolidated privacy consent in two weeks suggests Apple's permission prompts are a recognised friction point being competed on._
- **42Gears:** Published a set of Apple migration guides covering ADE server assignment and iOS and macOS device migration. — _Migration tooling is written to take devices from an incumbent. Worth knowing whether comparable guides exist aimed at MobiControl._
- **Ivanti:** No Q4 2026 release page as of 5 Oct, although Q3 ended on 30 September. — _Ivanti publishes quarterly, so the next substantive Ivanti entry is pending rather than absent. Expect it within the next few weeks._

## No change this week

Jamf, Miradore

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | ok | No new section; the Week of 28 Sep section was edited and one Android item removed |
| intune-blog | ok | 1 new post, the September monthly recap |
| iru-updates | ok | Reported 49 new and 49 removed, but this is an artefact: Iru changed its URL scheme (for example /updates/whats-new-in-iru-september-25th became /updates/whats-new-in-iru/2026/10/02), so every item re-keyed at once. Filtering by publication date gives 15 genuinely new items, which is what this report covers |
| hexnode-whats-new | no-change | newest item still 20 Jul 2026 |
| hexnode-blog | ok | 4 new posts, one of them genuine product news |
| miradore-releases | no-change |  |
| 42gears-press | no-change |  |
| 42gears-docs | ok | 12 new and 15 changed; the Windows-relevant changes are JIT Admin, SureIdP EAM, the kiosk profile and Autopilot dual enrollment |
| jamf-pro-release-notes | no-change | still Jamf Pro 11.32.1 |
| scalefusion-release-notes | ok | 1 new release (25 Sep, Dashboard v68.0.0) |
| scalefusion-product-updates | ok | 1 new post announcing Veltar Vulnerability Management |
| ivanti-quarterly-releases | no-change | Q4 2026 page not yet published despite the quarter ending 30 Sep |
| jumpcloud-release-notes | ok | 2 new entries |
| manageengine-endpoint-central | ok | 5 new rows, no features |

## Appendix B. Method

Fourteen sources fetched by the scheduled run on 5 Oct 2026 and compared against the 28 Sep snapshots; all were reachable and none errored. One data caveat materially affects the counts: Iru changed its release-note URL scheme during the week, so all fifty items re-keyed and the fetcher reported 49 new and 49 removed. Those were filtered by publication date to the 15 entries actually published since 28 Sep, and only those are analysed here; the same filtering means no Iru item is double-reported from previous weeks. 42Gears publishes no release notes, so its documentation changes are the release signal and are described as documented rather than announced. As in the three previous weeks the scheduled run completed its fetch but could not run the analysis step, so this report was written in-session from that run's preserved diff; the underlying data is the scheduled run's, unmodified.
