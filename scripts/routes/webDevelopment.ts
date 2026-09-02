import type { RouteSEO } from "../lib/htmlBuilder";
import { GLOBAL_ORGANIZATION_SCHEMA, buildServiceSchema } from "./_helpers";

/** /web-development — Web & Website Development service page. */
export const webDevelopmentRoute: RouteSEO = {
  title: "Web & Website Development Company | AG Solutions",
  description: "High-performance, WCAG compliant, and SEO-optimized website and web application development using React, Next.js, and modern tech.",
  keywords: "web development services, custom website development, react developer, ag solutions",
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    buildServiceSchema({
      name: "Web & Website Development Services",
      description: "Custom responsive, fast and SEO-friendly websites that deliver exceptional user experiences.",
      serviceType: "Web Development",
      url: "https://ag-solutions.in/web-development",
    }),
  ],
};
