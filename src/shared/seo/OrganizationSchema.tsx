import React from "react";
import JsonLd from "./JsonLd";
import { getImageUrl } from "@/utils/imageUrl";

/**
 * Organization schema (AG Solutions brand entity).
 *
 * Routes with API testimonials replace this full brand schema during SSG with
 * the approved LocalBusiness testimonial schema. Do not add review fields here.
 */
export const OrganizationSchema: React.FC = () => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ag-solutions.in/#organization",
    name: "AG Solutions",
    legalName: "AG Solutions",
    url: "https://ag-solutions.in/",
    logo: getImageUrl("/images/logo.webp"),
    image: getImageUrl("/images/logo.webp"),
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
      // Canonical LinkedIn handle — must match the prerender SSG output and
      // the Footer/ContactPage links, otherwise Google sees two different
      // Organization entities and may split trust signals across them.
      "https://www.linkedin.com/in/ag-solutions-2b1b50422/",
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

  return <JsonLd id="schema-organization" schema={schema} />;
};

export default OrganizationSchema;
