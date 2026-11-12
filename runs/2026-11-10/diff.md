# Competitor watch — fetch diff 2026-11-10

Period: 2026-11-02 → 2026-11-10. Sources marked *baseline* have no previous snapshot and list only items dated within the last 14 days (or the newest undated items). Full item text is in diff.json.

## Summary

| Source | Vendor | Status | New | Changed | Note |
|---|---|---|---|---|---|
| intune-whats-new | Microsoft Intune | ok | 0 | 1 | 6 items |
| intune-blog | Microsoft Intune | no-change | 0 | 0 | 20 items |
| iru-updates | Iru | ok | 10 | 0 | 50 items; 10 removed |
| hexnode-whats-new | Hexnode | no-change | 0 | 0 | 25 items |
| hexnode-blog | Hexnode | no-change | 0 | 0 | 0 items; 2 removed |
| miradore-releases | Miradore | ok | 1 | 0 | 374 items |
| 42gears-press | 42Gears | no-change | 0 | 0 | 103 items |
| 42gears-docs | 42Gears | ok | 14 | 107 | 966 items; 1 removed |
| jamf-pro-release-notes | Jamf | no-change | 0 | 0 | 3 items; v11.33.3 |
| scalefusion-release-notes | Scalefusion | ok | 1 | 0 | 31 items |
| scalefusion-product-updates | Scalefusion | no-change | 0 | 0 | 10 items |
| ivanti-quarterly-releases | Ivanti | no-change | 0 | 0 | 67 items |
| jumpcloud-release-notes | JumpCloud | ok | 2 | 0 | 12 items; 2 removed |
| manageengine-endpoint-central | ManageEngine | ok | 6 | 0 | 399 items; 6 removed |

## Microsoft Intune

### intune-whats-new — ok

Kind: html-sections · Source: https://learn.microsoft.com/en-us/intune/whats-new/

#### Changed (1)

- **Week of October 26, 2026 (Service release 2610)** — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610> — Windows: high
  Removed:
  - Role-based access control
  - Scoped permissions for role-based access control are generally available
  - Microsoft Intune scoped permissions for role-based access control are now generally available. Permissions from role assignments with different scope tags are applied independently instead of being m…
  - For more information, see Permission behavior across role assignments.
  - Microsoft Intune admin center

### intune-blog — no-change

Kind: rss · Source: https://techcommunity.microsoft.com/t5/s/gxcuf89792/rss/board?board.id=MicrosoftIntuneBlog

No new or changed items.

## Iru

### iru-updates — ok

Kind: rss · Source: https://www.iru.com/updates/rss.xml

#### New (10)

- **Managed OS for iOS and iPadOS** — 2026-11-09 — <https://www.iru.com/updates/2026/11/09/managed-os-for-ios-and-ipados> — Windows: none
  > Managed OS for iOS and iPadOS has been updated. The latest approved versions are now 27.2.1, 26.7.3, and 18.7.12, with the following release dates:

- **Managed OS for macOS** — 2026-11-09 — <https://www.iru.com/updates/2026/11/09/managed-os-for-macos> — Windows: none
  > Managed OS for macOS has been updated. The latest approved version for Golden Gate is now 27.2.1; for Tahoe, 26.7.3; and for Sequoia, 15.8.3, with the following release dates:

- **What's New in Iru \| November 6th** — 2026-11-06 — <https://www.iru.com/updates/2026/11/06/whats-new-in-iru> — Windows: none
  > Korean is now a live language in Iru across every product
  > Remote Shell is now available to all customers using Iru EDR.
  > Auto Apps update notifications now roll into a single daily digest.

