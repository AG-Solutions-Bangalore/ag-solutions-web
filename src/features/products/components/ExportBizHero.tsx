import React from "react";

interface ExportBizHeroProps {
  onOpenDemo: () => void;
}

export const ExportBizHero: React.FC<ExportBizHeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-[76px] pb-[40px] box-border">
      <div className="grid grid-cols-1 lg:grid-cols-[525px_475px] gap-14 items-center max-w-[1120px] mx-auto px-8 box-border">
        {/* Left Column */}
        <div className="opacity-100 transform none box-border transition-all duration-500">
          <p className="font-mono text-[12px] tracking-[2.5px] uppercase text-[#3386bd] mb-[14px] flex items-center gap-[10px] box-border">
            EXPORT BIZ & Business Management
          </p>
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.1] font-bold font-space-grotesk tracking-[-1.04px] m-0 box-border">
            Every export document.
            <br className="box-border" />
            <span className="relative text-[#63666c] box-border inline-block">
              Hours of typing.
              <span className="absolute left-[-12px] right-[-12px] top-[55%] -translate-y-1/2 h-[3px] bg-[#e39a3b] rounded-full pointer-events-none -rotate-[1.5deg]"></span>
            </span>
            <br className="box-border" />
            <em className="not-italic text-[#1c3a54] relative box-border">
              One click, instead.
            </em>
          </h1>
          <p className="text-[17px] leading-[28px] text-[#63666c] mt-[22px] mb-[30px] max-w-[480px] box-border">
            EXPORT BIZ generates invoices, packing lists, sales contracts, BL drafts, and every statutory form your
            shipment needs — instantly, and without the clerical errors that cost you penalties.
          </p>
          <div className="flex gap-[14px] flex-wrap mb-[30px] box-border">
            <button
              onClick={onOpenDemo}
              className="bg-[#1c3a54] text-white flex items-center gap-2 font-space-grotesk font-bold text-[14.5px] py-[14px] px-[26px] rounded-[8px] no-underline border border-transparent cursor-pointer hover:scale-[1.02] hover:bg-[#254d6e] transition-all box-border"
            >
              Book a free demo →
            </button>
            <a
              href="#solve"
              className="bg-transparent text-[#12141a] border border-[#e1ded2] flex items-center gap-2 font-space-grotesk font-bold text-[14.5px] py-[14px] px-[26px] rounded-[8px] no-underline cursor-pointer hover:scale-[1.02] hover:bg-black/5 transition-all box-border"
            >
              See what it replaces
            </a>
          </div>
          <div className="flex gap-[22px] text-[12.5px] text-[#63666c] flex-wrap box-border">
            <span className="flex items-center gap-[7px] box-border">
              <i className="w-[6px] h-[6px] rounded-full bg-[#2fae73] block box-border"></i>
              Cloud-based, works from anywhere
            </span>
            <span className="flex items-center gap-[7px] box-border">
              <i className="w-[6px] h-[6px] rounded-full bg-[#2fae73] block box-border"></i>
              PO to Payment on one screen
            </span>
          </div>
        </div>

        {/* Right Column (Visual Sandbox Mock) */}
        <div className="opacity-100 transform none box-border transition-all duration-500 delay-150">
          <div className="bg-[#1c3a54] rounded-[18px] p-[22px] shadow-[0_30px_60px_-20px_rgba(28,58,84,0.45)] box-border">
            <div className="flex justify-between items-center pb-4 px-1 box-border">
              <span className="font-mono text-[11px] tracking-[1.5px] text-[#9fc1db] uppercase box-border">
                Document Generator
              </span>
              <span className="flex items-center gap-[6px] font-mono text-[11px] text-[#2fae73] box-border">
                <i className="w-[7px] h-[7px] rounded-full bg-[#2fae73] block animate-pulse box-border"></i>
                Live
              </span>
            </div>
            <div className="bg-[#16283a] rounded-[12px] p-[18px] box-border space-y-[12px]">
              <div className="flex items-center justify-between py-[12px] px-1 border-b border-white/6 text-[13px] text-[#e7eef3] box-border">
                <div className="flex items-center gap-[10px] box-border">
                  <span className="w-[26px] h-[26px] rounded-[7px] bg-[#3386bd]/25 flex items-center justify-center text-[12px] box-border">
                    📄
                  </span>
                  Commercial Invoice — PO-2291
                </div>
                <span className="bg-[#2fae73]/18 text-[#2fae73] font-mono text-[10px] tracking-[1px] py-1 px-[9px] rounded-[20px] box-border">
                  GENERATED
                </span>
              </div>
              <div className="flex items-center justify-between py-[12px] px-1 border-b border-white/6 text-[13px] text-[#e7eef3] box-border">
                <div className="flex items-center gap-[10px] box-border">
                  <span className="w-[26px] h-[26px] rounded-[7px] bg-[#3386bd]/25 flex items-center justify-center text-[12px] box-border">
                    📦
                  </span>
                  Packing List — PO-2291
                </div>
                <span className="bg-[#2fae73]/18 text-[#2fae73] font-mono text-[10px] tracking-[1px] py-1 px-[9px] rounded-[20px] box-border">
                  GENERATED
                </span>
              </div>
              <div className="flex items-center justify-between py-[12px] px-1 border-b border-white/6 text-[13px] text-[#e7eef3] box-border">
                <div className="flex items-center gap-[10px] box-border">
                  <span className="w-[26px] h-[26px] rounded-[7px] bg-[#3386bd]/25 flex items-center justify-center text-[12px] box-border">
                    📝
                  </span>
                  Sales Contract — Buyer: Nordic Foods
                </div>
                <span className="bg-[#2fae73]/18 text-[#2fae73] font-mono text-[10px] tracking-[1px] py-1 px-[9px] rounded-[20px] box-border">
                  GENERATED
                </span>
              </div>
              <div className="flex items-center justify-between py-[12px] px-1 border-b border-white/6 text-[13px] text-[#e7eef3] box-border">
                <div className="flex items-center gap-[10px] box-border">
                  <span className="w-[26px] h-[26px] rounded-[7px] bg-[#3386bd]/25 flex items-center justify-center text-[12px] box-border">
                    🚢
                  </span>
                  Bill of Lading Draft
                </div>
                <span className="bg-[#e39a3b]/18 text-[#e39a3b] font-mono text-[10px] tracking-[1px] py-1 px-[9px] rounded-[20px] box-border">
                  DRAFTING
                </span>
              </div>
              <div className="flex items-center justify-between py-[12px] px-1 text-[13px] text-[#e7eef3] box-border">
                <div className="flex items-center gap-[10px] box-border">
                  <span className="w-[26px] h-[26px] rounded-[7px] bg-[#3386bd]/25 flex items-center justify-center text-[12px] box-border">
                    📋
                  </span>
                  Duty Drawback Statement
                </div>
                <span className="bg-[#e39a3b]/18 text-[#e39a3b] font-mono text-[10px] tracking-[1px] py-1 px-[9px] rounded-[20px] box-border">
                  QUEUED
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 px-1 box-border">
              <span className="font-mono text-[11px] text-[#9fc1db] box-border">
                Docs this week <b className="text-white text-[14px] font-bold box-border">142</b>
              </span>
              <span className="font-mono text-[11px] text-[#9fc1db] box-border">
                Errors caught <b className="text-white text-[14px] font-bold box-border">0</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
