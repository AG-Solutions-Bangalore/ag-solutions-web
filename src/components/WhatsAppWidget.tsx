import { useState } from "react";
import { Link } from "react-router-dom";

function WhatsAppWidget() {
    const [open, setOpen] = useState(true);

    const phone = "8867171060"; 
    const message = encodeURIComponent(
        "Hi AG Solutions! I'm interested in your services."
    );

    return (
        <div className="fixed bottom-6 right-6 z-9999 flex flex-col items-end gap-3">

            {/* Chat Bubble */}
            {open && (
                <div className="relative max-w-70 rounded-2xl bg-white p-4 shadow-2xl border border-gray-200 animate-in fade-in duration-500">
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute right-3 top-2 text-gray-400 hover:text-gray-700"
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

                    <Link
                        to={`https://wa.me/${phone}?text=${message}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 flex items-center justify-center rounded-full bg-[#25D366] py-3 text-white font-semibold transition hover:bg-[#1fb657]"
                    >
                        Chat on WhatsApp
                    </Link>
                </div>
            )}

            {/* Floating Button */}
            <Link
                to="https://wa.me/8867171060"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl hover:scale-110 transition-all duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-9 h-9"
                    fill="white"
                >
                    <path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.5 2.1 7.9L0 32l8.5-2.2c2.3 1.2 4.9 1.8 7.5 1.8 8.6 0 15.6-6.9 15.6-15.5S24.6.4 16 .4zm0 28.3c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-5 .9 1-4.8-.3-.5c-1.3-2-2-4.3-2-6.7 0-7.2 5.9-13.1 13.2-13.1S29.2 8.4 29.2 15.6 23.3 28.7 16 28.7zm7.2-9.8c-.4-.2-2.4-1.2-2.8-1.4-.4-.2-.7-.2-1 .2s-1.1 1.4-1.3 1.7c-.2.2-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.2.1-.5 0-.7-.1-.2-1-2.3-1.3-3.1-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.5s1.5 4.1 1.7 4.4c.2.3 3 4.6 7.3 6.3 1 .4 1.8.6 2.4.8 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.8-2 .3-.9.3-1.8.2-2-.1-.2-.4-.3-.8-.5z" />
                </svg>
            </Link>
        </div>
    );
}

export default WhatsAppWidget;