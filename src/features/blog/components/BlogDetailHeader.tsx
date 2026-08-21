import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  Share2,
  Check,
} from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { formatDate } from "@/utils/formatDate";
import { estimateReadTime } from "./BlogCard";
import type { BlogItem } from "../types/blog.types";

interface BlogDetailHeaderProps {
  blog: BlogItem;
  imageUrl: string;
}

export default function BlogDetailHeader({ blog, imageUrl }: BlogDetailHeaderProps) {
  const [copied, setCopied] = useState(false);
  const readTime = estimateReadTime(blog.blog_description || blog.blog_short_description);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(blog.blog_title);
  const shareUrlEncoded = encodeURIComponent(currentUrl);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <header className="mb-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
        <Link to="/" className="hover:text-teal transition-colors no-underline font-medium">
          Home
        </Link>
        <span>/</span>
        <Link to="/blogs" className="hover:text-teal transition-colors no-underline font-medium">
          Blogs
        </Link>
        <span>/</span>
        <span className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-xs">
          {blog.blog_title}
        </span>
      </nav>

      {/* Category Pill */}
      <div className="mb-4">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal border border-teal-border/40 dark:bg-teal/15 dark:border-teal/30">
          {blog.categories || "Article"}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
        {blog.blog_title}
      </h1>

      {/* Meta + Social Share Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-border mb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted font-medium">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-pink/15 text-pink flex items-center justify-center font-bold text-xs">
              <User className="h-4 w-4" />
            </div>
            <span className="text-foreground font-bold">{blog.created_by || "Admin"}</span>
          </div>
          <span className="hidden sm:inline">&bull;</span>
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

        {/* Social Share Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-muted mr-1 flex items-center gap-1">
            <Share2 className="h-3.5 w-3.5" />
            Share:
          </span>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrlEncoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card border border-border text-muted hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:scale-105 transition-all"
            title="Share on X / Twitter"
            aria-label="Share on X"
          >
            <FaTwitter className="h-3.5 w-3.5" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrlEncoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card border border-border text-muted hover:text-[#0A66C2] hover:border-[#0A66C2] hover:scale-105 transition-all"
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedinIn className="h-3.5 w-3.5" />
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrlEncoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card border border-border text-muted hover:text-[#25D366] hover:border-[#25D366] hover:scale-105 transition-all"
            title="Share on WhatsApp"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={handleCopyLink}
            className="px-3 py-1.5 rounded-full bg-card border border-border text-xs font-semibold text-muted hover:text-foreground hover:border-teal transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
            title="Copy URL"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green" />
                <span className="text-green font-bold">Copied!</span>
              </>
            ) : (
              <span>Copy Link</span>
            )}
          </button>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/10 aspect-[16/9] shadow-md">
        <img
          src={imageUrl}
          alt={blog.blog_banner_image_alt || blog.blog_title}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/laptop.png";
          }}
        />
      </div>
    </header>
  );
}
