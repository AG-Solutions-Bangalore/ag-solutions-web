import type { RouteSEO } from "../lib/htmlBuilder";
import { GLOBAL_ORGANIZATION_SCHEMA } from "./_helpers";

export const portfolioRoute: RouteSEO = {
  title: "AG Solutions | Web & Software Development Portfolio.",
  description:
    "Explore the AG Solutions portfolio featuring web development, mobile apps, and software projects built to deliver innovative digital solutions for businesses.",
  keywords: "ag solutions portfolio, web design case studies, app development portfolio",
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://ag-solutions.in/portfolio#collectionpage",
      name: "AG Solutions | Web & Software Development Portfolio.",
      url: "https://ag-solutions.in/portfolio",
      description:
        "Explore the AG Solutions portfolio featuring web development, mobile apps, and software projects built to deliver innovative digital solutions for businesses.",
      author: {
        "@type": "Organization",
        "@id": "https://ag-solutions.in/#organization",
        name: "AG Solutions",
        url: "https://ag-solutions.in/",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://ag-solutions.in/#organization",
        name: "AG Solutions",
        url: "https://ag-solutions.in/",
        logo: {
          "@type": "ImageObject",
          url: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.webp",
        },
      },
    },
  ],
};
