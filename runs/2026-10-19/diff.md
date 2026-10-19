# Competitor watch — fetch diff 2026-10-19

Period: 2026-10-12 → 2026-10-19. Sources marked *baseline* have no previous snapshot and list only items dated within the last 14 days (or the newest undated items). Full item text is in diff.json.

## Summary

| Source | Vendor | Status | New | Changed | Note |
|---|---|---|---|---|---|
| intune-whats-new | Microsoft Intune | ok | 1 | 0 | 6 items; 1 removed |
| intune-blog | Microsoft Intune | no-change | 0 | 0 | 20 items |
| iru-updates | Iru | ok | 8 | 0 | 50 items; 8 removed |
| hexnode-whats-new | Hexnode | no-change | 0 | 0 | 25 items |
| hexnode-blog | Hexnode | ok | 3 | 0 | 3 items; 4 removed |
| miradore-releases | Miradore | ok | 3 | 0 | 370 items |
| 42gears-press | 42Gears | no-change | 0 | 0 | 103 items |
| 42gears-docs | 42Gears | ok | 27 | 25 | 952 items; 9 removed |
| jamf-pro-release-notes | Jamf | ok | 9 | 0 | 9 items; v11.33.0; 3 removed |
| scalefusion-release-notes | Scalefusion | ok | 1 | 0 | 28 items |
| scalefusion-product-updates | Scalefusion | no-change | 0 | 0 | 10 items |
| ivanti-quarterly-releases | Ivanti | no-change | 0 | 0 | 67 items |
| jumpcloud-release-notes | JumpCloud | ok | 4 | 0 | 12 items; 4 removed |
| manageengine-endpoint-central | ManageEngine | ok | 6 | 0 | 399 items; 6 removed |

## Microsoft Intune

### intune-whats-new — ok

Kind: html-sections · Source: https://learn.microsoft.com/en-us/intune/whats-new/

#### New (1)

- **Week of October 12, 2026** — 2026-10-12 — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-12-2026> — Windows: medium
  > Advanced capabilities (formerly "Microsoft Intune Suite")
  > New Remote Help for Windows version available
  > Remote Help for Windows version 5.2.1210.0 is now available. This release includes stability and observability improvements.
  > Applies to:
  > Windows

### intune-blog — no-change

Kind: rss · Source: https://techcommunity.microsoft.com/t5/s/gxcuf89792/rss/board?board.id=MicrosoftIntuneBlog

No new or changed items.

## Iru

### iru-updates — ok

Kind: rss · Source: https://www.iru.com/updates/rss.xml

#### New (8)

- **Iru Agent for Windows Release 1.24.6.0** — 2026-10-16 — <https://www.iru.com/updates/2026/10/16/iru-agent-for-windows-release-1.24.6.0> — Windows: high
  > We've released Iru Agent for Windows 1.24.6.0. This release fixes apps missing from device inventory, stops apps reinstalling repeatedly when an installer leaves an older entry in Add/Remove Programs, and stops the Self Service updater creating a system restore point that some endpoint security tools flagged.

- **Iru AI assistant for BitLocker and Android Restrictions** — 2026-10-15 — <https://www.iru.com/updates/2026/10/15/iru-ai-assistant-for-bitlocker-and-android-restrictions> — Windows: high
  > Iru AI now builds Library Items for BitLocker on Windows and Android Restrictions from a plain-language description. Describe the disk encryption policy or device restrictions you need, and Iru AI sets up the Library Item for you.

- **Target OS version for Automated Device Enrollment** — 2026-10-15 — <https://www.iru.com/updates/2026/10/15/target-os-version-for-automated-device-enrollment> — Windows: none
  > Automated Device Enrollment now has an update to setting in addition to the minimum required OS version, so you can set a floor for enrollment and a separate version that devices update to. Devices below the minimum update to that version before they enroll, and devices already at or above the minimum enroll without updating. This works for macOS, iOS, and iPadOS, and existing configurations keep their current behavior.

- **Automatically rotate FileVault recovery keys after viewing** — 2026-10-15 — <https://www.iru.com/updates/2026/10/15/automatically-rotate-filevault-recovery-keys-after-viewing> — Windows: none
  > FileVault recovery keys can now rotate automatically after an administrator views the current key. Turn on Automatically rotate keys after viewing in the FileVault Library Item and set when the rotation happens. Key views continue to be recorded in the device activity timeline.

- **Platform SSO OpenID and web login settings for macOS 27** — 2026-10-15 — <https://www.iru.com/updates/2026/10/15/platform-sso-openid-and-web-login-settings-for-macos-27> — Windows: none
  > The Single Sign-On Library Item now supports OpenID sign-in on macOS 27 and later, so users can sign in through identity provider web sign-in pages, including multi-factor authentication, at the login window, Lock Screen, and FileVault unlock. New settings let you sync the web login password to the local account and set a web login URL allow list. These settings apply only to Macs running macOS 27 or later, and OpenID depends on the identity provider supporting it.

- **Upgrade your Android Enterprise integration to a managed Google domain** — 2026-10-15 — <https://www.iru.com/updates/2026/10/16/upgrade-your-android-enterprise-integration-to-a-managed-google-domain> — Windows: none
  > Admins can now upgrade an Android Enterprise integration from a managed Google Play account to their organization's managed Google domain, directly from the Iru web app and without re-enrolling any devices.

- **Recommended privacy permissions for Mac** — 2026-10-14 — <https://www.iru.com/updates/recommended-privacy-permissions-for-mac> — Windows: none
  > The Privacy Library Item's Recommended privacy permissions area now supports Mac, in addition to iPhone and iPad. Admins can recommend app permissions for macOS apps and website permissions for Safari, so end users see a single consent prompt listing everything an app or site needs instead of being prompted one permission at a time. The user can select Allow to grant every recommended permission at once, or Not Now, in which case the app continues to prompt for individual permissions as it normally would.
  > Supported Mac app permissions include Bluetooth, Camera, Dictation, Local Network, Location, and Microphone. Mac apps are identified by bundle ID and code requirement, and a recommendation applies only when the installed app's code signature matches. Website rules use the same specific and wildcard domains as iPhone and iPad. This requires Macs on macOS 27 or later.
  > For more details, see Configure the Privacy Library Item.

- **Iru Agent for Mac Release 5.2.7 (5400)** — 2026-10-13 — <https://www.iru.com/updates/iru-agent-for-mac-release-5.2.7-5400> — Windows: none
  > We’ve released Iru Agent for Mac 5.2.7 (5400).

## Hexnode

### hexnode-whats-new — no-change

Kind: next-data · Source: https://www.hexnode.com/whats-new/

No new or changed items.

### hexnode-blog — ok

Kind: rss · Source: https://www.hexnode.com/blogs/feed/

#### New (3)

