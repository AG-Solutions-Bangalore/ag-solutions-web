import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";
import { FAQSchema } from "@/components/seo";

const contactFaqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer: "We typically respond to all inquiries within 24 business hours.",
  },
  {
    question: "Can I get a customized quote for my project?",
    answer: "Yes! Just share your requirements and we'll provide a tailored quote.",
  },
  {
    question: "What information do you need to get started?",
    answer: "A brief about your project, goals, timeline, and any specific requirements.",
  },
  {
    question: "Do you provide ongoing support after delivery?",
    answer: "Yes, we offer maintenance and support packages to keep your business running smoothly.",
  },
];

export const ContactSEO: React.FC = () => {
  const contactSchema = {
    "@type": "ContactPage",
    name: "Contact AG Solutions",
    url: "https://ag-solutions.in/contacts",
    description:
      "Get in touch with AG Solutions. Have any questions or requirements? Send us a message or find our location in Jayanagar, Bengaluru.",
  };

  return (
    <>
      <SEO
        title="Contact Us - AG Solutions"
        description="Get in touch with AG Solutions. Send us your custom software requirements, call us, or find our office location at Jayanagar, Bengaluru. We're here to help you."
        keywords={[
          "Contact AG Solutions",
          "AG Solutions Jayanagar office",
          "AG Solutions phone number",
          "custom software request",
          "software engineering Bangalore",
        ]}
        ogType="website"
      />
      <JsonLd id="schema-contactpage" schema={contactSchema} />
      <FAQSchema faqs={contactFaqs} />
    </>
  );
};

export default ContactSEO;

