import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogSEO from "../seo/BlogSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { useBlogBySlug } from "../hooks/useBlogs";

const colorLineSegments = [
  "w-[18%] bg-[#1b2c38]",
  "w-[22%] bg-[#27c7cd]",
  "w-[20%] bg-[#ff3c66]",
  "w-[20%] bg-[#ffcb05]",
  "w-[20%] bg-[#8bd82b]",
] as const;

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: blogData, isLoading, error } = useBlogBySlug(slug || "");
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const blogBaseUrl = blogData?.image_url.find(
    (img) => img.image_for === "Blog"
  )?.image_url || "https://ag-solutions.in/webapi/public/assets/images/blog_images/";

  const sponsorBaseUrl = blogData?.image_url.find(
    (img) => img.image_for === "Sponsors"
  )?.image_url || "https://ag-solutions.in/webapi/public/assets/images/sponsors_images/";

  function renderColorLine() {
    return (
      <div
        className="about-color-line relative mt-4 h-[3px] w-[120px] overflow-hidden bg-[#1b2c38]"
        aria-hidden="true"
      >
        <div className="about-color-line-track absolute inset-y-0 left-0 flex w-[240px]">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full w-[120px] shrink-0">
              {colorLineSegments.map((segmentClass) => (
                <span
                  key={`${group}-${segmentClass}`}
                  className={segmentClass}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function toggleFaq(index: number) {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  }

  if (error) {
    return (
      <div className="text-center py-24 bg-white">
        <div className={layoutContainerClass}>
          <div className="py-12 px-6 bg-red-50 border border-red-100 rounded-2xl max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Blog</h2>
            <p className="text-red-500 font-medium">
              We couldn't retrieve the article details. Please verify the URL or try again later.
            </p>
            <Link
              to="/blogs"
              className="mt-6 inline-block bg-[#1b2c38] text-white px-8 py-3 rounded-full font-bold no-underline hover:bg-[#27c7cd] transition-colors"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || !blogData?.data) {
    return (
      <div className="animate-pulse bg-white py-20">
        <div className={layoutContainerClass}>
          <div className="h-12 bg-slate-200 rounded w-3/4 mb-4" />
          <div className="h-6 bg-slate-200 rounded w-1/4 mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="aspect-[21/9] bg-slate-200 w-full rounded-2xl" />
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-5/6" />
                <div className="h-4 bg-slate-200 rounded w-2/3" />
              </div>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div className="h-48 bg-slate-200 rounded-2xl" />
              <div className="h-64 bg-slate-200 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const blog = blogData.data;
  const imageUrl = blog.blog_banner_image
    ? `${blogBaseUrl}${blog.blog_banner_image}`
    : "/images/portfolio/web1.png";

  return (
    <>
      <BlogSEO
        title={`${blog.blog_title} - AG Solutions`}
        description={blog.blog_meta_description || blog.blog_short_description}
        slug={blog.blog_slug}
        image={imageUrl}
      />

      {/* 1. Header Banner */}
      <section className="relative overflow-hidden py-24 text-center text-white max-[760px]:py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg-blue-light.jpg')] bg-[length:450px_330px] bg-top opacity-[0.25]" />
        <div className="absolute inset-0 bg-[#0a7df2]/50" />
        
        <div className="relative z-1">
          <div className={layoutContainerClass}>
            <span className="bg-[#8bd82b] text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-4">
              {blog.categories || "Article"}
            </span>
            <h1 className="m-0 text-4xl lg:text-5xl font-black leading-tight tracking-normal max-w-4xl mx-auto">
              {blog.blog_title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-2.5 text-base font-semibold text-white/90">
              <Link
                to="/"
                className="text-white hover:text-white/80 no-underline transition-colors border-b border-transparent hover:border-white"
              >
                Homepage
              </Link>
              <span className="text-white/70">&raquo;</span>
              <Link
                to="/blogs"
                className="text-white hover:text-white/80 no-underline transition-colors border-b border-transparent hover:border-white"
              >
                Blogs
              </Link>
              <span className="text-white/70">&raquo;</span>
              <span className="text-white/70 line-clamp-1 max-w-[200px]">
                {blog.blog_title}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Blog Detail Layout Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Blog detail main content"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} grid grid-cols-1 lg:grid-cols-12 gap-12`}>
            
            {/* Left Main Article Column */}
            <article
              className={`lg:col-span-8 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
            >
              {/* Blog Header Image */}
              <div className="relative overflow-hidden bg-slate-50 mb-10 shadow-xs border border-slate-100 rounded-3xl aspect-[16/9]">
                <img
                  src={imageUrl}
                  alt={blog.blog_banner_image_alt || blog.blog_title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author & Date metadata */}
              <div className="flex items-center gap-4 text-[#7a8894] text-[14.5px] font-medium border-b border-slate-100 pb-5 mb-8">
                <span>Published on {blog.blog_created_date}</span>
                <span>&bull;</span>
                <span>By {blog.created_by || "Super Admin"}</span>
              </div>

              {/* Blog HTML Description */}
              <div
                className="prose prose-slate max-w-none text-base leading-relaxed text-[#4f5a62] font-normal blog-content-html"
                dangerouslySetInnerHTML={{ __html: blog.blog_description || blog.blog_short_description }}
              />
            </article>

            {/* Right Sidebar Column */}
            <aside
              className={`lg:col-span-4 space-y-10 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              {/* Widget: Featured Blogs */}
              {blogData.featured && blogData.featured.length > 0 && (
                <div className="bg-[#fafafa] border border-slate-100 p-8 rounded-3xl">
                  <h3 className="m-0 text-xl font-black text-[#1a2b3c]">
                    Featured Articles
                  </h3>
                  {renderColorLine()}

                  <div className="mt-8 space-y-6">
                    {blogData.featured.slice(0, 4).map((featBlog) => {
                      const featImageUrl = featBlog.blog_banner_image
                        ? `${blogBaseUrl}${featBlog.blog_banner_image}`
                        : "/images/portfolio/web1.png";

                      return (
                        <div key={featBlog.id} className="flex gap-4 items-start group">
                          <Link
                            to={`/blogs/${featBlog.blog_slug}`}
                            className="flex-none w-20 aspect-square overflow-hidden rounded-xl bg-slate-50"
                          >
                            <img
                              src={featImageUrl}
                              alt={featBlog.blog_title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </Link>
                          <div className="space-y-1">
                            <span className="text-xs text-[#7a8894] font-medium">
                              {featBlog.blog_created_date}
                            </span>
                            <h4 className="m-0 text-[14.5px] leading-snug font-bold text-[#1b2c38] group-hover:text-[#09c7ca] transition-colors duration-200">
                              <Link
                                to={`/blogs/${featBlog.blog_slug}`}
                                className="text-inherit no-underline line-clamp-2"
                              >
                                {featBlog.blog_title}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Widget: Collapsible FAQs Accordion */}
              {blogData.faq && blogData.faq.length > 0 && (
                <div className="bg-[#fafafa] border border-slate-100 p-8 rounded-3xl">
                  <h3 className="m-0 text-xl font-black text-[#1a2b3c]">
                    Article FAQs
                  </h3>
                  {renderColorLine()}

                  <div className="mt-6 space-y-3">
                    {blogData.faq.map((faqItem, idx) => {
                      const isOpen = expandedFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleFaq(idx)}
                          className="bg-white border border-slate-100 rounded-2xl overflow-hidden py-3.5 px-4 cursor-pointer select-none"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-[14px] font-bold text-[#1b2c38] line-clamp-2">
                              {faqItem.question || faqItem.faq_question}
                            </span>
                            <span className={`text-[#09c7ca] text-sm font-bold transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
                              &raquo;
                            </span>
                          </div>

                          <div className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                            <div className="overflow-hidden">
                              <p className="mt-3 text-[13px] leading-relaxed text-[#4f5a62] font-normal border-t border-slate-50 pt-3 whitespace-pre-line">
                                {faqItem.answer || faqItem.faq_answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Widget: Sponsors Grid */}
              {blogData.sponsors && blogData.sponsors.length > 0 && (
                <div className="bg-[#fafafa] border border-slate-100 p-8 rounded-3xl">
                  <h3 className="m-0 text-xl font-black text-[#1a2b3c]">
                    Our Sponsors
                  </h3>
                  {renderColorLine()}

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {blogData.sponsors.map((sponsor, idx) => {
                      const isAbsoluteUrl = !!(sponsor.sponsors_url && (sponsor.sponsors_url.startsWith("http://") || sponsor.sponsors_url.startsWith("https://")));
                      const sponsorLink = isAbsoluteUrl && sponsor.sponsors_url ? sponsor.sponsors_url : "#";
                      
                      const sImgUrl = sponsor.sponsors_image.startsWith("http://") || sponsor.sponsors_image.startsWith("https://")
                        ? sponsor.sponsors_image
                        : `${sponsorBaseUrl}${sponsor.sponsors_image}`;

                      return (
                        <a
                          key={idx}
                          href={sponsorLink}
                          target={isAbsoluteUrl ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-3 bg-white border border-slate-100 rounded-xl hover:border-[#09c7ca] transition-all group aspect-[4/3] overflow-hidden"
                        >
                          <img
                            src={sImgUrl}
                            alt="Partner Sponsor Logo"
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

            </aside>

          </div>
        )}
      </AnimatedSection>
    </>
  );
}
