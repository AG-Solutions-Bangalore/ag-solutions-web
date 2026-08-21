import React from "react";
import JsonLd from "./JsonLd";

export interface BlogPostingProps {
  headline?: string;
  description?: string;
  image?: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
  datePublished?: string;
  dateModified?: string;
  url?: string;
}

const formatIsoDate = (dateStr?: string | null): string => {
  if (!dateStr) return new Date().toISOString();
  // If date is already ISO with time/timezone
  if (dateStr.includes("T")) return dateStr;
  
  // Format YYYY-MM-DD to ISO
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) {
    return parsed.toISOString();
  }
  return new Date().toISOString();
};

export const BlogPostingSchema: React.FC<BlogPostingProps> = ({
  headline = "10 Tips to Improve Your Website Performance",
  description = "Learn practical ways to improve website speed and performance.",
  image = "https://ag-solutions.in/images/08-subscribe.svg",
  authorName = "AG Solutions",
  publisherName = "AG Solutions",
  publisherLogo = "https://ag-solutions.in/webapi/public/assets/images/web_images_new/logo.png",
  datePublished,
  dateModified,
  url = "https://ag-solutions.in/blogs",
}) => {
  const isOrgAuthor = authorName.toLowerCase().includes("ag solutions") || authorName.toLowerCase().includes("superadmin");
  const authorType = isOrgAuthor ? "Organization" : "Person";
  const authorFinalName = isOrgAuthor ? "AG Solutions" : authorName;

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
    datePublished: formatIsoDate(datePublished),
    dateModified: formatIsoDate(dateModified || datePublished),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <JsonLd id="schema-blogposting" schema={schema} />;
};

export default BlogPostingSchema;
