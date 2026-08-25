import React from "react";
import { ArrowRight, Headphones } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { getImageUrl } from "@/utils/imageUrl";

interface CtaBannerProps {
  onStartDemo?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartDemo }) => {
  const { openLeadModal } = useLeadModal();

  const handleStartDemo = () => {
    if (onStartDemo) {
      onStartDemo();
    } else {
      openLeadModal("Export Biz Software");
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#071B49] via-[#0E2C6B] to-[#1557E8] text-white relative overflow-hidden py-12 sm:py-16 md:py-20" id="cta-banner">
      {/* Background Subtle Geometry */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="600" cy="250" r="280" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.5" />
        <ellipse cx="600" cy="250" rx="320" ry="80" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Left Column: Text & CTA Buttons (50% Width) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight">
              Ready to Simplify Your <br className="hidden sm:inline" />
              <span className="text-[#FF5A00]">Export Documentation?</span>
            </h2>

            <p className="mt-4 text-[#C9D7F5] text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              See how quickly your export paperwork can come together with our automated digital ecosystem.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={handleStartDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold text-xs sm:text-sm px-7 py-4 rounded-full bg-[#FF5A00] hover:bg-[#E64F00] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer border-none"
              >
                <span>Start Your Free Demo</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={() => openLeadModal("Export Biz - Talk to Expert")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold text-xs sm:text-sm px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <Headphones className="h-4 w-4" />
                <span>Talk to an Expert</span>
              </button>
            </div>
          </div>

          {/* Right Column: Large Framed Cargo Ship Illustration (50% Width) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-3 sm:p-4 border border-white/25 shadow-2xl">
                <img
                  src={getImageUrl("/images/exportbiz/ship.png")}
                  alt="Ready to Simplify Your Export Documentation"
                  title="Ready to Simplify Your Export Documentation"
                  className="w-full h-[240px] sm:h-[300px] object-cover rounded-2xl drop-shadow-xl transition-transform duration-500 hover:scale-102"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getImageUrl("/images/exportbiz/Shipping Yard.png");
                  }}
                  loading="lazy"
                />
              </div>

              {/* Decorative Accent Dots */}
              <div className="absolute -left-3 -top-3 h-8 w-8 rounded-full bg-teal shadow-lg border-2 border-white/40" />
              <div className="absolute -right-3 -bottom-3 h-8 w-8 rounded-full bg-pink shadow-lg border-2 border-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
