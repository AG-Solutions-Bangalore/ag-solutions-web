import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What barcode and QR hardware does BizStock support?",
    answer:
      "BizStock works with virtually any standard 1D/2D USB or Bluetooth barcode scanner (Zebra, Honeywell, Datalogic, etc.) as well as the native cameras on iOS and Android smartphones/tablets via the BizStock mobile web app. No expensive proprietary hardware is required.",
  },
  {
    question: "Can BizStock handle multi-warehouse transfers and transit tracking?",
    answer:
      "Yes. BizStock allows you to manage an unlimited number of physical warehouses, regional distribution centers, and virtual transit hubs. You can generate digital stock transfer orders, print dispatch challans, track goods in-transit, and enforce receiving verification scans at destination.",
  },
  {
    question: "How does the automated Purchase Order (PO) reordering feature work?",
    answer:
      "You can configure minimum safety thresholds and economic order quantities (EOQ) per SKU. When stock drops below the threshold due to sales or production consumption, BizStock automatically triggers a PO draft mapped to your assigned vendor, complete with pricing and lead-time terms.",
  },
  {
    question: "Can BizStock integrate with our existing accounting or Export Biz software?",
    answer:
      "Absolutely. BizStock features native bi-directional REST APIs and pre-built connectors for Tally, Zoho Books, QuickBooks, SAP, and AG Solutions' Export Biz platform. Inward purchases and outward dispatch automatically update stock assets and financial ledgers.",
  },
  {
    question: "How quickly can we migrate our existing stock data from Excel?",
    answer:
      "Our turnkey Excel/CSV bulk import wizard lets you import your entire product catalog, opening stock levels, SKU codes, bin locations, and supplier details in minutes. Our onboarding team provides full data validation support to ensure a zero-downtime transition.",
  },
  {
    question: "Does BizStock support batch, lot, and expiry date (FEFO) tracking?",
    answer:
      "Yes. For pharmaceuticals, chemicals, food & beverage, and perishable manufacturing, BizStock enforces First-Expiry-First-Out (FEFO) and First-In-First-Out (FIFO) dispatch picking rules with automated alerts for near-expiry items.",
  },
];

export const BizStockFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-14 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Got Questions About BizStock? We've Got Answers.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            Everything you need to know about inventory automation, deployment timelines, hardware compatibility, and data security.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
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
                      isOpen ? "rotate-180 bg-blue-500/10 text-blue-600 dark:text-blue-400" : "text-muted"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/50 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BizStockFaq;
