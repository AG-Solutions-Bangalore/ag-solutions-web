import fs from "fs";
import path from "path";
import { DIST_DIR, LOGO_URL, SITE_ORIGIN } from "../lib/constants";
import { fetchBlogDetail } from "../lib/apiClient";
import { fetchLiveBlogArticles } from "../generateSitemap";
import { toIsoDate } from "../lib/htmlUtils";
import { GLOBAL_ORGANIZATION_SCHEMA } from "../lib/globalSchemas";
import { buildHtmlForRoute, type RouteSEO } from "../lib/htmlBuilder";

/**
 * Prerender every dynamic blog article returned by the live API.
 * Writes both a directory version (`dist/blogs/<slug>/index.html`) and a
 * clean URL fallback (`dist/blogs/<slug>.html`).
 */
export async function processBlogArticles(baseHtml: string): Promise<number> {
  let generated = 0;

  try {
    const blogPosts = await fetchLiveBlogArticles();
    console.log(`\n📚 Pre-rendering ${blogPosts.length} Dynamic Blog Articles...`);

    for (const blog of blogPosts) {
      const slug = blog.url.split("/blogs/")[1] || "";
      if (!slug) continue;

      const blogRoute = `/blogs/${slug}`;
      const detail = await fetchBlogDetail(slug);
      const detailBlog = detail?.data;

      const blogTitle =
        detailBlog?.blog_title ||
        blog.name ||
        slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

      const description =
        detailBlog?.blog_meta_description ||
        detailBlog?.blog_short_description ||
        blog.description ||
        blogTitle;

      const imageBaseUrl = detail?.image_url?.find(
        (item: any) => item?.image_for === "Blog"
      )?.image_url;
      const image =
        detailBlog?.blog_banner_image && imageBaseUrl
          ? `${imageBaseUrl}${detailBlog.blog_banner_image}`
          : blog.image;

      const datePublished = toIsoDate(detailBlog?.blog_created_date || blog.lastmod);
      const dateModified = toIsoDate(
        detailBlog?.blog_updated_date || detailBlog?.blog_created_date || blog.lastmod
      );
      const authorName = detailBlog?.created_by || blog.author || "AG Solutions";
      const isOrgAuthor =
        authorName.toLowerCase().includes("ag solutions") ||
        authorName.toLowerCase().includes("superadmin");

      const faqMainEntity = Array.isArray(detail?.faq)
        ? detail.faq
            .filter((faq: any) => faq?.faq_que && faq?.faq_ans)
            .map((faq: any) => ({
              "@type": "Question",
              name: faq.faq_que,
              acceptedAnswer: { "@type": "Answer", text: faq.faq_ans },
            }))
        : [];

      // ----- Build per-blog schemas -----
      const schemas: Record<string, unknown>[] = [
        GLOBAL_ORGANIZATION_SCHEMA,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
            { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_ORIGIN}/blogs` },
            { "@type": "ListItem", position: 3, name: blogTitle, item: `${SITE_ORIGIN}${blogRoute}` },
          ],
        },
      ];

      if (datePublished && dateModified) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blogTitle,
          description,
          ...(image ? { image: [image] } : {}),
          url: `${SITE_ORIGIN}${blogRoute}`,
          datePublished,
          dateModified,
          author: {
            "@type": isOrgAuthor ? "Organization" : "Person",
            name: isOrgAuthor ? "AG Solutions" : authorName,
            url: `${SITE_ORIGIN}/`,
          },
          publisher: {
            "@type": "Organization",
            "@id": `${SITE_ORIGIN}/#organization`,
            name: "AG Solutions",
            url: `${SITE_ORIGIN}/`,
            logo: { "@type": "ImageObject", url: LOGO_URL },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}${blogRoute}` },
        });
      }

      if (faqMainEntity.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          _scriptId: "schema-faqpage",
          mainEntity: faqMainEntity,
        });
      }

      const blogSeo: RouteSEO = {
        title: `${blogTitle} | AG Solutions Blog`,
        description,
        canonical: `${SITE_ORIGIN}${blogRoute}`,
        // `og:type=article` is what FB/LinkedIn/Slack look for to render
        // an inline preview card instead of a plain link.
        ogType: "article",
        // Use the actual blog banner image when available.
        ogImage: image || undefined,
        ogImageAlt: blogTitle,
        schemas,
      };

      const blogHtml = buildHtmlForRoute(baseHtml, blogRoute, blogSeo);

      const blogTargetDir = path.join(DIST_DIR, "blogs", slug);
      fs.mkdirSync(blogTargetDir, { recursive: true });
      fs.writeFileSync(path.join(blogTargetDir, "index.html"), blogHtml, "utf-8");
      fs.writeFileSync(path.join(DIST_DIR, "blogs", `${slug}.html`), blogHtml, "utf-8");

      generated++;
    }
  } catch (err: any) {
    console.warn(`⚠️ Blog prerender skipped: ${err.message}`);
  }

  return generated;
}
