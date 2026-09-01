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
  /** Maximum number of standalone Review schemas to inject for this route.
   *  Keep this in sync with what the React page actually renders so the
   *  rich-result test never reports more reviews than the page shows. */
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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  },
  "/export-biz-new": {
    title: "Export Biz - Export Documentation & Compliance Software | AG Solutions",
    description: "Export Biz automates manual export documentation into structured digital workflows, generating Invoices, Packing Lists, and shipping bills in seconds.",
    keywords: "export documentation software, export biz, shipping bills, export invoice software",
    canonical: "https://ag-solutions.in/export-biz",
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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  },
  "/bizstock": {
    title: "BizStock – Business Management Software | AG Solutions",
    description: "BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster.",
    keywords: "BizStock, inventory management software, smart stock management, warehouse management system, purchase management, sales management, low stock alerts, AG Solutions",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": "https://ag-solutions.in/bizstock#software",
        name: "BizStock - Inventory & Stock Management Software",
        description: "Smart inventory management and warehouse tracking software by AG Solutions to track stock, streamline orders, and maximize business growth.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, Cloud-based",
        url: "https://ag-solutions.in/bizstock",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  },
  "/biz-stock": {
    title: "BizStock – Business Management Software | AG Solutions",
    description: "BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster.",
    keywords: "BizStock, inventory management software, smart stock management, warehouse management system, purchase management, sales management, low stock alerts, AG Solutions",
    canonical: "https://ag-solutions.in/bizstock",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": "https://ag-solutions.in/bizstock#software",
        name: "BizStock - Inventory & Stock Management Software",
        description: "Smart inventory management and warehouse tracking software by AG Solutions to track stock, streamline orders, and maximize business growth.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, Cloud-based",
        url: "https://ag-solutions.in/bizstock",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  },
  "/EASE-Marketing": {
    title: "Ease Marketing - WhatsApp Marketing & Automation Software | AG Solutions",
    description: "Automate WhatsApp campaigns, broadcast messages, CRM customer workflows, and multi-channel lead tracking with Ease Marketing.",
    keywords: "whatsapp marketing software, ease marketing, bulk whatsapp tool, marketing automation",
    canonical: "https://ag-solutions.in/ease-marketing",
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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  },
  "/quote-biz": {
    title: "QuoteBiz – Smart Quotes. Better Business. | AG Solutions",
    description: "QuoteBiz helps you create professional quotes in minutes, send to customers, track responses, and convert more leads into sales with real-time analytics.",
    keywords: "QuoteBiz, quote-biz, quote management software, smart quotations, quotation maker, invoice generator, sales proposal tool, quote tracking app, AG Solutions",
    maxReviews: 5,
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": "https://ag-solutions.in/quote-biz#software",
        name: "QuoteBiz - Smart Quotation & Proposal Management Software",
        description: "Create professional quotes in minutes, track customer engagement in real-time, and convert accepted quotes into tax invoices effortlessly.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser, iOS, Android, Cloud-based",
        url: "https://ag-solutions.in/quote-biz",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
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
 * Dynamically fetch testimonials from API for a given route.
 * Returns Review schemas only if real API items exist.
 * Caps results to `maxReviews` so the prerendered schema count matches
 * the testimonials actually rendered on the page.
 */
async function fetchDynamicTestimonials(route: string, maxReviews?: number): Promise<Record<string, unknown>[]> {
  try {
    let apiRoute = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
    if (apiRoute.includes("bizstock") || apiRoute.includes("biz-stock")) apiRoute = "biz-stock";
    if (apiRoute.includes("export-biz")) apiRoute = "export-biz";
    if (apiRoute.includes("ease-marketing") || apiRoute.includes("EASE-Marketing")) apiRoute = "ease-marketing";
    if (apiRoute.includes("quote-biz")) apiRoute = "quote-biz";
    if (apiRoute.includes("web-development")) apiRoute = "web-development";
    if (apiRoute.includes("mobile-app")) apiRoute = "mobile-app-development";
    if (apiRoute.includes("digital-marketing")) apiRoute = "digital-marketing";

    let res = await fetch(`${API_BASE}/getTestimonial/${apiRoute}`, {
      headers: {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok && apiRoute === "biz-stock") {
      res = await fetch(`${API_BASE}/getTestimonial/bizstock`, {
        headers: { "Accept": "application/json" },
        signal: AbortSignal.timeout(6000),
      });
    }
    if (!res.ok) return [];
    const json = await res.json();
    const data = json?.data;
    if (!Array.isArray(data) || data.length === 0) return [];

    const filtered = data.filter(
      (item: any) => item?.testimonial_client_name && item?.testimonial_description
    );

    const capped = typeof maxReviews === "number" && maxReviews > 0
      ? filtered.slice(0, maxReviews)
      : filtered;

    return capped
      .map((item: any, i: number) => {
        const rawAuthor = String(item.testimonial_client_name || "Client").trim();
        // Clean author name so roles like "(Business Owner )", "– Sales Manager", or "- CEO" don't corrupt Person schema entity
        const cleanAuthorName = rawAuthor.replace(/\s*([–\-\(].*)/g, "").trim() || rawAuthor;
        const rawRating = item?.testimonial_rating ?? item?.rating ?? item?.rating_value;
        const rating = (rawRating !== undefined && rawRating !== null && rawRating !== "" && Number(rawRating) > 0)
          ? String(rawRating)
          : "5";
        const slug = cleanAuthorName.toLowerCase().replace(/[^a-z0-9]/g, "-");
        const review: Record<string, unknown> = {
          "@context": "https://schema.org",
          "@type": "Review",
          _scriptId: `schema-review-${slug}-${i}`,
          name: cleanAuthorName,
          author: {
            "@type": "Person",
            "@id": `https://ag-solutions.in/#person-${slug}`,
            name: cleanAuthorName,
          },
          reviewBody: item.testimonial_description,
          reviewRating: {
            "@type": "Rating",
            ratingValue: rating,
            bestRating: "5",
          },
          // CRITICAL: must use the same `@id` as the Organization schema on the
          // page so Google's rich-result test can link the Review to the
          // referenced entity. Without this anchor Google drops the review.
          itemReviewed: {
            "@type": "Organization",
            "@id": "https://ag-solutions.in/#organization",
            name: "AG Solutions",
            url: "https://ag-solutions.in/",
          },
        };

        const dateStr = item?.testimonial_created_date;
        if (dateStr) {
          const iso = new Date(dateStr);
          if (!Number.isNaN(iso.getTime())) {
            review.datePublished = iso.toISOString();
          }
        }

        return review;
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
    .replace(/<title[^>]*>.*?<\/title>\s*/gi, "")
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']keywords["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']author["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']publisher["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']robots["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']og:[^"']*["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>\s*/gi, "");

  const canonical = seo.canonical || `${SITE_ORIGIN}${route === "/" ? "/" : route}`;

  // 1. Tags matching React Helmet structure with data-rh="true"
  const headMeta = [
    `<title data-rh="true">${escapeHtml(seo.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeAttr(seo.description)}" />`,
    seo.keywords ? `<meta data-rh="true" name="keywords" content="${escapeAttr(seo.keywords)}" />` : "",
    `<meta data-rh="true" name="robots" content="index, follow" />`,
    `<meta data-rh="true" name="author" content="AG Solutions" />`,
    `<meta data-rh="true" name="publisher" content="AG Solutions" />`,
    `<link data-rh="true" rel="canonical" href="${canonical}" />`,
    `<meta data-rh="true" property="og:type" content="${seo.ogType || 'website'}" />`,
    `<meta data-rh="true" property="og:url" content="${canonical}" />`,
    `<meta data-rh="true" property="og:title" content="${escapeAttr(seo.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${escapeAttr(seo.description)}" />`,
    `<meta data-rh="true" property="og:image" content="https://ag-solutions-website.pages.dev/og-default.png" />`,
    `<meta data-rh="true" property="og:image:alt" content="AG Solutions - Scalable Web Systems Logo" />`,
    `<meta data-rh="true" property="og:site_name" content="AG Solutions" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:creator" content="@agsolutions" />`,
    `<meta data-rh="true" name="twitter:url" content="${canonical}" />`,
    `<meta data-rh="true" name="twitter:title" content="${escapeAttr(seo.title)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${escapeAttr(seo.description)}" />`,
    `<meta data-rh="true" name="twitter:image" content="https://ag-solutions-website.pages.dev/og-default.png" />`,
    `<meta data-rh="true" name="twitter:image:alt" content="AG Solutions - Scalable Web Systems Logo" />`,
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

    // Fetch dynamic Testimonials from API for this route and inject as standalone Review schemas
    const dynamicReviews = await fetchDynamicTestimonials(route, baseSeo.maxReviews);
    if (dynamicReviews.length > 0) {
      schemas.push(...dynamicReviews);
      // Intentionally NOT adding aggregateRating to the Organization schema.
      // Google counts the Organization entity itself as 1 extra Review snippet
      // whenever aggregateRating is present, inflating the rich-results count
      // by +1 on every route. We keep reviews as standalone entities only so
      // the count is exact (matches the UI). The "Missing field
      // aggregateRating (optional)" warning that returns is informational
      // only — reviews are still eligible for rich results.
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
