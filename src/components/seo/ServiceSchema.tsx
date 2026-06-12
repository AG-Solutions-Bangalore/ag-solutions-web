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
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: providerName,
      url: "https://ag-solutions.in",
    },
  };

  return <JsonLd schema={schema} />;
};

export default ServiceSchema;
