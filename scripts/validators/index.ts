/**
 * Re-exports of all per-type schema validators. `runAllValidators` runs
 * every validator against a schema and returns the combined issue list.
 */
import type { TypeValidator, ValidationIssue } from "./types";
import { baseValidator } from "./base";
import { organizationValidator } from "./organization";
import { localBusinessValidator } from "./localBusiness";
import { softwareApplicationValidator } from "./softwareApplication";
import { serviceValidator } from "./service";
import { faqPageValidator } from "./faqPage";
import { reviewValidator } from "./review";
import { blogPostingValidator } from "./blogPosting";

export type { TypeValidator, ValidationIssue };
export * from "./types";

/** Ordered list of every per-type validator. */
const ALL_VALIDATORS: TypeValidator[] = [
  baseValidator,
  organizationValidator,
  localBusinessValidator,
  softwareApplicationValidator,
  serviceValidator,
  faqPageValidator,
  reviewValidator,
  blogPostingValidator,
];

/** Run every validator and concatenate the issues. */
export function runAllValidators(schema: Record<string, unknown>): ValidationIssue[] {
  return ALL_VALIDATORS.flatMap((v) => v(schema));
}
