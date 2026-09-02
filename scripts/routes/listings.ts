import type { RouteSEO } from "../lib/htmlBuilder";
import { GLOBAL_ORGANIZATION_SCHEMA } from "./_helpers";

/** /services — index of all AG Solutions service offerings. */
export const servicesRoute: RouteSEO = {
  title: "Services | Web, Mobile & Digital Marketing Solutions | AG Solutions",
  description: "Explore our software services: Full-Stack Web Development, iOS & Android Mobile Apps, and Performance Digital Marketing.",
  keywords: "it services, web development, mobile apps, digital marketing, software development",
  schemas: [GLOBAL_ORGANIZATION_SCHEMA],
};

/** /products — index of all AG Solutions products. */
export const productsRoute: RouteSEO = {
  title: "Products & Software Solutions | Export Biz, BizStock & Ease Marketing",
  description: "Discover innovative enterprise software by AG Solutions: Export Biz for documentation, BizStock for ERP inventory, and Ease Marketing for WhatsApp CRM.",
  keywords: "ag solutions products, export biz, bizstock, ease marketing, business software",
  schemas: [GLOBAL_ORGANIZATION_SCHEMA],
};

/** /blogs — blog list. */
export const blogsRoute: RouteSEO = {
  title: "Blogs & Tech Insights | AG Solutions",
  description: "Read the latest articles on web architecture, software engineering, export compliance, and digital marketing trends.",
  keywords: "technology blogs, web development trends, software architecture insights",
  schemas: [GLOBAL_ORGANIZATION_SCHEMA],
};
