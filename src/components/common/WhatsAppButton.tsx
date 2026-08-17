import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { WHATSAPP_CONFIG } from "@/config/whatsapp";
import { getPageContextFromPath } from "@/context/LeadModalContext";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pageContext = getPageContextFromPath(location.pathname);
  const whatsappUrl = WHATSAPP_CONFIG.generateUrl(pageContext);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Popup Card (PDF Page 17) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto relative w-[290px] sm:w-[320px] rounded-2xl bg-white p-5 shadow-2xl border border-slate-200/80 text-left"
          >
            {/* Top Multi-Color Brand Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl grid grid-cols-4 overflow-hidden">
              <div className="bg-[#00c5cd]" />
              <div className="bg-[#ff007a]" />
              <div className="bg-[#ffb703]" />
              <div className="bg-[#06d6a0]" />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer border-none bg-transparent"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>

            <h4 className="text-base font-extrabold text-[#132d3e] flex items-center gap-1.5 mt-1">
              <span>👋</span> Hi there!
            </h4>

            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
              Need help with Web Development, Mobile Apps, ERP, CRM or Digital Marketing?
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] py-3 px-4 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] no-underline"
            >
              <span>Chat on WhatsApp</span>
              <FaWhatsapp className="h-4 w-4 text-white" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button with Tooltip */}
      <div className="pointer-events-auto relative flex items-center">
        {/* "Chat with us" Permanent / Hover Tooltip (PDF Page 17) */}
        {!isOpen && (
          <div className="mr-3 rounded-full bg-slate-900/90 backdrop-blur-xs px-3.5 py-1.5 text-xs font-bold text-white shadow-lg border border-slate-700/50 whitespace-nowrap animate-bounce [animation-duration:3s]">
            Chat with us
          </div>
        )}

        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          title="Chat with us on WhatsApp"
          aria-label="Toggle WhatsApp chat widget"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all hover:scale-110 active:scale-95 cursor-pointer border-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <FaWhatsapp className="h-8 w-8 text-white" />
        </motion.button>
      </div>
    </div>
  );
}

export default WhatsAppButton;
