import apiClient from "@/utils/apiClient";
import type { TestimonialsResponse } from "../types/testimonial.types";

export const getTestimonialsByRoute = async (route: string): Promise<TestimonialsResponse> => {
  try {
    const response = await apiClient.get<TestimonialsResponse>(`/getTestimonial/${route}`);
    if (response.data && Array.isArray(response.data.data)) {
      return response.data;
    }
    return { data: [] };
  } catch {
    // Graceful fallback on 404, 500 or network issues to prevent UI crashes
    return { data: [] };
  }
};