- **Hexnode Work Essentials: Centralizing Email, Calendar, and Contacts on Managed Devices** — 2026-10-15 — <https://www.hexnode.com/blogs/hexnode-work-essentials/> — Windows: none
  > Why is managing work email, calendars, and contacts difficult across devices?
  > Manual account setup and inconsistent device configurations create recurring work for IT administrators. Each operating system, application, and service provider introduces requirements that administrators must address before employees can use their work accounts.
  > Consider a new employee who can receive email but cannot access team calendars or essential contacts. The mailbox works, yet the employee still needs separate support requests to complete their setup. Repeating this process across departments makes onboarding harder to standardize.
  > Effective email, calendar, and contact management requires a defined configuration for each device environment. IT teams need to distribute the appropriate settings centrally while accounting for corporate and personal ownership, enrollment methods, and the services employees already use.
  > What happens when work account configurations remain inconsistent?
  > Inconsistent configurations delay onboarding, increase troubleshooting, and leave employees with unpredictable access to business communications. Administrators must investigate individual devices instead of applying a repeatable configuration.
  > Account and sharing settings also affect where employees can use business information. An inappropriate configuration may permit account use or data sharing beyond organizational requirements. The exposure depends on the application, its permissions, and the controls adm…

- **App Catalogs vs. App Groups: Structuring App Distribution in Hexnode UEM** — 2026-10-15 — <https://www.hexnode.com/blogs/app-catalog-vs-app-group-hexnode-uem/> — Windows: medium
  > Why does app distribution become difficult as device fleets grow?
  > The app catalog vs app group distinction helps IT teams separate application discovery from application organization. As device fleets grow, overlapping requirements make it harder to decide which apps belong together, how employees receive them, and who needs them. A clear distribution structure lets administrators reuse application sets while distinguishing mandatory installations from optional tools.
  > App distribution becomes difficult when IT teams manage overlapping application requirements without separating app organization, deployment behavior, and target audiences. Administrators must determine which apps belong together, how installation should happen, and who needs them.
  > Consider an administrator selecting applications for new hires, adjusting software after department transfers, and handling optional installation requests. Across Windows, macOS, Android, and iOS, these tasks involve different application packages and installation requirements. Rebuilding similar selections for each request creates repetitive work and makes omissions easier.
  > The app catalog vs app group discussion starts with a practical question: how should IT organize reusable application sets while giving employees appropriate installation options? Answering it requires distinguishing the applications employees must have from those they can choose.
  > What happens when app distribution lacks a clear structure?
  > Poorly structured app d…

- **How to introduce AI agents into IT operations with human oversight?** — 2026-10-15 — <https://www.hexnode.com/blogs/ai-agents-it-operations-human-oversight/> — Windows: none
  > AI agents in IT operations can interpret requests, determine next steps, and execute authorized actions across endpoint, identity, and ticketing systems. However, a single incorrect action can affect multiple systems before an administrator intervenes.
  > Human-in-the-loop oversight involves human participation in an AI-driven workflow through activities such as supervision, feedback, intervention, or approval at appropriate decision points. To introduce AI agents safely, IT teams must define permissions, establish approval checkpoints, monitor execution, handle failures, and expand autonomy gradually.
  > What Are the Risks of AI Agents in IT Operations?
  > AI agents in IT operations introduce four key risks: excessive permissions, unapproved actions, incomplete audit trails, and unclear failure ownership. These gaps can leave administrators unable to contain changes, reconstruct events, or determine who must resolve a failed workflow.
  > Excessive permissions: An LLM-based agent receives administrator-level access when its task only requires reading device inventory. OWASP classifies excessive permissions, functionality, and autonomy as contributing causes of the Excessive Agency vulnerability.
  > Unapproved high-impact actions: An agent isolates a production endpoint without human approval, disrupting critical business operations.
  > Incomplete audit trails: An agent modifies security policies without recording the initiating request, approval decision, or execution outcome.
  > Unclear failure…

## Miradore

### miradore-releases — ok

Kind: link-list · Source: https://www.miradore.com/knowledge/releases/

#### New (3)

- **Known issue: OS update information and OS update installation on iOS, iPadOS, and macOS 27** — <https://www.miradore.com/knowledge/releases/known-issue-os-update-information-and-os-update-installation-on-ios-ipados-and-macos-27/> — Windows: medium
  > Apple removed the commands that Miradore used to find and install OS updates. Learn how this affects your Apple devices and what to do now.
  > In this article
  > Toggle
  > Description
  > Apple removed the older MDM commands that Miradore used to find and install OS updates. This change affects iOS 27, iPadOS 27, and macOS 27. Apple now manages OS updates with Declarative Device Management (DDM).
  > Because of this, you might see the following issues:
  > The list of available OS updates on the Device page is wrong or incomplete
  > Devices on version 27: A device upgraded from version 26 can still show updates from before the upgrade. For example, a Mac on macOS 27.0 can list macOS 26.7 and 27.0 as available. A device enrolled directly on version 27 lists no updates.
  > Devices on version 26 or earlier: Version 27 does not appear as an available update. The device can look up to date when a newer version exists.
  > Dashboards and reports show the same wrong data
  > The iOS and macOS System update status widgets, the OS update reports, and custom reports that use Apple OS update fields show incorrect data.
  > The Software update action does not work on iPhone and iPad devices that run iOS 27 or iPadOS 27
  > The Software update action has no effect and you also cannot use it to upgrade devices from version 26 to version 27. These devices now need a declaration to install OS updates. The upcoming Software update settings configuration profile includes that declaration. For more information on the configuration prof…

- **Changes in macOS support, Windows client update, application deployment action update, Android Enterprise enrollment settings bug fix** — <https://www.miradore.com/knowledge/releases/changes-in-macos-support-windows-client-update-application-deployment-action-update-android-enterprise-enrollment-settings-bug-fix/> — Windows: high
  > In this article
  > Toggle
  > Minimum supported macOS version raised to macOS 12
  > We have increased the minimum supported version for macOS devices from version 10.7 (OS X Lion) to 12 (Monterey) to keep Miradore up to date with the latest platform requirements and security standards. You can still manage your devices below macOS 12, but for optimal operation and security, we recommend you update your devices running older macOS versions. Devices running older versions than macOS 12 cannot be enrolled in Miradore.
  > As a result of this change, we have updated the Miradore client for macOS devices to version 1.6.8 (Build 147), which is distributed to devices running macOS 12 or later through the App Store. Future client updates will also be delivered only to devices running macOS 12 or later.
  > For detailed information on the change, see our announcement.
  > Windows client update
  > We updated the Miradore client for Windows devices to version 1.6.8 (Build 147). The new version does not introduce any new functionalities. The updated version is a result of our updating the underlying .NET framework to keep the client secure.
  > Application deployment action update
  > To improve user experience, we replaced the Deploy application wizard with a modern dialog. This applies everywhere the wizard was available: Home > Reports, Management > Devices, and individual device pages. Selecting Deploy > Deploy application at the top of the page now opens the dialog instead of the step-by-step wizard. The functiona…

- **End of support for devices running macOS versions below macOS 12 (Monterey)** — 2026-10-14 — <https://www.miradore.com/knowledge/releases/end-of-support-for-devices-running-macos-versions-below-macos-12-monterey/> — Windows: medium
  > As of 14 October, 2026, we no longer provide support for devices running OS versions below macOS 12.
  > The change does not affect currently enrolled devices and some functionalities remain operational on lower macOS versions. However, only devices running macOS 12 or later can be enrolled in Miradore.
  > In this article
  > Toggle
  > Why are we raising the official minimum supported macOS version?
  > To keep Miradore up to date with the latest platform requirements and security standards, we are raising our official support for macOS devices from version 10.7 (OS X Lion) to 12 (Monterey).
  > This change is the result of our updating the .NET framework, which affects the Miradore client and is needed to keep it secure. With the new .NET version, we can no longer support devices running OS versions below macOS 12.
  > For increased security and the best user experience, we always recommend using the latest operating system available.
  > Miradore client update (version 1.6.8)
  > As part of this change, we are releasing Miradore client version 1.6.8 (Build 147) for macOS devices. This is a maintenance release required for future platform compatibility — it does not introduce new features.
  > The update is delivered through the App Store and does not require any admin action. The timing depends on each device's settings:
  > If automatic app updates are enabled and the device is connected to a Wi-Fi network, the update typically installs within a few hours or overnight.
  > If automatic app updates are enabled and the…

