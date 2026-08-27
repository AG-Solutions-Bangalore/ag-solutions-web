import { useMemo } from "react";
import { useBlogs } from "./useBlogs";
import type { BlogItem } from "../types/blog.types";

export interface UseBlogsByCategoryOptions {
  /**
   * Blog categories to filter by, in priority order.
   * Matching is case-insensitive and trimmed.
   * If no blogs match any of the categories, the hook returns an empty
   * list (caller decides whether to hide the section).
   */
  categories: string[];
  /** Total posts to return. Default 3. */
  maxItems?: number;
}

export interface UseBlogsByCategoryResult {
  data: BlogItem[];
  isLoading: boolean;
  error: unknown;
  hasResults: boolean;
  /** "matched" if any blog matched, "empty" if no match, "loading" or "error". */
  mode: "matched" | "empty" | "loading" | "error";
}

/**
 * Thin wrapper around `useBlogs` that filters blogs by category
 * (frontend-side), sorts by `blog_created_date` desc, and slices to
 * `maxItems`.
 *
 * - Reuses the same query cache key (`queryKeys.blogs.list()`) so
 *   calling it from multiple pages does NOT trigger duplicate fetches.
 * - Strict filter: if no blogs match the requested categories, returns
 *   an empty list. The component decides whether to render a section
 *   header / empty state or hide entirely.
 *
 * Note: the upstream `getBlogs` API does not support category query
 * params, so filtering is done client-side after the single fetch.
 */
export function useBlogsByCategory(
  options: UseBlogsByCategoryOptions
): UseBlogsByCategoryResult {
  const { categories, maxItems = 3 } = options;
  const { data: blogsData, isLoading, error } = useBlogs();

  return useMemo(() => {
    if (isLoading) {
      return {
        data: [],
        isLoading: true,
        error,
        hasResults: false,
        mode: "loading" as const,
      };
    }

    if (error) {
      return {
        data: [],
        isLoading: false,
        error,
        hasResults: false,
        mode: "error" as const,
      };
    }

    const allBlogs = blogsData?.data ?? [];
    if (allBlogs.length === 0) {
      return {
        data: [],
        isLoading: false,
        error,
        hasResults: false,
        mode: "empty" as const,
      };
    }

    const normalizedCategories = categories
      .map((c) => c.trim().toLowerCase())
      .filter(Boolean);

    if (normalizedCategories.length === 0) {
      return {
        data: [],
        isLoading: false,
        error,
        hasResults: false,
        mode: "empty" as const,
      };
    }

    // Try to match in the provided priority order so the first
    // category wins when a blog has multiple categories (defensive).
    const matched: BlogItem[] = [];
    const used = new Set<number>();

    for (const target of normalizedCategories) {
      for (const blog of allBlogs) {
        if (used.has(blog.id)) continue;
        const blogCat = blog.categories?.trim().toLowerCase();
        if (blogCat === target) {
          matched.push(blog);
          used.add(blog.id);
        }
      }
    }

    if (matched.length === 0) {
      return {
        data: [],
        isLoading: false,
        error,
        hasResults: false,
        mode: "empty" as const,
      };
    }

    const sortByDateDesc = (a: BlogItem, b: BlogItem) => {
      const aTime = new Date(a.blog_created_date || 0).getTime();
      const bTime = new Date(b.blog_created_date || 0).getTime();
      return bTime - aTime;
    };

    return {
      data: [...matched].sort(sortByDateDesc).slice(0, maxItems),
      isLoading: false,
      error,
      hasResults: true,
      mode: "matched" as const,
    };
  }, [blogsData?.data, categories, maxItems, isLoading, error]);
}

export default useBlogsByCategory;
