import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";

export const HomeSEO: React.FC = () => {
  const homeSchema = {
    "@type": "WebSite",
    name: "AG Solutions",
    url: "https://ag-solutions.in",
    description:
      "Web development, mobile app development, desktop applications, digital marketing, and EXPORT BIZ software from AG Solutions.",
  };

  return (
    <>
      <SEO
        title="AG Solutions | Web Development, Mobile App Development & Software Solutions Company"
        description="With 13+ years of experience, AG Solutions helps businesses build secure, scalable, and high-performance digital solutions. We specialize in custom web development, Android and iOS mobile applications, desktop software, export documentation systems, and digital marketing services. Our experienced team delivers technology that improves efficiency, enhances customer experiences, and supports long-term business growth."
        keywords={[
          "AG Solutions",
          "web development",
          "mobile app development",
          "digital marketing",
          "export biz software",
        ]}
        ogType="website"
        ogImage="https://ag-solutions.in/images/home/01Crausle.svg"
        ogImageAlt="AG Solutions web and mobile app development illustration"
      />
      <JsonLd schema={homeSchema} />
    </>
  );
};

export default HomeSEO;
