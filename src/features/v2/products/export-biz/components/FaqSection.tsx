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
    <section className="bg-section-alt py-16 md:py-24 lg:py-28 border-t border-border transition-colors duration-200" id="faq">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="max-w-[640px] mx-auto text-center mb-13 reveal">
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.09em] uppercase text-teal bg-teal-light/50 px-4 py-1.75 rounded-full mb-4.5 border border-teal-border/40">
            FAQ
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-dark text-[1.9rem] sm:text-[2.3rem] lg:text-[2.7rem] leading-[1.08]">
            Common Questions.
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto reveal">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl mb-3.5 overflow-hidden transition-all shadow-2xs"
              >
                <h3>
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 sm:px-6 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[1.02rem] text-dark text-left cursor-pointer"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                  >
                    {item.question}
                    <svg
                      className={`w-5 h-5 shrink-0 text-teal transition-transform duration-250 ${
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
                  <p className="px-5 sm:px-6 pb-5.5 text-muted text-[0.96rem] max-w-[640px] leading-relaxed">
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
