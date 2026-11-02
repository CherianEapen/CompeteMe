# Competitor watch — fetch diff 2026-11-02

Period: 2026-10-26 → 2026-11-02. Sources marked *baseline* have no previous snapshot and list only items dated within the last 14 days (or the newest undated items). Full item text is in diff.json.

## Summary

| Source | Vendor | Status | New | Changed | Note |
|---|---|---|---|---|---|
| intune-whats-new | Microsoft Intune | ok | 2 | 0 | 6 items; 2 removed |
| intune-blog | Microsoft Intune | ok | 1 | 0 | 20 items; 1 removed |
| iru-updates | Iru | ok | 15 | 0 | 50 items; 15 removed |
| hexnode-whats-new | Hexnode | no-change | 0 | 0 | 25 items |
| hexnode-blog | Hexnode | ok | 2 | 0 | 2 items; 4 removed |
| miradore-releases | Miradore | ok | 1 | 0 | 373 items |
| 42gears-press | 42Gears | no-change | 0 | 0 | 103 items |
| 42gears-docs | 42Gears | ok | 82 | 21 | 953 items; 81 removed |
| jamf-pro-release-notes | Jamf | ok | 3 | 0 | 3 items; v11.33.3; 3 removed |
| scalefusion-release-notes | Scalefusion | ok | 1 | 0 | 30 items |
| scalefusion-product-updates | Scalefusion | no-change | 0 | 0 | 10 items |
| ivanti-quarterly-releases | Ivanti | no-change | 0 | 0 | 67 items |
| jumpcloud-release-notes | JumpCloud | ok | 4 | 0 | 12 items; 4 removed |
| manageengine-endpoint-central | ManageEngine | ok | 13 | 0 | 399 items; 13 removed |

## Microsoft Intune

### intune-whats-new — ok

Kind: html-sections · Source: https://learn.microsoft.com/en-us/intune/whats-new/

#### New (2)

- **Week of October 26, 2026 (Service release 2610)** — 2026-10-26 — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610> — Windows: high
  > App management
  > Manage referenced apps on AOSP devices
  > Microsoft Intune now supports AOSP referenced app type that lets you identify an app by package name instead of uploading an APK on AOSP devices. You can assign Required or Uninstall intent to OEM, preloaded, or externally deployed apps that already exist on supported AOSP devices. Required makes an existing app unhidden, while Uninstall hides it. You'll also be able to target referenced apps with JSON-based app configuration policies; Configuration designer and Connected Apps won't be supported. This capability will help organizations manage device-resident apps without adding a new app distribution path.
  > Applies to:
  > Android
  > Device configuration
  > Enforce Routes capability in Apple VPN profiles
  > Microsoft Intune now supports Apple's Enforce Routes capability in iOS/iPadOS and macOS VPN profiles. Admins define routing behavior with Include all networks and Exclude local networks, and Intune automatically derives the appropriate Enforce Routes configuration. This helps reduce VPN traffic bypass and de-cloaking risks while keeping routing behavior consistent with Apple's platform semantics.
  > For more information, see Add VPN settings to Apple devices in Microsoft Intune.
  > Applies to:
  > iOS/iPadOS
  > macOS
  > Legacy Apple MDM software update workloads removed from Intune
  > Microsoft Intune is removing legacy Apple MDM software update workloads after Apple retired the underlying commands and payloads in OS 27. Admins should use Apple declarative device management update policies to continue managing software updates. This keeps Intune UI, Graph, and documentation aligned with supported Apple capabilities and provides a clearer path for future update deployments.
  > For more information, see Move to declarative device management for Apple software updates.
  > Applies to:
  > iOS/iPadOS
  > macOS
  > Add support for the MEFERI OEMConfig app on Android Enterprise
  > Microsoft Intune now supports the MEFERI OEMConfig app (com.meferi.oemconfig) for Android Enterprise devices. Admins can use the existing Intune OEMConfig workflow to deploy settings exposed by MEFERI's OEM-provided schema, expanding supported device management options without custom workarounds. Add the app from Managed Google Play, assign it, and create an OEMConfig profile for the bundle.
  > For more information, see Use OEMConfig on Android Enterprise devices in Microsoft Intune.
  > Applies to:
  > Android Enterprise
  > Device enrollment
  > Setup Assistant legacy deprecation for Apple enrollment profiles
  > Intune has ended support for Setup Assistant (legacy) authentication for iOS/iPadOS and macOS automated device enrollment (ADE) with user affinity to align with modern authentication standards. Existing profiles are automatically updated to Setup Assistant with modern authentication, and the legacy option is no longer available when creating or editing profiles; already-enrolled devices remain enrolled and aren't affected.
  > Applies to:
  > iOS/iPadOS
  > macOS
  > Device management
  > Administrator protection settings in Account protection policies
  > Microsoft Intune now includes two Administrator protection settings in endpoint security Account protection policies. On supported Windows 11 versions, admins can configure the Administrator Approval Mode type and choose the elevation prompt behavior for Administrator protection.
  > For more information, see Account protection policy.
  > Applies to:
  > Windows 11
  > Push notification support update for Windows devices
  > We've improved connectivity for scenarios that rely on push notifications including Device actions, Win32 apps, PowerShell scripts and Remediations. For the best experience, we recommend updating firewall rules to include this new endpoint:
  > *.trouter.communications.svc.cloud.microsoft
  > For the current list of required network endpoints, see Network requirements for PowerShell scripts and Win32 apps and Windows Push Notification Services (WNS) dependencies in the Intune endpoints documentation.
  > Applies to:
  > Windows
  > Apple OS 27 DDM status data added to device inventory
  > Microsoft Intune now adds Apple OS 27 declarative device management status data to device inventory. Admins can review new inventory for: device health for hardware components, enhanced logging sessions, content cache status, and Apple MDM and security states such as enrollment type, awaiting configuration, and lockdown mode. Values depend on supported OS, hardware, enrollment, and DDM capabilities.
  > Applies to:
  > Apple devices running OS 27
  > Device security
  > STIG audit baselines for Windows devices in commercial tenants
  > Microsoft Intune commercial tenants can now audit Windows devices against Security Technical Implementation Guide (STIG) recommendations. Review per-setting and per-device audit results to identify configuration gaps and prioritize remediation. The baseline evaluates supported automated checks without changing device settings.
  > This feature requires Intune Advanced Analytics. Assess rules that require manual verification separately.
  > For more information, see Use STIG audit baselines to assess Windows device compliance.
  > Applies to:
  > Windows
  > Updated Windows support for Administrator protection settings
  > Microsoft Intune now supports two Administrator protection settings in the settings catalog on Windows 11 versions 24H2 and 25H2. Admins can configure the Administrator Approval Mode type and choose the elevation prompt behavior used with Administrator protection.
  > For more information, see Settings catalog.
  > Applies to:
  > Windows 11
  > Agent runtime protection settings are generally available
  > Microsoft Intune's endpoint security template for Microsoft Defender for Endpoint agent runtime protection settings is now generally available. Administrators can use the template to manage supported runtime protection settings for Windows devices without the preview designation, aligning Intune policy management with the Microsoft Defender for Endpoint general availability release. We have also added a new setting called AI agent runtime inspection to be configured in the template.
  > Applies to:
  > Windows
  > Monitor and troubleshoot
  > Certificate connector health monitoring in the Microsoft Intune admin center
  > The Certificate Connector for Microsoft Intune now surfaces health and status signals in the Microsoft Intune admin center, so you can spot certificate-issuance problems early. Clear indicators call out common failure conditions — such as the connector being unable to reach the certification authority (CA), the connector's service account lacking permission to issue or revoke certificates, or certificate requests being rejected because of a template mismatch with your PKCS profile. Each signal includes guidance to help you investigate and remediate before devices relying on certificate-based authentication hit access, sign-in, or compliance issues.
  > For more information, see Certificate Connector for Microsoft Intune.
  > Applies to:
  > Certificate Connector for Microsoft Intune
  > Role-based access control
  > Scoped permissions for role-based access control are generally available
  > Microsoft Intune scoped permissions for role-based access control are now generally available. Permissions from role assignments with different scope tags are applied independently instead of being merged, giving admins the intended access within each scope. Use the Permissions Assessment Report before enabling scoped permissions to review how access will change.
  > For more information, see Permission behavior across role assignments.
  > Applies to:
  > Microsoft Intune admin center
  > Scripts
  > Faster delivery of Windows scripts
  > Microsoft Intune now uses push notifications for admin-initiated and service-side changes to Windows scripts. Managed devices can check in sooner after script changes, reducing delivery and refresh delays compared with waiting for the normal polling interval. This update improves script deployment responsiveness without requiring a new admin workflow.
  > Applies to:
  > Windows

