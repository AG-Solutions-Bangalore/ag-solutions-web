import React from "react";
import { getImageUrl } from "@/utils/imageUrl";

interface HeroProps {
  onScrollTo?: (targetId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (onScrollTo) {
      onScrollTo(targetId);
      return;
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#061539] via-[#071B49] to-[#0A235C] pt-10 sm:pt-14 md:pt-16 lg:pt-18 pb-8 sm:pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#287BFF]/20 blur-[130px] rounded-full pointer-events-none -z-0 animate-pulse"
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 pb-4 lg:pb-8">
            <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#CFE0FF] bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
              EXPORT DOCUMENTATION SOFTWARE
            </span>

            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-2xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[4rem] leading-[1.15] tracking-tight mb-4.5 break-words">
              From Manual Paperwork to
              <span className="block bg-gradient-to-r from-[#4A8FFF] via-[#60A5FA] to-[#E91E63] bg-clip-text text-transparent mt-1">
                Digital Documentation — In Minutes.
              </span>
            </h1>

            <p className="text-[#C9D7F5] text-sm sm:text-lg lg:text-[1.15rem] leading-relaxed max-w-[540px] mb-7">
              Export Biz helps Exporters in creating manual export documentations into structured digital documentation, reducing repetitive data entry and making document preparation faster and easier.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7">
              <a
                title="Start Free Demo of Export Biz"
                onClick={(e) => handleClick(e, "demo")}
                className="inline-flex items-center justify-center gap-2 font-['Inter',sans-serif] font-bold text-sm sm:text-[1.05rem] px-6 py-3.5 sm:px-7.5 sm:py-4 rounded-2xl bg-[#E91E63] text-white shadow-[0_10px_26px_rgba(233,30,99,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(233,30,99,0.45)] hover:bg-[#D81B60] transition-all duration-180 ease-in-out whitespace-nowrap min-h-[48px] sm:min-h-[50px] cursor-pointer w-full sm:w-auto"
              >
                Start Free Demo →
              </a>
              <a
                href="#how-it-works"
                title="How AG Solutions Works"
                onClick={(e) => handleClick(e, "how-it-works")}
                className="inline-flex items-center justify-center gap-2 font-['Inter',sans-serif] font-bold text-sm sm:text-[1.05rem] px-6 py-3.5 sm:px-7.5 sm:py-4 rounded-2xl bg-transparent text-white border-1.5 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-180 ease-in-out whitespace-nowrap min-h-[48px] sm:min-h-[50px] cursor-pointer w-full sm:w-auto"
              >
                See How It Works
              </a>
            </div>

            {/* Quick Feature Badges (Ultra-scannable) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/12 text-[#D3E2FF] text-xs font-semibold px-3 py-1.5 rounded-lg transition-transform duration-300 hover:scale-105">
                ⚡ 3-Click Generation
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/12 text-[#D3E2FF] text-xs font-semibold px-3 py-1.5 rounded-lg transition-transform duration-300 hover:scale-105">
                🛡️ 100% Error-Free
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/12 text-[#D3E2FF] text-xs font-semibold px-3 py-1.5 rounded-lg transition-transform duration-300 hover:scale-105">
                📊 Instant Tax &amp; Scheme Reports
              </span>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[460px] lg:max-w-none mx-auto">
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#287BFF]/30 to-[#E91E63]/20 blur-2xl rounded-[32px] -z-10 pointer-events-none animate-pulse"
                aria-hidden="true"
              />

              {/* Rotating Decorative Accent Shapes (ExportBiz Style) */}
              <div className="absolute -left-4 top-6 z-20 hidden sm:block">
                <div className="h-10 w-10 rounded-xl bg-[#00A8B5] shadow-lg animate-spin [animation-duration:12s] transition-transform duration-300 hover:scale-110" />
              </div>

              <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
                <div className="h-11 w-11 rounded-xl bg-[#E91E63] shadow-lg animate-[spin_10s_linear_infinite_reverse] transition-transform duration-300 hover:scale-110" />
              </div>

              <div className="absolute -left-3 -bottom-2 z-20 hidden sm:block animate-bounce [animation-duration:4s]">
                <div className="h-12 w-12 rounded-2xl bg-[#FFB300] shadow-lg animate-spin [animation-duration:15s] transition-transform duration-300 hover:scale-110" />
              </div>

              <div className="relative w-full aspect-[4/3.8] sm:aspect-square rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)] bg-gradient-to-br from-[#287BFF] to-[#071B49] transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={getImageUrl("/images/biz-header.webp")}
                  alt="Export Documentation Software – Export Biz by AG Solutions"
                  title="Export Biz – Export Documentation Software"
                  className="w-full h-full object-contain p-4 block"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Price Tag Badge */}
              <div className="absolute left-3 sm:left-4 bottom-4 sm:bottom-6 z-20 bg-white rounded-[16px] sm:rounded-[18px] shadow-[0_20px_50px_rgba(7,27,73,0.22)] p-3.5 sm:px-5 sm:py-4 min-w-[130px] sm:min-w-[150px] transition-transform duration-300 hover:scale-105">
                <span className="inline-block bg-[#071B49] text-white text-[0.65rem] sm:text-[0.68rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full mb-1.5 sm:mb-2">
                  Starting From
                </span>
                <div className="flex items-baseline gap-0.75">
                  <span className="text-[1.2rem] sm:text-[1.3rem] font-extrabold text-[#FF5A00]">₹</span>
                  <span className="text-[1.7rem] sm:text-[2.15rem] font-extrabold text-[#FF5A00] font-['Plus_Jakarta_Sans',sans-serif] leading-none">
                    999
                  </span>
                </div>
                <div className="text-[0.85rem] sm:text-[0.92rem] font-semibold text-[#071B49] mt-0.5">
                  / month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

