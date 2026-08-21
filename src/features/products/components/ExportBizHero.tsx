import React, { useState } from "react";

interface ExportBizHeroProps {
  onOpenDemo: () => void;
}

type TabType = "invoice" | "packing" | "contract" | "bl" | "drawback";

export const ExportBizHero: React.FC<ExportBizHeroProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<TabType>("invoice");
  
  // Custom states for IKEA/Endowment Effect (user can edit live values in hero sandbox)
  const [customBuyer, setCustomBuyer] = useState("NORDIC FOODS GROUP AS");
  const [customValue, setCustomValue] = useState(148220);

  const tabs = [
    { id: "invoice", label: "Invoice" },
    { id: "packing", label: "Packing List" },
    { id: "contract", label: "Contract" },
    { id: "bl", label: "BL Draft" },
    { id: "drawback", label: "Drawback" },
  ] as const;

  // Calculate dynamic values based on custom state
  const formattedVal = `$${customValue.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} USD`;

  // Drawback refund is 1.25% of FOB (Invoice value) converted to INR (assumed 83 rate)
  const dynamicDrawbackRefund = `₹${Math.round(
    customValue * 83 * 0.0125
  ).toLocaleString("en-IN")} INR`;

  const docContent: Record<
    TabType,
    {
      title: string;
      badge: string;
      color: string;
      bgColor: string;
      lines: { key: string; value: string; isEditable?: boolean; fieldId?: "buyer" | "val"; highlight?: boolean }[];
    }
  > = {
    invoice: {
      title: "Commercial Invoice — INV-2026-4402",
      badge: "READY TO EXPORT",
      color: "#2fae73",
      bgColor: "bg-[#2fae73]/18 text-[#2fae73]",
      lines: [
        { key: "Exporter", value: "AG SOLUTIONS GLOBAL PVT LTD" },
        { key: "Buyer", value: customBuyer, isEditable: true, fieldId: "buyer" },
        { key: "Invoice Value", value: formattedVal, isEditable: true, fieldId: "val", highlight: true },
        { key: "Payment Terms", value: "CAD (Cash Against Documents)" },
        { key: "Incoterm", value: "FOB JNPT, MUMBAI" },
        { key: "Freight Status", value: "COLLECT" },
      ],
    },
    packing: {
      title: "Packing List — PK-2026-4402",
      badge: "VERIFIED & SEALED",
      color: "#2fae73",
      bgColor: "bg-[#2fae73]/18 text-[#2fae73]",
      lines: [
        { key: "Packages", value: "40 Pallets, Stretch Wrapped" },
        { key: "Cargo", value: "Organic White Basmati Rice" },
        { key: "Gross Weight", value: "22,480.00 KGS", highlight: true },
        { key: "Net Weight", value: "22,000.00 KGS" },
        { key: "Container No", value: "MSKU-882910-3" },
        { key: "Seal Number", value: "IN-NSA-093821" },
      ],
    },
    contract: {
      title: "Sales Contract — SC-2026-081",
      badge: "SIGNED & VALID",
      color: "#2fae73",
      bgColor: "bg-[#2fae73]/18 text-[#2fae73]",
      lines: [
        { key: "Buyer Reference", value: "PO-NORDIC-2291" },
        { key: "Buyer Profile", value: customBuyer, isEditable: true, fieldId: "buyer" },
        { key: "Port of Loading", value: "JNPT INNSA, INDIA" },
        { key: "Port of Discharge", value: "ROTTERDAM NLRTM, NL" },
        { key: "Sailing Window", value: "AUG 01 - AUG 15, 2026" },
        { key: "Arbitration Clause", value: "Singapore (SIAC Rules)", highlight: true },
      ],
    },
    bl: {
      title: "Bill of Lading Draft — BL-MAEU839",
      badge: "DRAFT APPROVED",
      color: "#e39a3b",
      bgColor: "bg-[#e39a3b]/18 text-[#e39a3b]",
      lines: [
        { key: "Carrier", value: "MAERSK LINE CO." },
        { key: "Vessel / Voyage", value: "MAERSK MC-KINNEY / 2608W" },
        { key: "BL Type", value: "NEGOTIABLE TO ORDER OF SHIPPER", highlight: true },
        { key: "Freight Chargeable", value: "AS PER AGREEMENT" },
        { key: "First Notify Party", value: "NORDIC BANKING CORP" },
        { key: "Place of Delivery", value: "JNPT PORT OF MUMBAI" },
      ],
    },
    drawback: {
      title: "Duty Drawback DB-2026-092",
      badge: "PENDING CUSTOMS",
      color: "#e39a3b",
      bgColor: "bg-[#e39a3b]/18 text-[#e39a3b]",
      lines: [
        { key: "Shipping Bill Ref", value: "SB-8839210-JUL26" },
        { key: "DBK Tariff Rate", value: "1.25% of FOB Value", highlight: true },
        { key: "Refund Amount", value: dynamicDrawbackRefund, highlight: true },
        { key: "Customs Office", value: "JNPT AIRPORT/PORT" },
        { key: "Scheme Benefit", value: "RoDTEP Chapter 10" },
        { key: "Verification Status", value: "AUDIT FILE GENERATED" },
      ],
    },
  };

  const activeDoc = docContent[activeTab];

  return (
    <section className="pb-[40px] box-border">
      <div className="grid grid-cols-1 lg:grid-cols-[510px_490px] gap-14 items-center max-w-[1120px] mx-auto px-8 box-border">
        {/* Left Column */}
        <div className="opacity-100 transform none box-border transition-all duration-500">
          
          {/* Social Proof Badges (Halo Effect) */}
          <div className="flex flex-wrap items-center gap-3 mb-[14px] box-border">
            <span className="bg-[#e39a3b]/10 text-[#d48316] font-mono text-[10.5px] font-bold tracking-[1.5px] py-1 px-3 rounded-full uppercase border border-[#e39a3b]/20">
              ★ Best Selling Compliance Software
            </span>
            <span className="text-[#63666c] font-mono text-[11.5px]">
              ⭐ 4.95 Rating (318+ Exporters Audited)
            </span>
          </div>

          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.1] font-bold font-space-grotesk tracking-[-1.04px] m-0 box-border text-[#12141a]">
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
          
          {/* Benefit-focused Call to Actions */}
          <div className="flex gap-[14px] flex-wrap mb-[14px] box-border">
            <button
              onClick={onOpenDemo}
              className="bg-[#1c3a54] text-white flex items-center gap-2 font-space-grotesk font-bold text-[14.5px] py-[14px] px-[26px] rounded-[8px] no-underline border border-transparent cursor-pointer hover:scale-[1.02] hover:bg-[#254d6e] transition-all box-border"
            >
              Book a free demo — Start Saving Drawbacks →
            </button>
            <a
              href="#solve"
              title="Explore How AG Solutions Solves Business Challenges"
              className="bg-[#transparent] text-[#12141a] border border-[#e1ded2] flex items-center gap-2 font-space-grotesk font-bold text-[14.5px] py-[14px] px-[26px] rounded-[8px] no-underline cursor-pointer hover:scale-[1.02] hover:bg-black/5 transition-all box-border"
            >
              See what it replaces
            </a>
          </div>
          
          {/* Objection Reassurance */}
          <p className="text-[12.5px] text-[#45474c] m-0 mb-[30px] font-mono">
            🛡️ No credit card required. Cancel anytime. 100% compliance guaranteed.
          </p>

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

        {/* Right Column: Interactive Document Sandbox */}
        <div className="opacity-100 transform none box-border transition-all duration-500 delay-150">
          <div className="bg-[#1c3a54] rounded-[18px] p-6 shadow-[0_30px_60px_-20px_rgba(28,58,84,0.45)] box-border">
            
            {/* Interactive Tabs Header */}
            <div className="flex flex-wrap gap-1.5 pb-4 border-b border-white/8 justify-between items-center">
              <div className="flex flex-wrap gap-1.5">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-3.5 py-1.5 rounded-[6px] text-xs font-semibold cursor-pointer transition-all duration-200 border-0 outline-none ${
                        isActive
                          ? "bg-[#27c7cd] text-white shadow-xs"
                          : "bg-white/5 text-[#9fc1db] hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <span className="text-[10px] text-[#38e2e9] font-mono animate-pulse hidden sm:inline">
                ✍ Click fields to customize
              </span>
            </div>

            {/* Document Sandbox Body */}
            <div className="mt-4 bg-[#142637] rounded-[12px] p-[18px] border border-white/5 min-h-[295px] flex flex-col justify-between box-border">
              <div
                key={activeTab}
                className="space-y-[12px] flex-1 flex flex-col justify-between transition-opacity duration-200"
              >
                <div>
                  {/* Header */}
                  <div className="flex justify-between items-center pb-3 border-b border-white/6 mb-4">
                    <h2 className="text-[13.5px] font-bold text-white tracking-wide m-0">
                      {activeDoc.title}
                    </h2>
                    <span
                      className={`font-mono text-[9.5px] font-bold tracking-[0.5px] py-[3px] px-2.5 rounded-[20px] ${activeDoc.bgColor}`}
                    >
                      {activeDoc.badge}
                    </span>
                  </div>

                  {/* Content Fields */}
                  <div className="space-y-2.5">
                    {activeDoc.lines.map((line, idx) => (
                      <div
                        key={idx}
                        className={`document-line flex justify-between items-center py-1.5 px-2 rounded-[6px] text-[13px] ${
                          line.highlight
                            ? "bg-[#27c7cd]/10 border border-[#27c7cd]/20"
                            : "hover:bg-white/2"
                        }`}
                      >
                        <span className="text-[#9fc1db] font-mono text-[12px]">
                          {line.key}
                        </span>
                        
                        {/* Live Editable Fields (IKEA/Endowment Effect) */}
                        {line.isEditable ? (
                          <div className="flex items-center gap-1.5">
                            {line.fieldId === "buyer" ? (
                              <input
                                type="text"
                                value={customBuyer}
                                onChange={(e) => setCustomBuyer(e.target.value.toUpperCase())}
                                className="bg-transparent border-0 border-b border-dashed border-white/25 text-white font-medium text-[13px] text-right focus:border-[#27c7cd] outline-none max-w-[210px] pb-0.5"
                                title="Click to edit buyer profile name"
                                aria-label="Buyer profile name"
                              />
                            ) : (
                              <div className="flex items-center text-right">
                                <span className="text-white font-medium">$</span>
                                <input
                                  type="number"
                                  value={customValue}
                                  onChange={(e) => setCustomValue(Number(e.target.value))}
                                  className="bg-transparent border-0 border-b border-dashed border-white/25 text-[#27c7cd] font-bold text-[13px] text-right focus:border-[#27c7cd] outline-none max-w-[85px] pb-0.5 ml-0.5"
                                  title="Click to edit FOB commercial value"
                                  aria-label="FOB commercial value in USD"
                                />
                                <span className="text-[#27c7cd] font-bold text-[13px] ml-1">USD</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <span
                            className={`font-medium ${
                              line.highlight
                                ? "text-[#27c7cd] font-bold"
                                : "text-white/90"
                            }`}
                          >
                            {line.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Verification Line */}
                <div className="pt-3 border-t border-white/6 mt-4 flex justify-between items-center text-[11px] text-[#b8d5ec] font-mono">
                  <span>STATUS: LINKED & DESERIALIZED</span>
                  <span className="flex items-center gap-[5px] text-[#2fae73] font-bold">
                    <i className="w-1.5 h-1.5 rounded-full bg-[#2fae73] block animate-pulse"></i>
                    VERIFIED BY EXPORT BIZ
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard Footer Stats */}
            <div className="flex justify-between items-center mt-4 px-1 box-border">
              <span className="font-mono text-[11px] text-[#9fc1db] box-border">
                Docs generated <b className="text-white text-[14px] font-bold box-border">142</b>
              </span>
              <span className="font-mono text-[11px] text-[#9fc1db] box-border">
                Errors caught <b className="text-[#2fae73] text-[14px] font-bold box-border">0</b>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
