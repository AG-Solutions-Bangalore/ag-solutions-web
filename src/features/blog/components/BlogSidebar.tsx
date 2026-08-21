import { Link } from "react-router-dom";
import { Search, Flame, Tag, ExternalLink, Calendar } from "lucide-react";
import type { BlogItem, SponsorItem } from "../types/blog.types";
import { formatDate } from "@/utils/formatDate";

interface BlogSidebarProps {
  featuredBlogs?: BlogItem[];
  sponsors?: SponsorItem[];
  blogBaseUrl: string;
  sponsorBaseUrl: string;
  categoriesWithCounts?: { name: string; count: number }[];
  activeCategory?: string;
  onCategorySelect?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function BlogSidebar({
  featuredBlogs = [],
  sponsors = [],
  blogBaseUrl,
  sponsorBaseUrl,
  categoriesWithCounts = [],
  activeCategory,
  onCategorySelect,
  searchQuery,
  onSearchChange,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* 1. Search Box Widget */}
      {onSearchChange !== undefined && (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
          <h4 className="text-base font-extrabold text-foreground tracking-tight mb-4 flex items-center gap-2">
            <Search className="h-4 w-4 text-teal" />
            <span>Search Articles</span>
          </h4>
          <div className="relative">
            <input
              type="text"
              value={searchQuery || ""}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Type keywords..."
              className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all placeholder:text-muted/70"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" />
          </div>
        </div>
      )}

      {/* 2. Categories Widget */}
      {categoriesWithCounts.length > 0 && onCategorySelect && (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
          <h4 className="text-base font-extrabold text-foreground tracking-tight mb-4 flex items-center gap-2">
            <Tag className="h-4 w-4 text-pink" />
            <span>Categories</span>
          </h4>
          <div className="space-y-1.5">
            <button
              type="button"
              onClick={() => onCategorySelect("All")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-left cursor-pointer ${
                activeCategory === "All"
                  ? "bg-teal/15 text-teal font-bold"
                  : "text-muted hover:bg-muted/10 hover:text-foreground"
              }`}
            >
              <span>All Categories</span>
            </button>
            {categoriesWithCounts.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => onCategorySelect(cat.name)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-left cursor-pointer ${
                  activeCategory === cat.name
                    ? "bg-teal/15 text-teal font-bold"
                    : "text-muted hover:bg-muted/10 hover:text-foreground"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted/15 text-muted font-bold">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3. Featured / Trending Posts Widget */}
      {featuredBlogs.length > 0 && (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
          <h4 className="text-base font-extrabold text-foreground tracking-tight mb-5 flex items-center gap-2">
            <Flame className="h-4 w-4 text-yellow" />
            <span>Trending Stories</span>
          </h4>
          <div className="space-y-4">
            {featuredBlogs.slice(0, 4).map((featBlog) => {
              const featImageUrl = featBlog.blog_banner_image
                ? `${blogBaseUrl}${featBlog.blog_banner_image}`
                : "/images/laptop.png";
              const featUrl = featBlog.blog_slug ? `/blogs/${featBlog.blog_slug}` : "/blogs";

              return (
                <div key={featBlog.id} className="flex gap-3.5 items-start group">
                  <Link
                    to={featUrl}
                    title={featBlog.blog_title}
                    aria-label={featBlog.blog_title}
                    className="shrink-0 w-20 h-16 overflow-hidden rounded-2xl bg-muted/10 border border-border/50"
                  >
                    <img
                      src={featImageUrl}
                      alt={featBlog.blog_title}
                      title={featBlog.blog_title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/laptop.png";
                      }}
                    />
                  </Link>
                  <div className="space-y-1 min-w-0">
                    <span className="flex items-center gap-1 text-[11px] text-muted font-medium">
                      <Calendar className="h-3 w-3 text-teal" />
                      {formatDate(featBlog.blog_created_date)}
                    </span>
                    <h5 className="m-0 text-xs sm:text-sm font-bold text-foreground group-hover:text-teal transition-colors line-clamp-2 leading-snug">
                      <Link to={featUrl} title={featBlog.blog_title} className="text-inherit no-underline">
                        {featBlog.blog_title}
                      </Link>
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Sponsors Grid Widget */}
      {sponsors.length > 0 && (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
          <h4 className="text-base font-extrabold text-foreground tracking-tight mb-4 flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-green" />
            <span>Featured Partners</span>
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {sponsors.map((sponsor, idx) => {
              const isAbsoluteUrl =
                sponsor.sponsors_url &&
                (sponsor.sponsors_url.startsWith("http://") ||
                  sponsor.sponsors_url.startsWith("https://"));
              const sponsorLink = isAbsoluteUrl && sponsor.sponsors_url ? sponsor.sponsors_url : "#";

              const sImgUrl =
                sponsor.sponsors_image.startsWith("http://") ||
                sponsor.sponsors_image.startsWith("https://")
                  ? sponsor.sponsors_image
                  : `${sponsorBaseUrl}${sponsor.sponsors_image}`;

              return (
                <a
                  key={idx}
                  href={sponsorLink}
                  target={isAbsoluteUrl ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-2xl bg-background border border-border hover:border-teal hover:shadow-md transition-all group aspect-[4/3] overflow-hidden"
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
  );
}
