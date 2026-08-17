/**
 * WhatsApp Integration Configuration
 * Keeps sensitive credentials out of code and configures message templates.
 */
export const WHATSAPP_CONFIG = {
  phoneNumber: "+91 8867171060", // Official business phone
  defaultMessage: "Hello AG Solutions! I am interested in your digital and IT solutions. Can you please share more details?",
  generateUrl: (pageName?: string) => {
    const rawNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || WHATSAPP_CONFIG.phoneNumber).replace(/[^0-9]/g, "");
    const context = pageName ? ` regarding ${pageName}` : "";
    const text = encodeURIComponent(`Hi AG Solutions! I am contacting you from your website${context}. I would like to know more about your services.`);
    return `https://wa.me/${rawNumber}?text=${text}`;
  },
};
