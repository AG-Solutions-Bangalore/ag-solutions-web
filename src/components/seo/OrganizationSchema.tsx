import React from "react";
import JsonLd from "./JsonLd";

export const OrganizationSchema: React.FC = () => {
  const schema = {
    "@type": "Organization",
    name: "AG Solutions",
    url: "https://ag-solutions.in",
    logo: "https://ag-solutions.in/favicon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@ag-solutions.in",
    },
  };

  return <JsonLd schema={schema} />;
};

export default OrganizationSchema;
