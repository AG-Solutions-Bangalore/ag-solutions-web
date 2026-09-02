import React, { useEffect } from "react";
import { EaseMarketingSEO } from "../seo";
import { EaseMarketingHero } from "../components/EaseMarketingHero";
import { EaseMarketingFeatures } from "../components/EaseMarketingFeatures";
import { EaseMarketingPipeline } from "../components/EaseMarketingPipeline";
import { EaseMarketingGrowthPartner } from "../components/EaseMarketingGrowthPartner";
import { EaseMarketingMetricsStrip } from "../components/EaseMarketingMetricsStrip";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import { EaseMarketingCtaBanner } from "../components/EaseMarketingCtaBanner";
import RelatedBlogSection from "@/features/blog/components/RelatedBlogSection";
import { useLeadModal } from "@/context/LeadModalContext";

export const EaseMarketingPage: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  // Trigger modal once per session after 12 seconds
  useEffect(() => {
    const hasTriggered = sessionStorage.getItem("ease_marketing_popup_triggered");
    if (!hasTriggered) {
      const timer = setTimeout(() => {
        openLeadModal("Ease Marketing Consultation");
        sessionStorage.setItem("ease_marketing_popup_triggered", "true");
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, [openLeadModal]);

  return (
    <>
      <EaseMarketingSEO />

      <div className="bg-background font-sans text-dark antialiased">
        {/* 1. Hero Section */}
        <EaseMarketingHero />

        {/* 2. Powerful Features */}
        <EaseMarketingFeatures />

        {/* 3. Campaign Status Tracker */}
        <EaseMarketingPipeline />

        {/* 4. Growth Partner & Phone Mockup */}
        <EaseMarketingGrowthPartner />

        {/* 5. Dark Metrics Strip */}
        <EaseMarketingMetricsStrip />

        {/* 6. Dynamic Customer Testimonials */}
        <DynamicTestimonialSection route="ease-marketing" showSchema={false} />

        {/* 7. Dynamic FAQs */}
        <DynamicFaqSection slug="ease-marketing" />

        {/* 8. CTA Banner */}
        <EaseMarketingCtaBanner />

        {/* 9. Related Blog Insights */}
        <RelatedBlogSection
          eyebrow="MARKETING & AUTOMATION INSIGHTS"
          title="Marketing, Campaigns &"
          titleHighlight="WhatsApp Automation"
          subtitle="Tactics and case studies on WhatsApp marketing, campaign automation, conversion tracking, and customer engagement."
          categories={["Tech"]}
        />
      </div>
    </>
  );
};

export default EaseMarketingPage;
