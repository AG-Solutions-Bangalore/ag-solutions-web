import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";

export const WebDevelopmentSEO: React.FC = () => {
  const serviceSchema = {
    "@type": "Service",
    name: "Web Development Services",
    provider: {
      "@type": "LocalBusiness",
      name: "AG Solutions",
    },
    areaServed: "Bangalore",
    description:
      "Web Design and Development Services in Bangalore. We build high-speed, dynamic, and responsive business websites, e-commerce stores, and publishing portals.",
  };

  return (
    <>
      <SEO
        title="Web Development Company In Bangalore - AG Solutions"
        description="Looking for a web development company in Bangalore? AG Solutions offers professional web design and HTML5 development for businesses, e-commerce, and blogs."
        keywords={[
          "web development company bangalore",
          "web design services bangalore",
          "ecommerce website development",
          "html5 website design",
          "publishing website development",
        ]}
        ogType="website"
      />
      <JsonLd schema={serviceSchema} />
    </>
  );
};

export default WebDevelopmentSEO;
