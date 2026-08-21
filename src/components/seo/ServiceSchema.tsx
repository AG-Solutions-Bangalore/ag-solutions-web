import React from "react";
import JsonLd from "./JsonLd";

export interface ServiceReviewItem {
  authorName: string;
  reviewBody: string;
  ratingValue?: number | string;
}

export interface ServiceSchemaProps {
  id?: string;
  name: string;
  description: string;
  serviceType?: string;
  url?: string;
  providerName?: string;
  areaServed?: string;
  reviews?: ServiceReviewItem[];
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  id,
  name,
  description,
  serviceType,
  url = "https://ag-solutions.in/",
  providerName = "AG Solutions",
  areaServed = "IN",
  reviews = [],
}) => {
  const scriptId =
    id || `schema-service-${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType: serviceType || name,
    provider: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: providerName,
      url: "https://ag-solutions.in/",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
  };

  if (reviews && reviews.length > 0) {
    schema.review = reviews.map((r) => ({
      "@type": "Review",
      name: `${r.authorName} Review`,
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

export default ServiceSchema;


