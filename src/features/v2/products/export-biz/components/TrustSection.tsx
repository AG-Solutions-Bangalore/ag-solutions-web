import React from "react";
import AnimatedCounter from "@/components/animation/AnimatedCounter";

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-background py-8 sm:py-12 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto text-center mb-8 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-teal bg-teal-light/50 px-3.5 py-1 rounded-full mb-2.5 border border-teal-border/40">
            Why Businesses Trust Export Biz
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-dark text-xl sm:text-2xl lg:text-3xl leading-tight">
            Built on a Decade of Business Software.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-4 sm:gap-5 reveal">
          <div className="flex-1 min-w-[200px] bg-section-alt border border-border text-dark rounded-2xl p-5 sm:p-6 flex flex-col justify-center text-center sm:text-left">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-black text-3xl sm:text-4xl bg-gradient-to-r from-teal to-blue bg-clip-text text-transparent leading-none">
              <AnimatedCounter value="15+" />
            </span>
            <span className="text-muted text-xs sm:text-sm mt-2 font-medium">
              Years building web, mobile &amp; business software
            </span>
          </div>

          <div className="flex-1 min-w-[200px] bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-2xs">
            <span className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-3 shadow-xs border border-teal-border/40">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8l9-5 9 5-9 5-9-5z" />
                <path d="M3 8v8l9 5 9-5V8" />
              </svg>
            </span>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base font-bold text-dark mb-1">
              Built for Export Workflows
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Designed around how Indian exporters actually work.
            </p>
          </div>

          <div className="flex-1 min-w-[200px] bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-2xs">
            <span className="w-10 h-10 rounded-xl bg-pink-light text-pink flex items-center justify-center mb-3 shadow-xs border border-pink-border/40">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 3h7l4 4v14H7V3z" />
                <path d="M14 3v4h4" />
                <path d="M9.5 12h5M9.5 15.5h5" />
              </svg>
            </span>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base font-bold text-dark mb-1">
              Standardized Formats
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Consistent documents your team can rely on.
            </p>
          </div>

          <div className="flex-1 min-w-[200px] bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-2xs">
            <span className="w-10 h-10 rounded-xl bg-green-light text-green flex items-center justify-center mb-3 shadow-xs border border-green-border/40">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base font-bold text-dark mb-1">
              Compliance-Focused Design
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Built with export documentation requirements in mind.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs sm:text-sm text-muted reveal font-medium">
          Export Biz is built by AG Solutions — also the team behind web, mobile and desktop software for growing businesses.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
