import React from "react";
import { CheckCircle2, XCircle, Zap, AlertTriangle } from "lucide-react";

export const CompareSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 border-t border-border transition-colors duration-200">
      {/* Subtle ambient glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-red-500/5 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-teal bg-teal-light px-4 py-1.5 rounded-full border border-teal-border/40 shadow-2xs">
            <Zap className="h-3.5 w-3.5 text-yellow fill-yellow" />
            <span>THE DIFFERENCE</span>
          </div>

          <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-dark text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
            Old Spreadsheets vs <span className="text-pink">Export Biz Automation</span>
          </h2>

          {/* 4-Color Underline Accent */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-7 rounded-full bg-teal" />
            <span className="h-1 w-7 rounded-full bg-pink" />
            <span className="h-1 w-7 rounded-full bg-yellow" />
            <span className="h-1 w-7 rounded-full bg-green" />
          </div>

          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-muted max-w-xl mx-auto leading-relaxed">
            See how upgrading from manual Excel chaos to intelligent automation changes your everyday trade workflow.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Before Card (Manual Way) */}
          <div className="rounded-3xl border border-red-200 dark:border-red-900/50 bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 px-3.5 py-1.5 text-xs font-bold text-red-600 dark:text-red-400">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>Manual Excel Way</span>
                </div>
                <span className="text-xs font-bold text-muted uppercase tracking-wider">Before</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 rounded-2xl bg-red-50/40 dark:bg-red-950/20 p-3.5 sm:p-4 border border-red-100 dark:border-red-900/30">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                    Manual data re-entry across multiple scattered Excel sheets.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-red-50/40 dark:bg-red-950/20 p-3.5 sm:p-4 border border-red-100 dark:border-red-900/30">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                    Frequent typos in invoices and packing lists leading to customs hold-ups.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-red-50/40 dark:bg-red-950/20 p-3.5 sm:p-4 border border-red-100 dark:border-red-900/30">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                    Lost tracking of RoDTEP, Duty Drawback, and government benefit claims.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-red-50/40 dark:bg-red-950/20 p-3.5 sm:p-4 border border-red-100 dark:border-red-900/30">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                    Scattered local files and stressful monthly returns compilation.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border text-center">
              <span className="text-xs font-semibold text-red-500">
                High Risk of Customs Delay &amp; Penalty
              </span>
            </div>
          </div>

          {/* After Card (Export Biz Automated Way) */}
          <div className="relative rounded-3xl border-2 border-teal/50 bg-gradient-to-br from-card via-card to-teal/5 p-6 sm:p-8 shadow-xl ring-1 ring-teal/20 flex flex-col justify-between">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-6">
              <span className="rounded-full bg-gradient-to-r from-pink to-pink-hover px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                MODERN WAY
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-teal-border/40">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                  <Zap className="h-3.5 w-3.5 fill-white" />
                  <span>With Export Biz</span>
                </div>
                <span className="text-xs font-bold text-teal uppercase tracking-wider">Automated</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 rounded-2xl bg-card p-3.5 sm:p-4 border border-teal-border/50 shadow-2xs">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-dark font-bold leading-relaxed">
                    3-Click automated document generation directly from orders.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-card p-3.5 sm:p-4 border border-teal-border/50 shadow-2xs">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-dark font-bold leading-relaxed">
                    100% pre-validated compliance templates matching latest trade rules.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-card p-3.5 sm:p-4 border border-teal-border/50 shadow-2xs">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-dark font-bold leading-relaxed">
                    Automated duty drawback, RoDTEP &amp; GST claim calculations.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-card p-3.5 sm:p-4 border border-teal-border/50 shadow-2xs">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-dark font-bold leading-relaxed">
                    Centralized audit-ready cloud vault for 1-click filing &amp; reports.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-border/40 text-center">
              <span className="text-xs font-bold text-teal">
                ✓ 80% Time Saved &amp; Zero Errors
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
