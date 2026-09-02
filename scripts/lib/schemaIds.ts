/**
 * Derive a stable `<script id="...">` for a given JSON-LD schema object.
 *
 * The id is what `<JsonLd>` uses on the React side to detect "this script
 * already exists — don't overwrite." The prerender and React must agree on
 * these names.
 */
import { GLOBAL_ORGANIZATION_ID } from "./constants";

export function getSchemaScriptId(s: Record<string, unknown>, idx: number): string {
  // Explicit override wins
  if (s._scriptId && typeof s._scriptId === "string") {
    return s._scriptId;
  }

  const type = ((s["@type"] as string) || "").toLowerCase();

  if (type === "review") {
    const authorName =
      (s.author as { name?: string } | undefined)?.name ||
      (s.name as string | undefined) ||
      `reviewer-${idx}`;
    const slug = String(authorName).toLowerCase().replace(/[^a-z0-9]/g, "-");
    return `schema-review-${slug}-${idx}`;
  }

  // ProductOrganization — a per-page Organization (e.g. BizStock, Ease
  // Marketing) that is NOT the global AG Solutions Organization. It
  // must have a distinct script id so the global brand entity and the
  // product entity don't collide on `id="schema-organization"`.
  if (type === "organization") {
    const id = s["@id"] as string | undefined;
    if (id && id !== GLOBAL_ORGANIZATION_ID) {
      // e.g. https://ag-solutions.in/bizstock#organization → schema-product-org-bizstock
      const match = id.match(/\/([^/#]+)#organization$/);
      const slug = match ? match[1].toLowerCase().replace(/[^a-z0-9]/g, "-") : `idx-${idx}`;
      return `schema-product-org-${slug}`;
    }
    return "schema-organization";
  }

  const known: Record<string, string> = {
    faqpage: "schema-faqpage",
    website: "schema-website",
    service: "schema-service",
    softwareapplication: "schema-softwareapplication",
    breadcrumblist: "schema-breadcrumblist",
    blogposting: "schema-blogposting",
    contactpage: "schema-contactpage",
    collectionpage: "schema-collectionpage",
  };

  return known[type] || `schema-${type}-${idx}`;
}
