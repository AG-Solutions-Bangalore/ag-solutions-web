import { useState, useMemo } from "react";
import SEO from "@/components/seo/SEO";
import { useBlogs } from "../hooks/useBlogs";
import BlogHero from "../components/BlogHero";
import BlogFeaturedHero from "../components/BlogFeaturedHero";
import BlogCard from "../components/BlogCard";
import { Sparkles, SearchX, RefreshCw, X, SlidersHorizontal } from "lucide-react";

export function BlogListPage() {
  const { data: blogsData, isLoading, error, refetch } = useBlogs();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"latest" | "oldest">("latest");
  const [visibleCount, setVisibleCount] = useState(9);

  const blogBaseUrl =
    blogsData?.image_url?.find((img) => img.image_for === "Blog")?.image_url ||
    "https://ag-solutions.in/webapi/public/assets/images/blog_images/";

  // Extract unique categories
  const categories = useMemo(() => {
    if (!blogsData?.data) return [];
    const set = new Set<string>();
    blogsData.data.forEach((b) => {
      if (b.categories && b.categories.trim()) {
        set.add(b.categories.trim());
      }
    });
    return Array.from(set);
  }, [blogsData?.data]);

  // Filtered & Sorted blogs
  const filteredBlogs = useMemo(() => {
    if (!blogsData?.data) return [];
    const list = blogsData.data.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        blog.categories?.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        blog.blog_title?.toLowerCase().includes(q) ||
        blog.blog_short_description?.toLowerCase().includes(q) ||
        blog.categories?.toLowerCase().includes(q) ||
        blog.created_by?.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "oldest") {
      return [...list].reverse();
    }
    return list;
  }, [blogsData?.data, selectedCategory, searchQuery, sortBy]);

  // Featured article is either explicitly featured or the top latest post
  const featuredBlog = useMemo(() => {
    if (!blogsData?.data || blogsData.data.length === 0) return null;
    const explicitFeatured = blogsData.data.find(
      (b) => b.blog_featured === "1" || b.blog_featured === "true"
    );
    return explicitFeatured || blogsData.data[0];
  }, [blogsData?.data]);

  // Remaining blogs for the grid (avoid duplicating featured if no search/filter active)
  const displayBlogs = useMemo(() => {
    if (searchQuery || selectedCategory !== "All") {
      return filteredBlogs;
    }
    if (featuredBlog) {
      return filteredBlogs.filter((b) => b.id !== featuredBlog.id);
    }
    return filteredBlogs;
  }, [filteredBlogs, searchQuery, selectedCategory, featuredBlog]);

  const visibleBlogs = displayBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < displayBlogs.length;

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setVisibleCount(9);
  };

  const hasActiveFilters = Boolean(searchQuery || selectedCategory !== "All");

  return (
    <>
      <SEO
        title="Tech & Business Insights Blog - AG Solutions"
        description="Explore the latest articles, engineering tutorials, software architecture patterns, and digital marketing insights from AG Solutions."
        keywords={[
          "AG Solutions blog",
          "tech insights",
          "software engineering articles",
          "mobile app development blog",
          "web development trends",
        ]}
      />

      <div className="bg-background min-h-screen text-foreground antialiased transition-colors duration-200">
        {/* 1. Hero with Search and Category filters */}
        <BlogHero
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setVisibleCount(9);
          }}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={(cat) => {
            setSelectedCategory(cat);
            setVisibleCount(9);
          }}
          totalPostsCount={blogsData?.data?.length || 0}
        />

        {/* 2. Top Spotlight Featured Post (Shown when no search/category filter active) */}
        {!searchQuery && selectedCategory === "All" && featuredBlog && !isLoading && !error && (
          <BlogFeaturedHero blog={featuredBlog} imageBaseUrl={blogBaseUrl} />
        )}

        {/* 3. Main Blog Grid Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {/* Section Header Controls & Active Filters */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal">
                <Sparkles className="h-3 w-3 text-yellow" />
                <span>{selectedCategory === "All" ? "EXPLORE ARTICLES" : selectedCategory}</span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {selectedCategory === "All" ? "All Engineering & Tech Articles" : `${selectedCategory} Insights`}
              </h2>
            </div>

            {/* Sort & Count Controls */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs text-muted font-medium">
                <SlidersHorizontal className="h-3.5 w-3.5 text-teal" />
                <span>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "latest" | "oldest")}
                  className="bg-transparent text-foreground font-bold focus:outline-none cursor-pointer"
                >
                  <option value="latest" className="bg-card text-foreground">Newest</option>
                  <option value="oldest" className="bg-card text-foreground">Oldest</option>
                </select>
              </div>

              <span className="text-xs sm:text-sm font-semibold text-muted">
                {displayBlogs.length} {displayBlogs.length === 1 ? "article" : "articles"}
              </span>
            </div>
          </div>

          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-8 p-3 rounded-2xl bg-card border border-border">
              <span className="text-xs font-bold text-muted">Active Filters:</span>
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-teal/15 text-teal border border-teal/30">
                  Category: {selectedCategory}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("All")}
                    className="hover:text-pink transition-colors cursor-pointer"
                    aria-label="Remove category filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-pink/15 text-pink border border-pink/30">
                  Search: &ldquo;{searchQuery}&rdquo;
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="hover:text-teal transition-colors cursor-pointer"
                    aria-label="Remove search filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-muted hover:text-pink transition-colors ml-auto cursor-pointer underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Loading Skeleton Grid */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-3xl border border-border bg-card overflow-hidden"
                >
                  <div className="aspect-[16/10] w-full bg-muted/20" />
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex gap-3">
                      <div className="h-3.5 bg-muted/20 rounded w-1/4" />
                      <div className="h-3.5 bg-muted/20 rounded w-1/4" />
                    </div>
                    <div className="h-5 bg-muted/20 rounded w-5/6" />
                    <div className="h-3.5 bg-muted/15 rounded w-full" />
                    <div className="h-3.5 bg-muted/15 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-16 px-6 rounded-3xl bg-pink-light/30 border border-pink-border/50 max-w-xl mx-auto dark:bg-pink/10">
              <h3 className="text-xl font-bold text-pink mb-2">Unable to Load Articles</h3>
              <p className="text-sm text-muted mb-6">
                We encountered an issue connecting to our article database. Please try again.
              </p>
              <button
                type="button"
                onClick={() => refetch()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink to-pink-hover text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer border-none"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Retry Connection</span>
              </button>
            </div>
          )}

          {/* Empty Results State */}
          {!isLoading && !error && visibleBlogs.length === 0 && (
            <div className="text-center py-16 px-6 rounded-3xl border border-border bg-card max-w-xl mx-auto shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-muted/10 text-muted flex items-center justify-center mx-auto mb-4">
                <SearchX className="h-7 w-7 text-pink" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">No Articles Found</h3>
              <p className="text-xs sm:text-sm text-muted mb-6 max-w-sm mx-auto">
                We couldn&apos;t find any articles matching your search query &ldquo;{searchQuery || selectedCategory}&rdquo;.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal to-teal-hover text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer border-none"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Cards Grid */}
          {!isLoading && !error && visibleBlogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleBlogs.map((blog, idx) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  imageBaseUrl={blogBaseUrl}
                  index={idx}
                />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {!isLoading && !error && hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-8 py-3.5 rounded-full bg-card border border-border text-foreground text-sm font-bold hover:border-teal hover:text-teal hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Load More Articles ({displayBlogs.length - visibleBlogs.length} remaining)
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default BlogListPage;
