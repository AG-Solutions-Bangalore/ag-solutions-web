import React from "react";
import { SEO } from "@/shared/seo/SEO";

/**
 * Blog list page SEO.
 *
 * The list itself doesn't need a JSON-LD — the global Organization + WebSite
 * schemas (mounted by Layout) and the dynamic blog post cards already cover
 * the rich-result surface.
 */
export const BlogListSEO: React.FC = () => {
  return (
    <SEO
      title="Tech & Business Insights Blog - AG Solutions"
      description="Explore the latest articles, engineering tutorials, software architecture patterns, and digital marketing insights from AG Solutions."
      keywords={[
        "AG Solutions blog",
        "tech insights",
        "software engineering articles",
        "mobile app development blog",
        "web development trends",
      ]}
    />
  );
};

export default BlogListSEO;