- **Week of October 26, 2026** — 2026-10-26 — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026> — Windows: none
  > Device management
  > Bulk manage eSIMs on corporate-owned Android Enterprise devices
  > Microsoft Intune now supports bulk eSIM actions for corporate-owned Android Enterprise devices. From Devices > All devices > Bulk device actions, you can activate eSIMs on up to 100 selected devices running Android 15 or later by using a carrier activation server URL. Bulk eSIM activation is available only in the updated bulk device actions experience.
  > When you bulk wipe supported devices, Intune preserves eSIM data plans by default. You can select the option to remove eSIMs when the wipe should also remove the data plans. Personally owned Android Enterprise work profile devices aren't supported.
  > For more information, see Activate eSIMs on multiple Android Enterprise devices and Wipe multiple Android Enterprise devices.
  > Applies to:
  > Android Enterprise corporate-owned fully managed devices (COBO)
  > Android Enterprise corporate-owned dedicated devices (COSU)
  > Android Enterprise corporate-owned devices with a work profile (COPE)

### intune-blog — ok

Kind: rss · Source: https://techcommunity.microsoft.com/t5/s/gxcuf89792/rss/board?board.id=MicrosoftIntuneBlog

#### New (1)

- **What’s new in Microsoft Intune – October** — 2026-10-29 — <https://techcommunity.microsoft.com/t5/microsoft-intune-blog/what-s-new-in-microsoft-intune-october/ba-p/4537396> — Windows: high
  > Most changes to a device happen without the admin watching. A user turns off BitLocker to troubleshoot something. Patch Tuesday arrives. An agent starts working on a Cloud PC from an admin-configured pool. October’s new capabilities give admins more say over who can change what, and when updates land.
  > Strengthen compliance with security baselines
  > A Cloud PC that an agent may use needs security configurations in place before the first task runs. Intune now includes a security baseline for Windows 365 for Agents Cloud PCs. Admins can deploy recommended device settings for Windows 11, Microsoft Edge, and Microsoft Defender for Endpoint to set up a consistent security posture for agentic workloads that meet your organization’s compliance needs, then customize only what those workloads need.
  > For organizations that use Security Technical Implementation Guides (STIGs) as part of their security and compliance requirements, Intune’s STIG baseline is now available in Intune for commercial customers, extending its previous government-cloud availability. This allows organizations to audit supported Windows device configurations against recommendations from the Defense Information Systems Agency (DISA), and help them identify settings that don’t meet those recommendations without changing any device settings. Learn more: Manage security baseline profiles in Microsoft Intune and What is Windows 365 for Agents?.
  > Enable network changes without granting admin rights
  > Changing an IP address sh…

## Iru

### iru-updates — ok

Kind: rss · Source: https://www.iru.com/updates/rss.xml

#### New (15)

- **What's New in Iru \| October 30th** — 2026-10-30 — <https://www.iru.com/updates/2026/10/30/whats-new-in-iru-october-30th> — Windows: none
  > Highlights this week in What’s New in Iru:

