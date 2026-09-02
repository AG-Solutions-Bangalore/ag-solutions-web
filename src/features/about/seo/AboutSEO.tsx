import React from "react";
import { SEO } from "@/shared/seo/SEO";

/**
 * About page SEO.
 *
 * Global Organization + WebSite schemas (mounted by Layout) cover the
 * brand-level rich-result surface for this page.
 */
export const AboutSEO: React.FC = () => {
  return (
    <SEO
      title="About AG Solutions | IT Solutions for New Age Businesses"
      description="Learn about AG Solutions, our core values, mission, team, and why businesses worldwide trust us as their IT solution partner."
    />
  );
};

export default AboutSEO;
