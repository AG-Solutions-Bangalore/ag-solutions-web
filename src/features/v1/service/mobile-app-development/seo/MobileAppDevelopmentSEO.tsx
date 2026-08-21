import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";

export const MobileAppDevelopmentSEO: React.FC = () => {
  const serviceSchema = {
    "@type": "Service",
    name: "Mobile App Development Services",
    provider: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: "AG Solutions",
      url: "https://ag-solutions.in/",
    },
    areaServed: "Bangalore",
    description:
      "Mobile App Development Services in Bangalore. We build high-speed, intuitive, and responsive mobile applications for Android and iOS devices.",
  };

  return (
    <>
      <SEO
        title="Mobile App Development Company In Bangalore - AG Solutions"
        description="Looking for a mobile app development company in Bangalore? AG Solutions offers professional Android and iOS app development services built for daily use."
        keywords={[
          "mobile app development company bangalore",
          "android app development bangalore",
          "ios app development bangalore",
          "cross platform app development",
          "mobile application design",
        ]}
        ogType="website"
      />
      <JsonLd id="schema-service-mobileapp-v1" schema={serviceSchema} />
    </>
  );
};

export default MobileAppDevelopmentSEO;
