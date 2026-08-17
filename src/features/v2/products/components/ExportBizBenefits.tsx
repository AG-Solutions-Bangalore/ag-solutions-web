import React from "react";
import AnimatedSection from "@/components/animation/AnimatedSection";

interface BenefitItem {
  title: string;
  desc: string;
}

export const ExportBizBenefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      title: "statutory compliance",
      desc: "Stay aligned with customs authorities, and bank mandates without keeping track of daily policy updates.",
    },
    {
      title: "time savings",
      desc: "Complete pre-shipment invoices and packing plans in under 5 minutes instead of spending hours typing.",
    },
    {
      title: "error reduction",
      desc: "Auto-fill features reuse reference data across forms, keeping details consistent.",
    },
    {
      title: "incentive tracking",
      desc: "View realized and outstanding duty drawbacks, RoDTEP values, and bank records.",
    },
    {
      title: "unified logistics dashboard",
      desc: "Verify shipping bills, vessel details, container weights, and SDF declarations from one login.",
    },
    {
      title: "real-time accounts updates",
      desc: "See customer ledger balances, FOB statistics, and outstanding payments dynamically.",
    },
  ];

  return (
    <AnimatedSection
      className="bg-[#efede5]/40 py-20 box-border"
      ariaLabel="EXPORT BIZ customer benefits summary"
    >
      {(isVisible) => (
        <div className="max-w-[1200px] mx-auto px-8 box-border">
          
          {/* Header Block */}
          <div className={`max-w-[700px] mb-14 box-border home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
            <p className="text-[#63666c] text-[13px] leading-[25px] font-mono tracking-[2.5px] uppercase mt-3 mb-[10px] flex items-center gap-[10px] box-border">
              Ref: Why Us
            </p>
            <h2 className="text-[34px] md:text-[40px] font-bold font-space-grotesk tracking-[-0.8px] leading-[1.15] m-0 box-border text-[#12141a]">
              Why EXPORT BIZ?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 box-border">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-white border border-[#e1ded2] rounded-[18px] p-6 flex gap-4 items-start box-border shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 home-animated-item ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: `${100 + idx * 100}ms` }}
              >
                <span className="w-6 h-6 rounded-[8px] bg-[#2fae73]/12 text-[#2fae73] flex items-center justify-center flex-shrink-0 mt-[2px] box-border font-bold">
                  ✓
                </span>
                <div className="space-y-1">
                  <h4 className="m-0 text-base font-bold font-space-grotesk tracking-wide text-[#1c3a54]">
                    {benefit.title}
                  </h4>
                  <p className="m-0 text-[13.5px] leading-relaxed text-[#63666c] box-border">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AnimatedSection>
  );
};
