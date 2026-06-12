import apiClient from "@/utils/apiClient";

export interface SitemapItem {
  id: number;
  page_two_url: string;
  page_two_name: string;
  page_two_type: string;
  page_two_priority: string;
  page_two_status: string;
  created_by: string | null;
  created_at: string | null;
  updated_by: string | null;
  updated_at: string | null;
}

export interface SitemapResponse {
  data: SitemapItem[];
  blog: SitemapItem[];
}

export const getSitemap = async (): Promise<SitemapResponse> => {
  const response = await apiClient.get<SitemapResponse>("/getSitemap");
  return response.data;
};
