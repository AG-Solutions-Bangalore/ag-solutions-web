import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/portfolioApi";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
}