## 42Gears

### 42gears-press — no-change

Kind: link-list · Source: https://www.42gears.com/press-releases

No new or changed items.

### 42gears-docs — ok

Kind: sitemap · Source: https://docs.42gears.com/suremdm/sitemap.xml

#### New (12 shown of 27)

- **profile windows** — 2026-10-15 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sureaccess/sureaccess-profile-configuration/profile-windows> — Windows: high
  > SureAccess Configuration Guide for macOS and Windows
  > 1. Overview
  > Use this guide to configure SureAccess in SureMDM for macOS and Windows devices. You can configure the VPN connection, control website access, block specific URLs, and manage data uploads through Domain-Based and Application-Based DLP policies.
  > 2. Configuration Flow
  > 3. Configure the SureAccess Payload
  > Step 1: Open the Profile Configuration
  > Sign in to the SureMDM console.
  > Navigate to Profiles.
  > Select the platform for which you want to configure SureAccess: macOS or Windows.
  > Select the Enrollment Type if macOS is selected
  > Locate the SureAccess payload and click Configure.
  > Important for Windows: A profile containing a VPN Configuration payload cannot also be configured with the SureAccess payload. Remove the conflicting payload before proceeding, if required.
  > Step 2: Configure VPN Settings
  > In the SureAccess payload, open the VPN section and configure the available settings according to your organization's requirements.
  > SettingAdministrator Action
  > Enable SureAccess
  > When enabled, deploys the SureAccess agent and applies secure remote access settings. When disabled, removes the configuration.
  > Connection Name
  > Enter the name to identify the connection.
  > Always On
  > Keeps the SureAccess connection active at all times.
  > Tunnelled CIDR List
  > Select the IP ranges (CIDR blocks) that should be accessed through SureAccess. DNS Resolutions are skipped for this IP range and are accessible over IP addresses only.
  > Tunnelled FQDN List…

- **overview** — 2026-10-14 — <https://docs.42gears.com/suremdm/ios-device/ios-device-manage/ios-ipados-update/advanced-software-updates/overview> — Windows: medium
  > Overview
  > The Overview section provides a snapshot of critical metrics for effective update management. It consists of three main components:
  > Dashboard
  > A centralized display presenting key update management data and insights:
  > Updates Status:
  > This bar chart provides a comprehensive view of the overall update status across all devices, helping to quickly identify the gap between Eligible, Installed, Pending, and Failed updates. The chart uses different colors for each bar: Green for Eligible Updates, Dark Green for Installed Updates, Yellow for Pending Updates, and Dark Red for Failed Updates. It visually represents the following:
  > Eligible Updates: This represents the overall eligible update count. Hovering over this bar displays the count of eligible updates.
  > Installed Updates: Represents the overall installed update count. Hovering over this bar displays the count of installed updates.
  > Pending Updates: Represents the count of (Deployed + Pending Updates) that are not installed. Hovering over this bar displays the count of pending updates.
  > Failed Updates: Represents the count of updates which did not succeed on devices. Hovering over this bar displays the count of failed updates.
  > Updates Distribution: This nested donut chart displays the distribution of OS updates.
  > Updates Pending: This line chart illustrates the trend of updates pending installation on devices over the past 30 days, highlighting patterns and daily milestones. The X-axis represents the time split over the last…

- **add new ring** — 2026-10-16 — <https://docs.42gears.com/suremdm/ios-device/ios-device-manage/ios-ipados-update/automated-software-updates/add-new-ring> — Windows: none
  > Administrators can create custom deployment rings to control how and when iOS updates are rolled out across devices. In addition to the four system-defined default rings, administrators can create up to 15 custom rings, resulting in a maximum of 19 rings (default + custom).
  > Accessing the Add New Ring Flow
  > Navigate to SureMDM Console > OS Updates > iOS/iPadOS > Automated Software Updates > Configuration.
  > Click Add New Ring.
  > The Add New Ring configuration screen opens.
  > Add New Ring – Configuration Sections
  > The Add New Ring screen is organized into multiple sections. Each section must be reviewed and configured before saving the ring.
  > 1. Ring Details
  > This section defines the identity and purpose of the ring.
  > FieldDescription
  > Ring Name
  > Enter a unique name for the ring. This name is used across the Configuration table, Overview charts, and reports.
  > Description
  > Optional. Provide a brief description explaining the intent or target audience of the ring (for example, pilot users or specific departments).
  > 2. Configuration Details
  > Update Settings
  > This section determines which iOS updates are eligible for deployment through the ring.
  > OptionDescription
  > Automatic Software Update Action Management
  > Automatic Download of Available Updates
  > Allows administrators to enable or disable automatic downloading of available updates on the device. Select from the following options:
  > Allowed (Default)
  > Always On
  > Always Off
  > Automatic Installation of OS Updates
  > Allows administrators to enable or disable au…

- **configuration** — 2026-10-15 — <https://docs.42gears.com/suremdm/ios-device/ios-device-manage/ios-ipados-update/automated-software-updates/configuration> — Windows: none
  > The Configuration tab is used to define, manage, and control update rings for Automated Software Updates. Rings determine what, when and how updates are deployed to devices, enabling staged and risk-controlled rollouts across the organization.
  > Deployment Rings Overview
  > When Automated Software Updates is enabled for the first time, SureMDM automatically creates four default rings:
  > Canary Ring
  > Early Adopters Ring
  > Broad Rollout Ring
  > General Availability Ring
  > In addition to these, administrators can create up to 15 custom rings, allowing a maximum of 19 rings (default + custom) per tenant.
  > The Configuration tab provides a centralized table view of all rings along with controls to manage their lifecycle.
  > Rings Table
  > The rings table lists all default and custom rings configured in the system.
  > Table Columns
  > Column NameDescription
  > Ring Name
  > Displays the name of the deployment ring. Default rings are clearly marked as Default.
  > Assigned Devices
  > Shows the total number of devices currently assigned to the ring.
  > Deferral Period (days)
  > Indicates the deferral duration configured for the ring, displayed separately for Major and Minor updates.
  > Last Modified
  > Displays the date and time when the ring configuration was last updated.
  > Ring Details
  > Provides a View Details link to open the detailed ring information view.
  > Ring Table - Action and Controls
  > The following controls are available for each ring based on its type and current state:
  > Add New Ring - Creates a new custom deployment ring. Adminis…

