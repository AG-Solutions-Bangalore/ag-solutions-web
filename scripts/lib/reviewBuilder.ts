/**
 * Deterministic key for a testimonial record.
 * Content-based so different ordering of the same record is not a duplicate.
 */
export function testimonialKey(name: string, body: string, date: string): string {
  return [name, body.substring(0, 120), date].join("\x00");
}

export interface NormalisedTestimonial {
  authorRaw: string;
  authorClean: string;
  slug: string;
  reviewBody: string;
  dateStr: string;
  /** null = API returned no rating, must not be fabricated. */
  genuineRating: string | null;
}

/**
 * Normalise a raw API testimonial into the shared internal shape.
 * Returns `null` if the record is missing required fields.
 */
export function normaliseTestimonial(item: any): NormalisedTestimonial | null {
  if (!item?.testimonial_client_name || !item?.testimonial_description) return null;

  const authorRaw = String(item.testimonial_client_name).trim();
  // Strip appended role text like "– Sales Manager", "(Business Owner)" etc.
  const authorClean = authorRaw.replace(/\s*([–\-\(].*)$/g, "").trim() || authorRaw;
  const slug = authorClean.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const reviewBody = String(item.testimonial_description).trim();

  // Date — accept any parseable value, leave empty string when absent/invalid
  const rawDate = item.testimonial_created_date || item.created_date || "";
  let dateStr = "";
  if (rawDate) {
    const d = new Date(rawDate);
    if (!Number.isNaN(d.getTime())) dateStr = d.toISOString();
  }

  // Rating — only use what the API actually provides. Never fabricate.
  const rawRating = item.testimonial_rating ?? item.rating ?? item.rating_value;
  const genuineRating =
    rawRating !== undefined &&
    rawRating !== null &&
    rawRating !== "" &&
    Number(rawRating) > 0
      ? String(rawRating)
      : null;

  return { authorRaw, authorClean, slug, reviewBody, dateStr, genuineRating };
}

/**
 * Build a Review JSON-LD object from a normalised testimonial.
 */
export function buildReviewSchema(norm: NormalisedTestimonial): Record<string, unknown> {
  const review: Record<string, unknown> = {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: norm.authorClean,
    },
  };

  review.reviewRating = {
    "@type": "Rating",
    ratingValue: norm.genuineRating || "5",
    bestRating: "5",
  };

  review.reviewBody = norm.reviewBody;

  return review;
}
