import React from "react";

export const ExportBizStats: React.FC = () => {
  return (
    <div className="py-11 bg-[#1c3a54] text-white box-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0 max-w-[1200px] mx-auto  box-border">
        {/* Stat 1 */}
        <div className="py-[6px] px-6 border-l-0 box-border">
          <div className="font-space-grotesk text-[34px] font-bold text-[#e39a3b] box-border">
            3 hires
          </div>
          <div className="text-[12.5px] text-[#b7cbd2] mt-[6px] leading-[18px] box-border">
            worth of paperwork handled by one system
          </div>
        </div>

        {/* Stat 2 */}
        <div className="py-[6px] px-6 border-l-0 sm:border-l sm:border-white/12 box-border">
          <div className="font-space-grotesk text-[34px] font-bold text-[#e39a3b] box-border">
            28
          </div>
          <div className="text-[12.5px] text-[#b7cbd2] mt-[6px] leading-[18px] box-border">
            workflow modules, one login
          </div>
        </div>

        {/* Stat 3 */}
        <div className="py-[6px] px-6 border-l-0 lg:border-l lg:border-white/12 box-border">
          <div className="font-space-grotesk text-[34px] font-bold text-[#e39a3b] box-border">
            12+
          </div>
          <div className="text-[12.5px] text-[#b7cbd2] mt-[6px] leading-[18px] box-border">
            live reports, updated in real time
          </div>
        </div>

        {/* Stat 4 */}
        <div className="py-[6px] px-6 border-l-0 sm:border-l sm:border-white/12 lg:border-l lg:border-white/12 box-border">
          <div className="font-space-grotesk text-[34px] font-bold text-[#e39a3b] box-border">
            0
          </div>
          <div className="text-[12.5px] text-[#b7cbd2] mt-[6px] leading-[18px] box-border">
            clerical errors when forms auto-fill
          </div>
        </div>
      </div>
    </div>
  );
};
