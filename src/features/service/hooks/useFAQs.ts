import { useQuery } from "@tanstack/react-query";
import { getFAQsBySlug } from "../api/serviceApi";
import { queryKeys } from "@/utils/queryKeys";

export function useFAQs(slug: string) {
  return useQuery({
    queryKey: queryKeys.faqs.detail(slug),
    queryFn: () => getFAQsBySlug(slug),
    enabled: Boolean(slug),
    staleTime: 30 * 60 * 1000,
  });
}
