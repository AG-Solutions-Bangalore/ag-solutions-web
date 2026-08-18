import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { FAQSchema } from "@/components/seo";
import { useBlogBySlug, useBlogs } from "../hooks/useBlogs";
import BlogDetailHeader from "../components/BlogDetailHeader";
import BlogFaqAccordion from "../components/BlogFaqAccordion";
import BlogDetailNavigation from "../components/BlogDetailNavigation";
import BlogSidebar from "../components/BlogSidebar";
import BlogCard from "../components/BlogCard";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: blogData, isLoading, error } = useBlogBySlug(slug || "");
  const { data: allBlogsData } = useBlogs();
  const { openLeadModal } = useLeadModal();

  const blogBaseUrl =
    blogData?.image_url?.find((img) => img.image_for === "Blog")?.image_url ||
    "https://ag-solutions.in/webapi/public/assets/images/blog_images/";

  const sponsorBaseUrl =
    blogData?.image_url?.find((img) => img.image_for === "Sponsors")?.image_url ||
    "https://ag-solutions.in/webapi/public/assets/images/sponsors_images/";

  const blog = blogData?.data;

  // Compute related articles (excluding current)
  const relatedArticles = useMemo(() => {
    if (!allBlogsData?.data || !blog) return [];
    return allBlogsData.data
      .filter((b) => b.id !== blog.id)
      .slice(0, 3);
  }, [allBlogsData?.data, blog]);

  // Categories with counts for sidebar
  const categoriesWithCounts = useMemo(() => {
    if (!allBlogsData?.data) return [];
    const map = new Map<string, number>();
    allBlogsData.data.forEach((b) => {
      if (b.categories && b.categories.trim()) {
        const cat = b.categories.trim();
        map.set(cat, (map.get(cat) || 0) + 1);
      }
    });
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }, [allBlogsData?.data]);

  // FAQ schema for SEO
  const faqSchemaList = useMemo(() => {
    if (!blogData?.faq) return [];
    return blogData.faq
      .map((item) => ({
        question: item.question || item.faq_que || "",
        answer: item.answer || item.faq_ans || "",
      }))
      .filter((f) => f.question && f.answer);
  }, [blogData?.faq]);

  // Error State
  if (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-background px-4 py-20 text-center">
        <div className="max-w-md mx-auto p-8 rounded-3xl border border-border bg-card shadow-lg">
          <div className="h-12 w-12 rounded-2xl bg-pink/15 text-pink flex items-center justify-center mx-auto mb-4 font-bold text-lg">
            !
          </div>
          <h2 className="text-2xl font-extrabold text-foreground mb-2">Article Not Found</h2>
          <p className="text-sm text-muted mb-6">
            We couldn&apos;t find the article you&apos;re looking for. It may have been moved or updated.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-teal-hover text-white text-sm font-bold shadow-md hover:scale-105 transition-all no-underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    );
  }

  // Loading State
  if (isLoading || !blog) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 animate-pulse">
        <div className="h-5 bg-muted/20 rounded w-1/4 mb-4" />
        <div className="h-10 bg-muted/20 rounded w-3/4 mb-6" />
        <div className="h-4 bg-muted/20 rounded w-1/3 mb-10" />
        <div className="aspect-[16/9] bg-muted/20 rounded-3xl w-full mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="h-4 bg-muted/20 rounded w-full" />
            <div className="h-4 bg-muted/20 rounded w-full" />
            <div className="h-4 bg-muted/20 rounded w-5/6" />
            <div className="h-4 bg-muted/20 rounded w-2/3" />
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="h-48 bg-muted/20 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  const headerImageUrl = blog.blog_banner_image
    ? `${blogBaseUrl}${blog.blog_banner_image}`
    : "/images/laptop.png";

  return (
    <>
      <SEO
        title={`${blog.blog_meta_title || blog.blog_title} - AG Solutions`}
        description={blog.blog_meta_description || blog.blog_short_description}
        keywords={blog.blog_meta_keywords ? blog.blog_meta_keywords.split(",") : [blog.blog_title]}
        canonical={`https://ag-solutions.in/blogs/${blog.blog_slug}`}
        ogType="article"
        ogTitle={blog.blog_title}
        ogDescription={blog.blog_meta_description || blog.blog_short_description}
        ogImage={headerImageUrl}
        twitterTitle={blog.blog_title}
        twitterDescription={blog.blog_meta_description || blog.blog_short_description}
        twitterImage={headerImageUrl}
      />
      {faqSchemaList.length > 0 && <FAQSchema faqs={faqSchemaList} />}

      <div className="bg-background min-h-screen text-foreground antialiased transition-colors duration-200">
        {/* Main Article Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Main Article Column */}
            <article className="lg:col-span-8 min-w-0">
              <BlogDetailHeader blog={blog} imageUrl={headerImageUrl} />

              {/* Rich Article HTML Body */}
              <div
                className="mt-8 prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed font-normal
                  [&>p]:text-base [&>p]:sm:text-lg [&>p]:leading-relaxed [&>p]:text-muted [&>p]:mb-5
                  [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-extrabold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4
                  [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:text-muted [&>ul]:space-y-2 [&>ul]:mb-6
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:text-muted [&>ol]:space-y-2 [&>ol]:mb-6
                  [&>blockquote]:border-l-4 [&>blockquote]:border-teal [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-foreground [&>blockquote]:my-6 [&>blockquote]:bg-card [&>blockquote]:py-2 [&>blockquote]:rounded-r-xl
                  [&>img]:rounded-3xl [&>img]:shadow-lg [&>img]:my-8 [&>img]:w-full [&>img]:border [&>img]:border-border
                  [&>a]:text-teal [&>a]:underline hover:[&>a]:text-pink transition-colors"
                dangerouslySetInnerHTML={{
                  __html: blog.blog_description || blog.blog_short_description,
                }}
              />

              {/* Interactive Collapsible FAQs */}
              {blogData?.faq && blogData.faq.length > 0 && (
                <div className="mt-12">
                  <BlogFaqAccordion faqs={blogData.faq} />
                </div>
              )}

              {/* Previous / Next Article Navigation */}
              <BlogDetailNavigation
                previous={blogData?.previous || null}
                next={blogData?.next || null}
              />

              {/* Consultation / Work with us banner */}
              <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-light/70 via-card to-pink-light/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-6 dark:from-teal/15 dark:via-card dark:to-pink/15 shadow-md">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal">
                    <Sparkles className="h-3.5 w-3.5 text-yellow" />
                    NEED ASSISTANCE?
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-foreground mt-1">
                    Ready to build your next digital solution?
                  </h4>
                  <p className="text-xs sm:text-sm text-muted mt-1 max-w-md">
                    Our senior engineering and product consultants can help architect and scale your vision.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openLeadModal("Blog Article CTA")}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white hover:shadow-lg hover:shadow-pink/25 hover:scale-105 active:scale-95 transition-all font-bold text-xs sm:text-sm whitespace-nowrap cursor-pointer border-none shadow-md"
                >
                  Schedule Consultation &rarr;
                </button>
              </div>
            </article>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 sticky top-24">
              <BlogSidebar
                featuredBlogs={blogData?.featured || []}
                sponsors={blogData?.sponsors || []}
                blogBaseUrl={blogBaseUrl}
                sponsorBaseUrl={sponsorBaseUrl}
                categoriesWithCounts={categoriesWithCounts}
              />
            </div>
          </div>
        </div>

        {/* Related Stories Section */}
        {relatedArticles.length > 0 && (
          <section className="bg-section-alt py-12 sm:py-16 border-t border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal">
                    <Sparkles className="h-3 w-3 text-yellow" />
                    <span>MORE ARTICLES</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                    Related Tech Stories
                  </h3>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pink hover:text-teal transition-colors no-underline"
                >
                  <span>View All</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedArticles.map((relBlog, idx) => (
                  <BlogCard
                    key={relBlog.id}
                    blog={relBlog}
                    imageBaseUrl={blogBaseUrl}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}

export default BlogDetailPage;
