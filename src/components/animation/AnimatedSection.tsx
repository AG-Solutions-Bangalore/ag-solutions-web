import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

  // useInView provides a highly optimized, hardware-accelerated scroll check
  const isVisible = useInView(sectionRef, {
    once: true,
    amount: threshold,
  });

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={className}
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      data-animated-section-visible={isVisible ? "true" : "false"}
    >
      {typeof children === "function" ? children(isVisible) : children}
    </motion.section>
  );
}

export default AnimatedSection;
