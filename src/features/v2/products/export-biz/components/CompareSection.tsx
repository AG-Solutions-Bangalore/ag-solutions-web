import React from "react";

export const CompareSection: React.FC = () => {
  return (
    <section className="bg-[#F5F8FC] py-14 md:py-20 lg:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="max-w-[640px] mx-auto text-center mb-11 reveal">
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.09em] uppercase text-[#1557E8] bg-[#1557E8]/8 px-4 py-1.75 rounded-full mb-3.5">
            The Difference
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#071B49] text-[1.6rem] sm:text-[2.3rem] lg:text-[2.6rem] leading-[1.15]">
            Old Spreadsheets vs. Export Biz Automation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 reveal">
          {/* Before Card */}
          <div className="bg-white border border-[#E3E9F6] rounded-[24px] p-5 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-400 shrink-0" />
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base sm:text-[1.15rem] text-[#54628A]">
                Before Export Biz (Manual Way)
              </div>
            </div>

            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-center text-xs sm:text-[0.94rem] text-[#54628A] bg-[#F5F8FC] p-3 rounded-xl border border-[#E3E9F6]">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✕</span>
                Manual data re-entry across multiple Excel files
              </li>
              <li className="flex items-center text-xs sm:text-[0.94rem] text-[#54628A] bg-[#F5F8FC] p-3 rounded-xl border border-[#E3E9F6]">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✕</span>
                Frequent invoice &amp; packing list typos
              </li>
              <li className="flex items-center text-xs sm:text-[0.94rem] text-[#54628A] bg-[#F5F8FC] p-3 rounded-xl border border-[#E3E9F6]">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✕</span>
                Lost track of RoDTEP &amp; Duty Drawback claims
              </li>
              <li className="flex items-center text-xs sm:text-[0.94rem] text-[#54628A] bg-[#F5F8FC] p-3 rounded-xl border border-[#E3E9F6]">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✕</span>
                Scattered files &amp; delayed monthly returns
              </li>
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-gradient-to-br from-white to-[#EEF4FF] border-1 border-[#1557E8]/30 rounded-[24px] p-5 sm:p-8 shadow-[0_14px_34px_rgba(7,27,73,0.01)]">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-[#16B86A] shrink-0" />
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base sm:text-[1.15rem] text-[#071B49]">
                With Export Biz (Automated)
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center text-[0.94rem] text-[#071B49] font-semibold bg-white p-3 rounded-xl border border-[#1557E8]/20 shadow-xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✓</span>
                3-Click automated document generation
              </li>
              <li className="flex items-center text-[0.94rem] text-[#071B49] font-semibold bg-white p-3 rounded-xl border border-[#1557E8]/20 shadow-xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✓</span>
                Standardized, 100% error-free paperwork
              </li>
              <li className="flex items-center text-[0.94rem] text-[#071B49] font-semibold bg-white p-3 rounded-xl border border-[#1557E8]/20 shadow-xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✓</span>
                Live tracking for pending incentive claims
              </li>
              <li className="flex items-center text-[0.94rem] text-[#071B49] font-semibold bg-white p-3 rounded-xl border border-[#1557E8]/20 shadow-xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3">✓</span>
                Centralized dashboard for docs &amp; returns
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
