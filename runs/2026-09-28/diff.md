# Competitor watch — fetch diff 2026-09-28

Period: 2026-09-21 → 2026-09-28. Sources marked *baseline* have no previous snapshot and list only items dated within the last 14 days (or the newest undated items). Full item text is in diff.json.

## Summary

| Source | Vendor | Status | New | Changed | Note |
|---|---|---|---|---|---|
| intune-whats-new | Microsoft Intune | ok | 2 | 0 | 6 items; 2 removed |
| intune-blog | Microsoft Intune | no-change | 0 | 0 | 20 items |
| iru-updates | Iru | ok | 5 | 0 | 50 items; 5 removed |
| hexnode-whats-new | Hexnode | no-change | 0 | 0 | 23 items |
| hexnode-blog | Hexnode | ok | 4 | 0 | 4 items; 6 removed |
| miradore-releases | Miradore | ok | 1 | 0 | 367 items |
| 42gears-press | 42Gears | no-change | 0 | 0 | 103 items |
| 42gears-docs | 42Gears | ok | 11 | 78 | 931 items; 10 removed |
| jamf-pro-release-notes | Jamf | no-change | 0 | 0 | 3 items; v11.32.1 |
| scalefusion-release-notes | Scalefusion | no-change | 0 | 0 | 25 items |
| scalefusion-product-updates | Scalefusion | no-change | 0 | 0 | 10 items |
| ivanti-quarterly-releases | Ivanti | no-change | 0 | 0 | 67 items |
| jumpcloud-release-notes | JumpCloud | ok (baseline) | 6 | 0 | 12 items; 6 older items not listed (baseline) |
| manageengine-endpoint-central | ManageEngine | ok | 71 | 0 | 399 items; 71 removed |

## Microsoft Intune

### intune-whats-new — ok

Kind: html-sections · Source: https://learn.microsoft.com/en-us/intune/whats-new/

#### New (2)

- **Week of September 28, 2026 (Service release 2609)** — 2026-09-28 — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-28-2026-service-release-2609> — Windows: high
  > Advanced capabilities (formerly "Microsoft Intune Suite")
  > Microsoft Cloud PKI support for US Government GCC High
  > Microsoft Cloud PKI is now available for Microsoft Intune tenants in the Microsoft Government Community Cloud High (GCC High) environment. You can create and manage a cloud-based public key infrastructure that automates certificate issuance, renewal, and revocation for Intune-managed devices without deploying an on-premises certification authority, Network Device Enrollment Service, or Intune Certificate Connector for device certificate delivery. Use these certificates for certificate-based authentication to organizational resources such as Wi-Fi, VPN, and applications. Support includes managed Windows, Android, iOS/iPadOS, and macOS devices. Cloud PKI isn't currently supported in the Department of Defense environment.
  > For more information, see Overview of Microsoft Cloud PKI for Microsoft Intune.
  > Applies to:
  > Windows
  > Android
  > iOS/iPadOS
  > macOS
  > App management
  > Faster delivery of Win32 apps
  > Microsoft Intune now uses push notifications for admin-initiated and service-side changes to Win32 apps. Managed devices can check in sooner after app changes, reducing delivery and refresh delays compared with waiting for normal polling intervals. This update improves Win32 app deployment responsiveness without requiring a new admin workflow.
  > Applies to:
  > Windows
  > Newly available protected app for Intune
  > Microsoft Dragon Copilot by Microsoft Corporation is now available as a protected app for Microsoft Intune. You can apply Intune app protection policies to the app on supported Android and iOS/iPadOS devices, helping protect organizational data while clinicians use its AI-assisted documentation capabilities.
  > For more information, see Microsoft Intune protected apps.
  > Applies to:
  > Android
  > iOS/iPadOS
  > Require Managed Home Screen authentication for protected app activities
  > Microsoft Intune now helps prevent users from bypassing Managed Home Screen (MHS) authentication when they access protected activities in MAM-integrated apps. If MHS requires sign-in or a session PIN, the app redirects the user to MHS before allowing access to protected content. Assign an Intune app protection policy to both the app and the signed-in user; no specific app protection policy setting is required.
  > For more information, see Configure the Microsoft Managed Home Screen app for Android Enterprise.
  > Applies to:
  > Android Enterprise corporate-owned dedicated devices using Managed Home Screen with Microsoft Entra shared device mode
  > Faster Win32 app delivery after Windows enrollment
  > Microsoft Intune Management Extension now checks for Windows app assignments immediately after the Enrollment Status Page (ESP) completes. This reduces the delay before required Win32 apps that weren't installed during ESP begin installing on newly enrolled devices.
  > For more information, see Intune Management Extension for Windows.
  > Applies to:
  > Windows
  > Device configuration
  > New Apple settings in the Settings Catalog for iOS/iPadOS and macOS
  > Microsoft Intune now includes new Apple Settings Catalog options for supported iOS/iPadOS and macOS devices. You can configure additional controls for areas such as app settings, Apple Intelligence, network and web-content filtering, and the macOS login window by using the same Settings Catalog policy workflow in the Microsoft Intune admin center.
  > For more information, see Create a policy using settings catalog.
  > Applies to:
  > iOS/iPadOS
  > macOS
  > Assignment filters for Android Settings Catalog policies
  > Microsoft Intune now supports assignment filters for Android Enterprise and Android Open Source Project (AOSP) Settings Catalog policies. You can include or exclude specific devices based on device properties, giving you more granular control over policy deployments and helping apply the right settings to the right Android devices.
  > For more information, see Use assignment filters in Microsoft Intune.
  > Applies to:
  > Android Enterprise
  > Android (AOSP)
  > Device enrollment
  > Automatically launch Microsoft Defender for Endpoint during Android Enterprise device setup
  > Microsoft Intune now supports automatically opening Microsoft Defender for Endpoint during out-of-box setup for supported corporate-owned Android Enterprise devices. After you configure the Defender for Endpoint connector, turn on Grant MTD role permissions, and assign the Defender app as required, enable the experience from Endpoint security > Defender for Endpoint. Intune opens Defender during enrollment so users can complete its initial configuration as part of device setup. If configuration isn't completed, the Intune setup step remains available so users can open Defender again.
  > For setup-time availability, assign Defender for Endpoint to user groups or all devices before enrollment. Assignment processing for a specific device group might not complete early enough for Defender to be available during setup.
  > Applies to:
  > Android Enterprise corporate-owned fully managed devices (COBO)
  > Android Enterprise corporate-owned devices with a work profile (COPE)
  > Skip the Device Features Tour during Apple enrollment
  > Microsoft Intune now includes the Device features tour Apple OS 27 Setup Assistant skip key in Automated Device Enrollment profiles. You can hide this pane to reduce setup interactions and provide a more streamlined enrollment experience on supported iPhone and iPad devices.
  > For more information, see Set up automated device enrollment for iOS/iPadOS.
  > Applies to:
  > iOS/iPadOS
  > Upgrade an existing Android Enterprise connection to a managed Google domain
  > Microsoft Intune now supports an optional upgrade for tenants that connected Android Enterprise with a Gmail account. You can link the enterprise to a managed Google domain and manage the Google-Intune connection with your Microsoft Entra work account instead. Start at Devices > Enrollment, select Android, and under Prerequisites, select Managed Google Play.
  > For more information, see Connect your Intune account to your managed Google Play account.
  > Applies to:
  > Android Enterprise
  > Device management
  > Bulk manage eSIMs on corporate-owned Android Enterprise devices
  > Microsoft Intune now supports bulk eSIM actions for corporate-owned Android Enterprise devices. From Devices > All devices > Bulk device actions, you can activate eSIMs on up to 100 selected devices running Android 15 or later by using a carrier activation server URL.
  > When you bulk wipe supported devices, Intune preserves eSIM data plans by default. You can select the option to remove eSIMs when the wipe should also remove the data plans. Personally owned Android Enterprise work profile devices aren't supported.
  > Applies to:
  > Android Enterprise corporate-owned fully managed devices (COBO)
  > Android Enterprise corporate-owned dedicated devices (COSU)
  > Android Enterprise corporate-owned devices with a work profile (COPE)
  > Updated minimum supported version for iOS and iPadOS
  > Microsoft Intune now requires iOS/iPadOS 18 or later for standard device-management, Company Portal, and app-protection scenarios. Administrators should identify and upgrade affected devices. Userless devices enrolled through Automated Device Enrollment have a separate support statement.
  > Applies to:
  > iOS/iPadOS
  > New single device page becomes the default experience in the Intune admin center
  > Microsoft Intune now uses the new single device page as the default experience for all admins, and the previous device page is no longer available. In Devices > All devices, select a device to view details and properties, monitor activity, access tools and reports, and perform supported actions from a consistent layout across platforms. Existing device-management capabilities remain available.
  > For more information, see See device details in Microsoft Intune.
  > Applies to:
  > All platforms
  > Device security
  > Configure MDE AI agent runtime protection for Windows
  > Microsoft Intune now includes Microsoft Defender for Endpoint AI agent runtime protection settings in the new endpoint security template for Windows. You can use Audit mode to detect and alert on unsafe AI agent activity without blocking it, or Block mode to stop threats before they execute. These settings support Windows devices managed through Intune or MDE security settings management.
  > For more information, see AI agent runtime protection with Microsoft Defender for Endpoint.
  > Applies to:
  > Windows
  > Onboard MDM compliance partners with new self-service functionality
  > Microsoft Intune now supports bring-your-own connector functionality for MDM compliance partners. Partners can build, test, and onboard compliance connectors using Intune documentation, contracts, and validation hooks. As an admin, you can opt in to a partner connector by providing the vendor's information in the Microsoft Intune admin center, speeding partner onboarding and expanding the compliance solutions available to your organization.
  > For more information, see Self-service onboarding for compliance partners.
  > Applies to:
  > All supported platforms

