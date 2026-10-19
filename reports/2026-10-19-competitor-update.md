# MobiControl Competitor Update — week ending 19 Oct 2026

Coverage: 2026-10-12 – 2026-10-19 · Generated: 2026-10-19

## Executive summary

- JumpCloud shipped agent uninstall protection across Windows, macOS and Linux: removing the agent now requires a per-device maintenance token, failed attempts are logged, and it is on by default. Agent tamper resistance is a standard requirement in frontline and rugged Windows fleets, which is MobiControl's core ground.
- 42Gears documented SureAccess for Windows — VPN, website access control, URL blocking and both domain- and application-based DLP. That is the fourth security capability it has added around Windows in six weeks, after Mobile Threat Defense, Just-In-Time admin elevation and SureIdP. 42Gears is deliberately assembling a security suite on top of SureMDM, and Windows is where it is landing.
- Iru's AI now builds BitLocker policies from a plain-language description, its second feature that configures Windows security rather than advising on it, after CIS-based Windows Update settings in September.
- AI agents are becoming managed objects: JumpCloud released REST APIs to register, credential, group and suspend AI agent identities, and Hexnode published guidance on introducing AI agents into IT operations with human oversight. With Intune's Defender AI agent runtime protection three weeks ago, three vendors now treat AI agents as something to govern on or around the endpoint.
- Useful competitive intelligence: Miradore has published a known issue stating Apple removed the MDM commands it used to find and install OS updates, so OS update management on iOS, iPadOS and macOS 27 is affected. Every other Apple-capable vendor tracked here completed the move to declarative device management by last week.

## Top signals

| Signal | Vendor | Why it matters | Urgency |
|---|---|---|---|
| JumpCloud adds agent uninstall protection on Windows, macOS and Linux | JumpCloud | Uninstalling the agent now requires a per-device maintenance token that works offline and rotates after viewing, with failed attempts logged. Preventing users from removing management is a recurring requirement in frontline, shared-device and rugged Windows deployments. | Respond |
| 42Gears brings SureAccess ZTNA and DLP to Windows | 42Gears | Completes a six-week run in which 42Gears added threat defence, privilege elevation, identity and now zero-trust access with data-loss prevention to its Windows management. It is building the bundled security suite argument against point-solution UEM. | Watch |
| Iru's AI generates BitLocker policy from plain language | Iru | Second instance of competitor AI configuring Windows security directly rather than recommending. The comparison for any SOTI AI feature is becoming 'it wrote the encryption policy', not 'it answered a question'. | Watch |
| JumpCloud ships AI agent identity management APIs | JumpCloud | Register, credential, group and suspend AI agents as first-class identities. A new category forming across three vendors in a month; worth understanding before customers ask what MobiControl does about AI agents on managed endpoints. | Inform |
| Miradore's Apple OS update management broken by DDM deprecation | Miradore | Miradore has publicly documented that Apple removed the MDM commands it relied on. It is the one tracked vendor that did not complete the declarative migration in time — a concrete, verifiable weakness in competitive situations. | Inform |

## Vendor detail

### JumpCloud

Four entries, the most substantive week since the source was added. Two matter for Windows.

#### Agent Uninstall Protection with per-device maintenance tokens

