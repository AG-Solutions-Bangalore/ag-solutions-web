import { type ReactNode, useEffect, useRef, useState } from "react";

type AnimatedSectionRender = (isVisible: boolean) => ReactNode;

interface AnimatedSectionProps {
  ariaLabel?: string;
  children: ReactNode | AnimatedSectionRender;
  className?: string;
  id?: string;
  threshold?: number;
}

function AnimatedSection({
  ariaLabel,
  children,
  className,
  id,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || isVisible) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${className ?? ""} transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
      aria-label={ariaLabel}
      data-animated-section-visible={isVisible ? "true" : "false"}
    >
      {typeof children === "function" ? children(isVisible) : children}
    </section>
  );
}

export default AnimatedSection;
