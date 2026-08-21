import React, { useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { TestimonialSchema, FAQSchema, SoftwareAppSchema } from "@/components/seo";
import { BizStockFaq, bizStockFaqs } from "../components/BizStockFaq";
import { BizStockHero } from "../components/BizStockHero";
import { BizStockFeatures } from "../components/BizStockFeatures";
import { BizStockProcess } from "../components/BizStockProcess";
import { BizStockIndustries } from "../components/BizStockIndustries";
import { BizStockTestimonials } from "../components/BizStockTestimonials";
import { BizStockCtaBanner } from "../components/BizStockCtaBanner";
import { useLeadModal } from "@/context/LeadModalContext";


const bizStockReviews = [
  {
    authorName: "Ravi Sharma",
    reviewBody: "BizStock has simplified our inventory management. We save time, reduce errors, and our growth has doubled!",
    ratingValue: 5,
    itemReviewedName: "BizStock - AG Solutions",
    itemType: "SoftwareApplication" as const,
  },
  {
    authorName: "Sneha Patel",
    reviewBody: "The reports and analytics help us make better decisions. Highly recommended for any business.",
    ratingValue: 5,
    itemReviewedName: "BizStock - AG Solutions",
    itemType: "SoftwareApplication" as const,
  },
  {
    authorName: "Arjun Mehta",
    reviewBody: "Managing multiple warehouses was never this easy. BizStock is a game-changer!",
    ratingValue: 5,
    itemReviewedName: "BizStock - AG Solutions",
    itemType: "SoftwareApplication" as const,
  },
];

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
      <SEO
        title="BizStock - Manage Stock. Maximize Growth. | AG Solutions"
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
        ratingValue={4.9}
        reviewCount={98}
        features={[
          "Real-time Inventory Tracking",
          "Multi-Warehouse Management",
          "Automated Low-Stock Alerts",
          "Purchase & Sales Order Workflows",
        ]}
      />
      <TestimonialSchema reviews={bizStockReviews} />
      <FAQSchema faqs={bizStockFaqs} />

      <div className="bg-background font-sans text-dark antialiased">
        {/* Hero Section */}
        <BizStockHero />

        {/* Powerful Features Section */}
        <BizStockFeatures />

        {/* 5-Step Process Section */}
        <BizStockProcess />

        {/* Built for Every Industry */}
        <BizStockIndustries />

        {/* Testimonials */}
        <BizStockTestimonials />

        {/* FAQs */}
        <BizStockFaq />

        {/* CTA Banner */}
        <BizStockCtaBanner />
      </div>
    </>
  );
};


export default BizStockPage;
