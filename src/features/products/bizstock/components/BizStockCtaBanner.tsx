import React from "react";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { getImageUrl } from "@/utils/imageUrl";

export const BizStockCtaBanner: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-background py-14 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#09152b] p-8 sm:p-12 lg:p-14 text-white shadow-2xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-pink/15 blur-3xl" />

          {/* Dot Matrix Pattern Decor */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 hidden md:grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Text & CTA Buttons */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Streamline Your Inventory and Grow Your Business?
              </h2>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-blue-100/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join thousands of businesses using BizStock to manage stock smarter and grow faster.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://bizstock.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="BizStock – Business Management Software"
                  aria-label="BizStock – Business Management Software"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-pink hover:bg-pink-hover text-white font-bold text-xs sm:text-sm px-7 py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none no-underline"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => openLeadModal("BizStock Demo Banner")}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-7 py-3.5 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Right Column: CTA Graphic using base URL image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-xl flex justify-center items-center py-2">
                <img
                  src={getImageUrl("/images/bizstock_bottom.png")}
                  alt="Streamline Your Inventory with BizStock"
                  title="Streamline Your Inventory with BizStock"
                  className="w-full h-auto max-h-96 sm:max-h-96 lg:max-h-[420px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
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

export default BizStockCtaBanner;
