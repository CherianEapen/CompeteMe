# Competitor watch — fetch diff 2026-11-16

Period: 2026-11-10 → 2026-11-16. Sources marked *baseline* have no previous snapshot and list only items dated within the last 14 days (or the newest undated items). Full item text is in diff.json.

## Summary

| Source | Vendor | Status | New | Changed | Note |
|---|---|---|---|---|---|
| intune-whats-new | Microsoft Intune | ok | 1 | 1 | 6 items; 1 removed |
| intune-blog | Microsoft Intune | no-change | 0 | 0 | 20 items |
| iru-updates | Iru | ok | 3 | 0 | 50 items; 3 removed |
| hexnode-whats-new | Hexnode | no-change | 0 | 0 | 25 items |
| hexnode-blog | Hexnode | ok | 10 | 0 | 10 items |
| miradore-releases | Miradore | ok | 1 | 0 | 375 items |
| 42gears-press | 42Gears | no-change | 0 | 0 | 103 items |
| 42gears-docs | 42Gears | ok | 3 | 18 | 967 items; 2 removed |
| jamf-pro-release-notes | Jamf | ok | 14 | 0 | 14 items; v11.34.0; 3 removed |
| scalefusion-release-notes | Scalefusion | no-change | 0 | 0 | 31 items |
| scalefusion-product-updates | Scalefusion | no-change | 0 | 0 | 10 items |
| ivanti-quarterly-releases | Ivanti | no-change | 0 | 0 | 67 items |
| jumpcloud-release-notes | JumpCloud | ok | 1 | 0 | 12 items; 1 removed |
| manageengine-endpoint-central | ManageEngine | no-change | 0 | 0 | 399 items |

## Microsoft Intune

### intune-whats-new — ok

Kind: html-sections · Source: https://learn.microsoft.com/en-us/intune/whats-new/

#### New (1)

- **Week of November 16, 2026 (Service release 2611)** — 2026-11-16 — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-november-16-2026-service-release-2611> — Windows: high
  > App management
  > Newly available protected apps for Intune
  > The following protected apps are now available for Microsoft Intune:
  > EnGlobe Mobile by Corporatek Inc. (iOS)
  > Everbridge 360 by Everbridge, Inc. (iOS, Android)
  > Hypergate Files for Intune by Hypergate (Android)
  > Newcode by Newcode.ai (iOS)
  > Ramp by Ramp Business Corporation (iOS)
  > Reliaquest GreyMatter by Reliaquest (iOS, Android)
  > Rogo AI by Rogo Technologies, Inc. (iOS)
  > Rogo AI (Intune Wrapped) by Rogo Technologies, Inc. (iOS)
  > ShareCRM by FORSHARE PTE. LTD. (iOS, Android)
  > Zoho Mail - Intune by Zoho Corporation (iOS, Android)
  > For more information about protected apps, see Microsoft Intune protected apps.
  > Device configuration
  > Automate tasks with local actions on Android Enterprise devices
  > Microsoft Intune now supports local actions for Android Enterprise fully managed and dedicated devices. You can automate tasks in response to device restarts, Managed Home Screen sign-in or sign-out, power connection changes, and scheduled times. Configure up to five actions for each event, such as launching an app activity, sending a broadcast intent, or signing out of Managed Home Screen.
  > Applies to:
  > Android Enterprise fully managed devices
  > Android Enterprise dedicated devices
  > New settings for macOS in the settings catalog
  > Microsoft Intune now includes new settings for macOS in the settings catalog. You can manage Exchange Web Services (EWS) retirement alerts, configure Microsoft Edge browsing and Copilot experiences, and control AI agent runtime protection with Microsoft Defender for Endpoint. These additions help you tailor device configurations to your organization.
  > Declarative Device Management > Account > Account Settings (macOS 27.2 and later):
  > Allow EWS Retirement Alerts
  > Microsoft Edge:
  > Enable clipboard suggestions in the address bar
  > Allow browsing with Copilot
  > Allow socket pool size randomization for proxies
  > Use KDC policy to delegate credentials
  > Allow Back/Forward Cache for WebSockets
  > Enforce Edge guest mode
  > Browsing with Copilot allowed URLs
  > Browsing with Copilot blocked URLs
  > Configure Discover/Work feed tab visibility
  > Enable Copilot address bar suggestions
  > Allow Cowork to take actions on your behalf
  > Enable the Copilot new tab page
  > Enable opaque origins for data URLs in Web Workers
  > Set default download directory
  > Enable service-based extraction for Reading Mode
  > Allow sites to make network requests to the local device
  > Force foreground priority for specific URLs
  > Enable saving passkeys to the password manager
  > Background automatic relaunch when all browser windows are closed
  > Enable strict MIME type checking for worker scripts
  > Allow Local Fonts permission on specified sites
  > Enable extended lifetime for SharedWorkers
  > Block sites from making requests to local network endpoints
  > Show a warning before quitting
  > Enable editing profile in settings
  > Allow specified sites to access file URLs in the PDF Viewer
  > Force foreground priority for all tabs
  > Block Local Fonts permission on specified sites
  > Set default Copilot new tab feed to Work or Discover
  > Override IP address space mappings
  > Default Local Fonts permission
  > Allow idle detection on specified sites
  > Allow sites to make requests to local network endpoints
  > Set IPv6 route-probe address for PAC scripts
  > Control Microsoft Edge Safe Hosting Extension
  > Make storage quota APIs return static values
  > Enable standardized browser zoom behavior
  > Set IPv4 route-probe address for PAC scripts
  > Enable user web app installation from the browser
  > Allow M365 authentication popups in work profiles
  > Enable Edge sign-in using non-Microsoft accounts
  > Default idle detection permission
  > Control availability of XSLT
  > Allow Local Network Access in subframes without explicit delegation
  > Block idle detection on specified sites
  > Block sites from making network requests to the local device
  > Microsoft Defender:
  > AI Agent Network Inspection
  > AI Agent Protection
  > Applies to:
  > macOS
  > Group exclusions and built-in group targeting for PowerShell scripts on Windows
  > Microsoft Intune now supports group exclusions and the built-in All Users and All Devices groups for PowerShell script assignments on Windows. You can target scripts broadly, then exclude selected groups to keep the assignment focused on the users or devices that need it. This brings script assignments in line with other Intune workloads and gives you more control over deployment scope.
  > For more information, see Use PowerShell scripts on Windows devices in Intune.
  > Applies to:
  > Windows
  > Device enrollment
  > Require Google Workspace authentication on Android Enterprise devices
  > Microsoft Intune supports requiring users to authenticate with a managed Google Account from your organization's Google Workspace domain on supported Android Enterprise devices. This gives users access to the Google apps and services assigned to their organizational account. The policy doesn't change the Microsoft Entra account associated with the Intune-managed device.
  > This capability was previously available for corporate-owned, fully managed devices and corporate-owned devices with a work profile. It now also supports personally owned devices with a work profile managed through the Android Management API.
  > Configure Require users to authenticate with a Google Workspace account in an Android Enterprise settings catalog policy and set it to True. You can assign the policy before enrollment or to devices that are already enrolled. Your organization must have a managed Google domain, a verified Google Workspace domain, and managed Google Accounts for the targeted users.
  > For more information, see Require Google Workspace authentication on Android Enterprise devices with Microsoft Intune.
  > Applies to:
  > Android Enterprise corporate-owned, fully managed devices
  > Android Enterprise corporate-owned devices with a work profile
  > Android Enterprise personally owned devices with a work profile managed through the Android Management API
  > Increase Intune management agent check-ins on macOS
  > Microsoft Intune now increases check-in frequency for the Intune management agent on newly enrolled macOS devices. During onboarding, the agent checks every three minutes for 15 minutes and then every 15 minutes for two hours. This helps apps, scripts, and related assignments reach devices sooner without admin or user action.
  > After enrollment, the regular Intune management agent check-in cadence changes from about eight hours to one hour. Service-controlled hourly check-ins help deliver newly assigned apps, scripts, and dynamic-group updates sooner, without admin or user action.
  > For more information, see Common questions, answers, and scenarios with policies and profiles in Microsoft Intune.
  > Applies to:
  > macOS
  > Device management
  > Maintenance windows for operating system and driver updates on Windows
  > Microsoft Intune now supports maintenance windows for operating system and driver updates on Windows devices. You can choose which update operations run during a window and configure its start date, time, duration, and repeat schedule. To create a profile, go to Devices > Manage devices > Maintenance windows > Create profile. These controls help you schedule update activity during planned maintenance periods.
  > For more information, see Policy CSP - Update.
  > Applies to:
  > Windows
  > Configure evaluation frequency for custom compliance scripts on Windows and macOS
  > Microsoft Intune now supports configurable evaluation intervals for custom compliance scripts on managed Windows and macOS devices. You can choose intervals of 15 minutes, 30 minutes, or one to eight hours to match your compliance and operational requirements. This flexibility helps you balance compliance responsiveness with device resource use.
  > Applies to:
  > Windows
  > macOS
  > Device security
  > Get more remediation guidance in Windows Autopatch reports
  > Windows Autopatch now provides additional reporting data, remediation guidance, and guardrails for configuration issues. Administrators can use the expanded information to understand configurations that need attention and determine an appropriate next step.
  > Applies to:
  > Windows

