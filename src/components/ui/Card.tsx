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
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100 shrink-0">
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
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {subtitle && (
            <span className="text-[13px] text-teal font-semibold leading-none mb-2.5 block uppercase tracking-wider truncate">
              {subtitle}
            </span>
          )}

          <h3 className="m-0 text-lg sm:text-xl font-bold leading-snug tracking-tight text-dark dark:text-foreground transition-colors duration-300 group-hover:text-pink line-clamp-2 min-h-[2.75rem] flex items-start">
            {title}
          </h3>

          {description && (
            <p className="m-0 mt-3 text-[14.5px] leading-relaxed text-muted font-normal line-clamp-3">
              {description}
            </p>
          )}
        </div>

        {footer && (
          <div className="pt-5 mt-5 border-t border-border flex items-center">
            {footer}
          </div>
        )}
      </div>
    </>
  );

  const rootClassName = `group overflow-hidden border border-border bg-card text-card-foreground shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full w-full no-underline text-inherit ${
    onClick ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-4" : ""
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
