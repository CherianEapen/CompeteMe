# MobiControl Competitor Update — week ending 16 Nov 2026

Coverage: 2026-11-10 – 2026-11-16 · Generated: 2026-11-17

## Executive summary

- Intune service release 2611 adds maintenance windows for Windows operating system and driver updates — a dedicated profile type controlling which update operations run, when, for how long and on what repeat schedule. Scheduled update windows are a standard enterprise requirement and this is the first time Intune has had a first-class control for them.
- 42Gears spent the week iterating Shared Device Mode for Windows, one week after shipping it. A new overview page states the target segments explicitly — frontline, shift-based, healthcare and education — and all four existing pages were revised. The prerequisites are now clearer: Windows 10 or 11, Dual Enrollment, agent 6.34.0, Premium or Enterprise tier, and a SureIdP licence only where the shared user name is used as a profile-mapping condition.
- Miradore closed the Apple declarative management gap it disclosed on 19 October: DDM is now generally available, with a software update settings profile for iPhone and iPad. It also removed the Semi-Annual Channel option from its Windows Update profile following Microsoft's deprecation — worth checking whether MobiControl still exposes that option.
- Jamf 11.34.0 added an action log recording who initiated every lock, wipe, unmanage and delete, plus compliance grace periods. Administrative accountability for destructive actions is a reasonable thing for any UEM to be asked about.
- Hexnode coverage is restored after last week's filter fix: ten posts, almost all operational troubleshooting, including planning federation between Hexnode's own IdP and existing identity providers.

## Top signals

| Signal | Vendor | Why it matters | Urgency |
|---|---|---|---|
| Intune adds maintenance windows for Windows OS and driver updates | Microsoft Intune | A dedicated profile selecting which update operations run inside a configurable window with start, duration and repeat. Scheduled maintenance windows are a routine requirement in regulated and shift-based estates, and this is now native. | Respond |
| 42Gears names frontline, healthcare and education as Shared Device Mode targets | 42Gears | A week after shipping, the new overview page states the intended segments plainly and all four configuration pages were revised. The prerequisites also clarify that SureIdP is only mandatory for one mapping scenario, which lowers the adoption barrier from last week's reading. | Respond |
| Miradore ships Apple DDM and drops Semi-Annual Channel from Windows Update | Miradore | The DDM gap this report flagged four weeks ago is closed. The Windows item is the actionable one: Microsoft deprecated the Semi-Annual Channel and Miradore has removed the option. | Watch |
| Jamf adds an action log for destructive device actions | Jamf | Lock, wipe, unmanage and delete are recorded with who initiated them. Attribution for destructive actions is an audit question that applies to every UEM regardless of platform. | Watch |
| Intune makes compliance script evaluation frequency configurable | Microsoft Intune | Custom compliance scripts on Windows can run as often as every 15 minutes. Third change since September reducing the lag between a device changing state and the console knowing. | Watch |

## Vendor detail

### Microsoft Intune

Service release 2611. Four Windows items; the rest is Android, macOS and protected-app additions. Notably there is still no Ignite announcement content in these sources.

#### Maintenance windows for operating system and driver updates on Windows

16 Nov 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-november-16-2026-service-release-2611)

**What changed:** Administrators choose which update operations run during a maintenance window and configure its start date, time, duration and repeat schedule, from Devices > Manage devices > Maintenance windows > Create profile. Implemented through Policy CSP - Update.

**So what for MobiControl Windows:** Worth a direct comparison. MobiControl schedules Windows updates through policy and schedules; a named maintenance-window object that scopes which update operations may run inside it is a cleaner model and easier to demonstrate to a change-control board. The question for SOTI is whether our equivalent is as explicit, or whether it has to be assembled — the same packaging-versus-capability point raised about Intune's deployment rings in September.

#### Configurable evaluation frequency for custom compliance scripts

16 Nov 2026  ·  Windows, macOS  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-november-16-2026-service-release-2611)

