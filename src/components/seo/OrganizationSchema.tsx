import React from "react";
import JsonLd from "./JsonLd";

export const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://ag-solutions.in/#organization",
    name: "AG Solutions",
    url: "https://ag-solutions.in/",
    logo: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.png",
    image: "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.png",
    description:
      "AG Solutions builds web applications, mobile apps, desktop software, digital marketing systems, and export documentation products.",
    telephone: "+91-8867171060",
    email: "info@ag-solutions.in",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jayanagara 9th Block",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560069",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/ag-solutions-104223427",
      "https://www.facebook.com/profile.php?id=61591878191618",
      "https://www.instagram.com/ag_solutions_official/",
    ],
  };

  return <JsonLd id="schema-organization" schema={schema} />;
};

export default OrganizationSchema;
