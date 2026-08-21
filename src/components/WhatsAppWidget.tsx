import { useState } from "react";
import { WHATSAPP_CONFIG } from "@/config/whatsapp";

function WhatsAppWidget() {
  const [open, setOpen] = useState(true);
  const whatsappUrl = WHATSAPP_CONFIG.generateUrl("Home");

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      {/* Chat Bubble */}
      {open && (
        <div className="pointer-events-auto relative w-72 sm:w-80 rounded-2xl bg-white p-4 shadow-2xl border border-gray-200 animate-in fade-in duration-300">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
            aria-label="Close chat"
          >
            ✕
          </button>

          <h4 className="text-[15px] font-bold text-[#132d3e]">
            👋 Hi there!
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Need help with Web Development, Mobile Apps, ERP, CRM or Digital
            Marketing?
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-white font-semibold transition hover:bg-[#1fb657] shadow-sm no-underline"
          >
            <span>Chat on WhatsApp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-4 h-4 fill-current"
            >
              <path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.5 2.1 7.9L0 32l8.5-2.2c2.3 1.2 4.9 1.8 7.5 1.8 8.6 0 15.6-6.9 15.6-15.5S24.6.4 16 .4zm0 28.3c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-5 .9 1-4.8-.3-.5c-1.3-2-2-4.3-2-6.7 0-7.2 5.9-13.1 13.2-13.1S29.2 8.4 29.2 15.6 23.3 28.7 16 28.7zm7.2-9.8c-.4-.2-2.4-1.2-2.8-1.4-.4-.2-.7-.2-1 .2s-1.1 1.4-1.3 1.7c-.2.2-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.2.1-.5 0-.7-.1-.2-1-2.3-1.3-3.1-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.5s1.5 4.1 1.7 4.4c.2.3 3 4.6 7.3 6.3 1 .4 1.8.6 2.4.8 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.8-2 .3-.9.3-1.8.2-2-.1-.2-.4-.3-.8-.5z" />
            </svg>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#1fb657] active:scale-95 cursor-pointer"
        aria-label="Toggle WhatsApp chat widget"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current"
        >
          <path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.5 2.1 7.9L0 32l8.5-2.2c2.3 1.2 4.9 1.8 7.5 1.8 8.6 0 15.6-6.9 15.6-15.5S24.6.4 16 .4zm0 28.3c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-5 .9 1-4.8-.3-.5c-1.3-2-2-4.3-2-6.7 0-7.2 5.9-13.1 13.2-13.1S29.2 8.4 29.2 15.6 23.3 28.7 16 28.7zm7.2-9.8c-.4-.2-2.4-1.2-2.8-1.4-.4-.2-.7-.2-1 .2s-1.1 1.4-1.3 1.7c-.2.2-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.2.1-.5 0-.7-.1-.2-1-2.3-1.3-3.1-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.5s1.5 4.1 1.7 4.4c.2.3 3 4.6 7.3 6.3 1 .4 1.8.6 2.4.8 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.8-2 .3-.9.3-1.8.2-2-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </button>
    </div>
  );
}

export default WhatsAppWidget;