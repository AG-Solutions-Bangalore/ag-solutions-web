/**
 * AG Solutions — Static Site Generation (SSG) orchestrator.
 *
 * Reads the Vite-built `dist/index.html` and writes a fully-rendered
 * SEO + JSON-LD HTML file for every static route (BASE_ROUTES_CONFIG)
 * and every dynamic blog article returned by the live API.
 *
 * Per-perspective pieces live in dedicated modules:
 *   - `lib/`          shared utilities (constants, html, api, review, schema ids)
 *   - `routes/`       per-route SEO config (one file per page)
 *   - `blog/`         blog article processing
 *   - `validators/`   rich-results validation rules
 *
 * This file is just the orchestrator — every non-trivial concern lives
 * in its own module.
 */
import fs from "fs";
import path from "path";

import { DIST_DIR, DIST_INDEX } from "./lib/constants";
import { fetchDynamicFAQs, fetchDynamicReviews } from "./lib/apiClient";
import { attachReviewsToEntity } from "./lib/reviewAttacher";
import { buildHtmlForRoute } from "./lib/htmlBuilder";
import { BASE_ROUTES_CONFIG } from "./routes";
import { processBlogArticles } from "./blog/processBlogArticles";
import { generateSitemap } from "./generateSitemap";

export async function prerenderAllRoutes(): Promise<void> {
  if (!fs.existsSync(DIST_INDEX)) {
    console.error("❌ dist/index.html not found. Run vite build first!");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(DIST_INDEX, "utf-8");
  let generatedCount = 0;

  console.log("🚀 Starting Dynamic SSG Pre-Rendering & Schema Injection...");

  // ── 1. Static routes (from per-perspective route modules) ───────────
  for (const [route, baseSeo] of Object.entries(BASE_ROUTES_CONFIG)) {
    let schemas = [...baseSeo.schemas];

    // Always check the testimonial API so the build report reflects every
    // page's available reviews, even where Google review markup is ineligible.
    const [dynamicFaq, apiReviews] = await Promise.all([
      fetchDynamicFAQs(route),
      fetchDynamicReviews(route, baseSeo.maxReviews),
    ]);
    if (dynamicFaq) schemas.push(dynamicFaq);

    const structuredReviews = apiReviews;
    if (structuredReviews.length > 0) {
      schemas = attachReviewsToEntity(schemas, structuredReviews);
    }

    const routeSeo = { ...baseSeo, schemas };
    const routeHtml = buildHtmlForRoute(baseHtml, route, routeSeo);

    if (route === "/") {
      fs.writeFileSync(DIST_INDEX, routeHtml, "utf-8");
      console.log(
        `✅ Pre-rendered Root: dist/index.html (API reviews: ${apiReviews.length}, structured reviews: ${structuredReviews.length}, FAQs: ${dynamicFaq ? "Yes" : "None"})`
      );
    } else {
      const routePath = route.replace(/^\//, "");
      const targetDir = path.join(DIST_DIR, routePath);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, "index.html"), routeHtml, "utf-8");
      // Clean URL fallback
      fs.writeFileSync(path.join(DIST_DIR, `${routePath}.html`), routeHtml, "utf-8");
      console.log(
        `✅ Pre-rendered Route: ${route} (API reviews: ${apiReviews.length}, structured reviews: ${structuredReviews.length}, FAQs: ${dynamicFaq ? "Yes" : "None"})`
      );
    }
    generatedCount++;
  }

  // ── 2. Dynamic blog articles ────────────────────────────────────────
  const blogCount = await processBlogArticles(baseHtml);
  generatedCount += blogCount;

  console.log(
    `\n🎉 Static SEO Pre-rendering Complete! ${generatedCount} routes generated with dynamic embedded JSON-LD schemas.`
  );

  // ── 3. Sync sitemap ─────────────────────────────────────────────────
  await generateSitemap();
}

prerenderAllRoutes().catch((err) => {
  console.error("❌ Pre-rendering failed:", err);
  process.exit(1);
});
