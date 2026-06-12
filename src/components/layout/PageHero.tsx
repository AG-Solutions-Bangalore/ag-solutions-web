import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../animation/AnimatedSection";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeroProps {
  title: string;
  bgImage?: string;
  bgColorClass?: string;
  textColorClass?: string;
  breadcrumbs: BreadcrumbItem[];
  ariaLabel?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  bgImage,
  bgColorClass = "",
  textColorClass = "text-white",
  breadcrumbs,
  ariaLabel,
  children,
}) => {
  const bgStyle = bgImage
    ? { backgroundImage: `url('${bgImage}')` }
    : undefined;

  return (
    <AnimatedSection
      className={`relative overflow-hidden py-24 text-center ${bgColorClass} ${textColorClass} max-[760px]:py-16`}
      ariaLabel={ariaLabel || `${title} page header banner`}
    >
      <div
        className="absolute inset-0 bg-[length:450px_330px] bg-top"
        style={bgStyle}
      />
      <div className="relative z-1">
        {children}
        <h1 className="m-0 text-5xl font-black tracking-normal max-[760px]:text-4xl animate-fadeIn">
          {title}
        </h1>
        {breadcrumbs.length > 0 && (
          <nav
            className="mt-4 flex items-center justify-center gap-2 text-base font-semibold animate-fadeIn"
            style={{ animationDelay: "150ms" }}
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              if (isLast || !crumb.path) {
                return (
                  <span key={crumb.label} className="opacity-80">
                    {crumb.label}
                  </span>
                );
              }
              return (
                <React.Fragment key={crumb.label}>
                  <Link
                    to={crumb.path}
                    className="text-inherit hover:opacity-80 transition-opacity no-underline border-b border-transparent hover:border-current"
                  >
                    {crumb.label}
                  </Link>
                  <span className="opacity-50 text-xs px-1">&raquo;</span>
                </React.Fragment>
              );
            })}
          </nav>
        )}
      </div>
    </AnimatedSection>
  );
};

export default PageHero;
