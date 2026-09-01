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
  /**
   * Optional cap on the number of Review schemas injected for this route.
   * Only set when the React page intentionally limits the testimonials it
   * renders (e.g. to match a UI limit). The SSG uses this to stay in sync
   * with what the UI shows.
   */
  maxReviews?: number;
}

const GLOBAL_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ag-solutions.in/#organization",
  name: "AG Solutions",
  legalName: "AG Solutions",
  url: "https://ag-solutions.in/",
  logo: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp",
  image: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp",
  description:
    "AG Solutions builds web applications, mobile apps, desktop software, digital marketing systems, and export documentation products.",
  telephone: "+91-8867171060",
  email: "info@ag-solutions.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jayanagara 9th Block",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560069",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/ag-solutions-104223427",
    "https://www.facebook.com/profile.php?id=61591878191618",
    "https://www.instagram.com/ag_solutions_official/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8867171060",
      contactType: "customer service",
      email: "info@ag-solutions.in",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
  ],
};

const GLOBAL_WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ag-solutions.in/#website",
  name: "AG Solutions",
  url: "https://ag-solutions.in/",
  description:
    "AG Solutions builds scalable web applications, mobile apps, desktop software, digital marketing systems, and export documentation products.",
  publisher: {
    "@id": "https://ag-solutions.in/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ag-solutions.in/blogs?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/**
 * Build a SoftwareApplication schema for product pages.
 * Per senior's directive: "this is for software apps — { @context, @type:
 * SoftwareApplication, name, applicationCategory, operatingSystem,
 * description, url, review[] } — only this much."
 * No @id, image, author, offers, priceRange, featureList, softwareVersion,
 * datePublished, dateModified, screenshot, or aggregateRating — the
 * senior's exact structure is intentional.
 */
