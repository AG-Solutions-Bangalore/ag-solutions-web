import React from "react";

interface ExportBizCommonCTAProps {
  onOpenDemo: () => void;
}

export const ExportBizCommonCTA: React.FC<ExportBizCommonCTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-[78px] bg-[#f7f6f1] box-border">
      <div className="max-w-[1200px] mx-auto px-8 box-border">
        <div className="bg-[#12141a] text-white rounded-[24px] py-14 px-12 text-center relative overflow-hidden box-border shadow-lg">
          
          {/* Loss Aversion Headline */}
          <h2 className="text-[30px] font-bold font-space-grotesk tracking-[-0.6px] m-0 mb-3 relative box-border">
            Stop leaking duty drawback claims. Start automating today.
          </h2>
          <p className="text-[#c7c9ce] text-[15px] max-w-[500px] mx-auto mb-[26px] relative box-border">
            Book a 15-minute walkthrough. Bring a real Purchase Order — we'll demonstrate your automated billing, packing list, and claims lifecycle live.
          </p>
          
          <div className="flex gap-[14px] justify-center flex-wrap relative box-border mb-4">
            {/* Benefit-focused CTA Button */}
            <button
              onClick={onOpenDemo}
              className="bg-[#e39a3b] text-[#1c3a54] flex items-center gap-2 font-space-grotesk font-bold text-[14.5px] py-[14px] px-[26px] rounded-[8px] no-underline border border-transparent cursor-pointer hover:scale-[1.02] hover:bg-[#d08b30] transition-all box-border"
            >
              Protect My Shipments — Start Saving Now →
            </button>
            <a
              href="mailto:info@exportbiz.in"
              title="Email Export Biz"
              className="border border-white/25 text-white bg-transparent flex items-center gap-2 font-space-grotesk font-bold text-[14.5px] py-[14px] px-[26px] rounded-[8px] no-underline cursor-pointer hover:scale-[1.02] hover:bg-white/5 transition-all box-border"
            >
              Email sales
            </a>
          </div>
          
          {/* Trust Reassurance & Speed Anchor */}
          <div className="text-[12px] font-mono text-[#c7c9ce]/60 relative z-1">
            🛡️ Cancel anytime. No obligations. Average onboarding setup takes less than 24 hours.
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExportBizCommonCTA;
