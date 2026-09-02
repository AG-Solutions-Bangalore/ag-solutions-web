import type { RouteSEO } from "../lib/htmlBuilder";
import { GLOBAL_ORGANIZATION_SCHEMA } from "./_helpers";

export const contactsRoute: RouteSEO = {
  title: "Contact AG Solutions | Business & IT Solutions",
  description: "Contact AG Solutions for project enquiries, software demos, and technical consultations. Reach us via phone, email, or WhatsApp.",
  keywords: "contact ag solutions, hire web developers, software quotation",
  schemas: [
    GLOBAL_ORGANIZATION_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact AG Solutions",
      url: "https://ag-solutions.in/contacts",
    },
  ],
};