#### Changed (1)

- **Week of October 26, 2026 (Service release 2610)** — <https://learn.microsoft.com/en-us/intune/whats-new/#week-of-october-26-2026-service-release-2610> — Windows: high
  Added:
  + Newly available protected apps for Intune
  + The following protected apps are now available for Microsoft Intune:
  + eScription One by DeliverHealth
  + Prisma Browser for Intune by Palo Alto Networks, Inc.
  + Elevate UC for Intune by Serverdata.net, Inc.
  + For more information about protected apps, see Microsoft Intune protected apps.

### intune-blog — no-change

Kind: rss · Source: https://techcommunity.microsoft.com/t5/s/gxcuf89792/rss/board?board.id=MicrosoftIntuneBlog

No new or changed items.

## Iru

### iru-updates — ok

Kind: rss · Source: https://www.iru.com/updates/rss.xml

#### New (3)

- **Managed OS for tvOS** — 2026-11-13 — <https://www.iru.com/updates/2026/11/13/managed-os-for-tvos> — Windows: none
  > Managed OS for tvOS has been updated. The latest approved version is now 27.2.1, with the following release date:

- **Deploy Apple declarations with Custom Declarations** — 2026-11-12 — <https://www.iru.com/updates/2026/11/11/deploy-apple-declarations-with-custom-declarations> — Windows: none
  > Use Apple declarative device management (DDM) configurations right away, even before there’s a dedicated Library Item for them. Paste or upload your declaration JSON in the new Custom Declarations Library Item, and Iru checks each declaration against Apple’s schemas as you type, flagging issues on the exact line. If a built-in Library Item already covers what you’re configuring, Iru points you to it. Once the item is assigned, you see the status of every declaration on every device, with Apple’s error text when one fails. Available for macOS, iOS, iPadOS, tvOS, and visionOS.

- **Iru Agent for Windows Endpoint Agent 1.26.15** — 2026-11-11 — <https://www.iru.com/updates/windows-endpoint-agent-1-26-15> — Windows: high
  > We've released Iru Agent for Windows Endpoint Agent 1.26.15

## Hexnode

### hexnode-whats-new — no-change

Kind: next-data · Source: https://www.hexnode.com/whats-new/

No new or changed items.

### hexnode-blog — ok

Kind: rss · Source: https://www.hexnode.com/blogs/feed/

#### New (10)

- **Enterprise Wearable Network Security: Managing Certificates and Trusted Networks** — 2026-11-16 — <https://www.hexnode.com/blogs/enterprise-wearable-network-security/> — Windows: none
  > Why Does Enterprise Wearable Network Security Create an Endpoint-Planning Gap?
  > Enterprise wearable network security becomes an endpoint-planning concern when organizations overlook device connectivity, authentication, and certificate requirements. Enterprise wearables include devices such as smart glasses and mixed-reality headsets used for business operations.
  > Common operational gaps include:
  > Difficult credential entry: Entering long Wi-Fi passphrases through a headset’s virtual or gesture-based input methods can slow setup. Input speed and accuracy vary depending on the interaction method and device.
  > Network access before enrollment: A headset may need network connectivity to enroll. However, an 802.1X network using EAP-TLS client-certificate authentication requires a client certificate. IT therefore needs a validated first-connect path.
  > Devices outside IT inventory: A business unit may purchase wearables independently. Consequently, IT may not know these devices exist before users connect them.
  > See our Vision Pro network access pilot guide for an example of how to address first-connect requirements during deployment.
  > What Is Enterprise Wearable Network Security?
  > Enterprise wearable network security controls which networks wearable devices can join and how they authenticate. A trusted network is an organization-approved network with defined access rules. A certificate is a digital credential that helps verify an identity through public-key cryptography.
  > A VPN establishes a…

- **Android Work Profile Creation Problems: What to Check Before Retrying** — 2026-11-13 — <https://www.hexnode.com/blogs/android-work-profile-creation-problems/> — Windows: none
  > Why does Android Work Profile creation fail during enrollment?
  > An employee begins setting up an Android Work Profile, but enrollment stops before the managed workspace becomes available. These android work profile creation problems can occur during device eligibility checks, account authentication, profile provisioning, or final enrollment confirmation.
  > However, an enrollment error rarely tells the whole story. Incompatible devices, existing management configurations, outdated Google services, or interrupted provisioning can prevent successful setup.
  > Before retrying, IT administrators must identify the enrollment model and exact failure stage. Repeating enrollment without addressing the underlying issue often reproduces the same error, delaying resolution and complicating troubleshooting.
  > What happens when Android Work Profile failures remain unresolved?
  > Unresolved Work Profile failures delay employee onboarding, prevent managed application deployment, and interrupt access to corporate resources. Repeated enrollment failures also increase help desk workloads and extend device provisioning timelines.
  > From a security perspective, incomplete enrollment may leave devices without required management configurations, application controls, or work-data separation. However, failed provisioning does not automatically indicate corporate data exposure.
  > Indiscriminate retries introduce additional risks. Unnecessary factory resets can erase locally stored information, while repeated authe…

- **MSSP Endpoint Security Baselines: Management and Detection** — 2026-11-13 — <https://www.hexnode.com/blogs/mssp-endpoint-security-baseline/> — Windows: none
  > Why do MSSPs need a defined endpoint security baseline?
  > MSSPs need consistent endpoint security requirements to manage diverse client environments without creating service-delivery gaps. Without one, MSSPs struggle to deliver consistent protection across different operating systems, device ownership models, existing security tools, and contractual requirements.
  > Each client may have different encryption policies, patching schedules, monitoring capabilities, and security priorities. Applying identical controls across every environment may be impractical, while excessive customization makes service delivery difficult to standardize.
  > A documented baseline helps MSSPs:
  > Establish common security requirements while accommodating client-specific exceptions.
  > Define minimum management controls and detection visibility.
  > Clarify provider responsibilities and monitoring expectations before expanding security services.
  > What are the risks of operating without an MSSP endpoint security baseline?
  > Without a defined endpoint security baseline, MSSPs risk inconsistent protection, delayed incident response, and gaps in service accountability across client environments.
  > According to Gatepoint Research’s 2025 endpoint management survey, only 18% of respondents reported complete visibility into all network endpoints. This highlights why MSSPs should verify endpoint coverage and monitoring gaps before committing to security service deliverables.
  > Security exposure: Inconsistent encryption, delayed pa…

- **iOS Website Allowlist Troubleshooting: Fixing Broken Workflows** — 2026-11-13 — <https://www.hexnode.com/blogs/ios-web-allowlist-dependencies/> — Windows: none
  > Why do approved websites fail under iOS web allowlists?
  > Approved websites can fail under iOS web allowlists when essential redirects or supporting domains remain restricted.
  > Consider an IT administrator who approves a business portal on supervised iPhones or iPads. The landing page loads, but authentication redirects fail, embedded resources disappear, or subsequent pages become inaccessible.
  > These iOS web allowlist dependencies extend beyond the primary website. Enterprise workflows may rely on external identity providers, redirected URLs, content delivery networks (CDNs), and application endpoints.
  > The problem arises when administrators validate only the initial URL instead of the complete workflow. Troubleshooting requires identifying legitimate dependencies without unnecessarily expanding browsing permissions.
  > What happens when iOS allowlist dependencies remain unresolved?
  > Unresolved allowlist dependencies disrupt business workflows, increase support requests, and complicate endpoint management.
  > Frontline employees using shared or dedicated iOS devices may encounter failed authentication, inaccessible portals, broken embedded content, or interrupted form submissions. These failures generate repeated helpdesk tickets and delay operational tasks.
  > Administrators may respond by broadly approving additional domains, potentially weakening browsing restrictions without verifying their necessity.
  > Repeated trial-and-error changes also consume IT resources, create inconsistent dev…

- **Android Web Filtering: Understanding URL Rules and Restrictions** — 2026-11-13 — <https://www.hexnode.com/blogs/android-web-filtering-understanding-url-rules-and-restrictions/> — Windows: none
  > Why do Android web filtering rules block more than administrators expect?
  > Android web filtering rules may block more than intended because some filtering implementations evaluate entire hostnames rather than individual URL paths.
  > An IT administrator blocks a specific webpage on a managed Android device, only to discover that the entire website becomes inaccessible. Meanwhile, blocking one subdomain may leave the parent website and sibling subdomains accessible.
  > This creates uncertainty when configuring Android web filtering url rules, particularly when administrators expect webpage-level precision.
  > Before deploying restrictions across a Samsung Knox fleet, IT teams must answer three questions:
  > How are URL paths interpreted?
  > Do subdomain restrictions affect parent domains?
  > How can administrators verify actual filtering behavior?
  > What happens when Android URL filtering rules are configured incorrectly?
  > Incorrect URL filtering rules can cause overblocking or underblocking, disrupting legitimate access or leaving intended restrictions unenforced.
  > Overblocking occurs when a restriction targeting one webpage blocks an entire hostname. Employees may lose access to business portals, technical documentation, or authentication-related resources.
  > Underblocking occurs when administrators assume a parent-domain restriction automatically covers associated subdomains. Separately hosted destinations may remain accessible despite the intended restriction.
  > Both outcomes create operational cha…

