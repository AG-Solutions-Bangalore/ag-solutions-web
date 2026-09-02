import type { TypeValidator, ValidationIssue } from "./types";

export const serviceValidator: TypeValidator = (schema) => {
  if (schema["@type"] !== "Service") return [];
  const issues: ValidationIssue[] = [];

  if (!schema.name) issues.push({ severity: "ERROR", field: "name", message: "Service missing 'name'." });
  if (!schema.provider) issues.push({ severity: "WARNING", field: "provider", message: "Service missing 'provider'." });

  return issues;
};
