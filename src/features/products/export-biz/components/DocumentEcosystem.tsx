import React from "react";
import { useLeadModal } from "@/context/LeadModalContext";

export const DocumentEcosystem: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  const handleOpenLeadModal = (context: string) => {
    openLeadModal(`Export Biz - ${context}`);
  };

  return (
    <section className="bg-white py-14 md:py-20 lg:py-24" id="documents">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Title Header */}
        <div className="max-w-[640px] mx-auto text-center mb-11 reveal">
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.09em] uppercase text-[#1557E8] bg-[#1557E8]/8 px-4 py-1.75 rounded-full mb-3.5">
            What You Can Generate
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#071B49] text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem] leading-[1.1] mb-3">
            Complete Export Document Ecosystem.
          </h2>
          <p className="text-[1.05rem] text-[#54628A]">
            Select any module to turn complex export compliance into clean, ready-to-share files.
          </p>
        </div>

        {/* ORIGINAL DOCUMENT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {/* Main Hero Doc Module */}
          <div 
            onClick={() => handleOpenLeadModal("Export Invoices & Packing Lists")}
            className="sm:col-span-2 sm:row-span-2 bg-gradient-to-br from-[#071B49] via-[#0E2C6B] to-[#1557E8] text-white rounded-[24px] p-6.5 sm:p-9 flex flex-col justify-between shadow-[0_14px_34px_rgba(7,27,73,0.10)] min-h-[290px] cursor-pointer hover:scale-[1.01] transition-transform duration-200"
          >
            <div>
              <span className="inline-block bg-white/15 text-[#D3E2FF] text-[0.7rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4">
                CORE MODULE
              </span>
              <span className="w-[54px] h-[54px] rounded-xl bg-white/14 text-white flex items-center justify-center shrink-0 mb-4">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 3h7l4 4v14H7V3z" />
                  <path d="M14 3v4h4" />
                  <path d="M9.5 12h5M9.5 15.5h5M9.5 8.5h2" />
                </svg>
              </span>
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-white text-2xl font-bold mb-2">
                Export Invoices &amp; Packing Lists
              </h3>
              <p className="text-[#B9CBF2] text-[0.98rem] max-w-[85%] leading-relaxed">
                Generate customs-ready commercial invoices, packing lists &amp; shipping declarations instantly from order details.
              </p>
            </div>
          </div>

          {/* Card 2: PO & Stock Reports */}
          <div 
            onClick={() => handleOpenLeadModal("PO & Stock Reports")}
            className="bg-white border border-[#E3E9F6] rounded-[24px] p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(7,27,73,0.10)] hover:border-transparent transition-all duration-200 cursor-pointer"
          >
            <div>
              <span className="w-11 h-11 rounded-xl bg-[#F5F8FC] text-[#1557E8] flex items-center justify-center shrink-0 mb-3">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8l9-5 9 5-9 5-9-5z" />
                  <path d="M3 8v8l9 5 9-5V8" />
                  <path d="M12 13v8" />
                </svg>
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.02rem] font-bold text-[#071B49] mb-1">
                PO &amp; Stock Reports
              </h3>
              <p className="text-[0.87rem] text-[#54628A]">
                Track purchase orders alongside live inventory stock.
              </p>
            </div>
          </div>

          {/* Card 3: Payments & Claims Outstanding */}
          <div 
            onClick={() => handleOpenLeadModal("Payments & Claims Outstanding")}
            className="bg-white border border-[#E3E9F6] rounded-[24px] p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(7,27,73,0.10)] hover:border-transparent transition-all duration-200 cursor-pointer"
          >
            <div>
              <span className="w-11 h-11 rounded-xl bg-[#F5F8FC] text-[#1557E8] flex items-center justify-center shrink-0 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <text
                    x="12"
                    y="16.3"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                    fill="currentColor"
                    stroke="none"
                    fontFamily="Inter,sans-serif"
                  >
                    ₹
                  </text>
                </svg>
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.02rem] font-bold text-[#071B49] mb-1">
                Payments &amp; Claims Outstanding
              </h3>
              <p className="text-[0.87rem] text-[#54628A]">
                Monitor buyer payments &amp; pending incentive claims.
              </p>
            </div>
          </div>

          {/* Card 4: Monthly Tax Returns */}
          <div 
            onClick={() => handleOpenLeadModal("Monthly Tax Returns")}
            className="bg-white border border-[#E3E9F6] rounded-[24px] p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(7,27,73,0.10)] hover:border-transparent transition-all duration-200 cursor-pointer"
          >
            <div>
              <span className="w-11 h-11 rounded-xl bg-[#F5F8FC] text-[#1557E8] flex items-center justify-center shrink-0 mb-3">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                  <path d="M8.5 15a3 3 0 105-2.2M13.5 12v2h2" />
                </svg>
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.02rem] font-bold text-[#071B49] mb-1">
                Monthly Tax Returns
              </h3>
              <p className="text-[0.87rem] text-[#54628A]">
                Organized monthly GST &amp; export returns for filing.
              </p>
            </div>
          </div>

          {/* Card 5: Scheme Claims Tracking */}
          <div 
            onClick={() => handleOpenLeadModal("Scheme Claims Tracking")}
            className="bg-white border border-[#E3E9F6] rounded-[24px] p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(7,27,73,0.10)] hover:border-transparent transition-all duration-200 cursor-pointer"
          >
            <div>
              <span className="w-11 h-11 rounded-xl bg-[#F5F8FC] text-[#1557E8] flex items-center justify-center shrink-0 mb-3">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="M12 8.2l1.1 2.3 2.5.4-1.8 1.8.4 2.4-2.2-1.2-2.2 1.2.4-2.4-1.8-1.8 2.5-.4z" />
                </svg>
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.02rem] font-bold text-[#071B49] mb-1">
                Scheme Claims Tracking
              </h3>
              <p className="text-[0.87rem] text-[#54628A]">
                Track RoDTEP, Duty Drawback &amp; incentive claims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
