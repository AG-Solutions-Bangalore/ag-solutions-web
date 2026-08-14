import React from "react";

export const Workflow: React.FC = () => {
  return (
    <section className="bg-[#F5F8FC] py-14 md:py-20 lg:py-24" id="how-it-works">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="max-w-[640px] mx-auto text-center mb-11 reveal">
          <span className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.09em] uppercase text-[#1557E8] bg-[#1557E8]/8 px-4 py-1.75 rounded-full mb-3.5">
            How It Works
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#071B49] text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem] leading-[1.1] mb-3">
            5 Simple Steps. Zero Paperwork Stress.
          </h2>
          <p className="text-[1.05rem] text-[#54628A]">
            Replace hours of repetitive manual data entry with an automated 5-step workflow.
          </p>
        </div>

        {/* 5 Step Pills */}
        <div className="relative flex flex-col md:flex-row justify-between gap-5 md:gap-3 mb-12 reveal before:hidden md:before:block before:content-[''] before:absolute before:top-[23px] before:left-[6%] before:right-[6%] before:h-[2px] before:bg-[repeating-linear-gradient(90deg,#E3E9F6_0_8px,transparent_8px_14px)] before:z-0">
          <div className="flex-1 text-left md:text-center relative z-10 px-1.5 flex md:block items-start">
            <div className="w-[46px] h-[46px] rounded-full bg-white border-2 border-[#1557E8] text-[#1557E8] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base flex items-center justify-center mr-4 md:mx-auto md:mb-3.5 shrink-0 shadow-[0_0_0_6px_#F5F8FC]">
              01
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#071B49] text-[1.02rem] mb-1">
                Enter Details
              </h3>
              <p className="text-[0.85rem] text-[#54628A]">
                Add order, buyer &amp; product info.
              </p>
            </div>
          </div>

          <div className="flex-1 text-left md:text-center relative z-10 px-1.5 flex md:block items-start">
            <div className="w-[46px] h-[46px] rounded-full bg-white border-2 border-[#1557E8] text-[#1557E8] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base flex items-center justify-center mr-4 md:mx-auto md:mb-3.5 shrink-0 shadow-[0_0_0_6px_#F5F8FC]">
              02
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#071B49] text-[1.02rem] mb-1">
                Select Docs
              </h3>
              <p className="text-[0.85rem] text-[#54628A]">
                Choose invoices, packing lists or claims.
              </p>
            </div>
          </div>

          <div className="flex-1 text-left md:text-center relative z-10 px-1.5 flex md:block items-start">
            <div className="w-[46px] h-[46px] rounded-full bg-[#1557E8] border-2 border-[#1557E8] text-white font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base flex items-center justify-center mr-4 md:mx-auto md:mb-3.5 shrink-0 shadow-[0_0_0_6px_#F5F8FC]">
              03
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#071B49] text-[1.02rem] mb-1">
                Auto-Generate
              </h3>
              <p className="text-[0.85rem] text-[#54628A]">
                Export Biz builds instant paperwork.
              </p>
            </div>
          </div>

          <div className="flex-1 text-left md:text-center relative z-10 px-1.5 flex md:block items-start">
            <div className="w-[46px] h-[46px] rounded-full bg-white border-2 border-[#1557E8] text-[#1557E8] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base flex items-center justify-center mr-4 md:mx-auto md:mb-3.5 shrink-0 shadow-[0_0_0_6px_#F5F8FC]">
              04
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#071B49] text-[1.02rem] mb-1">
                Quick Review
              </h3>
              <p className="text-[0.85rem] text-[#54628A]">
                Verify details in seconds.
              </p>
            </div>
          </div>

          <div className="flex-1 text-left md:text-center relative z-10 px-1.5 flex md:block items-start">
            <div className="w-[46px] h-[46px] rounded-full bg-white border-2 border-[#1557E8] text-[#1557E8] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base flex items-center justify-center mr-4 md:mx-auto md:mb-3.5 shrink-0 shadow-[0_0_0_6px_#F5F8FC]">
              05
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#071B49] text-[1.02rem] mb-1">
                Download &amp; Share
              </h3>
              <p className="text-[0.85rem] text-[#54628A]">
                Export ready PDF/Excel files.
              </p>
            </div>
          </div>
        </div>

        {/* Live Interface Preview */}
        <div className="bg-white rounded-[24px] shadow-[0_14px_34px_rgba(7,27,73,0.10)] border border-[#E3E9F6] overflow-hidden reveal">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E3E9F6] bg-[#FBFCFE]">
            <div className="flex items-center">
              <span className="w-2.25 h-2.25 rounded-full bg-[#E3E9F6] mr-1.75 shrink-0" />
              <span className="w-2.25 h-2.25 rounded-full bg-[#E3E9F6] mr-1.75 shrink-0" />
              <span className="w-2.25 h-2.25 rounded-full bg-[#E3E9F6] mr-1.75 shrink-0" />
              <span className="ml-2.25 text-[0.85rem] font-semibold text-[#54628A] whitespace-nowrap shrink-0">
                Export Biz — New Shipment
              </span>
            </div>
            <span className="text-[0.72rem] font-bold uppercase tracking-wider text-[#16B86A] bg-[#16B86A]/10 px-2.5 py-1 rounded-full">
              ● Live Demo Preview
            </span>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="flex-1 min-w-[260px] p-6 sm:p-7 border-b sm:border-b-0 sm:border-r border-[#E3E9F6]">
              <div className="text-[0.72rem] font-bold text-[#54628A] uppercase tracking-[0.06em] mb-1.5">
                Shipment No.
              </div>
              <div className="bg-[#F5F8FC] border border-[#E3E9F6] rounded-xl px-3.5 py-2.5 mb-3.5 text-[0.9rem] text-[#071B49] font-semibold">
                EXB-2026-00842
              </div>

              <div className="text-[0.72rem] font-bold text-[#54628A] uppercase tracking-[0.06em] mb-1.5">
                Buyer Name
              </div>
              <div className="bg-[#F5F8FC] border border-[#E3E9F6] rounded-xl px-3.5 py-2.5 mb-3.5 text-[0.9rem] text-[#071B49] font-semibold">
                Meridian Trading Co.
              </div>

              <div className="text-[0.72rem] font-bold text-[#54628A] uppercase tracking-[0.06em] mb-1.5">
                Product &amp; Quantity
              </div>
              <div className="bg-[#F5F8FC] border border-[#E3E9F6] rounded-xl px-3.5 py-2.5 text-[0.9rem] text-[#071B49] font-semibold">
                Cotton Yarn — 4,200 kg
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-center flex-none w-[60px] text-[#1557E8]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

            <div className="flex-1 min-w-[260px] p-6 sm:p-7">
              <div className="bg-[#F5F8FC] rounded-xl p-5 border border-[#E3E9F6]">
                <div className="h-[11px] w-[45%] rounded-md bg-[#287BFF] mb-4" />
                <div className="h-[9px] w-[80%] rounded-md bg-[#E3E9F6] mb-2.5" />
                <div className="h-[9px] w-[60%] rounded-md bg-[#E3E9F6] mb-2.5" />
                <div className="h-[9px] w-[80%] rounded-md bg-[#E3E9F6] mb-2.5" />
                <div className="h-[9px] w-[40%] rounded-md bg-[#E3E9F6]" />
              </div>

              <span className="inline-flex items-center bg-[#16B86A]/12 text-[#16B86A] text-[0.8rem] font-bold px-3.25 py-1.5 rounded-full mt-3.5">
                <svg
                  className="w-3.5 h-3.5 mr-1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Documents Generated (Invoice, Packing List, Tax Return)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