**What changed:** Custom compliance script evaluation intervals are configurable at 15 minutes, 30 minutes, or one to eight hours, to balance compliance responsiveness against device resource use.

**So what for MobiControl Windows:** Continues a consistent Microsoft programme: client-driven compliance evaluation in September, push-triggered Win32 apps and scripts in September and October, now tunable compliance intervals. The cumulative effect is that Intune's answer to 'how quickly do you know a Windows device fell out of compliance' is now measured in minutes. SOTI should know and be able to state its own number.

#### Group exclusions and built-in group targeting for Windows PowerShell scripts

16 Nov 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-november-16-2026-service-release-2611)

**What changed:** PowerShell script assignments on Windows now support group exclusions and the built-in All Users and All Devices groups, so scripts can be targeted broadly and then narrowed by exclusion. Microsoft describes this as bringing script assignments in line with other Intune workloads.

**So what for MobiControl Windows:** Housekeeping that matters operationally — broad-target-then-exclude is how administrators actually scope deployments. Microsoft is closing inconsistencies between its own workloads, which incrementally removes the 'Intune is uneven' argument.

#### Expanded Windows Autopatch remediation guidance; AI agent controls extended to macOS

16 Nov 2026  ·  Windows, macOS  ·  Windows relevance: medium · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-november-16-2026-service-release-2611)

**What changed:** Windows Autopatch reports gain additional data, remediation guidance and guardrails for configuration issues. Separately, the macOS settings catalogue gains Defender AI Agent Protection and AI Agent Network Inspection settings, and the macOS Intune management agent check-in cadence drops from roughly eight hours to one.

**So what for MobiControl Windows:** Two notes. Autopatch guidance continues the move from reporting problems to prescribing fixes, which pairs with Ivanti's Predictive Remediation and ManageEngine's Patch Reliability Score. And the AI agent controls introduced for Windows in September have now crossed to macOS in two months — the pace there is worth tracking even though it is not yet a MobiControl decision.

### 42Gears

Three new pages and 18 changed. Shared Device Mode for Windows dominates: a new overview page plus revisions to all four pages published last week. Two new SSO integration guides as well.

#### Shared Device Mode overview names the target segments and clarifies prerequisites

12 Nov 2026  ·  Windows  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/overview)

**What changed:** A new overview page describes SDM as letting multiple users share a Windows device with distinct per-user policies and configurations, switching profiles dynamically on sign-in and applying a default device profile when logged out or in transition. It names the intended environments as frontline, shift-based, healthcare and educational. Prerequisites: Windows 10 or 11, Dual Enrollment, SureMDM agent 6.34.0 or later, Premium or Enterprise tier, and a SureIdP licence required where Shared Device User Name is used as a device property condition for profile deployment.

**So what for MobiControl Windows:** Two corrections to last week's read, both worth carrying. First, the segment targeting is now explicit and it is SOTI's: frontline, shift-based, healthcare, education. Second, SureIdP is a narrower dependency than last week's pages implied — it is required for one profile-mapping condition rather than for SDM as a whole, which makes adoption easier than I judged last week. The agent requirement, 6.34.0, is also very recent, so this is new code rather than a documentation exercise. A capability comparison against MobiControl's shared-device handling is the right next step.

#### Entra and PingOne SSO integration guides added

