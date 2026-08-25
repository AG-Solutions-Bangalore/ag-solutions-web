import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "../dist");
const DIST_INDEX = path.resolve(DIST_DIR, "index.html");
const SITE_ORIGIN = "https://ag-solutions.in";
const API_BASE = "https://ag-solutions.in/webapi/public/api";

interface RouteSEO {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  schemas: Record<string, unknown>[];
}

const GLOBAL_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ag-solutions.in/#organization",
  name: "AG Solutions",
  url: "https://ag-solutions.in/",
  logo: {
    "@type": "ImageObject",
    url: "https://ag-solutions.in/images/logo.webp",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9511852955",
    contactType: "Customer Support",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

const GLOBAL_WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ag-solutions.in/#website",
  name: "AG Solutions",
  url: "https://ag-solutions.in/",
  publisher: {
    "@type": "Organization",
    "@id": "https://ag-solutions.in/#organization",
    name: "AG Solutions",
  },
};

// Base configurations for static routes (Only structural identity schemas)
const BASE_ROUTES_CONFIG: Record<string, RouteSEO> = {
  "/": {
    title: "AG Solutions | Web Development, Mobile App Development & Software Solutions Company",
    description: "AG Solutions is a leading software development company providing web development, mobile applications, digital marketing, and export compliance software.",
    keywords: "web development company, mobile app development, export biz, ease marketing, ag solutions",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      GLOBAL_WEBSITE_SCHEMA,
    ],
  },
  "/export-biz": {
    title: "Export Biz - Export Documentation & Compliance Software | AG Solutions",
    description: "Export Biz automates manual export documentation into structured digital workflows, generating Invoices, Packing Lists, and shipping bills in seconds.",
    keywords: "export documentation software, export biz, shipping bills, export invoice software",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": "https://ag-solutions.in/export-biz#software",
        name: "Export Biz - Export Documentation Software",
        description: "Intelligent export documentation and customs compliance software by AG Solutions.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows, Web Browser, Cloud-based",
        url: "https://ag-solutions.in/export-biz",
      },
    ],
  },
  "/bizstock": {
    title: "BizStock - Inventory & Stock Management Software | AG Solutions",
    description: "BizStock ERP software for smart inventory tracking, multi-warehouse sync, automatic purchase orders, and barcode scanning.",
    keywords: "inventory management software, stock management erp, warehouse software",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": "https://ag-solutions.in/bizstock#software",
        name: "BizStock - Inventory & Stock Management Software",
        description: "Real-time inventory tracking, warehouse management, and stock ERP system by AG Solutions.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, Android, iOS, Windows",
        url: "https://ag-solutions.in/bizstock",
      },
    ],
  },
  "/ease-marketing": {
    title: "Ease Marketing - WhatsApp Marketing & Automation Software | AG Solutions",
    description: "Automate WhatsApp campaigns, broadcast messages, CRM customer workflows, and multi-channel lead tracking with Ease Marketing.",
    keywords: "whatsapp marketing software, ease marketing, bulk whatsapp tool, marketing automation",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": "https://ag-solutions.in/ease-marketing#software",
        name: "Ease Marketing - WhatsApp Marketing & Automation Software",
        description: "High-converting WhatsApp marketing, automated messaging, and campaign tracking software by AG Solutions.",
        applicationCategory: "MarketingApplication",
        operatingSystem: "Web Browser, Cloud-based",
        url: "https://ag-solutions.in/ease-marketing",
      },
    ],
  },
  "/web-development": {
    title: "Web & Website Development Company | AG Solutions",
    description: "High-performance, WCAG compliant, and SEO-optimized website and web application development using React, Next.js, and modern tech.",
    keywords: "web development services, custom website development, react developer, ag solutions",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://ag-solutions.in/web-development#service",
        name: "Web & Website Development Services",
        description: "Custom responsive, fast and SEO-friendly websites that deliver exceptional user experiences.",
        serviceType: "Web Development",
        provider: {
          "@type": "Organization",
          "@id": "https://ag-solutions.in/#organization",
          name: "AG Solutions",
          url: "https://ag-solutions.in/",
        },
        areaServed: {
          "@type": "Country",
          name: "IN",
        },
      },
    ],
  },
  "/mobile-app-development": {
    title: "Mobile App Development | iOS & Android – AG Solutions",
    description: "Custom iOS and Android mobile app development with high performance, seamless UX, and offline-first cloud sync.",
    keywords: "mobile app development, ios app, android app development company",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://ag-solutions.in/mobile-app-development#service",
        name: "Mobile App Development Services",
        description: "iOS and Android mobile app development by AG Solutions.",
        serviceType: "Mobile App Development",
        provider: {
          "@type": "Organization",
          "@id": "https://ag-solutions.in/#organization",
          name: "AG Solutions",
          url: "https://ag-solutions.in/",
        },
        areaServed: {
          "@type": "Country",
          name: "IN",
        },
      },
    ],
  },
  "/digital-marketing": {
    title: "Digital Marketing Services | SEO, Ads & Social Media | AG Solutions",
    description: "Drive high-converting leads with data-driven SEO, Google Ads, Meta Ads, and ROI-focused digital marketing campaigns.",
    keywords: "digital marketing services, seo agency, google ads agency, social media marketing",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://ag-solutions.in/digital-marketing#service",
        name: "Digital Marketing Services",
        description: "Data-driven digital marketing solutions by AG Solutions.",
        serviceType: "Digital Marketing",
        provider: {
          "@type": "Organization",
          "@id": "https://ag-solutions.in/#organization",
          name: "AG Solutions",
          url: "https://ag-solutions.in/",
        },
        areaServed: {
          "@type": "Country",
          name: "IN",
        },
      },
    ],
  },
  "/about": {
    title: "About AG Solutions | IT Solutions for New Age Businesses",
    description: "Learn about AG Solutions - Our mission, experienced team, and dedication to building world-class software and web architectures.",
    keywords: "about ag solutions, software company history, it development team",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
    ],
  },
  "/portfolio": {
    title: "AG Solutions | Web & Software Development Portfolio.",
    description: "Explore the AG Solutions portfolio featuring web development, mobile apps, and software projects built to deliver innovative digital solutions for businesses.",
    keywords: "ag solutions portfolio, web design case studies, app development portfolio",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://ag-solutions.in/portfolio#collectionpage",
        name: "AG Solutions | Web & Software Development Portfolio.",
        url: "https://ag-solutions.in/portfolio",
        description: "Explore the AG Solutions portfolio featuring web development, mobile apps, and software projects built to deliver innovative digital solutions for businesses.",
        author: {
          "@type": "Organization",
          "@id": "https://ag-solutions.in/#organization",
          name: "AG Solutions",
          url: "https://ag-solutions.in/",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://ag-solutions.in/#organization",
          name: "AG Solutions",
          url: "https://ag-solutions.in/",
          logo: {
            "@type": "ImageObject",
            url: "https://ag-solutions.in/images/logo.webp",
          },
        },
      },
    ],
  },
  "/services": {
    title: "Services | Web, Mobile & Digital Marketing Solutions | AG Solutions",
    description: "Explore our software services: Full-Stack Web Development, iOS & Android Mobile Apps, and Performance Digital Marketing.",
    keywords: "it services, web development, mobile apps, digital marketing, software development",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
    ],
  },
  "/products": {
    title: "Products & Software Solutions | Export Biz, BizStock & Ease Marketing",
    description: "Discover innovative enterprise software by AG Solutions: Export Biz for documentation, BizStock for ERP inventory, and Ease Marketing for WhatsApp CRM.",
    keywords: "ag solutions products, export biz, bizstock, ease marketing, business software",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
    ],
  },
  "/blogs": {
    title: "Blogs & Tech Insights | AG Solutions",
    description: "Read the latest articles on web architecture, software engineering, export compliance, and digital marketing trends.",
    keywords: "technology blogs, web development trends, software architecture insights",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
    ],
  },
  "/contacts": {
    title: "Contact AG Solutions | Business & IT Solutions",
    description: "Contact AG Solutions for project enquiries, software demos, and technical consultations. Reach us via phone, email, or WhatsApp.",
    keywords: "contact ag solutions, hire web developers, software quotation",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact AG Solutions",
        url: "https://ag-solutions.in/contacts",
      },
    ],
  },
};