- **Week of September 21, 2026** — 2026-09-21 — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-21-2026> — Windows: medium
  > Device management
  > Stage app and policy rollout with deployment plans
  > Microsoft Intune now supports deployment plans, a new way to roll out apps and configuration policies in stages instead of all at once. From the new Deployments experience in the Intune admin center, you can stage a rollout across multiple rings, control rollout timing, and integrate with Multiple Admin Approval to reduce risk when deploying changes to large device fleets.
  > For more information, see Deployment plans and deployments in Microsoft Intune.
  > Applies to:
  > Windows
  > Win32 and Enterprise app catalog apps
  > Settings catalog and Endpoint security policies

### intune-blog — no-change

Kind: rss · Source: https://techcommunity.microsoft.com/t5/s/gxcuf89792/rss/board?board.id=MicrosoftIntuneBlog

No new or changed items.

## Iru

### iru-updates — ok

Kind: rss · Source: https://www.iru.com/updates/rss.xml

#### New (5)

- **What's New in Iru \| September 25th** — 2026-09-25 — <https://www.iru.com/updates/whats-new-in-iru-september-25th> — Windows: none
  > Highlights we cover this week in What's New in Iru:
  > MSP Billing is live, with itemized billing to increase visibility into your MSP margins
  > LAPS for Mac Library Item is here
  > Enhancements to Iru Compliance evidence collection
  > MacOS 27 is officially live

- **Iru Agent for Mac Release 5.1.102 (5397)** — 2026-09-23 — <https://www.iru.com/updates/iru-agent-for-mac-release-5.1.102-5397> — Windows: none
  > We’ve released Iru Agent for Mac 5.1.102 (5397).

- **Removing End-of-Life Auto Apps** — 2026-09-22 — <https://www.iru.com/updates/2026/09/22/removing-end-of-life-auto-apps> — Windows: none
  > As of today, Iru has removed the following Auto App(s) from our catalog:

- **Recommended privacy permissions for iPhone and iPad** — 2026-09-21 — <https://www.iru.com/updates/recommended-privacy-permissions-for-iphone-and-ipad> — Windows: none
  > The Privacy Library Item now includes a Recommended privacy permissions area for iPhone and iPad, letting admins recommend the app permissions and Safari website permissions that managed apps and sites will need. The end user sees a single consent prompt listing every permission the admin recommends, with the choice to Allow all at once or select Not Now. If Not Now is selected, the app continues to prompt for individual permissions as it normally would.

- **What's New in Iru \| September 18th** — 2026-09-18 — <https://www.iru.com/updates/whats-new-in-iru-september-18th> — Windows: none
  > highlights we cover this week in What's New in Iru:

## Hexnode

### hexnode-whats-new — no-change

Kind: next-data · Source: https://www.hexnode.com/whats-new/

No new or changed items.

### hexnode-blog — ok

Kind: rss · Source: https://www.hexnode.com/blogs/feed/

#### New (4)

- **What Are the Must-Have Reporting Capabilities for MSPs Managing Multiple Tenants?** — 2026-09-24 — <https://www.hexnode.com/blogs/what-are-the-must-have-reporting-capabilities-for-msps-managing-multiple-tenants/> — Windows: none
  > Why does reporting become harder as MSPs add more tenants?
  > Reporting becomes harder when client data, reporting formats, and service requirements differ across tenants. For MSP owners and IT service managers, evaluating MSP multi-tenant reporting capabilities means checking whether reports remain accurate and usable as client environments multiply.
  > Technicians often switch between consoles, reconcile spreadsheets, and rebuild reports for individual clients. Inconsistent device identifiers make it difficult to match records reliably. Different reporting periods create another problem: combining last week’s inventory with this month’s compliance results produces an inconsistent picture of service coverage.
  > Consider a hypothetical monthly review where a client’s report shows healthy compliance across all listed devices. Several endpoints stopped reporting earlier that month and were excluded from the results. The report appears reassuring, but its coverage is incomplete.
  > Completeness and freshness therefore belong in the reporting requirements. Service managers need to know which devices are represented, which are missing, and when each endpoint last supplied its status data.
  > What happens when MSPs cannot trust their client reports?
  > Unreliable reports can delay corrective work, increase reporting overhead, and weaken evidence of service delivery. When technicians must verify every result manually, reporting consumes time needed for troubleshooting and preventive maintenance.
  > Th…

