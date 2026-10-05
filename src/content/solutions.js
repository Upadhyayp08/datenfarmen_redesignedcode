import {
  Cloud,
  Database,
  Monitor,
  Network,
  Send,
  Server,
  Shield,
  Zap,
} from "lucide-react";
export const SOLUTIONS = [
  {
    name: "Cloud Services",
    path: "/cloud-services",
    icon: Cloud,
    desc: "Single-tenant & multi-tenant solutions, bare-metal servers, and cloud management.",
  },
  {
    name: "VPS Hosting",
    path: "/vps-hosting",
    icon: Server,
    desc: "Dedicated-resource virtual private servers on Linux or Windows, live in minutes.",
  },
  {
    name: "Dedicated Servers",
    path: "/dedicated-servers",
    icon: Database,
    desc: "Single-tenant physical hardware for peak, predictable performance.",
  },
  {
    name: "Email Hosting",
    path: "/email-hosting",
    icon: Send,
    desc: "Enterprise-grade business email — from custom-domain mail to hosted Exchange.",
  },
  {
    name: "Networking & Security",
    path: "/network-security",
    icon: Shield,
    desc: "Firewalls, DDoS protection, VPN, VPC and private connectivity.",
  },
  {
    name: "Managed Services",
    path: "/managed-services",
    icon: Monitor,
    desc: "24/7 monitoring and support for OS, database, network, and security management.",
  },
  {
    name: "Data Protection",
    path: "/data-protection",
    icon: Database,
    desc: "Disaster Recovery, Backup & Recovery, and Object Storage with high security.",
  },
  {
    name: "Interconnection",
    path: "/interconnection",
    icon: Network,
    desc: "Carrier connectivity, cross-connects, and Cloud-On-Ramp solutions.",
  },
  {
    name: "Edge Colocation",
    path: "/edge-colocation",
    icon: Zap,
    desc: "Ultra-low latency infrastructure supporting AI, IoT, and critical applications.",
  },
];
