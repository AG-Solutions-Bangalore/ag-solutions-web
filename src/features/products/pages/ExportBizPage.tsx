import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "@/components/seo/SEO";
import { ExportBizHero } from "../components/ExportBizHero";
import { ExportBizStats } from "../components/ExportBizStats";
import { ExportBizProblemSolution } from "../components/ExportBizProblemSolution";
import { ExportBizModules } from "../components/ExportBizModules";
import { ExportBizReports } from "../components/ExportBizReports";
import { ExportBizBenefits } from "../components/ExportBizBenefits";
import { ExportBizCommonCTA } from "@/components/common/ExportBizCommonCTA";
import { ExportBizDemoModal } from "../components/ExportBizDemoModal";
import { createCampaignVisit } from "../api/campaignApi";

let hasOpenedDemoModalOnPageLoad = false;

export interface ExportBizPageProps {
  defaultOpenModal?: boolean;
}

export const ExportBizPage: React.FC<ExportBizPageProps> = ({ defaultOpenModal = false }) => {
  const [searchParams] = useSearchParams();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(defaultOpenModal);

  // 1. Timed popup logic (5 seconds after land, if not already open/opened manually, and not opened on this page load/refresh)
  useEffect(() => {
    if (!defaultOpenModal && !isDemoModalOpen && !hasOpenedDemoModalOnPageLoad) {
      const popupTimer = setTimeout(() => {
        setIsDemoModalOpen(true);
        hasOpenedDemoModalOnPageLoad = true;
      }, 5000);
      return () => clearTimeout(popupTimer);
    }
  }, [defaultOpenModal, isDemoModalOpen]);

  // Mark as opened if modal opens (manually or via timer)
  useEffect(() => {
    if (isDemoModalOpen) {
      hasOpenedDemoModalOnPageLoad = true;
    }
  }, [isDemoModalOpen]);

  // 2. Hidden background UTM tracking process (runs exactly once on load)
  useEffect(() => {
    const utmSource = searchParams.get("utm_source");
    const utmCampaign = searchParams.get("utm_campaign");

    if (utmSource || utmCampaign) {
      createCampaignVisit({
        utm_source: utmSource || "",
        utm_campaign: utmCampaign || "",
        page: window.location.pathname,
        fullUrl: window.location.href,
        referrer: document.referrer || "",
        timestamp: new Date().toISOString()
      }).catch((err) => {
        console.error("Failed to log campaign visit:", err);
      });
    }
  }, []);

  return (
    <>
      <SEO
        title="EXPORT BIZ - Export Management Software"
        description="Optimize your compliance, reporting, claims, and customs processes with AG Solutions' EXPORT BIZ."
        keywords={[
          "export biz",
          "EXPORT BIZ",
          "shipping bills",
          "customs compliance",
        ]}
      />

      <div className="bg-[#f7f6f1] text-[#12141a] font-space-grotesk min-h-screen antialiased box-border pt-5">
        <ExportBizHero onOpenDemo={() => setIsDemoModalOpen(true)} />
        <ExportBizStats />
        <ExportBizProblemSolution />
        <ExportBizModules />
        <ExportBizReports />
        <ExportBizBenefits />
        <ExportBizCommonCTA onOpenDemo={() => setIsDemoModalOpen(true)} />
      </div>

      <ExportBizDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default ExportBizPage;
