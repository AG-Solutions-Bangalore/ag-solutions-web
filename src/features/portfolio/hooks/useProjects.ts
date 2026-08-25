import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/portfolioApi";
import { queryKeys } from "@/utils/queryKeys";

export function useProjects(category: string = "all") {
  return useQuery({
    queryKey: queryKeys.projects.list(category),
    queryFn: () => getProjects(category),
    staleTime: 15 * 60 * 1000,
  });
}
