import type { TypeValidator, ValidationIssue } from "./types";
import { isType } from "./types";

export const localBusinessValidator: TypeValidator = (schema) => {
  if (!isType(schema, "LocalBusiness")) return [];
  const issues: ValidationIssue[] = [];

  if (!schema.address) issues.push({ severity: "ERROR", field: "address", message: "LocalBusiness missing 'address'." });
  if (!schema.telephone) issues.push({ severity: "WARNING", field: "telephone", message: "LocalBusiness missing 'telephone'." });

  return issues;
};