- **overview** — 2026-10-15 — <https://docs.42gears.com/suremdm/ios-device/ios-device-manage/ios-ipados-update/automated-software-updates/overview> — Windows: none
  > The Overview section provides an interactive, visual summary of update rollout status across deployment rings. It uses ring-based pie charts to help administrators quickly assess update adoption and device coverage. By default, up to five charts can be displayed at a time. Administrators can use the chart filter to select or deselect rings as needed. If custom rings are configured, one of the existing charts must be deselected to display the custom ring chart.
  > Default Ring Charts
  > The following charts are available by default:
  > Canary Ring: Displays devices that receive updates immediately on release day with no deferral. This ring is typically used for early validation and testing.
  > Early Adopters Ring: Displays devices that receive updates after a 3-day deferral period, allowing limited rollout after initial validation.
  > Broad Rollout Ring: Displays devices that receive updates after a 7-day deferral period, enabling wider deployment once updates are deemed stable.
  > General Availability Ring: Displays devices that receive updates after a 14-day deferral period, representing full-scale deployment across the organization.
  > Devices With No Ring Assigned: Displays all devices that are not currently assigned to any update ring, or whose ring assignment is pending or has failed. Unlike other charts, this chart reflects ring assignment status rather than update installation status.
  > Chart Status and Update Lifecycle
  > All default and custom ring charts display device update status using t…

- **overview** — 2026-10-14 — <https://docs.42gears.com/suremdm/mac-os-device/mac-os-manage/macos-update/advanced-software-updates/overview> — Windows: medium
  > Overview
  > The Overview section provides a snapshot of critical metrics for effective update management. It consists of three main components:
  > Dashboard
  > A centralized display presenting key update management data and insights:
  > Updates Status:
  > This bar chart provides a comprehensive view of the overall update status across all devices, helping to quickly identify the gap between Eligible, Installed, Pending, and Failed updates. The chart uses different colors for each bar: Green for Eligible Updates, Dark Green for Installed Updates, Yellow for Pending Updates, and Dark Red for Failed Updates. It visually represents the following:
  > Eligible Updates: This represents the overall eligible update count. Hovering over this bar displays the count of eligible updates.
  > Installed Updates: Represents the overall installed update count. Hovering over this bar displays the count of installed updates.
  > Pending Updates: Represents the count of (Deployed + Pending Updates) that are not installed. Hovering over this bar displays the count of pending updates.
  > Failed Updates: Represents the count of updates which did not succeed on devices. Hovering over this bar displays the count of failed updates.
  > Updates Distribution: This nested donut chart displays the distribution of OS updates.
  > Updates Pending: This line chart illustrates the trend of updates pending installation on devices over the past 30 days, highlighting patterns and daily milestones. The X-axis represents the time split over the last…

- **add new ring** — 2026-10-16 — <https://docs.42gears.com/suremdm/mac-os-device/mac-os-manage/macos-update/automated-software-updates/add-new-ring> — Windows: none
  > Administrators can create custom deployment rings to control how and when macOS updates are rolled out across devices. In addition to the four system-defined default rings, administrators can create up to 15 custom rings, resulting in a maximum of 19 rings (default + custom).
  > Accessing the Add New Ring Flow
  > Navigate to SureMDM Console > OS Updates > macOS > Automated Software Updates > Configuration.
  > Click Add New Ring.
  > The Add New Ring configuration screen opens.
  > Add New Ring – Configuration Sections
  > The Add New Ring screen is organized into multiple sections. Each section must be reviewed and configured before saving the ring.
  > 1. Ring Details
  > This section defines the identity and purpose of the ring.
  > FieldDescription
  > Ring Name
  > Enter a unique name for the ring. This name is used across the Configuration table, Overview charts, and reports.
  > Description
  > Optional. Provide a brief description explaining the intent or target audience of the ring (for example, pilot users or specific departments).
  > 2. Configuration Details
  > Update Settings
  > This section determines which macOS updates are eligible for deployment through the ring.
  > OptionDescription
  > Automatic Software Update Action Management
  > Automatic Download of Available Updates
  > Allows administrators to enable or disable automatic downloading of available updates on the device. Select from the following options:
  > Allowed
  > Always On
  > Always Off
  > Automatic Installation of OS Updates
  > Allows administrators to enable or disable automatic ins…

- **configuration** — 2026-10-15 — <https://docs.42gears.com/suremdm/mac-os-device/mac-os-manage/macos-update/automated-software-updates/configuration> — Windows: none
  > The Configuration tab is used to define, manage, and control update rings for Automated Software Updates. Rings determine what, when and how updates are deployed to devices, enabling staged and risk-controlled rollouts across the organization.
  > Deployment Rings Overview
  > When Automated Software Updates is enabled for the first time, SureMDM automatically creates four default rings:
  > Canary Ring
  > Early Adopters Ring
  > Broad Rollout Ring
  > General Availability Ring
  > In addition to these, administrators can create up to 15 custom rings, allowing a maximum of 19 rings (default + custom) per tenant.
  > The Configuration tab provides a centralized table view of all rings along with controls to manage their lifecycle.
  > Rings Table
  > The rings table lists all default and custom rings configured in the system.
  > Table Columns
  > Column NameDescription
  > Ring Name
  > Displays the name of the deployment ring. Default rings are clearly marked as Default.
  > Assigned Devices
  > Shows the total number of devices currently assigned to the ring.
  > Deferral Period (days)
  > Indicates the deferral duration configured for the ring, displayed separately for Major and Minor updates.
  > Last Modified
  > Displays the date and time when the ring configuration was last updated.
  > Ring Details
  > Provides a View Details link to open the detailed ring information view.
  > Ring Table - Action and Controls
  > The following controls are available for each ring based on its type and current state:
  > Add New Ring - Creates a new custom deployment ring. Adminis…

- **overview** — 2026-10-14 — <https://docs.42gears.com/suremdm/mac-os-device/mac-os-manage/macos-update/automated-software-updates/overview> — Windows: none
  > The Overview section provides an interactive, visual summary of update rollout status across deployment rings. It uses ring-based pie charts to help administrators quickly assess update adoption and device coverage. By default, up to five charts can be displayed at a time. Administrators can use the chart filter to select or deselect rings as needed. If custom rings are configured, one of the existing charts must be deselected to display the custom ring chart.
  > Default Ring Charts
  > The following charts are available by default:
  > Canary Ring: Displays devices that receive updates immediately on release day with no deferral. This ring is typically used for early validation and testing.
  > Early Adopters Ring: Displays devices that receive updates after a 3-day deferral period, allowing limited rollout after initial validation.
  > Broad Rollout Ring: Displays devices that receive updates after a 7-day deferral period, enabling wider deployment once updates are deemed stable.
  > General Availability Ring: Displays devices that receive updates after a 14-day deferral period, representing full-scale deployment across the organization.
  > Devices With No Ring Assigned: Displays all devices that are not currently assigned to any update ring, or whose ring assignment is pending or has failed. Unlike other charts, this chart reflects ring assignment status rather than update installation status.
  > Chart Status and Update Lifecycle
  > All default and custom ring charts display device update status using t…

- **overview** — 2026-10-16 — <https://docs.42gears.com/suremdm/mac-os-device/mac-os-manage/platform-sso-microsoft-entra/overview> — Windows: none
  > Platform SSO is a macOS capability that integrates local Mac sign-in with Microsoft Entra ID and enables single sign-on to supported organizational applications and websites. Depending on the selected authentication method, it can use a Secure Enclave-backed key, a smart card, or the user's Microsoft Entra password.
  > SureMDM provides two configuration areas for setting up this integration:
  > Extensible SSO Configuration: Configures the Microsoft Enterprise SSO plug-in, including its extension identifier, Team Identifier, authentication type, and associated URLs.
  > Platform SSO Configuration: Enables Platform SSO and defines the authentication method and user registration behavior.
  > Both configurations are important to the overall setup. The Extensible SSO configuration uses Microsoft's Company Portal SSO extension, while the Platform SSO configuration controls how users register and authenticate with Microsoft Entra ID.

