import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function headTags(page, jsonLd) {
  const robots = page.noindex ? "noindex, nofollow" : "index, follow";
  return `    <title>${escapeAttr(page.title)}</title>
    <meta name="description" content="${escapeAttr(page.description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${escapeAttr(page.canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Datenfarmen Center" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:title" content="${escapeAttr(page.title)}" />
    <meta property="og:description" content="${escapeAttr(page.description)}" />
    <meta property="og:url" content="${escapeAttr(page.canonical)}" />
    <meta property="og:image" content="${escapeAttr(page.ogImage)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(page.title)}" />
    <meta name="twitter:description" content="${escapeAttr(page.description)}" />
    <meta name="twitter:image" content="${escapeAttr(page.ogImage)}" />
    <script type="application/ld+json" id="seo-jsonld">${JSON.stringify(jsonLd)}</script>
`;
}

function applyHead(template, appHtml, page, jsonLd) {
  let out = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );
  out = out.replace(/<title>[^<]*<\/title>\s*/i, "");
  out = out.replace(/<meta\s+name="description"[^>]*>\s*/i, "");
  return out.replace("</head>", `${headTags(page, jsonLd)}  </head>`);
}

function writeSitemap(routes, origin) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map((route) => {
      const loc = route === "/" ? `${origin}/` : `${origin}${route}`;
      const priority =
        route === "/"
          ? "1.0"
          : route.startsWith("/privacy") || route.startsWith("/terms")
            ? "0.3"
            : "0.8";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
  const { PUBLIC_ROUTES, SITE_ORIGIN, getPageSeo, jsonLdForPath } =
    await vite.ssrLoadModule("/src/content/seo.js");

  const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
  const spaShell = template
    .replace(/<title>[^<]*<\/title>/i, "<title>Datenfarmen Center</title>")
    .replace(
      "</head>",
      '    <meta name="robots" content="noindex, nofollow" />\n  </head>',
    );

  fs.writeFileSync(path.join(dist, "spa-shell.html"), spaShell);
  fs.mkdirSync(path.join(dist, "console"), { recursive: true });
  fs.writeFileSync(path.join(dist, "console/index.html"), spaShell);

  for (const route of PUBLIC_ROUTES) {
    const { html } = render(route);
    const page = getPageSeo(route);
    const document = applyHead(template, html, page, jsonLdForPath(route));
    const outPath =
      route === "/"
        ? path.join(dist, "index.html")
        : path.join(dist, route.slice(1), "index.html");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, document);
    console.log(`prerendered ${route}`);
  }

  const sitemap = writeSitemap(PUBLIC_ROUTES, SITE_ORIGIN);
  fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
  fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);
  console.log("wrote sitemap.xml");
} finally {
  await vite.close();
}