- **Iru Agent for Windows 1.25.7** — 2026-10-29 — <https://www.iru.com/updates/windows-1.25.7-/2026/10/28/iru-agent-for-windows-1-25-7/> — Windows: high
  > We've released Iru Agent for Windows 1.25.7. Endpoint Agent

- **New Windows Auto Apps** — 2026-10-28 — <https://www.iru.com/updates/2026/10/28/windows-auto-apps> — Windows: high
  > New Windows Auto Apps have been added to the catalog and are now available for all Iru Endpoint customers.

- **New macOS Auto App: XQuartz** — 2026-10-28 — <https://www.iru.com/updates/2026/10/28/macos-auto-app-xquartz> — Windows: none
  > A new Auto App, XQuartz, has been added to the catalog and is now available for all customers.

- **New macOS Auto App: Termius** — 2026-10-28 — <https://www.iru.com/updates/2026/10/28/macos-auto-app-termius> — Windows: none
  > A new Auto App, Termius, has been added to the catalog and is now available for all customers.

- **New macOS Auto App: Superhuman** — 2026-10-28 — <https://www.iru.com/updates/2026/10/28/macos-auto-app-superhuman> — Windows: none
  > A new Auto App, Superhuman, has been added to the catalog and is now available for all customers.

- **New macOS Auto App: RustDesk** — 2026-10-28 — <https://www.iru.com/updates/2026/10/28/macos-auto-app-rustdesk> — Windows: none
  > A new Auto App, RustDesk, has been added to the catalog and is now available for all customers.

- **New macOS Auto App: Proxyman** — 2026-10-28 — <https://www.iru.com/updates/2026/10/28/macos-auto-app-proxyman> — Windows: none
  > A new Auto App, Proxyman, has been added to the catalog and is now available for all customers.

- **New macOS Auto App: GitHub Copilot** — 2026-10-28 — <https://www.iru.com/updates/2026/10/28/macos-auto-app-github-copilot> — Windows: none
  > A new Auto App, GitHub Copilot, has been added to the catalog and is now available for all customers.

- **New macOS Auto App: Grok Bot** — 2026-10-28 — <https://www.iru.com/updates/2026/10/28/macos-auto-app-grok-bot> — Windows: none
  > A new Auto App, Grok Bot, has been added to the catalog and is now available for all customers.

- **Remote Shell** — 2026-10-28 — <https://www.iru.com/updates/remote-shell> — Windows: none
  > Remote Shell gives you a root command line on a managed Mac, right from a detection or the device record. It stays connected while the Mac is in Partial Isolation, so you can contain a threat and investigate it at the same time.

- **Managed OS for iOS and iPadOS** — 2026-10-26 — <https://www.iru.com/updates/2026/10/26/managed-os-for-ios-and-ipados> — Windows: none
  > Managed OS for iOS and iPadOS has been updated. The latest approved versions are now 27.2, 26.7.2, and 18.7.11, with the following release dates:

- **Managed OS for tvOS** — 2026-10-26 — <https://www.iru.com/updates/2026/10/26/managed-os-for-tvos> — Windows: none
  > Managed OS for tvOS has been updated. The latest approved versions are now 27.2 and 26.6.1, with the following release dates:

- **Managed OS for macOS** — 2026-10-26 — <https://www.iru.com/updates/2026/10/26/managed-os-for-macos> — Windows: none
  > Managed OS for macOS has been updated. The latest approved version for Golden Gate is now 27.2; for Tahoe, 26.7.2; and for Sequoia, 15.8.2, with the following release dates:

- **What's New in Iru \| October 23rd** — 2026-10-23 — <https://www.iru.com/updates/2026/10/23/whats-new-in-iru> — Windows: none
  > Highlights this week in What’s New in Iru:

## Hexnode

### hexnode-whats-new — no-change

Kind: next-data · Source: https://www.hexnode.com/whats-new/

No new or changed items.

### hexnode-blog — ok

Kind: rss · Source: https://www.hexnode.com/blogs/feed/

#### New (2)

- **ThreatLocker Rollouts on Windows: The GroupKey and Validation Checks That Matter** — 2026-10-28 — <https://www.hexnode.com/blogs/threatlocker-windows-groupkey-deployment/> — Windows: high
  > Why can a ThreatLocker rollout leave administrators uncertain?
  > Initiating an installation does not provide all the evidence administrators need to approve a rollout. Before marking a Windows device complete, IT teams need to verify the installation inputs, examine execution results, and confirm the intended destination group.
  > For a ThreatLocker Windows GroupKey deployment, that creates a practical challenge: connecting the configuration you prepared with the outcome you can verify. An administrator may know which devices received the deployment action but still need to establish whether each device reached the expected state.
  > The central question is therefore specific: what must the team validate before marking a device complete and expanding deployment? Answering it requires clear acceptance criteria and evidence that another administrator can review without reconstructing the entire installation attempt.
  > What happens when teams scale an unverified installation?
  > Expanding an unverified deployment can multiply troubleshooting work and delay rollout acceptance. Each additional device can become another case to investigate when teams carry an unresolved installation issue into subsequent batches.
  > Consider a pilot whose registration remains unconfirmed. The administrator proceeds with the same installation inputs across several departments. When reviewers later find discrepancies, they must identify affected devices, inspect execution results, and determine which installations…

