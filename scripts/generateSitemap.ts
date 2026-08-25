import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  generateSitemapXmlString,
  fetchLiveBlogArticles,
  fetchLiveSitemapPages,
  type SitemapEntry,
} from "../src/features/sitemap/utils/sitemapGenerator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.resolve(ROOT_DIR, "public");
const DIST_DIR = path.resolve(ROOT_DIR, "dist");
const PUBLIC_SITEMAP = path.resolve(PUBLIC_DIR, "sitemap.xml");
const DIST_SITEMAP = path.resolve(DIST_DIR, "sitemap.xml");

export { fetchLiveBlogArticles, fetchLiveSitemapPages, type SitemapEntry };

export async function generateSitemap(): Promise<{ totalUrls: number; entries: SitemapEntry[] }> {
  console.log("\n🗺️  ========================================================");
  console.log("   AG SOLUTIONS — DYNAMIC SITEMAP API GENERATOR");
  console.log("   Endpoint: https://ag-solutions.in/webapi/public/api/getSitemap");
  console.log("========================================================\n");

  const { xml, totalUrls, entries } = await generateSitemapXmlString();

  // 1. Write to public/sitemap.xml
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(PUBLIC_SITEMAP, xml, "utf-8");
  console.log(`✅ Saved sitemap: ${PUBLIC_SITEMAP}`);

  // 2. Sync to dist/sitemap.xml if dist directory exists
  if (fs.existsSync(DIST_DIR)) {
    fs.writeFileSync(DIST_SITEMAP, xml, "utf-8");
    console.log(`✅ Synced sitemap to dist: ${DIST_SITEMAP}`);
  }

  console.log(`\n🎉 Dynamically Generated ${totalUrls} URLs using AG /getSitemap API!`);
  console.log("========================================================\n");

  return { totalUrls, entries };
}

// CLI Execution Entrypoint
if (process.argv[1] && process.argv[1].endsWith("generateSitemap.ts")) {
  generateSitemap().catch((err) => {
    console.error("❌ Dynamic sitemap generation failed:", err);
    process.exit(1);
  });
}
