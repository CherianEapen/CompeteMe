# MobiControl Competitor Update — week ending 21 Sep 2026

Coverage: 2026-09-15 – 2026-09-21 · Generated: 2026-09-21

## Executive summary

- Microsoft shipped the most consequential Windows change: Intune now evaluates Windows compliance client-side, so a device that loses firewall, BitLocker, Defender, Secure Boot or real-time protection requests reevaluation immediately instead of waiting for the next check-in. This is a direct comparison point for MobiControl Windows compliance, which is check-in driven.
- 42Gears moved into the Windows login path. Newly documented SureIdP OS Login enforces OS sign-in against 42Gears' own identity provider on Windows, macOS and Linux, with conditional access by location, Wi-Fi SSID, IP, time or compliance state, plus user-device binding. It is sold as an add-on to Premium and Enterprise.
- Iru shipped three Windows items in one week — Windows 11 build patch-compliance reporting, an agent fix, and an AI that recommends and applies Windows Update settings from CIS benchmarks. Third consecutive week of Windows releases from a vendor whose core is Apple.
- Jamf fixed the Entra device-compliance failure this report flagged as 'respond' in the 15 Sep baseline (PI-1580, MFA-enabled sign-in). The Microsoft-side change that caused it still warrants a check of MobiControl's own Intune partner-compliance registration.
- Quiet elsewhere: Ivanti unchanged, Hexnode published six DaaS/MSP marketing posts but no product news, Miradore shipped one Android bug fix, Scalefusion's release was Apple day-zero work, and ManageEngine shipped bug fixes only.

## Top signals

| Signal | Vendor | Why it matters | Urgency |
|---|---|---|---|
| Intune adds client-driven compliance evaluation for Windows | Microsoft Intune | Compliance state now updates in near real time rather than at check-in, which shortens the window where a non-compliant Windows device still holds Conditional Access. MobiControl Windows evaluates on check-in, so this is a concrete parity question, not just positioning. | Respond |
| 42Gears SureIdP puts conditional access on Windows OS login | 42Gears | A direct UEM competitor now bundles an identity provider that gates the Windows login itself by location, network, time and compliance. It bids for the identity budget alongside the device budget, in SOTI's rugged and shared-device territory. | Watch |
| Iru sustains a weekly Windows release cadence, including AI that applies settings | Iru | Iru AI now implements Windows Update configuration from CIS benchmarks, not just advises. Competitor AI is moving from chat to action, which raises the bar for what SOTI's AI story must do for Windows admins. | Watch |
| Jamf closes the Entra device-compliance MFA failure (PI-1580) | Jamf | The baseline report flagged this as a live risk for any vendor using Microsoft's device-compliance registration. Jamf has now shipped a fix; MobiControl's equivalent integration should still be verified against Microsoft's baseline-scope enforcement. | Inform |

## Vendor detail

### Microsoft Intune

One item in the 'Week of September 14, 2026' section, and it is a substantive Windows capability. The Intune TechCommunity blog has still had no post since 27 Aug.

#### Client-driven compliance evaluation for Windows devices

14 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-14-2026)

**What changed:** Supported Windows devices detect changes to compliance signals — firewall, antivirus, BitLocker, Microsoft Defender status, operating system build, real-time protection and Secure Boot — and proactively request reevaluation instead of waiting for a scheduled check-in. Compliance policies are also evaluated during check-in when a calculation is triggered.

**So what for MobiControl Windows:** Parity gap to assess. MobiControl Windows compliance is evaluated on check-in, so the interval between a device falling out of compliance and the console knowing is longer. Where customers gate resource access on compliance state, that interval is the differentiator Microsoft just removed. Worth a scoped comparison of our Windows compliance evaluation trigger model before it appears in a competitive deal.

### 42Gears

No press releases and no Windows feature documentation, but seven new or changed pages on 16 Sep all belong to a new SureIdP section — 42Gears' own identity provider. The fetcher's Windows-keyword filter hid these; they were retrieved by hand for this report and the filter has been widened.

#### SureIdP OS Login: enforced OS sign-in with conditional access on Windows

16 Sept 2026  ·  Windows, macOS, Linux  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/system-settings/system-settings/account-settings/sureidp/os-login-with-sureidp-authentication)

**What changed:** An OS Login profile, documented as applicable on Windows, macOS and Linux, enforces operating-system login through SureIdP credentials on devices running the SureMDM agent. It controls offline credential expiry, user account takeover, login-screen branding, device-to-user binding, and conditional access based on location, Wi-Fi SSID, IP, time or compliance status. Configured from Profiles > Windows > Add > OS Login.

**So what for MobiControl Windows:** Differentiation risk in shared-device and frontline Windows deployments, where controlling who can sign in to the device — not just what the device may do afterwards — is the actual customer requirement. MobiControl relies on the customer's existing identity stack for Windows login; 42Gears is offering the identity layer and the device layer as one purchase. Worth deciding whether SOTI answers this with partnerships or positioning.

#### SureIdP authentication policies and user-device binding

