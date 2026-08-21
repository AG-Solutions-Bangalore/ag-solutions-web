import React, { useState, useEffect } from "react";
import { animate } from "animejs";
import AnimatedSection from "@/components/animation/AnimatedSection";

interface ChartDataPoint {
  label: string;
  value: number;
  secondary?: string;
}

interface ReportItem {
  id: string;
  name: string;
  description: string;
  chartType: "bar" | "line" | "progress" | "calculator";
  chartData: ChartDataPoint[];
}

export const ExportBizReports: React.FC = () => {
  const [activeReportId, setActiveReportId] = useState("01");
  
  // Calculator States for Reciprocity Principle
  const [calcShipments, setCalcShipments] = useState(20);
  const [calcHours, setCalcHours] = useState(4);

  const reports: ReportItem[] = [
    {
      id: "01",
      name: "Buyer Reports",
      description: "Analyze shipping frequencies, average dispatch times, and outstanding payments by buyer.",
      chartType: "bar",
      chartData: [
        { label: "Nordic Foods", value: 85 },
        { label: "Apex Trade", value: 65 },
        { label: "EuroCorp AS", value: 45 },
        { label: "Global Grain", value: 30 },
      ],
    },
    {
      id: "02",
      name: "Contract Reports",
      description: "Track shipment execution progress against active commercial sales contracts.",
      chartType: "progress",
      chartData: [
        { label: "SC-2026-081 (Basmati)", value: 90, secondary: "Sailing" },
        { label: "SC-2026-094 (Wheat)", value: 45, secondary: "Loading" },
        { label: "SC-2026-102 (Spices)", value: 15, secondary: "Draft" },
      ],
    },
    {
      id: "03",
      name: "Sales Accounts & Summary",
      description: "Real-time visibility into FOB values, shipping bills generated, and realized revenue.",
      chartType: "line",
      chartData: [
        { label: "Mar", value: 120 },
        { label: "Apr", value: 190 },
        { label: "May", value: 160 },
        { label: "Jun", value: 240 },
      ],
    },
    {
      id: "04",
      name: "Product Stock",
      description: "Live warehouse metrics, showing raw inventory, processed bags, and ready-to-load stock.",
      chartType: "bar",
      chartData: [
        { label: "basmati 1121", value: 75, secondary: "Ready" },
        { label: "Sona Masoori", value: 95, secondary: "In Process" },
        { label: "IR 64 Grain", value: 40, secondary: "Raw" },
      ],
    },
    {
      id: "05",
      name: "Duty Drawback Reports",
      description: "Track shipping bill dates, RoDTEP scroll status, and pending incentive claims.",
      chartType: "progress",
      chartData: [
        { label: "RoDTEP Claims Pending", value: 62, secondary: "₹8.4L Dues" },
        { label: "Drawback Scroll Dues", value: 38, secondary: "₹5.1L Dues" },
        { label: "Realized Incentives", value: 100, secondary: "₹24.8L Claimed" },
      ],
    },
    {
      id: "06",
      name: "ROI Savings Calculator",
      description: "Calculate how many hours and how much duty drawback claims you are leaking with manual Excel sheets.",
      chartType: "calculator",
      chartData: [],
    },
  ];

  useEffect(() => {
    // Reset widths and heights so they always draw outwards from zero on switch
    const bars = document.querySelectorAll(".chart-bar-fill") as NodeListOf<HTMLElement>;
    bars.forEach(el => el.style.width = "0%");

    const lines = document.querySelectorAll(".chart-line-fill") as NodeListOf<HTMLElement>;
    lines.forEach(el => el.style.height = "0%");

    const progress = document.querySelectorAll(".chart-progress-fill") as NodeListOf<HTMLElement>;
    progress.forEach(el => el.style.width = "0%");

    animate(".chart-bar-fill", {
      width: ((el: any) => el.getAttribute("data-width") || "0%") as any,
      delay: ((_: any, i: number) => i * 50) as any,
      easing: "easeOutQuad",
      duration: 500
    });

    animate(".chart-line-fill", {
      height: ((el: any) => el.getAttribute("data-height") || "0%") as any,
      delay: ((_: any, i: number) => i * 50) as any,
      easing: "easeOutQuad",
      duration: 500
    });

    animate(".chart-progress-fill", {
      width: ((el: any) => el.getAttribute("data-width") || "0%") as any,
      delay: ((_: any, i: number) => i * 50) as any,
      easing: "easeOutQuad",
      duration: 500
    });
  }, [activeReportId]);

  const activeReport = reports.find((r) => r.id === activeReportId) || reports[0];

  // Dynamic calculations for the ROI Calculator
  const annualHoursLost = calcShipments * calcHours * 12;
  // Estimate average drawback refund value of ₹12,000 per shipment, with a typical leakage rate of 8% due to missed deadlines
  const estimatedLeakedClaims = Math.round(calcShipments * 12000 * 12 * 0.08);

  return (
    <AnimatedSection
      className="py-20 relative bg-[#f7f6f1] overflow-hidden box-border"
      ariaLabel="Live interactive reporting module showcase"
    >
      {(isVisible) => (
        <div className="max-w-[1200px] mx-auto px-8 box-border">
          
          {/* Header Block */}
          <div className={`max-w-[700px] mb-14 box-border home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
            <p className="text-[#63666c] text-[13px] leading-[25px] font-mono tracking-[2.5px] uppercase mt-3 mb-[10px] flex items-center gap-[10px] box-border">
              Ref: Insights
            </p>
            <h2 className="text-[34px] md:text-[40px] font-bold font-space-grotesk tracking-[-0.8px] leading-[1.15] m-0 box-border text-[#12141a]">
              Reports that were previously an end-of-month scramble.
            </h2>
            <p className="text-[#63666c] text-[16px] leading-[26px] mt-4 box-border max-w-[620px]">
              Sales turnover, pending drawback dues, stock, and receivables — available in real time, not reconstructed from spreadsheets when someone asks.
            </p>
          </div>

          {/* Interactive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 items-stretch box-border">
            
            {/* Left Column: Report List */}
            <div className="space-y-3 flex flex-col justify-start">
              {reports.map((rep, idx) => {
                const isActive = rep.id === activeReportId;
                return (
                  <button
                    key={rep.id}
                    onClick={() => setActiveReportId(rep.id)}
                    className={`w-full text-left border rounded-[16px] p-5 cursor-pointer transition-all duration-300 outline-none flex gap-4 home-animated-item ${
                      isActive
                        ? "bg-[#1c3a54] border-[#1c3a54] text-white shadow-[0_12px_20px_-8px_rgba(28,58,84,0.15)]"
                        : "bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 text-[#12141a]"
                    } ${isVisible ? "home-animated-item-visible" : ""}`}
                    style={{ transitionDelay: `${100 + idx * 100}ms` }}
                  >
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-sm h-fit ${
                      isActive ? "bg-[#27c7cd] text-[#1c3a54]" : "bg-slate-100 text-[#7a8894]"
                    }`}>
                      {rep.id}
                    </span>
                    <div>
                      <h4 className={`text-[15.5px] font-bold font-space-grotesk tracking-wide m-0 mb-1.5 ${
                        isActive ? "text-white" : "text-[#1c3a54]"
                      }`}>
                        {rep.name}
                      </h4>
                      <p className={`text-[13px] leading-relaxed m-0 ${
                        isActive ? "text-[#9fc1db]" : "text-[#7a8894]"
                      }`}>
                        {rep.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic SVG Dashboard / Interactive ROI Calculator */}
            <div className={`bg-[#101e2c] border border-white/5 rounded-[24px] p-6 lg:p-8 shadow-[0_20px_40px_-15px_rgba(16,30,44,0.3)] flex flex-col justify-between box-border min-h-[420px] home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`} style={{ transitionDelay: '600ms' }}>
              <div>
                {/* Dashboard Header */}
                <div className="flex justify-between items-center pb-4 border-b border-white/8 mb-6">
                  <div>
                    <span className="font-mono text-[10px] tracking-[1.5px] text-[#9fc1db] uppercase">
                      {activeReport.chartType === "calculator" ? "Reciprocity Tool" : "Live Analytical Feed"}
                    </span>
                    <h4 className="text-base font-bold text-white tracking-wide m-0 mt-1">
                      {activeReport.name} {activeReport.chartType === "calculator" ? "" : "Analytics"}
                    </h4>
                  </div>
                  <span className="bg-[#2fae73]/15 text-[#2fae73] font-mono text-[10px] tracking-[1px] py-1 px-3 rounded-full flex items-center gap-1.5 font-bold">
                    <i className="w-1.5 h-1.5 rounded-full bg-[#2fae73] block animate-pulse"></i>
                    {activeReport.chartType === "calculator" ? "ACTIVE" : "CONNECTED"}
                  </span>
                </div>

                {/* Dynamic Content Pane */}
                <div className="flex-1 flex flex-col justify-center min-h-[260px]">
                  
                  {/* DYNAMIC CALCULATOR MODE (Reciprocity Principle) */}
                  {activeReport.chartType === "calculator" ? (
                    <div className="space-y-6 text-white">
                      
                      {/* Sliders Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Shipment slider */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-[#9fc1db]">Monthly Shipments</span>
                            <span className="text-[#27c7cd] font-bold text-sm">{calcShipments} orders</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value={calcShipments}
                            onChange={(e) => setCalcShipments(Number(e.target.value))}
                            className="w-full accent-[#27c7cd]"
                          />
                        </div>

                        {/* Hours spent slider */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-[#9fc1db]">Manual Hours per Order</span>
                            <span className="text-[#27c7cd] font-bold text-sm">{calcHours} hrs</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="8"
                            value={calcHours}
                            onChange={(e) => setCalcHours(Number(e.target.value))}
                            className="w-full accent-[#27c7cd]"
                          />
                        </div>
                      </div>

                      {/* Calculated Output Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                        <div className="bg-white/4 border border-white/6 rounded-[12px] p-4 text-center">
                          <span className="block text-[11px] font-mono text-[#9fc1db] uppercase">Annual Time Leaked</span>
                          <strong className="block text-xl text-white font-space-grotesk mt-1.5">{annualHoursLost} Hrs</strong>
                          <span className="block text-[9.5px] text-[#7a8894] mt-1">Manual document typing</span>
                        </div>

                        <div className="bg-white/4 border border-white/6 rounded-[12px] p-4 text-center">
                          <span className="block text-[11px] font-mono text-[#9fc1db] uppercase">Lost Drawback Dues</span>
                          <strong className="block text-xl text-red-400 font-space-grotesk mt-1.5">₹{estimatedLeakedClaims.toLocaleString("en-IN")}</strong>
                          <span className="block text-[9.5px] text-[#7a8894] mt-1">Leaked scroll deadlines</span>
                        </div>

                        <div className="bg-[#27c7cd]/8 border border-[#27c7cd]/20 rounded-[12px] p-4 text-center">
                          <span className="block text-[11px] font-mono text-[#27c7cd] uppercase">Savings with Auto</span>
                          <strong className="block text-xl text-[#2fae73] font-space-grotesk mt-1.5">95% Time Cut</strong>
                          <span className="block text-[9.5px] text-[#2fae73]/80 mt-1">100% drawbacks claimed</span>
                        </div>
                      </div>

                      {/* Reciprocity Micro-CTA */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-[12px] text-[#9fc1db] text-center sm:text-left">
                          💡 Automating these shipments saves you approximately <b>{Math.round(annualHoursLost / 8)} full working days</b> of typing.
                        </span>
                        <a
                          href="file:///c:/Users/ADITYA/Desktop/ag-solution-v2/src/features/products/pages/ExportBizPage.tsx"
                          onClick={(e) => {
                            e.preventDefault();
                            const ctaBtn = document.querySelector('[class*="ExportBizCommonCTA"] button') as HTMLButtonElement || document.querySelector('button[onClick*="onOpenDemo"]') as HTMLButtonElement;
                            if (ctaBtn) ctaBtn.click();
                          }}
                          className="bg-[#27c7cd] text-[#101e2c] font-space-grotesk font-bold text-[13px] py-2.5 px-5 rounded-[8px] no-underline hover:bg-[#1ebbc2] hover:scale-[1.02] transition-all whitespace-nowrap"
                        >
                          Lock in these savings — Book a demo
                        </a>
                      </div>

                    </div>
                  ) : (
                    <div key={activeReportId} className="w-full space-y-5">
                        {/* BAR CHART */}
                        {activeReport.chartType === "bar" && (
                          <div className="space-y-4">
                            {activeReport.chartData.map((data, idx) => (
                              <div key={idx} className="space-y-1.5">
                                <div className="flex justify-between text-xs font-mono text-[#9fc1db]">
                                  <span>{data.label} {data.secondary ? `(${data.secondary})` : ""}</span>
                                  <span className="text-white font-bold">{data.value}%</span>
                                </div>
                                <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                                  <div
                                    data-width={`${data.value}%`}
                                    className="chart-bar-fill h-full bg-[#27c7cd] rounded-full"
                                    style={{ width: "0%" }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* LINE/WAVE CHART */}
                        {activeReport.chartType === "line" && (
                          <div className="relative h-[180px] w-full flex items-end">
                            {/* Horizontal grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                              <div className="border-b border-white w-full" />
                              <div className="border-b border-white w-full" />
                              <div className="border-b border-white w-full" />
                              <div className="border-b border-white w-full" />
                            </div>
                            {/* Simulated Bars that look like progress peaks */}
                            <div className="w-full h-full flex items-end justify-around gap-6 pt-4 relative z-1">
                              {activeReport.chartData.map((data, idx) => (
                                <div key={idx} className="flex-1 flex flex-col items-center gap-2.5 h-full justify-end">
                                  <div className="text-xs font-mono text-[#27c7cd] font-bold">
                                    {data.value}K
                                  </div>
                                  <div className="w-full bg-white/5 rounded-t-[8px] overflow-hidden flex items-end" style={{ height: "70%" }}>
                                    <div
                                      data-height={`${(data.value / 250) * 100}%`}
                                      className="chart-line-fill w-full bg-gradient-to-t from-[#27c7cd]/20 to-[#27c7cd] rounded-t-[8px]"
                                      style={{ height: "0%" }}
                                    />
                                  </div>
                                  <span className="text-xs font-mono text-[#9fc1db]">{data.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* PROGRESS STEPS */}
                        {activeReport.chartType === "progress" && (
                          <div className="space-y-5">
                            {activeReport.chartData.map((data, idx) => (
                              <div key={idx} className="bg-white/3 border border-white/5 rounded-[12px] p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-full bg-[#27c7cd]/10 text-[#27c7cd] flex items-center justify-center font-bold text-sm">
                                    {idx + 1}
                                  </div>
                                  <div>
                                    <h5 className="text-[13.5px] font-bold text-white m-0">
                                      {data.label}
                                    </h5>
                                    <p className="text-[11.5px] text-[#9fc1db] m-0">
                                      Stage: {data.secondary}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="text-xs font-mono text-[#9fc1db]">{data.value}%</span>
                                  <div className="w-20 h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                      data-width={`${data.value}%`}
                                      className="chart-progress-fill h-full bg-[#2fae73] rounded-full"
                                      style={{ width: "0%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                  )}
                </div>
              </div>

              {/* Dashboard Status Footer */}
              <div className="pt-4 border-t border-white/8 mt-6 flex justify-between items-center text-[11px] text-[#9fc1db]/70 font-mono">
                <span>REPORT SYNCED: 1s AGO</span>
                <span>AUDIT SCORE: 100% PERFECT</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </AnimatedSection>
  );
};
export default ExportBizReports;
