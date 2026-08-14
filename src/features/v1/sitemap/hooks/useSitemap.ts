import { useQuery } from "@tanstack/react-query";
import { getSitemap } from "../api/sitemapApi";
import { queryKeys } from "@/utils/queryKeys";

export function useSitemap() {
  return useQuery({
    queryKey: queryKeys.sitemap.all,
    queryFn: getSitemap,
    staleTime: 60 * 60 * 1000,
  });
}