- **A Security Technician Joins or Leaves: Who Updates Their XDR Access?** — 2026-10-28 — <https://www.hexnode.com/blogs/hexnode-xdr-technician-access-management/> — Windows: none
  > Who owns XDR access when a security technician joins or leaves?
  > Organizations should assign a security access owner to approve changes and an authorized portal administrator to execute them as part of Hexnode XDR technician access management. A new analyst waiting for access before a shift and an overlooked departing technician’s account expose the same gap: nobody clearly owns the transition.
  > For security administrators, SOC leads, and CISOs, Hexnode XDR technician access management starts with explicit responsibilities.
  > Who requests access?
  > Who approves the role?
  > Who makes the portal change, and who verifies completion?
  > A hiring manager may communicate the start date, while a SOC lead defines operational needs. Neither action confirms that someone has updated access. Every request needs a named approver, an executing administrator, and a person responsible for checking the result before the team closes the request.
  > Explore access management with Hexnode XDR
  > What happens when nobody owns technician access changes?
  > Unowned access changes can leave analysts unable to investigate and former team members with permissions they no longer need. Delayed onboarding can reduce investigation coverage or force colleagues to absorb additional work. Unnecessary privileges can also expose security operations to unauthorized changes.
  > The accountability gap grows when requests remain unresolved and teams assume another administrator completed the handoff. A manager may approve a departure w…

## Miradore

### miradore-releases — ok

Kind: link-list · Source: https://www.miradore.com/knowledge/releases/

#### New (1)

- **Allow installation of managed Google Play apps using tags, Miradore client update for macOS and Windows, Windows version display bug fix** — <https://www.miradore.com/knowledge/releases/allow-installation-of-managed-google-play-apps-using-tags-miradore-client-update-for-macos-and-windows-windows-version-display-bug-fix/> — Windows: high
  > In this article
  > Toggle
  > Allow installation of managed Google Play apps using tags
  > We introduced a new feature for allowing the installation of specific managed Google Play applications on devices. The feature utilize tags to allow the installation of specific apps on multiple devices at once and automate the process. This is done by assigning the same tag to the application and to the target devices or to the users assigned to those devices. For detailed information and instructions, see Allow application installation and configure user access to the managed Google Play store.
  > Miradore client update for macOS and Windows
  > We updated the Miradore client for Mac and Windows devices to version 1.6.10 (Build 149). The new version contains maintenance updates and does not introduce any new features or changes. We recommend you update the Miradore client to version 1.6.10 (Build 149) on your managed devices.
  > Windows version display bug fix
  > We fixed an issue where Windows versions were displayed inconsistently on the Management > Devices page and individual device pages. Previously, some devices showed only the edition (e.g., "Windows 11 Pro") while others also included the release version (e.g., "Windows 11 Pro (25H2)"). All devices now show the release version alongside the edition.
  > Have you already subscribed to our newsletter?
  > Fill in your email address to get the latest Miradore news and articles delivered directly to your inbox!
  > To view our Privacy Policy, click here

## 42Gears

### 42gears-press — no-change

Kind: link-list · Source: https://www.42gears.com/press-releases

No new or changed items.

### 42gears-docs — ok

Kind: sitemap · Source: https://docs.42gears.com/suremdm/sitemap.xml

#### New (2 shown of 82)

