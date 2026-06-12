import React from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Items Found",
  description = "There is currently no data or items to display in this list.",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-6 text-center border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl max-w-lg mx-auto ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
        <svg
          className="h-6 w-6 fill-none stroke-current stroke-2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <h3 className="text-[#1b2c38] text-lg font-bold mb-1.5">{title}</h3>
      <p className="text-[#4f5a62] text-sm max-w-sm">{description}</p>
    </div>
  );
};

export default EmptyState;
