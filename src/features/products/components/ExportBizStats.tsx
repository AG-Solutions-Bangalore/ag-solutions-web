import React, { useState, useEffect, useRef } from "react";
import { animate } from "animejs";

export const ExportBizStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animating Counter States
  const [hires, setHires] = useState(0);
  const [modules, setModules] = useState(0);
  const [reports, setReports] = useState(0);
  const [errors, setErrors] = useState(85); // Counts down to 0 to show errors eliminated

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const targetObj = { hires: 0, modules: 0, reports: 0, errors: 85 };
          
          animate(targetObj, {
            hires: 3,
            modules: 28,
            reports: 12,
            errors: 0,
            round: 1,
            duration: 2200,
            easing: "easeOutExpo",
            onUpdate: () => {
              setHires(Math.round(targetObj.hires));
              setModules(Math.round(targetObj.modules));
              setReports(Math.round(targetObj.reports));
              setErrors(Math.round(targetObj.errors));
            }
          } as any);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="py-11 bg-[#1c3a54] text-white box-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0 max-w-[1200px] mx-auto box-border">
        {/* Stat 1 */}
        <div className="py-[6px] px-6 border-l-0 box-border">
          <div className="font-space-grotesk text-[34px] font-bold text-[#e39a3b] box-border">
            {hires} hires
          </div>
          <div className="text-[12.5px] text-[#b7cbd2] mt-[6px] leading-[18px] box-border">
            worth of paperwork handled by one system
          </div>
        </div>

        {/* Stat 2 */}
        <div className="py-[6px] px-6 border-l-0 sm:border-l sm:border-white/12 box-border">
          <div className="font-space-grotesk text-[34px] font-bold text-[#e39a3b] box-border">
            {modules}
          </div>
          <div className="text-[12.5px] text-[#b7cbd2] mt-[6px] leading-[18px] box-border">
            workflow modules, one login
          </div>
        </div>

        {/* Stat 3 */}
        <div className="py-[6px] px-6 border-l-0 lg:border-l lg:border-white/12 box-border">
          <div className="font-space-grotesk text-[34px] font-bold text-[#e39a3b] box-border">
            {reports}+
          </div>
          <div className="text-[12.5px] text-[#b7cbd2] mt-[6px] leading-[18px] box-border">
            live reports, updated in real time
          </div>
        </div>

        {/* Stat 4 */}
        <div className="py-[6px] px-6 border-l-0 sm:border-l sm:border-white/12 lg:border-l lg:border-white/12 box-border">
          <div className="font-space-grotesk text-[34px] font-bold text-[#e39a3b] box-border">
            {errors}
          </div>
          <div className="text-[12.5px] text-[#b7cbd2] mt-[6px] leading-[18px] box-border">
            clerical errors when forms auto-fill
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportBizStats;
