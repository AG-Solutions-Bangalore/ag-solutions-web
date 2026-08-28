import React from "react";
import JsonLd from "./JsonLd";

export interface SoftwareReviewItem {
  authorName: string;
  reviewBody: string;
  ratingValue?: number | string;
}

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
  reviews?: SoftwareReviewItem[];
}

export const SoftwareAppSchema: React.FC<SoftwareAppSchemaProps> = ({
  id,
  name,
  description,
  applicationCategory = "BusinessApplication",
  operatingSystem = "Web Browser, Cloud-based, Windows, macOS, Linux",
  url = "https://ag-solutions.in/",
  image = "https://ag-solutions.in/images/logo.webp",
  price = "0",
  priceCurrency = "INR",
  ratingValue,
  reviewCount,
  features = [],
  reviews = [],
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

  if (ratingValue && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: String(ratingValue),
      reviewCount: String(reviewCount),
      bestRating: "5",
      worstRating: "1",
    };
  }

  if (features && features.length > 0) {
    schema.featureList = features.join(", ");
  }

  if (reviews && reviews.length > 0) {
    schema.review = reviews.map((r) => ({
      "@type": "Review",
      name: r.authorName,
      author: {
        "@type": "Person",
        name: r.authorName,
      },
      reviewBody: r.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.ratingValue || "5"),
        bestRating: "5",
      },
    }));
  }

  return <JsonLd id={scriptId} schema={schema} />;
};

export default SoftwareAppSchema;

