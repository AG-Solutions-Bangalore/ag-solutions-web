import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Sparkles, User, Bookmark } from "lucide-react";
import type { BlogItem } from "../types/blog.types";
import { formatDate } from "@/utils/formatDate";
import { estimateReadTime } from "./BlogCard";

interface BlogFeaturedHeroProps {
  blog: BlogItem;
  imageBaseUrl: string;
}

export default function BlogFeaturedHero({ blog, imageBaseUrl }: BlogFeaturedHeroProps) {
  const imageUrl = blog.blog_banner_image
    ? `${imageBaseUrl}${blog.blog_banner_image}`
    : "/images/laptop.png";

  const postUrl = blog.blog_slug ? `/blogs/${blog.blog_slug}` : "/blogs";
  const readTime = estimateReadTime(blog.blog_description || blog.blog_short_description);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-6 sm:pt-8 sm:pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg hover:shadow-2xl hover:border-pink/40 transition-all duration-300 group"
      >
        {/* Ambient Top Glow in Card */}
        <div className="pointer-events-none absolute top-0 right-1/4 -z-0 h-48 w-48 rounded-full bg-pink/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 -z-0 h-48 w-48 rounded-full bg-teal/10 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
          {/* Left/Top: Image Banner */}
          <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] lg:aspect-auto min-h-[280px] lg:min-h-[400px] bg-muted/10">
            <Link to={postUrl} title={blog.blog_title} aria-label={blog.blog_title} className="block w-full h-full">
              <img
                src={imageUrl}
                alt={blog.blog_banner_image_alt || blog.blog_title}
                title={blog.blog_title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/laptop.png";
                }}
              />
            </Link>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden pointer-events-none" />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-pink to-pink-hover text-white shadow-md">
                <Sparkles className="h-3.5 w-3.5 text-yellow" />
                Featured Story
              </span>
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
                {blog.categories || "Engineering"}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 hidden sm:block pointer-events-none">
              <span className="p-2 rounded-full bg-black/40 text-white/90 backdrop-blur-md border border-white/15 inline-flex items-center justify-center">
                <Bookmark className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Right/Bottom: Article Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-card">
            <div>
              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-3.5 text-xs sm:text-sm text-muted font-medium mb-3.5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-teal" />
                  {formatDate(blog.blog_created_date)}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-pink" />
                  {readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground group-hover:text-teal transition-colors duration-300 leading-snug">
                <Link to={postUrl} title={blog.blog_title} className="text-inherit no-underline">
                  {blog.blog_title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-muted font-normal line-clamp-3 lg:line-clamp-4">
                {blog.blog_short_description || blog.blog_meta_description}
              </p>
            </div>

            {/* Author and CTA */}
            <div className="mt-8 pt-6 border-t border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal/20 to-pink/20 text-teal flex items-center justify-center font-bold border border-teal-border/40">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">{blog.created_by || "AG Editorial Team"}</p>
                  <p className="text-[11px] text-muted">Author &amp; Technology Strategist</p>
                </div>
              </div>

              {/* Theme-safe, High-impact CTA Button */}
              <Link
                to={postUrl}
                title={blog.blog_title}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white hover:shadow-lg hover:shadow-pink/25 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold text-xs sm:text-sm no-underline group/btn shadow-md border-none cursor-pointer"
              >
                <span>Read Full Article</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