14 Oct 2026  ·  Windows, macOS, Linux  ·  Windows relevance: high · [Source](https://jumpcloud.com/support/release-notes-2026#october-14th-2026)

**What changed:** Uninstalling the JumpCloud agent by standard methods on Windows, macOS or Linux now requires a per-device maintenance token. On by default for agent v2.179.2 and later. Administrators with Manager role or higher can view a device's token from device details; tokens work without network connectivity and rotate automatically 60 minutes after being viewed if the agent remains installed. Directory Insights logs failed uninstall attempts, successful uninstalls and exemption policy changes, identifying device and user, and an exemption policy is available.

**So what for MobiControl Windows:** Worth a direct comparison. The design detail is good — offline-capable tokens, automatic rotation, an audit trail, and an exemption path — which is more than a simple uninstall password. In frontline and rugged Windows deployments, a user removing the agent is a real support and compliance problem, so this is the kind of capability that surfaces in security review. Confirm what MobiControl's Windows agent offers against tamper and removal, and whether it produces an audit record.

#### AI Agent and Agent Group management APIs

13 Oct 2026  ·  Windows, macOS, Linux  ·  Windows relevance: medium · [Source](https://jumpcloud.com/support/release-notes-2026#october-13th-2026)

**What changed:** REST APIs for the Agent Identities feature: register, retrieve, update, suspend, activate and delete AI agent identities; create and manage their credentials; create and manage agent groups; and manage group memberships and application assignments.

**So what for MobiControl Windows:** Direction signal, not a parity item. JumpCloud is extending identity governance to AI agents as a distinct principal type. Together with Intune's Defender AI agent runtime protection and Hexnode's AI-operations guidance this month, the question 'what runs as an agent on this endpoint, and who authorised it' is becoming a category topic. Worth a point of view before it reaches an RFP.

#### App Catalog update notification control

16 Oct 2026  ·  Windows, macOS  ·  Windows relevance: medium · [Source](https://jumpcloud.com/support/release-notes-2026#october-16-2026)

**What changed:** Administrators can disable end-user update notifications per application for both Auto and Self Service delivery, while auto-updates are still forced after seven days. Users can start available updates for Required applications from the Self Service App Catalog.

**So what for MobiControl Windows:** Minor, but the pattern is sensible: silence the prompts without losing the deadline. Notification fatigue is a common complaint about managed app updates on Windows.

### 42Gears

A heavy documentation week — 27 new and 25 changed pages. Most of the new pages are Apple software-update rings; the Windows-relevant changes are SureAccess, the enterprise app store and provisioning packages.

#### SureAccess for Windows: ZTNA with domain- and application-based DLP

15 Oct 2026  ·  Windows, macOS  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/integrations/integration-guides/sureaccess/sureaccess-profile-configuration/profile-windows)

**What changed:** A configuration guide for SureAccess on Windows and macOS covering the VPN connection, website access control, URL blocking, and data upload control through domain-based and application-based DLP policies, configured as a SureAccess payload under Profiles > Windows. Documented constraint: a profile containing a VPN Configuration payload cannot also carry the SureAccess payload.

**So what for MobiControl Windows:** The strategic read matters more than the feature. In six weeks 42Gears has documented Mobile Threat Defense for Windows, Just-In-Time admin elevation, SureIdP identity with OS login and Entra integration, and now zero-trust access with DLP — all on Windows, all sold as add-ons to SureMDM. That is a deliberate move from device management to a security suite, aimed at the same rugged and frontline buyers as SOTI. The competitive question is whether MobiControl answers with partnerships and depth, or concedes the bundle argument.

#### Windows enterprise app store documentation revised

1 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://docs.42gears.com/suremdm/windows-application-management/windows-application-manage/windows-appstore/create-app)

**What changed:** The Windows enterprise app store supports line-of-business applications by file upload or hosted URL, third-party applications from a repository, and web apps.

**So what for MobiControl Windows:** Routine, and it confirms parity rather than a gap — a third-party application repository alongside LOB upload is the expected shape. Noted for completeness.

#### Apple software update rings built out

14 Oct 2026  ·  iOS, macOS  ·  Windows relevance: none · [Source](https://docs.42gears.com/suremdm/ios-device/ios-device-manage/ios-ipados-update/automated-software-updates/overview)

**What changed:** A substantial new documentation set for advanced and automated software updates on iOS, iPadOS and macOS, including adding update rings and ring configuration.

**So what for MobiControl Windows:** Noted because of what it is not: 42Gears built ring-based update rollout for Apple, not Windows. Intune shipped Windows deployment rings three weeks ago. If ring-based Windows update rollout is a MobiControl gap, 42Gears has not closed it either — that is a window, not a threat.

### Iru

Eight updates, two of them Windows. The URL migration that inflated the previous two weeks has finished, so these counts are clean again.

#### Iru AI builds BitLocker Library Items from a plain-language description

15 Oct 2026  ·  Windows, Android  ·  Windows relevance: high · [Source](https://www.iru.com/updates/2026/10/15/iru-ai-assistant-bitlocker-android-restrictions)

**What changed:** Iru AI can now build Library Items for BitLocker on Windows and for Android Restrictions from a plain-language description of the disk encryption policy or restrictions required.

**So what for MobiControl Windows:** The second Windows security policy Iru's AI can author, after CIS-aligned Windows Update settings in September. Disk encryption policy is a high-stakes configuration to generate from a prompt, which cuts both ways: it is a strong demo, and it is a reasonable thing for a security-minded customer to be sceptical about. Either way it sets the expectation that AI in a UEM console produces working configuration.

#### Iru Agent for Windows 1.24.6.0

16 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.iru.com/updates/2026/10/16/iru-agent-for-windows-release-1.24.6.0)

**What changed:** Fixes applications missing from device inventory, stops applications reinstalling repeatedly when an installer leaves an older entry in Add/Remove Programs, and resolves a Self Service issue.

**So what for MobiControl Windows:** Worth noting as a pattern rather than an event. These are the same class of defects — application detection, inventory accuracy, reinstall loops — that Iru fixed in agent 1.22.3 in September. Two months of recurring app-inventory instability on Windows is a credible, factual talking point for a mature Windows agent, provided it is stated from their own release notes and not overstated.

### Miradore

Three release pages, one of which is a known-issue disclosure that matters competitively.

#### Known issue: Apple OS update discovery and installation broken on iOS, iPadOS and macOS 27

iOS, macOS  ·  Windows relevance: none · [Source](https://www.miradore.com/knowledge/releases/known-issue-os-update-information-and-os-update-installation-on-ios-ipados-and-macos-27/)

**What changed:** Miradore published a known issue stating that Apple removed the older MDM commands it used to find and install OS updates, describing the effect on Apple devices and what customers should do now.

**So what for MobiControl Windows:** No Windows implication, but genuinely useful intelligence. Apple's deprecation was announced at WWDC 2025 and every other Apple-capable vendor tracked here — Jamf, Scalefusion, Ivanti, Hexnode, Iru — completed the declarative migration before the deadline. Miradore did not, and has had to tell customers so. In mixed-fleet evaluations where Miradore is the incumbent or the cheap alternative, this is a concrete, citable gap.

#### Minimum macOS raised to 12, Windows client update, application deployment changes

Windows, macOS, Android  ·  Windows relevance: medium · [Source](https://www.miradore.com/knowledge/releases/changes-in-macos-support-windows-client-update-application-deployment-action-update-android-enterprise-enrollment-settings-bug-fix/)

**What changed:** Minimum supported macOS raised from 10.7 to 12 (Monterey), effective 14 October, with existing enrolled devices unaffected and some functionality continuing on lower versions. Also a Windows client update, a change to the application deployment action, and an Android Enterprise enrollment settings bug fix.

**So what for MobiControl Windows:** Routine platform-floor maintenance. Noted alongside Scalefusion's November macOS 12 floor — support floors are converging across the field, which makes them easier to defend when SOTI sets its own.

### Scalefusion

Release of 9 Oct (Dashboard v68.3.0). Nothing Windows-specific; the notable items are Linux remote control and a security-operations integration.

#### Webhooks for SIEM events, and Remote Cast and Control for Linux

12 Oct 2026  ·  Linux, Windows, macOS, Android  ·  Windows relevance: medium · [Source](https://help.scalefusion.com/docs/scalefusion-october-9th-2026-release-notes)

**What changed:** Webhooks extended to SIEM-related events, including those available through the Splunk and QRadar integrations, with header-based authentication using a Bearer token, Authorization header or custom key-value headers, plus firewall guidance for SIEM tools behind a firewall. Separately, remote viewing and control for Linux devices on the RCV2 platform with multi-admin sessions, audio unmute and annotation; remote access requires the end user to grant permission and file transfer is not supported.

**So what for MobiControl Windows:** The SIEM webhooks are the relevant part for Windows customers: pushing device and security events into Splunk or QRadar is how a UEM stays relevant to the security team, not just the IT team. Worth knowing what event streaming MobiControl offers and whether it reaches the same tools.

### Microsoft Intune

A quiet week after the 26H2 baseline work. One item.

#### Remote Help for Windows 5.2.1210.0

12 Oct 2026  ·  Windows  ·  Windows relevance: low · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-12-2026)

**What changed:** New Remote Help for Windows client version with stability and observability improvements.

**So what for MobiControl Windows:** None. The open item from last week stands unchanged: confirm MobiControl's Windows 11 26H2 support position and make sure it is stated somewhere a customer can find it.

### Jamf

Jamf Pro 11.33.0, Apple-only as usual.

#### Per-device declaration status, and AFP deprecation for distribution points

macOS  ·  Windows relevance: none · [Source](https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.33.0/New_Features_and_Enhancements)

**What changed:** The Declarations pane in a device's Inventory tab now shows the status of every declaration deployed to that device, for compatible Jamf Cloud environments. Apple Filing Protocol support for file share distribution points is deprecated because Apple removed AFP in macOS 27.

**So what for MobiControl Windows:** No Windows implication. Per-device declaration status is the operational counterpart to the declarative migration — once configuration is declarative, administrators need visibility into what each device actually acknowledged. A useful idea to borrow conceptually for any declarative-style Windows configuration reporting.

### Hexnode

No product releases this week after last week's batch of seven. Three blog posts.

#### Guidance on AI agents in IT operations, and app distribution structure

15 Oct 2026  ·  Windows, macOS, Android, iOS  ·  Windows relevance: low · [Source](https://www.hexnode.com/blogs/how-to-introduce-ai-agents-into-it-operations-with-human-oversight/)

**What changed:** Three posts: introducing AI agents into IT operations with human oversight, App Catalogs versus App Groups for structuring app distribution, and centralising email, calendar and contacts on managed devices.

**So what for MobiControl Windows:** The AI agent piece is the one to note — Hexnode is positioning on governance and human oversight of agents, consistent with the Synapse direction from HexCon26 and with JumpCloud's agent identity work this week.

### ManageEngine

Six rows across builds 11.5.2627.57 to .59, all fixes.

#### Security fix in Configurations, Tomcat upgrade, Windows credential provider fix

13 Oct 2026  ·  Windows, Linux  ·  Windows relevance: medium · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** A security fix improving access control over uploaded configuration files, Tomcat upgraded from 9.0.120 to 9.0.122, a fix for Google Credential Provider for Windows sign-up, UI messaging for APD Feature Pack migration, and a Linux patch fix where a superseded package version could be wrongly marked installed.

**So what for MobiControl Windows:** None competitively. The Linux patch-status defect is a reminder that patch compliance reporting is only as good as its version comparison logic — worth a sanity check on how MobiControl determines a Windows update is genuinely installed versus superseded.

## Cross-platform signals worth knowing

- **Iru:** Added a separate target OS version for Automated Device Enrollment alongside the minimum required version, automatic FileVault recovery key rotation after an administrator views a key, Platform SSO with OpenID web sign-in at the macOS 27 login window, and recommended privacy permissions extended to Mac. — _The FileVault key rotation-after-view is the transferable idea: viewing a recovery key is treated as an event that invalidates it. That is a sound control pattern and directly applicable to BitLocker recovery keys on Windows._
- **JumpCloud:** Published a policy to block the macOS 27 Golden Gate installer from launching on MDM-enrolled Macs, with guidance to also defer major OS upgrades for up to 90 days in Patch Management. — _Blocking a major OS upgrade at the installer rather than only deferring it through update policy is a belt-and-braces approach customers ask for whenever a major Windows feature update lands._
- **Jamf:** Jamf Pro now automatically delivers a Privacy Preferences Policy Control profile granting Full Disk Access to Self Service+, in preparation for Jamf App Catalog deployments in blueprints. — _Vendors pre-provisioning their own permissions ahead of a feature rollout. Worth noting as a pattern customers may scrutinise in security reviews._

## No change this week

Ivanti

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | ok | 1 new section (Week of 12 Oct), one item only |
| intune-blog | no-change |  |
| iru-updates | ok | 8 new, all genuinely dated this period — the URL migration of the previous two weeks has completed |
| hexnode-whats-new | no-change | no new items after last week's batch of 7 |
| hexnode-blog | ok | 3 new posts |
| miradore-releases | ok | 3 new pages, including a known-issue disclosure |
| 42gears-press | no-change |  |
| 42gears-docs | ok | 27 new and 25 changed; mostly Apple software-update rings, with SureAccess for Windows the significant item |
| jamf-pro-release-notes | ok | moved to Jamf Pro 11.33.0, 9 topics |
| scalefusion-release-notes | ok | 1 new release (9 Oct, Dashboard v68.3.0) |
| scalefusion-product-updates | no-change |  |
| ivanti-quarterly-releases | no-change | Q4 2026 page still not published, 3 weeks after the quarter ended — now a notable gap rather than a delay |
| jumpcloud-release-notes | ok | 4 new entries, the most substantive week since the source was added |
| manageengine-endpoint-central | ok | 6 new rows across builds .57 to .59 |

## Appendix B. Method

Fourteen sources fetched by the scheduled run on 19 Oct 2026 and compared against the 12 Oct snapshots; all were reachable and none errored. Iru's URL migration has finished, so its counts are reliable again for the first time in three weeks and nothing is double-reported. 42Gears publishes no release notes, so its documentation changes are the release signal and are described as documented rather than announced; this week's 27 new pages are predominantly an Apple software-update documentation build-out. Miradore and Jamf release pages carry no publication dates, so their recency is inferred from appearing in the diff. The scheduled run again fetched successfully but stopped before its analysis step because the local Claude Code CLI is still not signed in, so this report was written in-session from that run's preserved diff; the underlying data is the scheduled run's, unmodified.
