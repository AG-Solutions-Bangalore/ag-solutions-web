/**
 * Dynamic XML Sitemap Generator Utility
 * 
 * Fetches active pages and live blogs from AG Solutions backend APIs (/getSitemap and /getBlogs)
 * and generates a standard W3C-compliant XML sitemap string.
 */

const SITE_ORIGIN = "https://ag-solutions.in";
const SITEMAP_API_ENDPOINT = "https://ag-solutions.in/webapi/public/api/getSitemap";
const BLOG_API_ENDPOINT = "https://ag-solutions.in/webapi/public/api/getBlogs";

export interface SitemapEntry {
  url: string;
  lastmod: string;
  name?: string;
  type?: string;
  priority?: string;
  status?: string;
  description?: string;
  image?: string;
  author?: string;
}

export function formatW3CDate(dateInput?: string | Date | null): string {
  if (!dateInput) {
    return new Date().toISOString().split("T")[0];
  }
  const parsed = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(parsed.getTime())) {
    return new Date().toISOString().split("T")[0];
  }
  return parsed.toISOString().split("T")[0];
}

export function normalizeCanonicalPath(rawUrl: string): string {
  let clean = String(rawUrl || "")
    .trim()
    .replace(/^https?:\/\/[^/]+/i, "")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");

  if (
    !clean ||
    clean === "home" ||
    clean === "index" ||
    clean === "index.php" ||
    clean === "index.html"
  ) {
    return "/";
  }
  if (clean === "about-us") {
    return "/about";
  }
  if (clean === "biz-stock") {
    return "/bizstock";
  }
  if (
    clean === "mobile_app.php" ||
    clean === "mobile_app" ||
    clean === "mobile-app"
  ) {
    return "/mobile-app-development";
  }

  return `/${clean}`;
}

export async function fetchLiveSitemapPages(): Promise<SitemapEntry[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(SITEMAP_API_ENDPOINT, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    if (json && Array.isArray(json.data)) {
      return json.data
        .filter((item: any) => item && (item.page_two_status === "Active" || !item.page_two_status))
        .map((item: any) => {
          const canonicalPath = normalizeCanonicalPath(item.page_two_url);
          const fullUrl = canonicalPath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${canonicalPath}`;
          return {
            url: fullUrl,
            lastmod: formatW3CDate(item.updated_at || item.created_at),
            name: item.page_two_name,
            type: item.page_two_type,
            priority: item.page_two_priority,
            status: item.page_two_status || "Active",
          };
        });
    }
  } catch (err: any) {
    console.warn(`⚠️ Warning fetching /getSitemap: ${err.message}`);
  }

  return [];
}

export async function fetchLiveBlogArticles(): Promise<SitemapEntry[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(BLOG_API_ENDPOINT, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    if (json && Array.isArray(json.data)) {
      return json.data
        .filter((item: any) => Boolean(item && item.blog_slug))
        .map((item: any) => {
          const rawImage = item.blog_banner_image || item.blog_image;
          const rawImg = rawImage
            ? String(rawImage).startsWith("http")
              ? rawImage
              : `https://ag-solutions.in/webapi/public/assets/images/blog_images/${rawImage}`
            : undefined;

          return {
            url: `${SITE_ORIGIN}/blogs/${String(item.blog_slug).trim()}`,
            lastmod: formatW3CDate(item.blog_updated_date || item.blog_created_date),
            name: item.blog_title,
            type: "Blog Article",
            status: "Active",
            description: item.blog_meta_description || item.blog_short_description || item.blog_title,
            image: rawImg,
            author: item.created_by || "AG Solutions",
          };
        });
    }
  } catch (err: any) {
    console.warn(`⚠️ Warning fetching /getBlogs: ${err.message}`);
  }

  return [];
}

export function buildSitemapXml(entries: SitemapEntry[]): string {
  const xmlLines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const entry of entries) {
    xmlLines.push("  <url>");
    xmlLines.push(`    <loc>${entry.url}</loc>`);
    xmlLines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    xmlLines.push("  </url>");
  }

  xmlLines.push("</urlset>");
  xmlLines.push("");

  return xmlLines.join("\n");
}

export async function generateSitemapXmlString(): Promise<{ xml: string; totalUrls: number; entries: SitemapEntry[] }> {
  const entries: SitemapEntry[] = [];
  const registeredUrls = new Set<string>();

  // 1. Root homepage
  const rootUrl = `${SITE_ORIGIN}/`;
  registeredUrls.add(rootUrl);
  entries.push({
    url: rootUrl,
    lastmod: formatW3CDate(),
    name: "Home",
    type: "Home",
    status: "Active",
  });

  // 2. Fetch pages from /getSitemap API
  const apiPages = await fetchLiveSitemapPages();
  for (const page of apiPages) {
    if (!registeredUrls.has(page.url)) {
      registeredUrls.add(page.url);
      entries.push(page);
    }
  }

  // 3. Fetch blogs from /getBlogs API
  const blogPosts = await fetchLiveBlogArticles();
  for (const blog of blogPosts) {
    if (!registeredUrls.has(blog.url)) {
      registeredUrls.add(blog.url);
      entries.push(blog);
    }
  }

  // 4. Essential static fallbacks if needed
  const FALLBACKS = [
    { path: "/about", name: "About Us" },
    { path: "/services", name: "Services" },
    { path: "/web-development", name: "Web Development" },
    { path: "/mobile-app-development", name: "Mobile App Development" },
    { path: "/digital-marketing", name: "Digital Marketing" },
    { path: "/products", name: "Products" },
    { path: "/export-biz", name: "Export Biz" },
    { path: "/bizstock", name: "BizStock" },
    { path: "/ease-marketing", name: "Ease Marketing" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/blogs", name: "Blogs" },
    { path: "/contacts", name: "Contact Us" },
  ];

  for (const fallback of FALLBACKS) {
    const fullUrl = `${SITE_ORIGIN}${fallback.path}`;
    if (!registeredUrls.has(fullUrl)) {
      registeredUrls.add(fullUrl);
      entries.push({
        url: fullUrl,
        lastmod: formatW3CDate(),
        name: fallback.name,
        type: "Fallback",
        status: "Active",
      });
    }
  }

  const xml = buildSitemapXml(entries);
  return { xml, totalUrls: entries.length, entries };
}
