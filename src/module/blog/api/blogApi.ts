import apiClient from "@/utils/apiClient";

export interface BlogItem {
  id: number;
  blog_index: number | null;
  blog_meta_title: string;
  blog_meta_description: string;
  blog_meta_keywords: string | null;
  blog_slug: string;
  blog_title: string;
  blog_short_description: string;
  blog_description?: string;
  blog_banner_image: string;
  blog_banner_image_alt: string | null;
  blog_created_date: string;
  blog_updated_date: string | null;
  created_by: string;
  blog_categories_ids?: string;
  categories?: string;
  blog_front?: number | string | null;
  blog_featured?: string | null;
}

export interface BlogImageUrl {
  image_for: string;
  image_url: string;
}

export interface BlogListResponse {
  data: BlogItem[];
  image_url: BlogImageUrl[];
}

export interface SponsorItem {
  sponsors_image: string;
  sponsors_url: string | null;
}

export interface BlogDetailResponse {
  data: BlogItem;
  image_url: BlogImageUrl[];
  previous: Partial<BlogItem> | null;
  next: Partial<BlogItem> | null;
  featured: BlogItem[];
  sponsors: SponsorItem[];
  faq: any[];
}

export const getFrontBlogs = async (): Promise<BlogListResponse> => {
  const response = await apiClient.get<BlogListResponse>("/getFrontBlogs");
  return response.data;
};

export const getFeaturedBlogs = async (): Promise<BlogListResponse> => {
  const response = await apiClient.get<BlogListResponse>("/getFeaturedBlogs");
  return response.data;
};

export const getBlogs = async (): Promise<BlogListResponse> => {
  const response = await apiClient.get<BlogListResponse>("/getBlogs");
  return response.data;
};

export const getBlogBySlug = async (slug: string): Promise<BlogDetailResponse> => {
  const response = await apiClient.get<BlogDetailResponse>(`/getBlogsBySlug/${slug}`);
  return response.data;
};