- **android zero touch** — <https://docs.42gears.com/suremdm/android-enterprise/enterprise/enrollment/enroll-devices/zero-touch-enrollment/android-zero-touch> — Windows: none
  > Android Zero Touch Enrollment
  > Android Zero Touch Enrollment eliminates the need for manual device setup by automating the provisioning process. IT administrators can preconfigure device settings, apply security policies, and install necessary applications remotely, ensuring that devices are ready for use immediately. With SureMDM, you can easily manage and control the entire provisioning process through a centralized console, saving time and reducing the risk of errors.
  > note
  > ZTE is supported on the devices running Android version Oreo (8.0) or later.
  > Configure SureMDM Agent in Zero Touch Enrollment Portal
  > Purchase devices from carrier partners and resellers who support Android Zero‑Touch enrollment. After the purchase, carrier partners and resellers will create a customer account for you on Zero Touch Enrollment Portal, upload the purchased device details like IMEI/Serial number and share the login credentials.
  > To get started, follow these steps:
  > Login to Zero Touch Enrollment Portal.
  > On Zero Touch Home, click Configurations to create a new configuration.
  > Give a name to the configuration.
  > From EMM DPC drop down menu, select MDM App by 42Gears-SureMDM.
  > In DPC extras, add the following content which has details about account id, server path and initial setup permissions.
  > With Password
  > <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class="token plain">{ &nbsp;</span><br></span><span class="token-line" style="color:#bfc7d5"><span class="to…

- **enroll suremdm with android enterprise** — <https://docs.42gears.com/suremdm/android-enterprise/enterprise/enrollment/enroll-suremdm/enroll-suremdm-with-android-enterprise> — Windows: none
  > Enroll SureMDM with Android Enterprise
  > To use the full potential of Android Enterprise's robust device management features, it is necessary to enroll your SureMDM account with Android Enterprise. By doing so, you gain access to a wide array of capabilities to efficiently manage and control your Android devices. There are two methods through which SureMDM can be enrolled with Android Enterprise:
  > Using Gmail Account
  > Using Managed Google Account
  > Using Gmail Account
  > To enroll SureMDM account with Android Enterprise, follow these steps:
  > On the SureMDM Web Console, navigate to Settings > Account Settings > Android Management > Android Enterprise Enrollment.
  > On Android Enterprise Enrollment page, click Enroll Android Enterprise.
  > Select Google Play EMM API.
  > Select Enroll Using Your Gmail Account and click Enroll.
  > On the Google Play page, click Get Started to login with the Gmail account.
  > Enter organization's name in the Business Name field and click Next.
  > Enter EU Representative details: Name, Email, Phone, select Terms and Conditions checkbox, and click Confirm.
  > A message will be displayed on completion of the Android Enterprise setup.
  > Click Complete Registration.
  > Once Android Enterprise enrolled to the SureMDM account, the following options are available in Account Settings > Android Management > Android Enterprise Enrollment:
  > Managed Google Play Account Information: Displays details about the linked managed Google Play account
  > Store Layout - Admin can use the basic layout or crea…

#### Changed (10 shown of 21)

- **okta sso** — lastmod 2026-09-11 → 2026-10-26 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sso/okta-sso> — Windows: none
  Added:
  + Okta SSO
  + SureMDM's seamless integration with Okta Single Sign-On (SSO) provides your organization with a streamlined and secure authentication experience. With Okta SSO, you can leverage a centralized identity management solution that enhances user convenience and bolsters data protection. Users can access SureMDM and other connected applications using a single set of login credentials. This eliminates th…
  + There are two ways to configure Okta SSO in SureMDM:
  + ConfigurationSelect Identity Provider (IdP)How permissions are assigned
  + Standard Okta SSO
  + Okta
  + The same Role, Device Group Set and Jobs/Profiles Folder Set apply to every user who signs in through Okta.
  + Dynamic Permission Assignment
  + Generic
  + Permissions are assigned per user based on the value of a SAML attribute, for example a group, department, or title. The attribute must first be configured as an attribute statement on Okta, and the attribute name entered in SureMDM must match the name configured in Okta exactly.
  + IMPORTANT
  + Currently Dynamic Permission Assignment is available only with the Generic option. If you select Okta in the Select Identity Provider (IdP) drop-down, Static permissions can be assigned.
  + Prerequisites
  + An Okta account with admin access to the Okta Admin Console.
  + A SureMDM account with permission to change Account Settings.
  + Your SureMDM server path.
  + For Dynamic Permission Assignment setting up Attribute Statements by Adding Expressions is required.
  + Step 1: Create the app integration in Okta
  + Log in to the Okta Admin Console.
  + Navigate to Applications and resources > Applications and click Create App Integration.
  + Select SAML 2.0 and click Next.
  + On the General Settings tab, enter an App name and click Next.
  + On the Configure SAML tab, enter the following values:
  + FieldValue
  + Single sign-on URL
  + https://<SureMDM Server Path>/console/ssoconsumer/<Encrypted Account ID>
  + Audience URI (SP Entity ID)
  + urn:42gears:suremdm:SAML2ServiceProvider
  + note
  + The Encrypted Account ID is generated by SureMDM only after the SAML Single Sign-On settings are saved (Step 2). For now, enter a placeholder value for the Encrypted Account ID so that Okta lets you save the app. You will replace it with the actual URL in Step 3.
  + You can either update attribute statements now or leave the Attribute Statements section in the wizard empty, it can be added later as well from the Sign On tab (please refer to the section Add attribute statements in Okta).
  + Click Next. and then click Finish.
  + On the app's Sign On tab, click View SAML setup instructions and copy the following values:
  + Identity Provider Single Sign-On URL
  + Identity Provider Issuer
  + Identity Provider Single Logout URL (if available)
  + Download the X.509 Certificate (.cer file).
  + Navigate to the Assignments tab and assign the users or groups who should sign in to SureMDM through Okta SSO.
  + Verification: The app is saved in Okta, you have copied the Identity values, and you have downloaded the .cer certificate.
  + Step 2: Configure SAML Single Sign-On in the SureMDM console
  + … 20 more added lines

- **bixolon printer enrollment** — lastmod 2026-09-01 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/bixolon-printer-enrollment> — Windows: none
  Removed:
  - Configure No Authentication in the SureMDM Console.

- **citizen printer enrollment** — lastmod 2026-06-10 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/citizen-printer-enrollment> — Windows: none
  Added:
  + Citizen Printer Enrollment
  + 42Gears has integrated Citizen printers with SureMDM to simplify device management and enhance operational efficiency. This integration enables remote management and configuration of Citizen printers, reducing manual effort and ensuring seamless operation. SureMDM facilitates easy enrollment and monitoring of multiple Citizen printers through a centralized console, improving visibility and contro…
  + Enroll Citizen Printer to SureMDM
  + To enroll the Citizen Printer to SureMDM Console, follow these steps:
  + Prerequisites
  + Enable Things Gateway in the SureMDM Console.
  + The host machine and printer should be connected to the same network.
  + SureMDM Console Steps:
  + Navigate to Enrollment > Manual Enrollment > Expand the Things accordion and click on the Citizen Printer title on the left panel.
  + On the center screen, click the Request Citizen Printer Management button to start the configuration process. Once the request is submitted, the button becomes grayed out to prevent multiple requests from being triggered.
  + Once the process is completed and the key is received, a success message is prompted on the screen and on the Notification section of the SureMDM Console.
  + A new API Key section becomes visible under the Citizen Printer section in Manual Enrollment, displaying the generated API key.
  + note
  + The masked API key can be revealed using the visibility icon, and once unmasked, it can be copied using the copy icon.
  + This API key must be entered in the Citizen Tool, along with the remaining configuration details, to complete the enrollment successfully.
  + Citizen Tool steps:
  + Obtain the Citizen Printer’s IP address from the physical device or the Citizen Utility Tool.
  + Run the obtained IP address in a browser to open the Citizen tool.
  + Navigate to the Config tab and login using your credentials.
  + Navigate to the Request Print tab, Enter the following details and click Submit.
  + Username: It is your SureMDM console’s Account ID.
  + Navigate to Settings on the top right corner of the SureMDM console to get the Account ID.
  + Password: It is the API Key.
  + The API Key can be copied from the SureMDM’s Manual Enrollment section for the Citizen Printer.
  + Navigate to the Maintenance tab and click on Save and Reboot.
  + The request is sent to the Citizen server, and if the provided details are valid, the Citizen printers will be successfully enrolled in the SureMDM console after they reboot.

- **datalogic gryphon scanner** — lastmod 2026-06-10 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/datalogic-gryphon-scanner> — Windows: high
  Added:
  + Datalogic Gryphon Scanner Enrollment
  + The integration of Datalogic Gryphon scanners into SureMDM marks a significant advancement in device management capabilities. This enhancement allows organizations to streamline their operations by effectively managing and monitoring these scanners from a centralized console. With SureMDM, administrators gain greater control over their scanner fleet, ensuring optimal performance and reliability.
  + Prerequisites
  + Enable Things Gateway in the SureMDM Console.
  + Java 1.8 or above is required.
  + Dot net 4 or above is required.
  + Install the latest version of DatalogicOPOS driver from https://www.datalogic.com/prt/suporte-servi%C3%A7o/downloads-dw-4023.html?cat=17
  + note
  + The host machine type supported is Windows device.
  + Enroll Datalogic Gryphon Scanner to SureMDM
  + To enroll the Datalogic Gryphon Scanner to SureMDM Console, follow these steps:
  + Precondition: Device should be connected to the host machine via USB.
  + The file DatalogicScannerConnector.exe is sent to the host machine.
  + Double-click on the .exe file to start the installation process. Automatically, all the dependencies are installed, and the file contents are extracted to "C:\Program Files(x86)\42GearsDSC".
  + Edit the "DSC.conf" file found in "C:\Program Files(x86)\42GearsDSC" and update the Account ID, Gateway Password, and Domain URL in the following format:
  + <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class="token plain">serverDomain=<Domain_URL></span><br></span><span class="token-line" style="color:#bfc7d5"><span class="token plain" style="display:inline-block"></span><br></span><span class="token-line" style="color:#bfc7d5"><span class="token plain">accountID=<Account_ID></span><br></span><span class="tok…
  + Right-click on the "start.bat" file in the "C:\Program Files(x86)\42GearsDSC" directory and select "Run as Administrator". This will start the application as a Windows service, running in the background.
  + The application will automatically retrieve the connected devices and enroll them in the configured account.

- **epson device enrollment** — lastmod 2026-06-10 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/epson-device-enrollment> — Windows: medium
  Added:
  + Epson Printer Enrollment
  + SureMDM offers Epson printer enrollment and manages them remotely.
  + Prerequisite
  + Enable Things Gateway in the SureMDM Console.
  + Steps to Enroll Epson Printers
  + To enroll Epson Printers in SureMDM, follow these steps:
  + Download the Epson Printer Connector application on the Windows device.
  + Start the installation by running the .exe file.
  + Install the application by following the on-screen instructions.
  + During installation, you will be instructed to install the following:
  + Microsoft .NET Framework
  + Read and agree to the terms and conditions.
  + Click Install to complete the .NET installation
  + Epson SDK
  + Select the preferred language and click Next.
  + Select Custom as a Setup Type.
  + On the next screen, select USB and Ethernet under Communication Interfaces.
  + Click Install to complete the Epson SDK installation.
  + note
  + During the Epson SDK installation, Microsoft POS for.NET will be installed.
  + Once done, launch the Epson Printer Connector.
  + On the home screen, you can see the following options:
  + Settings - Using this option, you can add printers.
  + Sync Now - Using this option, you troubleshoot the problems and sync the printer models.
  + Click Settings.
  + Enter the following details:
  + Account ID - Enter the SureMDM Account ID.
  + Gateway Password - Enter the Things Gateway Password.
  + Server Path - Enter the SureMDM Server URL.
  + Click Printer Settings to add a printer.
  + Click Add Printer.
  + On the Add Printer prompt, configure the following option and click Connect.
  + SettingsDescription
  + Model
  + Select the Printer Model from the dropdown menu.
  + Interface
  + Select one of the interface types from the following: USB Wi-FI LAN
  + IP Address
  + Enter the IP address of the printer while selecting Wi-Fi or LAN as an interface type.
  + Once done, the user can see the printer details and connection status.
  + … 1 more added lines

- **honeywell printer enrollment** — lastmod 2026-09-07 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/honeywell-printer-enrollment> — Windows: none
  Added:
  + Prerequisites
  + c. MQTT Tenant ID- Identifier used to associate the device with a specific tenant/environment.
  + <code class="co…
  Removed:
  - Prerequisite:
  - Configure No Authentication in the SureMDM Console.
  - c. MQTT Tenant ID- Identifier used to associate the devic…

- **impinj rfid enrollment** — lastmod 2026-09-03 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/impinj-rfid-enrollment> — Windows: medium
  Removed:
  - Configure No Authentication in the SureMDM Console.

- **printronix printer enrollment** — lastmod 2026-09-03 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/printronix-printer-enrollment> — Windows: none
  Added:
  + Prerequisites
  + The Gateway Password can be copied from the Enable Things Gateway section under the Account Settings >> Things Management.
  + i) Leave both File Store Password and Priv…
  Removed:
  - Prerequisite
  - Configure No Authentication in the SureMDM Console.
  - The Gateway Password can be copied from the Enable Things Gateway section under the Account Settings >> Things Manag…

