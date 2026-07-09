import React from "react";

export const ExportBizProblemSolution: React.FC = () => {
  return (
    <section id="solve" className="py-[78px] box-border">
      <div className="max-w-[1200px] mx-auto box-border">
        {/* Header Block */}
        <div className="max-w-[600px] mb-11 box-border">
          <p className="text-[#63666c] text-[15.5px] leading-[25px] font-mono tracking-[2.5px] uppercase mt-3 mb-[14px] flex items-center gap-[10px] box-border">
            Why exporters switch
          </p>
          <h2 className="text-[32px] font-bold font-space-grotesk tracking-[-0.64px] m-0 box-border text-[#12141a]">
            Paperwork shouldn't be the bottleneck in getting paid.
          </h2>
          <p className="text-[#63666c] text-[15.5px] leading-[25px] mt-3 box-border">
            Most export teams still rebuild the same shipment details across a dozen documents by hand. EXPORT BIZ fills them once and reuses that data everywhere — so the invoice, the packing list, and the bank forms always agree.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] box-border">
          {/* Card 1: Manual Way */}
          <div className="bg-white border border-[#e1ded2] rounded-[16px] p-7 box-border shadow-sm hover:shadow-md transition-all duration-300">
            <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-[#63666c] mb-2 box-border">
              Without EXPORT BIZ
            </p>
            <h3 className="text-[16px] font-bold font-space-grotesk tracking-[-0.32px] m-0 mb-[14px] text-[#12141a] box-border">
              The manual way
            </h3>
            <ul className="list-none m-0 p-0 box-border space-y-1">
              <li className="text-[14.5px] leading-[23px] py-[9px] px-0 flex gap-3 items-start text-[#63666c] box-border">
                <span className="text-[#ff6b6b] font-bold">✕</span>
                Re-typing buyer, product and shipment details into every form
              </li>
              <li className="text-[14.5px] leading-[23px] py-[9px] px-0 flex gap-3 items-start text-[#63666c] box-border">
                <span className="text-[#ff6b6b] font-bold">✕</span>
                Clerical mismatches that trigger customs holds and penalties
              </li>
              <li className="text-[14.5px] leading-[23px] py-[9px] px-0 flex gap-3 items-start text-[#63666c] box-border">
                <span className="text-[#ff6b6b] font-bold">✕</span>
                Sales, stock and drawback numbers stuck in separate spreadsheets
              </li>
              <li className="text-[14.5px] leading-[23px] py-[9px] px-0 flex gap-3 items-start text-[#63666c] box-border">
                <span className="text-[#ff6b6b] font-bold">✕</span>
                An extra hire (or two, or three) just to keep documentation moving
              </li>
            </ul>
          </div>

          {/* Card 2: EDMS Way */}
          <div className="bg-white border border-[#2fae73]/35 rounded-[16px] p-7 box-border shadow-sm hover:shadow-md transition-all duration-300">
            <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-[#2fae73] mb-2 box-border">
              With EXPORT BIZ
            </p>
            <h3 className="text-[16px] font-bold font-space-grotesk tracking-[-0.32px] m-0 mb-[14px] text-[#12141a] box-border">
              The EDMS way
            </h3>
            <ul className="list-none m-0 p-0 box-border space-y-1">
              <li className="text-[14.5px] leading-[23px] py-[9px] px-0 flex gap-3 items-start text-[#12141a] box-border">
                <span className="text-[#2fae73] font-bold">✓</span>
                Enter shipment data once — invoice, packing list, BL draft, contract auto-fill
              </li>
              <li className="text-[14.5px] leading-[23px] py-[9px] px-0 flex gap-3 items-start text-[#12141a] box-border">
                <span className="text-[#2fae73] font-bold">✓</span>
                Every statutory form generated straight from verified order data
              </li>
              <li className="text-[14.5px] leading-[23px] py-[9px] px-0 flex gap-3 items-start text-[#12141a] box-border">
                <span className="text-[#2fae73] font-bold">✓</span>
                Sales turnover, pending scheme dues, stock and receivables, live
              </li>
              <li className="text-[14.5px] leading-[23px] py-[9px] px-0 flex gap-3 items-start text-[#12141a] box-border">
                <span className="text-[#2fae73] font-bold">✓</span>
                One platform your existing team runs independently, no extra hires
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