- **Preserve managed apps with Return to Service** — 2026-11-04 — <https://www.iru.com/updates/2026/11/04/preserve-managed-apps-with-return-to-service> — Windows: none
  > Devices erased with Return to Service can now keep their managed apps through the erase, so a redeployed device is ready for its next user without re-downloading every app. Admins turn on the new Allow app preservation during Return to Service option in the Automated Device Enrollment Library Item for iPhone and iPad. Devices running iOS or iPadOS 26 or later then show a Preserve managed apps option, checked by default, in the Erase device modal after Use Return to Service is selected. Only managed-app executables are kept; all user data, including each app's own stored data, is still erased. The option is also available through the Iru Enterprise API's erase action, and as an admin-controlled default for end-user-triggered Return to Service through Self Service.

- **Delegate certificate management to Google Play apps on Android** — 2026-11-04 — <https://www.iru.com/updates/2026/11/04/delegate-certificate-management-to-google-play-apps-on-android> — Windows: none
  > Admins can now give a Google Play app permission to manage certificates on managed Android devices. A new Certificate management section on the Google Play app Library Item lets you allow an app to install and manage certificates, to select certificates for other apps, or both. This supports running a third-party certificate or PKI app on managed Android devices. Only one app per device can select certificates for other apps, so the Blueprint editor blocks assigning two such apps to the same Blueprint node and warns when two apps on the same path could reach the same device.

- **Iru Agent for Mac Release 5.2.8 (5402)** — 2026-11-04 — <https://www.iru.com/updates/2026/11/04/iru-agent-for-mac-release-5.2.8-5402> — Windows: none
  > We’ve released Iru Agent for Mac 5.2.8 (5402).
  > This release changes the notification frequency for Auto App updates and enforcements.
  > Available updates are now grouped into a single daily digest, with app-specific reminders sent two days before automatic install, and at four, two, and one hour(s) before installation. The final installation countdown remains unchanged.
  > Additionally, Library Item status logs for LAPS are now localized.

- **What's New in Iru \| October 30th** — 2026-10-30 — <https://www.iru.com/updates/2026/10/30/whats-new-in-iru> — Windows: none
  > Highlights this week in What’s New in Iru:

- **Iru Agent for Windows 1.25.7** — 2026-10-29 — <https://www.iru.com/updates/2026/10/28/iru-agent-for-windows-1-25-7> — Windows: high
  > We've released Iru Agent for Windows 1.25.7. Endpoint Agent

- **What's New in Iru \| October 16th** — 2026-10-16 — <https://www.iru.com/updates/2026/10/16/whats-new-in-iru> — Windows: none
  > Highlights we cover this week in What's New in Iru:

- **What's New in Iru \| October 9th** — 2026-10-09 — <https://www.iru.com/updates/2026/10/09/whats-new-in-iru> — Windows: none
  > Highlights we cover this week in What's New in Iru:

## Hexnode

### hexnode-whats-new — no-change

Kind: next-data · Source: https://www.hexnode.com/whats-new/

No new or changed items.

### hexnode-blog — no-change

Kind: rss · Source: https://www.hexnode.com/blogs/feed/

No new or changed items.

## Miradore

### miradore-releases — ok

Kind: link-list · Source: https://www.miradore.com/knowledge/releases/

#### New (1)

- **Improved visibility of business policy compliance, updates to user change flow for Android devices, new dialog for the Remove application action** — <https://www.miradore.com/knowledge/releases/improved-visibility-of-business-policy-compliance-new-dialog-for-the-remove-application-action/> — Windows: none
  > In this article
  > Toggle
  > Improved visibility of business policy compliance
  > We added a new column to the devices table on the Management > Devices page, called Business policy compliance. This column shows your devices' compliance with assigned business policies. Additionally, you can now create custom reports for business policy compliance by combining the BusinessPolicyCompliance column with columns that identify devices (such as InvDevice.Model). We also introduced a new widget called Business policy compliance (Devices) you can add to your dashboard to see the compliance status of your entire device fleet at a glance. For detailed information on business policy compliance status, see Business policy compliance.
  > Updates to user change flow for Android devices
  > We updated the user change flow for Android devices to prevent managed Google Play accounts from remaining tied to previous users. As a result, changing a device's assigned user on the device page is no longer possible if a managed Google Play account is present on the device. To change the user, you must first remove the managed Google Play account from the device.
  > For details, see Change the user assigned to an Android device.
  > New dialog for the Remove application action
  > We changed the step-by-step wizard for the Remove application action to a modern dialog. The functionality and steps remain the same.
  > Have you already subscribed to our newsletter?
  > Fill in your email address to get the latest Miradore news and article…

