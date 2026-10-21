import { HOME_FAQS } from "./faqs.js";
import { serviceData } from "./services.js";
import { commonFooter } from "./site.js";

export const SITE_ORIGIN = "https://www.datenfarmencenter.com";
export const SITE_NAME = "Datenfarmen Center";
export const LEGAL_NAME = "Datenfarmen Centers LLP";
export const OG_IMAGE = `${SITE_ORIGIN}/ankleshwar.png`;
export const LOGO_URL = `${SITE_ORIGIN}/logo-mark.png`;

export const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/solutions",
  "/locations",
  "/contact",
  "/cloud-services",
  "/vps-hosting",
  "/dedicated-servers",
  "/email-hosting",
  "/network-security",
  "/managed-services",
  "/data-protection",
  "/interconnection",
  "/edge-colocation",
  "/privacy-policy",
  "/terms-conditions",
];

const PAGE_SEO = {
  "/": {
    title: "Datenfarmen Center | Edge Data Centers in India",
    description:
      "Datenfarmen Center (Datenfarmen Centers LLP) is an Indian edge data center and cloud provider with colocation, VPS and dedicated servers in Ankleshwar and Indore.",
  },
  "/about": {
    title: "About Datenfarmen Center | Edge Infrastructure in India",
    description:
      "Learn how Datenfarmen Center builds modular edge data centers for India's regional markets, with facilities in Ankleshwar, Gujarat and Indore.",
  },
  "/solutions": {
    title: "Cloud, Colocation and VPS Solutions | Datenfarmen Center",
    description:
      "Explore Datenfarmen Center solutions: cloud services, VPS hosting, dedicated servers, edge colocation, networking, managed services and data protection.",
  },
  "/locations": {
    title: "Colocation in Ankleshwar and Indore | Datenfarmen Center",
    description:
      "Datenfarmen Center edge data centers in Ankleshwar (ANK-1) and Indore (IND-1) with 2N redundancy, carrier-neutral fibre and 150–300 kW IT capacity.",
  },
  "/contact": {
    title: "Contact Datenfarmen Center | Edge Data Centers in India",
    description:
      "Contact Datenfarmen Center for colocation, cloud, VPS and dedicated infrastructure in Ankleshwar and Indore. Email info@datenfarmen.com.",
  },
  "/cloud-services": {
    title: "Cloud Services | Datenfarmen Center",
    description:
      "Datenfarmen Center cloud services: single-tenant, multi-tenant and bare-metal compute at edge data centers in Ankleshwar and Indore.",
  },
  "/vps-hosting": {
    title: "VPS Hosting in India | Datenfarmen Center",
    description:
      "Datenfarmen Center VPS hosting on Linux or Windows with dedicated CPU, RAM and NVMe from edge facilities in Ankleshwar and Indore.",
  },
  "/dedicated-servers": {
    title: "Dedicated Servers | Datenfarmen Center",
    description:
      "Datenfarmen Center dedicated servers: single-tenant physical hardware in Ankleshwar and Indore for peak performance and full control.",
  },
  "/email-hosting": {
    title: "Business Email Hosting | Datenfarmen Center",
    description:
      "Datenfarmen Center email hosting for custom-domain business mail, hosted Exchange and Office 365 with gateway spam and malware filtering.",
  },
  "/network-security": {
    title: "Networking and Security | Datenfarmen Center",
    description:
      "Datenfarmen Center networking and security: firewalls, DDoS protection, VPN, VPC and private connectivity from carrier-neutral Indian facilities.",
  },
  "/managed-services": {
    title: "Managed Infrastructure Services | Datenfarmen Center",
    description:
      "Datenfarmen Center managed services provide 24/7 monitoring, OS patching, database operations and network security for regional infrastructure.",
  },
  "/data-protection": {
    title: "Backup and Disaster Recovery | Datenfarmen Center",
    description:
      "Datenfarmen Center data protection: backup, disaster recovery and object storage for workloads hosted in Ankleshwar and Indore.",
  },
  "/interconnection": {
    title: "Carrier Interconnection | Datenfarmen Center",
    description:
      "Datenfarmen Center interconnection: carrier-neutral connectivity, cross-connects and cloud on-ramps at Ankleshwar and Indore edge data centers.",
  },
  "/edge-colocation": {
    title: "Edge Colocation in India | Datenfarmen Center",
    description:
      "Datenfarmen Center edge colocation places compute closer to factories, retail and regional users in Gujarat and Central India for lower latency.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Datenfarmen Center",
    description:
      "How Datenfarmen Center (Datenfarmen Centers LLP) collects, uses and protects information across its website and infrastructure services.",
  },
  "/terms-conditions": {
    title: "Terms and Conditions | Datenfarmen Center",
    description:
      "Terms governing use of Datenfarmen Center website, colocation, cloud, VPS and connectivity services from Datenfarmen Centers LLP.",
  },
  "/console": {
    title: "Customer Console | Datenfarmen Center",
    description:
      "Datenfarmen Center customer console for managing compute, storage and networking.",
    noindex: true,
  },
};

