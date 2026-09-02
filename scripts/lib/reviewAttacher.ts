/**
 * Replace the page's brand schema with the approved LocalBusiness testimonial
 * schema. Reviews and the aggregate rating come from the testimonial API.
 */
export function attachReviewsToEntity(
  schemas: Record<string, unknown>[],
  reviews: Record<string, unknown>[]
): Record<string, unknown>[] {
  if (reviews.length === 0) return schemas;

  const testimonialSchema = {
    _scriptId: "schema-organization",
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AG Solutions",
    url: "https://ag-solutions.in/",
    image: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp",
    description: "AG Solutions provides web development and digital solutions.",
    telephone: "+91-8867171060",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jayanagara 9th Block",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560069",
      addressCountry: "IN",
    },
    priceRange: "Contact for pricing",
    review: reviews,
    aggregateRating: buildAggregateRating(reviews),
  };
  const organizationIndex = schemas.findIndex((schema) => schema["@type"] === "Organization");
  const softwareIndex = schemas.findIndex((schema) => schema["@type"] === "SoftwareApplication");
  const withTestimonial = organizationIndex >= 0
    ? schemas.map((schema, index) => (index === organizationIndex ? testimonialSchema : schema))
    : [...schemas, testimonialSchema];

  return softwareIndex >= 0
    ? withTestimonial.map((schema, index) =>
        index === softwareIndex
          ? { ...schema, aggregateRating: buildAggregateRating(reviews) }
          : schema
      )
    : withTestimonial;
}

function buildAggregateRating(reviews: Record<string, unknown>[]): Record<string, unknown> {
  const ratings = reviews
    .map((review) => Number((review.reviewRating as Record<string, unknown>)?.ratingValue))
    .filter((rating) => Number.isFinite(rating));
  const average = ratings.reduce((total, rating) => total + rating, 0) / ratings.length;

  return {
    "@type": "AggregateRating",
    ratingValue: average.toFixed(1),
    reviewCount: reviews.length,
    bestRating: "5",
    worstRating: "1",
  };
}
