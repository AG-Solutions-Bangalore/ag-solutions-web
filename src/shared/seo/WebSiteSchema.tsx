import React from "react";
import JsonLd from "./JsonLd";

/**
 * WebSite schema — declares the AG Solutions site as an entity and wires up
 * a sitelinks-search-box (via `potentialAction`) so Google can render an
 * inline search bar in branded results.
 *
 * Mounted globally from the Layout component.
 */
export const WebSiteSchema: React.FC = () => {
  const schema = {
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

  return <JsonLd id="schema-website" schema={schema} />;
};

export default WebSiteSchema;