- **Why Zero Trust Starts with Unified Endpoint Management** — 2026-09-24 — <https://www.hexnode.com/blogs/why-zero-trust-starts-with-unified-endpoint-management/> — Windows: medium
  > Work no longer happens within the neat boundaries of an office network. Employees routinely access corporate applications and data from homes, airports, cafés and customer sites — often switching between company-owned laptops and personal phones in the same workday.
  > In a recent Hexnode Live session, Mostafa Matar, Associate Security Consultant at CyberKnight, examined what this shift means for enterprise security. “I wouldn’t say that the perimeter has completely disappeared,” Matar explained. “I believe it has just fragmented.”
  > That fragmentation changes the trust equation. It is no longer enough to verify who is requesting access — organizations must also verify what is requesting it. This is where Unified Endpoint Management (UEM) enters the Zero Trust conversation.
  > Device Trust in Zero Trust: Why Identity Alone Is Not Enough
  > Many organizations treat zero trust primarily as an identity problem: authenticate the user, enforce multifactor authentication and move on. Device posture receives far less attention, even though it answers a fundamentally different question. Identity tells an organization who is requesting access, while posture indicates whether the endpoint is secure enough to receive it. “Zero trust is incomplete if we only verify the user and ignore the device,” Matar noted.
  > Consider an employee attempting to open a customer database from a personal phone. They may enter the correct password and complete multifactor authentication, but the phone could still be j…

- **How Does Poor Endpoint Visibility Impact MSP Service Level Agreements?** — 2026-09-24 — <https://www.hexnode.com/blogs/how-does-poor-endpoint-visibility-impact-msp-service-level-agreements/> — Windows: none
  > How does poor endpoint visibility impact MSP service level agreements?
  > Poor endpoint visibility delays issue detection, slows troubleshooting, and weakens the evidence MSPs need to demonstrate SLA performance. Without current device information, technicians struggle to establish what failed, who owns the endpoint, and which service commitment applies.
  > A client reports that a workstation has stopped working. Your service desk searches disconnected inventories, checks outdated device records, and contacts the account owner to confirm support coverage. Before troubleshooting begins, the team has already spent time reconstructing contexts that should accompany the incident.
  > Four visibility gaps create this friction:
  > Missing endpoints: Your inventory omits devices that fall within the client’s support scope.
  > Stale check-ins: Historical device status obscures the endpoint’s current condition.
  > Unknown ownership: Technicians cannot quickly associate a device with its user, client, or business service.
  > Inconsistent monitoring: Different tenants receive uneven coverage, leaving gaps in detection and escalation.
  > An apparently healthy dashboard may show only endpoints that still report. Devices that stop communicating can disappear from operational attention while their last recorded status continues to suggest normal operation to the team.
  > What business risks do endpoint visibility gaps create for MSPs?
  > Endpoint visibility gaps prolong disruptions, force technicians to repeat investiga…

- **How Hexnode UEM MSP Simplifies Patch Management Across Client Environments** — 2026-09-23 — <https://www.hexnode.com/blogs/how-hexnode-uem-msp-simplifies-patch-management-across-client-environments/> — Windows: medium
  > Why does patch management become difficult across multiple client environments?
  > MSP patch management becomes difficult when technicians coordinate updates across client environments with different device fleets, operating systems, applications, maintenance requirements, and patch priorities. A workflow that suits one client may not fit another.
  > Separate environments also increase repetitive work. Technicians must identify missing patches, approve updates, schedule deployments, monitor failures, manage restarts, and verify installation. As the client base grows, maintaining consistent execution becomes harder.
  > MSPs therefore need centralized patch administration that standardizes routine processes while accommodating client-specific devices, schedules, approval requirements, and operational policies.
  > Where do MSP patch workflows create the most administrative overhead?
  > Administrative overhead typically accumulates around recurring tasks that technicians must perform separately for different clients:
  > Patch checks: Identifying missing and applicable updates across client fleets.
  > Deployment schedules: Coordinating updates around client-specific maintenance periods.
  > Approval decisions: Reviewing patches before deployment where required.
  > Reboot coordination: Managing restart requirements without unnecessarily disrupting users.
  > Deployment failures: Identifying failed installations and determining which devices require follow-up.
  > Compliance verification: Confirming whether required…

## Miradore

### miradore-releases — ok

Kind: link-list · Source: https://www.miradore.com/knowledge/releases/

#### New (1)

- **Custom device attributes in API v1 and reports, dark theme visual fix** — <https://www.miradore.com/knowledge/releases/custom-device-attributes-in-api-v1-and-reports-dark-theme-visual-fix/> — Windows: none
  > In this article
  > Toggle
  > Custom device attributes in API v1 and reports
  > We updated the Miradore API v1 with a new GET endpoint called CustomAttributeDefinition. This endpoint can be used to query the IDs and display names of custom attributes created on the Custom attributes tab of the Company > Attributes page.
  > The new endpoint also allows you to filter your devices based on their custom attributes when creating a custom report. Adding the CustomAttribute.Custom attribute name to the report columns lists all devices with that custom attribute applied. Additionally, defining a value in the filter conditions enables you to filter for specific custom attribute values in your reports.
  > For more information, see the following articles and documentation:
  > Creating custom reports
  > Custom device attributes
  > Programmer's guide to API v1
  > Dark theme visual fix
  > We fixed a visual issue where selecting filter conditions while using Miradore with the dark UI theme resulted in filters with subitems appearing in a very dark color. The fix improves visibility of those filters.
  > Have you already subscribed to our newsletter?
  > Fill in your email address to get the latest Miradore news and articles delivered directly to your inbox!
  > To view our Privacy Policy, click here

## 42Gears

### 42gears-press — no-change

Kind: link-list · Source: https://www.42gears.com/press-releases

No new or changed items.

### 42gears-docs — ok

Kind: sitemap · Source: https://docs.42gears.com/suremdm/sitemap.xml

#### New (1 shown of 11)

- **mtd for windows** — 2026-09-18 — <https://docs.42gears.com/suremdm/mobile-threat-defense/mtd/initiate-scan-on-individual-devices/mtd-for-windows> — Windows: high
  > MTD for Windows
  > Prerequisites
  > The device must have enrolled through Dual Enrollment mode.
  > The Windows device must run SureMDM Agent version 4.57 or later for this feature to work.
  > Initiate Scan on Windows Devices
  > 1. Log into the SureMDM Console
  > 2. Select a Windows device.
  > 3. Click System Scan > Scan from the Dynamic jobs section#8202;.
  > note
  > The device must be online to initiate the scan.
  > 4. Select a Scan Mode.
  > Quick Scan - Scan for malicious threats in the areas that are most likely to be subject to attacks.
  > Full Scan - Scans every file, folder, task, and process of the device.
  > This will initiate a scan on a device. It will display a report if any threats are found or else displays No Threats Detected message on the screen.

#### Changed (5 shown of 78)

