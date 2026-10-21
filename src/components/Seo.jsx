import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_NAME, getPageSeo, jsonLdForPath } from "../content/seo.js";

function upsertMeta(attr, key, content) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(data) {
  let el = document.getElementById("seo-jsonld");
  if (!el) {
    el = document.createElement("script");
    el.id = "seo-jsonld";
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPageSeo(pathname);
    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta(
      "name",
      "robots",
      page.noindex ? "noindex, nofollow" : "index, follow",
    );
    upsertCanonical(page.canonical);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", page.canonical);
    upsertMeta("property", "og:image", page.ogImage);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", page.ogImage);
    upsertJsonLd(jsonLdForPath(pathname));
  }, [pathname]);

  return null;
}
