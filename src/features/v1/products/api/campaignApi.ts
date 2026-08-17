import apiClient from "@/utils/apiClient";

export interface CampaignVisitPayload {
  utm_source: string;
  utm_campaign: string;
  page: string;
  fullUrl: string;
  referrer: string;
  timestamp: string;
}

export const createCampaignVisit = async (payload: CampaignVisitPayload) => {
  const response = await apiClient.post("/createCampaignVisit", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
