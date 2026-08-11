import React from "react";

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
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#287BFF]/15 blur-[130px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 pb-4 lg:pb-8">
            <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#CFE0FF] bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
              Export Biz · by AG Solutions
            </span>

            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[4rem] leading-[1.1] tracking-tight mb-4.5 break-words">
              Export Documentation.
              <span className="block bg-gradient-to-r from-[#4A8FFF] via-[#60A5FA] to-[#FF5A00] bg-clip-text text-transparent mt-1">
                Done in Minutes.
              </span>
            </h1>

            <p className="text-[#C9D7F5] text-base sm:text-lg lg:text-[1.15rem] leading-relaxed max-w-[540px] mb-7">
              Turn order details into export invoices, packing lists &amp; scheme claims — in 3 simple clicks.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-7">
              <a
                onClick={(e) => handleClick(e, "demo")}
                className="inline-flex items-center justify-center gap-2 font-['Inter',sans-serif] font-bold text-base sm:text-[1.05rem] px-7 py-3.5 sm:px-7.5 sm:py-4 rounded-2xl bg-[#FF5A00] text-white shadow-[0_10px_26px_rgba(255,90,0,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,90,0,0.45)] hover:bg-[#E64F00] transition-all duration-180 ease-in-out whitespace-nowrap min-h-[50px] cursor-pointer"
              >
                Start Free Demo →
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => handleClick(e, "how-it-works")}
                className="inline-flex items-center justify-center gap-2 font-['Inter',sans-serif] font-bold text-base sm:text-[1.05rem] px-7 py-3.5 sm:px-7.5 sm:py-4 rounded-2xl bg-transparent text-white border-1.5 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-180 ease-in-out whitespace-nowrap min-h-[50px] cursor-pointer"
              >
                See How It Works
              </a>
            </div>

            {/* Quick Feature Badges (Ultra-scannable) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/12 text-[#D3E2FF] text-xs font-semibold px-3 py-1.5 rounded-lg">
                ⚡ 3-Click Generation
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/12 text-[#D3E2FF] text-xs font-semibold px-3 py-1.5 rounded-lg">
                🛡️ 100% Error-Free
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/12 text-[#D3E2FF] text-xs font-semibold px-3 py-1.5 rounded-lg">
                📊 Instant Tax &amp; Scheme Reports
              </span>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[460px] lg:max-w-none mx-auto">
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#287BFF]/30 to-[#FF5A00]/20 blur-2xl rounded-[32px] -z-10 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative w-full aspect-[4/3.8] sm:aspect-square rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)] bg-gradient-to-br from-[#287BFF] to-[#071B49]">
                <img
                  src="https://images.unsplash.com/photo-1741792191212-60d22002bd1b?fm=jpg&q=75&w=900&auto=format&fit=crop"
                  srcSet="https://images.unsplash.com/photo-1741792191212-60d22002bd1b?fm=jpg&q=75&w=600&auto=format&fit=crop 600w,
                          https://images.unsplash.com/photo-1741792191212-60d22002bd1b?fm=jpg&q=75&w=900&auto=format&fit=crop 900w,
                          https://images.unsplash.com/photo-1741792191212-60d22002bd1b?fm=jpg&q=80&w=1400&auto=format&fit=crop 1400w"
                  sizes="(max-width: 680px) 90vw, (max-width: 1024px) 45vw, 460px"
                  width="900"
                  height="900"
                  alt="Cargo ship loaded with shipping containers at port"
                  className="w-full h-full object-cover block"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071B49]/30 to-[#071B49]/70" />
              </div>

              {/* Price Tag Badge */}
              <div className="absolute left-3 sm:left-4 bottom-4 sm:bottom-6 z-10 bg-white rounded-[16px] sm:rounded-[18px] shadow-[0_20px_50px_rgba(7,27,73,0.22)] p-3.5 sm:px-5 sm:py-4 min-w-[130px] sm:min-w-[150px]">
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
