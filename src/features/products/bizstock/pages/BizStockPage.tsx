import React, { useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { SoftwareAppSchema } from "@/components/seo";
import { BizStockHero } from "../components/BizStockHero";
import { BizStockFeatures } from "../components/BizStockFeatures";
import { BizStockProcess } from "../components/BizStockProcess";
import { BizStockIndustries } from "../components/BizStockIndustries";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import { BizStockCtaBanner } from "../components/BizStockCtaBanner";
import RelatedBlogSection from "@/features/blog/components/RelatedBlogSection";
import { useLeadModal } from "@/context/LeadModalContext";

import { useTestimonials } from "@/features/testimonials/hooks/useTestimonials";

export const BizStockPage: React.FC = () => {
  const { openLeadModal } = useLeadModal();
  const { data: testimonialData } = useTestimonials("bizstock");

  const rawReviews = testimonialData?.data || [];
  const reviews = Array.isArray(rawReviews)
    ? rawReviews
        .filter((t) => t.testimonial_description && t.testimonial_client_name)
        .map((t) => ({
          authorName: t.testimonial_client_name,
          reviewBody: t.testimonial_description,
          ratingValue: t.testimonial_rating ?? t.rating ?? t.rating_value ?? "5",
        }))
    : [];

  const finalReviewCount = reviews.length > 0 ? String(reviews.length) : "10";

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
      <SEO
        title="BizStock – Business Management Software | AG Solutions"
        description="BizStock helps businesses track inventory, manage sales & purchases, and gain real-time visibility to make smarter decisions and grow faster."
        keywords={[
          "BizStock",
          "inventory management software",
          "smart stock management",
          "warehouse management system",
          "purchase management",
          "sales management",
          "low stock alerts",
          "AG Solutions",
        ]}
      />
      <SoftwareAppSchema
        name="BizStock - Inventory & Stock Management Software"
        description="Smart inventory management and warehouse tracking software by AG Solutions to track stock, streamline orders, and maximize business growth."
        applicationCategory="BusinessApplication"
        operatingSystem="Web Browser, Cloud-based"
        url="https://ag-solutions.in/bizstock"
        ratingValue="5.0"
        reviewCount={finalReviewCount}
        reviews={reviews}
        features={[
          "Real-time Inventory Tracking",
          "Multi-Warehouse Management",
          "Automated Low-Stock Alerts",
          "Purchase & Sales Order Workflows",
        ]}
      />

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
