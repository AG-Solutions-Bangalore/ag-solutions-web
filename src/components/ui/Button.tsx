import React from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
  };

type ButtonAsLinkProps = BaseButtonProps &
  LinkProps & {
    to: string;
    disabled?: boolean;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => {
  const baseClasses =
    `inline-flex items-center justify-center font-bold transition-all duration-300 rounded-[8px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] ${className}`;

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-[#1289bc] text-white hover:bg-[#0f77a5] shadow-xs hover:shadow-md",
    secondary: "bg-[#1b2c38] text-white hover:bg-[#253c4d] shadow-xs hover:shadow-md",
    outline: "border-2 border-[#1289bc] text-[#1289bc] bg-transparent hover:bg-[#1289bc] hover:text-white",
    ghost: "bg-transparent text-[#1d2d3b] hover:bg-slate-100",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2.5 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
    </>
  );

  if (props.to !== undefined) {
    const { to, disabled, ...linkProps } = props as ButtonAsLinkProps;
    if (disabled) {
      return (
        <span
          role="link"
          aria-disabled="true"
          className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} opacity-50 pointer-events-none`}
        >
          {content}
        </span>
      );
    }
    return (
      <Link
        to={to}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      disabled={isLoading}
      {...buttonProps}
    >
      {content}
    </button>
  );
};

export default Button;
