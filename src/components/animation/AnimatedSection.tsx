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
  threshold = 0.25,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasRevealedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return undefined;
    }

    const section = sectionElement;

    function revealSection() {
      if (hasRevealedRef.current) {
        return;
      }

      hasRevealedRef.current = true;
      setIsVisible(true);
    }

    function checkSectionVisibility() {
      const rect = section.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const visibleRatio = visibleHeight / Math.max(rect.height, 1);

      if (
        visibleRatio >= threshold ||
        (rect.top < viewportHeight * 0.72 &&
          rect.bottom > viewportHeight * 0.18)
      ) {
        revealSection();
      }
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      const timeout = window.setTimeout(revealSection, 0);

      return () => window.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealSection();
          observer.disconnect();
        }
      },
      { threshold: [0.1, threshold, 0.4] },
    );
    const frame = requestAnimationFrame(checkSectionVisibility);
    const interval = window.setInterval(checkSectionVisibility, 180);

    observer.observe(section);
    window.addEventListener("scroll", checkSectionVisibility, {
      passive: true,
    });
    window.addEventListener("resize", checkSectionVisibility);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearInterval(interval);
      window.removeEventListener("scroll", checkSectionVisibility);
      window.removeEventListener("resize", checkSectionVisibility);
    };
  }, [threshold]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
      aria-label={ariaLabel}
      data-animated-section-visible={isVisible ? "true" : "false"}
    >
      {typeof children === "function" ? children(isVisible) : children}
    </section>
  );
}

export default AnimatedSection;
