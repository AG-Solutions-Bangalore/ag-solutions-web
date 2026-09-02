import React from "react";
import { JsonLd } from "@/shared/seo/JsonLd";
import { getImageUrl } from "@/utils/imageUrl";

export interface BlogPostingProps {
  headline?: string;
  description?: string;
  image?: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
  datePublished?: string | null;
  dateModified?: string | null;
  url?: string;
}

const formatIsoDate = (dateStr?: string | null): string | undefined => {
  if (!dateStr) return undefined;
  // If date is already ISO with time/timezone
  if (dateStr.includes("T")) return dateStr;

  // Format YYYY-MM-DD to ISO
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) {
    return parsed.toISOString();
  }
  return undefined;
};

/**
 * BlogPosting schema — used by the Blog detail page.
 *
 * Identifies the article as a BlogPosting entity with author, publisher,
 * dates and a canonical mainEntityOfPage. The publisher links back to the
 * Organization entity so trust signals consolidate to one AG Solutions ID.
 */
export const BlogPostingSchema: React.FC<BlogPostingProps> = ({
  headline,
  description,
  image,
  authorName,
  publisherName = "AG Solutions",
  publisherLogo = getImageUrl("/images/logo.webp"),
  datePublished,
  dateModified,
  url,
}) => {
  const published = formatIsoDate(datePublished);
  if (!headline || !published || !url) return null;
  const modified = formatIsoDate(dateModified ?? datePublished) ?? published;

  const resolvedAuthorName = authorName || publisherName;
  const isOrgAuthor = resolvedAuthorName.toLowerCase().includes("ag solutions") || resolvedAuthorName.toLowerCase().includes("superadmin");
  const authorType = isOrgAuthor ? "Organization" : "Person";
  const authorFinalName = isOrgAuthor ? publisherName : resolvedAuthorName;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: image ? [image] : undefined,
    author: {
      "@type": authorType,
      name: authorFinalName,
      url: "https://ag-solutions.in/",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://ag-solutions.in/#organization",
      name: publisherName,
      url: "https://ag-solutions.in/",
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <JsonLd id="schema-blogposting" schema={schema} />;
};

export default BlogPostingSchema;
