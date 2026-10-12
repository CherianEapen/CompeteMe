# Competitor watch — fetch diff 2026-10-12

Period: 2026-10-05 → 2026-10-12. Sources marked *baseline* have no previous snapshot and list only items dated within the last 14 days (or the newest undated items). Full item text is in diff.json.

## Summary

| Source | Vendor | Status | New | Changed | Note |
|---|---|---|---|---|---|
| intune-whats-new | Microsoft Intune | ok | 1 | 1 | 6 items; 1 removed |
| intune-blog | Microsoft Intune | no-change | 0 | 0 | 20 items |
| iru-updates | Iru | ok | 17 | 0 | 50 items; 17 removed |
| hexnode-whats-new | Hexnode | ok | 7 | 0 | 25 items; 5 removed |
| hexnode-blog | Hexnode | ok | 4 | 0 | 4 items; 4 removed |
| miradore-releases | Miradore | no-change | 0 | 0 | 367 items |
| 42gears-press | 42Gears | no-change | 0 | 0 | 103 items |
| 42gears-docs | 42Gears | no-change | 0 | 0 | 934 items |
| jamf-pro-release-notes | Jamf | no-change | 0 | 0 | 3 items; v11.32.1 |
| scalefusion-release-notes | Scalefusion | ok | 1 | 0 | 27 items |
| scalefusion-product-updates | Scalefusion | no-change | 0 | 0 | 10 items |
| ivanti-quarterly-releases | Ivanti | no-change | 0 | 0 | 67 items |
| jumpcloud-release-notes | JumpCloud | no-change | 0 | 0 | 12 items |
| manageengine-endpoint-central | ManageEngine | ok | 5 | 0 | 399 items; 5 removed |

## Microsoft Intune

### intune-whats-new — ok

Kind: html-sections · Source: https://learn.microsoft.com/en-us/intune/whats-new/

#### New (1)

- **Week of October 5, 2026** — 2026-10-05 — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-5-2026> — Windows: high
  > Device security
  > Intune security baseline for Windows 11, version 26H2
  > The Windows security baseline for Windows 11, version 26H2 is now available in Microsoft Intune. This baseline reflects current Microsoft security recommendations and is the latest available Windows security baseline in Intune.
  > The Windows 11, version 26H2 security baseline includes new settings, updated default values, and revised security guidance. Existing security baseline profiles don't automatically update to the new version.
  > To use the Windows 11, version 26H2 security baseline, Intune admins can create a new baseline profile or update an existing profile to the latest version. Review the settings before moving from a previous baseline version, especially if existing profiles include customizations.
  > The Configure NetBIOS settings policy isn't included in this baseline release because it's currently supported only on Windows Insider builds. We plan to add the setting in a future baseline update after it becomes available for supported, in-market Windows versions and through the Intune Settings Catalog. This change will be communicated when available.
  > For a detailed breakdown of setting changes, see the Windows blog post Windows 11, version 26H2 security baseline.
  > To view the default configuration of the Intune baseline for Windows 11, version 26H2, see Windows MDM baseline settings.
  > Applies to:
  > Windows 11

#### Changed (1)

- **Week of September 28, 2026 (Service release 2609)** — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-september-28-2026-service-release-2609> — Windows: high
  Added:
  + Remote Help support for GCCH environments
  + Remote Help is now available in US Government Community Cloud High (GCCH) environments. This expansion extends the same secure, cloud-based remote assistance capabilities currently available in GCC to GCCH tenants.
  + IT support staff can establish Remote Help sessions with users on enrolled devices to provide real-time troubleshooting. Remote Help uses role-based access controls through Intune, and both helpers and sharers must sign in with their organization's Microsoft Entra ID accounts. DoD environments aren't supported.
  + For more information, see Planning for Remote Help.
  + Windows 11, version 26H2 Settings Catalog update
  + Microsoft Intune provides day-zero support for validated Windows policy settings introduced with Windows 11, version 26H2 in the Settings Catalog. Admins can use the new and updated settings to manage Windows endpoints with the latest 26H2 capabilities.
  + For more information, see Microsoft Intune Settings Catalog updated to support Windows 11, version 26H2.
  + Windows 11

### intune-blog — no-change

Kind: rss · Source: https://techcommunity.microsoft.com/t5/s/gxcuf89792/rss/board?board.id=MicrosoftIntuneBlog

No new or changed items.

## Iru

### iru-updates — ok

