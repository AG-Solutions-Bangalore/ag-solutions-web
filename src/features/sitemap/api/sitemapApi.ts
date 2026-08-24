import apiClient from "@/utils/apiClient";

export interface SitemapApiResponseItem {
  id: number;
  page_two_url: string;
  page_two_name: string;
  page_two_type: string;
  page_two_priority: string;
  page_two_status: string;
  created_by?: string | null;
  created_at: string | null;
  updated_by?: string | null;
  updated_at: string | null;
}

export interface SitemapApiResponse {
  data: SitemapApiResponseItem[];
}

/**
 * Fetches sitemap records from the AG Solutions backend API (/getSitemap)
 */
export const getSitemap = async (): Promise<SitemapApiResponse> => {
  const response = await apiClient.get<SitemapApiResponse>("/getSitemap");
  return response.data;
};
