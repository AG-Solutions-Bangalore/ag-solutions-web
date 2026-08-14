import React from "react";
import AnimatedSection from "@/components/animation/AnimatedSection";

export const ExportBizProblemSolution: React.FC = () => {
  return (
    <AnimatedSection
      className="py-20 relative overflow-hidden bg-white box-border"
      ariaLabel="Why switch to EXPORT BIZ"
      id="solve"
    >
      {(isVisible) => (
        <>
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

          <div className="relative max-w-[1200px] mx-auto px-8 box-border z-1">
            {/* Header Block */}
            <div className={`max-w-[700px] mb-14 box-border home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
              <p className="text-[#3386bd] text-[13px] leading-[25px] font-mono font-bold tracking-[2.5px] uppercase mt-3 mb-[10px] flex items-center gap-[10px] box-border">
                Why exporters switch
              </p>
              <h2 className="text-[34px] md:text-[40px] font-bold font-space-grotesk tracking-[-0.8px] leading-[1.15] m-0 box-border text-[#12141a]">
                Paperwork shouldn't be the bottleneck in getting paid.
              </h2>
              <p className="text-[#63666c] text-[16px] leading-[26px] mt-4 box-border max-w-[620px]">
                Most export teams still rebuild the same shipment details across a dozen documents by hand. EXPORT BIZ fills them once and reuses that data everywhere — so the invoice, the packing list, and the bank forms always agree.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 box-border">
              
              {/* Card 1: Manual Way (Focuses on Loss Aversion) */}
              <div 
                className={`bg-white border border-red-200 rounded-[20px] p-8 lg:p-10 box-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_-8px_rgba(239,68,68,0.08)] hover:border-red-300 transition-all duration-300 flex flex-col justify-between home-animated-item ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-red-600 font-bold bg-red-50 py-1 px-3 rounded-full border border-red-100">
                      ● RISK & LEAKAGE INHERENT
                    </span>
                    <span className="text-red-600 font-bold text-xs uppercase tracking-wider">Manual Method</span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk tracking-[-0.4px] m-0 mb-6 text-[#12141a] box-border">
                    The manual spreadsheet bottleneck
                  </h3>
                  <ul className="list-none m-0 p-0 box-border space-y-4">
                    <li className="text-[14.5px] leading-[23px] flex gap-3.5 items-start text-[#63666c] box-border">
                      <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✕</span>
                      <span><b>Duty Drawback Leakage:</b> Unclaimed incentives and missed scroll expiry dates cost average exporters ₹4.8L+ annually.</span>
                    </li>
                    <li className="text-[14.5px] leading-[23px] flex gap-3.5 items-start text-[#63666c] box-border">
                      <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✕</span>
                      <span><b>Demurrage Risk:</b> Customs holds (up to ₹30,000/day) triggered by simple spelling typos between shipping bills and invoices.</span>
                    </li>
                    <li className="text-[14.5px] leading-[23px] flex gap-3.5 items-start text-[#63666c] box-border">
                      <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✕</span>
                      <span><b>Fragmented Audit Trail:</b> Hand-copying data across POs, invoices, packing lists, and bills of lading.</span>
                    </li>
                    <li className="text-[14.5px] leading-[23px] flex gap-3.5 items-start text-[#63666c] box-border">
                      <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✕</span>
                      <span><b>Excessive Headcount:</b> hiring extra documentation clerks to handle repetitive peak-season typing.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-red-100 mt-8 flex justify-between items-center text-xs text-red-600 font-mono font-bold">
                  <span>DOCUMENT TIME: 3-4 HOURS</span>
                  <span>EST. ANNUAL LOSS: ₹4.8L - ₹6.2L</span>
                </div>
              </div>

              {/* Card 2: EDMS Way (Focuses on Gains & Certainty) */}
              <div 
                className={`bg-white border border-[#2fae73]/30 rounded-[20px] p-8 lg:p-10 box-border shadow-[0_4px_25px_-5px_rgba(47,174,115,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(47,174,115,0.12)] hover:border-[#2fae73]/80 transition-all duration-300 flex flex-col justify-between relative group home-animated-item ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "250ms" }}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-[#2fae73] font-bold bg-[#2fae73]/10 py-1 px-3 rounded-full border border-[#2fae73]/20">
                      ★ AUTOMATED CERTAINTY
                    </span>
                    <span className="text-[#2fae73] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <i className="w-2 h-2 rounded-full bg-[#2fae73] block animate-pulse"></i>
                      Optimized
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk tracking-[-0.4px] m-0 mb-6 text-[#12141a] box-border">
                    The streamlined automation engine
                  </h3>
                  <ul className="list-none m-0 p-0 box-border space-y-4">
                    <li className="text-[14.5px] leading-[23px] flex gap-3.5 items-start text-[#12141a] box-border">
                      <span className="w-5 h-5 rounded-full bg-[#2fae73]/12 text-[#2fae73] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</span>
                      <span><b>Zero-Leakage Claims:</b> Automatic alerts match shipping bill dates to RoDTEP scroll deadlines, securing 100% of incentives.</span>
                    </li>
                    <li className="text-[14.5px] leading-[23px] flex gap-3.5 items-start text-[#12141a] box-border">
                      <span className="w-5 h-5 rounded-full bg-[#2fae73]/12 text-[#2fae73] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</span>
                      <span><b>Instant Deserialization:</b> Enter shipment details once, generating clean, matched buyer files and packing slips instantly.</span>
                    </li>
                    <li className="text-[14.5px] leading-[23px] flex gap-3.5 items-start text-[#12141a] box-border">
                      <span className="w-5 h-5 rounded-full bg-[#2fae73]/12 text-[#2fae73] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</span>
                      <span><b>Centralized Ledger:</b> View turnover, bank realization certificates (BRCs), and pending buyer receipts updating live.</span>
                    </li>
                    <li className="text-[14.5px] leading-[23px] flex gap-3.5 items-start text-[#12141a] box-border">
                      <span className="w-5 h-5 rounded-full bg-[#2fae73]/12 text-[#2fae73] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</span>
                      <span><b>Operational Cost Cap:</b> Cap admin expenses by empowering your existing staff with high-efficiency automation.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-8 flex justify-between items-center text-xs text-[#2fae73] font-mono font-bold">
                  <span>DOCUMENT TIME: &lt; 5 MINS (1 CLICK)</span>
                  <span>EST. SAVINGS: 100% SECURED CLAIMS</span>
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </AnimatedSection>
  );
};
