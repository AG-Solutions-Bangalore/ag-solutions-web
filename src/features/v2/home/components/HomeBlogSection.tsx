import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { useFrontBlogs, useFeaturedBlogs } from "@/features/v1/blog/hooks/useBlogs";
import { formatDate } from "@/utils/formatDate";

// Fallback curated articles in case API is offline or returns empty
const fallbackBlogPosts = [
  {
    id: 1,
    title: "How Custom Web Applications Accelerate Modern Business Growth",
    excerpt:
      "Explore how scalable architecture, modern frameworks, and responsive UX drive customer retention and operational efficiency.",
    category: "Web Development",
    date: "Aug 12, 2026",
    readTime: "5 min read",
    tagColor: "bg-teal/15 text-teal border-teal/30",
    image: "/images/ag-sl-desk.png",
    link: "/blogs",
  },
  {
    id: 2,
    title: "Cross-Platform Mobile App Strategies for Startups and Enterprises",
    excerpt:
      "A comprehensive guide to choosing between Flutter, React Native, and native development to optimize time-to-market and cost.",
    category: "Mobile Apps",
    date: "Aug 05, 2026",
    readTime: "6 min read",
    tagColor: "bg-pink/15 text-pink border-pink/30",
    image: "/images/laptop.png",
    link: "/blogs",
  },
  {
    id: 3,
    title: "Eliminating Paperwork: The Future of Automated Export Documentation",
    excerpt:
      "How digital ecosystems and compliant software workflows save 80% time and eliminate repetitive data entry for global traders.",
    category: "Automation",
    date: "Jul 28, 2026",
    readTime: "4 min read",
    tagColor: "bg-green/15 text-green border-green/30",
    image: "/images/exportbiz/ship.png",
    link: "/blogs",
  },
];

const categoryColorMap: Record<string, string> = {
  "Web Development": "bg-teal/15 text-teal border-teal/30",
  "Website": "bg-teal/15 text-teal border-teal/30",
  "Mobile Apps": "bg-pink/15 text-pink border-pink/30",
  "Mobile App": "bg-pink/15 text-pink border-pink/30",
  "Automation": "bg-green/15 text-green border-green/30",
  "Digital Marketing": "bg-yellow/15 text-yellow border-yellow/30",
};

interface HomeBlogSectionProps {
  source?: "front" | "featured";
  maxPosts?: number;
}

export function HomeBlogSection({ source = "front", maxPosts = 3 }: HomeBlogSectionProps) {
  const frontQuery = useFrontBlogs();
  const featuredQuery = useFeaturedBlogs();

  const activeQuery = source === "featured" ? featuredQuery : frontQuery;
  const { data: blogsData, isLoading } = activeQuery;

  const blogBaseUrl =
    blogsData?.image_url?.find((img) => img.image_for === "Blog")?.image_url ||
    "https://ag-solutions.in/webapi/public/assets/images/blog_images/";

  // Map dynamic API items or fallback
  const dynamicPosts = blogsData?.data && blogsData.data.length > 0
    ? blogsData.data.slice(0, maxPosts).map((item, idx) => {
        const tagColors = [
          "bg-teal/15 text-teal border-teal/30",
          "bg-pink/15 text-pink border-pink/30",
          "bg-green/15 text-green border-green/30",
        ];
        const categoryName = item.categories || "Technology";
        const tagColor = categoryColorMap[categoryName] || tagColors[idx % tagColors.length];

        return {
          id: item.id,
          title: item.blog_title,
          excerpt: item.blog_short_description || item.blog_meta_description,
          category: categoryName,
          date: item.blog_created_date ? formatDate(item.blog_created_date) : "Recent",
          readTime: "5 min read",
          tagColor,
          image: item.blog_banner_image ? `${blogBaseUrl}${item.blog_banner_image}` : "/images/ag-sl-desk.png",
          link: item.blog_slug ? `/blog/${item.blog_slug}` : "/blogs",
        };
      })
    : null;

  const displayPosts = dynamicPosts || fallbackBlogPosts;

  return (
    <section className="bg-section-alt py-10 sm:py-14 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink">
              <span>· · ·</span>
              <span>LATEST INSIGHTS</span>
              <span>· · ·</span>
            </div>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-4xl">
              From Our Tech &amp; Business Blog
            </h2>
            {/* 4-Color Underline Accent */}
            <div className="mt-2.5 flex items-center gap-1">
              <span className="h-1 w-6 rounded-full bg-teal" />
              <span className="h-1 w-6 rounded-full bg-pink" />
              <span className="h-1 w-6 rounded-full bg-yellow" />
              <span className="h-1 w-6 rounded-full bg-green" />
            </div>
          </motion.div>

          <Link
            to="/blogs"
            title="View all blog articles"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal hover:text-pink transition-colors no-underline group self-start sm:self-auto"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-border bg-card overflow-hidden">
                <div className="aspect-[16/9] w-full bg-muted/20" />
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex gap-3">
                    <div className="h-3.5 bg-muted/20 rounded w-1/4" />
                    <div className="h-3.5 bg-muted/20 rounded w-1/4" />
                  </div>
                  <div className="h-5 bg-muted/20 rounded w-5/6" />
                  <div className="h-3.5 bg-muted/15 rounded w-full" />
                  <div className="h-3.5 bg-muted/15 rounded w-2/3" />
                  <div className="h-4 bg-muted/20 rounded w-1/3 pt-2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Dynamic Blog Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xs hover:shadow-xl hover:border-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Cover */}
                  <Link
                    to={post.link}
                    title={post.title}
                    aria-label={post.title}
                    className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      title={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/ag-sl-desk.png";
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border ${post.tagColor}`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Article Content */}
                  <div className="p-5 sm:p-6">
                    {/* Meta: Date & Read Time */}
                    <div className="flex items-center gap-3.5 text-xs text-muted font-medium mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-teal" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-pink" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-dark group-hover:text-pink transition-colors duration-200 line-clamp-2 leading-snug">
                      <Link to={post.link} title={post.title} className="text-inherit no-underline">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-muted font-normal line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom Read More Action */}
                <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-border/60 flex items-center justify-between">
                  <Link
                    to={post.link}
                    title={post.title}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal group-hover:text-pink transition-colors no-underline"
                  >
                    <span>Read Full Article</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeBlogSection;
