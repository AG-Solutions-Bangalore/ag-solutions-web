import React from "react";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { getImageUrl } from "@/utils/imageUrl";

export const EaseMarketingCtaBanner: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-background py-14 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 sm:p-12 lg:p-14 text-dark shadow-xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-pink/15 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Text & CTA Buttons */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-dark leading-tight">
                Ready to Grow Your Business with WhatsApp?
              </h2>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join thousands of businesses using Ease Marketing to connect, engage, and convert leads.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => openLeadModal("Ease Marketing CTA Banner Free Trial")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-pink hover:bg-pink-hover text-white font-bold text-xs sm:text-sm px-7 py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => openLeadModal("Ease Marketing Demo Banner")}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-background hover:bg-slate-100 dark:hover:bg-slate-800 text-dark font-bold text-xs sm:text-sm px-7 py-3.5 border border-border shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Right Column: CTA Graphic using base URL image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-xl flex justify-center items-center py-2">
                <img
                  src={getImageUrl("/images/ease_market_bottom.png")}
                  alt="Ready to Grow Your Business with WhatsApp"
                  title="Ready to Grow Your Business with WhatsApp"
                  className="w-full h-auto max-h-80 sm:max-h-96 lg:max-h-[420px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default EaseMarketingCtaBanner;
