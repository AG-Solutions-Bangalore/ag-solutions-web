import React from "react";
import { SEO } from "@/shared/seo/SEO";
import { SoftwareAppSchema } from "@/features/products/seo/SoftwareAppSchema";

/**
 * QuoteBiz page SEO.
 *
 * QuoteBiz is a software application. Reviews are attached during prerender.
 */
export const QuoteBizSEO: React.FC = () => {
  return (
    <>
      <SEO
        title="QuoteBiz – Smart Quotes. Better Business. | AG Solutions"
        description="QuoteBiz helps you create professional quotes in minutes, send to customers, track responses, and convert more leads into sales with real-time analytics."
        canonical="https://ag-solutions.in/quote-biz"
        keywords={[
          "QuoteBiz",
          "quote-biz",
          "quote management software",
          "smart quotations",
          "quotation maker",
          "invoice generator",
          "sales proposal tool",
          "quote tracking app",
          "AG Solutions",
        ]}
      />
      <SoftwareAppSchema
        name="QuoteBiz"
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        description="QuoteBiz helps you create professional quotes in minutes, send to customers, track responses, and convert more leads into sales with real-time analytics."
        url="https://ag-solutions.in/quote-biz"
      />
    </>
  );
};

export default QuoteBizSEO;
