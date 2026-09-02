/**
 * Type definitions for the dist-HTML audit.
 *
 * The audit reads each prerendered `dist/<route>/index.html` and verifies
 * that the JSON-LD schemas, meta tags, and review counts are correct.
 */

export interface SchemaScript {
  id?: string;
  dataRh?: string;
  json: Record<string, any>;
  rawHtml: string;
}

/** Per-route audit expectations. One file per route in `pages/`. */
export interface TestPage {
  /** Friendly name shown in the CLI output. */
  name: string;
  /** Absolute path to the HTML file under `dist/`. */
  path: string;
  /** Expected total number of Review entities (0 if the route has none). */
  expectedReviews: number;
  /**
   * Pages where reviews live inside the SoftwareApplication rather than
   * the Organization. Used to skip the "AggregateRating on non-product
   * pages" check.
   */
  productPage?: boolean;
  /** Expected number of BlogPosting entities (only for blog detail pages). */
  expectedBlogPosting?: number;
  /** Expected number of BreadcrumbList entities (only for blog detail pages). */
  expectedBreadcrumb?: number;
}

export interface AuditReport {
  page: TestPage;
  schemas: SchemaScript[];
  html: string;
  typeCounts: Record<string, number>;
  totalReviews: number;
  reviewAuthors: string[];
  hasAggregateRating: boolean;
  duplicateIds: number;
  hasErrors: boolean;
}
