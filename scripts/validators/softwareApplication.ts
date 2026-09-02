import type { TypeValidator, ValidationIssue } from "./types";

export const softwareApplicationValidator: TypeValidator = (schema) => {
  if (schema["@type"] !== "SoftwareApplication") return [];
  const issues: ValidationIssue[] = [];

  if (!schema.name) issues.push({ severity: "ERROR", field: "name", message: "SoftwareApplication missing 'name'." });
  if (!schema.offers) issues.push({ severity: "WARNING", field: "offers", message: "SoftwareApplication missing 'offers'." });
  if (!schema.aggregateRating) issues.push({ severity: "INFO", field: "aggregateRating", message: "SoftwareApplication missing 'aggregateRating'." });

  return issues;
};
