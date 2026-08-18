import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { BlogFAQItem } from "../types/blog.types";

interface BlogFaqAccordionProps {
  faqs: BlogFAQItem[];
}

export default function BlogFaqAccordion({ faqs }: BlogFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="h-8 w-8 rounded-lg bg-teal/15 text-teal flex items-center justify-center">
          <HelpCircle className="h-4 w-4" />
        </div>
        <h3 className="text-xl font-extrabold text-foreground tracking-tight m-0">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const question = faq.question || faq.faq_que || "";
          const answer = faq.answer || faq.faq_ans || "";
          if (!question || !answer) return null;

          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-teal/60 bg-teal/5 dark:bg-teal/10"
                  : "border-border bg-background/60 hover:border-teal/30"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-bold text-foreground leading-snug">
                  {question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-teal transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-pink" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-250 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm leading-relaxed text-muted border-t border-border/50 mt-1 whitespace-pre-line">
                    {answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