- **software update management ddm** — lastmod 2026-02-27 → 2026-09-18 — <https://docs.42gears.com/suremdm/ios-jobs-and-profiles/profiles-for-ios/supervised-profiles/software-update-management-ddm> — Windows: none
  Added:
  + Software Update Management - DDM
  + The Software Update Management payload allows IT administrators to configure OS update deferral periods, manage automatic download and installation of OS and security updates, and define the update cadence based on organizational requirements using Declarative Device Management (DDM). It also supports enabling Rapid Security Responses to ensure critical security fixes are applied quickly, with an…
  + note
  + Supported Enrollment Types:
  + Device Enrollment and Automated Device Enrollment
  + Shared iPad Enrollment
  + Steps to Configure Software Update Management payload
  + On the SureMDM Web Console, navigate to:
  + Profiles > iOS/iPadOS > Add > Select Enrollment Type > DDM > Software Update Management (DDM) > Configure
  + Enter a Profile Name
  + In the Configure Software Update Management screen, configure the required options under the available accordions.
  + Deferral Management
  + SettingDescription
  + OS Update Deferral Period
  + Specify the number of days to defer OS software update on the device. When set, software updates only appear after the specified delay, following the release of the software update.
  + Note: For devices using iOS 18.0 or later, we recommend using this payload for deferrals and disable the Force Delayed Software Updates restriction if it is configured in the Device Restrictions payload.
  + Automatic Software Update Action Management
  + Automatic Download of Available Updates
  + Specify the action type
  + Allowed – The user can enable or disable automatic downloads on the device.
  + Always On – Automatic downloads are always enabled and cannot be disabled on the device.
  + Always Off – Automatic downloads are always disabled and cannot be enabled on the device.
  + Automatic Installation of OS Updates
  + Allowed – The user can enable or disable automatic installation of OS Updates on the device.
  + Always On – Automatic installations of OS Updates are always enabled and cannot be disabled on the device.
  + Always Off – Automatic installations of OS Updates are always disabled and cannot be enabled on the device.
  + Automatic Installation of Security Updates
  + Allowed – The user can enable or disable automatic installation of Security Updates on the device.
  + Always On – Automatic installations of Security Updates are always enabled and cannot be disabled on the device.
  + Always Off – Automatic installations of Security Updates are always disabled and cannot be enabled on the device.
  + Rapid Security Response Settings
  + Enable Rapid Security Response
  + If unchecked, Rapid Security Responses aren’t offered for user installation.
  + Enable Rollback
  + If unchecked, the system doesn’t offer Rapid Security Response rollbacks to the user.
  + Beta Program Management
  + Enable Beta Program Management
  + When enabled, the Beta Program Management configuration options below are unlocked and become available for configuration.
  + Select ADE Server
  + Select the ADE Server to retrieve the Beta OS Updates.
  + … 11 more added lines

- **configure kioskpolicy** — lastmod 2025-09-28 → 2026-09-18 — <https://docs.42gears.com/suremdm/linux-jobs-and-profiles/linux-jobs-profiles/profiles-for-linux/configure-kioskpolicy> — Windows: medium
  Added:
  + Kiosk Policy
  + The Kiosk Policy profile empowers IT administrators to enforce a secure kiosk mode on Linux devices by restricting access to a predefined list of permitted applications. This ensures that the enrolled devices operate within a controlled environment, limiting user interactions to authorized applications only.
  + note
  + This feature is supported only on Ubuntu 18.04 LTS and above.
  + To lock down the enrolled devices with an allowed list of application(s), follow these steps:
  + 1. Navigate to the SureMDM Web Console > Profiles > Linux > Add > Kiosk Policy > Multi App Mode/Single App Mode.
  + 2. Enter a Profile Name and click Add.
  + 3. On the Multi App Mode prompt, Select the application(s) from App name drop-down list, select the required options Run at startup and Run At User Switch, and then click Add.
  + The added application(s) will be listed under the Multi App Mode section.
  + 4. On the Single App Mode prompt, configure the following settings:
  + Lockdown Application - Select the desired browser application (Google Chrome, or Mozilla Firefox) from the dropdown menu to run in Single App Kiosk mode.
  + Single App Mode is supported on Google Chrome with SureMDM Agent version 7.0.1 and later.
  + Support for Mozilla Firefox, Mozilla Firefox (ARM), and Google Chrome (ARM) is available with SureMDM Agent version 7.19.15 and later.
  + Landing URL - URL that needs to be opened when in Kiosk Mode.
  + Auto-Login to Kiosk Mode - Enabling this option allows the device to login automatically into Kiosk mode without user interaction.
  + User name - Enter the username used to login to Kiosk mode.
  + Password - Enter the password for provided username
  + Note :A new account will be created with the specified username and password if it doesn't already exist. If the account is present, the password will be updated
  + Enable Admin Access - Account created above for Kiosk mode will be granted admin privileges.
  + Auto-Launch Kiosk mode with restart - A device reboot is required to launch the application in Single app Kiosk mode. If unchecked, the administrator must create a run script job to initiate the device reboot for Kiosk mode.
  + 4. Go back to the Home tab and select Linux device(s) or group(s).
  + 5. Click Apply to launch the Apply Job/Profile To Device prompt.
  + 6. In the Apply Job/Profile To Device prompt, select the job and click Apply.

- **software update management ddm** — lastmod 2026-07-23 → 2026-09-18 — <https://docs.42gears.com/suremdm/macos-jobs-and-profiles/macos-jobs-profiles-manage/profiles-for-macos/software-update-management-ddm> — Windows: none
  Added:
  + Software Update Management - DDM
  + The Software Update Management payload allows IT administrators to manage automatic download and installation of OS and security updates based on organizational requirements using Declarative Device Management (DDM). It also supports enabling Rapid Security Responses to ensure critical security fixes are applied quickly, with an option to allow rollback if required. Supported on macOS 15.0 onward…
  + note
  + Supported Enrollment Type: Device Enrollment and Automated Device Enrollment
  + Supported for Device Channels.
  + Steps to Configure Software Update Management payload
  + On the SureMDM Web Console, navigate to:
  + Profiles > macOS > Add > Device Enrollment > Select Enrollment Type > DDM > Software Update Management (DDM) > Configure
  + Enter a Profile Name
  + In the Configure Software Update Management screen, configure the required options under the available accordions.
  + Deferral Management
  + SettingDescription
  + Major OS Update Deferral Period
  + Specify the number of days to defer a major OS software update on the device. When set, major OS updates only appear after the specified delay, following the release of the software update.
  + Minor OS Update Deferral Period
  + Specify the number of days to defer a minor OS software update on the device. When set, minor OS updates only appear after the specified delay, following the release of the software update.
  + Non-OS Update Deferral Period
  + Specify the number of days to defer a Non-OS update on the device. When set, non-OS updates only appear after the specified delay, following the release of the update.
  + Automatic Software Update Action Management
  + Automatic Download of Available Updates
  + Specify the action type
  + Allowed - The user can enable or disable automatic downloads on the device.
  + Always On - Automatic downloads are always enabled and cannot be disabled on the device.
  + Always Off - Automatic downloads are always disabled and cannot be enabled on the device.
  + Automatic Installation of OS Updates
  + Allowed - The user can enable or disable automatic installation of OS Updates on the device.
  + Always On - Automatic installations of OS Updates are always enabled and cannot be disabled on the device.
  + Always Off - Automatic installations of OS Updates are always disabled and cannot be enabled on the device.
  + Automatic Installation of Security Updates
  + Allowed - The user can enable or disable automatic installation of Security Updates on the device.
  + Always On - Automatic installations of Security Updates are always enabled and cannot be disabled on the device.
  + Always Off - Automatic installations of Security Updates are always disabled and cannot be enabled on the device.
  + Rapid Security Response Settings
  + Enable Rapid Security Response
  + If unchecked, Rapid Security Responses aren’t offered for user installation.
  + Enable Rollback
  + If unchecked, the system doesn’t offer Rapid Security Response rollbacks to the user.
  + Beta Program Management
  + Enable Beta Program Management
  + When enabled, the Beta Program Management configuration options below are unlocked and become available for configuration.
  + … 10 more added lines

