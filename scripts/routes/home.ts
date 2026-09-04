import type { RouteSEO } from "../lib/htmlBuilder";
import { GLOBAL_ORGANIZATION_SCHEMA, GLOBAL_WEBSITE_SCHEMA } from "./_helpers";

export const homeRoute: RouteSEO = {
  title: "Web Development & Mobile App Development Company|AG Solutions",
  description: "AG Solutions is a leading software development company providing web development, mobile applications, digital marketing, and export compliance software.",
  keywords: "web development company, mobile app development, export biz, ease marketing, ag solutions",
  schemas: [GLOBAL_ORGANIZATION_SCHEMA, GLOBAL_WEBSITE_SCHEMA],
};
