import React, { useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { SoftwareAppSchema } from "@/components/seo";
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
        name="Ease Marketing - WhatsApp Marketing & Automation Software"
        description="High-converting WhatsApp marketing, automated messaging, and campaign tracking software by AG Solutions."
        applicationCategory="MarketingApplication"
        operatingSystem="Web Browser, Cloud-based"
        url="https://ag-solutions.in/ease-marketing"
        features={[
          "Bulk WhatsApp Campaigns",
          "Smart Template Approval",
          "Automated Drip Follow-ups",
          "Real-time Analytics & Click Tracking",
        ]}
      />

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
        <DynamicTestimonialSection route="ease-marketing" />

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