- **post enrollment** — 2026-10-16 — <https://docs.42gears.com/suremdm/mac-os-device/mac-os-manage/platform-sso-microsoft-entra/post-enrollment> — Windows: medium
  > Post-enrollment registration allows administrators to configure Microsoft Entra Platform Single Sign-On (Platform SSO) on macOS devices that are already enrolled and managed through SureMDM. This approach enables organizations to extend Platform SSO capabilities to existing devices without requiring them to be re-enrolled.
  > Administrators can configure the required Extensible SSO and Platform SSO settings in a macOS profile and deploy it to the enrolled devices through the SureMDM console. Once the profile is installed, users can complete the Microsoft Entra registration process directly on their Macs.
  > Prerequisites
  > Before configuring Platform SSO in SureMDM, ensure that the following requirements are met.
  > Supported macOS version: macOS 14 Sonoma or later is recommended for Platform SSO.
  > Microsoft Company Portal: Install a compatible version of the Microsoft Company Portal app. Microsoft specifies version 5.2404.0 or later for Platform SSO.
  > Microsoft Entra ID permissions: Users must have the necessary permissions to register or join devices to Microsoft Entra ID.
  > Microsoft Authenticator: Ensure it is available and configured as required by your organization's authentication and multifactor authentication policies.
  > Network access: Ensure that the device can reach the required Microsoft Entra authentication endpoints.
  > Refer to the Microsoft Platform SSO prerequisites for the latest requirements.
  > Steps to Configure Extensible SSO in SureMDM
  > Navigate to Profiles → macOS → Select…

- **sureaccess profile** — 2026-10-15 — <https://docs.42gears.com/suremdm/windows-jobs-and-profiles/profiles-for-windows/sureaccess-profile> — Windows: none

#### Changed (7 shown of 25)

- **link abm** — lastmod 2026-06-22 → 2026-10-14 — <https://docs.42gears.com/suremdm/ios-device/ios-device-manage/enroll-ios-devices/enrollment-methods-types/apple-business-manager/link-abm> — Windows: none
  Added:
  + Link ABM with SureMDM
  + In order to perform MDM functions on enrolled iPads, iPhones and Mac OS, the ABM account has to be linked with SureMDM. For linking, a certificate is required which ensures a secure and trusted relationship between ABM and SureMDM. The following are the steps to get successful ABM linking:
  + ADE Profile and Server Creation
  + 1. Navigate to SureMDM Settings > Account Settings > Apple Platform Management > ADE > ADE Profiles > Add.
  + 2. Click Add. The ADE Profile creation popup screen appears.
  + Profile creation is categorized into three steps
  + Profile Details
  + Setup Assistant Configurations
  + Other Configurations
  + 2.1 Profile Details
  + In the Profile Details section, configure the below options and click Next
  + SettingsDescription
  + Profile Name
  + Enter the name of the ADE profile
  + Platform
  + Select the platform as iOS/iPadOS
  + Supervision
  + Enable this option to enforce supervision during ADE enrollment. For iOS 13.0 and later, devices are supervised by default, so disabling this option will have no effect.
  + MDM Profile Removable
  + Disable to ensure that end users cannot remove the MDM profile installed on the device. Users can always remove the MDM profile for up to 30 days on devices enrolled in ABM, via Apple Configurator setting, regardless of this setting.
  + MDM Profile Mandatory
  + Enable this option to enforce user to apply MDM profile. On iOS 13.0 and above, devices enforce enrollment by default, so disabling this option will have no effect.
  + Wait for Configuration to Complete
  + If enabled, keeps the device in Setup Assistant mode until all resources are deployed from the SureMDM server.
  + Enable Shared iPad
  + If enabled, shared iPad configurations are available to manage.
  + Shared iPad Property
  + Select the required Shared iPad Property to configure.
  + - Number of Users: Enter the maximum number of users’ data that can be stored in a Shared iPad.
  + - Storage (in Megabytes): Enter the storage space, in megabytes, to be allocated for each user in a Shared iPad.
  + Minimum OS version
  + Configure the minimum OS version which should be enforced during the ADE Enrollment.
  + - Not Configured: No Enforcement will be made during enrollment.
  + - Latest Major Version: Devices will be updated to the latest available major OS version. If the latest major OS version is not compatible with the device, enforcement will be skipped.
  + - Latest Minimum Version: Devices will be updated to the latest available minimum OS version. If the latest minimum OS version is not compatible with the device, enforcement will be skipped.
  + - Latest Version based on device eligibility: Device will be updated to the latest OS version released for the desired devices.
  + Select Group
  + Select the desired group in which the device should get enrolled.
  + 2.2 Setup Assistant Configurations
  + In the Setup Assistant Configurations section, select the necessary setup assistant keys and click Next
  + … 15 more added lines

- **link abm** — lastmod 2026-08-19 → 2026-10-14 — <https://docs.42gears.com/suremdm/mac-os-device/mac-os-manage/mac-os-enrollment/apple-business-manager-macos/link-abm> — Windows: none
  Added:
  + Link ABM with SureMDM
  + In order to perform MDM functions on enrolled iPads, iPhones and Mac OS, the ABM account has to be linked with SureMDM. For linking, a certificate is required which ensures a secure and trusted relationship between ABM and SureMDM. The following are the steps to get successful ABM linking:
  + ADE Profile and Server Creation
  + 1. Navigate to SureMDM Settings > Account Settings > Apple Platform Management > ADE > ADE Profiles > Add.
  + Click Add. The ADE Profile creation popup screen appears.
  + Profile creation is categorized into three steps:
  + Enrollment Setup
  + Setup Assistant Configurations
  + Post Enrollment Configurations
  + 2.1 Enrollment Setup
  + In the Profile Details section, configure the below options and click Next
  + SettingsDescription
  + Profile Name
  + Enter the name of the ADE profile
  + Platform
  + Select the platform as macOS
  + Supervision
  + Enable this option to enforce supervision during ADE enrollment. For macOS 10.15 and later, devices are supervised by default, so disabling this option will have no effect.
  + MDM Profile Removable
  + Disable to ensure that end users cannot remove the MDM profile installed on the device. Users can always remove the MDM profile for up to 30 days on devices enrolled in ABM, via Apple Configurator setting, regardless of this setting.
  + MDM Profile Mandatory
  + Enable this option to enforce user to apply MDM profile.
  + Wait for Configuration to Complete
  + If enabled, keeps the device in Setup Assistant mode until all resources are deployed from the SureMDM server.
  + Enable Platform SSO prior to enrollment
  + Select a macOS profile to configure Platform SSO. Only profiles with the Microsoft Entra configuration will be available for selection.
  + Select Profile
  + Select a macOS profile that contains an Extensible SSO payload with Platform SSO Configuration enabled and Enable Registration During Setup enabled. Only profiles meeting these requirements will be available for selection and applied during device setup for Platform Single Sign-On registration. [Applicable only if Enable Platform SSO During Setup is enabled]
  + Force enable FileVault
  + If enabled, FileVault will be enabled on the device.
  + Show Personal Recovery Key
  + If enabled, personal key would be displayed.
  + Minimum OS version
  + Configure the minimum OS version which should be enforced during the ADE Enrollment.
  + - Not Configured: No Enforcement will be made during enrollment.
  + - Latest Major Version: Devices will be updated to the latest available major OS version. If the latest major OS version is not compatible with the device, enforcement will be skipped.
  + - Latest Minimum Version: Devices will be updated to the latest available minimum OS version. If the latest minimum OS version is not compatible with the device, enforcement will be skipped.
  + - Latest Version based on device eligibility: Device will be updated to the latest OS version released for the desired devices
  + Select Group
  + Select the desired group in which the device should get enrolled.
  + … 15 more added lines