- **proglove scanner enrollment** — lastmod 2026-09-03 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/proglove-scanner-enrollment> — Windows: none
  Removed:
  - Configure No Authentication in the SureMDM Console.

- **snmp enrollment** — lastmod 2026-09-03 → 2026-10-23 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/snmp-enrollment> — Windows: medium
  Added:
  + Prerequisites
  + The Troubleshoot option provides access to system-generated encrypted log files for troub…
  Removed:
  - Pre-requisites
  - Configure No Authentication in the SureMDM Console.
  - The Troubleshoot option provid…

## Jamf

### jamf-pro-release-notes — ok

Kind: jamf-khub · Source: https://learn.jamf.com

#### New (3)

- **New Features and Enhancements > PreStage Enrollment Settings — Jamf Pro 11.33.3** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.33.3/PreStage_Enrollment_Settings> — Windows: none
  > Computer PreStage Enrollment Settings
  > SettingKeyRequirementsNotes
  > The following setting was added to the General pane in computer PreStage enrollments. When selected, the screen can be skipped in Setup Assistant during Automated Device Enrollment.
  > Liquid Glass
  > LiquidGlass
  > macOS 27 or later
  > Skips the Liquid Glass screen
  > Mobile Device PreStage Enrollment Settings
  > SettingKeyRequirementsNotes
  > The following settings were added to the General pane in mobile device PreStage enrollments. When selected, the screens can be skipped in Setup Assistant during Automated Device Enrollment.
  > Device Features Tour
  > DeviceFeaturesTour
  > iOS 27 or later
  > iPadOS 27 or later
  > Skips the Device Features Tour screen
  > Liquid Glass
  > LiquidGlass
  > iOS 27 or later
  > iPadOS 27 or later
  > Skips the Liquid Glass screen

