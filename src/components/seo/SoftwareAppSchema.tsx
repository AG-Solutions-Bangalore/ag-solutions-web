import React from "react";
import JsonLd from "./JsonLd";

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
  image = "https://ag-solutions.in/images/logo.png",
  price = "0",
  priceCurrency = "INR",
  ratingValue = 4.9,
  reviewCount = 120,
  features = [],
}) => {
  const scriptId =
    id || `schema-software-${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(ratingValue),
      reviewCount: String(reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
  };

  if (features && features.length > 0) {
    schema.featureList = features.join(", ");
  }

  return <JsonLd id={scriptId} schema={schema} />;
};

export default SoftwareAppSchema;
