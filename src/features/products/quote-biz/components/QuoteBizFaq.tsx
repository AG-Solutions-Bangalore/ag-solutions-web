import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const quoteBizFaqs: FaqItem[] = [
  {
    question: "How fast can I create and send a quotation using QuoteBiz?",
    answer:
      "With QuoteBiz's pre-configured templates and smart item catalog, you can create, customize, and dispatch professional, brand-aligned quotes in under 2 minutes. You can send them directly via email or generate a secure shareable link.",
  },
  {
    question: "How does the quote tracking and customer view notification work?",
    answer:
      "QuoteBiz provides real-time tracking pixels and event logs. The instant your client opens or views the quote PDF or web link, you receive an instant alert on both your desktop dashboard and mobile app, allowing you to follow up at the exact moment of peak interest.",
  },
  {
    question: "Can I convert accepted quotes into tax invoices with one click?",
    answer:
      "Yes. Once a client approves or accepts your quotation online, QuoteBiz allows you to convert the entire quote into a compliant GST/tax invoice with a single click, eliminating manual data re-entry and billing errors.",
  },
  {
    question: "Does QuoteBiz allow custom branding and personalized templates?",
    answer:
      "Absolutely. You can upload your company logo, choose custom color palettes, configure header/footer layouts, define standard payment terms, and add digital signature fields to match your exact corporate identity.",
  },
  {
    question: "Is QuoteBiz available on mobile devices?",
    answer:
      "Yes. QuoteBiz features native apps for iOS and Android, allowing your sales reps and project managers to generate quotes, review pending deals, receive approval alerts, and download PDFs on-the-go.",
  },
  {
    question: "Can QuoteBiz integrate with our existing accounting or CRM systems?",
    answer:
      "QuoteBiz includes robust REST APIs and pre-built connectors for popular tools like Tally, Zoho, QuickBooks, and leading CRMs, ensuring seamless synchronization of customer accounts, product catalogs, and revenue ledgers.",
  },
];

export const QuoteBizFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-14 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Got Questions About QuoteBiz? We&apos;ve Got Answers.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            Everything you need to know about quotation automation, tracking features, invoice conversion, and mobile access.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {quoteBizFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <m.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-2xl border border-border shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-dark">
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-sky-500/10 text-sky-600 dark:text-sky-400" : "text-muted"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/50 pt-3">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuoteBizFaq;
