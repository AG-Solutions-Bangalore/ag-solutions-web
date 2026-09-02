import type { RouteSEO } from "../lib/htmlBuilder";
import { GLOBAL_ORGANIZATION_SCHEMA, buildServiceSchema } from "./_helpers";

/** /mobile-app-development — iOS & Android service page. */
export const mobileAppRoute: RouteSEO = {
  title: "Mobile App Development | iOS & Android – AG Solutions",
  description: "Custom iOS and Android mobile app development with high performance, seamless UX, and offline-first cloud sync.",
  keywords: "mobile app development, ios app, android app development company",
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    buildServiceSchema({
      name: "Mobile App Development Services",
      description: "iOS and Android mobile app development by AG Solutions.",
      serviceType: "Mobile App Development",
      url: "https://ag-solutions.in/mobile-app-development",
    }),
  ],
};
