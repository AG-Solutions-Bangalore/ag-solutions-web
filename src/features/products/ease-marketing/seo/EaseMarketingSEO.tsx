import React from "react";
import { SEO } from "@/shared/seo/SEO";
import { SoftwareAppSchema } from "@/features/products/seo/SoftwareAppSchema";

/**
 * Ease Marketing page SEO.
 *
 * Ease Marketing is a software application. Reviews are attached during prerender.
 */
export const EaseMarketingSEO: React.FC = () => {
  return (
    <>
      <SEO
        title="Ease Marketing - Market Smarter. Connect Better. | AG Solutions"
        description="Ease Marketing helps businesses manage, automate, and track high-converting WhatsApp marketing campaigns with bulk messaging, templates, and real-time analytics."
        keywords={[
          "Ease Marketing",
          "WhatsApp marketing software",
          "WhatsApp bulk messaging",
          "WhatsApp automation tools",
          "campaign management software",
          "WhatsApp CRM",
          "AG Solutions",
        ]}
      />
      <SoftwareAppSchema
        name="Ease Marketing"
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        description="Ease Marketing helps businesses manage, automate, and track high-converting WhatsApp marketing campaigns with bulk messaging, templates, and real-time analytics."
        url="https://ag-solutions.in/ease-marketing"
      />
    </>
  );
};

export default EaseMarketingSEO;
