import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";

export const AboutSEO: React.FC = () => {
  const aboutSchema = {
    "@type": "AboutPage",
    name: "About AG Solutions",
    url: "https://ag-solutions.in/about",
    description:
      "Learn about AG Solutions - Web Development, Mobile Apps, Desktop Solutions and our professional development process.",
  };

  return (
    <>
      <SEO
        title="About Us - AG Solutions"
        description="Learn more about AG Solutions, our core values, our professional software development process, and our vision to empower businesses through customized tech solutions."
        keywords={[
          "About AG Solutions",
          "AG Solutions story",
          "custom software process",
          "software testing solutions",
          "development phases",
        ]}
        ogType="website"
        ogImage="https://ag-solutions.in/images/about/09-story-company.svg"
        ogImageAlt="AG Solutions Company Story Illustration"
      />
      <JsonLd id="schema-aboutpage-v1" schema={aboutSchema} />
    </>
  );
};

export default AboutSEO;
