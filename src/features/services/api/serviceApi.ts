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
  try {
    const response = await apiClient.get<FAQResponse>(`/getFAQBySlug/${slug}`);
    if (response.data && Array.isArray(response.data.data)) {
      return response.data;
    }
    return { data: [] };
  } catch {
    return { data: [] };
  }
};

