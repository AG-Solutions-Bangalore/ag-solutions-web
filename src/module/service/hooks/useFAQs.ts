import { useQuery } from "@tanstack/react-query";
import { getFAQsBySlug } from "../api/serviceApi";

export function useFAQs(slug: string) {
  return useQuery({
    queryKey: ["faqs", slug],
    queryFn: () => getFAQsBySlug(slug),
  });
}
