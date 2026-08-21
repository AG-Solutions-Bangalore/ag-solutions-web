import React, { useState, useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { FAQSchema, SoftwareAppSchema } from "@/components/seo";
import { ExportBizHero } from "../components/ExportBizHero";
import { ExportBizStats } from "../components/ExportBizStats";
import { ExportBizProblemSolution } from "../components/ExportBizProblemSolution";
import { ExportBizModules } from "../components/ExportBizModules";
import { ExportBizReports } from "../components/ExportBizReports";
import { ExportBizBenefits } from "../components/ExportBizBenefits";
import { ExportBizCommonCTA } from "@/components/common/ExportBizCommonCTA";
import { ExportBizDemoModal } from "../components/ExportBizDemoModal";
import ExportSolutionsSection from "@/features/v1/home/components/ExportSolutionsSection";

const exportBizFaqs = [
  {
    question: "What is Export Biz?",
    answer:
      "Export Biz is AG Solutions' specialized export documentation software. It helps Indian exporters, manufacturers and global traders turn shipment details into accurate, 100% compliant paperwork.",
  },
  {
    question: "Who is Export Biz for?",
    answer:
      "Exporters, manufacturers, trading houses, freight coordinators, and SMEs who handle international shipments.",
  },
];

let hasOpenedDemoModalOnPageLoad = false;

export interface ExportBizPageProps {
  defaultOpenModal?: boolean;
}

export const ExportBizPage: React.FC<ExportBizPageProps> = ({ defaultOpenModal = false }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(defaultOpenModal);

  // 1. Timed popup logic (15 seconds after land, if not already open/opened manually, and not opened on this page load/refresh)
  useEffect(() => {
    if (!defaultOpenModal && !isDemoModalOpen && !hasOpenedDemoModalOnPageLoad) {
      const popupTimer = setTimeout(() => {
        setIsDemoModalOpen(true);
        hasOpenedDemoModalOnPageLoad = true;
      }, 15000);
      return () => clearTimeout(popupTimer);
    }
  }, [defaultOpenModal, isDemoModalOpen]);

  // Mark as opened if modal opens (manually or via timer)
  useEffect(() => {
    if (isDemoModalOpen) {
      hasOpenedDemoModalOnPageLoad = true;
    }
  }, [isDemoModalOpen]);

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
      <SoftwareAppSchema
        name="Export Biz - Export Documentation Software"
        description="Specialized export documentation and compliance software for exporters, manufacturers, and global trade houses by AG Solutions."
        applicationCategory="BusinessApplication"
        operatingSystem="Web Browser, Cloud-based"
        url="https://ag-solutions.in/export-biz"
        ratingValue={4.9}
        reviewCount={150}
      />
      <FAQSchema faqs={exportBizFaqs} />


      <div className="bg-[#f7f6f1] text-[#12141a] font-space-grotesk min-h-screen antialiased box-border pt-5">
        <ExportBizHero onOpenDemo={() => setIsDemoModalOpen(true)} />
        <ExportBizStats />
        <ExportBizProblemSolution />
        <ExportBizModules />
        <ExportBizReports />
        <ExportSolutionsSection />
        <ExportBizBenefits />
        <ExportBizCommonCTA onOpenDemo={() => setIsDemoModalOpen(true)} />
        {isDemoModalOpen && (
          <ExportBizDemoModal 
            isOpen={isDemoModalOpen} 
            onClose={() => setIsDemoModalOpen(false)} 
          />
        )}
      </div>
    </>
  );
};

export default ExportBizPage;
