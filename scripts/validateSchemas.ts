/**
 * Schema.org JSON-LD Structured Data Auditor.
 *
 * Runs every per-type validator (see `validators/`) against a hardcoded
 * regression-test suite (see `validators/testData.ts`) and reports any
 * ERRORs, WARNINGs, or INFOs to the console.
 *
 * For an audit of the BUILT HTML, use `validateDistHtml.ts` instead.
 */
import type { SchemaReport, ValidationIssue } from "./validators";
import { runAllValidators } from "./validators";
import { TEST_SCHEMAS } from "./validators/testData";

function buildReport(route: string, id: string, schema: Record<string, unknown>): SchemaReport {
  return {
    id,
    route,
    type: (schema["@type"] as string | string[]) || "Unknown",
    issues: runAllValidators(schema),
    raw: schema,
  };
}

function reportDuplicateId(
  report: SchemaReport,
  isDuplicate: boolean
): SchemaReport {
  if (!isDuplicate) return report;
  return {
    ...report,
    issues: [
      ...report.issues,
      {
        severity: "ERROR",
        field: "id",
        message: `Duplicate Schema ID detected on route ${report.route}: "${report.id}"`,
      } satisfies ValidationIssue,
    ],
  };
}

function logReport(report: SchemaReport): void {
  const errors = report.issues.filter((i) => i.severity === "ERROR");
  const warnings = report.issues.filter((i) => i.severity === "WARNING");
  const statusEmoji = errors.length === 0 ? (warnings.length === 0 ? "✅" : "⚠️") : "❌";

  console.log(`${statusEmoji} [${report.route}]`);
  console.log(`   Type: ${report.type}`);
  console.log(`   ID:   ${report.id}`);

  if (report.issues.length > 0) {
    report.issues.forEach((issue) => {
      const badge =
        issue.severity === "ERROR" ? "❌ ERROR" : issue.severity === "WARNING" ? "⚠️ WARN" : "ℹ️ INFO";
      console.log(`   └─ ${badge}: [${issue.field}] ${issue.message}`);
    });
  } else {
    console.log(`   └─ Valid & Google Rich Result Compliant (0 errors, 0 warnings)`);
  }
  console.log("");
}

function main(): void {
  console.log("\n🔍 ========================================================");
  console.log("   AG SOLUTIONS — STRUCTURED DATA & RICH RESULTS AUDIT");
  console.log("========================================================\n");

  const seenIds = new Set<string>();
  let totalErrors = 0;
  let totalWarnings = 0;

  TEST_SCHEMAS.forEach((item) => {
    const key = `${item.route}:${item.id}`;
    const isDuplicate = seenIds.has(key);
    seenIds.add(key);

    const report = reportDuplicateId(buildReport(item.route, item.id, item.schema), isDuplicate);
    totalErrors += report.issues.filter((i) => i.severity === "ERROR").length;
    totalWarnings += report.issues.filter((i) => i.severity === "WARNING").length;
    logReport(report);
  });

  const uniqueRoutes = new Set(TEST_SCHEMAS.map((s) => s.route)).size;

  console.log("========================================================");
  console.log(`Summary: ${TEST_SCHEMAS.length} Schemas Audited across ${uniqueRoutes} Route Contexts.`);
  console.log(`Total Errors:   ${totalErrors}`);
  console.log(`Total Warnings: ${totalWarnings}`);
  console.log("========================================================\n");

  if (totalErrors > 0) {
    process.exit(1);
  } else {
    console.log("🎉 All Structured Data Schemas Passed Validation!\n");
  }
}

main();
