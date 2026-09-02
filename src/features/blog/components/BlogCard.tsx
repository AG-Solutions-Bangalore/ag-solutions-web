import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight, User } from "lucide-react";
import type { BlogItem } from "../types/blog.types";
import { formatDate } from "@/utils/formatDate";
import { getImageUrl } from "@/utils/imageUrl";

interface BlogCardProps {
  blog: BlogItem;
  imageBaseUrl: string;
  index?: number;
}

const categoryStyles: Record<string, { badge: string; textHover: string }> = {
  "Mobile App": {
    badge: "bg-pink/15 text-pink border-pink/30",
    textHover: "group-hover:text-pink",
  },
  "Mobile Apps": {
    badge: "bg-pink/15 text-pink border-pink/30",
    textHover: "group-hover:text-pink",
  },
  "Website": {
    badge: "bg-teal/15 text-teal border-teal/30",
    textHover: "group-hover:text-teal",
  },
  "Web Development": {
    badge: "bg-teal/15 text-teal border-teal/30",
    textHover: "group-hover:text-teal",
  },
  "Digital Marketing": {
    badge: "bg-yellow/15 text-yellow border-yellow/30",
    textHover: "group-hover:text-yellow",
  },
  "Automation": {
    badge: "bg-green/15 text-green border-green/30",
    textHover: "group-hover:text-green",
  },
};

export function estimateReadTime(text?: string): string {
  if (!text) return "3 min read";
  const words = text.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function BlogCard({ blog, imageBaseUrl, index = 0 }: BlogCardProps) {
  const categoryName = blog.categories || "Article";
  const catStyle = categoryStyles[categoryName] || {
    badge: "bg-teal/15 text-teal border-teal/30",
    textHover: "group-hover:text-teal",
  };

  const imageUrl = blog.blog_banner_image
    ? `${imageBaseUrl}${blog.blog_banner_image}`
    : getImageUrl("/images/laptop.webp");

  const postUrl = blog.blog_slug ? `/blogs/${blog.blog_slug}` : "/blogs";
  const readTime = estimateReadTime(blog.blog_description || blog.blog_short_description);

  return (
    <m.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.08 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-2xs hover:shadow-xl hover:border-pink/40 hover:-translate-y-1 transition-all duration-300 h-full"
    >
      <div>
        {/* Banner Image Container */}
        <Link
          to={postUrl}
          title={blog.blog_title}
          aria-label={blog.blog_title}
          className="relative block aspect-[16/10] w-full overflow-hidden bg-muted/10"
        >
          <img
            src={imageUrl}
            alt={blog.blog_banner_image_alt || blog.blog_title}
            title={blog.blog_title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = getImageUrl("/images/laptop.webp");
            }}
          />
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border ${catStyle.badge}`}
            >
              {categoryName}
            </span>
          </div>
        </Link>

        {/* Card Content Body */}
        <div className="p-5 sm:p-6">
          {/* Meta Info: Date & Read Time */}
          <div className="flex items-center gap-3.5 text-xs text-muted font-medium mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-teal" />
              {formatDate(blog.blog_created_date)}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-pink" />
              {readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-teal transition-colors duration-200 line-clamp-2 leading-snug">
            <Link to={postUrl} title={blog.blog_title} className="text-inherit no-underline">
              {blog.blog_title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-muted font-normal line-clamp-3 leading-relaxed">
            {blog.blog_short_description || blog.blog_meta_description}
          </p>
        </div>
      </div>

      {/* Card Footer: Author & Read CTA */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-border/70 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2 text-xs text-muted font-medium">
          <div className="h-6 w-6 rounded-full bg-teal/15 text-teal flex items-center justify-center font-bold text-[10px]">
            <User className="h-3.5 w-3.5" />
          </div>
          <span className="truncate max-w-[110px] text-foreground font-semibold">{blog.created_by || "Admin"}</span>
        </div>

        <Link
          to={postUrl}
          title={blog.blog_title}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-pink group-hover:text-teal transition-colors no-underline"
        >
          <span>Read Story</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </m.article>
  );
}