- **New Features and Enhancements > Resolved Issues — Jamf Pro 11.33.3** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.33.3/Resolved_Issues> — Windows: none
  > Jamf Pro Server
  > [PI-2740] The following resolved issue in Jamf Pro 11.33.0 was reverted due to database degradation:
  > [PI-79] [PI102023] [PI-007813] Viewing the full list of configuration profiles in the Configuration Profiles overview or the Jamf Pro Dashboard may cause performance issues.
  > In Jamf Pro 11.33.3 or later, the Jamf Pro Dashboard returns to displaying all configuration profiles at once. It no longer displays the first 100 configuration profiles with a Load all button. Viewing the full list of configuration profiles in the Configuration Profiles overview or the Jamf Pro Dashboard may again cause performance issues.
  > [PI228088] Fixed: Jamf Pro uses excessive CPU resources when reading certain information from the Jamf Pro database (e.g., scripts, extension attribute scripts, and printer details), causing degraded performance.

- **New Features and Enhancements > Additional Information — Jamf Pro 11.33.3** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-11.33.3/Additional_Information> — Windows: none
  > For information on new features and other resolved issues, use the version picker at the top of the page to view previous Jamf Pro release notes.

## Scalefusion

### scalefusion-release-notes — ok

Kind: d360-index · Source: https://help.scalefusion.com/docs/latest-release-notes-year-{year}

#### New (1)

- **Scalefusion October 23rd, 2026 Release Notes** — 2026-10-26 — <https://help.scalefusion.com/docs/scalefusion-october-23rd-2026-release-notes> — Windows: medium
  > Version Information
  > Scalefusion Dashboard: v68.4.0
  > Scalefusion Android MDM Agent: v23.0.0
  > Scalefusion iOS MDM Agent: v5.0.0
  > Scalefusion macOS MDM Agent: v6.6.0
  > Scalefusion Windows MDM Agent: v17.3.0
  > Release Notes
  > 1. OneIdP RADIUS
  > OneIdP RADIUS enables organizations to secure corporate Wi-Fi and VPN access by authenticating users with their Identity Provider (IdP) credentials or certificates. This helps eliminate static Wi-Fi credentials and restricts access to devices with valid certificates, where certificate-based authentication is configured.
  > Key capabilities:
  > a. Multiple Authentication Methods: OneIdP RADIUS supports EAP-TLS, EAP-TTLS, PEAP (MS-CHAP v2), MS-CHAP v2, and PAP, with the available methods depending on the operating system and its support.
  > b. Multi-Factor Authentication (MFA): Administrators can enforce additional authentication using OneIdP MFA or third-party MFA configured through OneIdP.
  > c. Enterprise Wi-Fi Authentication: Administrators can configure Enterprise Wi-Fi through MDM payloads. The sign-in interface is controlled by the device operating system. When MFA is enabled, users must enter the MFA information in the username field after their username, as the operating system does not display a separate MFA input field.
  > d. VPN Authentication: RADIUS can also secure VPN access with supported VPN clients. VPN configuration is managed through the VPN application's configuration settings, and the sign-in interface is controlled by the VPN application.
  > e. I…

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

- **October 30th, 2026** — 2026-10-30 — <https://jumpcloud.com/support/release-notes-2026#october-30th-2026> — Windows: none
  > Enhancement: Workflows Support in the JumpCloud MCP Server for Admins
  > Feature: Workflows
  > You can now create, modify, duplicate, and troubleshoot JumpCloud Workflows from a connected MCP-enabled AI client using natural language. Inspect workflow definitions and run history, manually trigger workflows where supported, and review per-node outcomes and error details in the same conversation.
  > Workflows tools are available through your existing JumpCloud MCP Server connection, with no additional connection or credentials required.
  > See Get Started: Workflows and Get Started: JumpCloud MCP Server for Admins to learn more.
  > Enhancement: Expanded Workflow Template Library
  > Feature: Workflows
  > The Workflows template library now includes additional ready-to-use templates for high-demand IT automation scenarios. Start from a validated pattern instead of a blank canvas, then customize triggers, conditions, and actions to match your environment.
  > New templates include:
  > Auto-Suspend Users on Inactivity Alert: Automatically suspend users when an inactivity alert fires.
  > Auto-Block Newly Discovered Generative AI Apps: Block newly discovered generative AI applications as they appear in your environment.
  > Mac Enrollment - Auto-Revoke Admin Privileges: Revoke local admin privileges when a Mac enrolls with JumpCloud.
  > Sensitive Software Install Detection - Email Notification: Notify admins by email when sensitive software is installed on a device.
  > User Group Added - Send Member Email: Email a user when they are added to a group.
  > User Activated - Add to Pre-Hire Holding Group If Before Start Date: Place activated users into a pre-hire holding group when their start date is still in the future.
  > Agent Enrollment - Add Device Custom Attribute: Set a custom attribute on a device when the JumpCloud agent enrolls.
  > Browse and use these templates from the Workflow Builder template library in the Admin Portal.
  > See Creating Workflows and Use Workflow Templates to learn more.
  > Enhancement: OAuth 2.0 Support for Workflow Connectors
  > Feature: Workflows
  > Workflow connectors now support OAuth 2.0 authentication, including Client Credentials and Authorization Code with PKCE. Admins can authorize connectors directly from the Admin Portal, with credentials stored in Secrets Manager and access tokens refreshed automatically during workflow runs.
  > See Manage Connectors in Settings to learn more.

