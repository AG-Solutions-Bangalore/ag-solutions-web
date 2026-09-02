import type { RouteSEO } from "../lib/htmlBuilder";
import {
  buildSoftwareAppSchema,
  GLOBAL_ORGANIZATION_SCHEMA,
} from "./_helpers";

const EASE_DESCRIPTION =
  "Automate WhatsApp campaigns, broadcast messages, CRM customer workflows, and multi-channel lead tracking with Ease Marketing.";

const EASE_KEYWORDS =
  "whatsapp marketing software, ease marketing, bulk whatsapp tool, marketing automation";

/** /ease-marketing — primary canonical path. */
export const easeMarketingRoute: RouteSEO = {
  title: "Ease Marketing - WhatsApp Marketing & Automation Software | AG Solutions",
  description: EASE_DESCRIPTION,
  keywords: EASE_KEYWORDS,
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    buildSoftwareAppSchema({
      name: "Ease Marketing",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: EASE_DESCRIPTION,
      url: "https://ag-solutions.in/ease-marketing",
    }),
  ],
};

/** /EASE-Marketing — legacy alias that points canonical to /ease-marketing. */
export const easeMarketingAliasRoute: RouteSEO = {
  ...easeMarketingRoute,
  canonical: "https://ag-solutions.in/ease-marketing",
};
