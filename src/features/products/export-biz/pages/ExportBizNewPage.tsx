import React, { useEffect } from "react";
import CommonServicePage from "@/features/services/components/CommonServicePage";
import { exportBizServiceData } from "@/features/services/data/serviceData";
import { SoftwareAppSchema } from "@/components/seo";
import { GlobalTradePartnerSection } from "../components/GlobalTradePartnerSection";
import { DocumentEcosystemV2 } from "../components/DocumentEcosystemV2";
import { CompareSection } from "../components/CompareSection";
import { TrustSection } from "../components/TrustSection";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import { CtaBanner } from "../components/CtaBanner";
import RelatedBlogSection from "@/features/blog/components/RelatedBlogSection";
import { useLeadModal } from "@/context/LeadModalContext";

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
        features={[
          "3-Click Document Generation",
          "Automated Shipping Bills & Invoices",
          "DGFT & Customs Scheme Tracking",
          "Digital Document Filing & Audit Trail",
        ]}
      />

      <CommonServicePage
        {...exportBizServiceData}
        onHeroCtaClick={() => openLeadModal("Export Biz Software")}
      >
        <GlobalTradePartnerSection />
        <DocumentEcosystemV2 />
        <CompareSection />
        <TrustSection />
        <DynamicTestimonialSection route="export-biz" />
        <DynamicFaqSection slug="export-biz" />
        <CtaBanner onStartDemo={() => openLeadModal("Export Biz Software")} />
        <RelatedBlogSection
          eyebrow="EXPORT & TRADE INSIGHTS"
          title="Export, Trade &"
          titleHighlight="Compliance Insights"
          subtitle="Practical guides on export documentation, DGFT compliance, shipping workflows, and global trade best practices."
          categories={["Tech"]}
        />
      </CommonServicePage>
    </>
  );
};

export default ExportBizNewPage;