Kind: rss · Source: https://www.iru.com/updates/rss.xml

#### New (17)

- **Process items after Liftoff** — 2026-10-08 — <https://www.iru.com/updates/process-items-after-liftoff> — Windows: none
  > Custom App, Custom Printer, and Custom Script Library Items for Mac now provide an option for whether they should be processed during or after Liftoff.

- **Iru Agent for Mac Release 5.2.4 (5399)** — 2026-10-07 — <https://www.iru.com/updates/iru-agent-for-mac-release-5.2.4-5399> — Windows: none
  > We’ve released Iru Agent for Mac 5.2.4 (5399).

- **Iru Agent for Mac Release 5.2.3 (5398)** — 2026-10-07 — <https://www.iru.com/updates/iru-agent-for-mac-release-5.2.3-5398> — Windows: none
  > We’ve released Iru Agent for Mac 5.2.3 (5398).

- **What's New in Iru \| October 2nd** — 2026-10-02 — <https://www.iru.com/updates/2026/10/02/whats-new-in-iru> — Windows: none
  > Highlights we cover in this week in What's New in Iru:

- **Iru Agent for Windows Release 1.23.7** — 2026-10-02 — <https://www.iru.com/updates/2026/10/02/iru-agent-for-windows-release-1.23.7> — Windows: high
  > We've released Iru Agent for Windows 1.23.7. This release includes miscellaneous bug fixes and performance improvements.

- **Iru now supports Windows 11 26H2** — 2026-10-02 — <https://www.iru.com/updates/2026/10/02/iru-now-supports-windows-11-26h2> — Windows: high
  > Windows 11 26H2 is here, and Iru is ready for it. Devices running 26H2 can now be enrolled in Iru, so your team can onboard new hardware and upgraded fleets without waiting or building workarounds.
  > We've also added a new Managed OS Library Item for Windows 11 26H2, which lets IT teams set 26H2 as the target version and keep devices on a consistent, supported release from one place. For customers, that means a smoother path to the latest Windows release with the same control and visibility they already have in Iru.

- **Auto App: TIDAL** — 2026-10-01 — <https://www.iru.com/updates/2026/10/01/auto-app-tidal> — Windows: none
  > A new Auto App, TIDAL, has been added to the catalog and is now available for all customers.

- **Auto App: Parallels Desktop 27** — 2026-10-01 — <https://www.iru.com/updates/2026/10/01/auto-app-parallels-desktop-27> — Windows: none
  > A new Auto App, Parallels Desktop 27, has been added to the catalog and is now available for all customers.

- **Auto App: Microsoft 365 Copilot** — 2026-10-01 — <https://www.iru.com/updates/2026/10/01/auto-app-microsoft-365> — Windows: none
  > A new Auto App, Microsoft 365 Copilot, has been added to the catalog and is now available for all customers.

- **Auto App: IINA** — 2026-10-01 — <https://www.iru.com/updates/2026/10/01/auto-app-iina> — Windows: none
  > A new Auto App, IINA, has been added to the catalog and is now available for all customers.

- **Auto App: cmux** — 2026-10-01 — <https://www.iru.com/updates/2026/10/01/auto-app-cmux> — Windows: none
  > A new Auto App, cmux, has been added to the catalog and is now available for all customers.

- **Auto App: Audacity 4** — 2026-10-01 — <https://www.iru.com/updates/2026/10/01/auto-app-audacity-4> — Windows: none
  > A new Auto App, Audacity 4, has been added to the catalog and is now available for all customers.

- **Managed OS for Apple: Dynamic timeline view** — 2026-09-30 — <https://www.iru.com/updates/2026/09/30/apple-managed-os-timeline> — Windows: none
  > Managed OS for Apple devices now includes a dynamic timeline view that adjusts to the settings defined in the Library Item, taking the guesswork out of when a particular update will be enforced and to which version a device will be forced to update.

- **New Apple Restrictions for Siri and Apple Intelligence** — 2026-09-30 — <https://www.iru.com/updates/2026/09/30/new-apple-restrictions-for-siri-and-apple-intelligence> — Windows: none
  > The Restrictions Library Item for Apple devices now supports the following restrictions:

- **Manage Safari Extensions for Mac** — 2026-09-30 — <https://www.iru.com/updates/2026/09/30/manage-safari-extensions-for-mac> — Windows: none
  > The Safari Extensions Library Item has been enhanced to support management of Safari Extensions on macOS.

