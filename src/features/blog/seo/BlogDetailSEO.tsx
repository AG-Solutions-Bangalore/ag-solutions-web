import React from "react";
import { SEO } from "@/shared/seo/SEO";
import { BlogPostingSchema } from "./BlogPostingSchema";
import { BreadcrumbSchema, type BreadcrumbItem } from "./BreadcrumbSchema";
import { FAQSchema, type FAQItem } from "./FAQSchema";
import { getImageUrl } from "@/utils/imageUrl";

export interface BlogDetailSEOProps {
  blogTitle: string;
  blogSlug: string;
  blogShortDescription?: string;
  blogMetaTitle?: string;
  blogMetaDescription?: string;
  blogMetaKeywords?: string | null;
  blogBannerImage?: string;
  blogBaseUrl?: string;
  blogCreatedDate?: string | null;
  blogUpdatedDate?: string | null;
  createdBy?: string;
  breadcrumbItems?: BreadcrumbItem[];
  faqs?: FAQItem[];
}

/**
 * Blog detail page SEO.
 *
 * Composes:
 *  - Article meta tags (og:type=article, canonical, OG image, Twitter card)
 *  - BlogPosting JSON-LD
 *  - BreadcrumbList JSON-LD (if a trail was provided)
 *  - FAQPage JSON-LD (if FAQs were provided)
 *
 * This is the single import point the BlogDetailPage uses; all per-blog
 * SEO composition lives here.
 */
export const BlogDetailSEO: React.FC<BlogDetailSEOProps> = ({
  blogTitle,
  blogSlug,
  blogShortDescription,
  blogMetaTitle,
  blogMetaDescription,
  blogMetaKeywords,
  blogBannerImage,
  blogBaseUrl,
  blogCreatedDate,
  blogUpdatedDate,
  createdBy,
  breadcrumbItems,
  faqs,
}) => {
  const canonical = `https://ag-solutions.in/blogs/${blogSlug}`;
  const headerImageUrl = blogBannerImage
    ? `${blogBaseUrl || "https://ag-solutions.in/webapi/public/assets/images/blog_images/"}${blogBannerImage}`
    : getImageUrl("/images/laptop.webp");

  return (
    <>
      <SEO
        title={`${blogMetaTitle || blogTitle} - AG Solutions`}
        description={blogMetaDescription || blogShortDescription}
        keywords={blogMetaKeywords ? blogMetaKeywords.split(",") : [blogTitle]}
        canonical={canonical}
        ogType="article"
        ogTitle={blogTitle}
        ogDescription={blogMetaDescription || blogShortDescription}
        ogImage={headerImageUrl}
        twitterTitle={blogTitle}
        twitterDescription={blogMetaDescription || blogShortDescription}
        twitterImage={headerImageUrl}
      />
      <BlogPostingSchema
        headline={blogTitle}
        description={blogMetaDescription || blogShortDescription}
        image={headerImageUrl}
        url={canonical}
        datePublished={blogCreatedDate}
        dateModified={blogUpdatedDate || blogCreatedDate}
        authorName={createdBy}
      />
      {breadcrumbItems && breadcrumbItems.length > 0 && (
        <BreadcrumbSchema items={breadcrumbItems} />
      )}
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
    </>
  );
};

export default BlogDetailSEO;
