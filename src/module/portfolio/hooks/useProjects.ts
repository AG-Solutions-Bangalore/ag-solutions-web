import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/portfolioApi";

export function useProjects(category: string = "all") {
  return useQuery({
    queryKey: ["projects", category],
    queryFn: () => getProjects(category),
  });
}
