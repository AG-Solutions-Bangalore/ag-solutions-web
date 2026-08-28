import apiClient from "@/utils/apiClient";
import type { TestimonialsResponse } from "../types/testimonial.types";

export const getTestimonialsByRoute = async (route: string): Promise<TestimonialsResponse> => {
  try {
    const slug = route === "bizstock" ? "biz-stock" : route;
    let response = await apiClient.get<TestimonialsResponse>(`/getTestimonial/${slug}`);
    if (response.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
      return response.data;
    }
    if (slug === "biz-stock") {
      const fallback = await apiClient.get<TestimonialsResponse>(`/getTestimonial/bizstock`);
      if (fallback.data && Array.isArray(fallback.data.data) && fallback.data.data.length > 0) {
        return fallback.data;
      }
    }
    return { data: [] };
  } catch {
    // Graceful fallback on 404, 500 or network issues to prevent UI crashes
    return { data: [] };
  }
};
