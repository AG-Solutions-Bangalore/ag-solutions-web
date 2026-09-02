import { API_BASE } from "./constants";
import { buildReviewSchema, normaliseTestimonial, testimonialKey } from "./reviewBuilder";

/**
 * Map a route path to the API slug the testimonial endpoint expects.
 * Several routes have legacy aliases (e.g. /EASE-Marketing, /biz-stock)
 * that must collapse to a single canonical API slug.
 */
function toApiSlug(route: string): string {
  let apiRoute = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");

  if (apiRoute.includes("bizstock") || apiRoute.includes("biz-stock")) apiRoute = "biz-stock";
  else if (apiRoute.includes("export-biz")) apiRoute = "export-biz";
  else if (apiRoute.includes("ease-marketing") || apiRoute.includes("EASE-Marketing")) apiRoute = "ease-marketing";
  else if (apiRoute.includes("quote-biz")) apiRoute = "quote-biz";
  else if (apiRoute.includes("web-development")) apiRoute = "web-development";
  else if (apiRoute.includes("mobile-app")) apiRoute = "mobile-app-development";
  else if (apiRoute.includes("digital-marketing")) apiRoute = "digital-marketing";

  return apiRoute;
}

const COMMON_HEADERS = {
  Accept: "application/json, text/plain, */*",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
} as const;

async function safeJson(res: Response): Promise<any | null> {
  try {
    return await res.json();
  } catch {
    return null;
  }
}

/**
 * Fetch reviews for a route from the live API. Returns an array of
 * Review JSON-LD objects ready to be embedded into the parent entity.
 *
 * The cap is optional and only used when the React page intentionally
 * limits the testimonials it renders (to keep prerender count == UI count).
 */
export async function fetchDynamicReviews(
  route: string,
  maxReviews?: number
): Promise<Record<string, unknown>[]> {
  try {
    const apiRoute = toApiSlug(route);

    let res = await fetch(`${API_BASE}/getTestimonial/${apiRoute}`, {
      headers: COMMON_HEADERS,
      signal: AbortSignal.timeout(6000),
    });

    // Fallback slug for /biz-stock → try "bizstock"
    if (!res.ok && apiRoute === "biz-stock") {
      res = await fetch(`${API_BASE}/getTestimonial/bizstock`, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(6000),
      });
    }

    if (!res.ok) return [];
    const json = await safeJson(res);
    const rawData: any[] = Array.isArray(json?.data) ? json.data : [];

    // Normalise → deduplicate (content-based) → cap → build Review JSON-LD
    const seen = new Set<string>();
    const unique = rawData
      .map((item) => normaliseTestimonial(item))
      .filter((n): n is NonNullable<typeof n> => n !== null)
      .filter((n) => {
        const key = testimonialKey(n.authorClean, n.reviewBody, n.dateStr);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

    const capped =
      typeof maxReviews === "number" && maxReviews > 0 && maxReviews < unique.length
        ? unique.slice(0, maxReviews)
        : unique;

    return capped.map((n) => buildReviewSchema(n));
  } catch {
    return [];
  }
}

/**
 * Fetch FAQs for a route. Returns null when no FAQ items exist (so the
 * FAQPage schema is omitted entirely).
 */
export async function fetchDynamicFAQs(route: string): Promise<Record<string, unknown> | null> {
  try {
    const slug = toApiSlug(route);

    const res = await fetch(`${API_BASE}/getFAQBySlug/${slug}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return null;
    const json = await safeJson(res);
    const data = json?.data;
    if (!Array.isArray(data) || data.length === 0) return null;

    const mainEntity = data
      .filter((item: any) => item?.faq_que && item?.faq_ans)
      .map((item: any) => ({
        "@type": "Question",
        name: item.faq_que,
        acceptedAnswer: { "@type": "Answer", text: item.faq_ans },
      }));

    if (mainEntity.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      _scriptId: "schema-faqpage",
      mainEntity,
    };
  } catch {
    return null;
  }
}

/** Fetch a single blog article's full data (including FAQ list) by slug. */
export async function fetchBlogDetail(slug: string): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE}/getBlogsBySlug/${slug}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(6000),
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}