11 Nov 2026  ·  Windows, macOS, Android, iOS  ·  Windows relevance: medium · [Source](https://docs.42gears.com/suremdm/integrations/integration-guides/sso/entra-sso)

**What changed:** New integration guides for SSO with Microsoft Entra and PingOne, alongside a further revision of the Windows SureAccess profile page.

**So what for MobiControl Windows:** Consistent with the Entra External Authentication Method work from October: 42Gears is documenting how SureIdP coexists with the identity providers customers already run, rather than requiring replacement. That materially widens where their identity-dependent features, including Shared Device Mode, can land.

### Miradore

One release, and it closes the gap this report flagged on 19 October.

#### Apple DDM generally available; Semi-Annual Channel removed from the Windows Update profile

Windows, iOS, macOS, Android  ·  Windows relevance: medium · [Source](https://www.miradore.com/knowledge/releases/android-user-change-flow-rollback-apple-ddm-support-tag-page-updates-iphone-and-ipad-enrollment-bug-fix/)

**What changed:** Declarative device management is generally available for devices running iOS 15 or later, iPadOS 15 or later and macOS 13 or later, enabling a new Software update settings configuration profile for supervised iPhone and iPad on iOS 18 or later; the legacy Software update action is no longer available on iOS and iPadOS 27 or later. On Windows, the Semi annual option has been removed from the Advanced options of the Windows Update configuration profile because Microsoft deprecated the Semi-Annual Channel. Miradore also rolled back its Android user change flow change after feedback.

**So what for MobiControl Windows:** The Windows item is the actionable one: Microsoft has deprecated the Semi-Annual Channel and at least one competitor has already removed the option from its UI. Worth confirming whether MobiControl still presents Semi-Annual Channel as a selectable Windows update branch, because leaving a deprecated option visible invites support questions. Separately, Miradore closing the DDM gap in four weeks removes the competitive talking point from the 19 October report — it should not be used after this.

### Jamf

Jamf Pro 11.34.0, a substantial release. Apple-only, but two items have cross-platform relevance.

#### Action log for destructive device actions, and compliance grace periods

macOS, iOS  ·  Windows relevance: none · [Source](https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.34.0/New_Features_and_Enhancements)

**What changed:** Lock, wipe, unmanage and delete actions on computers and mobile devices are recorded in a new action log in Event Logs settings, each entry showing who initiated the action. Device compliance integrations gain a Device compliance details category in inventory records and configurable grace periods for devices falling out of compliance. OIDC-based single sign-on is now available for end-user enrollment workflows.

**So what for MobiControl Windows:** No Windows implication, but the action log is a good idea worth noting. 'Who wiped this device, and when' is a question that arrives during an incident, and an answer that requires log analysis is a weak one. Worth knowing how MobiControl records destructive actions and how easily an administrator can retrieve that. The compliance grace period is similarly sensible — a device briefly out of compliance should not immediately lose access.

### Hexnode

Ten posts, the first full week since the source filter was removed. Almost entirely operational troubleshooting content rather than announcements; no product releases on the What's new page.

#### Federation between Hexnode IdP and existing identity providers

12 Nov 2026  ·  Windows, macOS, Android, iOS  ·  Windows relevance: medium · [Source](https://www.hexnode.com/blogs/planning-federation-hexnode-idp/)

**What changed:** Guidance on planning federation between Hexnode's own identity provider and identity providers a customer already runs. Other posts cover Android kiosk background app visibility, preparing app-deployment requests through Genie chat, enterprise wearable certificate and trusted-network management, MSSP endpoint security baselines, and troubleshooting for Android work profile creation, APK update conflicts, Android web filtering and iOS website allowlists.

**So what for MobiControl Windows:** The federation content puts Hexnode in the same position as 42Gears: own identity provider, positioned to coexist with the customer's existing one. Two of the three mid-market competitors now have an identity product adjacent to their UEM. The wearables post is also worth noting — certificate and trusted-network management for enterprise wearables is adjacent to rugged frontline deployments.

### Iru

Three updates. One Windows agent release, and a useful Apple capability.

#### Iru Agent for Windows 1.26.15

11 Nov 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.iru.com/updates/2026/11/11/iru-agent-for-windows-endpoint-agent-1.26.15)

**What changed:** Endpoint agent release 1.26.15, published without detail.

**So what for MobiControl Windows:** Notable only for version velocity: 1.22.3 in September, 1.24.6 and 1.25.7 in October, 1.26.15 now. Iru is iterating its Windows agent faster than any other tracked vendor, and like the previous two releases this one carries no changelog detail, so the content of that work is not visible from public sources.

#### Custom Declarations for Apple DDM

12 Nov 2026  ·  macOS, iOS  ·  Windows relevance: none · [Source](https://www.iru.com/updates/2026/11/12/custom-declarations)

**What changed:** Administrators can paste or upload declaration JSON into a Custom Declarations Library Item to use Apple DDM configurations before a dedicated Library Item exists, with validation against Apple's schemas as they type.

**So what for MobiControl Windows:** A good pattern rather than a competitive threat: give administrators a validated escape hatch to use platform capability the product has not wrapped yet. The equivalent for Windows is custom CSP or OMA-URI configuration with schema validation, which is worth comparing against how MobiControl handles unsupported Windows settings.

### JumpCloud

One minor entry after three substantial weeks.

#### Name override for SCIM groups

12 Nov 2026  ·  Windows, macOS, Linux  ·  Windows relevance: none · [Source](https://jumpcloud.com/support/release-notes-2026#november-12th-2026)

**What changed:** Group names can be kept to internal standards in JumpCloud while sending the name each application expects, using a Show In App As override on the User Groups and Agent Groups tab.

**So what for MobiControl Windows:** None.

## Cross-platform signals worth knowing

- **Microsoft Intune:** No Microsoft Ignite announcement content has appeared in either the What's new page or the Intune blog, two weeks after the session guide was published. — _Either Ignite endpoint announcements are landing in channels these sources do not cover, or they are still to come. If nothing appears next week it is worth adding a Microsoft 365 roadmap or Windows IT Pro blog source rather than assuming quiet._
- **Jamf:** tvOS and visionOS can now be updated through declarative device management with Download and schedule to install. — _Completes Apple's declarative transition across device classes. With Miradore shipping DDM this week, every Apple-capable vendor tracked here has now migrated._
- **Hexnode:** Published guidance on managing certificates and trusted networks for enterprise wearables. — _Second vendor after 42Gears to document wearable device management this autumn. Wearables sit adjacent to rugged frontline deployments and are worth watching as a segment._

## No change this week

Scalefusion, ManageEngine, Ivanti

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | ok | 1 new section (service release 2611); the 2610 section was edited to add protected apps |
| intune-blog | no-change | still no Ignite content |
| iru-updates | ok | 3 new, all genuinely dated this period |
| hexnode-whats-new | no-change |  |
| hexnode-blog | ok | 10 posts — first full week since the stale keyword filter was removed; coverage is working as intended |
| miradore-releases | ok | 1 new release page |
| 42gears-press | no-change |  |
| 42gears-docs | ok | 3 new and 18 changed; the Shared Device Mode pages were fetched with text this week, confirming the prioritisation fix works |
| jamf-pro-release-notes | ok | moved to Jamf Pro 11.34.0, 14 topics |
| scalefusion-release-notes | no-change |  |
| scalefusion-product-updates | no-change |  |
| ivanti-quarterly-releases | no-change | Nothing since Q3; source still needs re-pointing at per-product release notes |
| jumpcloud-release-notes | ok | 1 new entry |
| manageengine-endpoint-central | no-change |  |

## Appendix B. Method

Fourteen sources fetched by the scheduled run on 16 Nov 2026 and compared against the 10 Nov snapshots; all were reachable and none errored. Both fixes made last week behaved as intended: Hexnode returned ten posts rather than zero, and the 42Gears Shared Device Mode pages arrived with their text captured, so no manual recovery was needed this week. Iru's feed counts were clean for the first time in five weeks. Miradore and Jamf release pages carry no publication dates, so recency is inferred from their appearance in the diff. Ivanti has published nothing since Q3 and its coverage should be read as absent rather than as inactivity. The scheduled run fetched successfully but stopped before its analysis step; this report was written in-session from that run's preserved diff, with the data unmodified.
