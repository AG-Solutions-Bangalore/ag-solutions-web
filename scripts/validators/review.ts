import type { TypeValidator, ValidationIssue } from "./types";

export const reviewValidator: TypeValidator = (schema) => {
  if (schema["@type"] !== "Review") return [];
  const issues: ValidationIssue[] = [];

  if (!schema.author) issues.push({ severity: "ERROR", field: "author", message: "Review missing 'author'." });
  if (!schema.reviewRating) issues.push({ severity: "ERROR", field: "reviewRating", message: "Review missing 'reviewRating'." });
  if (!schema.itemReviewed) issues.push({ severity: "ERROR", field: "itemReviewed", message: "Review missing 'itemReviewed'." });

  return issues;
};
