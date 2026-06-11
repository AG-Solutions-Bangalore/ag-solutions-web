import { useQuery } from "@tanstack/react-query";
import { getSitemap } from "../api/sitemapApi";

export function useSitemap() {
  return useQuery({
    queryKey: ["sitemap"],
    queryFn: getSitemap,
  });
}
