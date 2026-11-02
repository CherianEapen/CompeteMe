# MobiControl Competitor Update — week ending 2 Nov 2026

Coverage: 2026-10-26 – 2026-11-02 · Generated: 2026-11-02

## Executive summary

- Microsoft dominated the week. Intune service release 2610 is the heaviest Windows release in the eight weeks this report has run, and it lands immediately before Ignite: native Administrator protection controls, STIG audit baselines for commercial tenants, general availability of Defender agent runtime protection with a new AI agent runtime inspection setting, and a security baseline for Cloud PCs running agentic workloads.
- Administrator protection is the item to look at first. Windows 11 now exposes Administrator Approval Mode and elevation prompt behaviour as Intune policy, which is the platform-native answer to the privilege-elevation gap that 42Gears filled with JIT Admin three weeks ago. The capability is moving into Windows itself rather than remaining a UEM differentiator.
- One operational item worth passing to anyone running Intune alongside MobiControl: Microsoft has added a push-notification endpoint, *.trouter.communications.svc.cloud.microsoft, that must be allowed through the firewall for device actions, Win32 apps, PowerShell scripts and Remediations to work promptly.
- JumpCloud shipped admin control of its Workflows through an MCP server, so an AI client can create, modify and troubleshoot automation in natural language. It is the first vendor tracked here to ship that as a released capability rather than a tech preview, and it pairs with its SIEM integration released the same week.
- Scalefusion added OneIdP RADIUS, authenticating Wi-Fi and VPN access against IdP credentials or certificates to remove static Wi-Fi passwords. Iru shipped a new Windows agent and Auto Apps; ManageEngine spent the week on OS deployment defects; Ivanti has now published nothing for five weeks.

## Top signals

| Signal | Vendor | Why it matters | Urgency |
|---|---|---|---|
| Intune exposes Windows 11 Administrator protection as policy | Microsoft Intune | Administrator Approval Mode and elevation prompt behaviour are now configurable from Account protection policies and the settings catalog on Windows 11 24H2 and 25H2. Privilege elevation is becoming a platform feature rather than a UEM differentiator, which changes how MobiControl should talk about it. | Respond |
| STIG audit baselines reach Intune commercial tenants | Microsoft Intune | Commercial customers can audit Windows devices against DISA STIG recommendations with per-setting and per-device results and no configuration change. Compliance auditing as a built-in function raises the bar for what regulated Windows buyers expect from any management tool. | Watch |
| Microsoft removes polling latency from Windows scripts, and adds a required firewall endpoint | Microsoft Intune | Push-triggered delivery now covers Windows scripts after Win32 apps and compliance evaluation — the third such change since September. The new trouter endpoint is a concrete firewall action for co-managed estates. | Respond |
| JumpCloud ships MCP-based admin control of Workflows | JumpCloud | An AI client can create, modify, duplicate and troubleshoot JumpCloud automation in natural language through an existing MCP connection. First released — not preview — implementation of AI operating the admin console among tracked vendors. | Watch |
| Scalefusion adds OneIdP RADIUS for Wi-Fi and VPN authentication | Scalefusion | EAP-TLS, PEAP and certificate-based authentication against the customer's IdP, with MFA, removing static Wi-Fi credentials. Network access control is the third security adjacency Scalefusion has entered this autumn after vulnerability management and secure web gateway. | Watch |

## Vendor detail

### Microsoft Intune

Service release 2610 plus the October monthly recap. Seven Windows-relevant items, listed below in rough order of consequence; the remainder of 2610 is Apple and Android work including the removal of legacy Apple MDM software update workloads.

#### Administrator protection settings in Account protection policies and the settings catalog

26 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610)

**What changed:** Two Administrator protection settings are available in endpoint security Account protection policies and, separately, in the settings catalog for Windows 11 versions 24H2 and 25H2. Administrators configure the Administrator Approval Mode type and choose the elevation prompt behaviour used with Administrator protection.

