import React from "react";

interface LoadingSpinnerProps {
  fullPage?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  fullPage = false,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-6 w-6 border-2",
    md: "h-12 w-12 border-3",
    lg: "h-16 w-16 border-4",
  };

  const spinner = (
    <div
      className={`animate-spin rounded-full border-t-[#1289bc] border-slate-200 ${sizeClasses[size]} ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        {spinner}
      </div>
    );
  }

  return <div className="flex items-center justify-center py-12 w-full">{spinner}</div>;
};

export default LoadingSpinner;
