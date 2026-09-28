# MobiControl Competitor Update — week ending 28 Sep 2026

Coverage: 2026-09-21 – 2026-09-28 · Generated: 2026-09-28

## Executive summary

- Microsoft opened a self-service path for third-party MDM vendors to become Intune compliance partners — build, test and onboard a compliance connector, with admins opting in by entering the vendor's details. This is the most directly actionable item in three weeks of reports and it belongs to SOTI, not to a competitor.
- Intune service release 2609 also adds deployment plans: staged, ring-based rollout of Win32 apps, settings catalog and endpoint security policies with Multiple Admin Approval. Staged rollout is core operational tooling that enterprise Windows buyers increasingly expect by default.
- JumpCloud, added to this report this week, arrives with credible Windows patch management: a Windows patch dashboard with KB-level control and CVE detail, bulk remediation, and a per-device KB status report. For a vendor usually filed under identity, that is a direct overlap with MobiControl Windows patching.
- ManageEngine's service pack 11.5.2627 reached the release feed carrying Windows OS deployment improvements, a Patch Reliability Score, and dedicated Windows Feature Pack deployment workflows.
- 42Gears documented malware scanning for Windows (MTD for Windows), extending its threat-defence product from mobile onto the Windows desktop. Iru, Hexnode, Jamf, Scalefusion and Ivanti shipped nothing for Windows this week.

## Top signals

| Signal | Vendor | Why it matters | Urgency |
|---|---|---|---|
| Intune opens self-service onboarding for MDM compliance partners | Microsoft Intune | A documented, self-service route for a third-party MDM to become an Intune device-compliance partner. This is an opportunity for MobiControl rather than a competitive threat, and it sits on the same integration this report has twice flagged for verification. | Respond |
| Intune adds deployment plans for staged, ring-based rollout | Microsoft Intune | Phased rollout across rings with timing control and Multiple Admin Approval, covering Win32 apps, settings catalog and endpoint security policies. Large Windows fleets treat ring-based rollout as a baseline requirement in RFPs. | Respond |
| JumpCloud ships Windows patch dashboards and per-device KB reporting | JumpCloud | An identity-first vendor now offers KB-level Windows patch control with CVE detail, bulk remediation and per-device Installed/Pending/Failed reporting. It widens the field of vendors credible on Windows patching. | Watch |
| ManageEngine SP 11.5.2627 brings patch intelligence and Windows Feature Pack workflows | ManageEngine | A Patch Reliability Score to inform deployment decisions, Zia readiness analysis for Windows feature upgrades, and a dedicated Feature Pack Updates view with Test & Approve workflows. Patch decision support, not just patch execution. | Watch |
| 42Gears extends Mobile Threat Defense to Windows | 42Gears | SureMDM can now run Quick and Full malware scans on Windows devices from the console. A direct UEM competitor is bundling endpoint threat scanning into Windows management in SOTI's rugged and shared-device territory. | Watch |

## Vendor detail

### Microsoft Intune

The heaviest Intune week since this report began: service release 2609 (Week of 28 Sep) plus the Week of 21 Sep entry. Five Windows-relevant items below; the remainder of 2609 is Android and Apple work.

#### Self-service onboarding for MDM compliance partners

28 Sept 2026  ·  Windows, Android, iOS, macOS  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-28-2026-service-release-2609)

**What changed:** Intune now supports bring-your-own connector functionality for MDM compliance partners. Partners can build, test and onboard compliance connectors using Intune documentation, contracts and validation hooks. Administrators opt in to a partner connector by providing the vendor's information in the Intune admin center.

**So what for MobiControl Windows:** Opportunity, and the clearest action item this report has produced. Microsoft has productised the partner-compliance path that MobiControl already depends on, which means a documented contract and validation hooks instead of a bespoke arrangement — and it removes Microsoft's baseline-scope enforcement as a recurring surprise. Worth someone owning: read the self-service onboarding documentation and confirm whether MobiControl's existing integration should migrate to it.

#### Deployment plans: staged rollout of apps and policies

21 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-21-2026)

**What changed:** A new Deployments experience rolls out apps and configuration policies in stages rather than all at once: stage a rollout across multiple rings, control rollout timing, and integrate with Multiple Admin Approval. Applies to Windows, Win32 and Enterprise app catalog apps, and settings catalog and endpoint security policies.

**So what for MobiControl Windows:** Parity question with a change-management angle. MobiControl deploys by group and schedule; a first-class rings concept with built-in approval is what large regulated Windows fleets ask for, and it is easier to demonstrate in a bake-off than an equivalent assembled from groups and schedules. Worth assessing how close our group-plus-schedule model gets and whether the gap is the concept or the packaging.

