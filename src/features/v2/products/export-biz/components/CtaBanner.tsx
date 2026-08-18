import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Headphones } from "lucide-react";
import { getImageUrl } from "@/utils/imageUrl";

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
    <section className="bg-gradient-to-r from-[#071B49] via-[#0E2C6B] to-[#1557E8] text-white relative overflow-hidden py-10 sm:py-14" id="cta-banner">
      {/* Background Subtle Geometry */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="600" cy="250" r="230" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" />
        <ellipse cx="600" cy="250" rx="230" ry="60" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Column: Content & Buttons (PDF Page 14) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Ready to Simplify Your <br className="hidden sm:inline" />
              <span className="text-[#FF5A00]">Export Documentation?</span>
            </h2>
            <p className="mt-3 text-[#C9D7F5] text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              See how quickly your export paperwork can come together with our automated digital ecosystem.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                to="#top"
                title="Start Your Free Demo"
                onClick={handleClick}
                className="inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full bg-[#FF5A00] text-white shadow-lg hover:bg-[#E64F00] transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer w-full sm:w-auto no-underline"
              >
                <span>Start Your Free Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contacts"
                title="Contact AG Solutions – Talk to an Expert"
                className="inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer w-full sm:w-auto no-underline"
              >
                <Headphones className="h-4 w-4" />
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Export / Cargo Illustration with Colored Accents (PDF Page 14) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xs p-4 border border-white/20 shadow-2xl">
                <img
                  src={getImageUrl("/images/exportbiz/ship.png")}
                  alt="Export Documentation Automation"
                  title="Export Documentation Shipping"
                  className="w-full h-auto object-contain rounded-xl drop-shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getImageUrl("/images/exportbiz/Shipping Yard.png");
                  }}
                />
              </div>

              {/* Decorative Accent Dots */}
              <div className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-teal shadow-md" />
              <div className="absolute -right-2 -bottom-2 h-6 w-6 rounded-full bg-pink shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
