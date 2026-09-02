import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DIST_DIR = path.resolve(__dirname, "../../dist");
export const DIST_INDEX = path.resolve(DIST_DIR, "index.html");
export const SITE_ORIGIN = "https://ag-solutions.in";
export const API_BASE = "https://ag-solutions.in/webapi/public/api";

/** Public logo URL — used by Organization and BlogPosting publisher. */
export const LOGO_URL = "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp";

/**
 * Canonical @id of the global AG Solutions Organization entity. Any
 * Organization with a different @id is treated as a per-page product
 * organization by the review-attachment logic.
 */
export const GLOBAL_ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
