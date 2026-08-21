import React from "react";
import JsonLd from "./JsonLd";

export interface ServiceSchemaProps {
  id?: string;
  name: string;
  description: string;
  serviceType?: string;
  url?: string;
  providerName?: string;
  areaServed?: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  id,
  name,
  description,
  serviceType,
  url = "https://ag-solutions.in/",
  providerName = "AG Solutions",
  areaServed = "IN",
}) => {
  const scriptId =
    id || `schema-service-${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType: serviceType || name,
    provider: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: providerName,
      url: "https://ag-solutions.in/",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
  };

  return <JsonLd id={scriptId} schema={schema} />;
};

export default ServiceSchema;

