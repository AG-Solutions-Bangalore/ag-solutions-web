import { SITE_ORIGIN } from "./constants";
import { escapeAttr, escapeHtml } from "./htmlUtils";
import { getSchemaScriptId } from "./schemaIds";

export interface RouteSEO {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  /**
   * Optional page-specific Open Graph image. Used by blog articles where
   * the hero image is part of the article content.
   */
  ogImage?: string;
  ogImageAlt?: string;
  schemas: Record<string, unknown>[];
  /**
   * Optional cap on the number of Review schemas for this route. Only set
   * when the React page intentionally limits the testimonials it renders
   * — keeps the SSG count in sync with the UI count.
   */
  maxReviews?: number;
}

const DEFAULT_OG_IMAGE = "https://ag-solutions-website.pages.dev/og-default.png";
const DEFAULT_OG_IMAGE_ALT = "AG Solutions - Scalable Web Systems Logo";

/**
 * Strip out any tags we are about to re-inject so we can rewrite them
 * deterministically (idempotent re-runs of the prerender).
 */
function stripExistingMeta(html: string): string {
  return html
    .replace(/<!-- Prerendered Dynamic JSON-LD Schemas -->[\s\S]*?<\/head>/i, "</head>")
    .replace(/<script id="schema-[^"]*"[^>]*>[\s\S]*?<\/script>\s*/gi, "")
    .replace(/<title[^>]*>[\s\S]*?<\/title>\s*/gi, "")
    .replace(/<meta[^>]*?\bname=["']description["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]*?\bname=["']keywords["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]*?\bname=["']author["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]*?\bname=["']publisher["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]*?\bname=["']robots["'][^>]*>\s*/gi, "")
    .replace(/<link[^>]*?\brel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]*?\bproperty=["']og:[^"']*["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]*?\bname=["']twitter:[^"']*["'][^>]*>\s*/gi, "");
}

/** Build the meta-tag block for a route. */
function buildMetaTags(seo: RouteSEO, canonical: string): string {
  const ogImage = seo.ogImage || DEFAULT_OG_IMAGE;
  const ogImageAlt = seo.ogImageAlt || DEFAULT_OG_IMAGE_ALT;

  const tags = [
    `<title data-rh="true">${escapeHtml(seo.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeAttr(seo.description)}">`,
    seo.keywords ? `<meta data-rh="true" name="keywords" content="${escapeAttr(seo.keywords)}">` : "",
    `<meta data-rh="true" name="robots" content="index, follow">`,
    `<meta data-rh="true" name="author" content="AG Solutions">`,
    `<meta data-rh="true" name="publisher" content="AG Solutions">`,
    `<link data-rh="true" rel="canonical" href="${canonical}">`,
    `<meta data-rh="true" property="og:type" content="${seo.ogType || "website"}">`,
    `<meta data-rh="true" property="og:url" content="${canonical}">`,
    `<meta data-rh="true" property="og:title" content="${escapeAttr(seo.title)}">`,
    `<meta data-rh="true" property="og:description" content="${escapeAttr(seo.description)}">`,
    `<meta data-rh="true" property="og:image" content="${escapeAttr(ogImage)}">`,
    `<meta data-rh="true" property="og:image:alt" content="${escapeAttr(ogImageAlt)}">`,
    `<meta data-rh="true" property="og:site_name" content="AG Solutions">`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-rh="true" name="twitter:creator" content="@agsolutions">`,
    `<meta data-rh="true" name="twitter:url" content="${canonical}">`,
    `<meta data-rh="true" name="twitter:title" content="${escapeAttr(seo.title)}">`,
    `<meta data-rh="true" name="twitter:description" content="${escapeAttr(seo.description)}">`,
    `<meta data-rh="true" name="twitter:image" content="${escapeAttr(ogImage)}">`,
    `<meta data-rh="true" name="twitter:image:alt" content="${escapeAttr(ogImageAlt)}">`,
  ];

  return tags.filter(Boolean).join("\n    ");
}

/** Build the JSON-LD <script> tags for a route's schemas. */
function buildSchemaTags(schemas: Record<string, unknown>[]): string {
  return schemas
    .map((s, idx) => {
      const scriptId = getSchemaScriptId(s, idx);
      // Strip the internal `_scriptId` marker before serialising.
      const { _scriptId, ...cleanSchema } = s;
      return `<script id="${scriptId}" data-rh="true" type="application/ld+json">${JSON.stringify(cleanSchema)}</script>`;
    })
    .join("\n    ");
}

/**
 * Apply the route's SEO config to the base SPA HTML and return the
 * prerendered route-specific HTML.
 */
export function buildHtmlForRoute(baseHtml: string, route: string, seo: RouteSEO): string {
  const html = stripExistingMeta(baseHtml);
  const canonical = seo.canonical || `${SITE_ORIGIN}${route === "/" ? "/" : route}`;

  const headMeta = buildMetaTags(seo, canonical);
  const schemaTags = buildSchemaTags(seo.schemas);

  return html.replace(
    "</head>",
    `    ${headMeta}\n    <!-- Prerendered Dynamic JSON-LD Schemas -->\n    ${schemaTags}\n  </head>`
  );
}
