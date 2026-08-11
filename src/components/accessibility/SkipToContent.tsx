import React from "react";

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      title="Skip to Main Content"
      className="absolute left-4 top-4 z-[9999] -translate-y-36 bg-[#1289bc] px-6 py-3.5 text-[15px] font-bold text-white no-underline shadow-lg transition-transform duration-200 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#1289bc] focus:ring-offset-2 rounded-[8px]"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
