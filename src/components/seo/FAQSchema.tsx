import React from "react";
import JsonLd from "./JsonLd";

export interface FAQItem {
  question: string;
  answer: string;
}

export const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "What services do you provide?",
    answer:
      "We provide web development, mobile app development, and digital marketing services.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us through our contact form, email, or phone.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the requirements and complexity of the project.",
  },
];

interface FAQSchemaProps {
  faqs?: readonly FAQItem[] | FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  // If faqs is explicitly an empty array, do not render any schema
  if (Array.isArray(faqs) && faqs.length === 0) {
    return null;
  }

  const activeFaqs = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: activeFaqs.map((faq) => ({
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
