# Competitor watch — fetch diff 2026-09-21

Period: 2026-09-15 → 2026-09-21. Sources marked *baseline* have no previous snapshot and list only items dated within the last 14 days (or the newest undated items). Full item text is in diff.json.

## Summary

| Source | Vendor | Status | New | Changed | Note |
|---|---|---|---|---|---|
| intune-whats-new | Microsoft Intune | ok | 1 | 0 | 6 items; 1 removed |
| intune-blog | Microsoft Intune | no-change | 0 | 0 | 20 items |
| iru-updates | Iru | ok | 7 | 0 | 50 items; 7 removed |
| hexnode-whats-new | Hexnode | no-change | 0 | 0 | 23 items |
| hexnode-blog | Hexnode | ok | 6 | 0 | 6 items; 3 removed |
| miradore-releases | Miradore | ok | 1 | 0 | 366 items |
| 42gears-press | 42Gears | no-change | 0 | 0 | 103 items |
| 42gears-docs | 42Gears | ok | 2 | 5 | 930 items |
| jamf-pro-release-notes | Jamf | ok | 3 | 0 | 3 items; v11.32.1; 14 removed |
| scalefusion-release-notes | Scalefusion | ok | 1 | 0 | 25 items |
| scalefusion-product-updates | Scalefusion | no-change | 0 | 0 | 10 items |
| ivanti-quarterly-releases | Ivanti | no-change | 0 | 0 | 67 items |
| manageengine-endpoint-central | ManageEngine | ok | 3 | 0 | 399 items; 3 removed |

## Microsoft Intune

### intune-whats-new — ok

Kind: html-sections · Source: https://learn.microsoft.com/en-us/intune/whats-new/

#### New (1)

- **Week of September 14, 2026** — 2026-09-14 — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-14-2026> — Windows: high
  > Device security
  > Faster compliance updates for Windows devices
  > Microsoft Intune now supports client-driven compliance evaluation for Windows devices. Supported devices can detect changes to compliance signals, including firewall, antivirus, BitLocker, Microsoft Defender status, operating system build, real-time protection, and Secure Boot, and proactively request reevaluation rather than waiting for a scheduled check-in. This provides faster compliance updates for remediation, reporting, and access decisions. Evaluation of compliance policies during check-in also occurs when a calculation is triggered.
  > For more information, see Create a compliance policy in Microsoft Intune.
  > Applies to:
  > Windows

### intune-blog — no-change

Kind: rss · Source: https://techcommunity.microsoft.com/t5/s/gxcuf89792/rss/board?board.id=MicrosoftIntuneBlog

No new or changed items.

## Iru

### iru-updates — ok

Kind: rss · Source: https://www.iru.com/updates/rss.xml

#### New (7)

- **Introducing MSP Billing** — 2026-09-18 — <https://www.iru.com/updates/introducing-msp-billing> — Windows: none
  > MSP Billing gives managed services providers daily, per-tenant spend visibility, so they always know what they owe and can bill clients with confidence. MSPs can also update payment methods, billing information, and view past invoices. It's available now for U.S. customers, with self-serve setup in minutes, right in the Partner Portal.

- **Windows Managed OS patch compliance** — 2026-09-18 — <https://www.iru.com/updates/windows-managed-os-patch-compliance> — Windows: high
  > The Managed OS Library Item for Windows now reports whether each assigned device has reached the Windows 11 build the Library Item requires. Devices show as Pass, Update past due, or Error, and expanding a device row shows its current build against the required build, plus the eligibility, install enforcement, and restart enforcement dates.

- **Iru Agent for Windows 1.22.3** — 2026-09-18 — <https://www.iru.com/updates/iru-agent-for-windows-1.22.3> — Windows: high
  > We've released Iru Agent for Windows. This release fixes Custom App and Auto App detection so apps are no longer reinstalled when a version is missing or misread, corrects Auto Apps enforcement after a user closes an app, and resolves agent installation failures.