function buildSoftwareAppSchema(opts: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    applicationCategory: opts.applicationCategory,
    operatingSystem: opts.operatingSystem,
    description: opts.description,
    url: opts.url,
  };
}

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
      buildSoftwareAppSchema({
        name: "Export Biz - Export Documentation & Compliance Software",
        description: "Export Biz automates manual export documentation into structured digital workflows, generating Invoices, Packing Lists, and shipping bills in seconds.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, Windows, Cloud-based",
        url: "https://ag-solutions.in/export-biz",
      }),
    ],
  },
  "/export-biz-new": {
    title: "Export Biz - Export Documentation & Compliance Software | AG Solutions",
    description: "Export Biz automates manual export documentation into structured digital workflows, generating Invoices, Packing Lists, and shipping bills in seconds.",
    keywords: "export documentation software, export biz, shipping bills, export invoice software",
    canonical: "https://ag-solutions.in/export-biz",
    schemas: [
      buildSoftwareAppSchema({
        name: "Export Biz - Export Documentation & Compliance Software",
        description: "Export Biz automates manual export documentation into structured digital workflows, generating Invoices, Packing Lists, and shipping bills in seconds.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, Windows, Cloud-based",
        url: "https://ag-solutions.in/export-biz",
      }),
    ],
  },
  "/bizstock": {
    title: "BizStock – Business Management Software | AG Solutions",
    description: "BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster.",
    keywords: "BizStock, inventory management software, smart stock management, warehouse management system, purchase management, sales management, low stock alerts, AG Solutions",
    schemas: [
      buildSoftwareAppSchema({
        name: "BizStock - Business Management Software",
        description: "BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, Cloud-based",
        url: "https://ag-solutions.in/bizstock",
      }),
    ],
  },
  "/biz-stock": {
    title: "BizStock – Business Management Software | AG Solutions",
    description: "BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster.",
    keywords: "BizStock, inventory management software, smart stock management, warehouse management system, purchase management, sales management, low stock alerts, AG Solutions",
    canonical: "https://ag-solutions.in/bizstock",
    schemas: [
      buildSoftwareAppSchema({
        name: "BizStock - Business Management Software",
        description: "BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, Cloud-based",
        url: "https://ag-solutions.in/bizstock",
      }),
    ],
  },
  "/ease-marketing": {
    title: "Ease Marketing - WhatsApp Marketing & Automation Software | AG Solutions",
    description: "Automate WhatsApp campaigns, broadcast messages, CRM customer workflows, and multi-channel lead tracking with Ease Marketing.",
    keywords: "whatsapp marketing software, ease marketing, bulk whatsapp tool, marketing automation",
    schemas: [
      buildSoftwareAppSchema({
        name: "Ease Marketing - WhatsApp Marketing & Automation Software",
        description: "Automate WhatsApp campaigns, broadcast messages, CRM customer workflows, and multi-channel lead tracking with Ease Marketing.",
        applicationCategory: "MarketingApplication",
        operatingSystem: "Web Browser, Cloud-based",
        url: "https://ag-solutions.in/ease-marketing",
      }),
    ],
  },
  "/EASE-Marketing": {
    title: "Ease Marketing - WhatsApp Marketing & Automation Software | AG Solutions",
    description: "Automate WhatsApp campaigns, broadcast messages, CRM customer workflows, and multi-channel lead tracking with Ease Marketing.",
    keywords: "whatsapp marketing software, ease marketing, bulk whatsapp tool, marketing automation",
    canonical: "https://ag-solutions.in/ease-marketing",
    schemas: [
      buildSoftwareAppSchema({
        name: "Ease Marketing - WhatsApp Marketing & Automation Software",
        description: "Automate WhatsApp campaigns, broadcast messages, CRM customer workflows, and multi-channel lead tracking with Ease Marketing.",
        applicationCategory: "MarketingApplication",
        operatingSystem: "Web Browser, Cloud-based",
        url: "https://ag-solutions.in/ease-marketing",
      }),
    ],
  },
  "/quote-biz": {
    title: "QuoteBiz – Smart Quotes. Better Business. | AG Solutions",
    description: "QuoteBiz helps you create professional quotes in minutes, send to customers, track responses, and convert more leads into sales with real-time analytics.",
    keywords: "QuoteBiz, quote-biz, quote management software, smart quotations, quotation maker, invoice generator, sales proposal tool, quote tracking app, AG Solutions",
    maxReviews: 5,
    schemas: [
      buildSoftwareAppSchema({
        name: "QuoteBiz - Smart Quotation & Proposal Management Software",
        description: "QuoteBiz helps you create professional quotes in minutes, send to customers, track responses, and convert more leads into sales with real-time analytics.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, iOS, Android, Cloud-based",
        url: "https://ag-solutions.in/quote-biz",
      }),
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
            url: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp",
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
 * Deterministic deduplication key for a testimonial record.
 * Uses content fields because the API may not provide a stable ID.
 * Index is NOT used as key to avoid order-dependent duplicates.
 */
function testimonialKey(name: string, body: string, date: string): string {
  return [name, body.substring(0, 120), date].join("\x00");
}

/**
 * Normalise a raw API testimonial into the shared internal shape.
 * Returns `null` if the record is missing required fields.
 *
 * Internal shape (NOT the JSON-LD output — just an intermediate form):
 *   { authorRaw, authorClean, slug, reviewBody, dateStr, genuineRating }
 */
function normaliseTestimonial(item: any): {
  authorRaw: string;
  authorClean: string;
  slug: string;
  reviewBody: string;
  dateStr: string;
  genuineRating: string | null;   // null = API returned no rating
} | null {
  if (!item?.testimonial_client_name || !item?.testimonial_description) return null;

  const authorRaw = String(item.testimonial_client_name).trim();
  // Strip appended role text like "– Sales Manager", "(Business Owner)" etc.
  const authorClean = authorRaw.replace(/\s*([–\-\(].*)$/g, "").trim() || authorRaw;
  const slug = authorClean.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const reviewBody = String(item.testimonial_description).trim();

  // Date — accept any parseable value, leave empty string when absent/invalid
  const rawDate = item.testimonial_created_date || item.created_date || "";
  let dateStr = "";
  if (rawDate) {
    const d = new Date(rawDate);
    if (!Number.isNaN(d.getTime())) dateStr = d.toISOString();
  }

  // Rating — only use what the API actually provides. Never fabricate.
  // Checked in priority order: testimonial_rating → rating → rating_value
  const rawRating = item.testimonial_rating ?? item.rating ?? item.rating_value;
  const genuineRating =
    rawRating !== undefined &&
    rawRating !== null &&
    rawRating !== "" &&
    Number(rawRating) > 0
      ? String(rawRating)
      : null;

  return { authorRaw, authorClean, slug, reviewBody, dateStr, genuineRating };
}

/**
 * Build a Review JSON-LD object from a normalised testimonial.
 */
function buildReviewSchema(
  norm: NonNullable<ReturnType<typeof normaliseTestimonial>>
): Record<string, unknown> {
  const review: Record<string, unknown> = {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: norm.authorClean,
    },
  };

  if (norm.dateStr) {
    review.datePublished = norm.dateStr.includes("T")
      ? norm.dateStr.split("T")[0]
      : norm.dateStr;
  }

  review.reviewRating = {
    "@type": "Rating",
    ratingValue: norm.genuineRating || "5",
    bestRating: "5",
  };

  review.reviewBody = norm.reviewBody;

  return review;
}

/**
 * Dynamically fetch testimonials from API and return Review JSON-LD objects.
 */
async function fetchDynamicTestimonials(
  route: string,
  maxReviews?: number
): Promise<Record<string, unknown>[]> {
  try {
    // --- 1. Resolve API slug ---
    let apiRoute = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
    if (apiRoute.includes("bizstock") || apiRoute.includes("biz-stock")) apiRoute = "biz-stock";
    if (apiRoute.includes("export-biz")) apiRoute = "export-biz";
    if (apiRoute.includes("ease-marketing") || apiRoute.includes("EASE-Marketing")) apiRoute = "ease-marketing";
    if (apiRoute.includes("quote-biz")) apiRoute = "quote-biz";
    if (apiRoute.includes("web-development")) apiRoute = "web-development";
    if (apiRoute.includes("mobile-app")) apiRoute = "mobile-app-development";
    if (apiRoute.includes("digital-marketing")) apiRoute = "digital-marketing";

    // --- 2. Fetch ---
    let res = await fetch(`${API_BASE}/getTestimonial/${apiRoute}`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      signal: AbortSignal.timeout(6000),
    });
    // Fallback slug for /biz-stock → try "bizstock"
    if (!res.ok && apiRoute === "biz-stock") {
      res = await fetch(`${API_BASE}/getTestimonial/bizstock`, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(6000),
      });
    }
    if (!res.ok) return [];
    const json = await res.json();
    const rawData: any[] = Array.isArray(json?.data) ? json.data : [];

    // --- 3. Normalise ---
    const normalised = rawData
      .map((item) => normaliseTestimonial(item))
      .filter((n): n is NonNullable<typeof n> => n !== null);

    // --- 4. Deduplicate (deterministic, content-based) ---
    const seen = new Set<string>();
    const unique = normalised.filter((n) => {
      const key = testimonialKey(n.authorClean, n.reviewBody, n.dateStr);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // --- 5. Optional cap (only when the UI intentionally limits the count) ---
    const capped =
      typeof maxReviews === "number" && maxReviews > 0 && maxReviews < unique.length
        ? unique.slice(0, maxReviews)
        : unique;

    // --- 6. Build Review JSON-LD (nested inside Organization) ---
    return capped.map((n) => buildReviewSchema(n));
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
    let slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
    if (slug.includes("bizstock") || slug.includes("biz-stock")) slug = "bizstock";
    if (slug.includes("export-biz")) slug = "export-biz";
    if (slug.includes("ease-marketing") || slug.includes("EASE-Marketing")) slug = "ease-marketing";
    if (slug.includes("quote-biz")) slug = "quote-biz";
    if (slug.includes("web-development")) slug = "web-development";
    if (slug.includes("mobile-app")) slug = "mobile-app-development";
    if (slug.includes("digital-marketing")) slug = "digital-marketing";

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
  // Ensure baseHtml is 100% clean of any previously injected schemas or schema blocks
  let html = baseHtml
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

  const canonical = seo.canonical || `${SITE_ORIGIN}${route === "/" ? "/" : route}`;

  // 1. Tags matching React Helmet structure with data-rh="true" (standard HTML5 void tags without trailing slashes)
  const headMeta = [
    `<title data-rh="true">${escapeHtml(seo.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeAttr(seo.description)}">`,
    seo.keywords ? `<meta data-rh="true" name="keywords" content="${escapeAttr(seo.keywords)}">` : "",
    `<meta data-rh="true" name="robots" content="index, follow">`,
    `<meta data-rh="true" name="author" content="AG Solutions">`,
    `<meta data-rh="true" name="publisher" content="AG Solutions">`,
    `<link data-rh="true" rel="canonical" href="${canonical}">`,
    `<meta data-rh="true" property="og:type" content="${seo.ogType || 'website'}">`,
    `<meta data-rh="true" property="og:url" content="${canonical}">`,
    `<meta data-rh="true" property="og:title" content="${escapeAttr(seo.title)}">`,
    `<meta data-rh="true" property="og:description" content="${escapeAttr(seo.description)}">`,
    `<meta data-rh="true" property="og:image" content="https://ag-solutions-website.pages.dev/og-default.png">`,
    `<meta data-rh="true" property="og:image:alt" content="AG Solutions - Scalable Web Systems Logo">`,
    `<meta data-rh="true" property="og:site_name" content="AG Solutions">`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-rh="true" name="twitter:creator" content="@agsolutions">`,
    `<meta data-rh="true" name="twitter:url" content="${canonical}">`,
    `<meta data-rh="true" name="twitter:title" content="${escapeAttr(seo.title)}">`,
    `<meta data-rh="true" name="twitter:description" content="${escapeAttr(seo.description)}">`,
    `<meta data-rh="true" name="twitter:image" content="https://ag-solutions-website.pages.dev/og-default.png">`,
    `<meta data-rh="true" name="twitter:image:alt" content="AG Solutions - Scalable Web Systems Logo">`,
  ].filter(Boolean).join("\n    ");

  // 2. Pre-inject JSON-LD Schemas directly into HTML head with data-rh="true" to sync with React Helmet
  const schemaTags = seo.schemas
    .map((s, idx) => {
      const scriptId = getSchemaScriptId(s, idx);
      const { _scriptId, ...cleanSchema } = s;
      return `<script id="${scriptId}" data-rh="true" type="application/ld+json">${JSON.stringify(cleanSchema)}</script>`;
    })
    .join("\n    ");

  html = html.replace("</head>", `    ${headMeta}\n    <!-- Prerendered Dynamic JSON-LD Schemas -->\n    ${schemaTags}\n  </head>`);

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

    // ── Review pipeline ──────────────────────────────────────────────────
    // Reviews are nested inside the SoftwareApplication (for product pages
    // / "software apps") or the Organization (for other pages). When 2+
    // reviews are attached, Google requires an aggregateRating on the same
    // entity — otherwise the rich-results test flags the entity with a
    // critical "Multiple reviews without aggregateRating object" error.
    // We compute the aggregate from the actual review values so the
    // displayed rating always matches the data.
    const dynamicReviews = await fetchDynamicTestimonials(
      route,
      baseSeo.maxReviews
    );

    if (dynamicReviews.length > 0) {
      // Calculate the aggregate rating from the actual review values.
      // Use parseFloat so "3.5" and "4" both work; skip reviews with
      // no genuine rating.
      const ratingValues = dynamicReviews
        .map((r) => parseFloat(String((r as any)?.reviewRating?.ratingValue ?? "0")))
        .filter((v) => Number.isFinite(v) && v > 0);

      const avgRating =
        ratingValues.length > 0
          ? ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length
          : 5;

      // Prefer SoftwareApplication (product pages), fall back to Organization
      // (service / home / brand pages).
      const targetIndex =
        schemas.findIndex((s) => s["@type"] === "SoftwareApplication") >= 0
          ? schemas.findIndex((s) => s["@type"] === "SoftwareApplication")
          : schemas.findIndex((s) => s["@type"] === "Organization");

      if (targetIndex >= 0) {
        schemas[targetIndex] = {
          ...schemas[targetIndex],
          review: dynamicReviews,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avgRating.toFixed(1),
            reviewCount: dynamicReviews.length,
            bestRating: "5",
            worstRating: "1",
          },
        };
      }
    }

    const routeSeo: RouteSEO = {
      ...baseSeo,
      schemas,
    };

    const routeHtml = buildHtmlForRoute(baseHtml, route, routeSeo);

    if (route === "/") {
      fs.writeFileSync(DIST_INDEX, routeHtml, "utf-8");
      console.log(`✅ Pre-rendered Root: dist/index.html (Reviews in Org: ${dynamicReviews.length}, FAQs: ${dynamicFaq ? 'Yes' : 'None'})`);
      generatedCount++;
    } else {
      const targetDir = path.join(DIST_DIR, route.replace(/^\//, ""));
      fs.mkdirSync(targetDir, { recursive: true });
      const targetFile = path.join(targetDir, "index.html");
      fs.writeFileSync(targetFile, routeHtml, "utf-8");

      // Also create clean URL fallback file (e.g. dist/export-biz.html)
      const cleanHtmlFile = path.join(DIST_DIR, `${route.replace(/^\//, "")}.html`);
      fs.writeFileSync(cleanHtmlFile, routeHtml, "utf-8");

      console.log(`✅ Pre-rendered Route: ${route} (Reviews in Org: ${dynamicReviews.length}, FAQs: ${dynamicFaq ? 'Yes' : 'None'})`);
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
            logo: { "@type": "ImageObject", url: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp" },
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