**So what for MobiControl Windows:** Reframes the privilege-elevation conversation. Three weeks ago 42Gears' JIT Admin looked like a feature MobiControl might need to match; Windows 11 now provides the underlying control and Intune is simply surfacing it. The useful question is therefore narrower: can MobiControl configure Administrator protection on Windows 11 24H2 and 25H2 through its own policy surface, the way it configures other Windows CSP settings? If yes, this is largely parity achieved by the platform. If the settings are not reachable, that is a concrete and fixable gap.

#### STIG audit baselines for Windows devices in commercial tenants

26 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610)

**What changed:** Commercial Intune tenants can audit Windows devices against Security Technical Implementation Guide recommendations, reviewing per-setting and per-device audit results to identify configuration gaps and prioritise remediation. The baseline evaluates supported automated checks without changing device settings. Requires Intune Advanced Analytics; rules needing manual verification are assessed separately.

**So what for MobiControl Windows:** Previously government-cloud only, now available to any commercial customer with the right licence. Note what it is: an audit that reports gaps without enforcing them, which is exactly the artefact compliance teams want. This is the fifth compliance-evidence capability across vendors in seven weeks. The pattern is now firm enough to treat as a roadmap input rather than a series of individual competitor moves.

#### Push-triggered Windows script delivery, and a new required network endpoint

26 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610)

**What changed:** Intune now uses push notifications for admin-initiated and service-side changes to Windows scripts, so devices check in sooner instead of waiting for the polling interval. Separately, Microsoft improved push-notification connectivity for device actions, Win32 apps, PowerShell scripts and Remediations, and recommends adding *.trouter.communications.svc.cloud.microsoft to firewall rules.

**So what for MobiControl Windows:** Two distinct points. The firewall endpoint is immediately actionable for customers running both products — worth having support aware of it. Strategically, this is the third push-latency removal since September, after Win32 apps and client-driven compliance evaluation. Microsoft is systematically converting Windows management from poll to push, and responsiveness is becoming a comparison axis where MobiControl's agent architecture should have a good answer. Worth stating that answer explicitly somewhere.

#### Defender agent runtime protection generally available, with AI agent runtime inspection

26 Oct 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610)

**What changed:** The endpoint security template for Microsoft Defender for Endpoint agent runtime protection is generally available for Windows, out of preview, with a new AI agent runtime inspection setting added to the template.

**So what for MobiControl Windows:** The preview version of this appeared in the 28 September report; it is now GA with an explicit AI agent inspection control. Combined with the Cloud PC agent baseline below, Microsoft has moved from acknowledging AI agents on endpoints to shipping named controls for them inside two months. Worth forming a position on what MobiControl says about AI agents running on managed Windows devices, because the vocabulary is now Microsoft's.

#### Security baseline for Windows 365 for Agents Cloud PCs; STIG and Edge baselines

29 Oct 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://techcommunity.microsoft.com/t5/microsoft-intune-blog/what-s-new-in-microsoft-intune-october/ba-p/4548721)

**What changed:** The October recap describes a security baseline for Windows 365 for Agents Cloud PCs, deploying recommended settings for Windows 11, Microsoft Edge and Defender for Endpoint to establish a consistent posture for agentic workloads before an agent's first task.

**So what for MobiControl Windows:** Niche today — it applies to Cloud PCs provisioned for AI agents, not to physical endpoints. Noted as the clearest statement yet of where Microsoft thinks agent workloads will run, which is on managed Windows instances that need the same hardening as a user's device. Not a MobiControl action item; a directional marker.

#### Certificate connector health monitoring and scoped RBAC general availability

26 Oct 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610)

**What changed:** The Certificate Connector surfaces health and status signals in the admin centre, flagging conditions such as being unable to reach the certification authority, the service account lacking permission to issue or revoke, or template mismatches with the PKCS profile, each with remediation guidance. Separately, scoped permissions for role-based access control are generally available: permissions from role assignments with different scope tags now apply independently rather than being merged.

**So what for MobiControl Windows:** Both are administrative maturity rather than new capability, and both are the kind of thing that quietly reduces support load. Certificate issuance failures are a classic silent cause of Wi-Fi and VPN access problems; proactive health signals are a reasonable thing for a customer to expect from any UEM. Worth comparing against how MobiControl surfaces certificate infrastructure problems.