- **October 28th, 2026** — 2026-10-28 — <https://jumpcloud.com/support/release-notes-2026#october-28th-2026> — Windows: none
  > Enhancement: Device Lock for Apple MDM
  > Feature: Device Management
  > We’ve enhanced the Device Lock MDM command for macOS, iOS, and iPadOS, letting you secure Apple devices with automatic PIN generation and escrow, improved lock status visibility, and support for Lock Screen content.
  > Automatic PIN escrow (macOS): JumpCloud generates and stores the lock PIN when you lock a Mac, and you can retrieve it later from the Admin Portal under Highlights > Device Lock > View PIN.
  > Lock Screen contact details: Optionally show a message and phone number on the Lock Screen for Mac computers, iPhone, and iPad.
  > macOS Lock Status: Track whether a Mac is locked or unlocked from the Devices list using the macOS Lock Status column.
  > iOS and iPadOS unlock: These devices still unlock with the existing device passcode. JumpCloud does not generate or store a PIN for them.
  > See MDM Commands to learn more.

- **October 26th, 2026** — 2026-10-26 — <https://jumpcloud.com/support/release-notes-2026#october-26th-2026> — Windows: medium
  > New: SIEM integration
  > Feature: Directory Insights
  > We are excited to introduce SIEM Integration in Directory Insights, giving IT Admins a supported and SIEM-agnostic way to continuously ingest JumpCloud identity events into external Security Information and Event Management (SIEM) platforms, as well as export historical event logs for compliance and investigation.
  > Key Features:
  > Continuous Events API Pull: Ingest JumpCloud identity events into your SIEM collector using an existing API key, supporting RAW and OCSF-normalized formats.
  > Historical Data Export UI: Run asynchronous export jobs for up to 7-day windows across a 13-month retention lookback directly from Directory Insights.
  > Export Schema & Format Options: Choose RAW or OCSF schemas delivered as JSON or CSV files with email notification upon completion.
  > Public Event Catalog: Access public support documentation for field definitions, JumpCloud-to-OCSF mappings, and sample payloads.
  > See SIEM Integration in Directory Insights to learn more.

- **October 16th, 2026** — 2026-10-16 — <https://jumpcloud.com/support/release-notes-2026#october-16th-2026> — Windows: medium
  > Enhancement: App Catalog Update Experience Enhancements
  > Feature: Software Management
  > Control App Catalog update notifications and let users start available updates from the Self Service App Catalog.
  > Update notification control: Select Disable end user update notifications when adding or editing an application. This setting applies to Auto and Self Service delivery. Existing applications keep notifications enabled. With Auto-Update enabled, updates are still forced after seven days, even when notifications are off.
  > Required app updates: Users can start available updates for Required applications from Updates in the Self Service App Catalog. Required applications remain visible regardless of the Auto-Update setting.
  > See Use the JumpCloud App Catalog for macOS, Use the JumpCloud App Catalog for Windows, and Get Started: Self Service App Catalog to learn more.

## ManageEngine

### manageengine-endpoint-central — ok

Kind: csv · Source: https://www.manageengine.com/sites/meweb/images/ems/readme/largenl_readme.csv

#### New (13)

- **11.5.2627.65 · BugFixes · DC:SS:MSP:PMP:VMP** — 2026-10-31 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Improved the handling of cloned feature packs to ensure Automated Patch Deployment and Test and Approve groups are appropriately suspended, helping prevent unintended deployments.
  > Type: BugFixes; Products: DC:SS:MSP:PMP:VMP

- **11.5.2627.64 · BugFixes · DC** — 2026-10-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The issue with automatic extraction of ZIP files and unspecified error during software deployment package installation in OS deployment has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.64 · BugFixes · DC** — 2026-10-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The issue with automatic publishing of PXE media after an upgrade has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.64 · BugFixes · DC** — 2026-10-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The issue where the media could not be mounted during a media update has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.64 · BugFixes · DC** — 2026-10-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The issue with encryption and decryption in certain scenarios under OS Deployment has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.64 · BugFixes · DC** — 2026-10-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The issue where the domain join failed during post-deployment has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.64 · BugFixes · DC** — 2026-10-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The issue where OS deployment applications froze during deployment and post-deployment has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.64 · BugFixes · DC** — 2026-10-30 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > The issue where connections to the server failed due to an invalid CA certificate in certain scenarios has been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.63 · BugFixes · ALL** — 2026-10-28 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue that caused Distribution Server replication failures during file downloads.
  > Type: BugFixes; Products: ALL

- **11.5.2627.63 · BugFixes · DC** — 2026-10-27 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Issues related to backup protection have been fixed.
  > Type: BugFixes; Products: DC

- **11.5.2627.62 · BugFixes · DC:SS:MSP:PMP:VMP** — 2026-10-23 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where feature packs bypassed exclusion rules in specific scenarios.
  > Type: BugFixes; Products: DC:SS:MSP:PMP:VMP

- **11.5.2627.61 · BugFixes · DC:SS** — 2026-10-23 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: none
  > Fixed an issue where web upload policy changes were not applied to active browsers until restart in Endpoint DLP module.
  > Type: BugFixes; Products: DC:SS

- **11.5.2627.61 · BugFixes · All** — 2026-10-23 — <https://www.manageengine.com/products/desktop-central/hotfix-readme.html> — Windows: medium
  > PPM installation failure in mssql setup due to SQL Server certificate validation error after the MSSQL JDBC driver upgrade has been fixed.
  > Type: BugFixes; Products: All

