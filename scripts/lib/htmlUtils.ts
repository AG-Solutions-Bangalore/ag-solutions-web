/** Escape user-controlled text for safe inclusion in HTML body. */
export function escapeHtml(str: string = ""): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Escape text for safe inclusion in an HTML attribute (handles double quotes). */
export function escapeAttr(str: string = ""): string {
  return escapeHtml(str).replace(/"/g, "&quot;");
}

/**
 * Replace the first match of `regex` in `html` with `newTag`. If the regex
 * doesn't match, append `newTag` immediately before `</head>`.
 */
export function upsertTag(html: string, regex: RegExp, newTag: string): string {
  if (regex.test(html)) {
    return html.replace(regex, newTag);
  }
  return html.replace("</head>", `  ${newTag}\n</head>`);
}

/** Parse any date string to ISO-8601, or `undefined` if invalid. */
export function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}
