import { GLOBAL_ORGANIZATION_ID, LOGO_URL, SITE_ORIGIN } from "./constants";

/**
 * Global Organization schema — attached to every page.
 * Linked to all other entities via `@id` so Google sees one AG Solutions
 * entity across the site. This entity intentionally never carries reviews;
 * reviews are nested in the relevant SoftwareApplication instead.
 */
export const GLOBAL_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": GLOBAL_ORGANIZATION_ID,
  name: "AG Solutions",
  legalName: "AG Solutions",
  url: `${SITE_ORIGIN}/`,
  logo: LOGO_URL,
  image: LOGO_URL,
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
} as const;

/**
 * Global WebSite schema — provides sitelinks-search-box potentialAction.
 */
export const GLOBAL_WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_ORIGIN}/#website`,
  name: "AG Solutions",
  url: `${SITE_ORIGIN}/`,
  description:
    "AG Solutions builds scalable web applications, mobile apps, desktop software, digital marketing systems, and export documentation products.",
  publisher: { "@id": `${SITE_ORIGIN}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_ORIGIN}/blogs?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
} as const;
