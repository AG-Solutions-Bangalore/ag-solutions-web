import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "100+", "150+", "15+", "24/7", "120+", "250+", "300%", "3M+", "10,000+", "80%", "100%"
  duration?: number; // duration in seconds
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.6,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // If it's a special string like 24/7, just show it or initial 0
    if (value.includes("/")) return "0/0";
    return "0";
  });

  useEffect(() => {
    if (!isInView) return;

    // Handle "24/7" special case
    if (value.includes("/")) {
      const parts = value.split("/");
      const p1 = parseInt(parts[0], 10) || 24;
      const p2 = parseInt(parts[1], 10) || 7;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        const current1 = Math.floor(easeOutExpo * p1);
        const current2 = Math.floor(easeOutExpo * p2);
        setDisplayValue(`${current1}/${current2}`);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(step);
      return;
    }

    // Parse general number and prefixes/suffixes (e.g. "10,000+", "3M+", "300%", "120+")
    const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const rawNumberStr = match[2].replace(/,/g, "");
    const targetNum = parseFloat(rawNumberStr);
    const suffix = match[3] || "";
    const hasComma = match[2].includes(",");
    const isDecimal = rawNumberStr.includes(".");

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal ? (easeOut * targetNum).toFixed(1) : Math.floor(easeOut * targetNum);

      let formattedNumber = current.toString();
      if (hasComma) {
        formattedNumber = parseInt(formattedNumber, 10).toLocaleString();
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
