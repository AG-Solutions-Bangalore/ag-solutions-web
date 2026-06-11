import apiClient from "@/utils/apiClient";

export interface ProjectData {
  page: string;
  project_sort: number;
  project_name: string;
  project_type: string | null;
  project_description: string | null;
  project_image: string;
  project_image_alt: string;
}

export interface ProjectImageUrl {
  image_for: string;
  image_url: string;
}

export interface ProjectsResponse {
  data: ProjectData[];
  image_url: ProjectImageUrl[];
}

export const getProjects = async (): Promise<ProjectsResponse> => {
  const response = await apiClient.get<ProjectsResponse>("/getProjects/all");
  return response.data;
};
