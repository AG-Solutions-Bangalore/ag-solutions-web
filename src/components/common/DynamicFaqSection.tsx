import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";
import { useFAQs } from "@/features/services/hooks/useFAQs";
import type { FAQData } from "@/features/services/api/serviceApi";
import { FAQSchema } from "@/components/seo";

export interface DynamicFaqSectionProps {
  slug?: string;
  faqs?: FAQData[];
  tag?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  showSchema?: boolean;
}

export const DynamicFaqSection: React.FC<DynamicFaqSectionProps> = ({
  slug,
  faqs: propFaqs,
  tag = "FREQUENTLY ASKED QUESTIONS",
  title = "Got Questions? We've Got Answers",
  subtitle = "Everything you need to know about our services, processes, and delivery models.",
  className = "",
  showSchema = true,
}) => {
  const { data: apiResponse, isLoading } = useFAQs(slug || "");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const rawItems = propFaqs || apiResponse?.data || [];
  const items = Array.isArray(rawItems)
    ? rawItems.filter((f) => f.faq_que && f.faq_ans)
    : [];

  // Conditional Rendering Rule: If no FAQ data exists, hide section completely
  if (items.length === 0 && !isLoading) {
    return null;
  }

  // Loading skeleton while fetching
  if (isLoading && items.length === 0) {
    return (
      <section className={`py-12 sm:py-16 bg-background border-t border-border ${className}`}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-pulse space-y-4">
          <div className="h-4 bg-muted/20 rounded w-32 mx-auto mb-3" />
          <div className="h-8 bg-muted/20 rounded w-64 mx-auto mb-10" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 rounded-2xl bg-muted/10 border border-border" />
          ))}
        </div>
      </section>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const schemaFaqs = items.map((item) => ({
    question: item.faq_que,
    answer: item.faq_ans,
  }));

  return (
    <>
      {showSchema && schemaFaqs.length > 0 && <FAQSchema faqs={schemaFaqs} />}

      <section
        className={`py-12 sm:py-16 md:py-20 bg-background border-t border-border transition-colors duration-200 ${className}`}
        aria-label="Frequently Asked Questions"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink">
              <Sparkles className="h-3.5 w-3.5 text-yellow" />
              <span>{tag}</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2.5 text-xs sm:text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={`${faq.faq_que}-${index}`}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-teal/50 bg-card shadow-md"
                      : "border-border bg-card/60 hover:border-border hover:bg-card shadow-2xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-teal text-white"
                            : "bg-muted/15 text-muted"
                        }`}
                      >
                        <HelpCircle className="h-4 w-4" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-foreground leading-snug">
                        {faq.faq_que}
                      </span>
                    </div>

                    <div
                      className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-teal/15 text-teal rotate-180"
                          : "bg-muted/10 text-muted"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/40 mt-1">
                          <div className="pt-3 prose dark:prose-invert max-w-none text-muted">
                            {faq.faq_ans}
                          </div>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicFaqSection;