#### Push-triggered Win32 app delivery, before and after enrollment

28 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-28-2026-service-release-2609)

**What changed:** Two changes. Intune now uses push notifications for admin-initiated and service-side changes to Win32 apps so managed devices check in sooner instead of waiting for the polling interval. Separately, the Intune Management Extension now checks for Windows app assignments immediately after the Enrollment Status Page completes, reducing the delay before required Win32 apps that were not installed during ESP begin installing.

**So what for MobiControl Windows:** Continues the theme from last week's client-driven compliance evaluation: Microsoft is systematically removing polling latency from Windows management. Responsiveness of app and policy delivery is becoming a comparison axis in its own right. Worth knowing where MobiControl's Windows agent sits on push versus poll for app deployment.

#### Defender for Endpoint AI agent runtime protection settings for Windows

28 Sept 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-28-2026-service-release-2609)

**What changed:** A new endpoint security template for Windows carries Microsoft Defender for Endpoint AI agent runtime protection settings, with Audit mode to detect and alert on unsafe AI agent activity and Block mode to stop it before execution. Supports Windows devices managed through Intune or MDE security settings management.

**So what for MobiControl Windows:** Direction signal, early. The first policy surface aimed at AI agents running on endpoints rather than at users or applications. No MobiControl action today, but 'what governs AI agents on our managed Windows devices' is a question that will reach enterprise buyers, and Microsoft has now defined the vocabulary.

#### Microsoft Cloud PKI available in GCC High

28 Sept 2026  ·  Windows, Android, iOS, macOS  ·  Windows relevance: medium · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-28-2026-service-release-2609)

**What changed:** Cloud PKI is available to Intune tenants in the US Government Community Cloud High environment, automating certificate issuance, renewal and revocation for Intune-managed devices without an on-premises certification authority, Network Device Enrollment Service or Intune Certificate Connector. Not supported in the Department of Defense environment.

**So what for MobiControl Windows:** Relevant only where MobiControl competes for US public-sector Windows work. Removing the on-premises CA and connector from certificate delivery is a real operational saving that Microsoft can offer in that segment and most UEM vendors cannot.

### JumpCloud

First appearance in this report; the source was added on 28 Sep, so this is a two-week baseline rather than a single week. JumpCloud publishes near-daily entries. Two of the six are substantive Windows patch capabilities.

#### Patch Management Dashboards with a dedicated Windows view

