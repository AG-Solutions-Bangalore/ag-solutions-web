import React from "react";
import { JsonLd } from "@/shared/seo/JsonLd";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs?: readonly FAQItem[] | FAQItem[];
}

/**
 * FAQPage schema — used by the Blog detail page when the article has FAQs.
 *
 * Renders collapsible rich-result snippets in Google SERP. Silently no-ops
 * when the FAQ list is empty.
 */
export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  // If faqs is missing or empty, do not render any schema
  const validFaqs = faqs?.filter((faq) => faq.question?.trim() && faq.answer?.trim()) || [];
  if (validFaqs.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd id="schema-faqpage" schema={schema} />;
};

export default FAQSchema;