- **Windows Update Library Item Recommendations in Iru AI** — 2026-09-17 — <https://www.iru.com/updates/windows-update-library-item-recommendations-in-iru-ai> — Windows: high
  > Iru AI can now recommend and implement Windows Update settings based on CIS benchmarks or Microsoft defaults, and you can ask follow-up questions to refine those settings or understand their behavior. Iru AI can also answer questions about most Library Items, settings, and best practices from any chat, even when you're not on that Library Item page.

- **Iru Agent for Mac Release 5.1.102 (5396)** — 2026-09-17 — <https://www.iru.com/updates/iru-agent-for-mac-release-5.1.102-5396> — Windows: none
  > We’ve released Iru Agent for Mac 5.1.102 (5396).

- **Introducing macOS LAPS** — 2026-09-17 — <https://www.iru.com/updates/macos-laps> — Windows: none
  > Introducing macOS LAPS: Local Administrator Password Solution. The new LAPS Library Item for Mac automatically generates, rotates, securely escrows, and controls access to local administrator passwords.

- **Iru Agent for Mac Release 5.1.101 (5395)** — 2026-09-15 — <https://www.iru.com/updates/iru-agent-for-mac-release-5.1.101-5395> — Windows: none
  > We’ve released Iru Agent for Mac 5.1.101 (5395).

## Hexnode

### hexnode-whats-new — no-change

Kind: next-data · Source: https://www.hexnode.com/whats-new/

No new or changed items.

### hexnode-blog — ok

Kind: rss · Source: https://www.hexnode.com/blogs/feed/

#### New (6)

- **Why Workflow Automation is Critical for Scaling a DaaS Operation** — 2026-09-18 — <https://www.hexnode.com/blogs/why-workflow-automation-is-critical-for-scaling-a-daas-operation/> — Windows: none
  > Why does manual device management break down as DaaS scales?
  > Manual device management becomes difficult to sustain as DaaS operations add more devices, customers, platforms, and lifecycle events. DaaS workflow automation becomes important because provisioning, configuration changes, app deployment, updates, compliance tasks, and device refresh activities otherwise create growing volumes of repetitive administrative work.
  > Scaling should increase the number of devices a team can manage, not require administrative effort to grow at the same rate.
  > Where do repetitive workflows create operational bottlenecks?
  > Bottlenecks emerge when IT teams repeatedly target devices, deploy configurations, schedule routine actions, track exceptions, and coordinate lifecycle tasks manually. The workload becomes harder to standardize across heterogeneous fleets, where enrollment methods, available management actions, and controls can vary by platform.
  > Improve DaaS efficiency with workflow automation
  > What does a DaaS operation risk without workflow automation?
  > Without workflow automation, Device-as-a-Service operations face higher administrative workloads, inconsistent execution, and slower routine device operations. As fleets grow, teams may need additional operational capacity simply to repeat tasks they already perform for smaller deployments.
  > Manual processes can make outcomes less consistent as device volumes and operational complexity increase. Similar provisioning, maintenance, or refresh ev…

- **What is Digital Employee Experience (DEX)? – A Complete Guide** — 2026-09-17 — <https://www.hexnode.com/blogs/digital-employee-experience/> — Windows: medium
  > Workplace technology can meet every availability target and still prevent employees from working efficiently. Slow devices, failed applications, fragmented support and repetitive access processes create friction that conventional infrastructure metrics may not reveal. Digital employee experience gives IT teams a broader way to understand these interactions, connect technical conditions with employee outcomes and improve how workplace technology is delivered. This guide examines what DEX includes, how it operates, how it is measured and where employee self-service fits within a broader DEX strategy.
  > Explore Hexnode UEM
  > What Is Digital Employee Experience (DEX)?
  > Digital employee experience (DEX) is the quality of employees’ interactions with workplace technology and their perception of those interactions. It covers devices, applications, access systems, digital workflows, information resources and IT support throughout the employee lifecycle—from onboarding and daily work to role changes, support and offboarding.
  > DEX in simple terms
  > DEX evaluates whether technology enables employees to work effectively or introduces unnecessary friction. It combines objective signals, such as device health, application performance, login times and support resolution data, with subjective signals, including employee feedback and perceived ease of use.
  > This distinction matters because technical availability does not guarantee a good experience. However, a service may be operational while employe…

