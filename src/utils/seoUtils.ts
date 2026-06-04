/**
 * Utility functions for SEO-related tasks such as canonical URL generation.
 */

// Fallback host if VITE_APP_URL is not set
const DEFAULT_SITE_URL = "https://ag-solutions.in";

/**
 * Clean path for canonical URL:
 * - Lowercase the path (casing causes duplicate index issues in search engines)
 * - Strip trailing slashes consistently (except for root domain)
 */
export function cleanPathForCanonical(pathname: string): string {
  if (!pathname || pathname === "/") return "";

  let clean = pathname.toLowerCase().trim();

  // Remove starting slash for uniform manipulation
  if (clean.startsWith("/")) {
    clean = clean.slice(1);
  }

  // Remove trailing slash
  if (clean.endsWith("/")) {
    clean = clean.slice(0, -1);
  }

  return clean ? `/${clean}` : "";
}

interface CanonicalOptions {
  siteUrl?: string;
  allowedQueryParams?: string[]; // e.g. pagination query params like 'page'
}

/**
 * Generates a clean canonical URL for the current path or a specified path.
 * Filters out tracking queries (utm_*, gclid, etc.) that lead to duplicate page indexing.
 */
export function generateCanonicalUrl(
  path: string,
  searchString = "",
  options: CanonicalOptions = {},
): string {
  const siteUrl =
    options.siteUrl || import.meta.env.VITE_APP_URL || DEFAULT_SITE_URL;
  const baseUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;

  const cleanPath = cleanPathForCanonical(path);

  // Parse search params if present
  let cleanSearch = "";
  if (
    searchString &&
    options.allowedQueryParams &&
    options.allowedQueryParams.length > 0
  ) {
    const params = new URLSearchParams(searchString);
    const filteredParams = new URLSearchParams();

    options.allowedQueryParams.forEach((param) => {
      const value = params.get(param);
      if (value) {
        filteredParams.set(param, value);
      }
    });

    const queryString = filteredParams.toString();
    if (queryString) {
      cleanSearch = `?${queryString}`;
    }
  }

  return `${baseUrl}${cleanPath}${cleanSearch}`;
}
