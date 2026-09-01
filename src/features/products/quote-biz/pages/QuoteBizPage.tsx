import { SoftwareAppSchema } from "@/components/seo";
import { SEO } from "@/components/seo/SEO";
import React, { useEffect } from "react";
import { QuoteBizHero } from "../components/QuoteBizHero";
// import { QuoteBizFeatures } from "../components/QuoteBizFeatures";
import { useLeadModal } from "@/context/LeadModalContext";
import { QuoteBizAppsPreview } from "../components/QuoteBizAppsPreview";
import { QuoteBizCtaBanner } from "../components/QuoteBizCtaBanner";
import { QuoteBizIndustries } from "../components/QuoteBizIndustries";
import { QuoteBizProcess } from "../components/QuoteBizProcess";
import { QuoteBizTestimonials } from "../components/QuoteBizTestimonials";

export const QuoteBizPage: React.FC = () => {
  const { openLeadModal } = useLeadModal();

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
        name="QuoteBiz - Smart Quotation & Proposal Management Software"
        description="Create professional quotes in minutes, track customer engagement in real-time, and convert accepted quotes into tax invoices effortlessly."
        applicationCategory="BusinessApplication"
        operatingSystem="Web Browser, iOS, Android, Cloud-based"
        url="https://ag-solutions.in/quote-biz"
        ratingValue="5.0"
        reviewCount="12"
        reviews={[
          {
            authorName: "Ravi Sharma",
            reviewBody: "QuoteBiz has transformed our quoting process. We create quotes 3x faster and close more deals.",
            ratingValue: "5",
          },
          {
            authorName: "Sneha Patel",
            reviewBody: "The tracking feature is a game-changer. We always know when to follow up and close the deal.",
            ratingValue: "5",
          },
          {
            authorName: "Arjun Mehta",
            reviewBody: "Professional quotes, easy to use and helps us maintain a great brand image.",
            ratingValue: "5",
          },
        ]}
        features={[
          "Instant Quote Creation & Custom Templates",
          "Real-time Quote Open & View Tracking",
          "One-Click Quotation to Invoice Conversion",
          "Mobile App & Cloud Web Dashboard",
          "Multi-Industry Quote Workflows",
        ]}
      />

      <div className="bg-background font-sans text-dark antialiased">
        {/* 1. Hero Section */}
        <QuoteBizHero />

        {/* 3. 4-Step Process Section */}
        <QuoteBizProcess />

        {/* 4. Built for Every Industry */}
        <QuoteBizIndustries />

        {/* 5. Customer Testimonials */}
        <QuoteBizTestimonials />

        {/* 6. Mid-Page CTA Banner */}
        <QuoteBizCtaBanner />

        {/* 7. Mobile & Web Apps Showcase */}
        <QuoteBizAppsPreview />
      </div>
    </>
  );
};

export default QuoteBizPage;
