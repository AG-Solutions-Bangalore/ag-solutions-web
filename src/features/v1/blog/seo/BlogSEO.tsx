import React from "react";
import { SEO } from "@/components/seo/SEO";

interface BlogSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  slug?: string;
}

export const BlogSEO: React.FC<BlogSEOProps> = ({
  title = "Blogs - AG Solutions",
  description = "Read our latest blogs on technology, web applications, mobile app development, and digital marketing insights.",
  keywords = [
    "AG Solutions blogs",
    "web development blog",
    "mobile app insights",
    "technology updates",
    "digital marketing tips",
  ],
  image = "https://ag-solutions.in/images/08-subscribe.svg",
  slug = "blogs",
}) => {
  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      canonical={`https://ag-solutions.in/blogs/${slug}`}
      ogType="article"
      ogImage={image}
      ogImageAlt={title}
    />
  );
};

export default BlogSEO;
