import React from "react";
import { SEO } from "@/shared/seo/SEO";
import { SoftwareAppSchema } from "@/features/products/seo/SoftwareAppSchema";

/**
 * ExportBiz page SEO.
 *
 * ExportBiz is a software app, so it uses the SoftwareApplication
 * schema (per the SEO spec for software apps) in addition to the
 * standard meta-tag SEO wrapper. The review array is attached during
 * prerender, not at runtime.
 */
export const ExportBizSEO: React.FC = () => {
  return (
    <>
      <SEO
        title="ExportBiz - EDMS Compliance Platform | AG Solutions"
        description="ExportBiz helps Exporters convert manual export documentation into structured digital documentation, reducing repetitive data entry and accelerating document preparation."
        keywords={[
          "ExportBiz",
          "export documentation",
          "EDMS",
          "export compliance",
          "shipping documents",
          "AG Solutions",
        ]}
      />
      <SoftwareAppSchema
        name="Export Biz - Export Documentation & Compliance Software"
        applicationCategory="BusinessApplication"
        operatingSystem="Web Browser, Cloud-based"
        description="Export Biz automates manual export documentation into structured digital workflows, generating Invoices, Packing Lists, and shipping bills in seconds."
        url="https://ag-solutions.in/export-biz"
      />
    </>
  );
};

export default ExportBizSEO;