- **MDM enabled user reporting for Mac** — 2026-09-30 — <https://www.iru.com/updates/2026/09/30/mdm-enabled-user-reporting> — Windows: none
  > The user list shown on a Mac device record now includes whether the user is enabled for user channel MDM.

- **Iru Agent for Windows Release 1.21.1.0** — 2026-09-02 — <https://www.iru.com/updates/2026/09/02/iru-agent-for-windows-release-1.21.1.0> — Windows: high
  > We've released an update to Iru Agent for Windows. This release includes miscellaneous bug fixes and performance improvements.

## Hexnode

### hexnode-whats-new — ok

Kind: next-data · Source: https://www.hexnode.com/whats-new/

#### New (7)

- **Linux Patch Management** — 2026-10-05 — <https://www.hexnode.com/forums/topic/patch-management-arrives-for-linux/> — Windows: none
  > Provides a single dashboard to check, track, and install software updates across Ubuntu and Fedora Linux computers.
  > Badge: New Feature
  > Platforms: Linux

- **Integration with JIRA ITSM** — 2026-10-05 — <https://www.hexnode.com/forums/topic/jira-integration/> — Windows: none
  > Automatically creates structured IT support tickets in Jira whenever Hexnode detects a device issue or security alert, keeping support teams informed without manual data entry.
  > Badge: New Feature

- **macOS software update via DDM** — 2026-10-01 — <https://www.hexnode.com/forums/topic/ddm-software-updates-now-on-macos/> — Windows: none
  > Upgrading macOS software update management to use Apple's Declarative Device Management (DDM) framework, replacing legacy MDM commands for more reliable and enforceable OS updates.
  > Badge: New Feature
  > Platforms: macOS

- **Platform SSO** — 2026-09-29 — <https://www.hexnode.com/forums/topic/platform-sso-for-macos/> — Windows: none
  > Allows Mac users to log into their computer using their main cloud work account (such as Entra ID or Okta) and gain seamless single sign-on access to all corporate apps without re-entering passwords.
  > Badge: New Feature
  > Platforms: macOS

- **Deploy e-sim on Android devices** — 2026-09-29 — <https://www.hexnode.com/forums/topic/remote-esim-actions-for-android/> — Windows: none
  > Enables IT administrators to wirelessly push cellular eSIM profiles directly to company Android devices, replacing physical SIM cards and guiding users through simple setup prompts.
  > Badge: New Feature
  > Platforms: Android

- **Pre-Approved enrollment for Windows devices** — 2026-09-25 — <https://www.hexnode.com/forums/topic/streamline-your-rollouts-pre-approved-enrollment-comes-to-windows/> — Windows: high
  > Enables bulk CSV pre-approval onboarding for Windows devices by enforcing a mandatory tripartite hardware match (Serial Number, Manufacturer Name, and Model Name) to prevent spoofing and streamline large-scale deployments.
  > Badge: New Feature
  > Platforms: Windows

- **Remarks for Patch Failure as a Report** — 2026-09-22 — <https://www.hexnode.com/mobile-device-management/help/patch-and-update-reports-in-hexnode-uem/> — Windows: medium
  > Generates a consolidated report detailing the exact reasons why a software patch failed on specific devices, making troubleshooting fast and simple.
  > Badge: New Feature
  > Platforms: Windows

### hexnode-blog — ok

Kind: rss · Source: https://www.hexnode.com/blogs/feed/

#### New (4)

- **DPDPA Compliance Device Management: A Guide for Indian Enterprises** — 2026-10-12 — <https://www.hexnode.com/blogs/dpdpa-compliance-device-management-a-guide-for-indian-enterprises/> — Windows: none
  > Why device visibility matters for DPDPA readiness
  > A DPDPA compliance device management plan starts with knowing which endpoints access personal data, which controls protect it, and what happens when devices leave management. An asset inventory alone cannot answer those questions.
  > Customer records can sit in laptop downloads, employee information can remain in local files, and work applications can store data on BYOD phones. Knowing who owns a device does not tell IT what personal data it holds or whether that data remains accessible after offboarding.
  > This guide helps IT and endpoint administrators connect endpoint visibility with practical controls for protecting personal data across corporate and employee-owned endpoints, from active use through offboarding and reassignment.
  > What happens when endpoint controls leave personal data exposed?
  > Endpoint control gaps can expose personal data, prolong investigations, and leave IT unable to demonstrate which safeguards operated.
  > Unauthorised access: Weak access controls can expose customer or employee records.
  > Data after departure: Former employees may retain work files on personal devices.
  > Interrupted operations: Containment and recovery can disrupt access to business applications.
  > Investigation overhead: Missing logs leave IT reconstructing administrative actions manually.
  > Once the relevant provisions take effect, the Data Protection Board can impose penalties up to ₹250 crore for breaches of Section 8(5)’s reasonable-security-sa…

