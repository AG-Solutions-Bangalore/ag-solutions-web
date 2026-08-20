import React, { useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { TestimonialSchema, FAQSchema } from "@/components/seo";
import { EaseMarketingHero } from "../components/EaseMarketingHero";
import { EaseMarketingFeatures } from "../components/EaseMarketingFeatures";
import { EaseMarketingPipeline } from "../components/EaseMarketingPipeline";
import { EaseMarketingGrowthPartner } from "../components/EaseMarketingGrowthPartner";
import { EaseMarketingMetricsStrip } from "../components/EaseMarketingMetricsStrip";
import { EaseMarketingTestimonials } from "../components/EaseMarketingTestimonials";
import { EaseMarketingCtaBanner } from "../components/EaseMarketingCtaBanner";
import { useLeadModal } from "@/context/LeadModalContext";

const easeMarketingReviews = [
  {
    authorName: "Ravi Sharma",
    reviewBody: "Ease Marketing has completely simplified our WhatsApp outreach. Our sales and response rate increased significantly!",
    ratingValue: 5,
    itemReviewedName: "Ease Marketing - AG Solutions",
  },
  {
    authorName: "Sneha Patel",
    reviewBody: "The follow-up and tracking system helps us never miss a lead. It's a must-have tool for any business.",
    ratingValue: 5,
    itemReviewedName: "Ease Marketing - AG Solutions",
  },
  {
    authorName: "Arjun Mehta",
    reviewBody: "Great platform, amazing support, and powerful features. Highly recommended!",
    ratingValue: 5,
    itemReviewedName: "Ease Marketing - AG Solutions",
  },
];

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
      <TestimonialSchema reviews={easeMarketingReviews} />
      <FAQSchema />

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

        {/* 6. Customer Testimonials */}
        <EaseMarketingTestimonials />

        {/* 7. CTA Banner */}
        <EaseMarketingCtaBanner />
      </div>
    </>
  );
};

export default EaseMarketingPage;
