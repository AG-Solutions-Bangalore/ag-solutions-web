import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import FlipButton from "@/components/ui/FlipButton";

export const BizStockCta: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="bg-background py-14 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07134b] via-[#0e2c8d] to-[#1c4ee0] p-8 sm:p-12 lg:p-16 text-white shadow-2xl"
        >
          {/* Ambient Glow Aura */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-200 border border-white/20 mb-6 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
              <span>Ready for Total Inventory Clarity?</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Transform Your Stock Operations with BizStock Today
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              Join leading distributors, exporters, and manufacturers who have eliminated stockouts, reduced operational shrinkage, and automated warehouse fulfillment with AG Solutions.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openLeadModal("BizStock Product Onboarding")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-pink to-pink-hover px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-xl hover:brightness-110 active:scale-95 transition-all cursor-pointer border-none"
              >
                <span>Request 1-on-1 Guided Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <FlipButton
                to="/contacts"
                title="Talk to Solutions Expert"
                variant="white"
                className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold shadow-md"
              >
                Talk to Sales Team
              </FlipButton>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Free 14-Day Pilot Setup
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Guaranteed Excel Data Migration
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Enterprise SLA &amp; Dedicated Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BizStockCta;
