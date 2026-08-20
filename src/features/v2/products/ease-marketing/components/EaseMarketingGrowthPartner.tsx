import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { getImageUrl } from "@/utils/imageUrl";

export const EaseMarketingGrowthPartner: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-slate-50/70 dark:bg-slate-900/30 py-16 sm:py-20 md:py-24 border-t border-border transition-colors duration-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Text, Checklist & CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-pink mb-3">
              WHY CHOOSE EASE MARKETING
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight leading-tight">
              Your Growth Partner in <span className="text-pink">WhatsApp Marketing</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
              We provide all the tools you need to run successful WhatsApp campaigns, build stronger customer relationships, and grow your business.
            </p>

            {/* Checklist */}
            <div className="mt-6 space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal shrink-0" />
                <span className="text-sm font-semibold text-dark">Easy-to-use platform</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal shrink-0" />
                <span className="text-sm font-semibold text-dark">Secure &amp; reliable</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal shrink-0" />
                <span className="text-sm font-semibold text-dark">Affordable pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal shrink-0" />
                <span className="text-sm font-semibold text-dark">Excellent customer support</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => openLeadModal("Ease Marketing Growth Partner")}
                className="inline-flex items-center gap-2 rounded-full bg-pink hover:bg-pink-hover text-white font-bold text-sm sm:text-base px-8 py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
              >
                <span>Explore Features</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Middle Showcase Graphic using base URL image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex justify-center items-center relative py-6"
          >
            <div className="relative w-full max-w-lg flex justify-center items-center">
              <img
                src={getImageUrl("/images/ease_market_middle.png")}
                alt="Your Growth Partner in WhatsApp Marketing"
                title="Your Growth Partner in WhatsApp Marketing"
                className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EaseMarketingGrowthPartner;