- **How Can MSPs Manage Windows, macOS, iOS, and Android Clients from One Console?** — 2026-09-16 — <https://www.hexnode.com/blogs/manage-multiple-os-one-console/> — Windows: high
  > Why Is It Hard for MSPs to Manage Multiple OS from One Console?
  > Cross-platform endpoint management helps MSPs manage multiple OS from one console instead of separating administration by operating system. It centralizes management workflows for supported Windows, macOS, iOS, iPadOS, and Android devices within a unified management environment.
  > MSPs commonly support clients with varied operating-system environments. A single client may use Windows laptops, Mac workstations, iPhones, iPads, and Android devices. Without cross-platform management, technicians may need to work across multiple platform-specific consoles.
  > That fragmentation creates immediate operational drag. Technicians constantly switch between platform-specific tools to check device status, change configurations, deploy applications, or troubleshoot issues. As a result, each task requires additional navigation and platform-specific knowledge.
  > Duplicate onboarding workflows add another layer of overhead. MSP teams may repeat enrollment, application deployment, configuration, and security policy setup across different management systems. Consequently, onboarding a new client or device group can require several parallel workflows.
  > Policy management also becomes harder across operating systems. Separate tools can expose different configuration models, terminology, and administrative processes. Therefore, technicians must verify settings across multiple consoles to maintain consistent client policies.
  > These challenges…

- **What Role Does UEM Play in a Device-as-a-Service Model?** — 2026-09-16 — <https://www.hexnode.com/blogs/what-role-does-uem-play-in-a-device-as-a-service-model/> — Windows: medium
  > A device subscription does not manage the device
  > Device as a Service (DaaS) simplifies how organizations acquire, deploy, and refresh hardware, but the device still requires ongoing management after delivery. UEM in Device as a Service provides the management layer for controlling devices throughout their active use.
  > Between deployment and retirement, IT teams still need to configure settings, manage applications and updates, enforce security policies, troubleshoot issues, maintain device visibility, and handle deprovisioning. Without a centralized approach, these activities can remain disconnected from the broader DaaS lifecycle.
  > UEM connects these digital management tasks while the DaaS model handles services such as physical logistics, repair, refurbishment, and disposal.
  > Where does the DaaS model start to strain?
  > DaaS becomes harder to manage as device volumes, users, locations, operating systems, replacements, and refresh cycles increase. Each addition creates more management events for IT.
  > Handling these events individually can replace the efficiency of DaaS with repetitive administrative work. The challenge is therefore not simply delivering devices but maintaining a repeatable management model after deployment.
  > Power DaaS operations with Hexnode UEM
  > The hardest part of DaaS is managing the handoffs
  > DaaS operations are most vulnerable to friction when devices move between lifecycle stages. A device may pass from provider to employee, employee to support, replacement t…

- **Device Lifecycle Stages: How Devices Move from Procurement to Retirement** — 2026-09-16 — <https://www.hexnode.com/blogs/device-lifecycle-stages-how-devices-move-from-procurement-to-retirement/> — Windows: medium
  > What is the device lifecycle?
  > The device lifecycle stages describe the sequence an organizational device moves through from initial planning and procurement to deployment, active use, refresh or reassignment, and eventual retirement. Each stage introduces different requirements for managing the device, its data, and its relationship with the organization.
  > Device lifecycle management connects these stages instead of treating management as something that begins only after deployment. It brings together asset ownership, configuration, security, application and update management, user support, and end-of-life decisions.
  > A typical lifecycle includes planning and procurement, enrollment and provisioning, deployment, active management, maintenance and support, refresh or reassignment, and retirement. Device as a Service (DaaS) providers may deliver some of these lifecycle activities, depending on the provider and service agreement.
  > Streamline device lifecycle management with Hexnode UEM
  > Why does device lifecycle management become difficult at scale?
  > Device lifecycle management becomes harder as fleets grow across operating systems, remote users, ownership models, and procurement channels. IT teams can lose visibility into device ownership, configuration, and lifecycle status.
  > Disconnected procurement, inventory, endpoint management, support, and retirement processes create further gaps as devices move between users and stages. Maintaining continuity from acquisition through retirem…

