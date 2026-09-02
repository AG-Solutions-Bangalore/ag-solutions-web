import type { RouteSEO } from "../lib/htmlBuilder";
import {
  buildSoftwareAppSchema,
  GLOBAL_ORGANIZATION_SCHEMA,
} from "./_helpers";

const BIZSTOCK_KEYWORDS =
  "BizStock, inventory management software, smart stock management, warehouse management system, purchase management, sales management, low stock alerts, AG Solutions";

const BIZSTOCK_DESCRIPTION =
  "BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster.";

/** /bizstock — primary canonical path. */
export const bizstockRoute: RouteSEO = {
  title: "BizStock – Business Management Software | AG Solutions",
  description: BIZSTOCK_DESCRIPTION,
  keywords: BIZSTOCK_KEYWORDS,
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    buildSoftwareAppSchema({
      name: "BizStock",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: BIZSTOCK_DESCRIPTION,
      url: "https://ag-solutions.in/bizstock",
    }),
  ],
};

/** /biz-stock — legacy alias that points canonical to /bizstock. */
export const bizstockAliasRoute: RouteSEO = {
  ...bizstockRoute,
  canonical: "https://ag-solutions.in/bizstock",
};
