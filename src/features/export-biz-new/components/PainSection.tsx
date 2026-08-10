import React from "react";

export const PainSection: React.FC = () => {
  return (
    <section className="bg-[#071B49] text-center relative overflow-hidden py-14 md:py-20 lg:py-24 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(40,123,255,0.28),transparent_70%)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1742576437150-3a79cae681f2?fm=jpg&q=65&w=1400&auto=format&fit=crop"
          alt=""
          loading="lazy"
          width="1400"
          height="800"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      <div className="relative max-w-[700px] mx-auto px-5 sm:px-8 reveal">
        <span className="inline-block bg-white/10 text-[#D3E2FF] text-[0.72rem] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
          EFFORTLESS EXPORT OPERATIONS
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white text-[1.9rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[1.1] mb-4">
          Exporting Is Hard. Paperwork Shouldn't Be.
        </h2>
        <p className="text-[#C4D3F4] text-base sm:text-[1.1rem] leading-relaxed">
          Stop wasting hours on manual spreadsheets and repetitive customs errors. Export Biz organizes your invoices, returns, and claims automatically.
        </p>
      </div>
    </section>
  );
};