- **Linux Patch Management Arrives in Hexnode UEM: One Console for Ubuntu and Fedora** — 2026-10-09 — <https://www.hexnode.com/blogs/linux-patch-management-arrives-in-hexnode-uem-one-console-for-ubuntu-and-fedora/> — Windows: medium
  > Linux patch management arrives in Hexnode UEM
  > Linux patch management is now available in Hexnode UEM, bringing native patch monitoring and deployment into your management console. IT administrators can track missing patches, automate security updates, and manually deploy critical patches when needed.
  > The release introduces three core capabilities: Patch Metrics, Auto & Manual Patch Deployments, and an Update Preferences Policy. Together, these capabilities let administrators review patch status, choose a deployment approach, and configure update schedules and deployment windows for their Linux environment. The announcement covers remote workstations, server environments, and developer setups.
  > Bring Linux patching into your existing console
  > If your team relies on manual scripts or separate command-line tools for Linux updates, this release brings those patching tasks into Hexnode UEM. You can monitor missing patches and deployment status from the console while controlling when updates reach devices.
  > Administrators can also choose how they select updates. Automated deployment uses predefined conditions to identify qualifying patches. Manual deployment lets administrators select specific updates for targeted Linux devices. Both approaches use Hexnode’s automation framework to determine deployment timing and device assignments. This gives teams a documented approach for recurring update cycles, targeted deployments, and patch testing.
  > More control over patch selection, timing, a…

- **Live Terminal for Windows: Troubleshoot Devices Without Interrupting a Single User** — 2026-10-09 — <https://www.hexnode.com/blogs/live-terminal-for-windows/> — Windows: high
  > What is Hexnode Live Terminal for Windows?
  > Hexnode Live Terminal for Windows provides secure, real-time access to a managed Windows device’s PowerShell environment directly from the Hexnode UEM console. IT administrators can open the command-line interface through their web browser and troubleshoot the endpoint in the background.
  > This approach does not require a screen-sharing session or third-party remote desktop software. It also avoids taking control of the display or interrupting the user while they work.
  > Through the terminal, administrators can diagnose and resolve device issues, run diagnostic scripts, restart stopped services and query system logs. These capabilities give IT teams a direct way to investigate Windows problems remotely without relying on an interactive desktop session.
  > Why does non-disruptive Windows troubleshooting matter?
  > Traditional remote troubleshooting often depends on screen sharing. Starting a session may require the user to accept a prompt, pause current work or surrender control of the display while an administrator investigates. This makes even routine checks visible and disruptive to the employee.
  > Background PowerShell access changes this workflow. With Live Terminal for Windows, an administrator can inspect logs, run diagnostics and restart stopped services from the Hexnode UEM console while the user’s desktop remains available. The user does not need to participate in the troubleshooting session, and IT can work at the command line without…

- **Deploy eSIM on Android Devices: End-to-End Cellular Provisioning, No Physical SIM Cards Required** — 2026-10-08 — <https://www.hexnode.com/blogs/deploy-esim-android-devices-hexnode/> — Windows: medium
  > Deploy eSIM on Android devices with Hexnode UEM to bring cellular provisioning into your management console. With the new Deploy eSIM and Remove eSIM remote actions, IT teams can provide cellular profiles to supported Android devices and remove them when requirements change.
  > From onboarding remote employees to preparing devices for reassignment, these actions give administrators a way to manage cellular profiles without handling physical SIM cards.
  > Two new actions for Android cellular management
  > Hexnode UEM now supports remote deployment and removal of Android eSIM profiles. Each action addresses a different part of the profile’s lifecycle.
  > Deploy eSIM – Provisions an eSIM profile remotely and supports activation on the device. Administrators can initiate the process from the console without having the device in hand.
  > Remove eSIM – Deletes profiles that Hexnode deployed to the device. Administrators can use it when an employee leaves, hardware changes hands, or the organization moves to a different carrier plan.
  > Together, these actions cover adding a cellular profile and removing it when it no longer serves the device’s intended use.
  > Keep cellular provisioning connected to device management
  > Physical SIM management can add logistical work to remote deployments and device refreshes. Hexnode’s eSIM actions move profile provisioning and removal into the console, giving administrators a remote way to handle those tasks.
  > The practical value extends beyond the first deployment. Cel…

