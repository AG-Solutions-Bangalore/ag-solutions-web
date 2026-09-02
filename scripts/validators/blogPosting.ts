import type { TypeValidator, ValidationIssue } from "./types";

export const blogPostingValidator: TypeValidator = (schema) => {
  if (schema["@type"] !== "BlogPosting") return [];
  const issues: ValidationIssue[] = [];

  if (!schema.headline) issues.push({ severity: "ERROR", field: "headline", message: "BlogPosting missing 'headline'." });
  if (!schema.datePublished) issues.push({ severity: "ERROR", field: "datePublished", message: "BlogPosting missing 'datePublished'." });
  if (!schema.author) issues.push({ severity: "WARNING", field: "author", message: "BlogPosting missing 'author'." });

  return issues;
};
