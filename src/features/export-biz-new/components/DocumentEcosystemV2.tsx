import React from "react";

export const DocumentEcosystemV2: React.FC = () => {
  const handleScrollToCta = () => {
    const elem = document.getElementById("cta-banner");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F8FAFF] py-12 sm:py-16 md:py-20 lg:py-24" id="documents-v2">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 reveal">
          {/* HERO CARD (Left Column) */}
          <div className="lg:col-span-7 xl:col-span-7 relative min-h-[480px] sm:min-h-[540px] lg:min-h-[595px] overflow-hidden rounded-[24px] p-6 sm:p-10 md:p-12 lg:p-14 text-white bg-[radial-gradient(circle_at_90%_100%,rgba(67,112,255,0.45),transparent_38%),linear-gradient(135deg,#101f60_0%,#18389d_55%,#254ddd_100%)] shadow-[0_15px_45px_rgba(30,61,150,0.12)] flex flex-col justify-between before:content-[''] before:absolute before:w-[360px] before:h-[360px] before:-right-10 before:top-20 before:border before:border-white/8 before:rounded-full before:shadow-[0_0_0_45px_rgba(255,255,255,0.015),0_0_0_90px_rgba(255,255,255,0.012)] before:pointer-events-none after:content-[''] after:absolute after:w-[180px] after:h-[100px] after:-left-6 after:-bottom-5 after:opacity-35 after:bg-[radial-gradient(rgba(86,133,255,0.8)_2px,transparent_2px)] after:bg-[length:16px_16px] after:pointer-events-none">
            <div className="relative z-20 max-w-[580px]">
              <div className="w-[58px] h-[58px] sm:w-[68px] sm:h-[68px] rounded-[17px] flex items-center justify-center bg-[#335EE8]/90 mb-7 sm:mb-11 shrink-0 shadow-inner">
                <svg
                  className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] stroke-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                >
                  <path d="M6 2h9l4 4v16H6z" />
                  <path d="M14 2v5h5" />
                  <path d="M9 12h6" />
                  <path d="M9 16h6" />
                </svg>
              </div>

              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-white text-2xl sm:text-4xl lg:text-[42px] xl:text-[50px] leading-[1.1] tracking-[-1.2px] sm:tracking-[-1.8px] font-extrabold mb-4 sm:mb-5">
                Export Documentation
              </h2>

              <p className="text-[#D9E3FF] text-base sm:text-lg lg:text-[19px] leading-[1.7] sm:leading-[1.8] max-w-[570px] mb-7 sm:mb-8">
                Invoices, packing lists and shipment paperwork — generated straight from your order details.
              </p>

              <button
                onClick={handleScrollToCta}
                className="inline-flex items-center gap-3.5 sm:gap-4.5 px-6 py-3.5 sm:px-7 sm:py-4.5 rounded-[14px] bg-white text-[#12359B] text-base sm:text-[17px] font-bold shadow-md hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)] active:translate-y-0 transition-all cursor-pointer border-none"
              >
                Get Started
                <svg
                  className="w-5 h-5 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </div>

            {/* Document Artwork */}
            <div className="hidden lg:block absolute right-4 xl:right-10 top-[120px] lg:top-[140px] xl:top-[150px] w-[260px] lg:w-[290px] xl:w-[310px] h-[330px] z-10 pointer-events-none opacity-80 xl:opacity-100">
              <div className="absolute w-[175px] h-[210px] top-[5px] left-[20px] rounded-[14px] bg-white/35 rotate-3" />

              <div className="absolute w-[170px] h-[205px] top-[105px] left-0 rounded-[14px] bg-white/55 -rotate-1 p-7">
                <div className="h-[9px] rounded-full bg-[#C9D8FB] mb-3.5" />
                <div className="h-[9px] rounded-full bg-[#C9D8FB] mb-3.5" />
                <div className="h-[9px] rounded-full bg-[#C9D8FB] mb-3.5 w-[52%]" />
              </div>

              <div className="absolute w-[190px] h-[250px] top-[50px] left-[80px] rounded-[15px] bg-gradient-to-br from-white to-[#EDF3FF] shadow-[0_20px_45px_rgba(0,0,0,0.15)] px-6.5 py-8">
                <div className="h-[9px] rounded-full bg-[#C9D8FB] mb-3.5" />
                <div className="h-[9px] rounded-full bg-[#C9D8FB] mb-3.5" />
                <div className="h-[9px] rounded-full bg-[#C9D8FB] mb-3.5" />
                <div className="h-[9px] rounded-full bg-[#C9D8FB] mb-3.5" />
                <div className="h-[9px] rounded-full bg-[#C9D8FB] mb-3.5 w-[52%]" />

                <div className="absolute -right-7 -bottom-2 w-[88px] h-[88px] rounded-full flex items-center justify-center bg-[#2860EC] shadow-[0_12px_25px_rgba(18,57,175,0.35)]">
                  <svg
                    className="w-[39px] h-[39px] stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* TOP RIGHT CARDS (Right Column) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-5 sm:gap-6">
            {/* Sales Contract */}
            <article className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] p-6 sm:p-8 lg:p-[36px_38px] border border-[#E1E8F6] rounded-[22px] bg-white/95 shadow-[0_10px_35px_rgba(40,65,120,0.06)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,65,120,0.1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-[18px] bg-[#EEF4FF] mb-5 sm:mb-6 shrink-0">
                  <svg
                    className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] stroke-[#1760EF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.7"
                  >
                    <path d="M6 2h9l4 4v16H6z" />
                    <path d="M14 2v5h5" />
                    <path d="m10 16 4-4" />
                    <path d="m14 16-4-4" />
                  </svg>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#0A2053] text-lg sm:text-xl lg:text-[23px] font-bold leading-[1.25] tracking-[-0.5px] mb-2.5 sm:mb-3 pr-8 sm:pr-10">
                  Sales Contract &amp; Costing
                </h3>

                <p className="text-[#425985] text-sm sm:text-base lg:text-[18px] leading-[1.65] max-w-[430px]">
                  Bring contract terms and costing together in one place.
                </p>
              </div>

              <span className="absolute right-6 sm:right-[36px] top-1/2 -translate-y-1/2 text-[#1461EC] group-hover:translate-x-1 transition-transform">
                <svg
                  className="w-5 h-5 sm:w-[25px] sm:h-[25px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </article>

            {/* Purchase Order */}
            <article className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] p-6 sm:p-8 lg:p-[36px_38px] border border-[#E1E8F6] rounded-[22px] bg-white/95 shadow-[0_10px_35px_rgba(40,65,120,0.06)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,65,120,0.1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-[18px] bg-[#EEF4FF] mb-5 sm:mb-6 shrink-0">
                  <svg
                    className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] stroke-[#1760EF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.7"
                  >
                    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
                    <path d="m3 7v10l9 5 9-5V7" />
                    <path d="M12 12v10" />
                  </svg>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#0A2053] text-lg sm:text-xl lg:text-[23px] font-bold leading-[1.25] tracking-[-0.5px] mb-2.5 sm:mb-3 pr-8 sm:pr-10">
                  Purchase Order &amp; Stock Reports
                </h3>

                <p className="text-[#425985] text-sm sm:text-base lg:text-[18px] leading-[1.65] max-w-[430px]">
                  Track purchase orders alongside stock on hand.
                </p>
              </div>

              <span className="absolute right-6 sm:right-[36px] top-1/2 -translate-y-1/2 text-[#1461EC] group-hover:translate-x-1 transition-transform">
                <svg
                  className="w-5 h-5 sm:w-[25px] sm:h-[25px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </article>
          </div>

          {/* BOTTOM CARDS (Full Width Row) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {/* Payment & Claim Outstanding */}
            <article className="relative min-h-[240px] sm:min-h-[270px] lg:min-h-[295px] p-6 sm:p-8 lg:p-[36px_38px] border border-[#E1E8F6] rounded-[22px] bg-white/95 shadow-[0_10px_35px_rgba(40,65,120,0.06)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,65,120,0.1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-[18px] bg-[#E4F8F3] mb-5 sm:mb-6 shrink-0">
                  <svg
                    className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] stroke-[#16B98D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v18" />
                    <path d="M17 7.5c0-2-2-3-5-3s-5 1-5 3 2 3 5 3 5 1 5 3-2 3-5 3-5-1-5-3" />
                  </svg>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#0A2053] text-lg sm:text-xl lg:text-[23px] font-bold leading-[1.25] tracking-[-0.5px] mb-2.5 sm:mb-3">
                  Payment &amp; Claim Outstanding
                </h3>

                <p className="text-[#425985] text-sm sm:text-base lg:text-[18px] leading-[1.65]">
                  See what's been paid and what's still pending.
                </p>
              </div>

              <span className="w-[34px] h-[34px] rounded-full border-1.5 border-current text-[#16B98D] flex items-center justify-center relative sm:absolute sm:right-[36px] sm:bottom-[36px] mt-4 sm:mt-0 self-end transition-transform group-hover:translate-x-1">
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </article>

            {/* Monthly Returns */}
            <article className="relative min-h-[240px] sm:min-h-[270px] lg:min-h-[295px] p-6 sm:p-8 lg:p-[36px_38px] border border-[#E1E8F6] rounded-[22px] bg-white/95 shadow-[0_10px_35px_rgba(40,65,120,0.06)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,65,120,0.1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-[18px] bg-[#F0EAFF] mb-5 sm:mb-6 shrink-0">
                  <svg
                    className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] stroke-[#7654E9]"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.7"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M8 3v4" />
                    <path d="M16 3v4" />
                    <path d="M3 10h18" />
                    <path d="m10 15 2 2 3-3" />
                  </svg>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#0A2053] text-lg sm:text-xl lg:text-[23px] font-bold leading-[1.25] tracking-[-0.5px] mb-2.5 sm:mb-3">
                  Monthly Returns
                </h3>

                <p className="text-[#425985] text-sm sm:text-base lg:text-[18px] leading-[1.65]">
                  Keep periodic filings organized and on time.
                </p>
              </div>

              <span className="w-[34px] h-[34px] rounded-full border-1.5 border-current text-[#7654E9] flex items-center justify-center relative sm:absolute sm:right-[36px] sm:bottom-[36px] mt-4 sm:mt-0 self-end transition-transform group-hover:translate-x-1">
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </article>

            {/* Scheme Claims Outstanding */}
            <article className="relative min-h-[240px] sm:min-h-[270px] lg:min-h-[295px] p-6 sm:p-8 lg:p-[36px_38px] border border-[#E1E8F6] rounded-[22px] bg-white/95 shadow-[0_10px_35px_rgba(40,65,120,0.06)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,65,120,0.1)] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-[18px] bg-[#FFF2DC] mb-5 sm:mb-6 shrink-0">
                  <svg
                    className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] stroke-[#F2A01B]"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.7"
                  >
                    <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#0A2053] text-lg sm:text-xl lg:text-[23px] font-bold leading-[1.25] tracking-[-0.5px] mb-2.5 sm:mb-3">
                  Scheme Claims Outstanding
                </h3>

                <p className="text-[#425985] text-sm sm:text-base lg:text-[18px] leading-[1.65]">
                  Track export incentive claims in progress.
                </p>
              </div>

              <span className="w-[34px] h-[34px] rounded-full border-1.5 border-current text-[#F2A01B] flex items-center justify-center relative sm:absolute sm:right-[36px] sm:bottom-[36px] mt-4 sm:mt-0 self-end transition-transform group-hover:translate-x-1">
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
