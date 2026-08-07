import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFeaturedBlogs, useFrontBlogs } from "../hooks/useBlogs";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { SectionTitle } from "@/components/layout";

interface BlogCarouselProps {
  type: "featured" | "front";
  title: string;
  subtitle?: string;
  bgClass?: string;
  limit?: number;
}

export function BlogCarousel({
  type,
  title,
  subtitle,
  bgClass = "bg-white",
  limit = 8,
}: BlogCarouselProps) {
  const featuredQuery = useFeaturedBlogs();
  const frontQuery = useFrontBlogs();

  const { data: blogsData, isLoading, error } =
    type === "featured" ? featuredQuery : frontQuery;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blogs = (blogsData?.data || []).slice(0, limit);
  const maxIndex = Math.max(0, blogs.length - itemsPerView);

  // Guard active slide bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const blogBaseUrl =
    blogsData?.image_url.find((img) => img.image_for === "Blog")?.image_url ||
    "https://ag-solutions.in/webapi/public/assets/images/blog_images/";

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (distance < -minSwipeDistance) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  if (error) {
    return (
      <section className={`${bgClass} py-10 border-t border-slate-100 text-[#1b2c38]`}>
        <div className={layoutContainerClass}>
          <div className="text-center py-6 bg-red-50 border border-red-100 rounded">
            <p className="text-red-500 font-semibold">
              Failed to load blogs. Please check your connection and try again.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!isLoading && blogs.length === 0) {
    return null;
  }

  const renderSkeleton = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="animate-pulse border border-slate-100/80 bg-white">
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
  };

  return (
    <AnimatedSection
      className={`relative overflow-hidden ${bgClass} py-15 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14`}
      ariaLabel={`${title} blog carousel`}
    >
      {(isVisible) => (
        <div className={layoutContainerClass}>
          {/* Header row */}
          <div
            className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 home-animated-item ${
              isVisible ? "home-animated-item-visible" : ""
            }`}
          >
            <div>
              <SectionTitle
                title={title}
                align="left"
                titleClassName="text-[38px] leading-tight font-black text-[#1a2b3c] max-[760px]:text-[30px]"
              />
              {subtitle && (
                <p className="mt-4 text-base text-[#4f5a62] font-normal leading-relaxed max-w-[600px]">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Slider controls */}
            {blogs.length > itemsPerView && !isLoading && (
              <div className="flex gap-2.5 self-start sm:self-end">
                <button
                  type="button"
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="group/btn flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#4f5a62] hover:bg-[#09c7ca] hover:text-white hover:border-[#09c7ca] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
                  }
                  disabled={currentIndex === maxIndex}
                  className="group/btn flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#4f5a62] hover:bg-[#09c7ca] hover:text-white hover:border-[#09c7ca] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {isLoading ? (
            renderSkeleton()
          ) : (
            <>
              {/* Carousel Viewport */}
              <div
                className={`overflow-hidden relative w-full mt-10 home-animated-item ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "100ms" }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translate3d(-${
                      currentIndex * (100 / blogs.length)
                    }%, 0, 0)`,
                    width: `${(blogs.length / itemsPerView) * 100}%`,
                  }}
                >
                  {blogs.map((blog) => {
                    const imageUrl = blog.blog_banner_image
                      ? `${blogBaseUrl}${blog.blog_banner_image}`
                      : "/images/portfolio/web1.png";

                    return (
                      <div
                        key={blog.id}
                        style={{ width: `${100 / blogs.length}%` }}
                        className="px-4 shrink-0 flex flex-col"
                      >
                        <article className="group overflow-hidden border border-slate-100/80 bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full rounded-none">
                          <Link
                            to={`/blogs/${blog.blog_slug}`}
                            className="relative aspect-[3/2] overflow-hidden bg-slate-50 block"
                          >
                            <img
                              src={imageUrl}
                              alt={blog.blog_banner_image_alt || blog.blog_title}
                              loading="lazy"
                              className="h-auto w-auto  object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <span className="absolute top-4 left-4 bg-[#09c7ca] text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                              {blog.categories || "Article"}
                            </span>
                          </Link>

                          <div className="p-6 flex flex-col flex-1">
                            <span className="text-[13px] text-[#7a8894] font-medium">
                              {blog.blog_created_date} &bull; By{" "}
                              {blog.created_by || "Admin"}
                            </span>

                            <h3 className="m-0 mt-3 text-lg font-bold leading-snug tracking-tight text-[#1b2c38] group-hover:text-[#09c7ca] transition-colors duration-300 line-clamp-2 min-h-[56px]">
                              <Link
                                to={`/blogs/${blog.blog_slug}`}
                                className="text-inherit no-underline"
                              >
                                {blog.blog_title}
                              </Link>
                            </h3>

                            <p className="m-0 mt-3 text-[14px] leading-relaxed text-[#4f5a62] font-normal flex-1 line-clamp-3">
                              {blog.blog_short_description}
                            </p>

                            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center">
                              <Link
                                to={`/blogs/${blog.blog_slug}`}
                                className="text-[14px] font-bold text-[#1b2c38] group-hover:text-[#09c7ca] transition-colors no-underline inline-flex items-center gap-1.5"
                              >
                                Read Article{" "}
                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                  &rarr;
                                </span>
                              </Link>
                            </div>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Slider Dots */}
              {maxIndex > 0 && (
                <div
                  className={`flex justify-center gap-2 mt-8 home-animated-item ${
                    isVisible ? "home-animated-item-visible" : ""
                  }`}
                  style={{ transitionDelay: "150ms" }}
                >
                  {Array.from({ length: maxIndex + 1 }).map((_, slideIdx) => (
                    <button
                      key={slideIdx}
                      type="button"
                      onClick={() => setCurrentIndex(slideIdx)}
                      aria-label={`View slide ${slideIdx + 1}`}
                      className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                        currentIndex === slideIdx
                          ? "bg-[#09c7ca] w-6"
                          : "bg-slate-300 w-2 hover:bg-[#09c7ca]/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </AnimatedSection>
  );
}

export default BlogCarousel;
