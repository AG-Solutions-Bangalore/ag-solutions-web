import apiClient from "@/utils/apiClient";
import type { BlogListResponse, BlogDetailResponse } from "../types/blog.types";

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
