import { useMutation } from "@tanstack/react-query";
import { createEnquiry, type EnquiryPayload } from "../api/contactApi";

export function useCreateEnquiry() {
  return useMutation({
    mutationFn: (payload: EnquiryPayload) => createEnquiry(payload),
  });
}
