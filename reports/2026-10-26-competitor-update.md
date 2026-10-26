# MobiControl Competitor Update — week ending 26 Oct 2026

Coverage: 2026-10-19 – 2026-10-26 · Generated: 2026-10-26

## Executive summary

- A quiet week for shipped Windows features, but two competitors published tooling aimed squarely at taking devices off an incumbent. 42Gears documented command-line enrollment for Windows that explicitly supports deployment through GPO, other device management tools or other MDM solutions, and names bulk onboarding and migration as its purpose.
- Hexnode published a guide to managing Windows local accounts remotely, framed around shared workstations and kiosk devices and the orphaned accounts left after offboarding. That is SOTI's core territory, and it continues the least-privilege thread running through 42Gears' JIT admin and Intune's Endpoint Privilege Management.
- Scalefusion shipped Compliance Reports covering Windows OS version by revision and build number, application versions, and device encryption status, with saveable reusable filters, dedicated RBAC and graphical rollup. Compliance evidence reporting has now been shipped by four vendors in six weeks.
- Microsoft Ignite 2026 is imminent and Intune has published its session guide. Expect a concentrated Intune announcement wave; the next two or three reports are likely to be Microsoft-heavy and worth reading closely.
- Microsoft shipped nothing for Windows this week, Iru nothing for Windows for the first time in five weeks, and Ivanti's Q4 page is now four weeks overdue.

## Top signals

| Signal | Vendor | Why it matters | Urgency |
|---|---|---|---|
| 42Gears documents CLI enrollment for Windows aimed at migration from other MDMs | 42Gears | Enrollment commands deployable through GPO or another MDM, supporting bulk onboarding and migration with a zero-touch experience. This is displacement tooling, and MobiControl's installed base is the kind of estate it is built to move. | Respond |
| Hexnode targets Windows local account management on shared and kiosk devices | Hexnode | Remote creation, configuration and removal of Windows local accounts, pitched at shared workstations and kiosks — the deployment pattern where SOTI is strongest and where orphaned local accounts are a genuine audit finding. | Watch |
| Scalefusion ships Windows compliance reporting down to build number and encryption status | Scalefusion | Condition groups on Windows revision and build, application versions, and encryption status, with saved filters and RBAC. Fourth vendor in six weeks to ship compliance evidence reporting; it is becoming an expected capability rather than a differentiator. | Watch |
| Microsoft Ignite 2026 session guide published | Microsoft Intune | Microsoft concentrates endpoint management announcements at Ignite. A heavy Intune news cycle is about to land, and planning who reads it against the MobiControl Windows roadmap is worth doing before it arrives rather than after. | Inform |
| JumpCloud extends SaaS and AI discovery to devices managed by a third-party MDM | JumpCloud | Browser discovery can now run on devices managed by someone else's MDM by deploying the JumpCloud Go extension through that MDM. JumpCloud is decoupling a value-added service from device management, which is a way into accounts it does not manage. | Inform |

## Vendor detail

### 42Gears

No new pages, six changed. Two are Windows and both matter.

#### Windows CLI-based enrollment for bulk onboarding and migration

19 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/windows-device-enrollment/windows-cli-enrollment)

**What changed:** Command-line enrollment onboards Windows 10 and 11 devices into SureMDM by deploying enrollment commands through scripts or enterprise deployment mechanisms including Group Policy Objects, device management tools or other MDM solutions. 42Gears documents it as supporting bulk device onboarding and migration scenarios with a zero-touch setup experience, requiring SureMDM Agent 6.22.0 or later, configured from Enrollment > Manual Enrollment > Windows > CLI Based Enrollment.

**So what for MobiControl Windows:** Treat as competitive displacement tooling, not a feature comparison. The phrase that matters is deployment through other MDM solutions: 42Gears is documenting how to push its agent onto devices an incumbent already manages, which is how a rip-and-replace actually happens in a Windows estate. Two useful responses: know whether MobiControl offers equally frictionless bulk Windows enrollment for inbound migrations, and understand what makes an outbound migration from MobiControl hard, because that is the real defence.

#### SureAccess Windows agent requirements and filtering precedence documented

21 Oct 2026  ·  Windows, macOS  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/integrations/integration-guides/sureaccess/sureaccess-profile-configuration/profile-windows)

**What changed:** The SureAccess profile page gained supported agent versions — Windows agent 2.6.3 or later, macOS 3.0.9 or later — for Web Protection and Data Protection settings, and clarified that blocked URLs take precedence over other configured filtering rules.

**So what for MobiControl Windows:** Incremental, and it tells us SureAccess is in active rollout rather than announced-only: version floors and precedence rules get documented when customers start deploying. Keeps the six-week 42Gears security build-out from last week's report on the watch list.

### Hexnode

