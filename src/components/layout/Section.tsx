import React from "react";
import AnimatedSection from "../animation/AnimatedSection";
import { layoutContainerClass } from "./styles";

interface SectionProps {
  id?: string;
  className?: string;
  ariaLabel?: string;
  containerClassName?: string;
  children: React.ReactNode | ((isVisible: boolean) => React.ReactNode);
  animate?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  ariaLabel,
  containerClassName = "",
  children,
  animate = true,
}) => {
  const content = (isVisible: boolean) => (
    <div className={`${layoutContainerClass} ${containerClassName}`}>
      {typeof children === "function" ? children(isVisible) : children}
    </div>
  );

  if (animate) {
    return (
      <AnimatedSection
        id={id}
        className={className}
        ariaLabel={ariaLabel}
      >
        {(isVisible) => content(isVisible)}
      </AnimatedSection>
    );
  }

  return (
    <section
      id={id}
      className={className}
      aria-label={ariaLabel}
    >
      {content(true)}
    </section>
  );
};

export default Section;
