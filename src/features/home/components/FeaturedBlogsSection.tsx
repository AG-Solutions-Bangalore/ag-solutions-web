import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { useFeaturedBlogs } from "@/features/blog/hooks/useBlogs";


import { formatDate } from "@/utils/formatDate";

// Fallback featured posts
const fallbackFeaturedPosts = [
  {
    id: 16,
    title: "Why Mobile Apps Improve Customer Experience",
    excerpt: "A fast, intuitive mobile app helps keep customers engaged for longer and builds brand loyalty.",
    category: "Mobile App",
    date: "Dec 18, 2025",
    readTime: "5 min read",
    tagColor: "bg-pink/15 text-pink border-pink/30",
    image: "/images/laptop.webp",
    link: "/blogs",
  },
  {
    id: 17,
    title: "How Mobile Apps Build Stronger Customer Loyalty",
    excerpt: "Customers love seeing personalized recommendations and streamlined checkouts tailored to them.",
    category: "Mobile App",
    date: "Dec 18, 2025",
    readTime: "6 min read",
    tagColor: "bg-teal/15 text-teal border-teal/30",
    image: "/images/ag-sl-desk.webp",
    link: "/blogs",
  },
  {
    id: 18,
    title: "Why Mobile Apps Are Better Than Websites for Engagement",
    excerpt: "Native apps load faster, send push alerts, and provide offline capability to drive retention.",
    category: "Mobile App",
    date: "Dec 18, 2025",
    readTime: "4 min read",
    tagColor: "bg-yellow/15 text-yellow border-yellow/30",
    image: "/images/MA.webp",
    link: "/blogs",
  },
];

const categoryColorMap: Record<string, string> = {
  "Mobile App": "bg-pink/15 text-pink border-pink/30",
  "Mobile Apps": "bg-pink/15 text-pink border-pink/30",
  "Website": "bg-teal/15 text-teal border-teal/30",
  "Web Development": "bg-teal/15 text-teal border-teal/30",
  "Automation": "bg-green/15 text-green border-green/30",
  "Digital Marketing": "bg-yellow/15 text-yellow border-yellow/30",
};

export function FeaturedBlogsSection() {
  const { data: blogsData, isLoading } = useFeaturedBlogs();

  const blogBaseUrl =
    blogsData?.image_url?.find((img) => img.image_for === "Blog")?.image_url ||
    "https://ag-solutions.in/webapi/public/assets/images/blog_images/";

  const dynamicPosts =
    blogsData?.data && blogsData.data.length > 0
      ? blogsData.data.slice(0, 3).map((item, idx) => {
          const tagColors = [
            "bg-pink/15 text-pink border-pink/30",
            "bg-teal/15 text-teal border-teal/30",
            "bg-yellow/15 text-yellow border-yellow/30",
          ];
          const categoryName = item.categories || "Featured";
          const tagColor = categoryColorMap[categoryName] || tagColors[idx % tagColors.length];

          return {
            id: item.id,
            title: item.blog_title,
            excerpt: item.blog_short_description || item.blog_meta_description,
            category: categoryName,
            date: item.blog_created_date ? formatDate(item.blog_created_date) : "Recent",
            readTime: "5 min read",
            tagColor,
            image: item.blog_banner_image
              ? `${blogBaseUrl}${item.blog_banner_image}`
              : "/images/laptop.webp",
            link: item.blog_slug ? `/blog/${item.blog_slug}` : "/blogs",
          };
        })
      : null;

  const displayPosts = dynamicPosts || fallbackFeaturedPosts;

  return (
    <section className="bg-background py-10 sm:py-14 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal">
              <Sparkles className="h-3.5 w-3.5 text-yellow" />
              <span>FEATURED ARTICLES</span>
              <Sparkles className="h-3.5 w-3.5 text-yellow" />
            </div>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-4xl">
              Featured Tech &amp; Industry Stories
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
            title="Explore all featured stories"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-pink hover:text-teal transition-colors no-underline group self-start sm:self-auto"
          >
            <span>Explore All Stories</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl border border-border bg-card overflow-hidden"
              >
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
          /* Dynamic Featured Blog Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xs hover:shadow-xl hover:border-pink/40 transition-all duration-300 flex flex-col justify-between"
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
                        (e.target as HTMLImageElement).src = "/images/laptop.webp";
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

                    <h3 className="text-base sm:text-lg font-bold text-dark group-hover:text-teal transition-colors duration-200 line-clamp-2 leading-snug">
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
                    aria-label={`Read full story: ${post.title}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pink group-hover:text-teal transition-colors no-underline"
                  >
                    <span>Read Full Story</span>
                    <span className="sr-only">: {post.title}</span>
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

export default FeaturedBlogsSection;
