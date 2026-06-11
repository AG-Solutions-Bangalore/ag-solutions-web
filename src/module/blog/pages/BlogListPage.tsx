import { Link } from "react-router-dom";
import BlogSEO from "../seo/BlogSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { useBlogs } from "../hooks/useBlogs";

const colorLineSegments = [
  "w-[18%] bg-[#1b2c38]",
  "w-[22%] bg-[#27c7cd]",
  "w-[20%] bg-[#ff3c66]",
  "w-[20%] bg-[#ffcb05]",
  "w-[20%] bg-[#8bd82b]",
] as const;

export default function BlogListPage() {
  const { data: blogsData, isLoading, error } = useBlogs();

  const blogBaseUrl = blogsData?.image_url.find(
    (img) => img.image_for === "Blog"
  )?.image_url || "https://ag-solutions.in/webapi/public/assets/images/blog_images/";

  function renderColorLine() {
    return (
      <div
        className="about-color-line relative mt-4 h-[3px] w-[220px] overflow-hidden bg-[#1b2c38] mx-auto"
        aria-hidden="true"
      >
        <div className="about-color-line-track absolute inset-y-0 left-0 flex w-[440px]">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full w-[220px] shrink-0">
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

  function renderSkeletonGrid() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse border border-slate-100 bg-white">
            <div className="aspect-[3/2] bg-slate-100" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-slate-200 rounded w-1/4" />
              <div className="h-5 bg-slate-200 rounded w-11/12" />
              <div className="h-3 bg-slate-100 rounded w-full" />
              <div className="h-3 bg-slate-100 rounded w-5/6" />
              <div className="h-4 bg-slate-200 rounded w-1/3 pt-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <BlogSEO />

      {/* 1. Header Banner */}
      <section className="relative overflow-hidden py-24 text-center text-[#1b2c38] max-[760px]:py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg-breez.jpg')] bg-[length:450px_330px] bg-top" />
        <div className="relative z-1">
          <h1 className="m-0 text-5xl font-black tracking-normal max-[760px]:text-4xl">
            Our Blogs
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2.5 text-base font-normal text-[#1b2c38]/80">
            <Link
              to="/"
              className="text-[#1b2c38]/80 hover:text-[#09c7ca] no-underline transition-colors border-b border-transparent hover:border-[#09c7ca]"
            >
              Homepage
            </Link>
            <span className="text-[#1b2c38]/40">&bull;</span>
            <span>Blogs</span>
          </div>
        </div>
      </section>

      {/* 2. Blog Posts Grid */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Blogs grid"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <div
              className={`text-center home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            >
              <h2 className="m-0 text-[38px] leading-[1.16] font-black tracking-normal text-[#1a2b3c] max-[760px]:text-[30px]">
                Latest Articles & News
              </h2>
              {renderColorLine()}
            </div>

            {error ? (
              <div className="text-center mt-12 py-10 bg-red-50 border border-red-100 rounded-2xl">
                <p className="text-red-500 font-semibold text-lg">
                  Failed to load blogs. Please check your connection and try again.
                </p>
              </div>
            ) : isLoading ? (
              renderSkeletonGrid()
            ) : (
              <div
                className={`mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 home-animated-item ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                {blogsData?.data.map((blog) => {
                  const imageUrl = blog.blog_banner_image
                    ? `${blogBaseUrl}${blog.blog_banner_image}`
                    : "/images/portfolio/web1.png";

                  return (
                    <article
                      key={blog.id}
                      className="group overflow-hidden border border-slate-100 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                      {/* Image Zoom Container */}
                      <Link
                        to={`/blogs/${blog.blog_slug}`}
                        className="relative aspect-[3/2] overflow-hidden bg-slate-50"
                      >
                        <img
                          src={imageUrl}
                          alt={blog.blog_banner_image_alt || blog.blog_title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-4 left-4 bg-[#09c7ca] text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                          {blog.categories || "Article"}
                        </span>
                      </Link>

                      {/* Content Card Body */}
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-[13px] text-[#7a8894] font-medium">
                          {blog.blog_created_date} &bull; By {blog.created_by || "Admin"}
                        </span>
                        
                        <h3 className="m-0 mt-3 text-xl font-bold leading-snug tracking-tight text-[#1b2c38] group-hover:text-[#09c7ca] transition-colors duration-300">
                          <Link
                            to={`/blogs/${blog.blog_slug}`}
                            className="text-inherit no-underline"
                          >
                            {blog.blog_title}
                          </Link>
                        </h3>

                        <p className="m-0 mt-3.5 text-[14.5px] leading-relaxed text-[#4f5a62] font-normal flex-1 line-clamp-3">
                          {blog.blog_short_description}
                        </p>

                        <div className="pt-5 mt-5 border-t border-slate-50 flex items-center">
                          <Link
                            to={`/blogs/${blog.blog_slug}`}
                            className="text-[14.5px] font-bold text-[#1b2c38] group-hover:text-[#09c7ca] transition-colors no-underline inline-flex items-center gap-1.5"
                          >
                            Read Article{" "}
                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                              &rarr;
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </AnimatedSection>
    </>
  );
}
