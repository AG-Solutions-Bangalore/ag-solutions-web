import React from "react";

export const CompareSection: React.FC = () => {
  return (
    <section className="bg-section-alt py-14 md:py-20 lg:py-24 border-t border-border transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="max-w-[640px] mx-auto text-center mb-11 reveal">
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.09em] uppercase text-teal bg-teal-light/50 px-4 py-1.75 rounded-full mb-3.5 border border-teal-border/40">
            The Difference
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-dark text-[1.6rem] sm:text-[2.3rem] lg:text-[2.6rem] leading-[1.15]">
            Old Spreadsheets vs Export Biz Automation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 reveal">
          {/* Before Card */}
          <div className="bg-card border border-border rounded-[24px] p-5 sm:p-8 shadow-2xs">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-400 shrink-0" />
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base sm:text-[1.15rem] text-muted">
                Before Export Biz (Manual Way)
              </div>
            </div>

            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-center text-xs sm:text-[0.94rem] text-muted bg-section-alt p-3 rounded-xl border border-border">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✕</span>
                Manual data re-entry across multiple Excel files
              </li>
              <li className="flex items-center text-xs sm:text-[0.94rem] text-muted bg-section-alt p-3 rounded-xl border border-border">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✕</span>
                Frequent invoice &amp; packing list typos
              </li>
              <li className="flex items-center text-xs sm:text-[0.94rem] text-muted bg-section-alt p-3 rounded-xl border border-border">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✕</span>
                Lost track of RoDTEP &amp; Duty Drawback claims
              </li>
              <li className="flex items-center text-xs sm:text-[0.94rem] text-muted bg-section-alt p-3 rounded-xl border border-border">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✕</span>
                Scattered files &amp; delayed monthly returns
              </li>
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-card border border-border rounded-[24px] p-5 sm:p-8 shadow-md">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-teal shrink-0" />
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base sm:text-[1.15rem] text-dark">
                With Export Biz (Automated)
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center text-[0.94rem] text-dark font-semibold bg-section-alt p-3 rounded-xl border border-border shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✓</span>
                3-Click automated document generation
              </li>
              <li className="flex items-center text-[0.94rem] text-dark font-semibold bg-section-alt p-3 rounded-xl border border-border shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✓</span>
                100% pre-validated compliance templates
              </li>
              <li className="flex items-center text-[0.94rem] text-dark font-semibold bg-section-alt p-3 rounded-xl border border-border shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✓</span>
                Automated government benefit calculation
              </li>
              <li className="flex items-center text-[0.94rem] text-dark font-semibold bg-section-alt p-3 rounded-xl border border-border shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✓</span>
                Centralized audit-ready cloud vault
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
