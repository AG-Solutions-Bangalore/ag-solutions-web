/**
 * Replace the page's brand schema with the senior-approved testimonial schema.
 * Reviews must live in this exact minimal Organization object only.
 */
export function attachReviewsToEntity(
  schemas: Record<string, unknown>[],
  reviews: Record<string, unknown>[]
): Record<string, unknown>[] {
  if (reviews.length === 0) return schemas;

  const testimonialSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AG Solutions",
    url: "https://ag-solutions.in/",
    review: reviews,
  };
  const organizationIndex = schemas.findIndex((schema) => schema["@type"] === "Organization");

  return organizationIndex >= 0
    ? schemas.map((schema, index) => (index === organizationIndex ? testimonialSchema : schema))
    : [...schemas, testimonialSchema];
}