## 42Gears

### 42gears-press — no-change

Kind: link-list · Source: https://www.42gears.com/press-releases

No new or changed items.

### 42gears-docs — ok

Kind: sitemap · Source: https://docs.42gears.com/suremdm/sitemap.xml

#### New (6 shown of 14)

- **extensible sso ddm** — 2026-11-06 — <https://docs.42gears.com/suremdm/ios-jobs-and-profiles/profiles-for-ios/ios-profiles-General/extensible-sso-ddm> — Windows: none
  > Configure Extensible Single Sign-On Profile
  > The DDM SSO payload enables administrators to configure and deploy Single Sign-On (SSO) settings through Apple's Declarative Device Management (DDM) framework. It allows administrators to define the required SSO app extensions and their associated configurations, which are delivered to enrolled devices as declarative settings. This enables devices to receive and manage SSO configurations through DDM rather than relying solely on the traditional profile-based deployment mechanism.
  > note
  > Supported OS Version: iOS 27.0 and iPadOS 27.0 or later
  > Supported Enrollment Types:
  > Device Enrollment and Automated Device Enrollment
  > User Enrollment
  > To configure an app extension that performs Single Sign-On on enrolled devices, follow these steps:
  > On the SureMDM Web Console, navigate to Profile > iOS/iPadOS > Add > Select Enrollment Type > Identity and Access Management > Extensible Single Sign-On > Configure.
  > Enter a Profile Name and click Add.
  > Configure Single Sign-On Settings and click Add.
  > SettingsDescription
  > SSO Provider
  > Choose the identity provider responsible for handling Single Sign-On authentication for this configuration.
  > Microsoft Enterprise SSO via Company Portal App - When selected, SureMDM automatically populates the required values for the Company Portal.
  > Manual Configuration - When selected, the administrator must manually configure the required settings.
  > Extension Identifier
  > Enter the bundle Id of the app extension that performs sin…

- **extensible sso ddm** — 2026-11-06 — <https://docs.42gears.com/suremdm/macos-jobs-and-profiles/macos-jobs-profiles-manage/profiles-for-macos/extensible-sso-ddm> — Windows: none
  > Configure Extensible Single Sign-On Profile
  > The DDM SSO payload enables administrators to configure and deploy Single Sign-On (SSO) settings through Apple's Declarative Device Management (DDM) framework. It allows administrators to define the required SSO app extensions and their associated configurations, which are delivered to enrolled devices as declarative settings. This enables devices to receive and manage SSO configurations through DDM rather than relying solely on the traditional profile-based deployment mechanism.
  > note
  > Supported OS Version: macOS 27.0 or later
  > Supported Enrollment Type: Device Enrollment and Automated Device Enrollment
  > Supported Channel Type: Device Channel and User Channel
  > To configure an app extension that performs Single Sign-On on enrolled devices, follow these steps:
  > On the SureMDM Web Console, navigate to Profile > macOS > Add > Select Enrollment Type > DDM > Extensible Single Sign-On > Configure.
  > Enter a Profile Name and click Add.
  > In the SSO Configuration popup, configure the required options under the respective tab section.
  > SSO Configuration
  > SettingsDescription
  > SSO Provider
  > Choose the identity provider responsible for handling Single Sign-On authentication for this configuration.
  > Microsoft Enterprise SSO via Company Portal App - When selected, SureMDM automatically populates the required values for the Company Portal.
  > Manual Configuration - When selected, the administrator must manually configure the required settings.
  > Extension Identifier…

