import React from "react";
import { SEO } from "@/components/seo/SEO";

export const HomeSEO: React.FC = () => {
  return (
    <SEO
      title="AG Solutions | Web Development, Mobile App Development & Software Solutions Company"
      description="AG Solutions builds scalable web apps, mobile apps, desktop software, digital marketing systems, and EXPORT BIZ products for growing businesses."
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
  );
};

export default HomeSEO;
