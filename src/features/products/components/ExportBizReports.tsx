import React from "react";

export const ExportBizReports: React.FC = () => {
  const reports = [
    { id: "01", name: "Buyer Reports", status: "● LIVE" },
    { id: "02", name: "Contract Reports", status: "● LIVE" },
    { id: "03", name: "Sales Accounts & Summary", status: "● LIVE" },
    { id: "04", name: "Purchase Summary", status: "● LIVE" },
    { id: "05", name: "Product Stock", status: "● LIVE" },
    { id: "06", name: "Duty Drawback Reports", status: "● LIVE" },
    { id: "07", name: "Costing Reports", status: "● LIVE" },
  ];

  return (
    <section className="py-[78px] box-border">
      <div className="max-w-[1200px] mx-auto px-8 box-border">
        {/* Header Block */}
        <div className="max-w-[600px] mb-11 box-border">
          <p className="text-[#63666c] text-[15.5px] leading-[25px] font-mono tracking-[2.5px] uppercase mt-3 mb-[14px] flex items-center gap-[10px] box-border">
            Ref: Insights
          </p>
          <h2 className="text-[32px] font-bold font-space-grotesk tracking-[-0.64px] m-0 box-border text-[#12141a]">
            Reports that were previously an end-of-month scramble.
          </h2>
          <p className="text-[#63666c] text-[15.5px] leading-[25px] mt-3 box-border">
            Sales turnover, pending government scheme amounts, stock, and receivables — available at real time, not reconstructed from spreadsheets when someone asks.
          </p>
        </div>

        {/* Reports Table */}
        <div className="border border-[#e1ded2] rounded-[14px] overflow-hidden shadow-xs bg-white box-border">
          <table className="w-full border-collapse box-border">
            <thead>
              <tr className="box-border">
                <th className="text-left font-mono text-[11px] tracking-[1.5px] uppercase text-[#63666c] bg-[#efede5] py-[14px] px-5 border-b border-[#e1ded2] box-border">
                  Line
                </th>
                <th className="text-left font-mono text-[11px] tracking-[1.5px] uppercase text-[#63666c] bg-[#efede5] py-[14px] px-5 border-b border-[#e1ded2] box-border">
                  Report
                </th>
                <th className="text-left font-mono text-[11px] tracking-[1.5px] uppercase text-[#63666c] bg-[#efede5] py-[14px] px-5 border-b border-[#e1ded2] box-border">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.map((rep, idx) => {
                const isLast = idx === reports.length - 1;
                const cellBorderClass = isLast ? "border-b-0" : "border-b border-[#e1ded2]";
                return (
                  <tr key={rep.id} className="hover:bg-[#efede5]/20 transition-all duration-150 box-border">
                    <td className={`font-mono text-[#63666c] w-11 py-[14px] px-5 text-[14px] ${cellBorderClass} box-border`}>
                      {rep.id}
                    </td>
                    <td className={`py-[14px] px-5 text-[14px] text-[#12141a] ${cellBorderClass} box-border`}>
                      {rep.name}
                    </td>
                    <td className={`py-[14px] px-5 ${cellBorderClass} box-border`}>
                      <span className="flex items-center gap-[6px] font-mono text-[11px] text-[#2fae73] box-border">
                        <i className="w-1.5 h-1.5 rounded-full bg-[#2fae73] block animate-pulse box-border"></i>
                        LIVE
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
