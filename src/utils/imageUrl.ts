export const SERVER_IMAGE_BASE = "https://ag-solutions.in/webapi/public/assets/images/web_images_new";

/**
 * Helper to get the correct URL for an image/SVG asset.
 * Dynamically routes all assets to the centralized remote server base URL.
 */
export function getImageUrl(path: string | undefined | null): string {
  if (!path) return "";

  // Return full URLs directly
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Normalize path removing leading relative markers
  let cleanPath = path.trim();
  if (cleanPath.startsWith("./")) {
    cleanPath = cleanPath.substring(2);
  }
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  // Remove leading /images prefix if present to align with remote server directory structure
  const relativePath = cleanPath.startsWith("/images/")
    ? cleanPath.substring(7)
    : cleanPath.startsWith("/")
    ? cleanPath.substring(1)
    : cleanPath;

  return `${SERVER_IMAGE_BASE}/${relativePath}`;
}

export default getImageUrl;

