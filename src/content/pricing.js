import {
  Cloud,
  Database,
  Monitor,
  Network,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";
export const PRICING_TABS = [
  { id: "cloud", label: "Cloud Compute", icon: Cloud },
  { id: "vps", label: "VPS, Dedicated & Email", icon: Server },
  { id: "data", label: "Data & Connectivity", icon: Network },
  { id: "storage", label: "Cloud Storage", icon: Database },
  { id: "colo", label: "Colocation Plans", icon: Monitor },
  { id: "addons", label: "Add-ons & Utilities", icon: Sparkles },
  { id: "solar", label: "Solar Advantage", icon: Zap },
];

export const EDGE_PLANS = [
  {
    name: "Edge Micro",
    desc: "Small sites, dev & staging workloads",
    price: "₹899",
    transfer: "250 GB",
    featured: true,
  },
  {
    name: "Edge Starter",
    desc: "Growing apps and small business sites",
    price: "₹1,499",
    transfer: "500 GB",
  },
  {
    name: "Edge Business",
    desc: "Production workloads for SMEs",
    price: "₹2,999",
    transfer: "1 TB",
  },
  {
    name: "Edge Professional",
    desc: "High-traffic apps & multi-service stacks",
    price: "₹5,999",
    transfer: "2 TB",
  },
  {
    name: "Edge Scale",
    desc: "Compute, agencies & platforms",
    price: "₹10,999",
    transfer: "4 TB",
  },
];

export const VPS_GROUPS = [
  {
    title: "VPS Hosting",
    subtitle:
      "Guaranteed-resource virtual private servers on Linux or Windows.",
    plans: [
      {
        name: "Linux VPS – Starter",
        desc: "2 vCPU · 4 GB RAM · 80 GB NVMe",
        price: "₹999",
        features: [
          "2 dedicated vCPU cores",
          "4 GB guaranteed RAM",
          "80 GB NVMe SSD storage",
          "Full root/SSH access",
        ],
      },
      {
        name: "Linux VPS – Business",
        desc: "4 vCPU · 8 GB RAM · 160 GB NVMe",
        price: "₹1,999",
        featured: true,
        features: [
          "4 dedicated vCPU cores",
          "8 GB guaranteed RAM",
          "160 GB NVMe SSD storage",
          "Full root/SSH access",
        ],
      },
      {
        name: "Windows VPS – Starter",
        desc: "2 vCPU · 4 GB RAM · 80 GB SSD+",
        price: "₹1,799",
        features: [
          "2 dedicated vCPU cores",
          "4 GB guaranteed RAM",
          "Licensed Windows Server included",
          "RDP administrator access",
        ],
      },
      {
        name: "Managed VPS Add-on",
        desc: "Add to any VPS plan above",
        price: "₹999",
        features: [
          "OS hardening & patch management",
          "24x7 monitoring & alerting",
          "Named support contact",
        ],
      },
    ],
  },
  {
    title: "Dedicated Servers",
    subtitle: "Single-tenant physical hardware, single or dual processor.",
    plans: [
      {
        name: "Single Processor",
        desc: "1x CPU · up to 128 GB RAM · RAID storage",
        price: "₹8,999",
        features: [
          "Single-socket dedicated CPU",
          "Configurable RAM & RAID storage",
          "Full root/admin access",
          "Out-of-band remote management",
        ],
      },
      {
        name: "Dual Processor",
        desc: "2x CPU · up to 512 GB RAM · RAID storage",
        price: "₹17,999",
        featured: true,
        features: [
          "Dual-socket high core count",
          "High-throughput RAID storage",
          "Dedicated high-bandwidth NIC",
          "Priority remote-hands support",
        ],
      },
      {
        name: "Managed Dedicated Add-on",
        desc: "Add to any dedicated server above",
        price: "₹2,499",
        features: [
          "Full OS hardening & patching",
          "24x7 infrastructure monitoring",
          "Named support contact",
        ],
      },
    ],
  },
  {
    title: "Email Hosting",
    subtitle:
      "Custom-domain business email up to fully hosted Exchange & Office 365.",
    plans: [
      {
        name: "Business Email (cPanel)",
        desc: "Per mailbox, custom domain",
        price: "₹99",
        unit: "/mailbox/month",
        features: [
          "Custom-domain mailbox",
          "Webmail, IMAP/SMTP access",
          "Spam & malware filtering",
        ],
      },
      {
        name: "Zimbra Business Email",
        desc: "Per mailbox, per-seat license fee",
        price: "₹79",
        unit: "/mailbox/month",
        featured: true,
        features: [
          "Open-source, no license fees",
          "Calendar & contacts sync",
          "Mobile device support",
        ],
      },
      {
        name: "Hosted Exchange",
        desc: "Per mailbox, enterprise-grade",
        price: "₹249",
        unit: "/mailbox/month",
        features: [
          "Full Microsoft Exchange feature set",
          "Calendar & contact sync",
          "Mobile device support",
        ],
      },
      {
        name: "Office 365 Mail Hosting",
        desc: "Per mailbox, incl. admin & setup",
        price: "₹299",
        unit: "/mailbox/month",
        features: [
          "Office 365 integration",
          "Migration & setup assistance",
          "Ongoing admin & license management",
        ],
      },
    ],
  },
];

export const STORAGE_PLANS = [
  {
    name: "Business Drive 500",
    desc: "500 GB storage for up to 5 users",
    price: "₹1,499",
    features: [
      "500 GB allocated storage",
      "Up to 5 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
  {
    name: "Business Drive 1TB",
    desc: "1 TB storage for up to 10 users",
    price: "₹2,499",
    features: [
      "1 TB allocated storage",
      "Up to 10 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
  {
    name: "Business Drive 2TB",
    desc: "2 TB storage for up to 20 users",
    price: "₹4,499",
    featured: true,
    features: [
      "2 TB allocated storage",
      "Up to 20 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
  {
    name: "Business Drive 5TB",
    desc: "5 TB storage for up to 30 users",
    price: "₹9,999",
    features: [
      "5 TB allocated storage",
      "Up to 30 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
  {
    name: "Business Drive 10TB",
    desc: "10 TB storage for up to 50 users",
    price: "₹17,999",
    features: [
      "10 TB allocated storage",
      "Up to 50 user seats",
      "Expandable in 100 GB / 1 TB increments",
    ],
  },
];

export const COLO_PLANS = [
  {
    name: "Plan A: Wholesale / Anchor Tenant",
    desc: "Hyperscalers, ISPs & large enterprises taking full facility capacity (150 kW)",
    price: "₹8,000",
    suffix: "/ kW",
    sub: "+ ₹3.5 / Unit variable power",
    features: [
      "Full infrastructure control",
      "High physical customization",
      "Fully usage-based power allocation",
    ],
  },
  {
    name: "Plan B: Retail Co-Location",
    desc: "Local SMEs, web hosters & growing digital agencies",
    price: "₹3,500",
    suffix: "/ kW",
    sub: "+ ₹12.0 / Unit variable power",
    featured: true,
    badge: "POPULAR ENTRY POINT",
    features: [
      "Pay-per-rack format",
      "Minimal upfront commitment",
      "Low entry cost for rapid deployment",
    ],
  },
  {
    name: "Plan C: Managed Premium",
    desc: "Corporate & government clients seeking fixed operational envelopes",
    price: "₹14,000",
    suffix: "/ kW",
    sub: "+ ₹0 / Unit (all-inclusive) variable power",
    features: [
      "Maximum budget predictability",
      "Fully managed premium services",
      "Zero operational risk",
    ],
  },
];

export const ADDON_ROWS = [
  [
    "Rack Space & Colocation",
    "Standard commercial baseline tariff",
    "₹15,000 / kW / month",
  ],
  [
    "Server & Network Infrastructure",
    "Phased blocks, up to 5 blocks per site",
    "₹80,000 / 10 kW block / month",
  ],
  [
    "Physical Security Services",
    "Remote monitoring, biometric logging, on-site security",
    "₹10,000 / month (flat)",
  ],
  ["Additional IPv4 Address", "Per address", "₹250 / month"],
  [
    "Online Data Migration",
    "Network-based transfer into our nodes",
    "₹2,500 / TB",
  ],
  [
    "Physical Data Ingestion",
    "Bulk transfer via physical drive arrays",
    "₹1,000 / TB",
  ],
  ["Cloud Firewall", "Managed, rule-based edge firewall", "₹1,500 / month"],
  ["DDoS Protection", "Always-on volumetric & L7 mitigation", "₹2,500 / month"],
  [
    "Load Balancer",
    "L4/L7 traffic distribution, health checks",
    "₹1,999 / month",
  ],
  [
    "Site-to-Site / Remote-Access VPN",
    "Encrypted IPSEC/SSL connectivity",
    "₹1,200 / month",
  ],
  [
    "VPC (Virtual Private Cloud)",
    "Isolated network with custom subnetting",
    "₹999 / month",
  ],
  ["Reserve IP (IPv4/IPv6)", "Static, dedicated IP address", "₹250 / month"],
  ["DNS Manager", "Managed DNS with fast global propagation", "₹499 / month"],
];

export const DATA_ROWS = {
  dedicated: [
    ["DF 100", "100 Mbps", "130 Mbps", "₹12,500", "₹1,25,000"],
    ["DF 200", "200 Mbps", "260 Mbps", "₹25,000", "₹2,50,000"],
    ["DF 300", "300 Mbps", "390 Mbps", "₹37,500", "₹3,75,000"],
    ["DF 400", "400 Mbps", "520 Mbps", "₹50,000", "₹5,00,000"],
    ["DF 500", "500 Mbps", "650 Mbps", "₹62,500", "₹6,25,000"],
    ["DF 600", "600 Mbps", "780 Mbps", "₹75,000", "₹7,50,000"],
    ["DF 700", "700 Mbps", "910 Mbps", "₹87,500", "₹8,75,000"],
    ["DF 800", "800 Mbps", "1,040 Mbps", "₹1,00,000", "₹10,00,000"],
    ["DF 900", "900 Mbps", "1,170 Mbps", "₹1,12,500", "₹11,25,000"],
    [
      "DF 1000",
      "1 Gbps (1000 Mbps)",
      "1.3 Gbps (1300 Mbps)",
      "₹1,25,000",
      "₹12,50,000",
    ],
  ],
  shared: [
    ["SF 100", "100 Mbps", "130 Mbps", "₹4,990", "₹49,900"],
    ["SF 200", "200 Mbps", "260 Mbps", "₹9,990", "₹99,900"],
    ["SF 300", "300 Mbps", "390 Mbps", "₹14,990", "₹1,49,900"],
    ["SF 400", "400 Mbps", "520 Mbps", "₹19,990", "₹1,99,900"],
    ["SF 500", "500 Mbps", "650 Mbps", "₹24,990", "₹2,49,900"],
    ["SF 600", "600 Mbps", "780 Mbps", "₹29,990", "₹2,99,900"],
    ["SF 700", "700 Mbps", "910 Mbps", "₹34,990", "₹3,49,900"],
    ["SF 800", "800 Mbps", "1,040 Mbps", "₹39,990", "₹3,99,900"],
    ["SF 900", "900 Mbps", "1,170 Mbps", "₹44,990", "₹4,49,900"],
    [
      "SF 1000",
      "1 Gbps (1000 Mbps)",
      "1.3 Gbps (1300 Mbps)",
      "₹49,990",
      "₹4,99,900",
    ],
  ],
  pure: [
    ["PD 100", "100 Mbps", "130 Mbps", "₹2,990", "₹20,900"],
    ["PD 200", "200 Mbps", "260 Mbps", "₹5,990", "₹59,900"],
    ["PD 300", "300 Mbps", "390 Mbps", "₹8,990", "₹89,900"],
    ["PD 400", "400 Mbps", "520 Mbps", "₹11,990", "₹1,19,900"],
    ["PD 500", "500 Mbps", "650 Mbps", "₹14,990", "₹1,49,900"],
    ["PD 600", "600 Mbps", "780 Mbps", "₹17,990", "₹1,79,900"],
    ["PD 700", "700 Mbps", "910 Mbps", "₹20,990", "₹2,09,900"],
    ["PD 800", "800 Mbps", "1,040 Mbps", "₹23,990", "₹2,39,900"],
    ["PD 900", "900 Mbps", "1,170 Mbps", "₹26,990", "₹2,69,900"],
    [
      "PD 1000",
      "1 Gbps (1000 Mbps)",
      "1.3 Gbps (1300 Mbps)",
      "₹29,990",
      "₹2,99,900",
    ],
  ],
};
