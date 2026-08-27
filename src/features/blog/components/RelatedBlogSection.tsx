import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { useBlogsByCategory } from "../hooks/useBlogsByCategory";
import BlogCard from "./BlogCard";

const FALLBACK_BLOG_BASE_URL =
  "https://ag-solutions.in/webapi/public/assets/images/blog_images/";

export interface RelatedBlogSectionProps {
  /** Pre-title badge text (e.g. "RELATED INSIGHTS"). */
  eyebrow?: string;
  /** Main heading (rendered before the highlight). */
  title: string;
  /** Highlighted part of the heading (rendered in pink). */
  titleHighlight?: string;
  /** Optional supporting copy below the heading. */
  subtitle?: string;
  /**
   * Blog categories to filter by, in priority order.
   * The section is hidden entirely if no blogs match.
   */
  categories: string[];
  /** Total posts to display. Default 3. */
  maxItems?: number;
  /** Route for the "View all articles" link. Default "/blogs". */
  viewAllHref?: string;
}

/**
 * Reusable "Related Insights" blog section for service and product pages.
 *
 * Renders:
 *  - Section header (sparkle badge + bold heading + 4-color pill underline + subtitle)
 *  - 3-card grid (reuses <BlogCard />) — matches the featured-stories layout
 *  - "View all" link
 *
 * Reuses the existing `getBlogs` API and `useBlogs` query cache, so
 * multiple pages calling this section share a single network request.
 * Filtering by category is done client-side because the upstream API
 * does not support category query parameters.
 *
 * The section renders nothing (returns `null`) when:
 *  - The query is loading (avoids layout shift)
 *  - The query errors out
 *  - No blogs match the requested categories
 */
export function RelatedBlogSection({
  eyebrow = "RELATED INSIGHTS",
  title,
  titleHighlight,
  subtitle,
  categories,
  maxItems = 3,
  viewAllHref = "/blogs",
}: RelatedBlogSectionProps) {
  const { data: blogs, isLoading, error, hasResults } = useBlogsByCategory({
    categories,
    maxItems,
  });

  // Don't render anything until we know whether we have results.
  // Hiding during loading prevents layout shift and empty-state flashes.
  if (isLoading || error || !hasResults) {
    return null;
  }

  return (
    <section
      className="bg-section-alt py-12 sm:py-16 border-t border-border transition-colors duration-200"
      aria-label={`${title}${titleHighlight ? " " + titleHighlight : ""} - Related Articles`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal">
                <Sparkles className="h-3.5 w-3.5 text-yellow" />
                <span>{eyebrow}</span>
              </div>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                {title}
                {titleHighlight && (
                  <>
                    {" "}
                    <span className="text-pink">{titleHighlight}</span>
                  </>
                )}
              </h2>
              {/* 4-Color Pill Underline */}
              <div className="mt-2.5 flex items-center justify-center sm:justify-start gap-1">
                <span className="h-1 w-6 rounded-full bg-teal" />
                <span className="h-1 w-6 rounded-full bg-pink" />
                <span className="h-1 w-6 rounded-full bg-yellow" />
                <span className="h-1 w-6 rounded-full bg-green" />
              </div>
              {subtitle && (
                <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto sm:mx-0">
                  {subtitle}
                </p>
              )}
            </div>

            <Link
              to={viewAllHref}
              title="View all articles"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pink hover:text-teal transition-colors no-underline self-center sm:self-end whitespace-nowrap"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </m.div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              imageBaseUrl={FALLBACK_BLOG_BASE_URL}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedBlogSection;