- **create app** — lastmod 2026-07-24 → 2026-10-01 — <https://docs.42gears.com/suremdm/windows-application-management/windows-application-manage/windows-appstore/create-app> — Windows: high
  Added:
  + Create an Enterprise App Store (Windows)
  + To create an enterprise App Store, follow these steps:
  + Navigate to SureMDM Web Console > App Store > Windows > Add New App.
  + In the Select Options prompt, select the desired option from the following to add the application:
  + SettingsDescription
  + Add Application (LOB Apps)
  + Add Line-of-Business (LOB) applications by uploading a file or providing a hosted URL.
  + Third Party Apps
  + Add wide-range of Third-party applications from a repository.
  + Web Apps
  + Add Web Apps (shortcuts/bookmarks) that reference web resources and display as icons on devices.
  + MSI Apps for EMM
  + Add MSI installer links designed specifically for agentless Windows EMM deployments.
  + Add Application (LOB Applications)
  + Use this option to upload custom Windows installers directly or link to an externally hosted file
  + Select Add Application
  + Choose one of the following package source options:
  + Upload File: Upload the application package by dragging and dropping the file into the designated area or by selecting Browse File. Only .msi and .exe application packages are supported.
  + URL: Add an application hosted on a remote server.
  + If URL is selected, provide the following information and click Add:
  + FieldDescription
  + Name
  + Enter the name of the application.
  + Version
  + Enter the version of the application.
  + URL
  + Enter the URL of the application where it is hosted. The URL must be accessible on enrolled devices.
  + App Icon URL
  + Enter the Application Icon URL to be displayed in the App Store.
  + Category
  + Provide the App Category for the Application.
  + Description
  + Enter the description for the application.
  + Finally added application will be seen in the Add Application section in App Store.
  + Select Third Party Apps to open the curated SureMDM repository.
  + Switch between the Featured Apps and All Apps tabs:
  + Featured Apps: Browse a curated list of over 150 widely used applications that can be added with a few clicks.
  + All Apps: Search the complete application catalog by application name or publisher to find and add any supported app.
  + Click View Details to review app information.
  + Select the target application and click Add.
  + … 23 more added lines

- **advanced patching** — lastmod 2026-08-10 → 2026-10-15 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/os-update/advanced-patching/advanced-patching> — Windows: none
  (changed; no line-level detail — page text not fetched)

- **windows provisioning** — lastmod 2026-08-04 → 2026-10-05 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/windows-device-enrollment/provisioning-package/windows-provisioning> — Windows: high
  (changed; no line-level detail — page text not fetched)

- **location tracking** — lastmod 2025-09-28 → 2026-09-28 — <https://docs.42gears.com/suremdm/windows-jobs-and-profiles/jobs-for-windows/windows-static-jobs/location-tracking> — Windows: none
  (changed; no line-level detail — page text not fetched)

- **vpn profile** — lastmod 2026-09-11 → 2026-10-15 — <https://docs.42gears.com/suremdm/windows-jobs-and-profiles/profiles-for-windows/vpn-profile> — Windows: none
  Removed:
  - VPN Configuration Profile
  - The VPN profile enables administrators to effectively set up enrolled devices, allowing them to establish a secure connection to a wireless network using a VPN. By configuring a VPN profile, administ…
  - To configure VPN settings, follow these steps:
  - Navigate to SureMDM Web Console > Profiles > Windows > Add > VPN > Configure.
  - Enter a Profile Name.
  - Configure the following VPN settings and click Save:
  - SettingsDescription
  - Connection Type
  - Choose the network connection method from the drop-down menu:
  - - SureAccess
  - … 61 more removed lines

## Jamf

### jamf-pro-release-notes — ok

Kind: jamf-khub · Source: https://learn.jamf.com

#### New (9)

- **New Features and Enhancements > Per-Device Declaration Status — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Per-Device_Declaration_Status> — Windows: none
  > For compatible Jamf Cloud environments, you can now view the status of every declaration deployed to a device from the Declarations pane in a device's Inventory tab. Use the status to verify and troubleshoot blueprint deployments from a single device record.
  > For each declaration, you can view the component it maps to, the declaration type, the delivery channel, the source, and the status. When a status displays a View link, select it to open the Reason details window and view the reason for the unsuccessful status.
  > The Declarations pane displays status only. You cannot deploy or edit blueprints from this view. To create or edit a blueprint, click Blueprints in the sidebar.
  > Note:
  > This feature is also available in Jamf Pro 11.32.0.

- **New Features and Enhancements > Other Changes and Improvements — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Other_Changes_and_Improvements> — Windows: none
  > To prepare for Jamf App Catalog app deployments in blueprints, Jamf Pro now automatically delivers a Privacy Preferences Policy Control configuration profile granting Full Disk Access to Self Service+ and its bundled binaries during enrollment. The profile is scoped to the Self Service+ bundle ID (com.jamf.selfserviceplus), consistent with the existing App Installers Privacy Preferences Policy Control profile.
  > A new Declarative Device Management Migration Guide is available to help administrators determine when and how to migrate certain workflows to blueprints.

- **New Features and Enhancements > Jamf Platform Services and Capabilities Resources — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Jamf_Platform_Services_and_Capabilities_Resources> — Windows: none
  > The following additional resources may be relevant based on your environment:
  > AI Governance Release Notes
  > Blueprints Release Notes
  > Compliance Benchmarks Release Notes
  > Getting Started with Jamf's Platform API Gateway
  > Jamf Account Release History
  > Self Service+ for macOS Release Notes
  > Self Service+ for Mobile Release Notes
  > Subscribe to Release Notes and Release History pages
  > By subscribing to the above, you will be notified when a new version of these Jamf platform services and capabilities is available.

- **New Features and Enhancements > Further Considerations — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Further_Considerations> — Windows: none
  > See the latest Jamf Pro Release Notes Video for a brief overview of new features and enhancements.
  > Known issues for Jamf Pro can be accessed from the Jamf Account portal.
  > For non-administrator Jamf Pro user accounts, privileges associated with new features in Jamf Pro are disabled by default. If you have Custom privilege configurations for user accounts or groups in your environment, a Jamf Pro user account with Administrator privileges must manually enable new feature privileges for each user or group with Custom privileges.
  > Jamf recommends clearing your browser's cache after upgrading Jamf Pro to ensure that the Jamf Pro interface displays correctly.
  > See the Jamf Pro API Changelog for a list of new, deprecated, and removed endpoints.