- **shared device nfc qr auth** — lastmod 2026-09-16 → 2026-09-18 — <https://docs.42gears.com/suremdm/system-settings/system-settings/account-settings/sureidp/shared-device-nfc-qr-auth> — Windows: none
  Added:
  + Shared Device Mode with NFC/QR Code Authentication
  + Shared Device Mode with SureIdP enables users to securely access shared Android devices using NFC badges or QR codes. Users authenticate through a configured Identity Provider during their first login and set a 6-digit PIN for faster subsequent access, while user-specific device profiles and SSO-enabled applications are automatically applied.
  + Overview
  + Shared Device Mode (SDM) allows multiple users to securely share an Android device while maintaining a personalized user session. Each user can access the applications and device configuration assigned to their profile without requiring a separate device.
  + With SureIdP integration, users can identify themselves on the shared device using an NFC badge or QR code and authenticate using a configured Identity Provider. After the initial authentication, users need to use a 6-digit PIN for faster subsequent logins.
  + SureIdP can also provide the authentication context required for SSO-enabled applications, allowing applications to sign in automatically after the user successfully logs in to Shared Device Mode. The SDM policy can also use user attributes to dynamically switch the device profile based on the user's configured attributes.
  + Prerequisites
  + Before configuring Shared Device Mode with SureIdP, ensure the following:
  + SureIdP is configured as the Authentication method in SureLock settings.
  + The required users are available in SureIdP and can be identified through the configured External Identity Provider.
  + Each user's NFC badge or QR code contains a unique identifier that can be mapped to a user attribute.
  + The corresponding identifier is available in SureIdP as Username, Email, or Unique User ID.
  + If Unique User ID is used, ensure that the value is populated for the relevant users. Unique User ID can be populated through user synchronization, JIT provisioning, manual entry, CSV import, or supported APIs.
  + For SSO, the required applications and their authentication configuration should already be set up.
  + The Android device should have Shared Device Mode configured in SureLock.
  + Configure a Shared Device Mode Policy in SureIdP
  + Shared Device Mode policies are managed from:
  + SureMDM Console → SureIdP → Authentication Policies → Shared Device Mode
  + The Shared Device Mode page displays the configured policies along with their Policy Name, Description, and Last Updated information. Administrators can Add SDM Policy, Edit, or Delete a policy.
  + Step 1: Configure Policy Details
  + Navigate to SureIdP → Authentication Policies → Shared Device Mode.
  + Click + Add SDM Policy.
  + Under Policy Details, enter:
  + Policy Name – Enter a unique name for the policy.
  + Description – Enter a brief description of the policy.
  + Click Next.
  + The policy name is used to identify the policy when selecting it later in SureLock.
  + Step 2: Configure User Invocation
  + The User Invocation section determines how users identify themselves and initiate login on the shared device.
  + Select one of the following:
  + NFC Tap: Select this option if users will identify themselves using an NFC badge.
  + When selected, the device waits for an NFC tap and displays the NFC login interface.
  + QR Scan: Select this option if users will identify themselves using a QR code.
  + When selected, the device displays the QR scanning interface.
  + Only one invocation method can be selected for a policy.
  + Configure Data Mapping
  + After selecting NFC Tap or QR Scan, configure the Data Mapping settings.
  + User ID Key: Select the user attribute that matches the value stored in the NFC badge or the QR code.
  + Available options:
  + Username
  + … 8 more added lines

- **user device binding** — lastmod 2026-09-16 → 2026-09-18 — <https://docs.42gears.com/suremdm/system-settings/system-settings/account-settings/sureidp/user-device-binding> — Windows: medium
  Added:
  + User-Device Binding
  + Overview
  + User-device binding allows administrators to associate SureIdP users with specific managed devices and control access based on these assignments.
  + When binding enforcement applies, SureIdP verifies the user's association with the device before granting access to supported applications and device access scenarios.
  + User-device binding helps organizations maintain user accountability, device ownership, and controlled access in environments where access needs to be restricted to specific users.
  + User-device bindings are centrally managed from the SureIdP > Users section. The configured user-device mapping serves as the central source of truth for supported access scenarios.
  + A user can be bound to multiple devices, and multiple users can be bound to the same device.
  + note
  + User-device binding is currently supported on Windows, macOS, and Linux. For Android and iOS, user-device binding is not enforced. Therefore, configuring a binding does not restrict application access to the bound users on these two platforms.
  + Prerequisites
  + Before configuring user-device binding:
  + The devices must be enrolled and managed through SureMDM.
  + The users must be available in SureIdP.
  + The device identifier used for binding must be supported and available for the target device.
  + Bind a Device to a User
  + You can assign one or more devices to a SureIdP user.
  + To bind a device:
  + Open SureMDM → Settings → Account Settings → Identity & Access Management → SureIdP → Users.
  + Select the required user.
  + Go to Account Actions → Bind/Unbind Devices.
  + In the Bind/Unbind Devices window, click + Add.
  + Option 1: To bind devices manually:
  + Select the Bind Devices Manually option.
  + Select the Identifier ID Type and enter the Bind Identifier Value.
  + Click Save.
  + Multiple devices can be assigned to the same user by clicking + Add and entering the identifier type and identifier value for each device.
  + Option 2: To assign user-device bindings in bulk:
  + Administrators can import user-device binding details using a CSV file.
  + Select the Import Users Using CSV File option.
  + Download the CSV template.
  + Enter the required user and device binding information in the template.
  + Upload the completed CSV file.
  + Click Save to complete the import.
  + If no users are selected in the SureIdP Users section and Bind/Unbind Devices is selected, only the Bulk CSV Import option is available by default.
  + The CSV file supports:
  + Device Identifier Type
  + Device Identifier Value
  + Username
  + Example:
  + Device IdentifierDevice Identifier ValueUsername
  + … 28 more added lines

## Jamf

### jamf-pro-release-notes — no-change

Kind: jamf-khub · Source: https://learn.jamf.com

No new or changed items.

