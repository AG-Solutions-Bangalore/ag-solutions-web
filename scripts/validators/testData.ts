/**
 * Hardcoded sample schemas used as a "regression-test" suite for the
 * validator rules. They mirror the canonical AG Solutions SEO surface
 * and let us catch logical regressions in the validator itself.
 */
export interface SchemaTestCase {
  route: string;
  id: string;
  schema: Record<string, unknown>;
}

export const TEST_SCHEMAS: SchemaTestCase[] = [
  // ── Global (All Routes) ──
  {
    route: "Global (All Routes)",
    id: "schema-organization",
    schema: {
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
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8867171060",
        contactType: "customer service",
        email: "info@ag-solutions.in",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
    },
  },
  {
    route: "Global (All Routes)",
    id: "schema-website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://ag-solutions.in/#website",
      name: "AG Solutions",
      url: "https://ag-solutions.in/",
      description:
        "AG Solutions builds scalable web applications, mobile apps, desktop software, digital marketing systems, and export documentation products.",
      publisher: { "@id": "https://ag-solutions.in/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://ag-solutions.in/blogs?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },

  // ── Home Page (/) ──
  {
    route: "/",
    id: "schema-faqpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What digital and software services does AG Solutions provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "AG Solutions provides full-cycle custom web development, mobile application development (iOS & Android), custom desktop software, digital marketing strategies, and specialized export/inventory management products like Export Biz and BizStock.",
          },
        },
      ],
    },
  },
  {
    route: "/",
    id: "schema-review-vikram-singhania-0",
    schema: {
      "@context": "https://schema.org",
      "@type": "Review",
      name: "Vikram Singhania Review",
      author: { "@type": "Person", name: "Vikram Singhania" },
      reviewBody: "AG Solutions delivered our custom web platform ahead of schedule with flawless performance.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      itemReviewed: {
        "@type": "Organization",
        name: "Vikram Singhania",
        description: "Client review for AG Solutions",
        url: "https://ag-solutions.in/",
      },
    },
  },

  // ── About Page (/about) ──
  {
    route: "/about",
    id: "schema-faqpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When was AG Solutions founded and where are you located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AG Solutions is headquartered in Jayanagar, Bengaluru, Karnataka, India.",
          },
        },
      ],
    },
  },

  // ── Contact Page (/contacts) ──
  {
    route: "/contacts",
    id: "schema-contactpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact AG Solutions",
      url: "https://ag-solutions.in/contacts",
      description: "Get in touch with AG Solutions in Jayanagar, Bengaluru.",
    },
  },
  {
    route: "/contacts",
    id: "schema-faqpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly will you respond to my inquiry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We typically respond to all inquiries within 24 business hours.",
          },
        },
      ],
    },
  },

  // ── Export Biz Page (/export-biz) ──
  {
    route: "/export-biz",
    id: "schema-software-export-biz---export-documentation-software",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://ag-solutions.in/export-biz#software",
      name: "Export Biz - Export Documentation Software",
      description:
        "Specialized export documentation and compliance software for exporters, manufacturers, and global trade houses by AG Solutions.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser, Cloud-based",
      url: "https://ag-solutions.in/export-biz",
      author: {
        "@type": "Organization",
        "@id": "https://ag-solutions.in/#organization",
        name: "AG Solutions",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "10",
        bestRating: "5",
        worstRating: "1",
      },
    },
  },
  {
    route: "/export-biz",
    id: "schema-faqpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is Export Biz?", acceptedAnswer: { "@type": "Answer", text: "Export Biz is AG Solutions' specialized export documentation software." } },
        { "@type": "Question", name: "Who is Export Biz for?", acceptedAnswer: { "@type": "Answer", text: "Exporters, manufacturers, trading houses, freight coordinators, and SMEs." } },
      ],
    },
  },

  // ── BizStock Page (/bizstock) ──
  {
    route: "/bizstock",
    id: "schema-software-bizstock---inventory---stock-management-software",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://ag-solutions.in/bizstock#software",
      name: "BizStock - Inventory & Stock Management Software",
      description: "Smart inventory management and warehouse tracking software by AG Solutions.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser, Cloud-based",
      url: "https://ag-solutions.in/bizstock",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "98", bestRating: "5", worstRating: "1" },
    },
  },
  {
    route: "/bizstock",
    id: "schema-faqpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What barcode and QR hardware does BizStock support?", acceptedAnswer: { "@type": "Answer", text: "BizStock works with virtually any standard 1D/2D USB or Bluetooth barcode scanner." } },
      ],
    },
  },

  // ── Ease Marketing Page (/ease-marketing) ──
  {
    route: "/ease-marketing",
    id: "schema-software-ease-marketing---whatsapp-marketing---automation-software",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://ag-solutions.in/ease-marketing#software",
      name: "Ease Marketing - WhatsApp Marketing & Automation Software",
      description: "High-converting WhatsApp marketing, automated messaging, and campaign tracking software by AG Solutions.",
      applicationCategory: "MarketingApplication",
      operatingSystem: "Web Browser, Cloud-based",
      url: "https://ag-solutions.in/ease-marketing",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "112", bestRating: "5", worstRating: "1" },
    },
  },
  {
    route: "/ease-marketing",
    id: "schema-faqpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is Ease Marketing?", acceptedAnswer: { "@type": "Answer", text: "Ease Marketing is an automated WhatsApp marketing and bulk communication CRM software." } },
      ],
    },
  },

  // ── Service Pages ──
  {
    route: "/web-development",
    id: "schema-service-web---website-development-services",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://ag-solutions.in/web-development#service",
      name: "Web & Website Development Services",
      description: "Custom responsive, fast and SEO-friendly websites that deliver exceptional user experiences.",
      serviceType: "Web Development",
      provider: { "@type": "Organization", "@id": "https://ag-solutions.in/#organization", name: "AG Solutions", url: "https://ag-solutions.in/" },
      areaServed: { "@type": "Country", name: "IN" },
    },
  },
  {
    route: "/web-development",
    id: "schema-faqpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What web development technologies do you use?", acceptedAnswer: { "@type": "Answer", text: "We develop websites using React, Next.js, Vite, TypeScript, Tailwind CSS, Node.js, and modern headless CMS platforms." } },
      ],
    },
  },
  {
    route: "/mobile-app-development",
    id: "schema-service-mobile-app-development-services",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://ag-solutions.in/mobile-app-development#service",
      name: "Mobile App Development Services",
      description: "iOS and Android mobile app development by AG Solutions.",
      serviceType: "Mobile App Development",
      provider: { "@type": "Organization", "@id": "https://ag-solutions.in/#organization", name: "AG Solutions", url: "https://ag-solutions.in/" },
      areaServed: { "@type": "Country", name: "IN" },
    },
  },
  {
    route: "/digital-marketing",
    id: "schema-service-digital-marketing-services",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://ag-solutions.in/digital-marketing#service",
      name: "Digital Marketing Services",
      description: "Data-driven digital marketing solutions by AG Solutions.",
      serviceType: "Digital Marketing",
      provider: { "@type": "Organization", "@id": "https://ag-solutions.in/#organization", name: "AG Solutions", url: "https://ag-solutions.in/" },
      areaServed: { "@type": "Country", name: "IN" },
    },
  },

  // ── Blog Article ──
  {
    route: "/blogs/future-of-enterprise-web-development",
    id: "schema-blogposting",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "The Future of Enterprise Web Development",
      description: "How modern architectures, micro-frontends, and performance optimization are reshaping web development.",
      datePublished: "2026-08-20",
      dateModified: "2026-08-21",
      author: { "@type": "Organization", name: "AG Solutions" },
      publisher: { "@type": "Organization", "@id": "https://ag-solutions.in/#organization", name: "AG Solutions" },
    },
  },
];
