import React, { useEffect } from "react";
import { BizStockSEO } from "../seo";
import { BizStockHero } from "../components/BizStockHero";
import { BizStockFeatures } from "../components/BizStockFeatures";
import { BizStockProcess } from "../components/BizStockProcess";
import { BizStockIndustries } from "../components/BizStockIndustries";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import { BizStockCtaBanner } from "../components/BizStockCtaBanner";
import RelatedBlogSection from "@/features/blog/components/RelatedBlogSection";
import { useLeadModal } from "@/context/LeadModalContext";

export const BizStockPage: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  // Trigger modal once per session after 12 seconds
  useEffect(() => {
    const hasTriggered = sessionStorage.getItem("bizstock_popup_triggered");
    if (!hasTriggered) {
      const timer = setTimeout(() => {
        openLeadModal("BizStock Automated Inventory Consultation");
        sessionStorage.setItem("bizstock_popup_triggered", "true");
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, [openLeadModal]);

  return (
    <>
      <BizStockSEO />

      <div className="bg-background font-sans text-dark antialiased">
        {/* Hero Section */}
        <BizStockHero />

        {/* Powerful Features Section */}
        <BizStockFeatures />

        {/* 5-Step Process Section */}
        <BizStockProcess />

        {/* Built for Every Industry */}
        <BizStockIndustries />

        {/* Dynamic Testimonials */}
        <DynamicTestimonialSection route="bizstock" showSchema={false} />

        {/* Dynamic FAQs */}
        <DynamicFaqSection slug="bizstock" />

        {/* CTA Banner */}
        <BizStockCtaBanner />

        {/* Related Blog Insights */}
        <RelatedBlogSection
          eyebrow="INVENTORY & OPERATIONS INSIGHTS"
          title="Inventory, ERP &"
          titleHighlight="Business Operations"
          subtitle="Field-tested ideas on inventory automation, multi-warehouse management, purchase workflows, and operational efficiency."
          categories={["Tech"]}
        />
      </div>
    </>
  );
};

export default BizStockPage;
