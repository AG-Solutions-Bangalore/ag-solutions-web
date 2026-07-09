import React from "react";

interface ExportBizCommonCTAProps {
  onOpenDemo: () => void;
}

export const ExportBizCommonCTA: React.FC<ExportBizCommonCTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-[78px] box-border">
      <div className="max-w-[1200px] mx-auto px-8 box-border">
        <div className="bg-[#12141a] text-white rounded-[24px] py-14 px-12 text-center relative overflow-hidden box-border shadow-lg">
          <h2 className="text-[30px] font-bold font-space-grotesk tracking-[-0.6px] m-0 mb-3 relative box-border">
            See your own shipments on EXPORT BIZ.
          </h2>
          <p className="text-[#c7c9ce] text-[15px] max-w-[440px] mx-auto mb-[26px] relative box-border">
            Book a free walkthrough. Bring a real Purchase Order — we'll show
            you the invoice, packing list, and BL draft generated live.
          </p>
          <div className="flex gap-[14px] justify-center flex-wrap relative box-border">
            <button
              onClick={onOpenDemo}
              className="bg-[#e39a3b] text-[#1c3a54] flex items-center gap-2 font-space-grotesk font-bold text-[14.5px] py-[14px] px-[26px] rounded-[8px] no-underline border border-transparent cursor-pointer hover:scale-[1.02] hover:bg-[#d08b30] transition-all box-border"
            >
              Book a demo →
            </button>
            <a
              href="mailto:info@exportbiz.in"
              className="border border-white/25 text-white bg-transparent flex items-center gap-2 font-space-grotesk font-bold text-[14.5px] py-[14px] px-[26px] rounded-[8px] no-underline cursor-pointer hover:scale-[1.02] hover:bg-white/5 transition-all box-border"
            >
              Email sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportBizCommonCTA;