24 Sept 2026  ·  Windows, macOS, iOS  ·  Windows relevance: high · [Source](https://jumpcloud.com/support/release-notes-2026#september-24th-2026)

**What changed:** A unified patch dashboard in the Admin Portal with separate Windows and Apple views. The Windows dashboard shows patch coverage, missing patches by severity and age, device compliance and critical patch exposure, with a global severity filter. KB-centric control allows searching and filtering KBs, reviewing CVE details, approving awaiting updates, retrying failed installations and exporting the KB list as CSV or JSON. Bulk remediation installs missing critical patches or non-compliant device updates immediately or on the policy schedule.

**So what for MobiControl Windows:** Direct overlap with MobiControl Windows patch management, and the KB-plus-CVE framing is how security-led buyers evaluate it. The depth here — severity filtering, retry of failed installs, bulk remediation, export — is a credible feature set rather than a first attempt. Worth a side-by-side against our Windows Update reporting and remediation workflow.

#### Device Patch Report (Windows): per-device KB status

21 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://jumpcloud.com/support/release-notes-2026#september-21st-2026)

**What changed:** A report giving per-device visibility of Windows KB patch installation status — Installed, Pending and Failed for each KB on each managed Windows device. Auto-populated from existing Windows patch inventory with no manual setup; preview up to 500 rows in the portal or export the full organisation result set as CSV.

**So what for MobiControl Windows:** The audit-evidence view again, the same gap noted for Iru last week. Two vendors in two weeks have shipped per-device patch status with export. That pattern suggests customers are asking for patch evidence they can hand to an auditor, which is a reporting requirement worth confirming we meet.

#### Update existing application versions in the Private Repository

18 Sept 2026  ·  Windows, macOS  ·  Windows relevance: medium · [Source](https://jumpcloud.com/support/release-notes-2026#september-18th-2026)

**What changed:** The binary of an existing custom application in JumpCloud's Private Repository can be updated in place from Update Version on the application, instead of creating a new application entry for every release.

**So what for MobiControl Windows:** Minor, but it is the kind of friction that shows up in evaluations — whether updating a line-of-business Windows app means editing the existing package or recreating it. Worth confirming MobiControl's flow is not the clumsier one.

#### Android policy expansion and access-risk detection

23 Sept 2026  ·  Android  ·  Windows relevance: none · [Source](https://jumpcloud.com/support/release-notes-2026#september-23rd-2026)

**What changed:** New Android policies for display settings, autofill, work account authentication and default app/intent handling, plus outbound Bluetooth file-sharing control. Separately, Dormant Application Access detection now flags a user signing back into an SSO application after a configured period of inactivity, rather than flagging first-time access.

**So what for MobiControl Windows:** None for Windows. Included to show where JumpCloud's weight sits: the Android work is catch-up policy coverage and the access-risk work is identity, which is its core.

### ManageEngine

Service pack 11.5.2627 entered the release feed this week, bringing 71 entries at once. Their dates run from 16 Jun to 21 Sep because the feed carries per-build entries dated when developed, so this is a service pack becoming visible rather than 71 changes in one week. Seven are features, twelve enhancements, the rest bug fixes.

#### Patch Reliability Score and Zia Windows readiness analysis

16 Jun 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** A Patch Reliability Score is introduced for what ManageEngine calls smarter patch deployment decisions, and the Zia Analysis Windows readiness report is enhanced to cover upgrading endpoints to a specific Feature Pack version.

**So what for MobiControl Windows:** Patch decision support rather than patch execution — scoring which patches are safe to deploy, and which endpoints are ready for a Windows feature update. Pairs with Ivanti's Predictive Remediation from the baseline report: two competitors are now selling judgement about patching, not just the mechanism. That is the emerging differentiation layer above patch deployment.

#### Windows Feature Pack deployment workflows and OS deployment improvements

24 Jun 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** A dedicated Feature Pack Updates view with separate deployment options for Test & Approve and Automatic Patch Deployment workflows. The service pack also adds transfer of OS images between servers, re-import of deleted images where the original file remains, and integration so applications added under Software Deployment can be used in OS Deployment templates.

**So what for MobiControl Windows:** Windows feature-update management as a first-class workflow, separate from monthly patching, with a test-and-approve gate. Feature updates are the riskiest Windows update class for enterprises, so a dedicated approval path is a reasonable thing for customers to ask us about.

#### Remote Event Viewer and computer rename in System Manager

25 Aug 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** System Manager gains Event Viewer and Computer Rename tools, letting technicians view Windows event logs and remotely rename managed devices from the console. A separate fix addressed BitLocker re-encryption triggered by incorrect policy selection when Active Directory is unavailable.

**So what for MobiControl Windows:** Remote troubleshooting depth on Windows — reading event logs without a remote-control session is a genuine time saver for support teams. Worth comparing against what MobiControl exposes through its Windows remote tooling.

### 42Gears

No press releases. The documentation set shows a restructured Mobile Threat Defense section (11 new pages, 78 changed, 10 removed — mostly URL reorganisation from /mobile-threat-defense-mtd/ to /mtd/), and inside it one genuinely new Windows capability.

#### MTD for Windows: on-demand malware scanning from the console

18 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/mobile-threat-defense/mtd/initiate-scan-on-individual-devices/mtd-for-windows)

**What changed:** Administrators can initiate Quick Scan (areas most likely to be attacked) or Full Scan (every file, folder, task and process) on a Windows device from the SureMDM console via System Scan in Dynamic Jobs, with results reporting threats found or none detected. Requires Dual Enrollment mode and SureMDM Agent 4.57 or later.

**So what for MobiControl Windows:** Differentiation risk in the same direction as Hexnode's XDR positioning: UEM vendors folding endpoint threat detection into Windows device management so the buyer needs one agent instead of two. MobiControl integrates with security tooling rather than performing scanning. Positioning question, not a build item — but expect it in bundled-suite comparisons.

#### SureIdP user-device binding documentation updated

18 Sept 2026  ·  Windows, macOS, Linux  ·  Windows relevance: medium · [Source](https://docs.42gears.com/suremdm/system-settings/system-settings/account-settings/sureidp/user-device-binding)

**What changed:** The user-device binding page from last week's SureIdP launch was revised again, one week after the section first appeared.

**So what for MobiControl Windows:** Confirms SureIdP is under active iteration rather than a one-off documentation drop. Continue tracking; the substantive analysis is in last week's report.

### Iru

Five updates, none touching Windows — a break from three consecutive weeks of Windows releases. This week was macOS LAPS going live, a Mac agent build, recommended privacy permissions for iPhone and iPad, end-of-life Auto App removals, and MSP Billing reaching general availability with itemised billing.

_No Windows-relevant changes detected this period._

### Hexnode

No product releases; the What's new page has had nothing since 20 Jul. Four more blog posts, continuing the MSP and DaaS content push — multi-tenant reporting, endpoint visibility and SLAs, MSP patch management across client environments, and a zero-trust piece arguing device posture belongs alongside identity.

#### Second consecutive week of MSP-focused content, no product news

24 Sept 2026  ·  Windows, macOS, Android, iOS  ·  Windows relevance: low · [Source](https://www.hexnode.com/blogs/how-hexnode-uem-msp-simplifies-patch-management-across-client-environments/)

**What changed:** Four posts on MSP multi-tenant reporting, the SLA cost of poor endpoint visibility, MSP patch management across client environments, and why zero trust starts with UEM.

**So what for MobiControl Windows:** No product change, and now a ten-week gap in Hexnode's What's new page against a heavy marketing cadence. Two readings: a quiet engineering period before a release, or a deliberate shift of effort toward MSP demand generation after HexCon26. Worth noting which turns out to be true, since it tells us whether Hexnode is a product threat or a channel threat.

### Miradore

One release, API and UI.

#### Custom device attributes exposed in API v1 and custom reports

Windows, macOS, Android, iOS  ·  Windows relevance: low · [Source](https://www.miradore.com/knowledge/releases/custom-device-attributes-in-api-v1-and-reports-dark-theme-visual-fix/)

**What changed:** A new CustomAttributeDefinition GET endpoint in API v1 returns the IDs and display names of custom attributes, and custom attributes can now be used as report columns and filter conditions. Plus a dark-theme visibility fix for filters with subitems.

**So what for MobiControl Windows:** None. Ordinary API and reporting maintenance.

## Cross-platform signals worth knowing

- **Microsoft Intune:** Intune now requires iOS/iPadOS 18 or later for standard device management, Company Portal and app protection, and the new single device page has become the default admin experience across all platforms, replacing the old one. — _Minimum-OS floors and forced admin-console migrations are routine for Microsoft; both are the sort of change that generates customer questions a UEM vendor should be ready to answer._
- **Iru:** macOS LAPS reached general availability, one week after being announced. — _Local administrator password management is now shipped, not just announced. Windows LAPS parity remains the equivalent question for MobiControl._
- **42Gears:** The Mobile Threat Defense documentation was restructured wholesale, with 78 pages changed and URLs moved from /mobile-threat-defense-mtd/ to /mtd/. — _A documentation reorganisation of this size usually accompanies a product repositioning; MTD appears to be moving from a mobile add-on to a cross-platform capability._

## No change this week

Jamf, Scalefusion, Ivanti

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | ok | 2 new weekly sections, including service release 2609 |
| intune-blog | no-change | newest post still 27 Aug 2026 |
| iru-updates | ok | 5 new updates, none Windows |
| hexnode-whats-new | no-change | newest item still 20 Jul 2026 |
| hexnode-blog | ok | 4 new posts, all marketing content |
| miradore-releases | ok | 1 new release page |
| 42gears-press | no-change |  |
| 42gears-docs | ok | 11 new, 78 changed, 10 removed — largely an MTD documentation restructure; the widened identity/login filter added last week worked as intended |
| jamf-pro-release-notes | no-change | still Jamf Pro 11.32.1 |
| scalefusion-release-notes | no-change |  |
| scalefusion-product-updates | no-change |  |
| ivanti-quarterly-releases | no-change | Q3 2026 page unchanged; quarter ends 30 Sep, so expect movement next week |
| jumpcloud-release-notes | ok | New source, added 28 Sep. Baseline run: 6 entries from the last 14 days listed, 12 sections captured |
| manageengine-endpoint-central | ok | 71 new rows, but they are service pack 11.5.2627 entering the feed with entries dated 16 Jun to 21 Sep — not 71 changes this week |

## Appendix B. Method

Fourteen sources fetched on 28 Sep 2026 and compared against the 21 Sep snapshots; all were reachable and none errored. Three caveats on dating. JumpCloud was added this week and has no prior snapshot, so its entries cover roughly the last two weeks rather than one. ManageEngine's 71 new rows are service pack 11.5.2627 appearing in the release feed, with individual entries dated between June and September, so they are reported as a service pack landing rather than as one week's work. 42Gears' 78 changed pages are predominantly a documentation URL restructure rather than product change, and were reviewed for substance rather than counted. As in the previous two weeks the scheduled run fetched successfully but could not run its analysis step, so this report was written in-session from that run's preserved diff; the underlying data is the scheduled run's, unmodified.
