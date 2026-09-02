import fs from "fs";
import path from "path";
import { DIST_DIR } from "../lib/constants";
import { extractSchemasFromHtml } from "./extractSchemas";
import { aggregateSchemas } from "./aggregator";
import { hasAuthorAndPublisherMeta, noPngLogoInHtml } from "./metaChecks";
import { ALL_TEST_PAGES } from "./pages";
import type { TestPage } from "./types";

/**
 * Walk every route in `ALL_TEST_PAGES`, parse its JSON-LD scripts, and
 * verify the route matches the per-page expectations (review count,
 * blog posting, breadcrumb, meta tags, no PNG logo, no duplicate IDs).
 */
export function runCliAudit(): void {
  console.log("\n========================================================");
  console.log("🔍 AG SOLUTIONS — DIRECT DIST HTML SCHEMA CLI AUDIT");
  console.log("========================================================\n");

  if (!fs.existsSync(DIST_DIR)) {
    console.error("❌ dist directory not found! Run bun run build first.");
    process.exit(1);
  }

  let hasErrors = false;

  for (const page of ALL_TEST_PAGES) {
    hasErrors = auditSinglePage(page) || hasErrors;
  }

  if (hasErrors) {
    console.error("❌ Audit failed with issues!");
    process.exit(1);
  } else {
    console.log("🎉 ALL DIST HTML SCHEMAS ARE 100% VALID AND FREE OF DUPLICATES!\n");
  }
}

function auditSinglePage(page: TestPage): boolean {
  console.log(`📄 Testing: ${page.name} (${path.relative(DIST_DIR, page.path)})`);

  if (!fs.existsSync(page.path)) {
    console.log(`   ⚠️ Skipped: HTML file not found at ${page.path}\n`);
    console.log("--------------------------------------------------------\n");
    return false;
  }

  const schemas = extractSchemasFromHtml(page.path);
  const html = fs.readFileSync(page.path, "utf-8");
  const aggregate = aggregateSchemas(schemas);

  console.log(`   Total <script type="application/ld+json"> tags: ${schemas.length}`);
  console.log(`   Detected Schemas breakdown:`, aggregate.typeCounts);

  const reviewCheckPassed = verifyReviewCount(page, aggregate.totalReviews, aggregate.hasAggregateRating);
  const metaCheckPassed = verifyMetaTags(html);
  const breadcrumbCheckPassed = verifyBreadcrumbCount(page, aggregate.typeCounts["BreadcrumbList"] || 0);
  const blogPostingCheckPassed = verifyBlogPostingCount(page, aggregate.typeCounts["BlogPosting"] || 0);
  const dupCheckPassed = aggregate.duplicateIds === 0;

  if (aggregate.reviewAuthors.length > 0) {
    console.log(`   Sample Review Authors (first 3):`, aggregate.reviewAuthors.slice(0, 3));
  }

  console.log("--------------------------------------------------------\n");

  return !(reviewCheckPassed && metaCheckPassed && breadcrumbCheckPassed && blogPostingCheckPassed && dupCheckPassed);
}

function verifyReviewCount(page: TestPage, totalReviews: number, hasAggregateRating: boolean): boolean {
  if (hasAggregateRating) {
    console.error("   ❌ AggregateRating is not allowed in testimonial markup.");
    return false;
  }

  if (page.expectedReviews === 0) {
    if (totalReviews > 0) {
      console.error(
        `   ❌ Error: Expected 0 reviews, but found ${totalReviews}!`
      );
      return false;
    }
  } else if (totalReviews !== page.expectedReviews) {
    console.error(
      `   ❌ Review count mismatch: Expected ${page.expectedReviews}, found ${totalReviews}!`
    );
    return false;
  } else {
    console.log(
      `   ✅ Verified: Exactly ${totalReviews} reviews, AggregateRating: None.`
    );
  }
  return true;
}

function verifyMetaTags(html: string): boolean {
  if (!hasAuthorAndPublisherMeta(html)) {
    console.error("   ❌ Missing author or publisher meta tag.");
    return false;
  }
  if (!noPngLogoInHtml(html)) {
    console.error("   ❌ Found PNG logo in SEO output; expected WebP.");
    return false;
  }
  return true;
}

function verifyBreadcrumbCount(page: TestPage, breadcrumbCount: number): boolean {
  const expected = page.expectedBreadcrumb === 1 ? 1 : 0;
  if (breadcrumbCount !== expected) {
    console.error(
      `   ❌ Breadcrumb count mismatch: expected ${expected}, found ${breadcrumbCount}.`
    );
    return false;
  }
  return true;
}

function verifyBlogPostingCount(page: TestPage, blogPostingCount: number): boolean {
  const expected = page.expectedBlogPosting || 0;
  if (blogPostingCount !== expected) {
    console.error(
      `   ❌ BlogPosting count mismatch: expected ${expected}, found ${blogPostingCount}.`
    );
    return false;
  }
  return true;
}
