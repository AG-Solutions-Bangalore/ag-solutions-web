import React, { useEffect } from "react";
import CommonServicePage from "@/features/services/components/CommonServicePage";
import { exportBizServiceData } from "@/features/services/data/serviceData";

import { FAQSchema, SoftwareAppSchema, TestimonialSchema } from "@/components/seo";


import { GlobalTradePartnerSection } from "../components/GlobalTradePartnerSection";
import { DocumentEcosystemV2 } from "../components/DocumentEcosystemV2";
import { CompareSection } from "../components/CompareSection";
import { TrustSection } from "../components/TrustSection";
import { FaqSection } from "../components/FaqSection";
import { CtaBanner } from "../components/CtaBanner";
import { useLeadModal } from "@/context/LeadModalContext";

const exportBizFaqs = [
  {
    question: "What is Export Biz?",
    answer:
      "Export Biz is AG Solutions' specialized export documentation software. It helps Indian exporters, manufacturers and global traders turn shipment details into accurate, 100% compliant paperwork, while automating reporting, returns, and scheme tracking.",
  },
  {
    question: "Who is Export Biz for?",
    answer:
      "Exporters, manufacturers, trading houses, freight coordinators, and SMEs who handle international shipments and want to eliminate repetitive data entry, minimize human errors, and accelerate dispatch times.",
  },
  {
    question: "Do I need to install complicated software?",
    answer:
      "No complicated installation or hardware requirements. Export Biz is cloud-ready and accessible from any modern web browser. Start with a free guided demo and our specialists will configure your workflow seamlessly.",
  },
  {
    question: "What happens in the free guided demo?",
    answer:
      "Our trade technology experts will walk you through live document generation from purchase order to shipping bill, demonstrate compliance validation, answer your specific trade questions, and show custom reporting modules.",
  },
];

const exportBizReviews = [
  {
    authorName: "Rajesh Singhal",
    reviewBody:
      "Export Biz reduced our shipping bill preparation time by over 70%. Zero customs filing errors since we onboarded.",
    ratingValue: 5,
    itemReviewedName: "Export Biz",
    itemType: "SoftwareApplication" as const,
  },
  {
    authorName: "Meera Nair",
    reviewBody:
      "Essential software for any Indian export house. DGFT scheme tracking and automated invoice generation work flawlessly.",
    ratingValue: 5,
    itemReviewedName: "Export Biz",
    itemType: "SoftwareApplication" as const,
  },
];

export const ExportBizNewPage: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  // 10-Second Auto-Trigger Popup (Runs once per session unless already interacted)
  useEffect(() => {
    const hasTriggered = sessionStorage.getItem("export_biz_popup_triggered");
    if (!hasTriggered) {
      const timer = setTimeout(() => {
        openLeadModal("Export Biz Software");
        sessionStorage.setItem("export_biz_popup_triggered", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [openLeadModal]);

  return (
    <>
      <SoftwareAppSchema
        name="Export Biz - Export Documentation Software"
        description="Specialized export documentation and compliance software for exporters, manufacturers, and global trade houses by AG Solutions."
        applicationCategory="BusinessApplication"
        operatingSystem="Web Browser, Cloud-based"
        url="https://ag-solutions.in/export-biz"
        ratingValue={4.9}
        reviewCount={150}
        features={[
          "3-Click Document Generation",
          "Automated Shipping Bills & Invoices",
          "DGFT & Customs Scheme Tracking",
          "Digital Document Filing & Audit Trail",
        ]}
      />
      <TestimonialSchema reviews={exportBizReviews} />
      <FAQSchema faqs={exportBizFaqs} />



      <CommonServicePage
        {...exportBizServiceData}
        onHeroCtaClick={() => openLeadModal("Export Biz Software")}
      >
        <GlobalTradePartnerSection />
        <DocumentEcosystemV2 />
        <CompareSection />
        <TrustSection />
        <FaqSection />
        <CtaBanner onStartDemo={() => openLeadModal("Export Biz Software")} />
      </CommonServicePage>
    </>
  );
};

export default ExportBizNewPage;

