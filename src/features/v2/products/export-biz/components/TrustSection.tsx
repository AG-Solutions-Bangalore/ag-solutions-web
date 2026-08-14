import React from "react";

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-28 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="max-w-[640px] mx-auto text-center mb-13 reveal">
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.09em] uppercase text-teal bg-teal-light/50 px-4 py-1.75 rounded-full mb-4.5 border border-teal-border/40">
            Why Businesses Trust Export Biz
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-dark text-[1.6rem] sm:text-[2.3rem] lg:text-[2.7rem] leading-[1.15]">
            Built on a Decade of Business Software.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-4 sm:gap-5 reveal">
          <div className="flex-1 min-w-[200px] bg-section-alt border border-border text-dark rounded-[24px] p-6 sm:p-7 flex flex-col justify-center">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[2.4rem] sm:text-[2.8rem] bg-gradient-to-r from-teal to-blue bg-clip-text text-transparent leading-none">
              15+
            </span>
            <span className="text-muted text-xs sm:text-[0.92rem] mt-2">
              Years building web, mobile &amp; business software
            </span>
          </div>

          <div className="flex-1 min-w-[200px] bg-card border border-border rounded-[24px] p-7 shadow-2xs">
            <span className="w-11 h-11 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-4 shadow-sm border border-teal-border/40">
              <svg
                className="w-6 h-6"
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
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.02rem] font-bold text-dark mb-1.5">
              Built for Export Workflows
            </h3>
            <p className="text-[0.88rem] text-muted">
              Designed around how Indian exporters actually work.
            </p>
          </div>

          <div className="flex-1 min-w-[200px] bg-card border border-border rounded-[24px] p-7 shadow-2xs">
            <span className="w-11 h-11 rounded-xl bg-pink-light text-pink flex items-center justify-center mb-4 shadow-sm border border-pink-border/40">
              <svg
                className="w-6 h-6"
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
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.02rem] font-bold text-dark mb-1.5">
              Standardized Formats
            </h3>
            <p className="text-[0.88rem] text-muted">
              Consistent documents your team can rely on.
            </p>
          </div>

          <div className="flex-1 min-w-[200px] bg-card border border-border rounded-[24px] p-7 shadow-2xs">
            <span className="w-11 h-11 rounded-xl bg-green-light text-green flex items-center justify-center mb-4 shadow-sm border border-green-border/40">
              <svg
                className="w-6 h-6"
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
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.02rem] font-bold text-dark mb-1.5">
              Compliance-Focused Design
            </h3>
            <p className="text-[0.88rem] text-muted">
              Built with export documentation requirements in mind.
            </p>
          </div>
        </div>

        <p className="mt-9 text-center text-[0.92rem] text-muted reveal">
          Export Biz is built by AG Solutions — also the team behind web, mobile and desktop software for growing businesses.
        </p>
      </div>
    </section>
  );
};