16 Sept 2026  ·  Windows, macOS, Linux, Android, iOS  ·  Windows relevance: medium · [Source](https://docs.42gears.com/suremdm/system-settings/system-settings/account-settings/sureidp/authentication-and-conditional-access)

**What changed:** Reusable authentication policies for SAML applications restrict access by platform, managed-versus-unmanaged device state and named users, choose password or passwordless authentication, and enforce MFA — up to five rules per policy. Separately, user-device binding maps SureIdP users to specific managed devices as the source of truth for access decisions; 42Gears documents binding as enforced on Windows, macOS and Linux but not on Android or iOS. SureIdP is an add-on to the Premium and Enterprise packages.

**So what for MobiControl Windows:** Confirms the SureIdP move is a platform play, not a single feature, and that its enforcement is strongest on desktop platforms including Windows. Relevant to competitive pricing: it is an upsell tier, so expect it in Premium/Enterprise bake-offs rather than entry deals.

### Iru

Seven updates, three of them Windows. Also shipped macOS LAPS, two Mac agent builds and MSP Billing (per-tenant spend visibility for managed service providers, US only).

#### Windows Managed OS patch compliance reporting

18 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.iru.com/updates/windows-managed-os-patch-compliance)

**What changed:** The Managed OS Library Item for Windows reports whether each assigned device has reached the required Windows 11 build, showing Pass, Update past due or Error. Expanding a device row shows its current build against the required build plus the eligibility, install enforcement and restart enforcement dates.

**So what for MobiControl Windows:** Parity question on reporting, not on capability: MobiControl manages Windows Update rings and deferrals, but per-device build-versus-target status with enforcement dates on one screen is the view administrators ask for during audits. Compare against our Windows Update reporting before a customer does.

#### Iru AI recommends and applies Windows Update settings from CIS benchmarks

17 Sept 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.iru.com/updates/windows-update-library-item-recommendations-in-iru-ai)

**What changed:** Iru AI can recommend and implement Windows Update settings based on CIS benchmarks or Microsoft defaults, take follow-up questions to refine them, and answer questions about most Library Items, settings and best practices from any chat.

**So what for MobiControl Windows:** Direction signal, and the sharpest one this week. Competitor AI is crossing from answering questions to changing configuration, anchored to a recognised benchmark. Whatever SOTI ships as AI for Windows administrators will be compared against 'it configured Windows Update to CIS for me', not against a chatbot.

#### Iru Agent for Windows 1.22.3

18 Sept 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://www.iru.com/updates/iru-agent-for-windows-1.22.3)

**What changed:** Fixes Custom App and Auto App detection so applications are no longer reinstalled when a version is missing or misread, corrects Auto Apps enforcement after a user closes an app, and resolves agent installation failures.

**So what for MobiControl Windows:** None directly — these are defect fixes. Read as maturity signal: Iru's Windows agent is new enough to be working through app-detection and install reliability, which is where an established Windows agent has the advantage. Usable in competitive conversations while it lasts.

### Jamf

Jamf Pro 11.32.1 is a patch release: Tomcat 10.1.59, macOS 27 compatibility for Jamf Remote Assist, several third-party CVE fixes and a set of resolved issues.

#### Entra device-compliance registration with MFA fixed (PI-1580)

macOS  ·  Windows relevance: low · [Source](https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.32.1/Resolved_Issues)

**What changed:** Jamf resolved the defect where the device compliance workflow with Entra ID failed to register devices when an interactive sign-in option such as multifactor authentication was enabled. This was the open issue attached to Microsoft's change to baseline scope enforcement for Conditional Access.

**So what for MobiControl Windows:** No parity implication — the fix is Apple-side. It closes the loop on the baseline report's top signal, and the underlying Microsoft change still applies to every vendor using that registration path. The action remains: verify MobiControl's Intune partner-compliance registration against Microsoft's baseline-scope enforcement.

### Scalefusion

The 9 Sep release (Dashboard v67.7.0, On-Prem Connector v2.5.5) is predominantly Apple day-zero work. The cross-platform user-sync change is the part that touches Windows customers.

#### Near-real-time user sync from Entra and Google Workspace via webhooks

