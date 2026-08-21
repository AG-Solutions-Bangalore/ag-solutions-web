import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";

export const DesktopApplicationsSEO: React.FC = () => {
  const serviceSchema = {
    "@type": "Service",
    name: "Desktop Application Development Services",
    provider: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: "AG Solutions",
      url: "https://ag-solutions.in/",
    },
    areaServed: "Bangalore",
    description:
      "Desktop Application Development Services in Bangalore. We modernize legacy software and build reliable internal tools and desktop solutions for operational efficiency.",
  };

  return (
    <>
      <SEO
        title="Desktop App Development Company In Bangalore - AG Solutions"
        description="Looking for a desktop app development company in Bangalore? AG Solutions modernizes legacy applications and builds custom business tools for desktop systems."
        keywords={[
          "desktop app development company bangalore",
          "desktop application development bangalore",
          "legacy software modernization",
          "custom business software",
          "internal business systems",
        ]}
        ogType="website"
      />
      <JsonLd id="schema-service-desktopapp-v1" schema={serviceSchema} />
    </>
  );
};

export default DesktopApplicationsSEO;