- **enabling shared device mode** — 2026-11-06 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/enabling-shared-device-mode> — Windows: none

- **job deployment and device monitoring** — 2026-11-06 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/job-deployment-and-device-monitoring> — Windows: none

- **profile mapping** — 2026-11-06 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/profile-mapping> — Windows: none

- **sdm profile creation** — 2026-11-06 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/sdm-profile-creation> — Windows: none

#### Changed (9 shown of 107)

- **android zero touch** — <https://docs.42gears.com/suremdm/android-enterprise/enterprise/enrollment/enroll-devices/zero-touch-enrollment/android-zero-touch> — Windows: none
  (changed; no line-level detail)

- **enroll suremdm with android enterprise** — <https://docs.42gears.com/suremdm/android-enterprise/enterprise/enrollment/enroll-suremdm/enroll-suremdm-with-android-enterprise> — Windows: none
  (changed; no line-level detail)

- **profile windows** — lastmod 2026-10-21 → 2026-11-06 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sureaccess/sureaccess-profile-configuration/profile-windows> — Windows: high
  (changed; no line-level detail)

- **link abm** — lastmod 2026-10-14 → 2026-11-06 — <https://docs.42gears.com/suremdm/ios-device/ios-device-manage/enroll-ios-devices/enrollment-methods-types/apple-business-manager/link-abm> — Windows: none
  Added:
  + Do not use ADE Profile from Backup
  + If enabled, the device does not use the profile when it restores a backup, reading the current profile from the server instead. Applicable from iOS 26 and later.
  + If disabled, iOS Setup Assistant prompts user to set up an TouchID/FaceID during enrollment. Available for Touch ID…
  Removed:
  - If disabled, iOS Setup Assistant prompts user to set up an TouchID/FaceID during enrollment. Available for Touch ID on iOS 8.1 and later, and for Face ID on iOS 11.0/iPadOS 12.0 and later.
  - Skip Apple Pay Setup
  - If disabled, iOS Setup Assistant prompts user to set up an Apple Pay account during enrollment. Availa…

- **link abm** — lastmod 2026-10-14 → 2026-11-06 — <https://docs.42gears.com/suremdm/mac-os-device/mac-os-manage/mac-os-enrollment/apple-business-manager-macos/link-abm> — Windows: none
  (changed; no line-level detail)

- **device enrollment** — lastmod 2026-07-30 → 2026-10-28 — <https://docs.42gears.com/suremdm/manage-devices-suremdm/device-enrollment/> — Windows: high
  Added:
  + Device Enrollment
  + Device enrollment is an important step in setting up the SureMDM console, as it allows administrators to remotely manage devices from the SureMDM console. The Device Enrollment section in the SureMDM Console contains the following enrollments:
  + QR Code Enrollment
  + Manual Enrollment
  + Create QR Code
  + note
  + QR Code enrollment is available for Android, iOS/iPad devices, macOS, Windows, Windows Server & Things platforms.
  + QR code enrollment is a quick and easy way to enroll devices in SureMDM. It involves scanning a QR code with the SureMDM Agent to automatically register the device with the SureMDM server. Here are the steps to enroll a device in SureMDM using a QR code:
  + On the SureMDM Web Console, navigate to Settings > Enrollment > Device Enrollment - QR Code > List View > Create New.
  + On the Setup QR Code for Enrollment prompt, under the Enrollment Type tab.
  + Enter the name of the QR code and select one of the following platforms:
  + Android
  + iOS/iPadOS
  + macOS
  + Windows
  + Windows Server
  + Things
  + Select the Enrollment Type:
  + Android Enterprise Enrollment (Google Play EMM API)
  + Android Enterprise Enrollment (Android Management API)
  + Device Admin Enrollment (Device Administration API)
  + Based on the enrollment type you selected, select the Enrollment Mode:
  + Android Enterprise Enrollment (Google Play EMM API or Android Management API)
  + Fully Work Profile (Profile Owner)
  + Managed Device (Device Owner)
  + Fully Managed Device with a Work Profile (WPCO)
  + iOS/iPadOS Device Enrollment
  + macOS Device Enrollment
  + Windows Dual Enrollment
  + Windows Agent Enrollment.
  + CamLock Sentry
  + The Things platform mentioned here is only for CamLock enrollment, not Things device enrollment.
  + Click Next.
  + Under Configure Options tab, enter or select the required details:
  + Select Group - Select or add the group to which the device will be enrolled.
  + Select Device Name - Select the device name parameter from the drop-down.
  + Expiry Date & Time - Add the expiry date and time.
  + Maximum Number Of Devices - Specify the maximum number of devices that are allowed to be enrolled using the QR code. Supported from SureMDM Agent v27.26.21 onwards
  + Use mobile data if available - Select this option to use mobile data instead of Wi-Fi.
  + Download SureMDM Agent From 42Gears Website - Enbale this option to download the SureMDM Agent installer directly from the official 42Gears website.
  + … 25 more added lines

