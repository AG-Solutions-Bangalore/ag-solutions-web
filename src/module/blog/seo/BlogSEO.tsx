import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
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
  const blogSchema = {
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    url: `https://ag-solutions.in/blogs/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "AG Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://ag-solutions.in/images/logo.png",
      },
    },
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        ogType="article"
        ogImage={image}
        ogImageAlt={title}
      />
      <JsonLd schema={blogSchema} />
    </>
  );
};

export default BlogSEO;
