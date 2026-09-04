/**
 * Replace the page's brand schema with the approved LocalBusiness testimonial
 * schema. Reviews and the aggregate rating come from the testimonial API.
 *
 * Important: keep the same `<script id="...">` as the brand Organization
 * schema so we replace the prerendered element in place (instead of appending
 * a second one with the same data). The `@id` matches the global brand
 * entity so Google sees one AG Solutions identity across every route.
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
    "@id": "https://ag-solutions.in/#organization",
    name: "AG Solutions",
    legalName: "AG Solutions",
    url: "https://ag-solutions.in/",
    logo: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp",
    image: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp",
    description:
      "AG Solutions builds web applications, mobile apps, desktop software, digital marketing systems, and export documentation products.",
    telephone: "+91-8867171060",
    email: "info@ag-solutions.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jayanagara 9th Block",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560069",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/ag-solutions-2b1b50422/",
      "https://www.facebook.com/profile.php?id=61591878191618",
      "https://www.instagram.com/ag_solutions_official/",
    ],
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
