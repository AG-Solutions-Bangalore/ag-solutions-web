import { useQuery } from "@tanstack/react-query";
import { getTestimonialsByRoute } from "../api/testimonialApi";
import { queryKeys } from "@/utils/queryKeys";

export function useTestimonials(route: string) {
  return useQuery({
    queryKey: queryKeys.testimonials.detail(route),
    queryFn: () => getTestimonialsByRoute(route),
    enabled: Boolean(route),
    staleTime: 30 * 60 * 1000,
    retry: false,
  });
}