15 Sept 2026  ·  Windows, macOS, Android, iOS  ·  Windows relevance: medium · [Source](https://help.scalefusion.com/docs/scalefusion-september-9th-2026-release-notes)

**What changed:** Scalefusion now uses Google Workspace and Entra webhooks to synchronise user deletions and updates in near real time, falling back to a daily 00:00 UTC sync to restore a broken webhook connection. User import at enrollment is available for both directories, so users of user-based desktops and mobiles can enroll with a URL and an ORG-ID or enrollment code instead of an administrator importing all users and sending invitations.

**So what for MobiControl Windows:** Worth comparing on two fronts: how quickly a deprovisioned Entra user loses access to a managed Windows device, and whether enrollment requires an administrator to pre-import users. The second is a real friction point in onboarding-heavy Windows deployments.

### ManageEngine

Three bug-fix rows on build 11.5.2622.31. No feature rows this week.

#### Endpoint DLP extends password protection to Office file formats

11 Sept 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** Endpoint DLP now applies password protection to XLSX, PPTX and DOCX files. Filed as a bug fix. Two further fixes covered Self Service catalog file permissions and false patch-publish notifications in the Self Service Portal.

**So what for MobiControl Windows:** Data-loss prevention on Windows endpoints is bundled into Endpoint Central rather than sold separately. Not a MobiControl parity item, but relevant when a prospect is comparing a UEM suite against a UEM plus separate DLP purchase.

### Hexnode

No product releases; the What's new page has had nothing since 20 Jul. Six blog posts in five days, all on Device-as-a-Service, digital employee experience and multi-OS management for MSPs.

#### Content push targeting DaaS providers and MSPs

18 Sept 2026  ·  Windows, macOS, Android, iOS  ·  Windows relevance: low · [Source](https://www.hexnode.com/blogs/why-workflow-automation-is-critical-for-scaling-a-daas-operation/)

**What changed:** Six posts covering DaaS workflow automation, UEM's role in DaaS, DaaS platform ROI, device lifecycle stages, digital employee experience, and managing Windows, macOS, iOS and Android from one console as an MSP.

**So what for MobiControl Windows:** No product change. Segment signal: following HexCon26, Hexnode is marketing hard at DaaS providers and MSPs — multi-tenant, lifecycle-heavy buyers. If SOTI competes for those accounts, expect Hexnode there; if not, this is a divergence worth noting rather than matching.

### Miradore

One release, Android only.

#### Bug fix: Android managed app configuration via business policy

Android  ·  Windows relevance: none · [Source](https://www.miradore.com/knowledge/releases/bug-fix-android-managed-app-configuration-deployment-via-business-policy/)

**What changed:** Fixed a case where deploying an application together with its managed configuration through a business policy could leave the managed configuration unapplied on Android devices.

**So what for MobiControl Windows:** None.

## Cross-platform signals worth knowing

- **Scalefusion:** From November 2026, new Scalefusion macOS and iOS app versions require macOS 12 or later and iOS 15 or later; devices on older versions stay enrolled and keep enforcing existing policies but stop receiving app updates after October 2026. — _A minimum-OS cut-off is a customer-visible event competitors have to manage. Useful precedent for how MobiControl communicates its own agent support floors._
- **Scalefusion:** Apple Intelligence and Siri restrictions now ship as DDM declarations rather than legacy MDM keys, with backward compatibility for older OS versions, alongside new iOS and macOS restrictions and ADE skip keys. — _Continues the Apple-wide shift from MDM commands to declarative management. No Windows equivalent today, but the pattern — the platform owner forcing a protocol migration — is what to watch for in Windows CSP deprecations._
- **Iru:** Shipped macOS LAPS, generating, rotating and escrowing local administrator passwords with access control. — _Local admin password management is becoming a standard UEM line item across platforms; Windows LAPS parity is the equivalent question for MobiControl._
- **Iru:** Launched MSP Billing with daily per-tenant spend visibility and self-serve setup, US only. — _Second vendor this week building for MSPs, alongside Hexnode's MSP content push._

## No change this week

Ivanti

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | ok | 1 new weekly section |
| intune-blog | no-change | newest post still 27 Aug 2026 |
| iru-updates | ok | 7 new updates |
| hexnode-whats-new | no-change | newest item still 20 Jul 2026 |
| hexnode-blog | ok | 6 new posts, all marketing content |
| miradore-releases | ok | 1 new release page |
| 42gears-press | no-change |  |
| 42gears-docs | ok | 2 new and 5 changed pages, all SureIdP. The Windows-keyword fetch filter did not capture their text, so the four substantive pages were fetched by hand for this report; the filter has been widened to cover identity and login pages from next week. |
| jamf-pro-release-notes | ok | moved to Jamf Pro 11.32.1, 3 topics |
| scalefusion-release-notes | ok | 1 new release (9 Sep, Dashboard v67.7.0) |
| scalefusion-product-updates | no-change |  |
| ivanti-quarterly-releases | no-change | Q3 2026 page unchanged; Ivanti publishes quarterly, so expect movement near quarter end |
| manageengine-endpoint-central | ok | 3 new rows on build 11.5.2622.31 |

## Appendix B. Method

First true week-over-week run: 13 sources fetched on 21 Sep 2026 and compared against the 15 Sep snapshots, so this covers 15-21 Sep. All 13 sources were reachable and none errored. Two caveats. First, the scheduled run stopped after fetching because the local Claude Code CLI is not yet signed in, so the diff was preserved and this analysis was written in-session from that same diff — the data is the scheduled run's, unmodified. Second, 42Gears' documentation changes were captured as URLs without page text because the fetcher only retrieves pages matching Windows keywords; the SureIdP pages were therefore fetched manually and the filter widened for future runs. Undated sources (Miradore release pages, Ivanti quarterly pages, Jamf topics) carry no publication date, so their recency is inferred from appearing in the diff.
