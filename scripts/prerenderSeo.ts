import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "../dist");
const DIST_INDEX = path.resolve(DIST_DIR, "index.html");
const SITEMAP_PATH = path.resolve(DIST_DIR, "sitemap.xml");
const SITE_ORIGIN = "https://ag-solutions.in";

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
    url: "https://ag-solutions.in/images/logo.png",
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

const ROUTES_CONFIG: Record<string, RouteSEO> = {
  "/": {
    title: "AG Solutions | Web Development, Mobile App Development & Software Solutions Company",
    description: "AG Solutions is a leading software development company providing web development, mobile applications, digital marketing, and export compliance software.",
    keywords: "web development company, mobile app development, export biz, ease marketing, ag solutions",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      GLOBAL_WEBSITE_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What services does AG Solutions provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AG Solutions provides Web Development, Mobile App Development (iOS & Android), Digital Marketing, Custom ERP, and Software Products like Export Biz, BizStock, and Ease Marketing.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "Organization",
          "@id": "https://ag-solutions.in/#organization",
          name: "AG Solutions",
          url: "https://ag-solutions.in/",
        },
        author: {
          "@type": "Person",
          name: "Vikram Singhania",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: "AG Solutions built our entire enterprise export portal with top-notch performance and zero downtime.",
      },
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "84",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What documents can Export Biz generate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Export Biz generates Commercial Invoices, Packing Lists, Shipping Bills, Certificates of Origin, and customs compliance reports in 1 minute.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "Organization",
          "@id": "https://ag-solutions.in/#organization",
          name: "AG Solutions",
          url: "https://ag-solutions.in/",
        },
        author: {
          "@type": "Person",
          name: "Sneha Patel",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: "Export Biz reduced our documentation errors by 90% and saved 4 hours every day on shipping paperwork.",
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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "67",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does BizStock support multiple warehouses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, BizStock supports unlimited multi-location warehouses with real-time stock transfers and low-stock alerts.",
            },
          },
        ],
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "112",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Ease Marketing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ease Marketing is an automated WhatsApp marketing and bulk communication CRM software.",
            },
          },
        ],
      },
    ],
  },
  "/web-development": {
    title: "Web Development Services | Custom Websites & Web Apps | AG Solutions",
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
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What web development technologies do you use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We develop websites using React, Next.js, Vite, TypeScript, Tailwind CSS, Node.js, and modern headless CMS platforms.",
            },
          },
        ],
      },
    ],
  },
  "/mobile-app-development": {
    title: "Mobile App Development Services | iOS & Android Apps | AG Solutions",
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
    title: "About Us | AG Solutions - Software & Technology Partners",
    description: "Learn about AG Solutions - Our mission, experienced team, and dedication to building world-class software and web architectures.",
    keywords: "about ag solutions, software company history, it development team",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is AG Solutions located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AG Solutions provides software solutions globally with core operations in India.",
            },
          },
        ],
      },
    ],
  },
  "/portfolio": {
    title: "Portfolio - Our Work & Case Studies | AG Solutions",
    description: "Explore our portfolio of web applications, mobile apps, and enterprise software delivered to over 80+ clients globally.",
    keywords: "ag solutions portfolio, web design case studies, app development portfolio",
    schemas: [
      GLOBAL_ORGANIZATION_SCHEMA,
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "AG Solutions Portfolio",
        url: "https://ag-solutions.in/portfolio",
        description: "Browse case studies and client projects across Web Development, Mobile Apps, and Enterprise ERPs.",
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
    title: "Contact Us | Get in Touch with AG Solutions",
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

function buildHtmlForRoute(baseHtml: string, route: string, seo: RouteSEO): string {
  let html = baseHtml;
  const canonical = `${SITE_ORIGIN}${route === "/" ? "/" : route}`;

  // 1. Title & Meta
  html = upsertTag(html, /<title>.*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = upsertTag(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeAttr(seo.description)}" />`);
  if (seo.keywords) {
    html = upsertTag(html, /<meta\s+name=["']keywords["'][^>]*>/i, `<meta name="keywords" content="${escapeAttr(seo.keywords)}" />`);
  }
  html = upsertTag(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`);

  // 2. OpenGraph
  html = upsertTag(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeAttr(seo.title)}" />`);
  html = upsertTag(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeAttr(seo.description)}" />`);
  html = upsertTag(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${canonical}" />`);

  // 3. Pre-inject JSON-LD Schemas directly into HTML head
  const schemaTags = seo.schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n    ");

  html = html.replace("</head>", `    <!-- Prerendered Static JSON-LD Schemas -->\n    ${schemaTags}\n  </head>`);

  return html;
}

export async function prerenderAllRoutes() {
  if (!fs.existsSync(DIST_INDEX)) {
    console.error("❌ dist/index.html not found. Run vite build first!");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(DIST_INDEX, "utf-8");
  let generatedCount = 0;

  console.log("🚀 Starting Static Pre-Rendering & Schema Injection...");

  // 1. Static Routes
  for (const [route, seo] of Object.entries(ROUTES_CONFIG)) {
    const routeHtml = buildHtmlForRoute(baseHtml, route, seo);

    if (route === "/") {
      fs.writeFileSync(DIST_INDEX, routeHtml, "utf-8");
      console.log(`✅ Pre-rendered Root: dist/index.html`);
      generatedCount++;
    } else {
      const targetDir = path.join(DIST_DIR, route.replace(/^\//, ""));
      fs.mkdirSync(targetDir, { recursive: true });
      const targetFile = path.join(targetDir, "index.html");
      fs.writeFileSync(targetFile, routeHtml, "utf-8");

      // Also create clean URL fallback file (e.g. dist/export-biz.html)
      const cleanHtmlFile = path.join(DIST_DIR, `${route.replace(/^\//, "")}.html`);
      fs.writeFileSync(cleanHtmlFile, routeHtml, "utf-8");

      console.log(`✅ Pre-rendered Route: ${route} -> dist${route}/index.html & dist${route}.html`);
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
      const blogTitle = blog.name || slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      const blogSeo: RouteSEO = {
        title: `${blogTitle} | AG Solutions Blog`,
        description: `Read "${blogTitle}" and get the latest insights on software, technology, and business growth from AG Solutions.`,
        canonical: `${SITE_ORIGIN}${blogRoute}`,
        schemas: [
          GLOBAL_ORGANIZATION_SCHEMA,
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blogTitle,
            url: `${SITE_ORIGIN}${blogRoute}`,
            datePublished: blog.lastmod,
            dateModified: blog.lastmod,
            author: {
              "@type": "Organization",
              name: "AG Solutions",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://ag-solutions.in/#organization",
              name: "AG Solutions",
            },
          },
        ],
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

  console.log(`\n🎉 Static SEO Pre-rendering Complete! ${generatedCount} routes generated with embedded JSON-LD schemas.`);

  // 3. Automatically Generate and Sync Sitemap
  await generateSitemap();
}

prerenderAllRoutes().catch((err) => {
  console.error("❌ Pre-rendering failed:", err);
  process.exit(1);
});
