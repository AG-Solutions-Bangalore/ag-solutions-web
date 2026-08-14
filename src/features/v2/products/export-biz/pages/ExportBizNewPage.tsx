import React, { useEffect, useState } from "react";
import CommonServicePage from "@/features/v2/services/components/CommonServicePage";
import { exportBizServiceData } from "@/features/v2/services/data/serviceData";
import { DocumentEcosystemV2 } from "../components/DocumentEcosystemV2";
import { CompareSection } from "../components/CompareSection";
import { TrustSection } from "../components/TrustSection";
import { FaqSection } from "../components/FaqSection";
import { CtaBanner } from "../components/CtaBanner";
import { ExportBizDemoModal } from "@/features/v1/products/components/ExportBizDemoModal";

export const ExportBizNewPage: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // 10-Second Auto-Trigger Popup (Runs once per session unless already interacted)
  useEffect(() => {
    const hasTriggered = sessionStorage.getItem("export_biz_popup_triggered");
    if (!hasTriggered) {
      const timer = setTimeout(() => {
        setIsDemoModalOpen(true);
        sessionStorage.setItem("export_biz_popup_triggered", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <CommonServicePage
        {...exportBizServiceData}
        onHeroCtaClick={() => setIsDemoModalOpen(true)}
      >
        <DocumentEcosystemV2 />
        <CompareSection />
        <TrustSection />
        <FaqSection />
        <CtaBanner onStartDemo={() => setIsDemoModalOpen(true)} />
      </CommonServicePage>

      {isDemoModalOpen && (
        <ExportBizDemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />
      )}
    </>
  );
};

export default ExportBizNewPage;

