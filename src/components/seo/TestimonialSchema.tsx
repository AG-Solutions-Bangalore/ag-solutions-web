import React from "react";
import JsonLd from "./JsonLd";

export interface ReviewItem {
  authorName: string;
  reviewBody: string;
  ratingValue?: string | number;
  bestRating?: string | number;
  itemReviewedName?: string;
  itemType?: "SoftwareApplication" | "Organization" | "Product";
}

export interface TestimonialSchemaProps {
  reviews?: ReviewItem[];
  authorName?: string;
  reviewBody?: string;
  ratingValue?: string | number;
  bestRating?: string | number;
  itemReviewedName?: string;
  itemType?: "SoftwareApplication" | "Organization" | "Product";
}

export const TestimonialSchema: React.FC<TestimonialSchemaProps> = ({
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

          const schema = {
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
              bestRating: String(r.bestRating || "5"),
            },
            itemReviewed: {
              "@type": currentItemType,
              "@id": "https://ag-solutions.in/#organization",
              name: r.authorName,
              legalName: r.itemReviewedName || itemReviewedName,
              url: "https://ag-solutions.in/",
              image: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.png",
            },
          };

          return (
            <JsonLd
              key={`${r.authorName}-${i}`}
              id={`schema-review-${r.authorName.toLowerCase().replace(/\s+/g, "-")}`}
              schema={schema}
            />
          );
        })}
      </>
    );
  }

  // Single review fallback
  const schema = {
    "@type": "Review",
    name: `${authorName} Review`,
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
      name: authorName,
      legalName: itemReviewedName,
      url: "https://ag-solutions.in/",
      image: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.png",
    },
  };

  return <JsonLd id="schema-review-single" schema={schema} />;
};

export default TestimonialSchema;
