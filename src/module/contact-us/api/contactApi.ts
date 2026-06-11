import apiClient from "@/utils/apiClient";

export interface EnquiryPayload {
  enquiryFullName: string;
  enquiryMobile: string;
  enquiryEmail: string;
  enquiryMessage: string;
  utm_medium?: string;
  utm_source?: string;
  utm_campaign?: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  [key: string]: any;
}

export const createEnquiry = async (
  payload: EnquiryPayload,
): Promise<EnquiryResponse> => {
  const formData = new FormData();
  formData.append("enquiryFullName", payload.enquiryFullName);
  formData.append("enquiryMobile", payload.enquiryMobile);
  formData.append("enquiryEmail", payload.enquiryEmail);
  formData.append("enquiryMessage", payload.enquiryMessage);
  formData.append("utm_medium", payload.utm_medium || "");
  formData.append("utm_source", payload.utm_source || "");
  formData.append("utm_campaign", payload.utm_campaign || "");

  const response = await apiClient.post<EnquiryResponse>(
    "/createEnquiry",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
