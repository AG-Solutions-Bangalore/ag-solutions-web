import React from "react";

interface CtaBannerProps {
  onStartDemo?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartDemo }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onStartDemo) {
      e.preventDefault();
      onStartDemo();
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#071B49] via-[#0E2C6B] to-[#1557E8] text-center relative overflow-hidden py-16 md:py-24 lg:py-28" id="cta-banner">
      <svg
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="600" cy="250" r="230" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" />
        <ellipse cx="600" cy="250" rx="230" ry="60" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" />
        <ellipse cx="600" cy="250" rx="80" ry="230" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" />
        <path
          d="M250 150 Q400 60 520 110"
          fill="none"
          stroke="#FF5A00"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="4 7"
        />
        <path
          d="M950 380 Q800 440 680 400"
          fill="none"
          stroke="#287BFF"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeDasharray="4 7"
        />
      </svg>

      <div className="relative max-w-[680px] mx-auto px-5 sm:px-8 reveal">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[1.9rem] sm:text-[2.3rem] lg:text-[2.8rem] leading-[1.08] mb-4">
          Ready to Simplify Your Export Documentation?
        </h2>
        <p className="text-[#C9D7F5] text-lg sm:text-[1.12rem] mb-9">
          See how quickly your export paperwork can come together.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <a
            href="#top"
            title="Back to Top"
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-2 font-['Inter',sans-serif] font-bold text-[1.05rem] px-7.5 py-4 rounded-2xl bg-[#FF5A00] text-white shadow-[0_10px_26px_rgba(255,90,0,0.32)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,90,0,0.4)] hover:bg-[#E64F00] transition-all duration-180 ease-in-out whitespace-nowrap min-h-[52px] cursor-pointer"
          >
            Start Your Free Demo →
          </a>
          <a
            href="https://ag-solutions.in/"
            title="AG Solutions Home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-['Inter',sans-serif] font-bold text-[1.05rem] px-7.5 py-4 rounded-2xl bg-transparent text-white border-1.5 border-white/50 hover:border-white hover:bg-white/8 transition-all duration-180 ease-in-out whitespace-nowrap min-h-[52px] cursor-pointer"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
};
