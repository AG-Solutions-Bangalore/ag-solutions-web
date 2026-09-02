# Structured-data rules

## Source of truth

- Testimonials always come from `GET /getTestimonial/{route}`. Use the API's
  author, body, and rating; never invent a rating.
- Do not set review counts to `0`, remove reviews, or add a review cap unless
  the user explicitly requests a per-route limit.
- Every page's testimonials must use one minimal `Organization` JSON-LD script:
  `@context`, `@type`, `name`, `url`, and `review` only. Do not add an `@id`,
  organization details, `datePublished`, `aggregateRating`, or standalone
  Review scripts. An aggregate rating is detected as one extra Review-snippet
  item.

## Review-schema ownership

- Home, service, and product routes all attach API reviews to the minimal
  `Organization` testimonial schema. `SoftwareApplication` schemas retain
  their application fields but never carry reviews or aggregate ratings.
- Never attach `review` or `aggregateRating` to a `Service`.

## Build and prerender flow

1. `npm run build` runs TypeScript, Vite, and `scripts/prerenderSeo.ts`.
2. `prerenderSeo.ts` fetches the route's FAQ and testimonial API data.
3. `reviewAttacher.ts` replaces the route's Organization schema with the
   minimal testimonial schema when API reviews exist.
4. `htmlBuilder.ts` writes route-specific JSON-LD into `dist`.
5. `bun run preview` serves that generated `dist` output; restart preview
   after rebuilding so it cannot serve an old build.

## Required checks after schema changes

- Run `npm run build`.
- Run `bun scripts/validateDistHtml.ts`.
- Inspect the affected `dist/<route>.html` JSON-LD and confirm the API review
  count and each rating match the API, with no aggregate rating.
- Test the affected route in Google Rich Results Test before deployment.
- Do not add product-specific review markup; the same testimonial structure
  is required on every route.

## Offers

- `SoftwareApplication.offers` is optional. Add it only when the real public
  product price and currency are provided; never use a fake free (`0`) price.
