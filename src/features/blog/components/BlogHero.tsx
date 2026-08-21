import { motion } from "framer-motion";
import { Search, Sparkles, X } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  totalPostsCount: number;
}

export default function BlogHero({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategorySelect,
  totalPostsCount,
}: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-10 sm:pt-12 sm:pb-14 transition-colors duration-200 border-b border-border">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-[380px] w-[600px] rounded-full bg-teal-light/50 blur-3xl dark:bg-teal/10 animate-pulse" />
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-pink-light/40 blur-3xl dark:bg-pink/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full border border-teal-border/40 mb-4 dark:bg-teal/15 dark:border-teal/30"
          >
            <Sparkles className="h-3.5 w-3.5 text-yellow" />
            <span>AG SOLUTIONS INSIGHTS</span>
            <Sparkles className="h-3.5 w-3.5 text-yellow" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
          >
            Insights, Trends &amp; <span className="text-pink">Engineering Guides</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3.5 text-sm sm:text-base md:text-lg leading-relaxed text-muted max-w-2xl mx-auto"
          >
            Explore thought leadership, software architecture patterns, UI/UX breakdowns, and digital growth strategies from our engineering experts.
          </motion.p>

          {/* Search Input Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 max-w-xl mx-auto relative"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search articles by title, keyword, or category..."
                className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-full bg-card border border-border text-foreground text-sm sm:text-base shadow-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all placeholder:text-muted/70"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className="absolute right-3.5 p-1.5 rounded-full text-muted hover:text-foreground hover:bg-muted/10 transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Categories Pill Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          >
            <button
              type="button"
              onClick={() => onCategorySelect("All")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer border ${
                selectedCategory === "All"
                  ? "bg-gradient-to-r from-pink to-pink-hover text-white border-pink shadow-md scale-105"
                  : "bg-card text-muted border-border hover:border-pink/40 hover:text-foreground"
              }`}
            >
              All Articles ({totalPostsCount})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onCategorySelect(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-teal text-white border-teal shadow-md scale-105 dark:bg-teal dark:text-white"
                    : "bg-card text-muted border-border hover:border-teal/40 hover:text-teal"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
