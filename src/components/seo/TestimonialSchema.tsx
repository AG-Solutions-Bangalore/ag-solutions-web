import React from "react";
import JsonLd from "./JsonLd";

export interface ReviewItem {
  authorName: string;
  reviewBody: string;
  ratingValue?: string | number;
  bestRating?: string | number;
  itemReviewedName?: string;
  itemType?: "SoftwareApplication" | "Organization" | "Product" | "Service";
}

export interface TestimonialSchemaProps {
  id?: string;
  reviews?: ReviewItem[];
  authorName?: string;
  reviewBody?: string;
  ratingValue?: string | number;
  bestRating?: string | number;
  itemReviewedName?: string;
  itemType?: "SoftwareApplication" | "Organization" | "Product" | "Service";
}

export const TestimonialSchema: React.FC<TestimonialSchemaProps> = ({
  id,
  reviews,
  authorName = "Ravi Sharma",
  reviewBody = "AG Solutions delivered an outstanding digital solution on time. Highly recommended for any business.",
  ratingValue = "5",
  bestRating = "5",
  itemReviewedName = "AG Solutions",
  itemType = "Organization",
}) => {
  // If multiple dynamic reviews are provided
  if (reviews && reviews.length > 0) {
    return (
      <>
        {reviews.map((r, i) => {
          const currentItemType = r.itemType || itemType;
          const reviewSlug = (r.authorName || `reviewer-${i}`)
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "-");
          const targetName = r.itemReviewedName || itemReviewedName;

          const schema = {
            "@context": "https://schema.org",
            "@type": "Review",
            name: `${r.authorName} Review for ${targetName}`,
            author: {
              "@type": "Person",
              name: r.authorName,
            },
            reviewBody: r.reviewBody,
            reviewRating: {
              "@type": "Rating",
              ratingValue: String(r.ratingValue || "5"),
              bestRating: String(r.bestRating || "5"),
            },
            itemReviewed: {
              "@type": currentItemType,
              "@id": "https://ag-solutions.in/#organization",
              name: `${r.authorName} - Client Review (${targetName})`,
              legalName: targetName,
              url: "https://ag-solutions.in/",
            },
          };

          return (
            <JsonLd
              key={`${reviewSlug}-${i}`}
              id={`schema-review-${reviewSlug}-${i}`}
              schema={schema}
            />
          );
        })}
      </>
    );
  }

  // Single review fallback
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${authorName} Review for ${itemReviewedName}`,
    author: {
      "@type": "Person",
      name: authorName,
    },
    reviewBody: reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(ratingValue),
      bestRating: String(bestRating),
    },
    itemReviewed: {
      "@type": itemType,
      "@id": "https://ag-solutions.in/#organization",
      name: `${authorName} - Client Review (${itemReviewedName})`,
      legalName: itemReviewedName,
      url: "https://ag-solutions.in/",
    },
  };

  return <JsonLd id={id || "schema-review-single"} schema={schema} />;
};



export default TestimonialSchema;


