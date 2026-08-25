import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";

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
        title="Contact AG Solutions | Business & IT Solutions"
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
    </>
  );
};

export default ContactSEO;

