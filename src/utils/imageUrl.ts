export const SERVER_IMAGE_BASE = "https://ag-solutions.in/webapi/public/assets/images/web_images_new";

/**
 * Helper to get the correct URL for an image asset.
 * Keeps performance-critical hero assets & local vector icons serving locally,
 * while routing all content images to the remote server base URL.
 */
export function getImageUrl(path: string | undefined | null): string {
  if (!path) return "";

  // Return full URLs directly
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Keep critical performance hero & core UI assets local
  if (
    cleanPath === "/images/logo.webp" ||
    cleanPath === "/images/home/logo.webp" ||
    cleanPath === "/images/laptop.webp" ||
    cleanPath === "/images/laptop.webp" ||
    cleanPath === "/images/ag-sl-desk.webp" ||
    cleanPath === "/images/ag-sl-desk.webp" ||
    cleanPath === "/images/ag-sl-desk1.webp" ||
    cleanPath === "/images/ag-sl-desk1.webp" ||
    cleanPath === "/images/home/mobile_dev.webp" ||
    cleanPath.endsWith(".svg") ||
    cleanPath.startsWith("/icons/")
  ) {
    return cleanPath;
  }

  // Remove leading /images prefix to align with remote server path structure
  const relativePath = cleanPath.startsWith("/images/")
    ? cleanPath.substring(7)
    : cleanPath.startsWith("/")
    ? cleanPath.substring(1)
    : cleanPath;

  return `${SERVER_IMAGE_BASE}/${relativePath}`;
}

export default getImageUrl;
