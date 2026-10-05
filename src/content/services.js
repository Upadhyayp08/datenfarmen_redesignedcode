import {
  Cloud,
  Database,
  Globe2,
  Monitor,
  Network,
  Send,
  Server,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
export const SIMPLE_EXPLANATIONS = {
  "Single-Tenant Cloud":
    "Think of it like having your own private floor in a building. The infrastructure is reserved for your business.",
  "Multi-Tenant Cloud":
    "Think of an apartment building: the building is shared, but your apartment is separated from everyone else.",
  "Bare Metal Servers":
    "Think of buying an entire machine instead of sharing one. The physical server is dedicated to your business.",
  "Linux VPS":
    "Think of getting your own room inside a powerful server. It runs Linux and can be managed like your own server.",
  "Windows VPS":
    "Think of getting your own Windows computer hosted in a data center, available remotely when you need it.",
  "Managed VPS":
    "You use the server for your business while our team takes care of important server maintenance behind the scenes.",
  "Single Processor Dedicated Server":
    "One complete physical server with one main processor is reserved entirely for your business.",
  "Dual Processor Dedicated Server":
    "One complete physical server has two processors, giving demanding applications more processing capacity.",
  "Managed Dedicated Server":
    "You get the whole physical server while our team helps maintain and monitor the infrastructure.",
  "Business Email (cPanel / Zimbra)":
    "Your team gets professional email using your own business domain, such as name@yourcompany.com.",
  "Hosted Exchange & Office 365":
    "Your business email and collaboration tools are hosted for you, so you do not have to run the underlying servers.",
  "Cloud Firewall & DDoS Protection":
    "Think of a security gate at the entrance: unwanted internet traffic is filtered before it reaches your systems.",
  "VPN & Private Connectivity":
    "Think of it as a private road connecting your offices, users, or systems securely.",
  "Managed OS & Patch Management":
    "We help keep the operating system updated with important maintenance and security fixes.",
  "Managed Database Services":
    "Your applications use a database to store information while our team manages the database platform.",
  "Managed Network & Security Operations":
    "Our team watches the network and security layer so problems can be detected and handled early.",
  "Backup & Recovery":
    "Important information is copied to a separate place so it can be restored after deletion, damage, or failure.",
  "Disaster Recovery (DR)":
    "A second recovery setup gives your business a way to bring important systems back after a major outage.",
  "Object Storage & Ransomware Protection":
    "Think of a large, protected digital warehouse where files can be stored and recovered when needed.",
  "Carrier Connectivity":
    "Your data center connects directly to telecom and internet carriers that provide network services.",
  "Cross-Connects":
    "A direct connection joins two networks or systems inside the data center without unnecessary network hops.",
  "Cloud On-Ramp":
    "Think of it as a private road from your infrastructure to a cloud provider instead of relying only on the public internet.",
  "Micro Edge Nodes":
    "Small computing locations are placed closer to users so applications do not have to travel as far.",
  "Low-Latency Compute for AI & IoT":
    "Computing is placed close to devices and users so AI and real-time applications can respond faster.",
  "5G & Multi-Access Edge Computing (MEC)":
    "Computing is placed close to 5G devices so real-time services can respond with less delay.",
};

export const SIMPLE_VISUALS = {
  "Single-Tenant Cloud": {
    icon: Server,
    a: "Your business",
    b: "Private infrastructure",
    tag: "Dedicated",
  },
  "Multi-Tenant Cloud": {
    icon: Cloud,
    a: "Shared platform",
    b: "Your isolated space",
    tag: "Shared + separated",
  },
  "Bare Metal Servers": {
    icon: Server,
    a: "Physical server",
    b: "Your workloads",
    tag: "100% dedicated",
  },
  "Linux VPS": {
    icon: Monitor,
    a: "Data-center server",
    b: "Your Linux VPS",
    tag: "Virtual server",
  },
  "Windows VPS": {
    icon: Monitor,
    a: "Data-center server",
    b: "Your Windows VPS",
    tag: "Virtual server",
  },
  "Managed VPS": {
    icon: Server,
    a: "Your application",
    b: "Managed VPS",
    tag: "We maintain it",
  },
  "Single Processor Dedicated Server": {
    icon: Server,
    a: "1 CPU server",
    b: "Your workloads",
    tag: "Dedicated",
  },
  "Dual Processor Dedicated Server": {
    icon: Server,
    a: "2 CPU server",
    b: "Heavy workloads",
    tag: "More processing",
  },
  "Managed Dedicated Server": {
    icon: Server,
    a: "Dedicated server",
    b: "Our support",
    tag: "Managed",
  },
  "Business Email (cPanel / Zimbra)": {
    icon: Send,
    a: "Your domain",
    b: "Business inbox",
    tag: "Professional email",
  },
  "Hosted Exchange & Office 365": {
    icon: Globe2,
    a: "Your team",
    b: "Hosted tools",
    tag: "Collaboration",
  },
  "Cloud Firewall & DDoS Protection": {
    icon: Shield,
    a: "Internet traffic",
    b: "Your systems",
    tag: "Protected",
  },
  "VPN & Private Connectivity": {
    icon: Network,
    a: "Office / users",
    b: "Private connection",
    tag: "Secure route",
  },
  "Managed OS & Patch Management": {
    icon: Monitor,
    a: "Your server",
    b: "Updates + maintenance",
    tag: "Kept current",
  },
  "Managed Database Services": {
    icon: Database,
    a: "Application",
    b: "Database",
    tag: "Managed data",
  },
  "Managed Network & Security Operations": {
    icon: Shield,
    a: "Network",
    b: "Monitoring",
    tag: "Watched 24×7",
  },
  "Backup & Recovery": {
    icon: Database,
    a: "Live data",
    b: "Backup copy",
    tag: "Restore",
  },
  "Disaster Recovery (DR)": {
    icon: Zap,
    a: "Primary systems",
    b: "Recovery setup",
    tag: "Business continuity",
  },
  "Object Storage & Ransomware Protection": {
    icon: Database,
    a: "Files",
    b: "Protected storage",
    tag: "Recoverable",
  },
  "Carrier Connectivity": {
    icon: Network,
    a: "Telecom carrier",
    b: "Data center",
    tag: "Connected",
  },
  "Cross-Connects": {
    icon: Network,
    a: "Network A",
    b: "Network B",
    tag: "Direct link",
  },
  "Cloud On-Ramp": {
    icon: Cloud,
    a: "Your infrastructure",
    b: "Cloud provider",
    tag: "Private path",
  },
  "Micro Edge Nodes": {
    icon: Zap,
    a: "Users",
    b: "Nearby compute",
    tag: "Closer",
  },
  "Low-Latency Compute for AI & IoT": {
    icon: Sparkles,
    a: "Devices",
    b: "Nearby compute",
    tag: "Fast response",
  },
  "5G & Multi-Access Edge Computing (MEC)": {
    icon: Zap,
    a: "5G devices",
    b: "Edge compute",
    tag: "Real-time",
  },
};
export const base = {
  managed: [
    "Infrastructure provisioning and facility operations",
    "Monitoring and platform-level maintenance",
    "Security controls and service uptime",
  ],
  you: ["Application code and business logic", "Customer data and user access"],
  best: [
    "Modern production workloads",
    "Teams scaling infrastructure",
    "Compliance-sensitive deployments",
  ],
};
export const serviceData = {
  "/cloud-services": {
    title: "Cloud Services",
    heroDesc:
      "Single-tenant, multi-tenant, and bare-metal compute — built on our Ankleshwar and Indore facilities.",
    intro:
      "Datenfarmen Centers Cloud Services give you a spectrum of compute options, from fully dedicated single-tenant environments to elastic multi-tenant virtual machines and raw bare-metal servers. Every option is built on the same modular, high-density infrastructure across our ANK-1 and IND-1 facilities, so you can mix compute types under one account, one network, and one SLA framework.",
    tabs: ["Single-Tenant Cloud", "Multi-Tenant Cloud", "Bare Metal Servers"],
    sections: [
      {
        title: "Single-Tenant Cloud",
        desc: "A dedicated compute, storage, and network stack reserved exclusively for your organization — no resource sharing with other tenants.",
        steps: [
          "We provision a dedicated physical host (or host cluster) exclusively for your workloads — sized to your CPU, RAM, and storage requirements.",
          "Your environment sits on an isolated network segment (dedicated VLAN/VRF) with its own firewall policy, separate from any other customer.",
          "You choose the hypervisor (VMware, KVM, or Hyper-V) and OS images; we handle the physical layer and platform uptime.",
          "Scale by adding dedicated capacity as needed — no noisy-neighbor contention, ever.",
        ],
        managed: [
          "Physical hardware, power, and cooling",
          "Hypervisor platform and host-level patching",
          "Network uplink, isolation, and DDoS filtering",
          "Hardware failure detection and replacement",
          "24x7 facility and infrastructure monitoring",
        ],
        you: [
          "Guest OS configuration and patching (or add our Managed OS service)",
          "Applications, databases, and data",
          "User access control within your environment",
          "Application-level security configuration",
        ],
        specs: [
          ["Isolation", "Dedicated physical host(s), no shared tenancy"],
          ["Hypervisor", "VMware / KVM / Hyper-V — your choice"],
          ["Network", "Dedicated VLAN/VRF, isolated firewall policy"],
          ["Scaling", "Add dedicated nodes on demand"],
          [
            "Typical fit",
            "BFSI, healthcare, government, compliance-bound workloads",
          ],
        ],
        best: [
          "Regulated workloads requiring physical data isolation",
          "Latency-sensitive applications needing predictable performance",
          "Organizations with strict data-residency or audit requirements",
        ],
      },
      {
        title: "Multi-Tenant Cloud",
        desc: "Elastic virtual machines drawn from a shared, high-availability compute pool — logically isolated and billed by the resources you actually use.",
        steps: [
          "Deploy a virtual machine from our Edge Compute tiers (Edge Micro through Edge Scale) via request or self-service configurator.",
          "Your VM draws guaranteed CPU/RAM/storage allocations from a shared compute cluster, isolated from other tenants at the hypervisor and network layer (VXLAN segmentation).",
          "Resize up or down as demand changes; snapshots and backup add-ons are available per instance.",
          "Access your instance via console, SSH, or our Cloud Console for day-to-day management.",
        ],
        managed: [
          "Underlying cluster hardware and hypervisor",
          "Shared storage pool performance and redundancy",
          "Network fabric, routing, and capacity planning",
          "Platform-layer patching and security updates",
          "Elastic capacity headroom for scaling",
        ],
        you: [
          "Guest OS and installed software",
          "Application code, data, and backups (unless purchased)",
          "Firewall rules and access credentials for your instance",
        ],
        specs: [
          ["Isolation", "Hypervisor + network-level logical isolation (VXLAN)"],
          ["Tiers", "Edge Micro to Edge Scale — see Pricing"],
          ["Billing", "Pay for the tier you choose, resize anytime"],
          ["Access", "Self-service via Cloud Console, SSH/RDP"],
          ["Typical fit", "Web apps, dev/test, startups, elastic workloads"],
        ],
        best: [
          "Websites and APIs with variable traffic",
          "Development and staging environments",
          "Small-to-mid businesses that don’t need dedicated hardware",
        ],
      },
      {
        title: "Bare Metal Servers",
        desc: "Dedicated physical servers with full root access and no hypervisor overhead — for workloads that demand raw, predictable performance.",
        steps: [
          "We rack and provision a dedicated physical server to your CPU/RAM/storage/NIC specification.",
          "You receive full root/administrator access with no virtualization layer between your OS and the hardware.",
          "Remote management (IPMI/iDRAC/iLO-class out-of-band access) lets you power-cycle and reimage without a site visit.",
          "Dedicated network port and bandwidth allocation keep performance predictable and isolated from other tenants.",
        ],
        managed: [
          "Physical hardware provisioning, power, and cooling",
          "Remote-hands support for physical interventions",
          "Dedicated network port and uplink",
          "Hardware monitoring and failure remediation",
        ],
        you: [
          "Full OS installation, configuration, and patching",
          "Application stack, licensing, and data",
          "Server-level security hardening and firewall rules",
        ],
        specs: [
          ["Virtualization", "None — direct hardware access"],
          ["Access", "Full root/admin, out-of-band remote management"],
          ["Storage", "SSD/NVMe/HDD configurations available"],
          ["Network", "Dedicated NIC and bandwidth allocation"],
          ["Typical fit", "Databases, licensed software, high-I/O workloads"],
        ],
        best: [
          "High-performance databases needing raw I/O",
          "Software with per-physical-core licensing",
          "Workloads with strict performance SLAs",
        ],
      },
    ],
  },
  "/vps-hosting": {
    title: "VPS Hosting",
    heroDesc:
      "Dedicated-resource virtual private servers on Linux or Windows, provisioned in minutes from our Indore and Ankleshwar facilities.",
    intro:
      "Datenfarmen Centers VPS Hosting gives you a resizable slice of guaranteed CPU, RAM and NVMe storage on a private virtual server — a cost-effective middle ground between shared hosting and dedicated hardware. Choose Linux or Windows, manage it yourself or let our team run it for you, and scale up as your workload grows without migrating servers.",
    tabs: ["Linux VPS", "Windows VPS", "Managed VPS"],
    sections: [
      {
        title: "Linux VPS",
        desc: "Guaranteed vCPU, RAM and NVMe storage on a private virtual server running your Linux distribution of choice, with full root access from day one.",
        steps: [
          "Choose a resource tier and Linux distribution (Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux).",
          "Your VPS is provisioned on dedicated vCPU/RAM/NVMe allocations, isolated from other tenants at the hypervisor level.",
          "Access via SSH with full root privileges, or through our Cloud Console for one-click management.",
          "Resize CPU, RAM or storage as your workload grows, with minimal downtime.",
        ],
        managed: [
          "Underlying hypervisor and physical hardware",
          "Guaranteed resource allocation (no overselling)",
          "Network uplink and DDoS filtering",
          "Platform-layer patching and hardware monitoring",
        ],
        you: [
          "OS installation, patching, and configuration",
          "Applications, data, and backups (unless purchased)",
          "Firewall rules and SSH key management",
        ],
        specs: [
          ["Isolation", "Dedicated vCPU/RAM/storage allocation per instance"],
          ["Distributions", "Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux"],
          ["Storage", "NVMe SSD-backed"],
          ["Access", "Full root/SSH, Cloud Console, API"],
          ["Typical fit", "Web apps, APIs, dev/test, CI/CD runners"],
        ],
        best: [
          "Developers who need full root control",
          "Small-to-mid applications outgrowing shared hosting",
          "Containerised workloads and CI/CD pipelines",
        ],
      },
      {
        title: "Windows VPS",
        desc: "A licensed Windows Server environment on private, dedicated resources — ideal for applications, remote desktops, and software that needs a Windows environment without shared-hosting limitations.",
        steps: [
          "Select a resource tier and your preferred licensed Windows Server edition.",
          "We provision your VPS with dedicated vCPU, RAM and storage, isolated from other tenants.",
          "Connect via RDP with administrator access from the moment your instance is live.",
          "Snapshot, back up, or resize your instance at any time through the Cloud Console.",
        ],
        managed: [
          "Windows Server licensing and activation",
          "Underlying hypervisor and hardware",
          "Network uplink and DDoS filtering",
          "Platform-layer patching",
        ],
        you: [
          "Guest OS updates and application installs",
          "RDP access control and user accounts",
          "Application-level security and data",
        ],
        specs: [
          ["Licensing", "Fully licensed Windows Server, included"],
          ["Access", "RDP with administrator rights"],
          ["Storage", "SSD/NVMe-backed"],
          ["Backups", "Snapshot and scheduled backup add-ons available"],
          ["Typical fit", ".NET apps, MSSQL, remote desktop workstations"],
        ],
        best: [
          ".NET and MSSQL-based applications",
          "Remote desktop / RDS workstation environments",
          "Windows-only line-of-business software",
        ],
      },
      {
        title: "Managed VPS",
        desc: "Get the control of a private server with the peace of mind of a managed service — we handle setup, hardening, patching and monitoring on either Linux or Windows VPS.",
        steps: [
          "We provision and harden your VPS to a security baseline (firewall, fail2ban/RDP lockdown, updates).",
          "Our team applies ongoing OS and security patches on a defined maintenance window.",
          "24x7 monitoring alerts our NOC to resource, uptime or security anomalies.",
          "You get a named support contact for changes, troubleshooting, and scaling requests.",
        ],
        managed: [
          "OS hardening, patching, and updates",
          "24x7 monitoring and alerting",
          "Security baseline and firewall configuration",
          "Named support contact",
        ],
        you: [
          "Application code and business logic",
          "Data and application-level backups",
        ],
        specs: [
          ["Base OS", "Linux or Windows VPS, your choice"],
          [
            "Patch cadence",
            "Defined maintenance window, or emergency patching",
          ],
          ["Monitoring", "24x7 uptime, resource, and security alerting"],
          ["Support", "Named contact, priority response SLA"],
          ["Typical fit", "Teams without in-house sysadmin resources"],
        ],
        best: [
          "Small teams without dedicated ops staff",
          "Production workloads needing predictable patching",
          "Businesses that want to focus on the application, not the server",
        ],
      },
    ],
  },
  "/dedicated-servers": {
    title: "Dedicated Servers",
    heroDesc:
      "Single-tenant physical hardware for workloads that demand maximum performance and full control.",
    intro:
      "Datenfarmen Centers Dedicated Servers give you exclusive access to physical hardware — no hypervisor, no shared tenancy, no noisy neighbours. Choose single or dual-processor configurations sized to your workload, manage it yourself with full root access, or add our Managed Dedicated service and let our team run day-to-day operations for you.",
    tabs: ["Single Processor", "Dual Processor", "Managed Dedicated"],
    sections: [
      {
        title: "Single Processor Dedicated Server",
        desc: "An entry-level, single-CPU physical server entirely dedicated to you — no noisy neighbours, no shared resources. A solid starting point for production workloads that have outgrown VPS.",
        steps: [
          "Specify your CPU, RAM, storage and network requirements.",
          "We rack and provision your dedicated physical server with no hypervisor overhead.",
          "You receive full root/administrator access with out-of-band remote management for power-cycling and reimaging.",
          "A dedicated network port and bandwidth allocation keep performance predictable.",
        ],
        managed: [
          "Physical hardware, power, and cooling",
          "Remote-hands support for physical interventions",
          "Dedicated network port and uplink",
          "Hardware monitoring and failure remediation",
        ],
        you: [
          "Full OS installation, configuration, and patching",
          "Application stack, licensing, and data",
          "Server-level security hardening",
        ],
        specs: [
          ["Virtualization", "None — direct hardware access"],
          ["Access", "Full root/admin, out-of-band remote management"],
          ["Storage", "SSD/NVMe/HDD configurations available"],
          ["Network", "Dedicated NIC and bandwidth allocation"],
          ["Typical fit", "Growing production workloads, small databases"],
        ],
        best: [
          "Production apps that have outgrown VPS",
          "Single-instance databases",
          "Businesses that want predictable, dedicated hardware",
        ],
      },
      {
        title: "Dual Processor Dedicated Server",
        desc: "Dual-CPU configurations for workloads that need serious horsepower — large databases, high-traffic applications, virtualization hosts, and big-data processing.",
        steps: [
          "We size a dual-CPU configuration to your core count, RAM, and storage throughput needs.",
          "Your server is racked with RAID-configured storage and dedicated high-bandwidth networking.",
          "Full root access and out-of-band management are enabled from day one.",
          "Priority remote-hands support is included for time-sensitive interventions.",
        ],
        managed: [
          "High-density dual-CPU hardware provisioning",
          "RAID storage configuration",
          "Priority remote-hands support",
          "Hardware monitoring and failure remediation",
        ],
        you: [
          "OS, database, and application management",
          "Licensing for per-core-licensed software",
          "Server-level security hardening",
        ],
        specs: [
          ["CPU", "Dual-socket, high core/thread count"],
          ["Storage", "Configurable RAID arrays (SSD/NVMe/HDD)"],
          ["Network", "High-bandwidth dedicated NIC"],
          ["Support", "Priority remote-hands SLA"],
          ["Typical fit", "Large databases, virtualization hosts, big-data"],
        ],
        best: [
          "High-traffic applications and large databases",
          "Virtualization or container hosts",
          "Big-data processing and analytics pipelines",
        ],
      },
      {
        title: "Managed Dedicated Server",
        desc: "Get the raw performance of dedicated hardware with none of the operational burden — our team handles OS management, patching, security and 24x7 monitoring.",
        steps: [
          "We provision your dedicated server (single or dual CPU) and install/harden the OS to a security baseline.",
          "Ongoing patching, firewall management, and security updates run on a defined maintenance window.",
          "24x7 monitoring watches uptime, resource usage, and security signals.",
          "A named support contact handles changes, incidents, and scaling requests.",
        ],
        managed: [
          "Full OS installation, hardening, and patching",
          "24x7 infrastructure and security monitoring",
          "Firewall and access control management",
          "Named support contact",
        ],
        you: [
          "Application code and business logic",
          "Data and application-level backups",
        ],
        specs: [
          ["Base hardware", "Single or dual-CPU dedicated server"],
          [
            "Patch cadence",
            "Defined maintenance window, or emergency patching",
          ],
          ["Monitoring", "24x7 uptime, resource, and security alerting"],
          ["Support", "Named contact, priority response SLA"],
          [
            "Typical fit",
            "Teams that want dedicated hardware without ops overhead",
          ],
        ],
        best: [
          "Businesses without in-house sysadmin resources",
          "Mission-critical apps needing 24x7 monitoring",
          "Regulated workloads needing documented operations",
        ],
      },
    ],
  },
  "/email-hosting": {
    title: "Email Hosting",
    heroDesc:
      "Enterprise-grade, secure business email — from cost-effective custom-domain mail to fully hosted Exchange and Office 365.",
    intro:
      "Datenfarmen Centers Email Hosting gives your team a professional, secure mailbox on your own domain. Choose cost-effective cPanel or Zimbra-based business email, or step up to fully hosted Microsoft Exchange or Office 365 with assisted migration and ongoing administration — all backed by spam and malware filtering at the gateway.",
    tabs: ["Business Email", "Exchange & Office 365"],
    sections: [
      {
        title: "Business Email (cPanel / Zimbra)",
        desc: "Custom-domain business email with webmail, calendaring and spam filtering, delivered on cPanel or open-source Zimbra — a cost-effective option with no per-seat licensing.",
        steps: [
          "We configure mail hosting on your domain, with SPF, DKIM and DMARC records set up correctly from day one.",
          "Mailboxes are provisioned with configurable storage quotas per user or department.",
          "Spam and malware filtering runs at the gateway before mail reaches your inbox.",
          "Access via webmail, IMAP/SMTP, or your preferred mail client, with mobile sync support.",
        ],
        managed: [
          "Mail server infrastructure and uptime",
          "Spam, malware and phishing filtering",
          "DNS record configuration (SPF/DKIM/DMARC)",
          "Platform patching and security updates",
        ],
        you: [
          "User account and mailbox management",
          "Mail client / device configuration",
          "Data retention and archiving policy",
        ],
        specs: [
          ["Platform", "cPanel-based or open-source Zimbra"],
          ["Access", "Webmail, IMAP/SMTP, mobile sync"],
          ["Filtering", "Spam and malware gateway filtering included"],
          ["Licensing", "No per-seat license fees on Zimbra"],
          [
            "Typical fit",
            "SMEs and teams wanting custom-domain mail without enterprise licensing",
          ],
        ],
        best: [
          "SMEs wanting professional email on their own domain",
          "Teams that don’t need full Exchange/Office 365 features",
          "Cost-conscious deployments at scale",
        ],
      },
      {
        title: "Hosted Exchange & Office 365",
        desc: "Enterprise-grade Microsoft Exchange or fully integrated Office 365 mail, with calendar and contact sync, mobile device support and migration handled for you.",
        steps: [
          "We assess your current mail environment and plan a migration path to Hosted Exchange or Office 365.",
          "Mailboxes, calendars and contacts are migrated with minimal downtime and a rollback plan.",
          "Devices and clients (Outlook, mobile) are configured for seamless sync.",
          "Ongoing license and administration management keeps your environment current.",
        ],
        managed: [
          "Migration planning and execution",
          "License and tenant administration",
          "Mailbox, calendar, and contact configuration",
          "Ongoing support for admin changes",
        ],
        you: [
          "Day-to-day user and mailbox management",
          "Data classification and retention decisions",
        ],
        specs: [
          ["Platform", "Microsoft Exchange (hosted) or Office 365"],
          ["Sync", "Calendar, contacts, and mobile device sync"],
          ["Migration", "Assisted migration from legacy mail systems"],
          ["Admin", "License and tenant administration included"],
          [
            "Typical fit",
            "Enterprises standardised on the Microsoft ecosystem",
          ],
        ],
        best: [
          "Enterprises needing full Exchange/Office 365 feature parity",
          "Teams already using Microsoft 365 apps",
          "Organisations migrating off legacy on-prem Exchange",
        ],
      },
    ],
  },
  "/network-security": {
    title: "Networking & Security",
    heroDesc:
      "Firewalls, DDoS protection, VPN, VPC and private connectivity to protect, route, and connect your cloud environment.",
    intro:
      "Datenfarmen Centers networking and security building blocks let you control exactly how traffic reaches, moves through, and leaves your environment. From managed firewalls and always-on DDoS protection to VPC network isolation, VPN and IPSEC connectivity, load balancing and DNS management — all delivered from our carrier-neutral facilities.",
    tabs: ["Firewall & DDoS Protection", "VPN & Private Connectivity"],
    sections: [
      {
        title: "Cloud Firewall & DDoS Protection",
        desc: "A managed, rule-based firewall at the edge of your environment plus always-on DDoS detection and mitigation, so malicious and volumetric traffic never reaches your workloads.",
        steps: [
          "We define firewall rule sets scoped to your application ports, IP ranges, and traffic patterns.",
          "Traffic is filtered in real time at the network edge, before it reaches your servers.",
          "Always-on detection identifies volumetric and application-layer DDoS attacks automatically.",
          "Traffic scrubbing kicks in during an attack; you receive a post-incident report.",
        ],
        managed: [
          "Firewall rule deployment and edge filtering",
          "24x7 DDoS detection and mitigation",
          "Traffic scrubbing during active attacks",
          "Logging, alerting, and post-incident reporting",
        ],
        you: [
          "Defining which ports/services should be exposed",
          "Application-level security (input validation, auth)",
        ],
        specs: [
          ["Firewall", "Customisable, rule-based, managed by our team"],
          ["DDoS coverage", "Volumetric and application-layer (L3/L4/L7)"],
          ["Detection", "Always-on, automatic mitigation"],
          ["Reporting", "Post-incident traffic and mitigation reports"],
          [
            "Typical fit",
            "Public-facing websites, APIs, e-commerce, trading platforms",
          ],
        ],
        best: [
          "Public-facing websites and APIs",
          "E-commerce and payment platforms",
          "Businesses that have experienced attacks before",
        ],
      },
      {
        title: "VPN & Private Connectivity",
        desc: "Encrypted site-to-site or remote-access VPN, Virtual Private Cloud (VPC) network isolation, and IPSEC tunnels — so your team and offices can securely reach your cloud environment from anywhere.",
        steps: [
          "We design your network topology — VPC subnets, route tables, and connectivity requirements.",
          "Site-to-site or remote-access VPN endpoints are configured with industry-standard IPSEC/SSL encryption.",
          "Your offices and remote staff connect securely to private resources without public exposure.",
          "NAT gateways and virtual routers manage outbound access without exposing private subnets inbound.",
        ],
        managed: [
          "VPC, subnet, and routing configuration",
          "VPN and IPSEC tunnel setup and uptime",
          "NAT gateway and virtual router management",
          "DNS management for private and public zones",
        ],
        you: [
          "VPN client credentials and user access",
          "Application-level access policies",
        ],
        specs: [
          ["VPN types", "Site-to-site and remote-access"],
          ["Encryption", "Industry-standard IPSEC/SSL"],
          ["Network isolation", "Dedicated VPC with custom subnetting"],
          ["IP options", "IPv4, IPv6, and Reserve IP available"],
          [
            "Typical fit",
            "Hybrid-cloud setups, distributed teams, regulated workloads",
          ],
        ],
        best: [
          "Hybrid-cloud environments connecting on-prem and cloud",
          "Distributed or remote teams needing secure access",
          "Workloads requiring network-level isolation for compliance",
        ],
      },
    ],
  },
  "/managed-services": {
    title: "Managed Services",
    heroDesc:
      "24x7 monitoring and hands-on operations for OS, database, network, and security — so your team can focus upward, not on infrastructure.",
    intro:
      "Managed Services extend our infrastructure team into your operations. Instead of hiring and staffing round-the-clock coverage, you get a Network Operations Center (NOC) and skilled engineers who monitor, patch, and respond to your environment under a defined scope and SLA — across compute, storage, database, and network layers.",
    tabs: [
      "Managed OS & Patch Management",
      "Managed Database Services",
      "Managed Network & Security Operations",
    ],
    sections: [
      {
        title: "Managed OS & Patch Management",
        desc: "We keep the operating system layer current, secure, and monitored — across Linux and Windows environments.",
        steps: [
          "We baseline your OS configuration and agree on a patch and maintenance-window schedule with you.",
          "Security patches are tested in a staging pass where applicable, then applied during your approved window.",
          "Our monitoring agents track CPU, memory, disk, and service-level health, alerting our NOC on anomalies.",
          "Monthly reporting shows patch compliance, incidents, and open action items.",
        ],
        managed: [
          "OS-level patching and version upgrades",
          "Service/daemon health monitoring",
          "Log review for OS-level anomalies",
          "Scheduled maintenance windows and change records",
        ],
        you: [
          "Application-layer code and configuration",
          "Business logic and data within the OS",
        ],
        specs: [
          [
            "Coverage",
            "Linux (Ubuntu, Debian, CentOS/RHEL) and Windows Server",
          ],
          ["Monitoring", "24x7 agent-based monitoring with NOC escalation"],
          ["Patch cadence", "Scheduled windows, agreed with customer"],
          ["Reporting", "Monthly compliance and incident reports"],
        ],
        best: [
          "Teams without dedicated in-house sysadmins",
          "Compliance programs requiring documented patch cadence",
          "Businesses wanting predictable OS maintenance",
        ],
      },
      {
        title: "Managed Database Services",
        desc: "Operational management of your database layer — availability, backups, tuning, and incident response.",
        steps: [
          "We deploy and configure your database engine (MySQL, PostgreSQL, MS SQL, MongoDB, and others on request) to your specification.",
          "Automated backup schedules are configured with retention aligned to your recovery objectives.",
          "We monitor query performance, connections, and replication lag, tuning configuration as workloads evolve.",
          "On-call engineers respond to database incidents under your agreed SLA.",
        ],
        managed: [
          "Database installation, configuration, and upgrades",
          "Backup scheduling, verification, and retention",
          "Performance monitoring and tuning",
          "High-availability/replication setup where applicable",
        ],
        you: [
          "Schema design and application queries",
          "Data governance and access policy",
        ],
        specs: [
          [
            "Engines",
            "MySQL, PostgreSQL, MS SQL Server, MongoDB (others on request)",
          ],
          ["Backups", "Automated, scheduled, with defined retention"],
          ["HA options", "Replication/clustering available on request"],
          ["Support", "On-call incident response under SLA"],
        ],
        best: [
          "Businesses running production databases without a DBA on staff",
          "Applications needing consistent backup and recovery discipline",
        ],
      },
      {
        title: "Managed Network & Security Operations",
        desc: "Round-the-clock Network Operations Center coverage for network health, firewall management, and security event response.",
        steps: [
          "Your network devices, links, and firewall policies are enrolled into our 24x7 NOC monitoring platform.",
          "Threshold-based alerting flags latency, packet loss, link-down events, and abnormal traffic patterns in real time.",
          "Firewall rule changes are handled through a documented change-request process with audit trail.",
          "Security events are triaged by our team, with escalation to you for anything requiring a business decision.",
        ],
        managed: [
          "24x7 network and link monitoring",
          "Firewall rule management and change control",
          "Security event triage and escalation",
          "Incident response coordination",
        ],
        you: [
          "Application-level security policy decisions",
          "Business approval for major network changes",
        ],
        specs: [
          ["Coverage", "24x7x365 NOC monitoring"],
          ["Alerting", "Real-time threshold and anomaly alerts"],
          ["Change control", "Documented request/approval workflow"],
          ["Escalation", "Defined SLA response tiers"],
        ],
        best: [
          "Businesses needing continuous network oversight without a 24x7 in-house team",
          "Multi-site operations requiring centralized network visibility",
        ],
      },
    ],
  },
  "/data-protection": {
    title: "Data Protection",
    heroDesc:
      "Backup, disaster recovery, and object storage — engineered so a bad day doesn't become a bad year.",
    intro:
      "Data Protection covers the layer that matters most when something goes wrong: getting your systems and data back. We combine scheduled backups, replicated disaster recovery, and resilient object storage so you can choose a recovery posture that matches your risk tolerance and budget.",
    tabs: [
      "Backup & Recovery",
      "Disaster Recovery (DR)",
      "Object Storage & Ransomware Protection",
    ],
    sections: [
      {
        title: "Backup & Recovery",
        desc: "Scheduled, verified backups of your servers and data, with defined retention and tested restore procedures.",
        steps: [
          "We agree on a backup schedule and retention policy aligned to your Recovery Point Objective (RPO).",
          "Backups run automatically — full and incremental — to storage isolated from your production environment.",
          "Backup integrity is periodically verified through test restores.",
          "When you need a restore, our team executes it under your agreed Recovery Time Objective (RTO).",
        ],
        managed: [
          "Backup scheduling, execution, and monitoring",
          "Retention policy enforcement",
          "Backup integrity verification",
          "Restore execution on request",
        ],
        you: [
          "Defining RPO/RTO requirements for your workloads",
          "Identifying which systems/data need backup coverage",
        ],
        specs: [
          ["Backup types", "Full and incremental, scheduled"],
          ["Retention", "Configurable per customer requirement"],
          ["Storage isolation", "Backups stored separately from production"],
          ["Restore support", "Assisted restore under agreed RTO"],
        ],
        best: [
          "Any production workload needing a recovery safety net",
          "Compliance programs requiring documented backup evidence",
        ],
      },
      {
        title: "Disaster Recovery (DR)",
        desc: "Replicated standby infrastructure across our Ankleshwar and Indore facilities so operations can fail over if a primary site is impacted.",
        steps: [
          "We assess your critical systems and design a DR architecture (active-passive or active-active) across our two facilities.",
          "Data is replicated to the standby site on a schedule matched to your RPO.",
          "DR runbooks are documented and periodically tested via scheduled failover drills.",
          "In an actual event, failover is executed following the tested runbook to bring systems online at the standby site.",
        ],
        managed: [
          "Cross-site replication infrastructure",
          "DR architecture design and documentation",
          "Scheduled failover testing",
          "Failover execution during a declared incident",
        ],
        you: [
          "Business continuity planning beyond IT infrastructure",
          "Defining which systems are DR-critical",
        ],
        specs: [
          ["Sites", "Ankleshwar (ANK-1) ↔ Indore (IND-1)"],
          ["Replication", "Scheduled or continuous, per RPO requirement"],
          ["Testing", "Periodic failover drills with documented results"],
          ["Model", "Active-passive or active-active, by design"],
        ],
        best: [
          "Businesses with regulatory continuity requirements",
          "Revenue-critical applications that cannot tolerate extended downtime",
        ],
      },
      {
        title: "Object Storage & Ransomware Protection",
        desc: "Resilient, S3-compatible object storage with optional immutability to protect backups from deletion, corruption, or ransomware.",
        steps: [
          "We provision an object storage bucket sized to your capacity needs, accessible via S3-compatible APIs.",
          "Data is stored with redundancy across storage nodes to protect against hardware failure.",
          "Optional write-once-read-many (immutable/locked) retention prevents backups from being altered or deleted — including by a compromised admin account.",
          "Access is controlled via key-based authentication and, where needed, IP allow-listing.",
        ],
        managed: [
          "Storage cluster redundancy and health",
          "Capacity planning and expansion",
          "Immutability/retention-lock enforcement",
        ],
        you: [
          "Bucket access key management",
          "What data is written to storage and its lifecycle policy",
        ],
        specs: [
          ["API", "S3-compatible object storage"],
          ["Redundancy", "Distributed across storage nodes"],
          [
            "Immutability",
            "Optional WORM/retention-lock for ransomware resilience",
          ],
          ["Access control", "Key-based auth, optional IP allow-listing"],
        ],
        best: [
          "Backup targets that must survive a ransomware event",
          "Archival and compliance data retention",
          "Application data requiring durable object storage",
        ],
      },
    ],
  },
  "/interconnection": {
    title: "Interconnection",
    heroDesc:
      "Carrier-neutral connectivity, cross-connects, and direct cloud on-ramps — your network, meeting everyone else's.",
    intro:
      "Interconnection is what turns a data center into a hub. Our facilities are carrier-neutral, meaning you're never locked into a single ISP, and we provide the physical and logical connectivity — cross-connects, carrier access, and cloud on-ramps — to link your infrastructure with the rest of the internet and the major public clouds.",
    tabs: ["Carrier Connectivity", "Cross-Connects", "Cloud On-Ramp"],
    sections: [
      {
        title: "Carrier Connectivity",
        desc: "Multiple carrier options inside a carrier-neutral facility, so you choose your upstream provider rather than being locked to one.",
        steps: [
          "Our facilities host multiple carriers (including Airtel, Jio, and BSNL at IND-1), giving you a choice of upstream providers.",
          "You select a primary and, optionally, a secondary carrier for redundancy.",
          "Carrier circuits terminate in our meet-me room and connect to your rack via structured cabling.",
          "Bandwidth can be scaled or a carrier changed without relocating your equipment.",
        ],
        managed: [
          "Meet-me room infrastructure and structured cabling",
          "Carrier relationship coordination on-site",
          "Physical circuit termination",
        ],
        you: [
          "Carrier contract and service selection",
          "Your own routing/BGP configuration, where applicable",
        ],
        specs: [
          ["Facility type", "Carrier-neutral"],
          ["Carriers available", "Airtel, Jio, BSNL, others on request"],
          ["Redundancy", "Primary + secondary carrier options"],
          ["Termination", "Meet-me room to your rack via structured cabling"],
        ],
        best: [
          "ISPs and network operators needing carrier choice",
          "Businesses wanting redundant upstream connectivity",
        ],
      },
      {
        title: "Cross-Connects",
        desc: "Direct, private physical connections between your rack and another tenant, carrier, or cloud on-ramp inside the same facility.",
        steps: [
          "You request a cross-connect to a specific carrier, partner, or cloud on-ramp present in the facility.",
          "Our facilities team runs a dedicated fiber or copper cross-connect through the structured cabling plant.",
          "The connection is tested end-to-end before handover.",
          "Cross-connects can be added or reconfigured as your interconnection needs change.",
        ],
        managed: [
          "Physical cross-connect installation and testing",
          "Cable plant management within the facility",
        ],
        you: ["Configuration of the equipment on either end of the connection"],
        specs: [
          ["Medium", "Fiber or copper, per requirement"],
          ["Provisioning", "On request, subject to facility cabling"],
          ["Testing", "End-to-end verification before handover"],
          ["Use", "Private, low-latency links within the facility"],
        ],
        best: [
          "Connecting to a carrier or partner co-located in the same facility",
          "Private links to a cloud on-ramp without traversing the public internet",
        ],
      },
      {
        title: "Cloud On-Ramp",
        desc: "Direct, private connectivity from your colocated infrastructure into major public cloud platforms — bypassing the public internet.",
        steps: [
          "We help you provision a direct connection service (equivalent to AWS Direct Connect / Azure ExpressRoute-style connectivity) from our facility to your chosen public cloud region.",
          "Traffic between your colocated systems and your cloud environment travels over a private, dedicated path instead of the public internet.",
          "This typically improves latency consistency and can reduce public-internet data-transfer costs on the cloud side.",
          "Bandwidth tiers can be scaled as your hybrid-cloud traffic grows.",
        ],
        managed: [
          "Physical connectivity to the cloud on-ramp partner",
          "Cross-connect provisioning to the on-ramp",
        ],
        you: [
          "Cloud-side configuration (virtual interfaces, routing) with your cloud provider",
          "Cloud provider contract and billing for the direct-connect service",
        ],
        specs: [
          [
            "Model",
            "Private connectivity to public cloud, bypassing public internet",
          ],
          [
            "Typical partners",
            "Major public cloud on-ramp providers present in-region",
          ],
          ["Benefit", "More consistent latency, potential egress savings"],
          ["Use", "Hybrid-cloud and multi-cloud architectures"],
        ],
        best: [
          "Hybrid-cloud deployments splitting workloads between colocation and public cloud",
          "Businesses needing predictable, private connectivity to cloud platforms",
        ],
      },
    ],
  },
  "/edge-colocation": {
    title: "Edge Colocation",
    heroDesc:
      "Ultra-low-latency infrastructure positioned close to where your data is generated — built for AI, IoT, and real-time applications.",
    intro:
      "Edge Colocation places compute and storage physically closer to the source of your data — factory floors, retail sites, and regional user bases — cutting the round-trip time that centralized cloud regions can't avoid. Our Ankleshwar and Indore facilities are designed as regional edge points for Gujarat and Central India's industrial and commercial corridors.",
    tabs: [
      "Micro Edge Nodes",
      "Low-Latency Compute for AI & IoT",
      "5G & Multi-Access Edge Computing (MEC)",
    ],
    sections: [
      {
        title: "Micro Edge Nodes",
        desc: "Compact colocation footprints — from partial racks to a few kW — for regional deployments that don't need a full suite.",
        steps: [
          "We allocate a small, right-sized footprint (partial rack up to a few kW) rather than requiring a minimum full-rack commitment.",
          "Your equipment is installed within our standard modular design, benefiting from the same power, cooling, and security as our larger tenants.",
          "Connectivity and monitoring are provisioned to match a smaller-scale deployment.",
          "You can expand the footprint incrementally as regional demand grows.",
        ],
        managed: [
          "Power, cooling, and physical security for the footprint",
          "Facility-level monitoring and remote-hands support",
        ],
        you: ["Your edge hardware configuration and workloads"],
        specs: [
          ["Footprint", "Partial rack to a few kW"],
          ["Scaling", "Incremental expansion as needed"],
          ["Facilities", "Ankleshwar (ANK-1), Indore (IND-1)"],
          ["Fit", "Regional deployments, branch/retail infrastructure"],
        ],
        best: [
          "Regional retail or branch infrastructure",
          "Localized content caching or processing nodes",
        ],
      },
      {
        title: "Low-Latency Compute for AI & IoT",
        desc: "Edge compute positioned to minimize round-trip time for AI inference, industrial IoT, and sensor-driven workloads.",
        steps: [
          "Compute is deployed at our edge facilities, physically closer to your industrial sites or regional user base than a centralized cloud region.",
          "This reduces network round-trip time for latency-sensitive AI inference and IoT telemetry processing.",
          "High-density rack configurations (2–2.5 kW per rack) support GPU or accelerator-equipped hardware where needed.",
          "Data can be pre-processed at the edge before selectively syncing to central cloud or on-premise systems.",
        ],
        managed: [
          "High-density power and cooling for compute-intensive hardware",
          "Network path optimization within the facility",
        ],
        you: [
          "AI/ML models and inference pipelines",
          "IoT device fleet and data pipeline configuration",
        ],
        specs: [
          ["Rack density", "2–2.5 kW per rack (higher on request)"],
          [
            "Latency benefit",
            "Reduced round-trip vs. centralized cloud regions",
          ],
          [
            "Hardware support",
            "GPU/accelerator-ready configurations available",
          ],
          ["Fit", "AI inference, industrial IoT, sensor networks"],
        ],
        best: [
          "Manufacturing sites in Gujarat's GIDC industrial belt needing local processing",
          "Real-time video analytics and quality-control inference",
        ],
      },
      {
        title: "5G & Multi-Access Edge Computing (MEC)",
        desc: "Edge infrastructure positioned to support 5G-adjacent and multi-access edge computing use cases as regional networks mature.",
        steps: [
          "We provide colocation footprint and connectivity suited to hosting MEC application servers close to regional network infrastructure.",
          "Carrier-neutral connectivity (Section: Interconnection) allows integration with multiple telecom partners.",
          "Low-latency positioning supports use cases like real-time analytics, AR/VR back-end processing, and connected-vehicle applications as they develop regionally.",
          "Capacity can be reserved ahead of rollout and scaled as adoption grows.",
        ],
        managed: [
          "Facility readiness (power, cooling, connectivity) for MEC-class hardware",
          "Carrier-neutral interconnection to telecom partners",
        ],
        you: ["MEC application development and telecom partner integration"],
        specs: [
          [
            "Positioning",
            "Regional edge, close to Gujarat/Central India network infrastructure",
          ],
          ["Connectivity", "Carrier-neutral, multi-telecom capable"],
          ["Fit", "MEC applications, connected-vehicle, AR/VR backends"],
          ["Scaling", "Reserved capacity, incremental rollout"],
        ],
        best: [
          "Telecom and system-integrator partners piloting MEC applications",
          "Applications anticipating regional 5G-adjacent low-latency demand",
        ],
      },
    ],
  },
};
