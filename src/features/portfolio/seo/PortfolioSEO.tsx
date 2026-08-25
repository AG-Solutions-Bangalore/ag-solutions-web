import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";

export const PortfolioSEO: React.FC = () => {
  const portfolioSchema = {
    "@type": "CollectionPage",
    "@id": "https://ag-solutions.in/portfolio#collectionpage",
    name: "AG Solutions | Web & Software Development Portfolio.",
    url: "https://ag-solutions.in/portfolio",
    description:
      "Explore the AG Solutions portfolio featuring web development, mobile apps, and software projects built to deliver innovative digital solutions for businesses.",
    author: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: "AG Solutions",
      url: "https://ag-solutions.in/",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: "AG Solutions",
      url: "https://ag-solutions.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://ag-solutions.in/images/logo.webp",
      },
    },
  };

  return (
    <>
      <SEO
        title="AG Solutions | Web & Software Development Portfolio."
        description="Explore the AG Solutions portfolio featuring web development, mobile apps, and software projects built to deliver innovative digital solutions for businesses."
        keywords={[
          "AG Solutions portfolio",
          "web development projects",
          "mobile applications portfolio",
          "desktop applications showcase",
          "client projects Bangalore",
        ]}
        ogType="website"
      />
      <JsonLd id="schema-collectionpage" schema={portfolioSchema} />
    </>
  );
};

export default PortfolioSEO;