import { generateSitemap, fetchLiveBlogArticles } from "./generateSitemap";

/**
 * Dynamically fetch testimonials from API for a given route.
 * Returns Review schemas only if real API items exist.
 */
async function fetchDynamicTestimonials(route: string): Promise<Record<string, unknown>[]> {
  try {
    const apiRoute = route === "/" ? "home" : route.replace(/^\//, "");
    const res = await fetch(`${API_BASE}/getTestimonial/${apiRoute}`, {
      headers: {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return [];
    const json = await res.json();
    const data = json?.data;
    if (!Array.isArray(data) || data.length === 0) return [];
    
    return data
      .filter((item: any) => item?.testimonial_client_name && item?.testimonial_description)
      .map((item: any, i: number) => {
        const authorName = item.testimonial_client_name;
        const rawRating = item?.testimonial_rating ?? item?.rating ?? item?.rating_value;
        const rating = (rawRating !== undefined && rawRating !== null && rawRating !== "" && Number(rawRating) > 0)
          ? String(rawRating)
          : "5";
        const slug = String(authorName).toLowerCase().replace(/[^a-z0-9]/g, "-");
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          _scriptId: `schema-review-${slug}-${i}`,
          name: authorName,
          author: {
            "@type": "Person",
            name: authorName,
          },
          reviewBody: item.testimonial_description,
          reviewRating: {
            "@type": "Rating",
            ratingValue: rating,
            bestRating: "5",
          },
          itemReviewed: {
            "@type": "Organization",
            name: "AG Solutions",
          },
        };
      });
  } catch {
    return [];
  }
}

/**
 * Dynamically fetch FAQs from API for a given route.
 * Returns FAQPage schema only if real API items exist.
 */
async function fetchDynamicFAQs(route: string): Promise<Record<string, unknown> | null> {
  try {
    const slug = route === "/" ? "home" : route.replace(/^\//, "");
    const res = await fetch(`${API_BASE}/getFAQBySlug/${slug}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return null;
    const json = await res.json();
    const data = json?.data;
    if (!Array.isArray(data) || data.length === 0) return null;

    const mainEntity = data
      .filter((item: any) => item?.faq_que && item?.faq_ans)
      .map((item: any) => ({
        "@type": "Question",
        name: item.faq_que,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.faq_ans,
        },
      }));

    if (mainEntity.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      _scriptId: "schema-faqpage",
      mainEntity,
    };
  } catch {
    return null;
  }
}

async function fetchBlogDetail(slug: string): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE}/getBlogsBySlug/${slug}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(6000),
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

function toIsoDate(value?: string): string | undefined {
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date.toISOString() : undefined;
}

function upsertTag(html: string, regex: RegExp, newTag: string): string {
  if (regex.test(html)) {
    return html.replace(regex, newTag);
  }
  return html.replace("</head>", `  ${newTag}\n</head>`);
}

function escapeHtml(str = ""): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(str = ""): string {
  return escapeHtml(str).replace(/"/g, "&quot;");
}

function getSchemaScriptId(s: Record<string, unknown>, idx: number): string {
  if (s._scriptId && typeof s._scriptId === "string") {
    return s._scriptId;
  }
  const type = (s["@type"] as string)?.toLowerCase() || "custom";
  if (type === "review") {
    const authorName = (s.author as any)?.name || (s.name as string) || `reviewer-${idx}`;
    const slug = String(authorName).toLowerCase().replace(/[^a-z0-9]/g, "-");
    return `schema-review-${slug}-${idx}`;
  }
  if (type === "faqpage") {
    return "schema-faqpage";
  }
  if (type === "organization") {
    return "schema-organization";
  }
  if (type === "website") {
    return "schema-website";
  }
  if (type === "service") {
    return "schema-service";
  }
  if (type === "softwareapplication") {
    return "schema-softwareapplication";
  }
  if (type === "breadcrumblist") {
    return "schema-breadcrumblist";
  }
  if (type === "blogposting") {
    return "schema-blogposting";
  }
  if (type === "contactpage") {
    return "schema-contactpage";
  }
  if (type === "collectionpage") {
    return "schema-collectionpage";
  }
  return `schema-${type}-${idx}`;
}

function buildHtmlForRoute(baseHtml: string, route: string, seo: RouteSEO): string {
  let html = baseHtml;
  const canonical = `${SITE_ORIGIN}${route === "/" ? "/" : route}`;

  // 1. Title & Meta
  html = upsertTag(html, /<title>.*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = upsertTag(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeAttr(seo.description)}" />`);
  html = upsertTag(html, /<meta\s+name=["']author["'][^>]*>/i, `<meta name="author" content="AG Solutions" />`);
  html = upsertTag(html, /<meta\s+name=["']publisher["'][^>]*>/i, `<meta name="publisher" content="AG Solutions" />`);
  if (seo.keywords) {
    html = upsertTag(html, /<meta\s+name=["']keywords["'][^>]*>/i, `<meta name="keywords" content="${escapeAttr(seo.keywords)}" />`);
  }
  html = upsertTag(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`);

  // 2. OpenGraph
  html = upsertTag(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeAttr(seo.title)}" />`);
  html = upsertTag(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeAttr(seo.description)}" />`);
  html = upsertTag(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${canonical}" />`);

  // 3. Pre-inject JSON-LD Schemas directly into HTML head with data-rh="true" to sync with React Helmet
  const schemaTags = seo.schemas
    .map((s, idx) => {
      const scriptId = getSchemaScriptId(s, idx);
      const { _scriptId, ...cleanSchema } = s;
      return `<script id="${scriptId}" data-rh="true" type="application/ld+json">${JSON.stringify(cleanSchema)}</script>`;
    })
    .join("\n    ");

  html = html.replace("</head>", `    <!-- Prerendered Dynamic JSON-LD Schemas -->\n    ${schemaTags}\n  </head>`);

  return html;
}

export async function prerenderAllRoutes() {
  if (!fs.existsSync(DIST_INDEX)) {
    console.error("❌ dist/index.html not found. Run vite build first!");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(DIST_INDEX, "utf-8");
  let generatedCount = 0;

  console.log("🚀 Starting Dynamic SSG Pre-Rendering & Schema Injection...");

  // 1. Static Routes with Dynamic Testimonial & FAQ API data
  for (const [route, baseSeo] of Object.entries(BASE_ROUTES_CONFIG)) {
    const schemas = [...baseSeo.schemas];

    // Fetch dynamic FAQs from API for this route
    const dynamicFaq = await fetchDynamicFAQs(route);
    if (dynamicFaq) {
      schemas.push(dynamicFaq);
    }

    // Fetch dynamic Testimonials from API for this route
    const dynamicReviews = await fetchDynamicTestimonials(route);
    if (dynamicReviews.length > 0) {
      schemas.push(...dynamicReviews);
    }

    const routeSeo: RouteSEO = {
      ...baseSeo,
      schemas,
    };

    const routeHtml = buildHtmlForRoute(baseHtml, route, routeSeo);

    if (route === "/") {
      fs.writeFileSync(DIST_INDEX, routeHtml, "utf-8");
      console.log(`✅ Pre-rendered Root: dist/index.html (Dynamic Reviews: ${dynamicReviews.length}, FAQs: ${dynamicFaq ? 'Yes' : 'None'})`);
      generatedCount++;
    } else {
      const targetDir = path.join(DIST_DIR, route.replace(/^\//, ""));
      fs.mkdirSync(targetDir, { recursive: true });
      const targetFile = path.join(targetDir, "index.html");
      fs.writeFileSync(targetFile, routeHtml, "utf-8");

      // Also create clean URL fallback file (e.g. dist/export-biz.html)
      const cleanHtmlFile = path.join(DIST_DIR, `${route.replace(/^\//, "")}.html`);
      fs.writeFileSync(cleanHtmlFile, routeHtml, "utf-8");

      console.log(`✅ Pre-rendered Route: ${route} (Dynamic Reviews: ${dynamicReviews.length}, FAQs: ${dynamicFaq ? 'Yes' : 'None'})`);
      generatedCount++;
    }
  }

  // 2. Dynamic Blog Routes Pre-Rendering
  try {
    const blogPosts = await fetchLiveBlogArticles();
    console.log(`\n📚 Pre-rendering ${blogPosts.length} Dynamic Blog Articles...`);
    for (const blog of blogPosts) {
      const slug = blog.url.split("/blogs/")[1] || "";
      if (!slug) continue;
      const blogRoute = `/blogs/${slug}`;
      const detail = await fetchBlogDetail(slug);
      const detailBlog = detail?.data;
      const blogTitle = detailBlog?.blog_title || blog.name || slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      const description = detailBlog?.blog_meta_description || detailBlog?.blog_short_description || blog.description || blogTitle;
      const imageBaseUrl = detail?.image_url?.find((item: any) => item?.image_for === "Blog")?.image_url;
      const image = detailBlog?.blog_banner_image && imageBaseUrl
        ? `${imageBaseUrl}${detailBlog.blog_banner_image}`
        : blog.image;
      const datePublished = toIsoDate(detailBlog?.blog_created_date || blog.lastmod);
      const dateModified = toIsoDate(detailBlog?.blog_updated_date || detailBlog?.blog_created_date || blog.lastmod);
      const authorName = detailBlog?.created_by || blog.author || "AG Solutions";
      const faqMainEntity = Array.isArray(detail?.faq)
        ? detail.faq
            .filter((faq: any) => faq?.faq_que && faq?.faq_ans)
            .map((faq: any) => ({
              "@type": "Question",
              name: faq.faq_que,
              acceptedAnswer: { "@type": "Answer", text: faq.faq_ans },
            }))
        : [];

      const schemas: Record<string, unknown>[] = [
        GLOBAL_ORGANIZATION_SCHEMA,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
            { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_ORIGIN}/blogs` },
            { "@type": "ListItem", position: 3, name: blogTitle, item: `${SITE_ORIGIN}${blogRoute}` },
          ],
        },
      ];

      if (datePublished && dateModified) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blogTitle,
          description,
          ...(image ? { image: [image] } : {}),
          url: `${SITE_ORIGIN}${blogRoute}`,
          datePublished,
          dateModified,
          author: {
            "@type": authorName.toLowerCase().includes("ag solutions") || authorName.toLowerCase().includes("superadmin") ? "Organization" : "Person",
            name: authorName.toLowerCase().includes("ag solutions") || authorName.toLowerCase().includes("superadmin") ? "AG Solutions" : authorName,
            url: `${SITE_ORIGIN}/`,
          },
          publisher: {
            "@type": "Organization",
            "@id": `${SITE_ORIGIN}/#organization`,
            name: "AG Solutions",
            url: `${SITE_ORIGIN}/`,
            logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/images/logo.webp` },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}${blogRoute}` },
        });
      }

      if (faqMainEntity.length > 0) {
        schemas.push({ "@context": "https://schema.org", "@type": "FAQPage", _scriptId: "schema-faqpage", mainEntity: faqMainEntity });
      }

      const blogSeo: RouteSEO = {
        title: `${blogTitle} | AG Solutions Blog`,
        description,
        canonical: `${SITE_ORIGIN}${blogRoute}`,
        schemas,
      };

      const blogHtml = buildHtmlForRoute(baseHtml, blogRoute, blogSeo);
      const blogTargetDir = path.join(DIST_DIR, "blogs", slug);
      fs.mkdirSync(blogTargetDir, { recursive: true });
      fs.writeFileSync(path.join(blogTargetDir, "index.html"), blogHtml, "utf-8");

      const blogCleanFile = path.join(DIST_DIR, "blogs", `${slug}.html`);
      fs.writeFileSync(blogCleanFile, blogHtml, "utf-8");

      generatedCount++;
    }
  } catch (err: any) {
    console.warn(`⚠️ Blog prerender skipped: ${err.message}`);
  }

  console.log(`\n🎉 Static SEO Pre-rendering Complete! ${generatedCount} routes generated with dynamic embedded JSON-LD schemas.`);

  // 3. Automatically Generate and Sync Sitemap
  await generateSitemap();
}

prerenderAllRoutes().catch((err) => {
  console.error("❌ Pre-rendering failed:", err);
  process.exit(1);
});
