# A–Z site audit / modernization inventory

## Public information architecture discovered

Primary navigation: Home, About, Solutions, Locations, Pricing, Contact, Console.

Solutions detail pages: Cloud Services, VPS Hosting, Dedicated Servers, Email Hosting, Networking & Security, Managed Services, Data Protection, Interconnection, Edge Colocation.

Legal: Privacy Policy, Terms & Conditions.

## Interaction inventory

- Header navigation with Solutions dropdown and mobile navigation.
- Solution-page tabs.
- Pricing tabs and Edge Micro request modal.
- Careers job-detail modal and application modal.
- Contact form, pricing request form, careers form, newsletter field.
- Console section navigation: Dashboard, Compute, Storage, Networking, Connectivity, Billing, Settings.
- Console create-server modal, delete confirmation, terminal modal.
- Assistant/chatbot UI.
- Location external map links.
- Responsive layouts for mobile/tablet/desktop.

## Pricing information captured from the live crawl

- Edge Micro: ₹899/month, 250 GB data transfer, monthly billing, ~24 hrs deployment.
- Additional IPv4: ₹250/month each.
- Business Cloud Storage expansions: ₹200/month per additional 100 GB or ₹1,500/month per additional 1 TB.
- Add-ons: Rack Space & Colocation ₹15,000/kW/month; Server & Network Infrastructure ₹80,000/10 kW block/month; Physical Security ₹10,000/month flat; Additional IPv4 ₹250/month; Online Data Migration ₹2,500/TB; Physical Data Ingestion ₹1,000/TB; Cloud Firewall ₹1,500/month; DDoS ₹2,500/month; Load Balancer ₹1,999/month; VPN ₹1,200/month; VPC ₹999/month; Reserve IP ₹250/month; DNS Manager ₹499/month.
- The public crawl confirms the existence of Plan A/B/C, Edge Micro through Edge Scale, and the three connectivity modes (1:1 Dedicated ILL, 1:10 Shared, Pure Data Transfer), but did not expose every hidden plan-row price. Those have not been fabricated in this implementation.

## QA notes

- The public crawl exposes accessible image assets for the infographic, CEO portrait, and Indore map.
- Two additional location image URLs currently return 404 in the crawl (`indore-datacenter-illustration.svg`, `ankleshwar-building.png`), so the modernized UI uses a graceful placeholder for unavailable content rather than a broken-image icon.
- The live public crawl does not expose exact form action URLs/API endpoints. The code therefore includes explicit environment-variable integration points rather than inventing an endpoint.

## Regression checklist

- [x] Primary routes represented
- [x] Nine solution pages represented
- [x] Footer legal pages represented
- [x] Solution tabs represented
- [x] Pricing categories represented
- [x] Edge Micro request modal represented
- [x] Careers detail/apply flows represented
- [x] Console sections represented
- [x] Responsive breakpoints implemented
- [x] Accessible labels/focus states added
- [x] Exact copy preserved for the content included from the public crawl
