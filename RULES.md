# Structured-data rules

## Source of truth

- Testimonials always come from `GET /getTestimonial/{route}`. Use the API's
  author, body, and rating; never invent a rating.
- Do not set review counts to `0`, remove reviews, or add a review cap unless
  the user explicitly requests a per-route limit.
- Every page's testimonials must use one `LocalBusiness` JSON-LD script with
  `@context`, `@type`, `name`, `url`, `image`, `description`, `review`, and an
  API-calculated `aggregateRating`. Review dates and rating bounds come from
  the approved structure; do not add standalone Review scripts.

## Review-schema ownership

- Home, service, and product routes all attach API reviews and their calculated
  aggregate rating to the LocalBusiness testimonial schema. SoftwareApplication
  schemas retain their application fields.
- Never attach `review` or `aggregateRating` to a `Service`.

## Build and prerender flow

1. `npm run build` runs TypeScript, Vite, and `scripts/prerenderSeo.ts`.
2. `prerenderSeo.ts` fetches the route's FAQ and testimonial API data.
3. `reviewAttacher.ts` replaces the route's Organization schema with the
   LocalBusiness testimonial schema and API-calculated aggregate when reviews
   exist.
4. `htmlBuilder.ts` writes route-specific JSON-LD into `dist`.
5. `bun run preview` serves that generated `dist` output; restart preview
   after rebuilding so it cannot serve an old build.

## Required checks after schema changes

- Run `npm run build`.
- Run `bun scripts/validateDistHtml.ts`.
- Inspect the affected `dist/<route>.html` JSON-LD and confirm the API review
  count, each rating, and calculated aggregate match the API.
- Test the affected route in Google Rich Results Test before deployment.
- Keep the same testimonial structure on every route.

## Offers

- `SoftwareApplication.offers` is optional. Add it only when the real public
  product price and currency are provided; never use a fake free (`0`) price.
