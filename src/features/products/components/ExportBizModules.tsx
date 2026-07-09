import React from "react";

export const ExportBizModules: React.FC = () => {
  const masterModules = [
    "Company", "Bank", "Buyer", "Vendor", "Country", "Products", "Items", 
    "Container Size", "Port of Loading", "Shipper", "Vessel", "Bag Type", 
    "Goods Description", "Marking", "Payment Terms", "Export Scheme"
  ];

  const opsModules = [
    "Purchase Products", "Purchase Orders", "Purchase", "Production", 
    "Processing", "Dispatch", "Stock Management", "Contracts", "Invoices", 
    "Duty Drawback", "Payments", "Pending Receipts", "Costing"
  ];

  return (
    <section className="bg-[#efede5]/60 py-[78px] box-border border-y border-[#e1ded2]/50">
      <div className="max-w-[1200px] mx-auto box-border">
        {/* Header Block */}
        <div className="max-w-[600px] mb-11 box-border">
          <p className="text-[#63666c] text-[15.5px] leading-[25px] font-mono tracking-[2.5px] uppercase mt-3 mb-[14px] flex items-center gap-[10px] box-border">
            Ref: Modules
          </p>
          <h2 className="text-[32px] font-bold font-space-grotesk tracking-[-0.64px] m-0 box-border text-[#12141a]">
            Two module groups. Every step of the shipment.
          </h2>
          <p className="text-[#63666c] text-[15.5px] leading-[25px] mt-3 box-border">
            Set your reference data once in Master Management, then run the shipment itself through Export Operations — from raw Purchase Order to Payment Collection.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] box-border">
          {/* Master Management Card */}
          <div className="bg-white border border-[#e1ded2] rounded-[16px] p-7 relative overflow-hidden box-border shadow-sm hover:shadow-md transition-all duration-300">
            <p className="font-mono text-[11px] text-[#63666c] tracking-[1px] uppercase mb-[10px] box-border">
              Mod · Data
            </p>
            <h3 className="text-[19px] font-bold font-space-grotesk tracking-[-0.38px] m-0 mb-[14px] text-[#12141a] box-border">
              Master Management
            </h3>
            <div className="flex flex-wrap gap-2 box-border">
              {masterModules.map((mod) => (
                <span
                  key={mod}
                  className="text-[12px] bg-[#efede5] border border-[#e1ded2] text-[#12141a] py-[6px] px-3 rounded-[20px] box-border hover:bg-[#e1ded2] hover:scale-[1.03] transition-all cursor-default"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>

          {/* Export Operations Card */}
          <div className="bg-white border border-[#e1ded2] rounded-[16px] p-7 relative overflow-hidden box-border shadow-sm hover:shadow-md transition-all duration-300">
            <p className="font-mono text-[11px] text-[#63666c] tracking-[1px] uppercase mb-[10px] box-border">
              Mod · Ops
            </p>
            <h3 className="text-[19px] font-bold font-space-grotesk tracking-[-0.38px] m-0 mb-[14px] text-[#12141a] box-border">
              Export Operations
            </h3>
            <div className="flex flex-wrap gap-2 box-border">
              {opsModules.map((mod) => (
                <span
                  key={mod}
                  className="text-[12px] bg-[#efede5] border border-[#e1ded2] text-[#12141a] py-[6px] px-3 rounded-[20px] box-border hover:bg-[#e1ded2] hover:scale-[1.03] transition-all cursor-default"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
