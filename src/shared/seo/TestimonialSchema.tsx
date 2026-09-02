import React from "react";

export interface ReviewItem {
  authorName: string;
  reviewBody: string;
  ratingValue?: string | number | null;
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

/**
 * TestimonialSchema is intentionally a no-op.
 *
 * Testimonials are canonically embedded in the Organization schema's `review`
 * array during SSG prerendering (see `scripts/prerenderSeo.ts`). Returning
 * null here prevents injecting separate standalone Review script tags on
 * client hydration, which would otherwise inflate Google's rich-results
 * review count.
 */
export const TestimonialSchema: React.FC<TestimonialSchemaProps> = () => {
  return null;
};

export default TestimonialSchema;
