import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItemData {
  question: string;
  answer: string;
  color: string;
  badgeColor: string;
}

const faqItems: FaqItemData[] = [
  {
    question: "What is Export Biz?",
    answer:
      "Export Biz is AG Solutions' specialized export documentation software. It helps Indian exporters, manufacturers and global traders turn shipment details into accurate, 100% compliant paperwork, while automating reporting, returns, and scheme tracking.",
    color: "text-teal",
    badgeColor: "bg-teal/15 text-teal border-teal/30",
  },
  {
    question: "Who is Export Biz for?",
    answer:
      "Exporters, manufacturers, trading houses, freight coordinators, and SMEs who handle international shipments and want to eliminate repetitive data entry, minimize human errors, and accelerate dispatch times.",
    color: "text-pink",
    badgeColor: "bg-pink/15 text-pink border-pink/30",
  },
  {
    question: "Do I need to install complicated software?",
    answer:
      "No complicated installation or hardware requirements. Export Biz is cloud-ready and accessible from any modern web browser. Start with a free guided demo and our specialists will configure your workflow seamlessly.",
    color: "text-yellow",
    badgeColor: "bg-yellow/15 text-yellow border-yellow/30",
  },
  {
    question: "What happens in the free guided demo?",
    answer:
      "Our trade technology experts will walk you through live document generation from purchase order to shipping bill, demonstrate compliance validation, answer your specific trade questions, and show custom reporting modules.",
    color: "text-green",
    badgeColor: "bg-green/15 text-green border-green/30",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default for rich aesthetics

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-section-alt py-12 sm:py-16 border-t border-border transition-colors duration-200" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Larger Typography & Brand Colors */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-teal bg-teal-light px-4 py-1.5 rounded-full border border-teal-border/40 shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-teal" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-dark text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
            Common <span className="text-pink">Questions</span> &amp; Answers
          </h2>

          {/* 4-Color Underline Accent */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-7 rounded-full bg-teal" />
            <span className="h-1 w-7 rounded-full bg-pink" />
            <span className="h-1 w-7 rounded-full bg-yellow" />
            <span className="h-1 w-7 rounded-full bg-green" />
          </div>

          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Export Biz, workflow automation, and onboarding.
          </p>
        </div>

        {/* Larger & Colored Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-card border-teal/40 shadow-lg ring-1 ring-teal/20"
                    : "bg-card/90 border-border hover:border-pink/40 hover:shadow-md"
                }`}
              >
                <h3>
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer border-none bg-transparent select-none"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl text-xs sm:text-sm font-bold ${item.badgeColor}`}>
                        0{index + 1}
                      </span>
                      <span className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base sm:text-lg md:text-xl transition-colors duration-200 ${
                        isOpen ? item.color : "text-dark group-hover:text-pink"
                      }`}>
                        {item.question}
                      </span>
                    </div>

                    <div className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-teal text-white rotate-180 shadow-sm"
                        : "bg-muted/10 text-muted group-hover:bg-pink group-hover:text-white"
                    }`}>
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </button>
                </h3>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                    <div className="h-px w-full bg-border/60 mb-4" />
                    <p className="text-muted text-sm sm:text-base leading-relaxed pl-10 sm:pl-12">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
