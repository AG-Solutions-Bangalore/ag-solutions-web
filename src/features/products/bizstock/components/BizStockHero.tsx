import React from "react";
import { m } from "framer-motion";
import {
  Boxes,
  Bell,
  Building2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { getImageUrl } from "@/utils/imageUrl";

export const BizStockHero: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 transition-colors duration-200">
      {/* Background Subtle Accent Gradients */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[450px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-pink/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Copy, CTAs, 4 Quick Highlights */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 z-10 text-center lg:text-left"
          >
            {/* Small Eyebrow Badge */}
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              SMART STOCK MANAGEMENT
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-dark leading-[1.15]">
              Manage Stock.{" "}
              <span className="block text-pink mt-1">
                Maximize Growth.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              BizStock helps businesses track inventory, manage sales &amp; purchases, and gain real-time visibility to make smarter decisions and grow faster.
            </p>

            {/* 4 Feature Badges (Vertical Circular Icons Style) */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
              {/* Badge 1 */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-teal text-white flex items-center justify-center shadow-xs mb-2.5">
                  <Boxes className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold text-dark leading-tight">Real-time Stock</h4>
                <p className="text-[11px] text-muted mt-0.5">Visibility</p>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-pink text-white flex items-center justify-center shadow-xs mb-2.5">
                  <Bell className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold text-dark leading-tight">Low Stock Alerts</h4>
                <p className="text-[11px] text-muted mt-0.5">Never run out</p>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs mb-2.5">
                  <Building2 className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold text-dark leading-tight">Multi-location</h4>
                <p className="text-[11px] text-muted mt-0.5">Management</p>
              </div>

              {/* Badge 4 */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs mb-2.5">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold text-dark leading-tight">Smart Reports</h4>
                <p className="text-[11px] text-muted mt-0.5">Data-driven</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://bizstock.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="BizStock – Business Management Software"
                aria-label="BizStock – Business Management Software"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-pink hover:bg-pink-hover text-white font-bold text-sm sm:text-base px-8 py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none no-underline"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => openLeadModal("BizStock Demo Request")}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-card hover:bg-slate-100 dark:hover:bg-slate-800 text-dark font-bold text-sm sm:text-base px-8 py-3.5 border border-border shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                Book a Demo
              </button>
            </div>
          </m.div>

          {/* Right Column: Hero Graphic Preview using base URL image */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden p-2 sm:p-3">
              <img
                src={getImageUrl("/images/bizstock_top.png")}
                alt="BizStock Inventory and ERP Dashboard"
                title="BizStock Inventory and ERP Dashboard"
                className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default BizStockHero;
