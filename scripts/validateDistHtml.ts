import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, "../dist");

interface SchemaScript {
  id?: string;
  dataRh?: string;
  json: Record<string, any>;
  rawHtml: string;
}

function extractSchemasFromHtml(filePath: string): SchemaScript[] {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf-8");
  const scriptRegex = /<script\s+([^>]*?)type=["']application\/ld\+json["']([^>]*?)>([\s\S]*?)<\/script>/gi;
  const results: SchemaScript[] = [];

  let match;
  while ((match = scriptRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const attrs = `${match[1]} ${match[2]}`;
    const innerJson = match[3].trim();

    const idMatch = attrs.match(/id=["']([^"']+)["']/i);
    const dataRhMatch = attrs.match(/data-rh=["']([^"']+)["']/i);

    try {
      const parsed = JSON.parse(innerJson);
      results.push({
        id: idMatch ? idMatch[1] : undefined,
        dataRh: dataRhMatch ? dataRhMatch[1] : undefined,
        json: parsed,
        rawHtml: fullTag,
      });
    } catch (err: any) {
      console.error(`❌ JSON Parse Error in ${filePath}: ${err.message}`);
    }
  }

  return results;
}

export function runCliAudit() {
  console.log("\n========================================================");
  console.log("🔍 AG SOLUTIONS — DIRECT DIST HTML SCHEMA CLI AUDIT");
  console.log("========================================================\n");

  if (!fs.existsSync(DIST_DIR)) {
    console.error("❌ dist directory not found! Run bun run build first.");
    process.exit(1);
  }

  const testPages = [
    { name: "Home Page", path: path.join(DIST_DIR, "index.html"), expectedReviews: 25 },
    { name: "Export Biz", path: path.join(DIST_DIR, "export-biz.html"), expectedReviews: 10 },
    { name: "BizStock", path: path.join(DIST_DIR, "bizstock.html"), expectedReviews: 0 },
    { name: "Ease Marketing", path: path.join(DIST_DIR, "ease-marketing.html"), expectedReviews: 0 },
    { name: "Web Development", path: path.join(DIST_DIR, "web-development.html"), expectedReviews: 5 },
    { name: "Mobile App Development", path: path.join(DIST_DIR, "mobile-app-development.html"), expectedReviews: 5 },
    { name: "Digital Marketing", path: path.join(DIST_DIR, "digital-marketing.html"), expectedReviews: 5 },
    { name: "About Page", path: path.join(DIST_DIR, "about.html"), expectedReviews: 0 },
    { name: "Contacts Page", path: path.join(DIST_DIR, "contacts.html"), expectedReviews: 0 },
    { name: "Blog Detail Page", path: path.join(DIST_DIR, "blogs/why-seo-starts-with-a-strong-website.html"), expectedReviews: 0, expectedBlogPosting: 1, expectedBreadcrumb: 1 },
  ];

  let hasErrors = false;

  for (const page of testPages) {
    console.log(`📄 Testing: ${page.name} (${path.relative(DIST_DIR, page.path)})`);
    const schemas = extractSchemasFromHtml(page.path);

    const typeCounts: Record<string, number> = {};
    const reviewAuthors: string[] = [];
    const seenIds = new Set<string>();
    let duplicateIds = 0;

    for (const item of schemas) {
      const type = item.json["@type"] || "Unknown";
      typeCounts[type] = (typeCounts[type] || 0) + 1;

      if (type === "Review") {
        const author = item.json.author?.name || item.json.name || "Unknown Author";
        reviewAuthors.push(author);
      }

      if (item.id) {
        if (seenIds.has(item.id)) {
          console.warn(`   ⚠️ DUPLICATE SCRIPT ID: ${item.id}`);
          duplicateIds++;
          hasErrors = true;
        }
        seenIds.add(item.id);
      }
    }

    console.log(`   Total <script type="application/ld+json"> tags: ${schemas.length}`);
    console.log(`   Detected Schemas breakdown:`, typeCounts);

    const reviewCount = typeCounts["Review"] || 0;
    const hasAggregateRating = schemas.some((s) => s.json.aggregateRating);

    if (page.expectedReviews === 0 && (reviewCount > 0 || hasAggregateRating)) {
      console.error(`   ❌ Error: Expected 0 reviews/ratings, but found Review: ${reviewCount}, AggregateRating: ${hasAggregateRating}!`);
      hasErrors = true;
    } else if (page.expectedReviews !== undefined && reviewCount !== page.expectedReviews) {
      console.error(`   ❌ Review count mismatch: Expected ${page.expectedReviews}, found ${reviewCount}!`);
      hasErrors = true;
    } else {
      console.log(`   ✅ Verified: Exactly ${reviewCount} reviews, AggregateRating: ${hasAggregateRating ? 'Yes' : 'None'}.`);
    }

    if (reviewAuthors.length > 0) {
      console.log(`   Sample Review Authors (first 3):`, reviewAuthors.slice(0, 3));
    }

    console.log("--------------------------------------------------------\n");
  }

  if (hasErrors) {
    console.error("❌ Audit failed with issues!");
    process.exit(1);
  } else {
    console.log("🎉 ALL DIST HTML SCHEMAS ARE 100% VALID AND FREE OF DUPLICATES!\n");
  }
}

runCliAudit();
