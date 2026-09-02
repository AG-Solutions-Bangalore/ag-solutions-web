import { QuoteBizSEO } from "../seo";
import React, { useEffect } from "react";
import { QuoteBizHero } from "../components/QuoteBizHero";
// import { QuoteBizFeatures } from "../components/QuoteBizFeatures";
import { useLeadModal } from "@/context/LeadModalContext";
import { QuoteBizAppsPreview } from "../components/QuoteBizAppsPreview";
import { QuoteBizCtaBanner } from "../components/QuoteBizCtaBanner";
import { QuoteBizIndustries } from "../components/QuoteBizIndustries";
import { QuoteBizProcess } from "../components/QuoteBizProcess";
import { QuoteBizTestimonials } from "../components/QuoteBizTestimonials";
import { useTestimonials } from "@/features/testimonials/hooks/useTestimonials";

const QUOTEBIZ_MAX_REVIEWS = 5;

export const QuoteBizPage: React.FC = () => {
  const { openLeadModal } = useLeadModal();
  const { data: testimonialData } = useTestimonials("quote-biz");

  // Mirror the EaseMarketing testimonial pattern so the UI only ever shows
  // the same set of testimonials that get injected into the prerendered
  // Review schemas (no inflated review count in Google's rich-results test).
  const rawReviews = testimonialData?.data || [];
  const filteredReviews = Array.isArray(rawReviews)
    ? rawReviews.filter(
        (t) => t.testimonial_description && t.testimonial_client_name
      )
    : [];

  // Cap to 5 so the UI, the prerendered standalone Review schemas, and the
  // count surfaced to the rich-results test all stay in sync.
  const limitedReviews = filteredReviews.slice(0, QUOTEBIZ_MAX_REVIEWS);

  // Trigger lead modal once per session after 12 seconds
  useEffect(() => {
    const hasTriggered = sessionStorage.getItem("quotebiz_popup_triggered");
    if (!hasTriggered) {
      const timer = setTimeout(() => {
        openLeadModal("QuoteBiz Smart Quotation Consultation");
        sessionStorage.setItem("quotebiz_popup_triggered", "true");
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, [openLeadModal]);

  return (
    <>
      <QuoteBizSEO />

      <div className="bg-background font-sans text-dark antialiased">
        {/* 1. Hero Section */}
        <QuoteBizHero />

        {/* 3. 4-Step Process Section */}
        <QuoteBizProcess />

        {/* 4. Built for Every Industry */}
        <QuoteBizIndustries />

        {/* 5. Customer Testimonials */}
        <QuoteBizTestimonials testimonials={limitedReviews} />

        {/* 6. Mid-Page CTA Banner */}
        <QuoteBizCtaBanner />

        {/* 7. Mobile & Web Apps Showcase */}
        <QuoteBizAppsPreview />
      </div>
    </>
  );
};

export default QuoteBizPage;