- **Android APK Update Conflicts: Common Causes and Fixes** — 2026-11-13 — <https://www.hexnode.com/blogs/android-apk-update-conflicts/> — Windows: none
  > Why do Android APK updates fail with package conflicts?
  > Android APK update conflicts occur when a replacement APK fails installation checks, even after being successfully uploaded to an enterprise app inventory. Android validates the package against the existing application before accepting an update.
  > Common causes include:
  > Signing certificate mismatches: The replacement APK uses a signing identity incompatible with the installed application.
  > Version downgrades: The replacement APK has a lower versionCode than the installed version.
  > Package identity differences: A different application ID prevents Android from recognizing the APK as an update.
  > Corrupted APK files: Damaged, incomplete, or improperly signed packages fail installation validation.
  > Successful APK upload only confirms repository acceptance, not installation compatibility. Android performs additional checks on each device, meaning an APK may deploy successfully to some endpoints while failing on others.
  > How do APK update conflicts affect enterprise app management?
  > APK update conflicts can disrupt enterprise app management in several ways:
  > Outdated applications: Failed updates delay security patches, bug fixes, and feature improvements.
  > Version inconsistencies: Different app versions complicate deployment tracking and maintenance.
  > Increased IT workload: Repeated installation failures require additional troubleshooting.
  > Potential data loss: Uninstalling applications to resolve conflicts may remove locally stored data…

- **Android Kiosk Background Apps: Balancing Access and App Visibility** — 2026-11-12 — <https://www.hexnode.com/blogs/android-kiosk-background-services/> — Windows: medium
  > Why do Android kiosk apps fail when supporting apps are hidden?
  > Android kiosk apps can fail when required supporting applications are unavailable within the restricted kiosk environment. For example, a warehouse inventory app may launch successfully but fail to process scans because a dependent utility cannot operate.
  > Native Android Screen Pinning differs from MDM-managed kiosk lockdown. Screen Pinning keeps users within a selected app but does not provide centralized control over supporting application access, launcher visibility, or persistent kiosk configuration across restarts. It does not inherently block all background inter-app communication.
  > MDM-managed kiosk policies offer more granular control over permitted applications. Managing android kiosk background services requires keeping essential dependencies accessible without exposing unnecessary launch icons or guaranteeing uninterrupted execution.
  > What happens when Android kiosk app dependencies are overlooked?
  > Overlooked dependencies can disrupt critical kiosk functions. Depending on application architecture, unavailable supporting packages may interrupt barcode scanning, payment integrations, calling workflows, or peripheral communication.
  > Repeated failures can increase helpdesk workloads, prolong device downtime, and require on-site troubleshooting across distributed deployments. Diagnosing these issues becomes harder when the primary kiosk application appears functional.
  > However, exposing every supporting applica…

- **Preparing app-deployment requests through Genie chat** — 2026-11-12 — <https://www.hexnode.com/blogs/natural-language-app-deployment/> — Windows: none
  > Why do app-deployment requests need more than a simple chat command?
  > An IT administrator needs to deploy a business application to the Sales team’s managed devices. Before proceeding, they must identify the correct application, confirm the target group, and verify deployment requirements.
  > Natural language app deployment simplifies request preparation by allowing administrators to describe deployment intent conversationally. However, instructions such as “Deploy Slack to Sales devices” leave critical details unclear, including application versions, operating systems, and deployment scope.
  > Hexnode Genie AI provides a conversational interface for preparing application deployment workflows. However, interpreting a request does not automatically make it ready for execution. Administrators must validate the application, targets, and intended action.
  > What can go wrong when deployment intent is not validated?
  > Unvalidated deployment requests can distribute incorrect applications, target unintended devices, or trigger installation failures. These mistakes disrupt users, increase troubleshooting workloads, and delay application availability.
  > Ambiguous instructions also introduce security and compliance risks. Deploying applications to unauthorized endpoints or overlooking installation prerequisites can violate organizational policies and expose devices to unnecessary risks.
  > A conversational request must therefore translate into a reviewable deployment action with clearly identified app…

- **Planning federation between Hexnode IdP and existing identity providers** — 2026-11-12 — <https://www.hexnode.com/blogs/identity-federation-migration-planning/> — Windows: none
  > Why can adding an identity provider disrupt existing access?
  > Adding an identity provider changes the trust relationships behind sign-in, so existing access requires validation. Identity federation migration planning establishes how those changes will affect users and applications.
  > Consider an IAM administrator connecting another identity platform while employees continue using business applications. The administrator must determine which system validates credentials, where MFA applies, and how identities match existing application accounts. Unclear responsibilities make authentication failures harder to diagnose.
  > Before changing the configuration, answer four questions:
  > Are the providers compatible?
  > Who authenticates users?
  > Which applications depend on the existing configuration?
  > What must user testing prove across affected user groups and workflows?
  > What happens when federation changes are poorly planned?
  > Poorly planned federation changes can lock employees out, grant incorrect access, and delay business operations. These failures can affect both the users changing sign-in methods and teams relying on their work.
  > Incorrect identity matching can create duplicate accounts, separating users from existing records or permissions. Unexpected MFA prompts increase support demand, especially when employees cannot identify which system requires authentication. Disrupted access to customer management or support applications can delay responses and service delivery.
  > Unclear ownership a…

- **MSP Pooled License Allocation: How to Plan and Allocate Licenses to Client Portals** — 2026-11-12 — <https://www.hexnode.com/blogs/msp-pooled-license-allocation/> — Windows: medium
  > What Is MSP Pooled License Allocation?
  > MSP pooled license allocation lets a managed service provider (MSP) purchase licenses at the account level. The MSP holds them in a shared pool and allocates them to individual client UEM portals.
  > UEM (Unified Endpoint Management) enables IT teams to centrally monitor, manage, and secure endpoints through a unified platform. Each client UEM portal provides a separate management environment for one customer.
  > Per-client purchasing can delay onboarding because the MSP must arrange a purchase before managing a new client’s devices.
  > Without a pool: An MSP may need to arrange a separate license purchase for each new client. Procurement lead times can delay device management.
  > With a pool: The MSP uses existing capacity. It allocates compatible licenses when creating a client UEM portal.
  > Hexnode announced platform-based licensing for Hexnode UEM MSP in its release notes on September 22, 2026. Licenses belong to the MSP account, not an individual client portal. The MSP purchases them by platform and tier, then allocates them across client portals.
  > Who Owns the License Pool in an MSP Model?
  > In Hexnode UEM MSP platform-based licensing, the MSP account owns the license pool, not an individual client UEM portal. The MSP account holds licenses purchased by platform and tier. It allocates compatible licenses to client portals.
  > This ownership model changes three aspects of license administration:
  > Purchase timing: The MSP manages purchasing centrally an…

## Miradore

### miradore-releases — ok

Kind: link-list · Source: https://www.miradore.com/knowledge/releases/

#### New (1)

- **Android user change flow rollback, Apple DDM support, Windows Update configuration profile change, Tag page updates, iPhone and iPad enrollment bug fix** — <https://www.miradore.com/knowledge/releases/android-user-change-flow-rollback-apple-ddm-support-windows-update-configuration-profile-change-tag-page-updates-iphone-and-ipad-enrollment-bug-fix/> — Windows: high
  > In this article
  > Toggle
  > Android device user change flow update rollback
  > Based on feedback, we rolled back the previous update to the user change flow for Android devices, described in our previous release note. Changing an Android device's assigned user is once again possible without removing the managed Google Play account. However, we strongly recommend wiping and re-enrolling the device to assign it to a new user instead. This ensures that all previous user data and settings are removed from the device.
  > Support for Apple declarative device management (DDM)
  > Support for Apple declarative device management (DDM) is now generally available for all devices enrolled in Miradore and running iOS 15 or later, iPadOS 15 or later, and macOS 13 or later. DDM is a modern framework that allows Apple devices to enforce configurations locally, without waiting for instructions sent by the server. With the new capability, we can introduce new features and configuration profiles for DDM-enabled devices, such as Software update settings for iOS and iPadOS, and display more accurate OS information and device inventory data. For more information on DDM, see Apple declarative device management (DDM).
  > Software update settings configuration profile for iPhone and iPad devices
  > We introduced the Software update settings configuration profile for supervised iPhone and iPad devices running iOS and iPadOS 18 or later that have DDM enabled. This configuration profile allows you to control how your manag…

## 42Gears

### 42gears-press — no-change

Kind: link-list · Source: https://www.42gears.com/press-releases

No new or changed items.

### 42gears-docs — ok

Kind: sitemap · Source: https://docs.42gears.com/suremdm/sitemap.xml

#### New (3)

