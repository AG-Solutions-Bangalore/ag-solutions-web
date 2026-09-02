import type { RouteSEO } from "../lib/htmlBuilder";
import {
  buildSoftwareAppSchema,
  GLOBAL_ORGANIZATION_SCHEMA,
} from "./_helpers";

const EXPORT_BIZ_KEYWORDS =
  "export documentation software, export biz, shipping bills, export invoice software";

/** /export-biz — primary canonical path. */
export const exportBizRoute: RouteSEO = {
  title: "Export Biz - Export Documentation & Compliance Software | AG Solutions",
  description:
    "Export Biz automates manual export documentation into structured digital workflows, generating Invoices, Packing Lists, and shipping bills in seconds.",
  keywords: EXPORT_BIZ_KEYWORDS,
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    buildSoftwareAppSchema({
      name: "Export Biz - Export Documentation & Compliance Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser, Cloud-based",
      description:
        "Export Biz automates manual export documentation into structured digital workflows, generating Invoices, Packing Lists, and shipping bills in seconds.",
      url: "https://ag-solutions.in/export-biz",
    }),
  ],
};

/** /export-biz-new — legacy alias that points canonical to /export-biz. */
export const exportBizNewRoute: RouteSEO = {
  ...exportBizRoute,
  canonical: "https://ag-solutions.in/export-biz",
};
