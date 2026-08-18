import React from "react";
import AnimatedCounter from "@/components/animation/AnimatedCounter";
import { Layers, FileCheck2, ShieldCheck, Sparkles } from "lucide-react";

export const TrustSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-section-alt py-12 sm:py-16 border-t border-border transition-colors duration-200">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-teal bg-teal-light px-4 py-1.5 rounded-full border border-teal-border/40 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-teal" />
            <span>WHY BUSINESSES TRUST EXPORT BIZ</span>
          </div>

          <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-dark text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
            Built on a Decade of <span className="text-pink">Business Software</span>
          </h2>

          {/* 4-Color Underline Accent */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-7 rounded-full bg-teal" />
            <span className="h-1 w-7 rounded-full bg-pink" />
            <span className="h-1 w-7 rounded-full bg-yellow" />
            <span className="h-1 w-7 rounded-full bg-green" />
          </div>

          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Engineered with deep domain knowledge of global trade workflows, compliance guidelines, and export logistics.
          </p>
        </div>

        {/* 4 Feature & Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Card 1: Vibrant Hero Stat Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a1647] via-[#12318b] to-[#1c4ee0] p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between border border-white/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
            <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                PROVEN EXPERIENCE
              </span>
              <div className="mt-2 font-['Plus_Jakarta_Sans',sans-serif] font-black text-4xl sm:text-5xl text-white leading-none tracking-tight">
                <AnimatedCounter value="15+" />
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-cyan-100 font-medium leading-relaxed">
              Years building enterprise web, mobile &amp; mission-critical business software.
            </p>
          </div>

          {/* Card 2: Built for Export Workflows */}
          <div className="group rounded-2xl bg-card border border-teal-border/40 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal flex flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Layers className="h-6 w-6 stroke-[1.8]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg font-bold text-dark transition-colors duration-200 group-hover:text-teal leading-snug">
                Built for Export Workflows
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-normal">
                Designed specifically around how Indian exporters, manufacturers, and trade teams operate day-to-day.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-bold text-teal">
              <span>Optimized Workflow</span>
            </div>
          </div>

          {/* Card 3: Standardized Formats */}
          <div className="group rounded-2xl bg-card border border-pink-border/40 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-pink flex flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <FileCheck2 className="h-6 w-6 stroke-[1.8]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg font-bold text-dark transition-colors duration-200 group-hover:text-pink leading-snug">
                Standardized Formats
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-normal">
                Produces consistent, industry-recognized documents that customs, buyers, and shipping lines can trust.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-bold text-pink">
              <span>Standard Formats</span>
            </div>
          </div>

          {/* Card 4: Compliance-Focused Design */}
          <div className="group rounded-2xl bg-card border border-green-border/40 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-green flex flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <ShieldCheck className="h-6 w-6 stroke-[1.8]" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg font-bold text-dark transition-colors duration-200 group-hover:text-green leading-snug">
                Compliance-Focused
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-normal">
                Strictly aligns with export documentation protocols, GST filings, DGFT rules, and international norms.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-bold text-green">
              <span>100% Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Subtext */}
        <p className="mt-8 text-center text-xs sm:text-sm text-muted font-medium">
          Export Biz is developed by <span className="font-bold text-dark">AG Solutions</span> — delivering reliable web, mobile, and enterprise cloud software.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
