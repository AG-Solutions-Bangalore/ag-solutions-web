import { useMutation } from "@tanstack/react-query";
import { createNewsletter, type NewsletterPayload } from "../api/newsletterApi";

export function useCreateNewsletter() {
  return useMutation({
    mutationFn: (payload: NewsletterPayload) => createNewsletter(payload),
  });
}
