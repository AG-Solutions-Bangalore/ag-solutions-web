import React from "react";

export const ExportBizBenefits: React.FC = () => {
  const benefits = [
    "Cloud-based SaaS platform, accessible from anywhere",
    "Complete, error-free export biz documents",
    "End-to-end workflow automation, PO to payment",
    "Faster document generation, fewer clerical penalties",
    "Real-time inventory and stock tracking",
    "Payment & financial management in one place",
    "Powerful reports & dashboards, always current",
    "Secure, role-based access for your whole team",
    "Simple enough to run without extra headcount",
  ];

  return (
    <section className="bg-[#efede5]/40 py-[78px] border-t border-[#e1ded2]/50 box-border">
      <div className="max-w-[1200px] mx-auto px-8 box-border">
        {/* Header Block */}
        <div className="max-w-[600px] mb-11 box-border">
          <p className="text-[#63666c] text-[15.5px] leading-[25px] font-mono tracking-[2.5px] uppercase mt-3 mb-[14px] flex items-center gap-[10px] box-border">
            Ref: Why Us
          </p>
          <h2 className="text-[32px] font-bold font-space-grotesk tracking-[-0.64px] m-0 box-border text-[#12141a]">
            Why EXPORT BIZ?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] box-border">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e1ded2] rounded-[14px] p-5 pl-[18px] flex gap-3 items-start box-border shadow-xs hover:shadow-md hover:scale-[1.01] transition-all duration-300"
            >
              <span className="w-[22px] h-[22px] rounded-[6px] bg-[#2fae73]/12 text-[#2fae73] flex items-center justify-center flex-shrink-0 mt-[2px] box-border">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="m-0 text-[13.5px] leading-5 text-[#12141a] box-border">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
