import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = "h2",
  as,
  className = "",
  children,
  ...props
}) => {
  const Component = as || level;

  const defaultClasses: Record<HeadingLevel, string> = {
    h1: "text-5xl font-black tracking-normal leading-[1.1] max-[760px]:text-4xl",
    h2: "text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px]",
    h3: "text-[32px] leading-tight font-black tracking-tight max-[560px]:text-2xl",
    h4: "text-xl font-bold tracking-tight",
    h5: "text-lg font-bold tracking-tight",
    h6: "text-base font-bold tracking-tight",
  };

  return (
    <Component
      className={`${defaultClasses[level]} m-0 text-[#1b2c38] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