export function canonicalUrl(pathname) {
  if (!pathname || pathname === "/") return `${SITE_ORIGIN}/`;
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE_ORIGIN}${clean}`;
}

export function getPageSeo(pathname) {
  const path = pathname || "/";
  const page = PAGE_SEO[path];
  if (page) {
    return {
      ...page,
      canonical: canonicalUrl(path),
      ogImage: OG_IMAGE,
      noindex: Boolean(page.noindex),
    };
  }
  return {
    title: `Page not found | ${SITE_NAME}`,
    description:
      "The requested page could not be found on the Datenfarmen Center website.",
    canonical: canonicalUrl(path),
    ogImage: OG_IMAGE,
    noindex: true,
  };
}

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: LEGAL_NAME,
    legalName: LEGAL_NAME,
    alternateName: [SITE_NAME, "Datenfarmen", "Datenfarmen Centers"],
    url: `${SITE_ORIGIN}/`,
    logo: LOGO_URL,
    email: commonFooter.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2, Kashmirpark Park, Nana Kumbhnath",
      addressLocality: "Nadiad",
      addressRegion: "Gujarat",
      postalCode: "387001",
      addressCountry: "IN",
    },
  };
}

function faqPageNode() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_ORIGIN}/#faq`,
    mainEntity: HOME_FAQS.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

function serviceNode(pathname) {
  const info = serviceData[pathname];
  if (!info) return null;
  return {
    "@type": "Service",
    "@id": `${canonicalUrl(pathname)}#service`,
    name: info.title,
    description: info.heroDesc,
    url: canonicalUrl(pathname),
    provider: { "@id": `${SITE_ORIGIN}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

function locationNodes() {
  return [
    {
      "@type": "Place",
      "@id": `${SITE_ORIGIN}/locations#ank-1`,
      name: "Datenfarmen Center ANK-1",
      alternateName: "Ankleshwar data center",
      description:
        "Edge data center in Ankleshwar GIDC, Gujarat, serving chemical, pharmaceutical and manufacturing workloads across South Gujarat.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ankleshwar",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 21.636528,
        longitude: 73.030694,
      },
      containedInPlace: { "@id": `${SITE_ORIGIN}/#organization` },
    },
    {
      "@type": "Place",
      "@id": `${SITE_ORIGIN}/locations#ind-1`,
      name: "Datenfarmen Center IND-1",
      alternateName: "Indore data center",
      description:
        "Edge data center in Indore, Madhya Pradesh, supporting manufacturing, pharmaceuticals, logistics, IT and digital enterprises in Central India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      containedInPlace: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ];
}

export function jsonLdForPath(pathname) {
  const graph = [organizationNode()];
  if (pathname === "/") graph.push(faqPageNode());
  if (pathname === "/locations") graph.push(...locationNodes());
  const service = serviceNode(pathname);
  if (service) graph.push(service);
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
