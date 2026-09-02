import { GLOBAL_ORGANIZATION_SCHEMA, GLOBAL_WEBSITE_SCHEMA } from "../lib/globalSchemas";
import type { RouteSEO } from "../lib/htmlBuilder";

const BRAND_PROVIDER = {
  "@type": "Organization",
  name: "AG Solutions",
  url: "https://ag-solutions.in/",
} as const;

/**
 * Build a MINIMAL Service schema (web/mobile/digital marketing pages).
 * The `provider` is a simple object (no @id) so Google does not inline
 * the full AG Solutions Organization into the Service entity, which
 * would otherwise produce duplicated brand info and the
 * "Invalid object type for field '<parent_node>'" error.
 */
export function buildServiceSchema(opts: {
  name: string;
  description?: string;
  serviceType: string;
  url: string;
  areaServed?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    provider: BRAND_PROVIDER,
    areaServed: {
      "@type": "Country",
      name: opts.areaServed || "IN",
    },
    url: opts.url,
  };
}

/**
 * Build a MINIMAL SoftwareApplication schema. Reviews are attached during
 * prerender and retain the API's rating and published date.
 */
export function buildSoftwareAppSchema(opts: {
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  description: string;
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
    offers: {
      "@type": "Offer",
      url: opts.url,
      priceCurrency: "INR",
      price: "0",
      availability: "https://schema.org/InStock",
    },
  };
}

export { GLOBAL_ORGANIZATION_SCHEMA, GLOBAL_WEBSITE_SCHEMA };
export type { RouteSEO };
