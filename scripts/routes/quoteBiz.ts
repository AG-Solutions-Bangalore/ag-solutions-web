import type { RouteSEO } from "../lib/htmlBuilder";
import {
  buildSoftwareAppSchema,
  GLOBAL_ORGANIZATION_SCHEMA,
} from "./_helpers";

const QUOTE_BIZ_DESCRIPTION =
  "QuoteBiz helps you create professional quotes in minutes, send to customers, track responses, and convert more leads into sales with real-time analytics.";

/** /quote-biz — QuoteBiz product page. */
export const quoteBizRoute: RouteSEO = {
  title: "QuoteBiz – Smart Quotes. Better Business. | AG Solutions",
  description: QUOTE_BIZ_DESCRIPTION,
  keywords:
    "QuoteBiz, quote-biz, quote management software, smart quotations, quotation maker, invoice generator, sales proposal tool, quote tracking app, AG Solutions",
  // The React page intentionally caps reviews to 5 — keep SSG in sync.
  maxReviews: 5,
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    buildSoftwareAppSchema({
      name: "QuoteBiz",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: QUOTE_BIZ_DESCRIPTION,
      url: "https://ag-solutions.in/quote-biz",
    }),
  ],
};
