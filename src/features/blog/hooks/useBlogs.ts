import { useQuery } from "@tanstack/react-query";
import {
  getFrontBlogs,
  getFeaturedBlogs,
  getBlogs,
  getBlogBySlug,
} from "../api/blogApi";
import { queryKeys } from "@/utils/queryKeys";

export function useFrontBlogs() {
  return useQuery({
    queryKey: queryKeys.blogs.front(),
    queryFn: getFrontBlogs,
    staleTime: 10 * 60 * 1000,
  });
}

export function useFeaturedBlogs() {
  return useQuery({
    queryKey: queryKeys.blogs.featured(),
    queryFn: getFeaturedBlogs,
    staleTime: 10 * 60 * 1000,
  });
}

export function useBlogs() {
  return useQuery({
    queryKey: queryKeys.blogs.list(),
    queryFn: getBlogs,
    staleTime: 10 * 60 * 1000,
  });
}

export function useBlogBySlug(slug: string) {
  return useQuery({
    queryKey: queryKeys.blogs.detail(slug),
    queryFn: () => getBlogBySlug(slug),
    enabled: Boolean(slug),
    staleTime: 15 * 60 * 1000,
  });
}
