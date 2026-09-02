import React from "react";
import { SEO } from "@/shared/seo/SEO";
import { SoftwareAppSchema } from "@/features/products/seo/SoftwareAppSchema";

/**
 * BizStock page SEO.
 *
 * BizStock is a software application. Reviews are attached during prerender.
 */
export const BizStockSEO: React.FC = () => {
  return (
    <>
      <SEO
        title="BizStock – Business Management Software | AG Solutions"
        description="BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster."
        keywords={[
          "BizStock",
          "inventory management software",
          "smart stock management",
          "warehouse management system",
          "purchase management",
          "sales management",
          "low stock alerts",
          "AG Solutions",
        ]}
      />
      <SoftwareAppSchema
        name="BizStock"
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        description="BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster."
        url="https://ag-solutions.in/bizstock"
      />
    </>
  );
};

export default BizStockSEO;