### JumpCloud

Four entries, two of them substantive. The AI and SIEM work lands in the same week.

#### Workflows manageable through the JumpCloud MCP Server

30 Oct 2026  ·  Windows, macOS, Linux  ·  Windows relevance: medium · [Source](https://jumpcloud.com/support/release-notes-2026#october-30th-2026)

**What changed:** An MCP-enabled AI client can create, modify, duplicate and troubleshoot JumpCloud Workflows using natural language: inspect workflow definitions and run history, manually trigger workflows where supported, and review per-node outcomes and error details in the same conversation. Available through the existing MCP Server connection with no additional credentials. The workflow template library was also expanded.

**So what for MobiControl Windows:** The significant part is that this is shipped, not previewed. Ivanti demonstrated MCP access to operational data as a tech preview in Q3; JumpCloud has released AI-driven authoring and troubleshooting of automation. For SOTI the question is not whether to build a chatbot but whether MobiControl's administrative surface is reachable by an AI client at all — that is an API and integration decision more than an AI one, and it is becoming the way this capability gets delivered.

#### SIEM integration in Directory Insights

26 Oct 2026  ·  Windows, macOS, Linux  ·  Windows relevance: medium · [Source](https://jumpcloud.com/support/release-notes-2026#october-26th-2026)

**What changed:** A SIEM-agnostic path to ingest JumpCloud identity events into external SIEM platforms: continuous events API pull using an existing API key in RAW or OCSF-normalised formats, asynchronous historical export jobs for up to 7-day windows across a 13-month retention lookback, output as JSON or CSV with email notification, and a public event catalogue documenting field definitions.

**So what for MobiControl Windows:** Second vendor in three weeks to ship SIEM event streaming after Scalefusion's webhooks. The details that matter competitively are OCSF normalisation and a documented event catalogue — those are what make a security team's integration cheap. Worth knowing what MobiControl offers for exporting device and admin events into Splunk, Sentinel or QRadar, and whether the schema is documented publicly.

### Scalefusion

Release of 23 Oct, Dashboard v68.4.0, with new major agent versions across all four platforms including Windows MDM Agent v17.3.0.

#### OneIdP RADIUS for Wi-Fi and VPN authentication

26 Oct 2026  ·  Windows, macOS, Android, iOS  ·  Windows relevance: medium · [Source](https://help.scalefusion.com/docs/scalefusion-october-23rd-2026-release-notes)

**What changed:** Authenticates corporate Wi-Fi and VPN access using identity provider credentials or certificates, to eliminate static Wi-Fi credentials and restrict access to devices holding valid certificates. Supports EAP-TLS, EAP-TTLS, PEAP (MS-CHAP v2), MS-CHAP v2 and PAP depending on the operating system, with MFA through OneIdP or a third party. Enterprise Wi-Fi is configured through MDM payloads; where MFA is enabled users append MFA information to the username field because the OS provides no separate input.

**So what for MobiControl Windows:** Watch rather than match. Note the usability compromise Scalefusion documents — appending the MFA code to the username — which suggests this is a first implementation rather than a polished one. The strategic read is consistent with 42Gears: mid-market UEM vendors are moving into network access and identity to broaden their footprint, and both are now selling the bundle argument against a device-management-only product.

### Iru

Eleven genuine updates. Two Windows, the rest macOS catalogue additions and one notable macOS security capability.

#### Iru Agent for Windows 1.25.7 and new Windows Auto Apps

29 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.iru.com/updates/2026/10/29/iru-agent-for-windows-1.25.7)

**What changed:** Endpoint agent release 1.25.7, and additional Windows Auto Apps added to the catalogue for all Iru Endpoint customers.

**So what for MobiControl Windows:** Routine, and notable mainly for cadence: Iru has shipped a Windows agent release in five of the eight weeks covered by this report. The release note carries no detail this time, which breaks their usual pattern of listing fixes — nothing to read into yet, but worth watching whether the Windows app-inventory defects noted in previous weeks have settled.

#### Remote Shell with threat containment on macOS

28 Oct 2026  ·  macOS  ·  Windows relevance: none · [Source](https://www.iru.com/updates/2026/10/28/remote-shell)

**What changed:** Remote Shell provides a root command line on a managed Mac, launched from a detection or the device record, and stays connected while the Mac is in Partial Isolation so an administrator can contain a threat and investigate it at the same time.

**So what for MobiControl Windows:** No Windows equivalent announced, but the design idea is the transferable part: isolating a compromised endpoint from the network while retaining an administrative channel into it. That combination — contain and investigate simultaneously — is what incident responders ask for, and it is a reasonable thing to consider for Windows remote support.

### ManageEngine

Thirteen rows across builds .61 to .65, almost entirely defects, and unusually concentrated: eight of them are OS deployment failures.

#### A cluster of OS deployment defects, and feature pack exclusion handling

30 Oct 2026  ·  Windows  ·  Windows relevance: medium · [Source](https://www.manageengine.com/products/desktop-central/hotfix-readme.html)

**What changed:** Fixes for automatic publishing of PXE media after upgrade, media failing to mount during update, encryption and decryption failures under OS Deployment, domain join failing during post-deployment, OS deployment applications freezing during and after deployment, ZIP extraction and package installation errors, and invalid CA certificate connection failures. Separately, cloned feature packs now correctly suspend Automated Patch Deployment and Test and Approve groups to prevent unintended deployment, and the feature-pack exclusion-rule bypass reported last week was fixed.

**So what for MobiControl Windows:** Useful and specific competitive intelligence. Eight OS deployment defects in one build — PXE, media mounting, encryption, domain join, application hangs — points to real instability in ManageEngine's Windows imaging workflow. That is directly relevant because bare-metal Windows provisioning is the capability Ivanti marketed in the baseline report and which MobiControl does not offer. If a prospect raises OS deployment, the honest competitive line is about reliability, not just presence, and ManageEngine's own release notes support it.

### Hexnode

No product releases. Two blog posts, one of which is unusual.

#### Guidance on rolling out ThreatLocker on Windows

28 Oct 2026  ·  Windows  ·  Windows relevance: high · [Source](https://www.hexnode.com/blogs/threatlocker-rollouts-on-windows-the-groupkey-and-validation-checks-that-matter/)

**What changed:** A practical guide to deploying ThreatLocker — a third-party application allowlisting product — on Windows through Hexnode, covering GroupKey configuration and validation checks. A second post covers XDR access when a security technician joins or leaves.

**So what for MobiControl Windows:** Worth noticing because it runs against the prevailing direction. While 42Gears and Scalefusion build their own security products, Hexnode is publishing deployment guidance for someone else's allowlisting tool — positioning as the delivery mechanism rather than the security vendor. That is the same posture MobiControl holds, and it is a reminder that there is a credible alternative strategy to the bundled-suite argument. The content choice also suggests ThreatLocker appears often enough in Hexnode's Windows accounts to be worth writing for.

### Miradore

One release covering Android app allowlisting and client updates.

#### Client update for Windows and macOS; managed Google Play apps allowed by tag

Windows, macOS, Android  ·  Windows relevance: medium · [Source](https://www.miradore.com/knowledge/releases/allow-installation-of-managed-google-play-apps-using-tags-miradore-client-update-for-macos-and-windows-windows-version-display-bug-fix/)

**What changed:** Tags can be used to allow installation of specific managed Google Play applications across multiple devices at once. The Miradore client was updated for macOS and Windows, and a Windows version display bug was fixed.

**So what for MobiControl Windows:** Minor. The Windows version display defect is worth a passing note only because accurate OS version reporting underpins every compliance report — the capability four vendors have now shipped. Getting the underlying inventory right matters more than the reporting layer on top of it.

### Jamf

Jamf Pro 11.33.3, a maintenance release with one notable entry.

#### PreStage enrollment setting added; an 11.33.0 fix reverted

macOS  ·  Windows relevance: none · [Source](https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.33.3/New_Features_and_Enhancements)

**What changed:** A setting was added to the General pane in computer PreStage enrollments. A resolved issue shipped in Jamf Pro 11.33.0 was reverted in this release due to database degradation.

**So what for MobiControl Windows:** No Windows implication. The revert is the interesting detail: Jamf shipped a fix that degraded database performance and withdrew it two releases later, disclosed plainly in the release notes. Noted as a benchmark for release-note candour rather than as competitive weakness.

## Cross-platform signals worth knowing

- **Microsoft Intune:** Legacy Apple MDM software update workloads have been removed from Intune now that Apple retired the underlying commands in OS 27, with administrators directed to declarative device management update policies. Apple OS 27 DDM status data was also added to device inventory. — _Closes the declarative migration across every Apple-capable vendor tracked here except Miradore, which disclosed two weeks ago that its OS update management is affected. That contrast is now a matter of public record on both vendors' own sites._
- **Iru:** Added macOS Auto Apps for GitHub Copilot, Grok Bot, Termius, RustDesk, Proxyman, Superhuman and XQuartz. — _AI assistants are entering managed application catalogues as ordinary deployable software. Expect the same on Windows, and with it the question of how an administrator controls which AI tools are permitted on a managed device._
- **42Gears:** A documentation restructure moved 82 pages and retired 81, reorganising Android Enterprise, Samsung Knox, device administrator, and newly separated VR device and Wear OS sections. — _No product change and no Windows content, but the appearance of dedicated VR and Wear OS documentation sets suggests 42Gears is formalising support for device classes beyond phones and desktops._
- **Ivanti:** Still no Q4 2026 release page, five weeks after the quarter ended. — _The quarterly page appears to have been discontinued. Recommend re-pointing this source at Ivanti's per-product release notes; otherwise Ivanti coverage will stay silent indefinitely and the silence will be mistaken for inactivity._

## Appendix A. Source status

| Source | Status | Note |
|---|---|---|
| intune-whats-new | ok | 2 new sections including service release 2610, the largest Windows release in this report's run |
| intune-blog | ok | 1 new post, the October monthly recap |
| iru-updates | ok | 15 reported new, 11 dated after 26 Oct; the remainder were previously reported items re-presented by the feed |
| hexnode-whats-new | no-change |  |
| hexnode-blog | ok | 2 new posts |
| miradore-releases | ok | 1 new release page |
| 42gears-press | no-change |  |
| 42gears-docs | ok | 82 new, 21 changed, 81 removed — a URL restructure of the Android, Knox, VR and Wear OS sections, not new product content |
| jamf-pro-release-notes | ok | moved to Jamf Pro 11.33.3 |
| scalefusion-release-notes | ok | 1 new release (23 Oct, Dashboard v68.4.0, Windows agent v17.3.0) |
| scalefusion-product-updates | no-change |  |
| ivanti-quarterly-releases | no-change | Q4 2026 page absent 5 weeks after quarter end; recommend re-pointing this source |
| jumpcloud-release-notes | ok | 4 new entries |
| manageengine-endpoint-central | ok | 13 new rows across builds .61 to .65, 8 of them OS deployment defects |

## Appendix B. Method

Fourteen sources fetched by the scheduled run on 2 Nov 2026 and compared against the 26 Oct snapshots; all were reachable and none errored. Iru's feed again re-presented four previously reported items, so its entries were filtered by publication date and only those after 26 Oct are analysed. 42Gears' 82 new pages are a documentation URL restructure rather than new product content, identified by the matching 81 removals and confirmed by section; no Windows pages were involved. Miradore and Jamf release pages carry no publication dates, so recency is inferred from their appearance in the diff. Ivanti has published nothing since Q3 and its quarterly page appears discontinued, so Ivanti coverage should be treated as absent rather than as an absence of activity. The scheduled run fetched successfully but stopped before its analysis step; this report was written in-session from that run's preserved diff, with the underlying data unmodified.
