import React, { useEffect } from "react";
import CommonServicePage from "@/features/v2/services/components/CommonServicePage";
import { exportBizServiceData } from "@/features/v2/services/data/serviceData";
import { DocumentEcosystemV2 } from "../components/DocumentEcosystemV2";
import { CompareSection } from "../components/CompareSection";
import { TrustSection } from "../components/TrustSection";
import { FaqSection } from "../components/FaqSection";
import { CtaBanner } from "../components/CtaBanner";
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
    <CommonServicePage
      {...exportBizServiceData}
      onHeroCtaClick={() => openLeadModal("Export Biz Software")}
    >
      <DocumentEcosystemV2 />
      <CompareSection />
      <TrustSection />
      <FaqSection />
      <CtaBanner onStartDemo={() => openLeadModal("Export Biz Software")} />
    </CommonServicePage>
  );
};

export default ExportBizNewPage;

