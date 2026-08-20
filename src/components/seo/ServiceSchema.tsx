import React from "react";
import JsonLd from "./JsonLd";

interface ServiceSchemaProps {
  name: string;
  description: string;
  providerName?: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  providerName = "AG Solutions",
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: providerName,
      url: "https://ag-solutions.in/",
    },
  };

  return <JsonLd id="schema-service" schema={schema} />;
};

export default ServiceSchema;
