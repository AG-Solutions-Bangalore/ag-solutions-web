import React from "react";
import { SEO } from "@/shared/seo/SEO";

/**
 * Home page SEO.
 *
 * The Home page does not need a per-page JSON-LD — the global Organization
 * and WebSite schemas (mounted by Layout) plus the dynamic testimonials/FAQs
 * injected by `scripts/prerenderSeo.ts` cover the rich-result surface.
 */
export const HomeSEO: React.FC = () => {
  return (
    <SEO
      title="Web Development & Mobile App Development Company|AG Solutions"
      description="AG Solutions is a leading software development company providing web development, mobile applications, digital marketing, and export compliance software."
      keywords="web development company, mobile app development, export biz, ease marketing, ag solutions"
    />
  );
};

export default HomeSEO;
