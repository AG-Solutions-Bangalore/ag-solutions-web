import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogItem } from "../types/blog.types";

interface BlogDetailNavigationProps {
  previous: Partial<BlogItem> | null;
  next: Partial<BlogItem> | null;
}

export default function BlogDetailNavigation({ previous, next }: BlogDetailNavigationProps) {
  if (!previous && !next) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 pt-8 border-t border-border">
      {previous?.blog_slug ? (
        <Link
          to={`/blogs/${previous.blog_slug}`}
          title={previous.blog_title || "Previous Story"}
          aria-label={previous.blog_title || "Previous Story"}
          className="p-5 sm:p-6 rounded-3xl border border-border bg-card hover:border-teal/60 hover:shadow-lg transition-all group flex flex-col justify-between no-underline"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted group-hover:text-teal mb-2.5">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Previous Story</span>
          </div>
          <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-teal transition-colors line-clamp-2 leading-snug">
            {previous.blog_title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next?.blog_slug ? (
        <Link
          to={`/blogs/${next.blog_slug}`}
          title={next.blog_title || "Next Story"}
          aria-label={next.blog_title || "Next Story"}
          className="p-5 sm:p-6 rounded-3xl border border-border bg-card hover:border-pink/60 hover:shadow-lg transition-all group flex flex-col justify-between items-end text-right no-underline"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted group-hover:text-pink mb-2.5">
            <span>Next Story</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
          <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-pink transition-colors line-clamp-2 leading-snug">
            {next.blog_title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
