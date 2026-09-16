# Datenfarmen Centers LLP

## Local development

Use Node.js 18+ (Node.js 20 LTS recommended).

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
npm run preview
```

If upgrading or switching from an older copy, remove the old dependency tree first:

```bash
rm -rf node_modules
npm install
```

### Runtime fixes included

- ScrollTop `useEffect` now returns `undefined` instead of the numeric return value from `window.scrollTo`.
- Removed the React 18-incompatible `fetchPriority` DOM prop warning.
- Added a local favicon.
- React/Vite/router/lucide versions are pinned for reproducible installs.
- Router future warnings are intentionally left non-invasive; they are informational and do not affect rendering.
