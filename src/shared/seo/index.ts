/**
 * Cross-cutting SEO utilities shared by every per-feature SEO folder.
 *
 * Per-feature schemas (HomeSEO, BizStockSEO, etc.) and feature-specific
 * schemas (BlogPosting, SoftwareApp, Service, etc.) live in their own
 * `src/features/<feature>/seo/` folders. Only utilities that EVERY feature
 * needs live here.
 */
export { default as JsonLd } from "./JsonLd";
export { default as SEO } from "./SEO";
export { default as OrganizationSchema } from "./OrganizationSchema";
export { default as WebSiteSchema } from "./WebSiteSchema";
export { default as TestimonialSchema } from "./TestimonialSchema";
