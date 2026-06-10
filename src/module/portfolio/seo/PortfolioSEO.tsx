import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";

export const PortfolioSEO: React.FC = () => {
  const portfolioSchema = {
    "@type": "CollectionPage",
    name: "AG Solutions Portfolio",
    url: "https://ag-solutions.in/portfolio",
    description:
      "Explore the AG Solutions portfolio. Discover our work in web development, mobile applications, and desktop applications.",
  };

  return (
    <>
      <SEO
        title="Portfolio - AG Solutions"
        description="Browse our portfolio of high-performance websites, custom mobile applications, and desktop software solutions built for business growth."
        keywords={[
          "AG Solutions portfolio",
          "web development projects",
          "mobile applications portfolio",
          "desktop applications showcase",
          "client projects Bangalore",
        ]}
        ogType="website"
      />
      <JsonLd schema={portfolioSchema} />
    </>
  );
};

export default PortfolioSEO;
