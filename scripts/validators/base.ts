import type { TypeValidator, ValidationIssue } from "./types";

/**
 * Universal checks every schema must pass regardless of @type.
 *  - @context must be the canonical schema.org URL.
 *  - @type must be present and non-empty.
 *  - Reject LocalBusiness + Organization multi-type arrays (causes
 *    duplicate-entity detection in Google rich-results).
 */
export const baseValidator: TypeValidator = (schema) => {
  const issues: ValidationIssue[] = [];

  if (schema["@context"] !== "https://schema.org") {
    issues.push({
      severity: "ERROR",
      field: "@context",
      message: `Invalid or missing @context. Expected "https://schema.org", got "${schema["@context"]}".`,
    });
  }

  if (!schema["@type"]) {
    issues.push({
      severity: "ERROR",
      field: "@type",
      message: "Missing @type definition.",
    });
  }

  const type = schema["@type"];
  if (Array.isArray(type) && type.includes("LocalBusiness") && type.includes("Organization")) {
    issues.push({
      severity: "WARNING",
      field: "@type",
      message:
        "Multi-type array mixing Organization and LocalBusiness causes duplicate entity detection in Google Rich Results.",
    });
  }

  return issues;
};
