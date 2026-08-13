import React, { useEffect, useState } from "react";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "../components/Hero";
import { Workflow } from "../components/Workflow";
// import { DocumentEcosystem } from "../components/DocumentEcosystem";
import { DocumentEcosystemV2 } from "../components/DocumentEcosystemV2";
import { CompareSection } from "../components/CompareSection";
import { TrustSection } from "../components/TrustSection";
import { PainSection } from "../components/PainSection";
import { FaqSection } from "../components/FaqSection";
import { CtaBanner } from "../components/CtaBanner";
import { MobileSticky } from "../components/MobileSticky";
import { ToTopButton } from "../components/ToTopButton";
import { ExportBizDemoModal } from "@/features/products/components/ExportBizDemoModal";

export const ExportBizNewPage: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (targetId: string) => {
    if (targetId === "demo") {
      setIsDemoModalOpen(true);
      return;
    }

    if (targetId === "top") {
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: false });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(element, { offset: -80, immediate: false });
      } else {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <SEO
        title="Export Biz by AG Solutions | Export Documentation Made Simple"
        description="Export Biz by AG Solutions turns shipment details into accurate export documentation, reporting, monthly returns and scheme claims — organized in minutes."
        keywords={[
          "Export Biz",
          "export documentation software",
          "shipping bills",
          "AG Solutions",
          "export paperwork",
          "monthly returns",
          "scheme claims",
        ]}
      />

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.7s cubic-bezier(0.2, 0.7, 0.3, 1), transform 0.7s cubic-bezier(0.2, 0.7, 0.3, 1);
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="font-['Inter',-apple-system,sans-serif] text-[#0B1B3A] bg-white antialiased overflow-x-hidden pb-18 md:pb-0">
        <main id="main">
          <span id="top"></span>

          <Hero onScrollTo={scrollToSection} />
          <Workflow />
          {/* <DocumentEcosystem /> */}
          <DocumentEcosystemV2 />
          <CompareSection />
          <TrustSection />
          <PainSection />
          <FaqSection />
          <CtaBanner onStartDemo={() => setIsDemoModalOpen(true)} />
        </main>

        <MobileSticky onCtaClick={() => setIsDemoModalOpen(true)} />
        <ToTopButton />
      </div>

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