No product releases. One blog post, and it is squarely on Windows.

#### Windows local account management guide

26 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.hexnode.com/blogs/windows-local-account-management-in-hexnode-uem-a-step-by-step-guide/)

**What changed:** A step-by-step guide to creating, configuring, securing and removing Windows local accounts remotely across multiple devices from Hexnode UEM, rather than configuring each device individually. The framing calls out shared workstations and kiosk-style devices, where manual account administration creates inconsistent privileges and leaves orphaned accounts after employee offboarding, and distinguishes administrator from standard accounts.

**So what for MobiControl Windows:** Worth checking directly against MobiControl. Orphaned local accounts on shared Windows devices are a real audit finding, and the scenario described — shared workstations, kiosks, offboarding — is exactly SOTI's installed base. This is marketing content rather than a release note, which usually means the capability already exists and Hexnode is now competing for the evaluation-stage search term. If MobiControl manages Windows local accounts, it should be as easy to find.

### Scalefusion

Release of 16 Oct, still on Dashboard v68.3.0. One substantial feature.

#### Compliance Reports across OS version, application version and encryption status

20 Oct 2026  ·  Windows, macOS, Android, iOS  ·  Windows relevance: high · [Source](https://help.scalefusion.com/docs/scalefusion-october-16th-2026-release-notes)

**What changed:** Administrators generate compliance reports against defined conditions. For Windows, OS version conditions can be grouped using multiple conditions on revision and build number; other platforms compare the OS version against a specified version with an operator. Application version reports cover up to five application conditions in one report. Encryption status reports cover Windows and macOS. Configurations can be saved as reusable filters, up to 25, shared across administrators, with dedicated RBAC permissions separating read/write from view, and a Compliance Overview section in DeepDive showing saved reports graphically. Availability depends on plan.

**So what for MobiControl Windows:** Compare on the Windows specifics rather than the headline. Condition groups on revision and build number is finer-grained than a simple minimum-version check, and encryption status reporting answers the BitLocker question auditors actually ask. Four vendors — Iru, JumpCloud, Hexnode and now Scalefusion — have shipped compliance or patch evidence reporting in six weeks, which makes this a category expectation. Worth a deliberate look at whether MobiControl's Windows compliance reporting produces the artefact an auditor wants without export and spreadsheet work.

### Microsoft Intune

Nothing for Windows. The only release-note item is Apple-specific, and the blog is an Ignite session guide.

#### Ignite 2026 session guide; unlimited Apple VPP licences

21 Oct 2026  ·  iOS, macOS  ·  Windows relevance: low · [Source](https://techcommunity.microsoft.com/t5/microsoft-intune-blog/your-guide-to-intune-at-microsoft-ignite-2026/ba-p/4545812)

**What changed:** Intune published its Microsoft Ignite 2026 guide, positioning endpoint management and security as the foundation for AI readiness across Windows, macOS and mobile. The Week of 19 Oct release note covers only unlimited-licence assignment for Apple volume purchase program apps from Apple Business and Apple School Manager.

**So what for MobiControl Windows:** No capability change. The planning point is the Ignite cycle: Microsoft front-loads endpoint announcements there, so the next few weeks of this report are likely to carry more Intune material than usual. If there is a MobiControl Windows roadmap review scheduled, having someone track the Ignite endpoint sessions is cheap insurance.

### JumpCloud

One new entry plus a cosmetic addition to the 14 Oct entry.

#### Browser discovery for AI and SaaS management via third-party MDM

21 Oct 2026  ·  Windows, macOS, Linux  ·  Windows relevance: medium · [Source](https://jumpcloud.com/support/release-notes-2026#october-21st-2026)

**What changed:** Browser discovery in JumpCloud's AI and SaaS Management can start when a user signs in to a JumpCloud-managed device, or when the JumpCloud Go extension is deployed through a third-party MDM using a client ID and secret in the extension distribution policy. Discovery data associates with a user once they sign in to the User Portal, a JumpCloud SSO application, or a managed device.

**So what for MobiControl Windows:** Strategically interesting rather than a feature threat. JumpCloud is selling shadow-SaaS and shadow-AI discovery to organisations whose devices someone else manages — including, in principle, MobiControl customers. Two readings worth holding: it is a wedge into accounts JumpCloud does not own, and it is evidence that discovery of AI and SaaS usage is becoming a saleable layer above device management. Whether that is a partnership opportunity or an encroachment is a judgement for SOTI, not something this report can settle.

### Miradore

Two bug-fix releases, one of them relevant to kiosk deployments.

#### Android kiosk lockdown fix and file upload fix

Android, iOS  ·  Windows relevance: none · [Source](https://www.miradore.com/knowledge/releases/bug-fix-for-home-screen-kiosk-mode-and-unlimited-vpp-licenses-for-free-apps/)

**What changed:** Fixed an issue where deploying a Home screen and kiosk mode configuration profile with the single-app kiosk type could cause some Android devices to flash repeatedly and briefly exit kiosk lockdown. Separately fixed failures affecting certificate uploads, Apple Push Certificate, ADE and VPP token uploads and renewals, CSV imports and configuration profile imports. Also unlimited VPP licences for free apps.

**So what for MobiControl Windows:** No Windows implication. Noted because a kiosk briefly dropping lockdown is the class of defect that loses deals in retail and frontline deployments — a reminder that reliability in kiosk mode is a differentiator SOTI can speak to concretely.

### Iru

Ten items reported, three genuinely new and all macOS: Korean localisation in the Mac agent, Mac Custom App installers up to 30 GB with background and resumable downloads, and the weekly roundup. No Windows items for the first time in five weeks.

_No Windows-relevant changes detected this period._

### ManageEngine

Five fixes across builds 11.5.2627.60 and .61.

#### Agent data sanitisation vulnerability and feature pack exclusion bypass fixed

23 Oct 2026  ·  Windows, Linux  ·  Windows relevance: medium · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** Fixed a vulnerability in sanitising agent data, and an issue where feature packs bypassed exclusion rules in specific scenarios. Also fixed an Application Control elevation prompt not appearing when installing certain Microsoft Store applications, File Audit timestamps not accounting for Daylight Saving Time, and a Linux pop-up defect.

**So what for MobiControl Windows:** The exclusion-rule bypass is the one worth noting: a Windows feature pack installing on a device explicitly excluded from it is the kind of failure that erodes trust in update controls. Worth confirming MobiControl's Windows update exclusions are honoured for feature updates specifically, not just quality updates.

### Jamf

Jamf Pro 11.33.1, a maintenance release.

#### Tomcat 10.1.60 and security fixes

macOS  ·  Windows relevance: none · [Source](https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.33.1/Resolved_Issues)

**What changed:** Jamf Pro 11.33.1 includes Tomcat 10.1.60 and fixes for a third-party library vulnerability and a cross-site scripting issue.

**So what for MobiControl Windows:** None.

## Cross-platform signals worth knowing

- **Iru:** Mac Custom App Library Items now accept installers up to 30 GB, downloading in the background without blocking other Library Items and auto-resuming after network interruptions or device sleep. — _Large-package delivery with resumable background transfer is a problem every UEM eventually solves. Relevant to Windows estates distributing large line-of-business or engineering applications over poor links._
- **42Gears:** Shared device mode documentation for iOS was reworked across four pages. — _Shared-device workflows continue to get investment across the field; the Apple work often precedes equivalent Windows shared-device features._
- **Ivanti:** No Q4 2026 release page four weeks after the quarter ended, against a consistent prior cadence of quarterly publication. — _Now beyond a plausible publishing delay. Either Ivanti has changed how it communicates releases or the quarterly page has been discontinued. If nothing appears by mid-November the source should be re-pointed at their product release-notes pages instead._

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | ok | 1 new section (Week of 19 Oct), Apple-only content |
| intune-blog | ok | 1 new post, the Ignite 2026 session guide |
| iru-updates | ok | 10 reported new but only 3 dated after 19 Oct; the rest re-appeared from the URL migration and were already reported in earlier weeks |
| hexnode-whats-new | no-change |  |
| hexnode-blog | ok | 1 new post |
| miradore-releases | ok | 2 new release pages |
| 42gears-press | no-change |  |
| 42gears-docs | ok | 0 new, 6 changed; 2 Windows-relevant |
| jamf-pro-release-notes | ok | moved to Jamf Pro 11.33.1, maintenance release |
| scalefusion-release-notes | ok | 1 new release (16 Oct) |
| scalefusion-product-updates | no-change |  |
| ivanti-quarterly-releases | no-change | Q4 2026 page still absent 4 weeks after quarter end; source may need re-pointing |
| jumpcloud-release-notes | ok | 1 new entry, 1 edited |
| manageengine-endpoint-central | ok | 5 new rows across builds .60 and .61 |

## Appendix B. Method

Fourteen sources fetched by the scheduled run on 26 Oct 2026 and compared against the 19 Oct snapshots; all were reachable and none errored. Iru's feed re-presented seven previously reported items alongside three genuinely new ones, so its entries were filtered by publication date and only items dated after 19 Oct are analysed — this is the fourth week its URL handling has required that filtering. 42Gears and Hexnode publish no release notes for the items reported here, so a documentation page and a blog post respectively are the signal, and both are described as documented rather than announced. Miradore and Jamf pages carry no publication dates. The scheduled run again fetched successfully but stopped before its analysis step; this report was written in-session from that run's preserved diff, with the underlying data unmodified.
