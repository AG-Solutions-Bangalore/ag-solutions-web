import { useQuery } from "@tanstack/react-query";
import {
  getFrontBlogs,
  getFeaturedBlogs,
  getBlogs,
  getBlogBySlug,
} from "../api/blogApi";

export function useFrontBlogs() {
  return useQuery({
    queryKey: ["blogs", "front"],
    queryFn: getFrontBlogs,
  });
}

export function useFeaturedBlogs() {
  return useQuery({
    queryKey: ["blogs", "featured"],
    queryFn: getFeaturedBlogs,
  });
}

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs", "all"],
    queryFn: getBlogs,
  });
}

export function useBlogBySlug(slug: string) {
  return useQuery({
    queryKey: ["blogs", "detail", slug],
    queryFn: () => getBlogBySlug(slug),
    enabled: !!slug,
  });
}
