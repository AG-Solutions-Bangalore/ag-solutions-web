/**
 * Per-page meta-tag checks that don't fit into a single concern.
 * Each function returns `true` if the check passed.
 */

const AUTHOR_PUBLISHER_REGEX = (name: string) =>
  new RegExp(
    `<meta\\s[^>]*\\bname=["']${name}["'][^>]*\\bcontent=["']AG Solutions["'][^>]*>`,
    "i"
  );

/** Every prerendered page must include the AG Solutions author + publisher. */
export function hasAuthorAndPublisherMeta(html: string): boolean {
  return (
    AUTHOR_PUBLISHER_REGEX("author").test(html) &&
    AUTHOR_PUBLISHER_REGEX("publisher").test(html)
  );
}

/** Reject PNG logo references — the brand is WebP-only. */
export function noPngLogoInHtml(html: string): boolean {
  return !html.includes("logo.png");
}