## Scalefusion

### scalefusion-release-notes — no-change

Kind: d360-index · Source: https://help.scalefusion.com/docs/latest-release-notes-year-{year}

No new or changed items.

### scalefusion-product-updates — no-change

Kind: rss · Source: https://blog.scalefusion.com/category/product-updates/feed/

No new or changed items.

## Ivanti

### ivanti-quarterly-releases — no-change

Kind: html-blocks · Source: https://www.ivanti.com/releases

No new or changed items.

## JumpCloud

### jumpcloud-release-notes — ok (baseline)

Kind: html-sections · Source: https://jumpcloud.com/support/release-notes-{year}

#### New (6)

- **September 25th, 2026** — 2026-09-25 — <https://jumpcloud.com/support/release-notes-2026#september-25th-2026> — Windows: none
  > Enhancement: Dormant Application Access Detection
  > Feature: Access Risk
  > Dormant Application Access now detects when a user signs back into an SSO application after a period of inactivity that meets your configured threshold, instead of flagging first-time access. You can set the dormant application threshold in Access Risk > Configuration. First-time access to an application does not trigger this factor, which reduces noise from newly provisioned apps.
  > See Configure Access Risk Detection to learn more.

- **September 24th, 2026** — 2026-09-24 — <https://jumpcloud.com/support/release-notes-2026#september-24th-2026> — Windows: high
  > New: Patch Management Dashboards
  > Feature: Patch Management
  > JumpCloud Patch Management now includes a unified dashboard experience plus dedicated Windows and Apple views in the Admin Portal. From Device Management > Patch Management, you can monitor fleet-wide update posture, drill into KB compliance on Windows devices, and track Apple OS rollout progress against active update policies.
  > Unified Patch Dashboard
  > Cross-platform overview: Review patch compliance for Windows and Apple devices together on the Overview tab.
  > Fleet update summary: See pending updates by severity, devices with pending updates, devices with update failures, and the age of missing updates.
  > Platform switcher: Move between Overview, Apple, and Windows tabs from one page.
  > Windows Overview and Patch List
  > Patch and device insights: View patch coverage, missing patches by severity and age, device compliance, and critical patch exposure in one dashboard.
  > Global severity filter: Focus the dashboard and KB list on the severities that matter most.
  > KB-centric control: Search and filter KBs, review CVE details, approve awaiting updates, retry failed installations, and export the KB list as CSV or JSON.
  > Bulk remediation: Install missing critical patches or non-compliant device updates immediately or on the policy schedule.
  > Apple Compliance Dashboard
  > Rollout visibility: Track OS deployment progress for macOS, iOS, and iPadOS devices against effective update policy targets.
  > Compliance and coverage: Review missing updates by severity, device compliance, update policy coverage, and the age of missing updates.
  > Apple OS Version Listing: Filter by platform, release date, severity, and device status; drill into targeted, installed, pending, in-progress, or failed devices; and view associated CVE details.
  > Learn More
  > Get Started: Unified Patch Dashboard
  > Windows Overview and Patch List
  > Apple Compliance Dashboard

- **September 23rd, 2026** — 2026-09-23 — <https://jumpcloud.com/support/release-notes-2026#september-23rd-2026> — Windows: none
  > New: Android Policy Expansion
  > Feature: Policy Management
  > JumpCloud has expanded Android policy management with new policies for display, autofill, work account authentication, and default app handling, plus enhanced Bluetooth controls. These policies help you enforce security and productivity settings on managed Android devices enrolled in JumpCloud EMM.
  > New Android Policies
  > Display Settings — Control screen brightness and screen timeout. Choose whether end users configure display settings themselves, or enforce fixed brightness and timeout values on supported devices.
  > Autofill — Control system autofill for forms in apps and websites. Allow users to choose an autofill service, or disable autofill and lock the setting on Android 8.0 and later.
  > Work Account — Configure whether device management requires a Google authenticated enterprise account, and optionally require a specific Google Account email during setup.
  > Default App and Intent Handling — Set an approved managed app as the default handler for selected Android activities, such as opening web links or dialing phone numbers, so Android opens the configured app instead of the app chooser.
  > Enhanced Android Policy
  > Bluetooth Restrictions — In addition to disabling Bluetooth, blocking Bluetooth configuration, and preventing work contact sharing, you can now control outbound Bluetooth file sharing. On company-owned devices with a work profile, you can also restrict Bluetooth sharing on the personal profile through the Work & Personal Usage policy.
  > See Configure Settings for Android Policies to learn more.

- **September 21st, 2026** — 2026-09-21 — <https://jumpcloud.com/support/release-notes-2026#september-21st-2026> — Windows: high
  > New: Device Patch Report (Windows)
  > Feature: JumpCloud Reports
  > The Device Patch Report (Windows) gives IT admins per-device visibility into Windows Knowledge Base (KB) patch installation status in the JumpCloud Admin Portal. The report is auto-populated from existing patch data.
  > Per-device KB status: View Installed, Pending, and Failed status for each KB on each managed Windows device.
  > Preview and export: Preview up to 500 rows in the Admin Portal, or download the complete organization result set as CSV.
  > No manual setup: Report data syncs from existing Windows patch inventory.
  > See Device Patch Report to learn more.

- **September 18th, 2026** — 2026-09-18 — <https://jumpcloud.com/support/release-notes-2026#september-18th-2026> — Windows: medium
  > Enhancement: Update Existing Application Versions in the Private Repository
  > Feature: Software Management
  > You can now update the binary of an existing custom application in JumpCloud's Private Repository instead of creating a new application for every release. Upload the new file from Update Version on the application's Details tab, and JumpCloud deploys it to devices already associated with the application.
  > Consistent update process: Use the same Upload File flow for new applications and version updates, on both Windows and Apple applications.
  > Fewer manual steps: Skip re-creating the application, reassigning devices, and rebinding device groups for each new version.
  > Windows EXE updates: Enter an install success exit code before you deploy an EXE update, so JumpCloud can confirm the installation succeeded.
  > See Manage Software with the JumpCloud Private Repository to learn more.

- **September 16th, 2026** — 2026-09-16 — <https://jumpcloud.com/support/release-notes-2026#september-16th-2026> — Windows: none
  > New: Knowledge Base Uploads for AI Assistant
  > Feature: AI Assistant
  > You can now upload internal documentation directly into a private, org-scoped knowledge base for AI Assistant. The assistant references your uploaded content to answer questions about organization-specific processes, runbooks, SOPs, and policies. Supported formats include PDF, TXT, DOCX, and MD (10 MB maximum per file, 25 files maximum per org). When a response uses your uploaded documentation, AI Assistant clearly attributes the source document in the chat.
  > See Get Started: JumpCloud AI Admin Assistant to learn more.
  > Enhancement: AI Gateway Dashboard
  > Feature: AI Gateway
  > The AI Gateway now includes a Dashboard tab with org-wide visibility into MCP server usage, tool call volume, and error rates. Summary cards, trend charts, and rankings for top servers, clients, and users help you monitor adoption and investigate failures. Click an MCP server to drill into server-specific metrics.
  > See Get Started: AI Gateway to learn more.
  > Enhancement: Agent Client Authentication Type
  > Feature: Agent Identities
  > You can now configure the client authentication type for an agent's OAuth credentials. On the agent's Authentication tab, choose how the agent platform sends the client ID and secret when requesting a token from JumpCloud:
  > Client secret basic: Sends credentials in the authorization header. This is the default option.
  > Client secret post: Sends credentials in the request body.
  > This ensures you can match the exact authentication method required by your external platform's OAuth configuration, such as Amazon Bedrock AgentCore.
  > See Get Started: Agents to learn more.