- **bixolon printer enrollment** — lastmod 2026-10-23 → 2026-11-06 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/bixolon-printer-enrollment> — Windows: none
  Added:
  + Navigate to Enrollment > Manual Enrollment > Things > Bixolon Printer in the SureMDM console to download the CA Certificate.

- **honeywell printer enrollment** — lastmod 2026-10-23 → 2026-11-06 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/honeywell-printer-enrollment> — Windows: none
  Added:
  + Navigate to Enrollment > Manual Enrollment > Things > Honeywell Printer in the SureMDM console to download the MQTT CA Certificate.
  + The values vary based on the region as follows:
  + <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class="token plain"> - If your SureMDM URL is [dns.suremdm.io](http://dns.suremdm.io/) (US), then use the server [mqttbrokerusdns.suremdm.io](http://mqttbrokerusdns.suremdm.io/) </span><br></span><span class="token-line" style="color:#bfc7d5"><span class="token plain"> - If your SureMDM URL is [dns.eu.suremdm.i…
  + <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class="token plain">- The values are the same for all regions, i.e., 8883</span><br></span></code>
  + <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class…
  Removed:
  - <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class="token plain"> * The values vary based on the region as follows:</span><br></span><span class="token-line"…
  - <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class="token plain"> * The values are the same for all regions, i.e., 8883</span><br></span></code>
  - <code class="co…

- **shared device mode** — lastmod 2026-08-07 → 2026-11-06 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/> — Windows: none
  (changed; no line-level detail — page text not fetched)

## Jamf

### jamf-pro-release-notes — no-change

Kind: jamf-khub · Source: https://learn.jamf.com

No new or changed items.

## Scalefusion

### scalefusion-release-notes — ok

Kind: d360-index · Source: https://help.scalefusion.com/docs/latest-release-notes-year-{year}

#### New (1)

- **Scalefusion October 30th, 2026 Release Notes** — 2026-11-02 — <https://help.scalefusion.com/docs/scalefusion-october-30th-2026-release-notes> — Windows: medium
  > Version Information:
  > Scalefusion Dashboard: v68.5.0
  > Scalefusion Windows MDM Agent: v17.4.0
  > Scalefusion Linux MDM Agent: v5.3.0
  > Release Notes:
  > Windows Self-Service for App Catalog Apps
  > Scalefusion now extends Self-Service capabilities to Windows App Catalog applications, allowing IT Administrators to make applications available for end users to install, update, and uninstall.
  > Administrators can silently install applications while also making them available in the Self-Service catalog. This allows users to reinstall an application if a silent installation encounters an error or install an available update immediately instead of waiting for the automatic update process.
  > When an application is added to Self-Service, users can also update it whenever the agent detects that a newer version is available.
  > Additionally, users can now uninstall Enterprise Store applications that are made available through Self-Service.
  > Linux SUSE Support
  > Scalefusion now supports the enrollment and management of SUSE-based Linux devices, extending Linux device management support to additional Linux distributions.
  > Linux Device Management Enhancements
  > Several enhancements have been introduced to simplify Linux device administration and provide IT Administrators with additional management capabilities:
  > a. Global Admin Account Creation: IT Administrators can now create a global admin account for Linux devices from the Utilities section, similar to the existing functionality for Windows and macOS.
  > b. Shutdo…

### scalefusion-product-updates — no-change

Kind: rss · Source: https://blog.scalefusion.com/category/product-updates/feed/

No new or changed items.

## Ivanti

### ivanti-quarterly-releases — no-change

Kind: html-blocks · Source: https://www.ivanti.com/releases

No new or changed items.

## JumpCloud

### jumpcloud-release-notes — ok

Kind: html-sections · Source: https://jumpcloud.com/support/release-notes-{year}

#### New (2)

- **November 4th, 2026** — 2026-11-04 — <https://jumpcloud.com/support/release-notes-2026#november-4th-2026> — Windows: none
  > New: Agent Delegated Access
  > Feature: Agent Delegated Access is now in Private Preview!
  > We’re extending Agent Identities so an AI agent can authenticate with its own JumpCloud-managed identity while acting on behalf of an end user.
  > The initial release supports customers building their own agent applications and internal APIs. JumpCloud provides identity and token exchange, and the customer’s API can identify both the user requesting the work and the agent performing it.
  > Key Highlights & Features:
  > User delegation: Exchange a trusted user identity token for a signed token representing the agent acting on that user’s behalf.
  > Admin controls: Enable delegation and select a trusted OIDC application from the agent’s new Delegated access tab.
  > Allowed audiences: Configure the resources an agent may request tokens for.
  > Direct API access: Use JumpCloud-issued tokens with customer-controlled APIs without routing those API calls through the AI Gateway.
  > See Get Started: Agent Delegated Access to learn more.
  > Enhancement: Capability-based app setup for SSO, SCIM, and MCP
  > Feature: SSO Applications/AI Gateway
  > When you add an application, select the capabilities you need: SSO, SCIM, and/or MCP. New apps only show configuration for what you selected.
  > You can create MCP-only applications that may not use JumpCloud SSO, assign them to user groups for access control, and make the MCP server available through AI Gateway.
  > For MCP-only access, select Manage MCP Servers. You do not need to configure SSO or create a bookmark.
  > Use the Actions menu to add SCIM or MCP capabilities if you need them later.
  > You can also create the application from AI Gateway when you register an MCP server. It follows the same add-application flow.
  > You can also review a user group’s applications from Identity Management > User Groups. Open the group and select the Applications tab. Apps with validated MCP configs are marked as ready for AI Gateway. Group membership still controls access.
  > See Get Started: AI Gateway, Get Started: SSO Applications, and Authorize Users to an SSO Application to learn more.

- **November 2nd, 2026** — 2026-11-02 — <https://jumpcloud.com/support/release-notes-2026#november-2nd-2026> — Windows: high
  > New: Access Certification
  > Feature: Access Certification
  > We are excited to introduce JumpCloud Access Certification, our powerful Identity Governance and Administration (IGA) solution built to make periodic access reviews completely effortless, audit-ready, and secure.
  > Key Highlights & Features:
  > Flexible Review Campaigns: Launch one-time or recurring review campaigns tailored for Single Sign-On (SSO) applications or directory user groups with just a few clicks.
  > Multi-Stage Review Workflows: Establish multi-step approval chains involving Administrators, Managers, Resource Owners, or designated User Groups to ensure thorough access validation.
  > Automated Remediation: Eliminate manual follow-ups! Set automated policies to immediately revoke access or suspend inactive identities the moment a decision is finalized or when review deadlines expire.
  > Centralized Admin Queue: Keep admins focused with a consolidated dashboard tracking all pending review and remediation tasks in real time.
  > Audit-Ready Reporting & Sign-off: Export frozen, tamper-proof campaign snapshots in CSV, JSON, or PDF formats—complete with formal administrator sign-off flows and SHA-256 document hashing for effortless compliance audits.
  > See Manage Access Certification and Users: Access Certification Campaigns to learn more.
  > New: User Level Windows Custom Registry Keys Policy
  > Feature: Policy Management
  > Manage specific Windows registry values for an assigned user’s profile when JumpCloud doesn’t offer an equivalent built-in policy. Assign it to users or user groups; the Agent applies settings under HKEY_CURRENT_USER when that user signs in. No MDM enrollment or device restart required.
  > See Create a User Level Windows Custom Registry Keys Policy to learn more.
  > New: User Level Custom Windows MDM (OMA URI) Policy
  > Feature: Policy Management
  > Configure custom MDM settings for a user’s profile on Windows devices when JumpCloud doesn’t offer an equivalent built-in policy. Assign it to users or user groups on MDM-enrolled Windows devices.
  > See Create a User Level Custom Windows MDM (OMA URI) Policy to learn more.
  > Enhancement: Device Lock for Apple MDM
  > Feature: Device Management
  > We’ve enhanced the Device Lock MDM command for macOS, iOS, and iPadOS, letting you secure Apple devices with automatic PIN generation and escrow, improved lock status visibility, and support for Lock Screen content.
  > Automatic PIN escrow (macOS): JumpCloud generates and stores the lock PIN when you lock a Mac, and you can retrieve it later from the Admin Portal under Highlights > Device Lock > View PIN.
  > Lock Screen contact details: Optionally show a message and phone number on the Lock Screen for Mac computers, iPhone, and iPad.
  > macOS Lock Status: Track whether a Mac is locked or unlocked from the Devices list using the macOS Lock Status column.
  > iOS and iPadOS unlock: Per Apple MDM framework, iOS and iPadOS devices unlock with the existing device passcode. JumpCloud does not generate or store a PIN for them.
  > See MDM Commands to learn more.
  > October

## ManageEngine

### manageengine-endpoint-central — ok

Kind: csv · Source: https://www.manageengine.com/sites/meweb/images/ems/readme/largenl_readme.csv

#### New (6)

- **11.5.2627.67 · BugFixes · DC:SS** — 2026-11-06 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed a screen capture restriction failure in Adobe Acrobat in EndpointDLP module
  > Type: BugFixes; Products: DC:SS

- **11.5.2627.67 · BugFixes · DC:SS** — 2026-11-06 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed random DLL loading failures in the Google Chrome browser in EndpointDLP module
  > Type: BugFixes; Products: DC:SS

- **11.5.2627.67 · BugFixes · DC:SS:MSP:PMP** — 2026-11-06 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Resolved an issue where viewing a report failed with an access denied error.
  > Type: BugFixes; Products: DC:SS:MSP:PMP

- **11.5.2627.66 · BugFixes · DC:SS:MSP:PMP:VMP** — 2026-11-02 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where, in certain cases, the 'Reboot Pending' status was sent even after the 'Reboot'.
  > Type: BugFixes; Products: DC:SS:MSP:PMP:VMP

- **11.5.2627.66 · BugFixes · DC:MSP:RAP** — 2026-11-02 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where non-English text in image announcements displayed special characters incorrectly.
  > Type: BugFixes; Products: DC:MSP:RAP

- **11.5.2627.66 · BugFixes · DC:MSP:RAP** — 2026-11-02 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where the user confirmation helper message displayed incorrect information.
  > Type: BugFixes; Products: DC:MSP:RAP

