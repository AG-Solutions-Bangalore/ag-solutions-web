import type { TypeValidator, ValidationIssue } from "./types";
import { isType } from "./types";

export const organizationValidator: TypeValidator = (schema) => {
  if (!isType(schema, "Organization")) return [];
  const issues: ValidationIssue[] = [];

  if (!schema.name) issues.push({ severity: "ERROR", field: "name", message: "Organization missing 'name'." });
  if (!schema.url) issues.push({ severity: "ERROR", field: "url", message: "Organization missing 'url'." });
  if (!schema.logo) issues.push({ severity: "WARNING", field: "logo", message: "Organization missing recommended 'logo'." });

  return issues;
};