## ManageEngine

### manageengine-endpoint-central — ok

Kind: csv · Source: https://www.manageengine.com/sites/meweb/images/ems/readme/largenl_readme.csv

#### New (60 shown of 71)

- **11.5.2627.54 · BugFixes · DC:MSP:RAP:SS** — 2026-09-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where registry keys and values remained stuck in the loading state in SGS-configured environments.
  > Type: BugFixes; Products: DC:MSP:RAP:SS

- **11.5.2627.54 · BugFixes · DC:MSP:RAP:SS** — 2026-09-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where Remote Control file transfer activities were not recorded in the Action Log Viewer
  > Type: BugFixes; Products: DC:MSP:RAP:SS

- **11.5.2627.54 · BugFixes · DC:MSP:RAP:SS** — 2026-09-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where the status of scheduled Wake on LAN tasks was not updated as expected.
  > Type: BugFixes; Products: DC:MSP:RAP:SS

- **11.5.2627.54 · BugFixes · DC:MSP:RAP:SS** — 2026-09-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where scheduler details were not retained when modifying monthly scheduled Shutdown or Wake on LAN tasks.
  > Type: BugFixes; Products: DC:MSP:RAP:SS

- **11.5.2627.54 · BugFixes · DC:MSP:SS:ACP** — 2026-09-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue with displaying Application Control elevation toast message.
  > Type: BugFixes; Products: DC:MSP:SS:ACP

- **11.5.2627.54 · BugFixes · DC:MSP:PMP:VMP** — 2026-09-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed query inefficiencies causing configuration reports to fail loading.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP

- **11.5.2627.51 · BugFixes · ALL** — 2026-09-18 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed the issue where the agent went offline after moving the device to a different Remote Office.
  > Type: BugFixes; Products: ALL

- **11.5.2627.50 · BugFixes · DC:MSP:SS** — 2026-09-14 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue affecting software package deployment during Distribution Server replication.
  > Type: BugFixes; Products: DC:MSP:SS

- **11.5.2627.50 · BugFixes · DC:MSP** — 2026-09-12 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Improved file permission handling for the Self Service catalog to enhance access control.
  > Type: BugFixes; Products: DC:MSP

- **11.5.2627.50 · BugFixes · DC:SS** — 2026-09-11 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Extended password protection for XLSX, PPTX, and DOCX files, providing enhanced document security in Endpoint DLP.
  > Type: BugFixes; Products: DC:SS

- **11.5.2627.50 · BugFixes · DC:SS:MSP:PMP:VMP** — 2026-09-11 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where end users received false new patch publish notifications for Self Service Portal.
  > Type: BugFixes; Products: DC:SS:MSP:PMP:VMP

- **11.5.2627.49 · BugFixes · DC:SS:MSP:PMP:VMP** — 2026-09-10 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Resolved an issue that prevented generating the Executive Threat Summary and High Priority reports.
  > Type: BugFixes; Products: DC:SS:MSP:PMP:VMP

- **11.5.2627.48 · BugFixes · DC** — 2026-09-09 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > DEX Agent-Fixed crashes related to binary execution.
  > Type: BugFixes; Products: DC

- **11.5.2627.48 · BugFixes · DC** — 2026-09-09 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > DEX Agent-Enhanced system operations with the latest native framework, ensuring stability.
  > Type: BugFixes; Products: DC

- **11.5.2627.47 · BugFixes · DC:MSP** — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Minor enhancements have been made to the Query Reports modules to improve functionality
  > Type: BugFixes; Products: DC:MSP

- **11.5.2627.47 · BugFixes · DC:SS** — 2026-09-07 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed a crash in EdlpInjector.dll due to incorrect JSON length writing to shared memory in Endpoint DLP module.
  > Type: BugFixes; Products: DC:SS

- **11.5.2627.46 · BugFixes · DC:MSP** — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Minor enhancements have been made to the App Configurations
  > Type: BugFixes; Products: DC:MSP

- **11.5.2627.44 · BugFixes · DC:RAP:SS:MSP:PMP:VMP** — 2026-09-03 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed a vulnerability that could allow authenticated arbitrary command execution on the server.
  > Type: BugFixes; Products: DC:RAP:SS:MSP:PMP:VMP

- **11.5.2627.43 · BugFixes · DC:MSP** — 2026-09-02 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Minor enhancements have been made in MDM to improve security and performance.
  > Type: BugFixes; Products: DC:MSP

- **11.5.2627.42 · BugFixes · All** — 2026-09-01 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed the issue causing Distribution Server to move to 'Awaiting Reapproval' status after central server upgrade.
  > Type: BugFixes; Products: All

- **11.5.2627.42 · BugFixes · DC:NGAV:ARW:SS:MSP** — 2026-08-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > An EDR command authorization issue has been fixed to ensure commands are accessible only to the intended endpoint.
  > Type: BugFixes; Products: DC:NGAV:ARW:SS:MSP

- **11.5.2627.42 · BugFixes · DC:MSP:PMP:VMP** — 2026-08-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where drive scans were not triggered for extended periods by adding an automatic 24-hour fallback to initiate them.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP

- **11.5.2627.42 · BugFixes · DC:ACP:SS:MSP** — 2026-08-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: medium
  > Resolved an issue where the Application Control driver failed to load on macOS under specific scenarios.
  > Type: BugFixes; Products: DC:ACP:SS:MSP

- **11.5.2627.41 · BugFixes · DC:MSP** — 2026-08-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Issue of OS deployment application crashes under specific cases has been fixed.
  > Type: BugFixes; Products: DC:MSP

- **11.5.2627.39 · BugFixes · All** — 2026-08-28 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed a security issue in Query Reports to improve query execution safety.
  > Type: BugFixes; Products: All

- **11.5.2627.39 · Enhancements · DC:RAP:SS** — 2026-08-25 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: medium
  > Introduced Event Viewer and Computer Rename tools in System Manager, enabling technicians to view Windows event logs and remotely rename managed devices directly from the console.
  > Type: Enhancements; Products: DC:RAP:SS

- **11.5.2627.39 · BugFixes · DC:MSP:SS** — 2026-08-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Optimized Device Control CPU usage on server OS during frequent virtual disk device events in Device Control Module.
  > Type: BugFixes; Products: DC:MSP:SS

- **11.5.2627.39 · BugFixes · DC:SS** — 2026-08-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where numeric outputs from XLSX formula cells were incorrectly identified by regex patterns in Endpoint DLP module.
  > Type: BugFixes; Products: DC:SS

