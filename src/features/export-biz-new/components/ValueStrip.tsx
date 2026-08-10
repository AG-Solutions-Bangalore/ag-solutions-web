import React from "react";

export const ValueStrip: React.FC = () => {
  return (
    <section className="bg-[#0A235C] pt-0 pb-8 sm:pb-12" id="benefits">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="bg-white rounded-[24px] shadow-[0_26px_60px_rgba(7,27,73,0.18)] -mt-[28px] sm:-mt-[44px] relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col sm:flex-row gap-6 sm:gap-8 flex-wrap reveal">
          <h2 className="sr-only">Key Benefits</h2>

          <div className="flex-1 min-w-[220px] flex items-start">
            <span className="w-[48px] h-[48px] rounded-xl shrink-0 mr-3.5 flex items-center justify-center bg-[#1557E8]/10 text-[#1557E8]">
              <svg
                className="w-6 h-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
            </span>
            <div>
              <div className="inline-block bg-[#1557E8]/10 text-[#1557E8] text-[0.7rem] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                90% FASTER
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.1rem] font-bold text-[#071B49] mb-1">
                Save Time
              </h3>
              <p className="text-[0.9rem] text-[#54628A] leading-snug">
                Generate complete shipment paperwork without manual back-and-forth.
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-[220px] flex items-start">
            <span className="w-[48px] h-[48px] rounded-xl shrink-0 mr-3.5 flex items-center justify-center bg-[#16B86A]/12 text-[#16B86A]">
              <svg
                className="w-6 h-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <div>
              <div className="inline-block bg-[#16B86A]/12 text-[#16B86A] text-[0.7rem] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                100% ACCURATE
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.1rem] font-bold text-[#071B49] mb-1">
                Reduce Errors
              </h3>
              <p className="text-[0.9rem] text-[#54628A] leading-snug">
                Standardized, compliant export invoices &amp; packing lists every time.
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-[220px] flex items-start">
            <span className="w-[48px] h-[48px] rounded-xl shrink-0 mr-3.5 flex items-center justify-center bg-[#6637D9]/12 text-[#6637D9]">
              <svg
                className="w-6 h-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l9 5-9 5-9-5 9-5z" />
                <path d="M3 13l9 5 9-5" />
              </svg>
            </span>
            <div>
              <div className="inline-block bg-[#6637D9]/12 text-[#6637D9] text-[0.7rem] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                ALL-IN-ONE
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.1rem] font-bold text-[#071B49] mb-1">
                Stay Organized
              </h3>
              <p className="text-[0.9rem] text-[#54628A] leading-snug">
                Documentation, monthly returns and scheme claims in one dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
