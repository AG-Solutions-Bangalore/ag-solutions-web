import { useEffect, useState } from "react";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";

const stats = [
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 15, suffix: "+", label: "Years of Service" },
  { value: 25, suffix: "+", label: "Professionals" },
  { value: 950, suffix: "+", label: "Satisfied Clients" },
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
          <div className="text-5xl leading-none font-black text-white">
            {counts[index]}
            {stat.suffix}
          </div>
          <div className="mt-4 text-2xl leading-tight font-black text-[#e1edf5]">
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
  className="relative overflow-hidden py-18 text-center max-[760px]:py-12"
>
  {(isVisible) => (
    <>
      <div className="absolute inset-0 bg-linear-to-br from-[#0F172A] via-[#0A4CA6] to-[#0EA5E9]" />

      <div className="absolute inset-0 bg-[url('/images/pattern-bg-lime.jpg')] bg-cover opacity-10 mix-blend-soft-light" />

      <StatsCounterContent isVisible={isVisible} />
    </>
  )}
</AnimatedSection>
  );
}

export default StatsCounterSection;
