import React, { useState } from "react";

interface FaqItemData {
  question: string;
  answer: string;
}

const faqItems: FaqItemData[] = [
  {
    question: "What is Export Biz?",
    answer:
      "Export Biz is AG Solutions' export documentation software. It helps Indian exporters, manufacturers and traders turn shipment details into accurate, ready-to-use paperwork, while keeping reporting, returns and claims organized.",
  },
  {
    question: "Who is Export Biz for?",
    answer:
      "Exporters, manufacturers, traders and SMEs who handle export shipments and want to spend less time on paperwork and more time on business.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No complicated setup. Start with a free guided demo and our team will walk you through the workflow.",
  },
  {
    question: "What happens in the free demo?",
    answer:
      "We'll show you how shipment details become finished documents, answer your questions, and walk through the modules that matter most to your business.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-section-alt py-8 sm:py-12 border-t border-border transition-colors duration-200" id="faq">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto text-center mb-8 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-teal bg-teal-light/50 px-3.5 py-1 rounded-full mb-2.5 border border-teal-border/40">
            FAQ
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-dark text-xl sm:text-2xl lg:text-3xl leading-tight">
            Common Questions.
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto reveal space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all shadow-2xs"
              >
                <h3>
                  <button
                    className="w-full flex items-center justify-between gap-4 p-4 sm:px-5 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm sm:text-base text-dark text-left cursor-pointer border-none bg-transparent"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                  >
                    {item.question}
                    <svg
                      className={`w-4 h-4 shrink-0 text-teal transition-transform duration-250 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <p className="px-4 sm:px-5 pb-4 text-muted text-xs sm:text-sm max-w-[640px] leading-relaxed">
                    {item.answer}
                  </p>
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
