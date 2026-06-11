import apiClient from "@/utils/apiClient";

export interface FAQData {
  faq_sort: string | null;
  faq_heading: string | null;
  faq_que: string;
  faq_ans: string;
}

export interface FAQResponse {
  data: FAQData[];
}

export const getFAQsBySlug = async (slug: string): Promise<FAQResponse> => {
  const response = await apiClient.get<FAQResponse>(`/getFAQBySlug/${slug}`);
  return response.data;
};
