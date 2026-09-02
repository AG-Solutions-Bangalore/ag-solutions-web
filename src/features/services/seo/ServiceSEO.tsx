import React from "react";
import { SEO } from "@/shared/seo/SEO";

export interface ServiceSEOProps {
  /** Required page title without the " | AG Solutions" suffix. */
  title: string;
  /** Required meta description. */
  description: string;
  /** Optional keyword list. */
  keywords?: string[];
  /** Optional canonical override. */
  canonical?: string;
}

/**
 * Generic Service page SEO.
 *
 * Used by every page that renders through `CommonServicePage` (Web
 * Development, Mobile App Development, Digital Marketing, ExportBiz).
 *
 * Each consumer passes its own title/description/keywords — this component
 * exists so the SEO meta composition stays consistent and the per-feature
 * folder pattern is preserved.
 */
export const ServiceSEO: React.FC<ServiceSEOProps> = ({ title, description, keywords, canonical }) => {
  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      canonical={canonical}
    />
  );
};

export default ServiceSEO;
