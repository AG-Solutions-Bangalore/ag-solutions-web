import React from "react";
import JsonLd from "./JsonLd";
import { getImageUrl } from "@/utils/imageUrl";

/**
 * Organization schema (AG Solutions brand entity).
 *
 * NOTE: Do NOT add `aggregateRating` here. Google counts any entity that
 * carries an `aggregateRating` as 1 extra Review-snippet entity, inflating
 * the rich-results count by +1 on every route. Reviews are kept as
 * standalone Review schemas (injected by scripts/prerenderSeo.ts) so the
 * count exactly matches the UI.
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
      "https://www.linkedin.com/ag-solutions-104223427",
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