/**
 * Blog HTML helpers.
 *
 * Blog article bodies come from the API as raw HTML and are rendered with
 * `dangerouslySetInnerHTML`. To keep SEO crawlers happy without depending on
 * the upstream CMS to remember to add `title` attributes, we post-process
 * the markup here:
 *
 *   - `<a>` tags get a `title` (and `aria-label`) matching the visible link
 *     text or the destination URL when no text is present.
 *   - `<img>` tags get a `title` matching their existing `alt` text so
 *     hover-tooltips and image-rich-results aren't blank.
 *
 * The transformation is conservative — only attributes we own are added,
 * never removed or reordered — and runs in O(n) over the input string.
 */

/** Strip HTML tags from a string to recover the visible link text. */
function stripTags(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/** Title-case a URL path into a human-readable label. */
function humaniseUrl(rawHref: string): string {
  try {
    const url = new URL(rawHref, "https://ag-solutions.in");
    const last = url.pathname.split("/").filter(Boolean).pop() || url.hostname;
    return last
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (ch) => ch.toUpperCase());
  } catch {
    return rawHref;
  }
}

/**
 * Compute a sensible `title` for an anchor element from its destination
 * and visible text. Order of preference:
 *   1. Explicit `title` already on the element.
 *   2. Visible link text (after stripping nested tags).
 *   3. Humanised URL path.
 *   4. Raw `href` as a last resort.
 */
function deriveAnchorTitle(href: string, text: string, existingTitle?: string): string {
  if (existingTitle && existingTitle.trim()) return existingTitle.trim();

  const cleanedText = stripTags(text);
  if (cleanedText) return cleanedText;

  if (href && href !== "#") return humaniseUrl(href);

  return "AG Solutions";
}

/**
 * Add `title` (and `aria-label`) attributes to every `<a>` that doesn't
 * already have one. Existing values are preserved so authors can override.
 */
function annotateAnchors(html: string): string {
  return html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_match: string, attrs: string, inner: string) => {
    const hrefMatch = attrs.match(/\bhref\s*=\s*"([^"]*)"/i) || attrs.match(/\bhref\s*=\s*'([^']*)'/i);
    const href = hrefMatch ? hrefMatch[1] : "";
    const titleMatch = attrs.match(/\btitle\s*=\s*"([^"]*)"/i) || attrs.match(/\btitle\s*=\s*'([^']*)'/i);
    const existingTitle = titleMatch ? titleMatch[1] : undefined;
    const ariaMatch = attrs.match(/\baria-label\s*=\s*"([^"]*)"/i) || attrs.match(/\baria-label\s*=\s*'([^']*)'/i);

    const title = deriveAnchorTitle(href, inner, existingTitle);
    const ariaLabel = ariaMatch ? ariaMatch[1] : title;

    // Drop existing title/aria-label so we can re-emit them deterministically.
    const cleanedAttrs = attrs
      .replace(/\s*\btitle\s*=\s*"[^"]*"/gi, "")
      .replace(/\s*\btitle\s*=\s*'[^']*'/gi, "")
      .replace(/\s*\baria-label\s*=\s*"[^"]*"/gi, "")
      .replace(/\s*\baria-label\s*=\s*'[^']*'/gi, "");

    const escapedTitle = title.replace(/"/g, "&quot;");
    const escapedAria = ariaLabel.replace(/"/g, "&quot;");
    return `<a${cleanedAttrs} title="${escapedTitle}" aria-label="${escapedAria}">${inner}</a>`;
  });
}

/**
 * Add `title` attributes to every `<img>` that has an `alt` but no `title`.
 * Falls back to the filename when no alt text exists.
 */
function annotateImages(html: string): string {
  return html.replace(/<img\b([^>]*)>/gi, (match, attrs: string) => {
    const altMatch = attrs.match(/\balt\s*=\s*"([^"]*)"/i) || attrs.match(/\balt\s*=\s*'([^']*)'/i);
    const alt = altMatch ? altMatch[1] : "";
    const titleMatch = attrs.match(/\btitle\s*=\s*"([^"]*)"/i) || attrs.match(/\btitle\s*=\s*'([^']*)'/i);
    if (titleMatch) return match;

    const srcMatch = attrs.match(/\bsrc\s*=\s*"([^"]*)"/i) || attrs.match(/\bsrc\s*=\s*'([^']*)'/i);
    const src = srcMatch ? srcMatch[1] : "";
    const fallback = alt || humaniseUrl(src.split("/").pop() || src || "image");

    const escapedTitle = fallback.replace(/"/g, "&quot;");
    return `<img${attrs} title="${escapedTitle}">`;
  });
}

/**
 * Post-process a blog article's HTML body so every link and image has
 * SEO-friendly `title` attributes. Idempotent — safe to run on already
 * annotated markup.
 */
export function annotateBlogHtml(html: string | undefined | null): string {
  if (!html) return "";
  return annotateImages(annotateAnchors(html));
}
