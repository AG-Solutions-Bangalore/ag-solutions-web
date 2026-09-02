import type { TypeValidator, ValidationIssue } from "./types";

export const faqPageValidator: TypeValidator = (schema) => {
  if (schema["@type"] !== "FAQPage") return [];
  const issues: ValidationIssue[] = [];
  const mainEntity = schema.mainEntity as
    | Array<{ "@type": string; name: string; acceptedAnswer: { text: string } }>
    | undefined;

  if (!Array.isArray(mainEntity) || mainEntity.length === 0) {
    issues.push({ severity: "ERROR", field: "mainEntity", message: "FAQPage has no FAQ items." });
  } else {
    mainEntity.forEach((faq, idx) => {
      if (!faq.name) {
        issues.push({
          severity: "ERROR",
          field: `mainEntity[${idx}].name`,
          message: `FAQ #${idx + 1} missing question name.`,
        });
      }
      if (!faq.acceptedAnswer?.text) {
        issues.push({
          severity: "ERROR",
          field: `mainEntity[${idx}].acceptedAnswer`,
          message: `FAQ #${idx + 1} missing answer text.`,
        });
      }
    });
  }

  return issues;
};
