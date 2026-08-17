import React from "react";
import { useLeadModal } from "@/context/LeadModalContext";

export const DocumentEcosystemV2: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  const handleOpenLeadModal = (context: string) => {
    openLeadModal(`Export Biz - ${context}`);
  };

  return (
    <section className="bg-section-alt py-6 sm:py-10 border-t border-border transition-colors duration-200" id="documents-v2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 reveal">
          {/* HERO CARD (Left Column) */}
          <div className="lg:col-span-7 xl:col-span-7 relative min-h-[360px] sm:min-h-[400px] lg:min-h-[430px] overflow-hidden rounded-2xl p-5 sm:p-7 lg:p-8 text-white bg-[radial-gradient(circle_at_90%_100%,rgba(67,112,255,0.45),transparent_38%),linear-gradient(135deg,#0d1a54_0%,#153696_55%,#1f47d4_100%)] shadow-md flex flex-col justify-between before:content-[''] before:absolute before:w-[320px] before:h-[320px] before:-right-10 before:top-20 before:border before:border-white/8 before:rounded-full before:pointer-events-none">
            
            {/* Left Content Side */}
            <div className="relative z-20 max-w-[280px] sm:max-w-[340px] lg:max-w-[320px] xl:max-w-[380px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-[#335EE8] mb-4 sm:mb-5 shrink-0 shadow-md">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 stroke-white"
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

              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-white text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight font-extrabold mb-2.5 sm:mb-3">
                Export Documentation
              </h2>

              <p className="text-[#E2ECFF] font-medium text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-5 sm:mb-6">
                Invoices, packing lists and shipment paperwork — generated straight from your order details.
              </p>

              <button
                type="button"
                onClick={() => handleOpenLeadModal("Export Documentation")}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-[#12359B] text-xs sm:text-sm font-bold shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all cursor-pointer border-none"
              >
                <span>Get Started</span>
                <svg
                  className="w-4 h-4 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.2"
                >
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </div>

            {/* Document Artwork on Far-Right Side */}
            <div className="hidden sm:block absolute right-2 xl:right-4 top-[80px] sm:top-[90px] lg:top-[70px] xl:top-[80px] w-[180px] sm:w-[210px] lg:w-[230px] xl:w-[250px] h-[260px] z-10 pointer-events-none opacity-80 lg:opacity-90 xl:opacity-100">
              <div className="absolute w-[130px] h-[160px] top-[5px] left-[15px] rounded-xl bg-white/25 rotate-3" />

              <div className="absolute w-[130px] h-[160px] top-[75px] left-0 rounded-xl bg-white/40 -rotate-1 p-4">
                <div className="h-[6px] rounded-full bg-[#C9D8FB] mb-2.5" />
                <div className="h-[6px] rounded-full bg-[#C9D8FB] mb-2.5" />
                <div className="h-[6px] rounded-full bg-[#C9D8FB] mb-2.5 w-[52%]" />
              </div>

              <div className="absolute w-[150px] h-[190px] top-[35px] left-[50px] rounded-2xl bg-gradient-to-br from-white to-[#EDF3FF] shadow-lg px-4 py-5">
                <div className="h-[6px] rounded-full bg-[#C9D8FB] mb-2.5" />
                <div className="h-[6px] rounded-full bg-[#C9D8FB] mb-2.5" />
                <div className="h-[6px] rounded-full bg-[#C9D8FB] mb-2.5" />
                <div className="h-[6px] rounded-full bg-[#C9D8FB] mb-2.5" />
                <div className="h-[6px] rounded-full bg-[#C9D8FB] mb-2.5 w-[52%]" />

                <div className="absolute -right-3 -bottom-2 w-14 h-14 rounded-full flex items-center justify-center bg-[#2860EC] shadow-md">
                  <svg
                    className="w-6 h-6 stroke-white"
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
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* Sales Contract */}
            <article 
              onClick={() => handleOpenLeadModal("Sales Contract & Costing")}
              className="relative min-h-[170px] sm:min-h-[190px] lg:min-h-[205px] p-4 sm:p-5 lg:p-6 border border-border rounded-2xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-teal-light mb-3 sm:mb-4 shrink-0 border border-teal-border/40">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 stroke-teal"
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

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-dark text-base sm:text-lg lg:text-xl font-bold leading-snug tracking-tight mb-1.5 pr-6 sm:pr-8">
                  Sales Contract &amp; Costing
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-sm">
                  Bring contract terms and costing together in one place.
                </p>
              </div>

              <span className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-teal group-hover:translate-x-1 transition-transform">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
            <article 
              onClick={() => handleOpenLeadModal("Purchase Order & Stock Reports")}
              className="relative min-h-[170px] sm:min-h-[190px] lg:min-h-[205px] p-4 sm:p-5 lg:p-6 border border-border rounded-2xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-teal-light mb-3 sm:mb-4 shrink-0 border border-teal-border/40">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 stroke-teal"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.7"
                  >
                    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
                    <path d="m3 7v10l9 5 9-5V7" />
                    <path d="M12 12v10" />
                  </svg>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-dark text-base sm:text-lg lg:text-xl font-bold leading-snug tracking-tight mb-1.5 pr-6 sm:pr-8">
                  Purchase Order &amp; Stock Reports
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-sm">
                  Track purchase orders alongside stock on hand.
                </p>
              </div>

              <span className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-teal group-hover:translate-x-1 transition-transform">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {/* Payment & Claim Outstanding */}
            <article 
              onClick={() => handleOpenLeadModal("Payment & Claim Outstanding")}
              className="relative min-h-[175px] sm:min-h-[195px] lg:min-h-[210px] p-4 sm:p-5 lg:p-6 border border-border rounded-2xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-teal-light mb-3 sm:mb-4 shrink-0 border border-teal-border/40">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 stroke-teal"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v18" />
                    <path d="M17 7.5c0-2-2-3-5-3s-5 1-5 3 2 3 5 3 5 1 5 3-2 3-5 3-5-1-5-3" />
                  </svg>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-dark text-base sm:text-lg lg:text-xl font-bold leading-snug tracking-tight mb-1.5">
                  Payment &amp; Claim Outstanding
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  See what's been paid and what's still pending.
                </p>
              </div>

              <span className="w-7 h-7 rounded-full border border-teal text-teal flex items-center justify-center relative sm:absolute sm:right-5 sm:bottom-5 mt-3 sm:mt-0 self-end transition-transform group-hover:translate-x-1">
                <svg
                  className="w-3.5 h-3.5"
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
            <article 
              onClick={() => handleOpenLeadModal("Monthly Returns")}
              className="relative min-h-[175px] sm:min-h-[195px] lg:min-h-[210px] p-4 sm:p-5 lg:p-6 border border-border rounded-2xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-pink-light mb-3 sm:mb-4 shrink-0 border border-pink-border/40">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 stroke-pink"
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

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-dark text-base sm:text-lg lg:text-xl font-bold leading-snug tracking-tight mb-1.5">
                  Monthly Returns
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  Keep periodic filings organized and on time.
                </p>
              </div>

              <span className="w-7 h-7 rounded-full border border-pink text-pink flex items-center justify-center relative sm:absolute sm:right-5 sm:bottom-5 mt-3 sm:mt-0 self-end transition-transform group-hover:translate-x-1">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </article>

            {/* Custom Report & Mis */}
            <article 
              onClick={() => handleOpenLeadModal("Custom Report & Mis")}
              className="relative min-h-[175px] sm:min-h-[195px] lg:min-h-[210px] p-4 sm:p-5 lg:p-6 border border-border rounded-2xl bg-card shadow-2xs hover:-translate-y-0.5 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-teal-light mb-3 sm:mb-4 shrink-0 border border-teal-border/40">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 stroke-teal"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-dark text-base sm:text-lg lg:text-xl font-bold leading-snug tracking-tight mb-1.5">
                  Custom Report &amp; MIS
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  Generate export reports the way management wants to see them.
                </p>
              </div>

              <span className="w-7 h-7 rounded-full border border-teal text-teal flex items-center justify-center relative sm:absolute sm:right-5 sm:bottom-5 mt-3 sm:mt-0 self-end transition-transform group-hover:translate-x-1">
                <svg
                  className="w-3.5 h-3.5"
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

export default DocumentEcosystemV2;
