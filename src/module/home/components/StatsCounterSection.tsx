import { useEffect, useState } from "react";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";

const stats = [
  { value: 96, suffix: "%", label: "Client Retention" },
  { value: 9, suffix: "+", label: "Years of Service" },
  { value: 23, suffix: "+", label: "Professionals" },
  { value: 800, suffix: "+", label: "Satisfied Clients" },
] as const;

interface StatsCounterContentProps {
  isVisible: boolean;
}

function StatsCounterContent({ isVisible }: StatsCounterContentProps) {
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      const timeout = window.setTimeout(() => {
        setCounts(stats.map((stat) => stat.value));
      }, 0);

      return () => window.clearTimeout(timeout);
    }

    const duration = 1300;
    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) => Math.round(stat.value * easedProgress)),
      );

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isVisible]);

  return (
    <div
      className={`${layoutContainerClass} relative z-1 grid gap-10 min-[760px]:grid-cols-2 min-[1120px]:grid-cols-4`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`home-animated-item ${
            isVisible ? "home-animated-item-visible" : ""
          }`}
          style={{ transitionDelay: `${index * 95}ms` }}
        >
          <div className="text-[86px] leading-none font-black text-white max-[760px]:text-[64px]">
            {counts[index]}
            {stat.suffix}
          </div>
          <div className="mt-4 text-[29px] leading-tight font-black text-[#132d3e] max-[760px]:text-[23px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function StatsCounterSection() {
  return (
    <AnimatedSection
      className="relative overflow-hidden bg-[#80df00] py-18 text-center max-[760px]:py-12"
      ariaLabel="AG Solutions company statistics"
    >
      {(isVisible) => (
        <>
          <div className="absolute inset-0 bg-[url('/images/pattern-bg-lime.jpg')] bg-[length:450px_330px] bg-top opacity-[0.18]" />
          <div className="absolute inset-0 bg-[#80df00]/82" />
          <StatsCounterContent isVisible={isVisible} />
        </>
      )}
    </AnimatedSection>
  );
}

export default StatsCounterSection;
