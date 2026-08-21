import React, { useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { FAQSchema, SoftwareAppSchema, TestimonialSchema } from "@/components/seo";


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
    itemType: "SoftwareApplication" as const,
  },
  {
    authorName: "Sneha Patel",
    reviewBody: "The follow-up and tracking system helps us never miss a lead. It's a must-have tool for any business.",
    ratingValue: 5,
    itemReviewedName: "Ease Marketing - AG Solutions",
    itemType: "SoftwareApplication" as const,
  },
  {
    authorName: "Arjun Mehta",
    reviewBody: "Great platform, amazing support, and powerful features. Highly recommended!",
    ratingValue: 5,
    itemReviewedName: "Ease Marketing - AG Solutions",
    itemType: "SoftwareApplication" as const,
  },
];

const easeMarketingFaqs = [
  {
    question: "What is Ease Marketing?",
    answer:
      "Ease Marketing is an automated WhatsApp marketing and bulk communication CRM software built by AG Solutions to help businesses run high-converting campaigns.",
  },
  {
    question: "Does Ease Marketing support WhatsApp Cloud API and template approvals?",
    answer:
      "Yes, Ease Marketing connects seamlessly with official WhatsApp Business Cloud API with pre-verified rich templates, CTA buttons, media attachments, and real-time delivery tracking.",
  },
  {
    question: "Can I automate drip campaigns and follow-ups with Ease Marketing?",
    answer:
      "Yes, you can configure multi-step automated drip messages, trigger customized auto-replies based on customer keyword intents, and schedule messages across time zones.",
  },
  {
    question: "How does Ease Marketing ensure sender number safety and protection?",
    answer:
      "Because Ease Marketing utilizes official WhatsApp Business APIs with opt-in contact management and intelligent message throttling, your business number remains fully compliant and protected.",
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
      <SoftwareAppSchema
        name="Ease Marketing - WhatsApp Marketing & Automation Software"
        description="High-converting WhatsApp marketing, automated messaging, and campaign tracking software by AG Solutions."
        applicationCategory="MarketingApplication"
        operatingSystem="Web Browser, Cloud-based"
        url="https://ag-solutions.in/ease-marketing"
        ratingValue={4.9}
        reviewCount={112}
        features={[
          "Bulk WhatsApp Campaigns",
          "Smart Template Approval",
          "Automated Drip Follow-ups",
          "Real-time Analytics & Click Tracking",
        ]}
      />
      <TestimonialSchema reviews={easeMarketingReviews} />
      <FAQSchema faqs={easeMarketingFaqs} />





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
