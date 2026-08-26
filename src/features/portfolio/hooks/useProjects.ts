import { useQuery, keepPreviousData, useQueryClient } from "@tanstack/react-query";
import { getProjects } from "../api/portfolioApi";
import { queryKeys } from "@/utils/queryKeys";

export function useProjects(category: string = "all") {
  return useQuery({
    queryKey: queryKeys.projects.list(category),
    queryFn: () => getProjects(category),
    staleTime: 15 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
}

/**
 * Imperative prefetch helper used by route-level hover/focus handlers
 * (e.g. Header navigation) to warm the React Query cache so the first
 * paint of the portfolio page already has data.
 */
export function usePrefetchProjects() {
  const queryClient = useQueryClient();
  return (category: string = "all") => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.projects.list(category),
      queryFn: () => getProjects(category),
      staleTime: 15 * 60 * 1000,
    });
  };
}