- **11.5.2627.39 · BugFixes · DC:PMP** — 2026-08-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Improved performance of threat scanner software vulnerabilities view.
  > Type: BugFixes; Products: DC:PMP

- **11.5.2627.38 · BugFixes · DC:MSP:RAP:SS** — 2026-08-20 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where read-only System Manager technicians incorrectly inherited administrator roles when a shared resource session was reused.
  > Type: BugFixes; Products: DC:MSP:RAP:SS

- **11.5.2627.38 · BugFixes · DC:MSP:RAP:SS** — 2026-08-20 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where read-only technicians could bypass Device Manager write restrictions and make unauthorized changes.
  > Type: BugFixes; Products: DC:MSP:RAP:SS

- **11.5.2627.37 · BugFixes · DC** — 2026-08-17 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: medium
  > Issues in communication in certain Windows OS due to missing intermediate certificates has been fixed
  > Type: BugFixes; Products: DC

- **11.5.2627.37 · BugFixes · DC** — 2026-08-17 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Issues in connecting to server in WinPE environment has been fixed
  > Type: BugFixes; Products: DC

- **11.5.2627.36 · BugFixes · DC:MSP:PMP:VMP:SS** — 2026-08-07 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed Dependency package download failure for Redhat Workstation certificate.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.33 · BugFixes · DC:MSP:SS** — 2026-07-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where the requested application was not visible in the console under specific scenarios in application control.
  > Type: BugFixes; Products: DC:MSP:SS

- **11.5.2627.33 · BugFixes · DC:MSP:SS** — 2026-07-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: medium
  > Fixed BitLocker re-encryption caused by incorrect policy selection when Active Directory is unavailable.
  > Type: BugFixes; Products: DC:MSP:SS

- **11.5.2627.33 · BugFixes · DC:MSP:PMP:VMP:SS** — 2026-07-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Resolved custom CIS compliance policy replication issue in Distribution Server.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.33 · BugFixes · DC:MSP:PMP:VMP:SS** — 2026-07-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Resolved an issue where patch scans would hang during software component scanning due to network-shared paths, these paths are now excluded from the scan process.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.32 · BugFixes · DC:MSP:PMP:VMP:SS** — 2026-07-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Zero-Day Vulnerability view breakage and Executive Threat Summary report generation failure caused by the executive report filter fix are resolved.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.31 · BugFixes · DC:MSP:PMP:VMP:SS** — 2026-07-27 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where reboots and shutdowns initiated from the Deployment Details view in Automate Patch Deployments failed to execute.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.31 · BugFixes · DC:DLP:SS** — 2026-07-27 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue with renaming and deleting scanning files in endpoint dlp module.
  > Type: BugFixes; Products: DC:DLP:SS

- **11.5.2627.31 · BugFixes · DC:MSP:PMP:VMP:SS** — 2026-07-27 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed unauthorized access to the Configuration details GET API by users with Report Read permissions.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.03 · BugFixes · DC:MSP:PMP:VMP:SS** — 2026-07-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Resolved an issue where Automate Patch Deployments outside a technician's assigned endpoint scope were incorrectly displayed in the "Created By All" view for Custom Group technicians.
  > Type: BugFixes; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.03 · BugFixes · DC:DLP:SS** — 2026-07-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed sensitive content printing restriction for non-English characters.
  > Type: BugFixes; Products: DC:DLP:SS

- **11.5.2627.03 · BugFixes · DC:DLP:SS** — 2026-07-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed the issue where the browser’s new window failed to hide during screen capture.
  > Type: BugFixes; Products: DC:DLP:SS

- **11.5.2627.03 · BugFixes · DC:DCP:SS** — 2026-07-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue in USB encryption when multiple Trusted Device groups are associated in a policy.
  > Type: BugFixes; Products: DC:DCP:SS

- **11.5.2627.03 · BugFixes · DC:DCP:SS** — 2026-07-21 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue in USB encryption end user prompt specific to 256-Bit encrypted devices.
  > Type: BugFixes; Products: DC:DCP:SS

- **11.5.2627.01 · Features · DC** — 2026-06-16 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Images deleted can now be imported into the server if the original file is available.
  > Type: Features; Products: DC

- **11.5.2627.01 · Features · DC** — 2026-06-16 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Introduced the support for transferring OS images between servers.
  > Type: Features; Products: DC

- **11.5.2627.01 · Features · DC** — 2026-06-16 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Software Deployment - OS Deployment Applications Integration has been introduced. You can now utilize applications added under Software Deployment in OS Deployment templates.
  > Type: Features; Products: DC

- **11.5.2627.01 · Features · DC:MSP:PMP:VMP** — 2026-06-16 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Introducing Patch Reliability Score for smarter patch deployment decisions.
  > Type: Features; Products: DC:MSP:PMP:VMP

- **11.5.2627.01 · Features · DC:MSP:PMP:VMP:SS** — 2026-06-16 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: medium
  > Enhanced Zia Analysis Windows readiness report for upgrading endpoints to specific Feature pack version
  > Type: Features; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.01 · Features · DC:MSP:PMP:VMP:SS** — 2026-06-24 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: medium
  > Enhanced Windows Feature Pack Deployments – Added a dedicated Feature Pack Updates view and separate deployment options for Test & Approve and APD workflows.
  > Type: Features; Products: DC:MSP:PMP:VMP:SS

- **11.5.2627.01 · Enhancements · DC:MSP** — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Drive Mapping Configuration now supports custom credentials for SMB network drives
  > Type: Enhancements; Products: DC:MSP

- **11.5.2627.01 · Enhancements · DC:MSP** — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Software installation alerts have been enhanced to include the software installed location
  > Type: Enhancements; Products: DC:MSP

- **11.5.2627.01 · Enhancements · DC:DLP:SS** — 2026-06-24 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Introduced support for creating data rules from predefined compliance templates and duplicating data rules.
  > Type: Enhancements; Products: DC:DLP:SS

- **11.5.2627.01 · Enhancements · DC** — 2026-06-24 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > ”Introduced support in Endpoint DLP for creating data rules from predefined compliance templates and duplicating data rules.“
  > Type: Enhancements; Products: DC

- **11.5.2627.01 · Enhancements · DC** — 2026-06-24 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > ”Enhanced Endpoint DLP data leak event views segmented by transmission channel type for granular leak prevention monitoring.“
  > Type: Enhancements; Products: DC

- **11.5.2627.01 · Enhancements · DC:MSP:PMP:VMP:DCP:ACP:RAP:BMP:DLP:MDMP** — 2026-06-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The Failover feature has been renamed to High Availability and UI improvements have been made to the High Availability page
  > Type: Enhancements; Products: DC:MSP:PMP:VMP:DCP:ACP:RAP:BMP:DLP:MDMP

- **11.5.2627.01 · Enhancements · DC:MSP:BSP** — 2026-06-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Introduced Generative AI policies for enterprise browsers.
  > Type: Enhancements; Products: DC:MSP:BSP

