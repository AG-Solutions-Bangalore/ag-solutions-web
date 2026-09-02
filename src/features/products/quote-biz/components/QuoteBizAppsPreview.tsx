import React from "react";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { getImageUrl } from "@/utils/imageUrl";

export const QuoteBizAppsPreview: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-slate-50/70 dark:bg-slate-900/30 py-12 sm:py-16 md:py-20 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: Mobile App Available */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-6 sm:p-8 border border-border/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative"
          >
            {/* Left Content Area */}
            <div className="w-full sm:w-[58%] z-10 text-center sm:text-left flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-extrabold text-dark tracking-tight leading-snug">
                Manage Quotes On-the-Go
                <span className="block font-extrabold text-dark mt-0.5">
                  Mobile App Available
                </span>
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed max-w-xs mx-auto sm:mx-0">
                Create, send, track &amp; manage quotes from anywhere, anytime.
              </p>

              {/* App Store Buttons Side by Side */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                {/* Google Play */}
                <button
                  type="button"
                  onClick={() => openLeadModal("QuoteBiz Google Play Download")}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer border-none"
                  aria-label="Get it on Google Play"
                >
                  <svg className="h-5 w-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.614V3.428c0-.624.228-1.196.609-1.614zM15.207 13.414l2.707 2.707-13.09 7.42 10.383-10.127zM15.207 10.586L4.824.459l13.09 7.42-2.707 2.707zM16.621 12l3.493 1.98a1.5 1.5 0 0 0 0-2.593L16.621 12z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] text-slate-300 uppercase tracking-wider font-medium">GET IT ON</span>
                    <span className="block text-[11px] font-bold text-white">Google Play</span>
                  </div>
                </button>

                {/* App Store */}
                <button
                  type="button"
                  onClick={() => openLeadModal("QuoteBiz App Store Download")}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer border-none"
                  aria-label="Download on the App Store"
                >
                  <svg className="h-5 w-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 7.15c.66-.83 1.11-1.98.99-3.15-1.02.04-2.26.68-2.98 1.52-.64.73-1.2 1.91-1.05 3.05 1.14.09 2.38-.59 3.04-1.42z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] text-slate-300 font-medium">Download on the</span>
                    <span className="block text-[11px] font-bold text-white">App Store</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Mobile Image Area */}
            <div className="w-full sm:w-[42%] flex justify-center items-center z-10">
              <img
                src={getImageUrl("/images/bizStack/bz3.webp")}
                alt="QuoteBiz Mobile App Preview"
                title="QuoteBiz Mobile App"
                className="w-auto h-52 sm:h-56 md:h-64 lg:h-72 object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </m.div>

          {/* Right Card: Or Use QuoteBiz on Web */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-3xl p-6 sm:p-8 border border-border/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative"
          >
            {/* Left Content Area */}
            <div className="w-full sm:w-[48%] z-10 text-center sm:text-left flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-extrabold text-dark tracking-tight leading-snug">
                Or Use QuoteBiz on Web
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed max-w-xs mx-auto sm:mx-0">
                Full-featured experience on desktop for your team &amp; business.
              </p>

              <div className="mt-5 sm:mt-6 flex justify-center sm:justify-start">
                <button
                  type="button"
                  onClick={() => openLeadModal("QuoteBiz Web App Access")}
                  className="inline-flex items-center gap-2 rounded-full bg-pink hover:bg-pink-hover text-white font-bold text-xs sm:text-sm px-6 py-3 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
                >
                  <span>Explore Web App</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Laptop Image Area */}
            <div className="w-full sm:w-[52%] flex justify-center items-center z-10">
              <img
                src={getImageUrl("/images/bizStack/bz4.webp")}
                alt="QuoteBiz Desktop Web App Preview"
                title="QuoteBiz Desktop Web App"
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto object-contain drop-shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBizAppsPreview;
