export const SERVER_IMAGE_BASE = "http://ag-solutions.in/webapi/public/assets/images/web_images";

/**
 * Helper to get the correct URL for an image asset.
 * Keeps performance-critical local assets (logo, SVGs, favicons) serving locally,
 * while loading content images from remote server host.
 */
export function getImageUrl(path: string | undefined | null): string {
  if (!path) return "";

  // Return full URLs directly
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Keep critical performance assets local
  if (
    cleanPath === "/images/logo.png" ||
    cleanPath.endsWith(".svg") ||
    cleanPath.startsWith("/icons/")
  ) {
    return cleanPath;
  }

  // Remove leading /images prefix to align with remote server path structure
  const relativePath = cleanPath.startsWith("/images/")
    ? cleanPath.substring(7)
    : cleanPath;

  return `${SERVER_IMAGE_BASE}${relativePath.startsWith("/") ? relativePath : "/" + relativePath}`;
}
