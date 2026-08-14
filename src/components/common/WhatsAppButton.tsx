import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { WHATSAPP_CONFIG } from "@/config/whatsapp";
import { getPageContextFromPath } from "@/context/LeadModalContext";

export function WhatsAppButton() {
  const location = useLocation();
  const pageContext = getPageContextFromPath(location.pathname);
  const whatsappUrl = WHATSAPP_CONFIG.generateUrl(pageContext);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all hover:scale-110 active:scale-95 no-underline group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <FaWhatsapp className="h-8 w-8 text-white" />
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute right-16 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
}

export default WhatsAppButton;