- **What Should DaaS Providers Consider When Evaluating UEM Platform ROI?** — 2026-09-16 — <https://www.hexnode.com/blogs/what-should-daas-providers-consider-when-evaluating-uem-platform-roi/> — Windows: medium
  > What should DaaS providers calculate when evaluating UEM ROI?
  > DaaS providers should calculate UEM ROI for DaaS across operational labor, lifecycle costs, scalability, customer experience, and risk reduction, not license cost alone. Subscription price is only one part of the cost to deliver a managed device. The key question is whether the platform reduces work, delays, and asset losses across the customer contract.
  > Spreadsheets and fragmented operations can hide these costs. Separate tools for inventory, provisioning, support, and reporting make it harder to track technician time, unmanaged exceptions, and the value lost when devices are not recovered or reassigned promptly.
  > The calculation is harder across mixed fleets and multiple customers or business units. Providers need visibility into provisioning, monitoring, support, recovery, replacement, and offboarding. Measuring these connected activities reveals the actual cost of delivering DaaS.
  > Optimize DaaS ROI with Hexnode UEM
  > Why does an incomplete ROI calculation hurt DaaS profitability?
  > An incomplete ROI calculation can make an apparently profitable Device-as-a-Service (DaaS) offering unprofitable by excluding the recurring operational costs that accumulate throughout a device contract. Providers should assess long-term operating margins, not just initial deployment costs.
  > Manual work: Repeated configuration, troubleshooting, reporting, and follow-up tasks increase technician time per device and reduce the capacity avai…

## Miradore

### miradore-releases — ok

Kind: link-list · Source: https://www.miradore.com/knowledge/releases/

#### New (1)

- **Bug fix: Android managed app configuration deployment via business policy** — <https://www.miradore.com/knowledge/releases/bug-fix-android-managed-app-configuration-deployment-via-business-policy/> — Windows: none
  > We fixed a bug where deploying an application and its managed configuration together through a business policy could result in the managed configuration not being applied on Android devices.
  > Have you already subscribed to our newsletter?
  > Fill in your email address to get the latest Miradore news and articles delivered directly to your inbox!
  > To view our Privacy Policy, click here

## 42Gears

### 42gears-press — no-change

Kind: link-list · Source: https://www.42gears.com/press-releases

No new or changed items.

### 42gears-docs — ok

Kind: sitemap · Source: https://docs.42gears.com/suremdm/sitemap.xml

2 new / 5 changed items, none matching the report filter.

## Jamf

### jamf-pro-release-notes — ok

Kind: jamf-khub · Source: https://learn.jamf.com

#### New (3)

- **New Features and Enhancements > Changes and Improvements — Jamf Pro 11.32.1** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.32.1/Changes_and_Improvements> — Windows: none
  > Jamf Pro 11.32.1 includes Tomcat 10.1.59.
  > Jamf Remote Assist now includes compatibility for computers with macOS 27 or later.

- **New Features and Enhancements > Resolved Issues — Jamf Pro 11.32.1** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.32.1/Resolved_Issues> — Windows: none
  > Jamf Pro Server: Security Issues
  > Jamf provides the CVE-ID for security issues with high or critical severity when possible.
  > [PI205872] FIxed: A known vulnerability in a third-party library (CVE-2026-56822, CVE-2026-55831,CVE-2026-59901)
  > [PI222752] Fixed: A known vulnerability in a third-party library (CVE-2026-55858)
  > [PI223203] Fixed: A known vulnerability in a third-party library (CVE-2026-73089)
  > [PI-1654] [PI223696] Fixed: A known vulnerability in a third-party library (CVE-2026-41003)
  > Jamf Pro Server
  > [PI-1519] Fixed: Jamf Pro returns a 409 error when using referential smart groups with the advanced mobile device searches API endpoint.
  > [PI-1580] Fixed: The device compliance workflow with Entra ID fails to register devices if an interactive sign-in option (such as multifactor authentication) is enabled.
  > [PI-1592] Fixed: Volume purchase invitations sent to users with personal Apple IDs do not display device-level prompts or appear in Self Service, preventing users from associating their account and receiving assigned content.
  > Important:
  > The change in [PI-1592] applies only to volume purchase invitations sent after you upgrade. Invitations that were already pending before the upgrade remain pending and are not resolved automatically. To resolve a pending invitation, send a new invitation to the affected user.
  > [PI-1618] [PI221593] Fixed: The identity first workflow with Platform SSO fails with a 409 "Ambiguous SSO provider" error when the Okta profile's AppPrefixAllowList cont…

