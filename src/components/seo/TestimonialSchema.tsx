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

export const TestimonialSchema: React.FC<TestimonialSchemaProps> = () => {
  // Testimonials are canonically embedded in the Organization schema's `review` array
  // during SSG prerendering (and in scripts/prerenderSeo.ts) as required by senior.
  // Returning null here prevents injecting separate standalone Review script tags on client hydration.
  return null;
};





export default TestimonialSchema;
