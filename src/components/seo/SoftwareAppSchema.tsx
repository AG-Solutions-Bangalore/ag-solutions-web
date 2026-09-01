import React from "react";
import JsonLd from "./JsonLd";
import { getImageUrl } from "@/utils/imageUrl";

export interface SoftwareAppSchemaProps {
  id?: string;
  name: string;
  description: string;
  applicationCategory?: string;
  operatingSystem?: string;
  url?: string;
  image?: string;
  price?: string | number;
  priceCurrency?: string;
  /**
   * @deprecated Do NOT add aggregateRating to a SoftwareApplication schema.
   * Google's rich-result test interprets `aggregateRating.reviewCount` as a
   * review entity attributed to the SoftwareApp, which inflates the
   * Review-snippets count and associates reviews with the product instead of
   * the Organization (AG Solutions). The brand rating lives on the
   * Organization schema instead.
   */
  ratingValue?: number | string;
  reviewCount?: number | string;
  features?: string[];
}

export const SoftwareAppSchema: React.FC<SoftwareAppSchemaProps> = ({
  id,
  name,
  description,
  applicationCategory = "BusinessApplication",
  operatingSystem = "Web Browser, Cloud-based, Windows, macOS, Linux",
  url = "https://ag-solutions.in/",
  image = getImageUrl("/images/logo.webp"),
  price = "0",
  priceCurrency = "INR",
  features = [],
}) => {
  const scriptId = id || "schema-softwareapplication";

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name,
    description,
    applicationCategory,
    operatingSystem,
    url,
    image,
    author: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: "AG Solutions",
    },
    offers: {
      "@type": "Offer",
      price: String(price),
      priceCurrency,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        "@id": "https://ag-solutions.in/#organization",
        name: "AG Solutions",
      },
    },
  };

  if (features && features.length > 0) {
    schema.featureList = features.join(", ");
  }

  // Intentionally NO `aggregateRating` and NO `review` here. Both would cause
  // Google's rich-result test to count implicit reviews against this
  // SoftwareApp entity. Brand-wide reviews live on the Organization schema
  // and the standalone Review schemas (see prerenderSeo.ts).

  return <JsonLd id={scriptId} schema={schema} />;
};

export default SoftwareAppSchema;