- **New Features and Enhancements > Additional Information — Jamf Pro 11.32.1** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.32.1/Additional_Information> — Windows: none
  > For information on new features and other resolved issues, use the version picker at the top of the page to view previous Jamf Pro release notes.

## Scalefusion

### scalefusion-release-notes — ok

Kind: d360-index · Source: https://help.scalefusion.com/docs/latest-release-notes-year-{year}

#### New (1)

- **Scalefusion September 9th, 2026 Release Notes** — 2026-09-15 — <https://help.scalefusion.com/docs/scalefusion-september-9th-2026-release-notes> — Windows: none
  > Version Information
  > Scalefusion Dashboard: v67.7.0
  > Scalefusion On-Prem Connector: v2.5.5
  > Release Notes
  > Day Zero Enhancements for Apple
  > Scalefusion applications have been tested and updated for full Day Zero compatibility with Apple's latest operating systems.
  > a. Apple Intelligence and Siri: On iOS 26.4+ and macOS 26.4+, Apple Intelligence and Siri restriction settings are now delivered through DDM declarations, replacing legacy MDM keys while maintaining backward compatibility for older OS versions.
  > b. Apple Intelligence Controls: Added controls for Apple Intelligence Report, Visual Intelligence Summary, Safari Summary, Mail Smart Replies, Notes Transcription, and Calendar Natural Language Editing. On-device enforcement is also supported for Dictation and Translation.
  > c. New iOS Restrictions: Added restrictions for Default Calling App Modification, Default Messaging App Modification, Satellite Connection, and Proximity Setup to New Device.
  > d. New macOS Restrictions: Added restrictions for Force Captive Portal Connection from Lock Screen, Force WiFi Configuration on Lock Screen, and Allow Rosetta Usage Awareness.
  > e. iOS OS Update Settings: OS update settings have been restructured with controls for Automatic Install and Download, Recommended Cadence, and Rapid Security Response management.
  > f. ADE Profiles: Added new skip keys for OS Showcase and Liquid Glass panes, along with Auto Advance support for macOS and tvOS Setup Assistants.
  > Minimum OS Support for Scalefusion Apps
  > Sta…

### scalefusion-product-updates — no-change

Kind: rss · Source: https://blog.scalefusion.com/category/product-updates/feed/

No new or changed items.

## Ivanti

### ivanti-quarterly-releases — no-change

Kind: html-blocks · Source: https://www.ivanti.com/releases

No new or changed items.

## ManageEngine

### manageengine-endpoint-central — ok

Kind: csv · Source: https://www.manageengine.com/sites/meweb/images/ems/readme/largenl_readme.csv

#### New (3)

- **11.5.2622.31 · BugFixes · DC:MSP** — 2026-09-12 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Improved file permission handling for the Self Service catalog to enhance access control.
  > Type: BugFixes; Products: DC:MSP

- **11.5.2622.31 · BugFixes · DC:SS** — 2026-09-11 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Extended password protection for XLSX, PPTX, and DOCX files, providing enhanced document security in Endpoint DLP.
  > Type: BugFixes; Products: DC:SS

- **11.5.2622.31 · BugFixes · DC:SS:MSP:PMP:VMP** — 2026-09-11 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where end users received false new patch publish notifications for Self Service Portal.
  > Type: BugFixes; Products: DC:SS:MSP:PMP:VMP

