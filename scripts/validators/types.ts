export type IssueSeverity = "ERROR" | "WARNING" | "INFO";

export interface ValidationIssue {
  severity: IssueSeverity;
  field: string;
  message: string;
}

export interface SchemaReport {
  id: string;
  type: string | string[];
  route: string;
  issues: ValidationIssue[];
  raw: Record<string, unknown>;
}

export type TypeValidator = (
  schema: Record<string, unknown>
) => ValidationIssue[];

/** True when the schema (or its type array) contains the given type. */
export function isType(schema: Record<string, unknown>, type: string): boolean {
  const t = schema["@type"];
  return t === type || (Array.isArray(t) && t.includes(type));
}
