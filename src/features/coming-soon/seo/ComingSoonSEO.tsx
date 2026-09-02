import React from "react";
import { SEO } from "@/shared/seo/SEO";

export interface ComingSoonSEOProps {
  title: string;
  description: string;
}

/**
 * Coming Soon page SEO.
 *
 * Generic wrapper used by any feature page still in development
 * (Grow Together, Desktop Applications, etc.).
 */
export const ComingSoonSEO: React.FC<ComingSoonSEOProps> = ({ title, description }) => {
  return (
    <SEO
      title={`${title} - Coming Soon | AG Solutions`}
      description={description}
    />
  );
};

export default ComingSoonSEO;
