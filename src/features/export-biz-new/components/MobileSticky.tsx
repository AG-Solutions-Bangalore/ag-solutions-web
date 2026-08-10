import React from "react";

interface MobileStickyProps {
  onCtaClick?: (targetId: string) => void;
}

export const MobileSticky: React.FC<MobileStickyProps> = ({ onCtaClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick("cta-banner");
      return;
    }
    const elem = document.getElementById("cta-banner");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[150] bg-white border-t border-[#E3E9F6] p-3 sm:px-4 shadow-[0_-8px_24px_rgba(7,27,73,0.1)]">
      <a
        href="#cta-banner"
        onClick={handleClick}
        className="w-full inline-flex items-center justify-center font-['Inter',sans-serif] font-bold text-base min-h-[48px] px-6 py-3 rounded-xl bg-[#FF5A00] text-white shadow-[0_10px_26px_rgba(255,90,0,0.32)] text-center cursor-pointer"
      >
        Start Free Demo →
      </a>
    </div>
  );
};
