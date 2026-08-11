import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  image?: string;
  imageAlt?: string;
  imageTitle?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  to?: string;
  onClick?: () => void;
  footer?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  imageAlt = "",
  imageTitle,
  badge,
  title,
  subtitle,
  description,
  to,
  onClick,
  footer,
  className = "",
}) => {
  const cardContent = (
    <>
      {/* Image zoom wrapper */}
      {image && (
        <div className="relative aspect-[3/2] overflow-hidden bg-slate-100 shrink-0">
          <img
            src={image}
            alt={imageAlt || title}
            title={imageTitle}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width="380"
            height="253"
          />
          {badge && (
            <span className="absolute top-4 left-4 bg-[#09c7ca] text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full z-1">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Body content */}
      <div className="p-6 flex flex-col flex-1">
        {subtitle && (
          <span className="text-[13px] text-[#7a8894] font-medium leading-none mb-2.5 block">
            {subtitle}
          </span>
        )}

        <h3 className="m-0 text-xl font-bold leading-snug tracking-tight text-[#1b2c38] transition-colors duration-300 group-hover:text-[#09c7ca]">
          {title}
        </h3>

        {description && (
          <p className="m-0 mt-3 text-[14.5px] leading-relaxed text-[#4f5a62] font-normal flex-1 line-clamp-3">
            {description}
          </p>
        )}

        {footer && (
          <div className="pt-5 mt-5 border-t border-slate-50 flex items-center">
            {footer}
          </div>
        )}
      </div>
    </>
  );

  const rootClassName = `group overflow-hidden border border-slate-100 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col no-underline text-inherit ${
    onClick ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-4" : ""
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={rootClassName}>
        {cardContent}
      </Link>
    );
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!onClick || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    onClick();
  }

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={rootClassName}
    >
      {cardContent}
    </div>
  );
};

export default Card;
