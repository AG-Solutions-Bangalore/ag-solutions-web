import React from "react";
import { JsonLd } from "@/shared/seo/JsonLd";

export interface ServiceReviewItem {
  authorName: string;
  reviewBody: string;
  ratingValue?: number | string;
}

export interface ServiceSchemaProps {
  id?: string;
  name: string;
  serviceType: string;
  url: string;
  areaServed?: string;
  reviews?: ServiceReviewItem[];
}

/**
 * MINIMAL Service schema. The `provider` field is a simple object
 * (no @id) so Google does not inline the full AG Solutions Organization
 * into the Service entity, which would otherwise produce duplicated
 * brand info and the "Invalid object type for field '<parent_node>'"
 * error.
 */
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  id,
  name,
  serviceType,
  url,
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
    serviceType,
    provider: {
      "@type": "Organization",
      name: "AG Solutions",
      url: "https://ag-solutions.in/",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    url,
  };

  if (reviews && reviews.length > 0) {
    schema.review = reviews.map((r) => ({
      "@type": "Review",
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