- **entra sso** — 2026-11-11 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sso/entra-sso> — Windows: none
  > Entra SSO
  > SureMDM offers seamless integration with Microsoft Entra ID (formerly Azure Active Directory) Single Sign-On (SSO) using SAML 2.0, streamlining user access and strengthening security across your organization's device management environment. Users sign in to SureMDM with their existing Microsoft Entra credentials, which eliminates the need for separate login details and simplifies the sign-in experience.
  > When a user signs in through Microsoft Entra SSO for the first time, SureMDM automatically creates the user in User Management with the permissions configured for the SSO setup under Dynamic Permission Assignment.
  > Prerequisites
  > A Microsoft Entra account with the Application Administrator or Cloud Application Administrator role (or higher).
  > A SureMDM account with permission to change Account Settings. Only Account Administrators can configure SSO permissions that grant Super User privileges.
  > Your SureMDM server path.
  > The configuration is done in three steps:
  > Create the enterprise application in Microsoft Entra
  > Configure SAML Single Sign-On in the SureMDM console
  > Update Microsoft Entra with the SureMDM Assertion URL
  > Step 1: Create the enterprise application in Microsoft Entra
  > Create the application
  > Sign in to the Microsoft Entra admin center (entra.microsoft.com).
  > Navigate to Entra ID > Enterprise apps and click + New application.
  > On the Browse Microsoft Entra Gallery page, click + Create your own application.
  > Enter a friendly name for the application (for example, Su…

- **pingone sso** — 2026-11-11 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sso/pingone-sso> — Windows: none
  > PingOne SSO
  > SureMDM integrates with PingOne through SAML 2.0 Single Sign-On (SSO). Users sign in to the SureMDM console with their PingOne credentials, so they don't need separate SureMDM credentials, and administrators manage access and authentication policies centrally in PingOne.
  > When a user signs in through PingOne SSO for the first time, SureMDM automatically creates the user in User Management with the permissions configured for the SSO setup under Dynamic Permission Assignment.
  > Prerequisites
  > A PingOne account with an administrator role (for example, Environment Admin) for the environment in which the application is created. The environment must include the PingOne SSO service.
  > A SureMDM account with permission to change Account Settings. Only Account Administrators can configure SSO permissions that grant Super User privileges.
  > Your SureMDM server path.
  > For condition-based rules in Dynamic Permission Assignment, the attributes used in the rules must be mapped in the PingOne application.
  > note
  > PingOne lists URLs by Geography. The examples in this article use the Europe region. Use the domain shown in your PingOne environment. Always refer to the official Ping Identity documentation for the latest details.
  > The configuration is done in three steps:
  > Create the SAML application in PingOne
  > Configure SAML Single Sign-On in the SureMDM console
  > Update PingOne with the SureMDM Assertion URL
  > Step 1: Create the SAML application in PingOne
  > Create the application
  > Sign in to the Ping…

- **overview** — 2026-11-12 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/overview> — Windows: high
  > Shared Device Mode (SDM) - Windows
  > Shared Device Mode (SDM) for Windows allows multiple users to securely share a single Windows device while maintaining distinct user-specific policies, profiles, and configurations. Designed for frontline, shift-based, healthcare, and educational environments, Windows SDM dynamically switches profiles based on the active user upon sign-in and applies a default device profile during logged-out or transition states.
  > Prerequisites
  > Before configuring and deploying Shared Device Mode for Windows in SureMDM, verify that the following prerequisites are met:
  > Supported Operating System: Devices running Windows 10 or Windows 11.
  > Enrollment Type: Devices must be enrolled using Dual Enrollment.
  > Agent Version: SureMDM agent version 6.34.0 or later
  > Subscription Tier:
  > Premium and Enterprise Tier accounts.
  > SureIdP (42Gears In-House IdP) license would be required if Shared Device User Name is set as device property condition for profile deployment.

#### Changed (12 shown of 18)

- **adfs sso** — lastmod 2026-09-11 → 2026-11-11 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sso/adfs-sso> — Windows: none
  Added:
  + ADFS SSO
  + ADFS SSO is an advanced authentication method that enables users to access multiple applications and services using a single set of credentials. Instead of juggling numerous login details, users can authenticate once and seamlessly navigate through different resources without the hassle of repeated logins. For Active directory, ADFS role needs to be installed on the AD server.
  + Configure SSO in SureMDM
  + To configure SSO with ADFS, follow these steps:
  + note
  + Login to the SureMDM Web Console as a Superuser.
  + Navigate to SureMDM Web Console > Settings > Account Settings > Enterprise Integrations > SAML Single Sign-On.
  + Configure Single Sign-On settings for ADFS.
  + SettingsDescription
  + Enable Single Sign-On
  + Select this option to allow configuring Single Sign-On settings.
  + Select Identity Provider (IdP)
  + Select ADFS.
  + Service Identifier
  + Enter the Service Identifier URL. See how to obtain Federation Service Identifier URL.
  + Sign On Service Url
  + Enter the URL for the Sign On Service URL. See how to obtain ADFS Service URL.
  + Logout Service Url
  + Enter the URL for logout.
  + *Note: Generally, the URLs for the Sign On Service Url and Logout Service Url will be the same.*
  + Click Generate Certificate to generate a self-signed certificate on the server and make it ready for download.
  + Click Upload Certificate to upload another certificate.
  + These options are available when no certificate is uploaded.
  + Click Delete Certificate or Download Certificate to delete or download the already uploaded self-signed certificate.
  + Under the Dynamic Permission Assignment section, please click Add to Configure the Settings:
  + SettingsValues
  + Attribute
  + Under the Role Configuration, define the Attribute Name as Group. This will refer to the group attribute of the user. For steps on how to add Attributes, please click here (e.g., Attribute: Engineering, Value: QA).
  + Condition
  + Select the conditions from the dropdown:
  + 1. Contain
  + 2. Equals
  + 3. In
  + Note: The condition field defines how SureMDM matches the attribute value received from the SSO provider with the value specified in the rule.
  + Value
  + Provide the value that the group name must match (e.g., “Admin”, “Manager”, or any other relevant group identifier). The system will look for this value within the user’s group attribute to determine if the role should be assigned.
  + Roles
  + Specify the roles that should be dynamically assigned to the user when the Group attribute matches the specified value. For example, if the group contains "Admin", assign the Administrator role, or if the group contains "Manager", assign the Manager role. To know more, see Configure Permissions for Role-Based Admin.
  + Device Group Set
  + Choose an option for Device Group Set from the drop-down menu. To know more, see Configure Permissions for Device Group Set Based Admin.
  + … 11 more added lines

- **gsuite sso** — lastmod 2026-09-11 → 2026-11-11 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sso/gsuite-sso> — Windows: none
  Added:
  + Google Workspace (formerly G Suite) SSO
  + SureMDM integrates with Google Workspace (formerly G Suite) through SAML 2.0 Single Sign-On (SSO). Users sign in to the SureMDM console with their Google Workspace credentials, so they don't need separate SureMDM credentials, and administrators manage access centrally in Google Workspace.
  + When a user signs in through Google Workspace SSO for the first time, SureMDM automatically creates the user in User Management with the permissions configured for the SSO setup under Dynamic Permission Assignment.
  + Prerequisites
  + A Google Workspace account with super administrator access to the Google Admin console.
  + A SureMDM account with permission to change Account Settings. Only Account Administrators can configure SSO permissions that grant Super User privileges.
  + Your SureMDM server path.
  + For condition-based rules in Dynamic Permission Assignment, the attributes used in the rules must be mapped in the Google Admin console.
  + The configuration is done in three steps:
  + Create the custom SAML app in the Google Admin Console
  + Configure SAML Single Sign-On in the SureMDM Console
  + Update the Google Admin console with the SureMDM Assertion URL
  + Step 1: Create the custom SAML app in Google Admin console
  + Create the application
  + Sign in to the Google Admin console (admin.google.com) with a super administrator account.
  + Navigate to Apps > Web and mobile apps.
  + Click Add app > Add custom SAML app.
  + On the App details page, enter any friendly name for the application (for example, SureMDM SSO) and click Continue.
  + Copy the Google values and download the certificate
  + On the Google Identity Provider details page, under Option 2, copy the following values. You will paste them into SureMDM in Step 2.
  + SSO URL
  + Entity ID
  + Click Download certificate, then click Continue. Please refer to the Screenshot below:
  + Configure Service provider details
  + On the Service provider details page, enter the following values:
  + FieldValue
  + ACS URL
  + https://<SureMDM Server Path>/console/ssoconsumer/<Encrypted Account ID>
  + urn:42gears:suremdm:SAML2ServiceProvider
  + Name ID format
  + EMAIL
  + Name ID
  + Basic Information > Primary email
  + Leave Start URL empty and Signed response unchecked.
  + Click Continue.
  + note
  + In the ACS URL, <SureMDM Server Path> is the SureMDM console URL & <Encrypted Account ID> is the encrypted Account ID.
  + The Encrypted Account ID is generated by SureMDM only after the SAML Single Sign-On settings are saved (Step 2). Google Admin console requires an ACS URL before you can continue, so for now enter your SureMDM Account ID as a placeholder in place of the Encrypted Account ID. You will replace it with the actual URL in Step 3.
  + Configure Attribute mapping
  + On the Attribute mapping page, you can either add attribute mappings now or leave this page empty. Mappings can also be added later from the app's SAML attribute mapping section (refer to Add attribute mapping in Google Admin console).
  + … 11 more added lines

- **okta sso** — lastmod 2026-10-26 → 2026-11-11 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sso/okta-sso> — Windows: none
  (changed; no line-level detail)

- **onelogin sso** — lastmod 2026-09-11 → 2026-11-11 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sso/onelogin-sso> — Windows: none
  Added:
  + OneLogin SSO
  + OneLogin SSO offers a seamless and secure way for users to access various applications with just one set of login credentials, enhancing both the user experience and organizational security. OneLogin SSO simplifies the login process by enabling users to access multiple applications, both web-based and on-premises, without needing to remember different usernames and passwords for each one.
  + Configure Settings in OneLogin Server
  + To configure settings in the OneLogin server, follow these steps:
  + Login to the Onelogin server > Apps > Add Apps.
  + On the Search tab, search for SAML Application.
  + Select SAML Test Connector (Idp).
  + Create a new app with the display name as SureMDM and click Save.
  + Navigate to the Configuration tab and enter the following details:
  + Relay State: \<BLANK>
  + Audience urn: 42gears:suremdm:SAML2ServiceProvider
  + Recipient: https:// (SureMDM Server Path)/console/ssoconsumer/(Encrypted MDM Account ID)
  + ACS (Consumer) URL Validator: https:// (SureMDM Server Path)/console/ssoconsumer/(Encrypted MDM Account ID)
  + ACS (Consumer) URL*: https:// (SureMDM Server Path)/console/ssoconsumer/(Encrypted MDM Account ID)
  + Single Logout URL: https:// (SureMDM Server Path)/console/ssoconsumer/(Encrypted MDM Account ID)
  + note
  + Admin should enter their SureMDM Server Path and Account ID into the above-mentioned URL.
  + To get the encrypted account ID, follow these steps:
  + Navigate to the SureMDM Console > Account Settings > Enterprise Integrations > SAML Single Sign-On.
  + On the SAML Single Sign-On screen, locate the Assertion URL to get the Encrypted Account ID.
  + Select the SSO tab and change the SAML Signature Algorithm to SHA -256 and click Save.
  + Download SAML Metadata from the More Actions section present at the top of the page. A certificate will be downloaded.
  + Configure Settings in SureMDM Web Console (OneLogin)
  + To configure SSO settings in SureMDM Web Console, follow these steps:
  + Log into SureMDM Web Console as a Superuser.
  + Navigate to SureMDM Web Console > Settings (icon located at the top right of the screen) > Account Settings > Enterprise Integrations > SAML Single Sign-On.
  + Configure Single Sign-On settings for OneLogin.
  + SettingsDescription
  + Enable Single Sign-On
  + Select this option to allow configuring Single Sign-On settings.
  + Select Identity Provider (IdP)
  + Select OneLogin.
  + Service Identifier
  + Enter the Service Identifier.
  + This value is present under EntityDescriptor > IDPSSODescriptor > SingleSignOnService (node with HTTP-Redirect binding) > Location
  + Fetch these values from the certificate downloaded in step no.7, Configure settings in onelogin server.
  + For example: https://app.onelogin.com/saml/metadata/651423
  + Sign On Service Url
  + Enter the Service Identifier Url. This value is present under the EntityDescriptor tag, entityID property of your metadata XML file.
  + For example: Example: https://42g.onelogin.com/trust/saml2/http-redirect/sso/651423
  + … 13 more added lines

- **profile windows** — lastmod 2026-11-06 → 2026-11-11 — <https://docs.42gears.com/suremdm/integrations/integration-guides/sureaccess/sureaccess-profile-configuration/profile-windows> — Windows: high
  (changed; no line-level detail)

- **honeywell printer enrollment** — lastmod 2026-11-06 → 2026-11-11 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/honeywell-printer-enrollment> — Windows: none
  Added:
  + a. MQTT Broker hostname - The domain name or IP address of the MQTT broker that client devices use to establish a connection and exchange MQTT messages. The values vary by region:
  + If your SureMDM URL is dns.suremdm.io (US), use mqttbrokerusdns.suremdm.io.
  + If your SureMDM URL is dns.eu.suremdm.io (EU), use mqttbrokereu.eu.suremdm.io.
  + If your SureMDM URL is dns.in.suremdm.io (IN), use mqttbrokerin.in.suremdm.io.
  + If your SureMDM URL is dns.eu2.suremdm.io (EU2), use mqttbrokereu.eu2.suremdm.io.
  + If your SureMDM URL is dns.me.suremdm.io (ME), use mqttbrokerme.me.suremdm.io.
  + If your SureMDM URL is suremdm.42gears.com (US Master), use mqttbrokerusmaster.42gears.com.
  + b. MQTT Port - The network port used to establish communication between the device and the MQTT broker.
  + The value is the same in all regions: 8883.
  + c. MQTT Tenant ID - The identifier used to associate the device with a specific tenant or environment.
  + The value is the SureMDM account ID.
  + Navigate to Settings in the top right corner of the SureMDM console to get the Account ID.
  + d. MQTT Username - The username used to authenticate with the MQTT broker.
  + The value is the SureMDM account ID where the device should be enrolled.
  + e. MQTT User Password - The password used to authenticate with the MQTT broker.
  + The value is the MQTT Gateway password.
  + The Gateway Password can be copied from the Enable Things Gateway section.
  + Navigate to System Settings >> Manage Services >> MQTT Agent, then disable the MQTT Agent (if already enabled) and re-enable it to apply the configuration changes.
  + If valid values are entered, the Honeywell printers should be successfully enrolled in the SureMDM Console.
  + If any changes are made to the MQTT Agent configuration, the MQTT Agent must be disabled and then re-enabled to ensure the updated settings are applied.
  Removed:
  - a. MQTT Broker hostname - It is the domain name or IP address of the MQTT broker that client devices use to establish a connection and exchange MQTT messages.
  - The values vary based on the region as follows:
  - <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class="token plain"> - If your SureMDM URL is [dns.suremdm.io](http://dns.suremdm.io/) (US), then use the server…
  - b. MQTT Port- It is the network port used to establish communication between the device and the MQTT broker.
  - <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class="token plain">- The values are the same for all regions, i.e., 8883</span><br></span></code>
  - c. MQTT Tenant ID- Identifier used to associate the device with a specific tenant/environment.
  - <code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#bfc7d5"><span class…

- **printronix printer enrollment** — lastmod 2026-11-06 → 2026-11-11 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/printronix-printer-enrollment> — Windows: none
  Added:
  + Printronix Auto ID Printer Enrollment
  + 42Gears has integrated Printronix Auto ID Printers with SureMDM to streamline printer management and boost operational efficiency. This integration allows IT administrators to remotely enroll, configure, and monitor Printronix Auto ID Printers through a centralized SureMDM console. With enhanced visibility and control, businesses can reduce manual intervention, ensure consistent printer performan…
  + Enroll Printronix Auto ID Printer in SureMDM
  + To enroll the Printronix Auto ID Printer in the SureMDM Console, follow these steps:
  + Prerequisites
  + Configure Enable Things Gateway in the SureMDM Console.
  + The host machine and printer should be connected to the same local network via Ethernet or Wi-Fi.
  + Steps:
  + Obtain the IP address from the printer display or by navigating to Settings > Network > Ethernet > IP Address.
  + Run this IP address in a browser to open the Printronix tool.
  + note
  + Omit any leading zeros in the IP address.
  + Login with your previously entered credentials or with the default credentials(if asked).
  + The default username is root, and a password is not required.
  + In the Administration page, navigate to the System Administration section and enable the NTP and MQTT checkboxes, and click on the Submit button at the bottom of the page.
  + Back in the displayed menu, choose Network to configure the printer to synchronize with a network time server by scrolling down to the NTP section and entering either the URL or IP address of the time server you wish to use in the “Static NTP server 1”.
  + Example: time.google.com
  + Configure a second or third server, if desired. Enter the appropriate time zone offset from UTC and click on the Submit button at the bottom of the page.
  + Navigate back to the Configuration page, click on MQTT and enter the below configuration details and click on Submit to save the settings.
  + Connect - Option to initiate the connection to the MQTT broker.
  + Enable the TLS and Autoconnect checkbox.
  + Server - The broker URL that allows the printer to communicate with SureMDM for centralized control, configuration sync, or data exchange. Values vary by region:
  + If your SureMDM URL is dns.suremdm.io (US), use mqttbrokerusdns.suremdm.io.
  + If your SureMDM URL is dns.eu.suremdm.io (EU), use mqttbrokereu.eu.suremdm.io.
  + If your SureMDM URL is dns.in.suremdm.io (IN), use mqttbrokerin.in.suremdm.io.
  + If your SureMDM URL is dns.eu2.suremdm.io (EU2), use mqttbrokereu.eu2.suremdm.io.
  + If your SureMDM URL is dns.me.suremdm.io (ME), use mqttbrokerme.me.suremdm.io.
  + If your SureMDM URL is suremdm.42gears.com (US Master), use mqttbrokerusmaster.42gears.com.
  + Topic - The communication channel or subject identifier used in MQTT. The value is printronix (all lowercase) in every region.
  + Port - The network port used by Printronix Auto ID printers to communicate with the MQTT broker.
  + The value is 8883 in every region.
  + Tenant ID - The SureMDM Account ID where the device will be enrolled.
  + Navigate to Settings in the top-right corner of the SureMDM console to get the Account ID.
  + MQTT Username - The credential used by the printer to connect securely to an MQTT broker or server.
  + Format: iot-<Account_id>.
  + For example, if your SureMDM account ID is 1234554321, the MQTT username is iot-1234554321.
  + MQTT Password - The Gateway password used to connect Printronix Auto ID printers to the SureMDM console.
  + Leave File Store Password and Private Key Password empty.
  + Note the Agent ID to identify the printer in the SureMDM console.
  + Copy the Gateway Password from Account Settings > Things Management > Enable Things Gateway.
  + … 3 more added lines

- **tsc printer enrollment** — lastmod 2026-11-06 → 2026-11-11 — <https://docs.42gears.com/suremdm/things-device/things-manage/things-device-enrollment/tsc-printer-enrollment> — Windows: none
  Added:
  + TSC Auto ID Printer Enrollment
  + 42Gears has integrated TSC Auto ID printers with SureMDM to simplify device management and improve operational efficiency. Through this integration, IT teams can centrally enroll, configure, and monitor TSC printers from the SureMDM console. By enabling streamlined control and real-time visibility, enterprises can minimize manual effort, ensure reliable performance, and optimize printer deploymen…
  + Enroll TSC Auto ID Printer to SureMDM
  + To enroll the TSC Auto ID Printers in SureMDM Console, follow these steps:
  + Prerequisites
  + Enable Things Gateway in the SureMDM Console.
  + The host machine and TSC Auto ID printer should be connected to the same network.
  + Steps:
  + Obtain the IP address from the printer by navigating to Menu > Interface > Ethernet > Status > IP Address
  + Run this IP address in a browser to open the TSC tool and Login with the credentials.
  + note
  + The credentials vary for each printer and has to be configured by the customer at the initial setup.
  + On the TSC web page, Click on Tool and navigate to File Manager. In the Upload file dropdown select Flash and choose the CA Certificate file from the system and click on Upload.
  + Click on Function and navigate to the MQTT Settings and enter the below configuration details and click on Set.
  + Server - The URL that allows the printer to communicate with external systems for centralized control, configuration sync, or data exchange. Values vary by region:
  + If your SureMDM URL is dns.suremdm.io (US), use mqttbrokerusdns.suremdm.io.
  + If your SureMDM URL is dns.eu.suremdm.io (EU), use mqttbrokereu.eu.suremdm.io.
  + If your SureMDM URL is dns.in.suremdm.io (IN), use mqttbrokerin.in.suremdm.io.
  + If your SureMDM URL is dns.eu2.suremdm.io (EU2), use mqttbrokereu.eu2.suremdm.io.
  + If your SureMDM URL is dns.me.suremdm.io (ME), use mqttbrokerme.me.suremdm.io.
  + If your SureMDM URL is suremdm.42gears.com (US Master), use mqttbrokerusmaster.42gears.com.
  + MQTT Server Port - The network port used by TSC printers to communicate with the MQTT broker.
  + The value is the same in all regions: 8883.
  + MQTT Username - The credential used by the printer to connect securely to the MQTT broker.
  + Format: iot-<Account_id>.
  + Navigate to Settings in the top-right corner of the SureMDM console to get the Account ID.
  + MQTT Password - The password used to connect TSC printers to the SureMDM console.
  + The Gateway Password can be copied from the Enable Things Gateway section.
  + MQTT Secured - Indicates that the MQTT connection is protected using TLS.
  + Select TLS.
  + MQTT CA - The Certificate Authority (CA) certificate used to verify the MQTT broker's certificate when establishing a secure TLS connection.
  + Enter the CA certificate name exactly as it was uploaded in Step 3.
  + Navigate to Enrollment > Manual Enrollment > Things > TSC Auto ID Printer in the SureMDM console to download the MQTT CA Certificate.
  + File Store CA - The CA certificate stored locally for the MQTT client to reference during certificate validation.
  + Enter 42gcert.pem.
  + Navigate to Enrollment > Manual Enrollment > Things > TSC Auto ID Printer in the SureMDM console to download the File Store CA Certificate.
  + Tenant ID - The SureMDM Account ID where the device will be enrolled.
  + Topic Prefix - The communication channel or subject identifier used in MQTT.
  + The value is the same in all regions: tsc.
  + If valid details are entered, the TSC Auto ID printers will be successfully enrolled in the SureMDM console.

- **enabling shared device mode** — lastmod 2026-11-06 → 2026-11-12 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/enabling-shared-device-mode> — Windows: high
  Added:
  + Enabling Shared Device Mode in Account Settings
  + To configure Shared Device Mode for Windows at the account level, navigate to Account Settings > Shared Device Mode > Windows
  + Click Configure under the Windows section.
  + Select the Enable Shared Device Mode (SDM) checkbox.
  + Once enabled, the administrators must configure the following sections under Profile Mapping in order to enable the Shared Device Mode for windows platform after creating the device/user based profiles:
  + Default Profile for Shared Device Mode
  + Profile Assignment based on Device Properties
  + info
  + Once Shared Device Mode is enabled, create both an SDM Device-Based Profile and an SDM User-Based Profile. Map the Device-Based Profile under Default Profile for Shared Device Mode and the User-Based Profile under Profile Assignment Based on Device and User Properties, respectively.
  + To complete the Shared Device Mode setup, deploy the Shared Device Mode job to the devices after completing the configuration in this section.
  + Windows Shared Device Mode Setup Workflow
  + Shared Device Mode (SDM) implementation follows a 4-step sequence. Each step depends on the completion of the previous one.
  + Configuration Sequence
  + Step 1: Enable SDM in Account Settings
  + Navigate to Account Settings > Shared Device Mode > Windows.
  + Select Configure and check Enable Shared Device Mode.
  + Select Save at the bottom of the section to activate SDM for the account.
  + note
  + Enabling and saving Shared Device Mode (SDM) in Account Settings is mandatory-until it is saved at the account level, the option to build Shared Device Mode profiles in the Profiles section remains locked.
  + Step 2: Create Shared Device Mode Profiles
  + Navigate to Profiles > Windows > + New Profile.
  + Select Shared Device Mode Profile.
  + Use the SDM - Device Profile toggle switch inside the profile builder to create both required scopes:
  + Device Profile (Toggle ON): Create a Windows Profile (SDM - Device Profile) containing baseline system payloads.
  + User Profile (Toggle OFF): Create a Windows Profile (SDM - User Profile) containing session-specific user payloads.
  + Save both profiles.
  + Step 3: Return to Account Settings to Map Profiles
  + Return to Account Settings > Shared Device Mode > Windows to link your created profiles:
  + Default Profile: Select Apply Default Profile and assign your Windows Profile (SDM - Device Profile).
  + User Profiles: Under Profile Assignment based on Device Properties, select + Add to map your Windows Profile (SDM - User Profile) options using property rules (Device Name, Group Path, or Shared Device User Name).
  + Select Save.
  + Step 4: Deploy Shared Device Mode Job
  + Navigate to Jobs > Windows > New Job > Shared Device Mode (SDM).
  + Enter a Job Name and set Action Type to Enable Shared Device Mode.
  + Save and deploy the job to target devices or device groups.

- **job deployment and device monitoring** — lastmod 2026-11-06 → 2026-11-12 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/job-deployment-and-device-monitoring> — Windows: high
  Added:
  + Deploying SDM Jobs
  + Once Shared Device Mode (SDM) is enabled in Account Settings and both Device and User profiles have been created and mapped, deploy the Shared Device Mode (SDM) job to enforce the configuration on your target Windows devices.
  + Deploying Shared Device Mode Jobs
  + You can enable or disable Shared Device Mode (SDM) on target Windows devices or device groups using static jobs. Alternatively, you can use a dynamic job to disable SDM directly on individual devices.
  + Method 1: Create and Apply a Static Job
  + Navigate to SureMDM Console > Jobs > New Job > Windows > Shared Device Mode (SDM).
  + In the configuration window, specify the required settings:
  + FieldConfiguration & Description
  + Job Name
  + Enter a unique name for the job .
  + Action Type
  + Select the operational state to enforce:
  + • Enable Shared Device Mode: Activates SDM on the device. Once deployed, the SureMDM Agent evaluates local user sign-ins and dynamically applies mapped SDM User Profiles upon authentication.
  + • Disable Shared Device Mode: Turns off SDM on the device and removes active SDM profiles.
  + Select Profile
  + (Required only when disabling SDM) Select a standard Device Management Profile to automatically apply once SDM is deactivated.
  + Select Save. The job will appear in the Jobs List.
  + Return to the Home tab and select the target Windows device(s) or device group(s).
  + Select Apply from the top toolbar to launch the Apply Job/Profile To Device prompt.
  + Select your created SDM job and click Apply.
  + Method 2: Disable SDM Using a Dynamic Job
  + To disable Shared Device Mode directly on a specific Windows device:
  + Navigate to Home > Device Grid and select the target Windows device.
  + Select More > Shared Device Mode (SDM) from the action menu.
  + (Optional) Configure the required Profile by selecting a standard Device Management Profile to apply after SDM is deactivated..
  + Click Apply to push the dynamic job immediately.
  + Device Monitoring & Activity Tracking
  + SureMDM provides real-time visibility into active user sessions and historical sign-in audit logs for all SDM-enabled devices.
  + Device Grid Indicators
  + When Shared Device Mode is active, the main device console grid updates with the following indicators:
  + Shared Device User Name: Displays the username of the currently signed-in SureIdP user in real time. If the device is offline during user switching, the SureMDM Agent queues the login event and updates the console upon the next connection.
  + Enrollment Mode: Reflects Dual Enrollment (Shared Device Mode) when SDM is active. When SDM is disabled, this reverts to Dual Enrolled.
  + System Tag: Automatically attaches the system tag Shared_Device_Mode_Win (SDM) to the device record.
  + User Accounts & SDM Activity Interface
  + To view real-time and historical user session logs:
  + Select an SDM-enabled device from the Device Grid.
  + Access User Accounts dynamic job using either of the following methods:
  + From the Device Info Panel, click User Accounts.
  + Alternatively, select the device and click on User Accounts dynamic job.
  + Navigate to Shared Device Mode tab.
  + … 1 more added lines

- **profile mapping** — lastmod 2026-11-06 → 2026-11-12 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/profile-mapping> — Windows: high
  Added:
  + Profile Mapping
  + Once the Default Device Profile and User profile are created in the Profile section, it is time to map those profile. The profile must be configured for Shared Device Mode (SDM) to ensure it is applied to the device in both logged-in and logged-out states.
  + Return to Account Settings > Shared Device Mode > Windows to link your created profiles.
  + Steps to Configure Profile Mapping
  + In the Profile Mapping section, configure the Profile for Shared Device Mode which would be applied:
  + When Shared Device Mode is enabled
  + When the user logs out
  + When the user logs in
  + Profile Mapping Configuration
  + Profile Mapping dictates which profiles are applied when a device is in a default/logged-out state and which profiles are dynamically applied when a user signs in.
  + Overview
  + When a device logged out, SureMDM enforces a baseline SDM Device Profile. Upon user authentication via SureIdP, the system evaluates profile mapping rules sequentially from top to bottom to assign the appropriate SDM User Profile.
  + 1. Default Profile for Shared Device Mode
  + The Default SDM Profile is mandatory and persists on the device whenever SDM is active, serving as the baseline configuration regardless of user sign-in status.
  + Navigate to the Default Profile for Shared Device Mode section and select Apply Default Profile.
  + In the selection window, pick a profile of type Windows Profile (SDM - Device Profile).
  + Once selected, the profile name displayed as a tag pill.
  + note
  + Only one default profile can be assigned to an account. The Apply Default Profile selection button remains inactive until the existing entry is removed.
  + 2. Post-Login Dynamic Profile Mapping Rules
  + Under Profile Assignment based on Device Properties, define the dynamic assignment rules based on user identity or device criteria.
  + Step 1: Add Mapping Rule
  + Select + Add to open the Add Profile Mapping window.
  + Provide a unique Mapping Name.
  + Set Mapping Type to Device Properties.
  + Step 2: Configure Rule Conditions
  + Configure rule parameters using the supported options below:
  + Device PropertiesSupported ConditionsValue Definition
  + Device Name
  + Contains, Does not Contain, Equals, Not Equals to
  + Enter the Value that would be used for comparison.
  + Group Path
  + Enter group path string(s).
  + Shared Device User Name
  + Equals (Strictly enforced)
  + Select specific SureIdP users via the + Add SureIdP Users directory selection screen.
  + Step 3: Profile Assignment
  + (Optional) Add Mapping Configuration: Add multiple conditions within a single rule entry by clicking Add Mapping Configuration. Use the AND / OR toggle to define how the conditions should be evaluated.
  + Select Profile: Select a profile type created as Windows Profile (SDM - User Profile) by clicking on Add Profile option.
  + Important
  + … 13 more added lines

- **sdm profile creation** — lastmod 2026-11-06 → 2026-11-12 — <https://docs.42gears.com/suremdm/windows-desktop/windows-desktop-manage/shared-device-mode/sdm-profile-creation> — Windows: high
  Added:
  + Shared Device Mode Profiles Creation
  + Windows Shared Device Mode (SDM) introduces specialized profile scopes with controlled payload availability to maintain system security while enabling dynamic user-session switching.
  + info
  + The option to create Shared Device Mode profiles is locked by default. Administrators must enable and save the configuration under Account Settings > Shared Device Mode > Windows to unlock the option.
  + Profile Scopes & Creation Types
  + When navigating to Profiles > Windows > + New Profile, choose between two primary profile scopes:
  + Device Management Profile: Creates a management profile with access to all available Windows payload for configuring and managing devices.
  + Shared Device Mode Profile: Specialized profile optimized for shared device architecture.
  + Within the Shared Device Mode Profile section, use the SDM - Device Profile toggle switch to define the payload target scope:
  + Toggle ON (Windows Profile (SDM - Device Profile)): Enforces global system baseline policies that persist on the device regardless of sign-in status (e.g., logged-out, or transition states).
  + Toggle OFF (Windows Profile (SDM - User Profile)): Configures session-specific policies that dynamically apply when a matching user signs in and are automatically stripped upon user log-out.
  + Payload Scope Distribution Matrix
  + Payloads are strictly partitioned between Device and User profile types to guarantee policy stability across session changes.
  + Payload ScopeTarget Profile TypeAvailable Payloads
  + User Profile Payloads (Dynamic / Session-Specific)
  + Windows Profile (SDM - User Profile)
  + • Restriction Policy
  + • VPN
  + • Certificate Management (Wildcards and CA server retrieval are not supported; only manual certificate upload is supported)
  + • Custom Settings
  + • USB Media Control
  + • Kiosk Profile
  + • Custom ADMX
  + • Browser Management
  + • App Locker
  + Device Profile Payloads (Baseline / Persistent)
  + Windows Profile (SDM - Device Profile)
  + • Password Policy
  + • Application Policy
  + • Branding Configuration
  + • Wi-Fi Configuration
  + • File Sharing Policy
  + • App Uninstall Policy
  + • Windows Hello
  + • Firewall Policy
  + • Defender Profile
  + • Licensing Profile

## Jamf

### jamf-pro-release-notes — ok

Kind: jamf-khub · Source: https://learn.jamf.com

#### New (14)

- **New Features and Enhancements > OIDC-Based Single Sign-On for End Users — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/OIDC-based_single_sign-on_for_end_users> — Windows: none
  > You can now use OIDC-based single sign-on (SSO) for the following end user workflows:
  > Enrollment —Users authenticate with their SSO credentials during Automated Device Enrollment and Device Enrollment (also known as "user-initiated enrollment").
  > Sign in for Self Service+ for mobile —Users sign in to the application with their SSO credentials.
  > Configuring SSO for these workflows allows you to streamline the user experience for end users by allowing them to use the same set of credentials across multiple applications. For organizations currently using SAML-based SSO, switching to OIDC-based SSO improves security and modernizes your authentication architecture.
  > Configure both workflows in Jamf Pro on the OIDC tab of Single sign-on settings. OIDC-based single sign-on works with any OIDC-compliant identity provider. Support for Self Service+ for macOS will be added in a future release of Jamf Pro.
  > For instructions, see the OIDC-Based SSO Integrations in Jamf Pro for End Users article.

- **New Features and Enhancements > Device Compliance Details in Inventory Information — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/device_compliance_details_category> — Windows: none
  > In Jamf Pro environments integrated with device compliance, a Device compliance details category has been added to computer and mobile device inventory records. This category displays the compliance status and applicable status for the device, the time of its last compliance sync, and whether or not the device is in a grace period (if configured).
  > A Reset registration button is also included in the Device compliance details view, which can be used to return a device to a not registered state. This provides a convenient way to troubleshoot device compliance issues on individual devices.
  > For more information, see the following pages of the Jamf Pro Documentation:
  > Computer Inventory and Criteria Reference
  > Mobile Device Inventory and Criteria Reference

- **New Features and Enhancements > Grace Period Settings for Device Compliance — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/grace_period_device_compliance> — Windows: none
  > Grace period settings have been added for Jamf Pro environments integrated with device compliance, allowing you to enable and configure the length of a grace period for devices that fall out of compliance. When devices are in the grace period, Jamf Pro postpones reporting their non-compliant status to Microsoft Entra ID. This allows time for them to be brought back into compliance before they lose access to company resources.
  > A corresponding "In Grace Period" smart group criteria has also been added to Jamf Pro, which allows administrators to easily identify devices that require attention and take remediation steps.
  > To configure the grace period for devices, navigate to Settings > Global > Device compliance. Then, select the Enable Grace Period checkbox and set the length of time Jamf Pro should wait before sending non-compliant status to Entra ID. The grace period can be configured for any amount of time between 1 hour and 30 days. You can then build a smart group with the corresponding "In Grace Period" criteria to scope remediation actions to affected devices, such as policies or configuration profiles.
  > For more information, see the following pages of the Device Compliance with Microsoft Entra and Jamf Pro technical paper:
  > Monitoring for Non-Compliant Computers
  > Monitoring for Non-Compliant Mobile Devices

- **New Features and Enhancements > Action Log for Destructive Device Actions — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/action_log_destructive_actions> — Windows: none
  > Jamf Pro now records lock, wipe, unmanage, and delete actions on computers and mobile devices in a new action log in the Event Logs settings page. Each entry shows who initiated the action, when it was initiated, what it targeted, and how many devices it affected. Statuses are updated as devices respond, and you can open a per-device breakdown to see exactly where a command succeeded or failed. This gives you a convenient way to audit high-impact actions across your environment.
  > Note:The action log currently shows destructive actions only, and its scope may expand in future releases. Viewing it requires the "View Event Logs" privilege.
  > To view the action log, navigate to Settings > Global > Event Logs, and then click the Action Log tab.
  > For more information, see Event Logs in the Jamf Pro Documentation.

- **New Features and Enhancements > Select Platform Features Available for Local Jamf Pro Accounts — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Select_Platform_features_now_available_for_Local_Accounts_in_Jamf_Pro> — Windows: none
  > Note:
  > This feature is being gradually enabled across Jamf Cloud-hosted environments and may not be immediately available to all tenants.
  > Starting with Jamf Pro 11.34.0, Jamf is enabling access to blueprints and compliance benchmarks for local Jamf Pro accounts on instances that do not have any form of single sign-on (SSO) configured. Previously, administrators could access these features only by signing in with a platform authentication method, such as Jamf ID or OIDC-based SSO through Jamf Account. This change expands access without changing how administrators sign in.
  > When Jamf enables this for your Jamf Pro tenant on version 11.34.0 or later, signing in to Jamf Pro with a local administrator account gives that account partial platform status. This change does not affect the Jamf Pro login experience or account management. Directory service accounts, legacy SAML accounts, and API accounts are unaffected. Local accounts can only sign in to the Jamf Pro instance where they were created and must have the Administrator privilege set to access blueprints and compliance benchmarks.
  > Note:
  > Local Jamf Pro accounts remain deprecated, with an estimated removal date in late 2027. To use all platform features and improve security, Jamf recommends configuring a platform authentication method such as Jamf ID or OIDC-based SSO through Jamf Account. For more information, see OIDC-Based Single Sign-On (SSO) with Jamf Account in the Jamf Account Documentation.

- **New Features and Enhancements > PreStage Enrollment Settings — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/PreStage_Enrollment_Settings> — Windows: none
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

- **New Features and Enhancements > Other Changes and Improvements — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Other_Changes_and_Improvements> — Windows: none
  > The operating system on tvOS and visionOS devices can now be updated using declarative device management with the Download and schedule to install action in managed software updates.
  > When viewing computer or mobile device apps in Jamf Pro, the "Total Purchased" column now shows "Unlimited" for free App Store apps.

- **New Features and Enhancements > Jamf Platform Services and Capabilities Resources — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Jamf_Platform_Services_and_Capabilities_Resources> — Windows: none
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

- **New Features and Enhancements > Further Considerations — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Further_Considerations> — Windows: none
  > See the latest Jamf Pro Release Notes Video for a brief overview of new features and enhancements.
  > Known issues for Jamf Pro can be accessed from the Jamf Account portal.
  > For non-administrator Jamf Pro user accounts, privileges associated with new features in Jamf Pro are disabled by default. If you have Custom privilege configurations for user accounts or groups in your environment, a Jamf Pro user account with Administrator privileges must manually enable new feature privileges for each user or group with Custom privileges.
  > Jamf recommends clearing your browser's cache after upgrading Jamf Pro to ensure that the Jamf Pro interface displays correctly.
  > See the Jamf Pro API Changelog for a list of new, deprecated, and removed endpoints.

- **Important Notices > OS 27 Software Update Deprecations and Affected Jamf Pro Features — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/OS_27_Software_Update_Deprecations_for_Jamf_Pro> — Windows: none
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

- **Important Notices > Changes to Microsoft's Baseline Scope Enforcement for Device Compliance with Jamf Pro — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Changes_to_Microsofts_Baseline_Scope_Enforcement_for_Device_Compliance_with_Jamf_Pro> — Windows: none
  > If your organization uses the Jamf device compliance integration, it may have recently been impacted by the change to baseline scope enforcement, described in the following Microsoft documentation:
  > Improved enforcement for All resources policies with resource exclusions
  > Jamf has recently updated the macOS device compliance registration flow to allow organizations to exclude it from Conditional Access policies. For instructions on configuring your environment to do this, see the Configuring Jamf Pro Device Compliance for Microsoft's Baseline Scope Enforcement article.

- **Important Notices > Notice History by Release — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Notice_History_by_Release> — Windows: none
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

- **Deprecations and Removals — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Deprecations_and_Removals> — Windows: none
  > Deprecations Added in a Previous Release
  > DeprecationNotes
  > AFP for File Share Distribution Points
  > Apple has removed support for the Apple Filing Protocol (AFP) starting in macOS 27. Computers with macOS 27 or later will fail to mount file share distribution points using AFP. Jamf recommends that you transition existing distribution points to use SMB or enable HTTPS.
  > Non-OIDC-based administrator authentication methods for cloud-hosted Jamf Pro instances
  > In a future release of Jamf Pro (estimated target: the second half of 2027), support for the following legacy administrator authentication methods will be removed:
  > Local Jamf Pro accounts
  > SAML-based authentication (including failover login URLs)
  > LDAP and directory service-based authentication
  > After the removal, Jamf Pro will require an OIDC-based authentication method to log in, such as Jamf ID or federation through an OIDC-compliant identity provider.
  > Migrating to platform authentication improves the security of your Jamf Pro environment while enabling additional platform functionality. It also ensures readiness for Apple's upcoming removal of legacy MDM software update commands by enabling the declarative device management capabilities in blueprints.
  > Jamf recommends migrating to a supported authentication method as soon as possible. For more information or assistance with migrating, contact your Account team.
  > Note:
  > This deprecation specifically applies to administrator login for cloud-hosted Jamf Pro instances. Self-hosted in…

- **Resolved Issues — Jamf Pro 11.34.0** — <https://learn.jamf.com/r/en-US/jamf-pro-release-notes-current/Resolved_Issues> — Windows: none
  > Note:
  > Some resolved issues in this release may have been addressed in a previous maintenance release.
  > Jamf Pro Server: Security Issues
  > Jamf provides the CVE-ID for security issues with high or critical severity when possible.
  > [PI209200] Fixed: A known vulnerability in a third-party library (CVE-2026-41715).
  > [PI209383] Fixed: A known vulnerability in a third-party library (CVE-2018-14040, CVE-2018-14041, CVE-2018-14042, CVE-2016-10735).
  > [PI214494] Fixed: A known vulnerability in a third-party library (CVE-2026-40984).
  > [PI214497] Fixed: A known vulnerability in a third-party library (CVE-2026-40984).
  > [PI214500] Fixed: A cross-site scripting (XSS) issue.
  > [PI215679] Fixed: A broken access control issue.
  > [PI215681] Fixed: A cross-site scripting (XSS) issue.
  > [PI215682] Fixed: A cross-site scripting (XSS) issue.
  > [PI215685] Fixed: A broken access control issue.
  > [PI217357] Fixed: A known vulnerability in a third-party library (CVE-2026-49844).
  > [PI220410] Fixed: An injection issue.
  > [PI220413] Fixed: An injection issue.
  > [PI220414] Fixed: An injection issue.
  > [PI220415] Fixed: An injection issue.
  > [PI220416] Fixed: An injection issue.
  > [PI228082] Fixed: A broken access control issue.
  > [PI228083] Fixed: A broken access control issue.
  > [PI228520] Fixed: A broken access control issue.
  > [PI230883] Fixed: A known vulnerability in a third-party library (CVE-2026-84939).
  > [PI232915] Fixed: A known vulnerability in a third-party library (CVE-2026-97687).
  > [PI232918] Fixed: A known vulnerability in a th…

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

### jumpcloud-release-notes — ok

Kind: html-sections · Source: https://jumpcloud.com/support/release-notes-{year}

#### New (1)

- **November 12th, 2026** — 2026-11-12 — <https://jumpcloud.com/support/release-notes-2026#november-12th-2026> — Windows: none
  > Enhancement: Name override for SCIM groups
  > Feature: SSO Applications (SCIM)
  > You can keep your JumpCloud group names for internal standards and send the group name each application expects. On the application’s User Groups and Agent Groups tab, use Show In App As to set a name override when provisioning is active and group management is enabled.
  > Set a different group name per application without changing the JumpCloud group name.
  > Use Save to store the override in JumpCloud, or Save and sync to update the application right away.
  > Show In App As value takes priority over Group Export Attribute Mapping when both define a group display name for the same group.
  > See Improved SSO and SCIM Applications Experience and Integrate with Custom SCIM to learn more. For a specific application, see that application’s article in the JumpCloud Help Center.

## ManageEngine

### manageengine-endpoint-central — no-change

Kind: csv · Source: https://www.manageengine.com/sites/meweb/images/ems/readme/largenl_readme.csv

No new or changed items.

