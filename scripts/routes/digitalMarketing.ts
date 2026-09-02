import type { RouteSEO } from "../lib/htmlBuilder";
import { GLOBAL_ORGANIZATION_SCHEMA, buildServiceSchema } from "./_helpers";

/** /digital-marketing — Digital Marketing service page. */
export const digitalMarketingRoute: RouteSEO = {
  title: "Digital Marketing Services | SEO, Ads & Social Media | AG Solutions",
  description: "Drive high-converting leads with data-driven SEO, Google Ads, Meta Ads, and ROI-focused digital marketing campaigns.",
  keywords: "digital marketing services, seo agency, google ads agency, social media marketing",
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    buildServiceSchema({
      name: "Digital Marketing Services",
      description: "Data-driven digital marketing solutions by AG Solutions.",
      serviceType: "Digital Marketing",
      url: "https://ag-solutions.in/digital-marketing",
    }),
  ],
};
