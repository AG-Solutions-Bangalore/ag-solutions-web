import React from "react";
import { SEO } from "@/shared/seo/SEO";

/**
 * 404 Not Found page SEO.
 *
 * Tells crawlers NOT to index 404 pages so they don't appear in search
 * results. The follow directive lets the crawler follow internal links
 * on the 404 page (to recover and find the right page).
 */
export const NotFoundSEO: React.FC = () => {
  return (
    <SEO
      title="404 - Page Not Found | AG Solutions"
      description="The page you are looking for could not be found. Explore AG Solutions web development, mobile apps, digital marketing services, and enterprise products."
      robots="noindex, follow"
    />
  );
};

export default NotFoundSEO;