## Miradore

### miradore-releases — no-change

Kind: link-list · Source: https://www.miradore.com/knowledge/releases/

No new or changed items.

## 42Gears

### 42gears-press — no-change

Kind: link-list · Source: https://www.42gears.com/press-releases

No new or changed items.

### 42gears-docs — no-change

Kind: sitemap · Source: https://docs.42gears.com/suremdm/sitemap.xml

No new or changed items.

## Jamf

### jamf-pro-release-notes — no-change

Kind: jamf-khub · Source: https://learn.jamf.com

No new or changed items.

## Scalefusion

### scalefusion-release-notes — ok

Kind: d360-index · Source: https://help.scalefusion.com/docs/latest-release-notes-year-{year}

#### New (1)

- **Scalefusion October 1st, 2026 Release Notes** — 2026-10-06 — <https://help.scalefusion.com/docs/scalefusion-october-1st-2026-release-notes> — Windows: high
  > Version Information
  > Scalefusion Dashboard: v68.1.0
  > Scalefusion Windows MDM Agent: v17.2.0
  > Scalefusion macOS MDM Agent: v6.5.12
  > Release Notes
  > Windows Enhancements
  > Plain Text Logging for Windows
  > IT Administrators can enable plain text logging for all Scalefusion apps by turning on the plain text logging option from Utilities.
  > a. When plain text logging is turned ON or OFF, logs collected on the device up to that point are rotated.
  > b. This utility is intended for advanced enterprises or enterprises where compliance requirements dictate the use of plain text logging.
  > Improved Compatibility with EDR/XDR and Antivirus Applications
  > Scalefusion has removed the usage of psexec and other unused third-party components that could cause EDR/XDR or antivirus applications to incorrectly classify Scalefusion.
  > EDR/XDR and antivirus applications may still incorrectly classify Scalefusion. Adding signature- or path-based exceptions for Scalefusion is recommended.
  > BitLocker Key Access
  > Users can now view the BitLocker key in the Scalefusion agent using Entra or Domain credentials when the device is Entra/Domain joined.
  > macOS Maintenance Updates
  > This maintenance release addresses issues across UEM/MDM, Veltar Secure Web Gateway, and OneIdP.
  > a. UEM/MDM: Fixed an issue where devices could become unresponsive for 30–45 minutes after installing the Scalefusion Agent, regardless of the Agent version.
  > b. Veltar Secure Web Gateway:
  > Fixed VPN internet connectivity issues when switching from Wi-Fi to mobi…

### scalefusion-product-updates — no-change

Kind: rss · Source: https://blog.scalefusion.com/category/product-updates/feed/

No new or changed items.

## Ivanti

### ivanti-quarterly-releases — no-change

Kind: html-blocks · Source: https://www.ivanti.com/releases

No new or changed items.

## JumpCloud

### jumpcloud-release-notes — no-change

Kind: html-sections · Source: https://jumpcloud.com/support/release-notes-{year}

No new or changed items.

## ManageEngine

### manageengine-endpoint-central — ok

Kind: csv · Source: https://www.manageengine.com/sites/meweb/images/ems/readme/largenl_readme.csv

#### New (5)

- **11.5.2627.56 · BugFixes · DC** — 2026-10-07 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Issue where software deployment package replication took longer than expected has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.56 · BugFixes · DC** — 2026-10-07 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Issue of Software Deployment package installation failing with required files missing during OS deployment has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.56 · BugFixes · DC** — 2026-10-07 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Manual computer name now takes priority over computer-specific settings during OS deployment.
  > Type: BugFixes; Products: DC

- **11.5.2627.56 · BugFixes · DC:MSP:RAP:SS** — 2026-10-07 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where Remote Control was not functioning as expected on macOS and Linux devices.
  > Type: BugFixes; Products: DC:MSP:RAP:SS

- **11.5.2627.56 · Enhancements · ALL** — 2026-10-07 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The agent executables across all modules have been signed with a new digital certificate to maintain trusted verification after the existing certificate expires.
  > Type: Enhancements; Products: ALL

