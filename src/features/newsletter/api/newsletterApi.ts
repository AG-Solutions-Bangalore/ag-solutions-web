import apiClient from "@/utils/apiClient";

export interface NewsletterPayload {
  newsletter_email: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
  [key: string]: unknown;
}

export const createNewsletter = async (
  payload: NewsletterPayload,
): Promise<NewsletterResponse> => {
  const formData = new FormData();
  formData.append("newsletter_email", payload.newsletter_email);

  const response = await apiClient.post<NewsletterResponse>(
    "/createNewsletter",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
