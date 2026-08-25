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
  authorName,
  reviewBody,
  ratingValue = "5",
  bestRating = "5",
  itemReviewedName = "AG Solutions",
}) => {
  // If multiple dynamic reviews are provided
  if (reviews && reviews.length > 0) {
    return (
      <>
        {reviews.map((r, i) => {
          const reviewSlug = (r.authorName || `reviewer-${i}`)
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "-");

          const schema = {
            "@context": "https://schema.org",
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
              bestRating: String(r.bestRating || "5"),
            },
            itemReviewed: {
              "@type": "Organization",
              name: r.itemReviewedName || "AG Solutions",
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

  // Single review if explicitly provided
  if (authorName && reviewBody) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Review",
      name: authorName,
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
        "@type": "Organization",
        name: itemReviewedName || "AG Solutions",
      },
    };

    return <JsonLd id={id || "schema-review-single"} schema={schema} />;
  }

  // Return null if no data
  return null;
};





export default TestimonialSchema;


