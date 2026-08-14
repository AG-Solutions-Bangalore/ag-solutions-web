import apiClient from "@/utils/apiClient";

export interface EnquiryPayload {
  enquiryFullName: string;
  enquiryMobile: string;
  enquiryEmail: string;
  enquiryMessage: string;
  enquiryService?: string[] | string;
  enquiryRoute?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_campaign?: string;
  enquiryFrom?: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  [key: string]: unknown;
}

export const createEnquiry = async (
  payload: EnquiryPayload,
): Promise<EnquiryResponse> => {
  const formData = new FormData();
  formData.append("enquiryFullName", payload.enquiryFullName);
  formData.append("enquiryMobile", payload.enquiryMobile);
  formData.append("enquiryEmail", payload.enquiryEmail);
  formData.append("enquiryMessage", payload.enquiryMessage);

  if (payload.enquiryService) {
    const formattedServices = Array.isArray(payload.enquiryService)
      ? payload.enquiryService.join(", ")
      : payload.enquiryService;
    formData.append("enquiryService", formattedServices);
  }

  if (payload.enquiryRoute) {
    formData.append("enquiryRoute", payload.enquiryRoute);
  }

  formData.append("utm_medium", payload.utm_medium || "");
  formData.append("utm_source", payload.utm_source || "");
  formData.append("utm_campaign", payload.utm_campaign || "");
  formData.append("enquiryFrom", payload.enquiryFrom || payload.enquiryRoute || "");

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
