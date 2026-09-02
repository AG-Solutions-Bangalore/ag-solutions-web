import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { generateCanonicalUrl } from "../../utils/seoUtils";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  robots?: string; // e.g., 'index, follow' or 'noindex, nofollow'

  // Open Graph
  ogType?: "website" | "article" | "profile" | "product";
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;

  // Twitter Cards
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  twitterCreator?: string;
}

const DEFAULT_TITLE = "AG Solutions - Scalable Frontend Systems";
const DEFAULT_DESCRIPTION =
  "High-performance, WCAG accessible, and SEO-optimized modular architectures.";
const DEFAULT_KEYWORDS =
  "react, typescript, vite, performance, web vitals, accessibility, wcag, seo";
const DEFAULT_OG_IMAGE =
  "https://ag-solutions-website.pages.dev/og-default.png";
const DEFAULT_TWITTER_CREATOR = "@agsolutions";

/**
 * Reusable SEO Meta component that integrates with react-helmet-async.
 * Consolidates metadata, Open Graph (OG), and Twitter Cards into a single interface.
 *
 * This is the cross-cutting wrapper — every per-feature SEO component
 * (`<HomeSEO>`, `<BizStockSEO>`, …) uses this under the hood.
 */
export const SEO: React.FC<SEOProps> = React.memo(
  ({
    title,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    canonical,
    robots = "index, follow",
    ogType = "website",
    ogTitle,
    ogDescription,
    ogImage = DEFAULT_OG_IMAGE,
    ogImageAlt = "AG Solutions - Scalable Web Systems Logo",
    twitterCard = "summary_large_image",
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterImageAlt,
    twitterCreator = DEFAULT_TWITTER_CREATOR,
  }) => {
    const { pathname, search } = useLocation();

    // Page title logic
    const pageTitle = title
      ? title.includes("AG Solutions")
        ? title
        : `${title} | AG Solutions`
      : DEFAULT_TITLE;

    // Auto-generate canonical URL if not explicitly supplied
    const resolvedCanonical =
      canonical || generateCanonicalUrl(pathname, search);

    // Keyword parsing
    const parsedKeywords = Array.isArray(keywords)
      ? keywords.join(", ")
      : keywords;

    // Fallbacks for social titles and descriptions
    const finalOgTitle = ogTitle || title || pageTitle;
    const finalOgDesc = ogDescription || description;
    const finalTwitterTitle = twitterTitle || title || pageTitle;
    const finalTwitterDesc = twitterDescription || description;
    const finalTwitterImage = twitterImage || ogImage;
    const finalTwitterImageAlt = twitterImageAlt || ogImageAlt;

    return (
      <Helmet>
        {/* Core Metadata */}
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={parsedKeywords} />
        <meta name="robots" content={robots} />
        <meta name="author" content="AG Solutions" />
        <meta name="publisher" content="AG Solutions" />
        <link rel="canonical" href={resolvedCanonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={resolvedCanonical} />
        <meta property="og:title" content={finalOgTitle} />
        <meta property="og:description" content={finalOgDesc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:site_name" content="AG Solutions" />

        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:creator" content={twitterCreator} />
        <meta name="twitter:url" content={resolvedCanonical} />
        <meta name="twitter:title" content={finalTwitterTitle} />
        <meta name="twitter:description" content={finalTwitterDesc} />
        <meta name="twitter:image" content={finalTwitterImage} />
        <meta name="twitter:image:alt" content={finalTwitterImageAlt} />
      </Helmet>
    );
  },
);

SEO.displayName = "SEO";
export default SEO;
