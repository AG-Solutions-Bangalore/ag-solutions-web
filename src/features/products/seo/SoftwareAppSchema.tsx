import React from "react";
import { JsonLd } from "@/shared/seo/JsonLd";

export interface SoftwareAppSchemaProps {
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  description: string;
  url: string;
}

/**
 * MINIMAL SoftwareApplication schema for software app pages
 * (Export Biz). Per the SEO spec for software apps, the only fields
 * the script tag should carry are:
 *   - @context, @type (SoftwareApplication), name, applicationCategory,
 *     operatingSystem, description, url, and a `review[]` array
 *   - the review array is attached during prerender, not at runtime
 *
 * The script id matches the prerender's `schema-softwareapplication`
 * so the runtime component is a no-op when the prerendered script
 * already exists. No @id, no author/seller/offers — those are not
 * part of the spec.
 */
export const SoftwareAppSchema: React.FC<SoftwareAppSchemaProps> = ({
  name,
  applicationCategory,
  operatingSystem,
  description,
  url,
}) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory,
    operatingSystem,
    description,
    url,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: "0",
      availability: "https://schema.org/InStock",
    },
  };

  return <JsonLd id="schema-softwareapplication" schema={schema} />;
};

export default SoftwareAppSchema;
