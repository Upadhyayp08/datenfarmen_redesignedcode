# Datenfarmen — Modernized React Frontend

This project is a visual modernization of the public Datenfarmen website while retaining the discovered route map, page copy, pricing information surfaced by the live site, solution tabs, contact/career flows, pricing request modal, and Console UI structure.

## Stack

- React
- React Router
- Vite
- Lucide React icons
- CSS variables + responsive component styling

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Form integration

The public site exposes contact, newsletter, pricing-request and careers forms, but the public crawl does not expose their exact form action/API endpoint. To avoid inventing a backend, the frontend keeps the UX and validation flow and provides explicit integration points:

- `VITE_CONTACT_FORM_ENDPOINT`
- `VITE_CAREERS_FORM_ENDPOINT`
- `VITE_NEWSLETTER_FORM_ENDPOINT`

Set these to the production form handler/API used by the existing deployment before going live.

## Key routes

`/`, `/about`, `/solutions`, `/locations`, `/pricing`, `/contact`, `/console`, `/cloud-services`, `/vps-hosting`, `/dedicated-servers`, `/email-hosting`, `/network-security`, `/managed-services`, `/data-protection`, `/interconnection`, `/edge-colocation`, `/privacy-policy`, `/terms-conditions`.

## Assets

The live site's accessible image assets used here remain referenced from `https://datenfarmen.com/` for fidelity:

- `/infographic.png`
- `/vishal.png`
- `/indore-map.png`

The live crawl currently exposes some additional location assets as 404s, so the Ankleshwar gallery uses a graceful styled placeholder rather than silently failing.
