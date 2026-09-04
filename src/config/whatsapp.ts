/**
 * WhatsApp Integration Configuration
 * Keeps sensitive credentials out of code and configures message templates.
 */
export const WHATSAPP_CONFIG = {
  phoneNumber: "+91 8867171060", // Official business phone
  defaultMessage:
    "Hi AG Solutions! I'm interested in your Web Development & Mobile App Development services. Could you please share more details?",
  generateUrl: (pageName?: string) => {
    const rawNumber = (
      import.meta.env.VITE_WHATSAPP_NUMBER || WHATSAPP_CONFIG.phoneNumber
    ).replace(/[^0-9]/g, "");

    let message = "";
    const lowerPage = (pageName || "").toLowerCase();

    if (lowerPage.includes("web")) {
      message =
        "Hi AG Solutions! I'm interested in your Web Development services. I'd like to discuss my website requirements and learn more about your solutions. Could you please share more details?";
    } else if (lowerPage.includes("mobile")) {
      message =
        "Hi AG Solutions! I'm interested in your Mobile App Development services. I'd like to discuss my app requirements and learn more about your solutions. Could you please share more details?";
    } else if (lowerPage.includes("digital") || (lowerPage.includes("marketing") && !lowerPage.includes("ease"))) {
      message =
        "Hi AG Solutions! I'm interested in your Digital Marketing services and would like to grow my business online. Could you please share more details about your SEO, Google Ads, and Social Media Marketing solutions?";
    } else if (lowerPage.includes("export")) {
      message =
        "Hi AG Solutions! I'm interested in Export Biz and would like to learn how it can simplify my export management and documentation processes. Could you please share more details?";
    } else if (
      !pageName ||
      pageName === "Home" ||
      pageName === "Website" ||
      lowerPage.includes("about") ||
      lowerPage.includes("contact")
    ) {
      message =
        "Hi AG Solutions! I'm interested in your Web Development & Mobile App Development services. Could you please share more details?";
    } else {
      message = `Hi AG Solutions! I am contacting you from your website regarding ${pageName}. I would like to know more about your services.`;
    }

    const text = encodeURIComponent(message);
    return `https://wa.me/${rawNumber}?text=${text}`;
  },
};