- **Important Notices > OS 27 Software Update Deprecations and Affected Jamf Pro Features — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/OS_27_Software_Update_Deprecations_for_Jamf_Pro> — Windows: none
  > At WWDC 2025, Apple deprecated MDM software update commands as part of the shift to declarative device management for OS update management. Because these legacy mechanisms are deprecated at the protocol level, every functionality that leverages them is also deprecated, regardless of the source product or vendor. The following table describes the status of each mechanism alongside its related Jamf Pro feature.
  > Apple MechanismRelated Jamf Pro FeatureOS 26 statusOS 27 status
  > macOS
  > ScheduleOSUpdate
  > Download/Download and Install Updates computer remote commands and all managed software updates commands (except for Download and schedule to install)
  > Deprecated
  > Removed
  > com.apple.SoftwareUpdate
  > Software Update payload for computer configuration profiles
  > Deprecated
  > Removed
  > forceDelayedSoftwareUpdates, enforcedSoftwareUpdateDelay
  > Software update settings in the Restrictions payloads of computer configuration profiles
  > Deprecated
  > Removed
  > softwareupdate.enforcement.specific
  > Download and schedule to install command in managed software updates
  > Supported
  > Supported
  > softwareupdate.enforcement.specific
  > Software Updates blueprint component
  > Supported
  > Supported
  > softwareupdate.settings
  > Software Update Settings blueprint component
  > Supported
  > Supported
  > softwareupdate binary
  > Software Updates payload (policies)
  > Supported
  > Supported
  > iOS / iPadOS / tvOS
  > ScheduleOSUpdate
  > Download/Download and Install Updates mobile device remote commands and all managed software updates commands (except for Download and sch…

- **Important Notices > Changes to Microsoft's Baseline Scope Enforcement for Device Compliance with Jamf Pro — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Changes_to_Microsofts_Baseline_Scope_Enforcement_for_Device_Compliance_with_Jamf_Pro> — Windows: none
  > If your organization uses the Jamf device compliance integration, it may have recently been impacted by the change to baseline scope enforcement, described in the following Microsoft documentation:
  > Improved enforcement for All resources policies with resource exclusions
  > Jamf has recently updated the macOS device compliance registration flow to allow organizations to exclude it from Conditional Access policies. For instructions on configuring your environment to do this, see the Configuring Jamf Pro Device Compliance for Microsoft's Baseline Scope Enforcement article. After completing these steps, if you previously made temporary changes as described in the Device Compliance Registration Blocked by Conditional Access Policies article, you can safely revert those changes.

- **Important Notices > Notice History by Release — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Notice_History_by_Release> — Windows: none
  > Starting with version...Change or ConsiderationDescription
  > 11.31.0
  > Upcoming New Privileges for Mass Actions
  > In an upcoming release, new privileges for mass actions will be added to Jamf Pro. Previously, performing a mass action only required the corresponding privilege for a single device. This change will limit high-impact actions to the administrators and API clients that require them. These privileges will not be added to any existing account automatically, and they will not be included in the "Administrator" privilege set. If your organization needs an account or API client to perform these actions, you will need to create or update a custom privilege set and explicitly grant the privileges.
  > To prepare for this change, Jamf recommends you review any accounts and API clients that currently perform mass lock, wipe, unmanage, or delete actions on computers or mobile devices, and plan to grant the new privileges through a custom privilege set once the release is available.
  > 11.31.0
  > Self Service+ for Mobile Release
  > Self Service+ for mobile was released 20 July 2026 on the App Store for Apple devices. Devices with iOS or iPadOS 16.x or earlier will remain on Self Service 11.4.2.
  > Self Service+ for mobile expands on the Self Service experience when you create and deploy an activation profile using Jamf Security Cloud, enabling network security monitoring, threat alerts, and centralized notifications in addition to the Self Service capabilities that Jamf Pro enables.
  > For more info…

- **Deprecations and Removals — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Deprecations_and_Removals> — Windows: none
  > Deprecations Added in This Release
  > DeprecationNotes
  > AFP for File Share Distribution Points
  > Apple has removed support for the Apple Filing Protocol (AFP) starting in macOS 27. Computers with macOS 27 or later will fail to mount file share distribution points using AFP. Jamf recommends that you transition existing distribution points to use SMB or enable HTTPS.
  > Deprecations Added in a Previous Release
  > DeprecationNotes
  > Non-OIDC-based administrator authentication methods for cloud-hosted Jamf Pro instances
  > In a future release of Jamf Pro (estimated target: the second half of 2027), support for the following legacy administrator authentication methods will be removed:
  > Local Jamf Pro accounts
  > SAML-based authentication (including failover login URLs)
  > LDAP and directory service-based authentication
  > After the removal, Jamf Pro will require an OIDC-based authentication method to log in, such as Jamf ID or federation through an OIDC-compliant identity provider.
  > Migrating to platform authentication improves the security of your Jamf Pro environment while enabling additional platform functionality. It also ensures readiness for Apple's upcoming removal of legacy MDM software update commands by enabling the declarative device management capabilities in blueprints.
  > Jamf recommends migrating to a supported authentication method as soon as possible. For more information or assistance with migrating, contact your Account team.
  > Note:
  > This deprecation specifically applies to administrator login…

- **Resolved Issues — Jamf Pro 11.33.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Resolved_Issues> — Windows: none
  > Note:
  > Some resolved issues in this release may have been addressed in a previous maintenance release.
  > Jamf Pro Server: Security Issues
  > Jamf provides the CVE-ID for security issues with high or critical severity when possible.
  > [PI201341] Fixed: A denial-of-service issue.
  > [PI205277] Fixed: A known vulnerability in a third-party library (CVE-2026-59888).
  > [PI205872] Fixed: A known vulnerability in a third-party library (CVE-2026-56822, CVE-2026-55831, CVE-2026-59901).
  > [PI205880] Fixed: A known vulnerability in a third-party library (CVE-2026-10050).
  > [PI212062] Fixed: A known vulnerability in a third-party library (CVE-2026-69153).
  > [PI217394] Fixed: A known vulnerability in a third-party library (CVE-2026-54428).
  > [PI217449] Fixed: A known vulnerability in a third-party library (CVE-2026-67213).
  > [PI217488] Fixed: A known vulnerability in a third-party library (CVE-2026-73646).
  > [PI220987] Fixed: A known vulnerability in a third-party library (CVE-2026-69151).
  > [PI220994] Fixed: A known vulnerability in a third-party library (CVE-2026-68945).
  > [PI222752] Fixed: A known vulnerability in a third-party library (CVE-2026-55858).
  > [PI223203] Fixed: A known vulnerability in a third-party library (CVE-2026-73089).
  > [PI-1654] [PI223696] Fixed: A known vulnerability in a third-party library (CVE-2026-41003).
  > [PI228084] Fixed: An input validation issue in the Jamf Pro API.
  > [PI229326] Fixed: A known vulnerability in a third-party library (CVE-2026-8763).
  > [PI230592] Fixed: A privilege escalation is…

## Scalefusion

### scalefusion-release-notes — ok

Kind: d360-index · Source: https://help.scalefusion.com/docs/latest-release-notes-year-{year}

#### New (1)

- **Scalefusion October 9th, 2026 Release Notes** — 2026-10-12 — <https://help.scalefusion.com/docs/scalefusion-october-9th-2026-release-notes> — Windows: medium
  > Version Information
  > Scalefusion Dashboard: v68.3.0
  > Release Notes
  > 1. Remote Cast and Control for Linux Devices
  > Scalefusion now supports remote viewing and control for Linux devices through the RCV2 platform. This release includes the following capabilities:
  > a. Multi-admin support: Allows multiple administrators to participate in remote sessions.
  > b. Unmute to call: Supports unmuting audio during a remote session.
  > c. Annotations: Enables administrators to use annotation tools during remote sessions.
  > Note: Remote access requires end-user participation. The end user must grant permission to inject key events and select the screen to share. File transfer is not supported.
  > 2. Webhooks Support for SIEM Events
  > Webhooks have been extended to support SIEM-related events, including the events available through Splunk and QRadar integrations. Organizations can configure Webhooks to send these events to their SIEM tools, provided the tools support Webhook consumption. The enhancement includes the following:
  > a. Header-based authentication: Configure Webhooks with a Bearer token, an Authorization header, or other custom key-value headers to authenticate requests received by the SIEM tool.
  > b. Firewall configuration: If the SIEM tool is behind a firewall, the applicable Scalefusion Smokescreen IP address for the organization's instance must be allowlisted.
  > 3. Private Splunk Integration
  > Scalefusion now supports integration with private Splunk instances hosted behind a firewall that cannot be e…

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

#### New (4)

- **October 16, 2026** — 2026-10-16 — <https://jumpcloud.com/support/release-notes-2026#october-16-2026> — Windows: medium
  > Enhancement: App Catalog Update Experience Enhancements
  > Feature: Software Management
  > Control App Catalog update notifications and let users start available updates from the Self Service App Catalog.
  > Update notification control: Select Disable end user update notifications when adding or editing an application. This setting applies to Auto and Self Service delivery. Existing applications keep notifications enabled. With Auto-Update enabled, updates are still forced after seven days, even when notifications are off.
  > Required app updates: Users can start available updates for Required applications from Updates in the Self Service App Catalog. Required applications remain visible regardless of the Auto-Update setting.
  > See Use the JumpCloud App Catalog for macOS, Use the JumpCloud App Catalog for Windows, and Get Started: Self Service App Catalog to learn more.

- **October 14th, 2026** — 2026-10-14 — <https://jumpcloud.com/support/release-notes-2026#october-14th-2026> — Windows: medium
  > New: Agent Uninstall Protection
  > Feature: Device Management
  > Prevent unauthorized removal of the JumpCloud agent so your devices stay managed. Agent Uninstall Protection is on by default for all devices running JumpCloud agent v2.179.2 or later. Uninstalling the agent with standard methods on macOS, Windows, and Linux now requires a per-device maintenance token.
  > Directory Insights Events: Directory Insights logs failed uninstall attempts, successful uninstalls, and exemption policy changes, identifying the device and the user.
  > Maintenance Tokens: Admins with Manager role permissions or higher can view a device's maintenance token from the device details. Tokens work without network connectivity and automatically rotate 60 minutes after they're viewed if the agent remains installed.
  > Exemption Policies: Use the Disable Agent Uninstall Protection policy for macOS, Windows, or Linux to remove the token requirement from specific devices during agent maintenance, troubleshooting, or imaging.
  > Protection Status: View each device's protection status (On, Off, or Failed) from the device details or the Devices list.
  > Deleting an active device from the Admin Portal or the JumpCloud API still removes the agent without a maintenance token.
  > Available in the Admin Portal: Go to Device Management > Devices > Settings > Agent Uninstall Protection.
  > Learn More
  > Get Started: Agent Uninstall Protection
  > Create a Device Level macOS Disable Agent Uninstall Protection Policy
  > Create a Device Level Windows Disable Agent Uninstall Protection Policy
  > Create a Device Level Linux Disable Agent Uninstall Protection Policy
  > Install or Uninstall the JumpCloud Agent

- **October 13th, 2026** — 2026-10-13 — <https://jumpcloud.com/support/release-notes-2026#october-13th-2026> — Windows: none
  > Enhancement: AI Agent Management APIs
  > Feature: Agent Identities
  > JumpCloud now provides REST APIs for managing AI Agents and Agent Groups, enabling administrators and developers to automate agent identity management and integrate it into existing workflows.
  > With these APIs, you can:
  > Manage AI Agents: Register, retrieve, update, suspend, activate, and delete agent identities programmatically.
  > Manage Agent Credentials: Create, retrieve, update, and delete credentials associated with AI Agents.
  > Manage Agent Groups: Create, update, and delete groups to organize agents and simplify access management.
  > Manage Group Memberships and Application Assignments: Add or remove agents from groups, manage group application assignments, and retrieve applications assigned to individual agents.
  > For more information, see the API documentation:
  > Agents API
  > Agent Groups API
  > New: Custom Messaging
  > Feature: User Portal
  > Create login dialogs and announcement banners for users in the User Portal. Choose who sees each message by user group, set the severity or message type so the right alerts stand out, and publish when you’re ready.
  > Available in the Admin Portal: Go to Settings > User Portal > Custom Messaging.
  > See Get Started: Custom Messaging to learn more.
  > September

- **September 14th, 2026** — 2026-09-14 — <https://jumpcloud.com/support/release-notes-2026#september-14th-2026> — Windows: none
  > New: Block macOS Golden Gate Installer Policy
  > Feature: Policy Management
  > Use the Block macOS Golden Gate Installer policy to prevent the macOS 27 Golden Gate installer from launching on MDM-enrolled Mac computers. If users download the installer from the App Store or another source, the installer is automatically terminated when they try to launch it. To also keep macOS 27 Golden Gate from appearing in Software Update, defer major OS upgrades in your Patch Management policies for up to 90 days.
  > Available in the Admin Portal: Go to Device Management > Policy Management, click + Add New > Device Policy, and select the macOS tab.
  > See Create a Mac Policy to Delay or Block Golden Gate to learn more.

## ManageEngine

### manageengine-endpoint-central — ok

Kind: csv · Source: https://www.manageengine.com/sites/meweb/images/ems/readme/largenl_readme.csv

#### New (6)

- **11.5.2627.59 · BugFixes · DC:SS:MSP:PMP:VMP** — 2026-10-14 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > New UI information messages have been added to communicate APD Feature Pack migration as part of the latest enhancements.
  > Type: BugFixes; Products: DC:SS:MSP:PMP:VMP

- **11.5.2627.59 · BugFixes · ALL** — 2026-10-14 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Tomcat has been upgraded from 9.0.120 to 9.0.122.
  > Type: BugFixes; Products: ALL

- **11.5.2627.59 · BugFixes · DC:MSP:RAP:SS** — 2026-10-13 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed a security issue in Configurations to improve access control over uploaded configuration files.
  > Type: BugFixes; Products: DC:MSP:RAP:SS

- **11.5.2627.58 · BugFixes · All** — 2026-10-12 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue with restricted column handling in Query Reports.
  > Type: BugFixes; Products: All

- **11.5.2627.57 · BugFixes · DC:MSP:BSP** — 2026-10-10 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: medium
  > The issue with Google Credential Provider for Windows sign-up has been fixed.
  > Type: BugFixes; Products: DC:MSP:BSP

- **11.5.2627.57 · BugFixes · DC:SS:MSP:PMP:VMP** — 2026-10-10 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where, with the N-1 setting configured, a Linux patch could be wrongly marked as installed when a lower or superseded version of the same package was deployed in the same task.
  > Type: BugFixes; Products: DC:SS:MSP:PMP:VMP

