import React, { useState, useEffect } from "react";

export const ToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 900);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      id="toTop"
      className={`fixed right-4 sm:right-6 bottom-[90px] md:bottom-6 z-[150] w-[46px] h-[46px] rounded-full bg-[#071B49] text-white flex items-center justify-center shadow-[0_14px_34px_rgba(7,27,73,0.10)] transition-all duration-250 ease-in-out hover:bg-[#1557E8] cursor-pointer ${
        isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
      }`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};
