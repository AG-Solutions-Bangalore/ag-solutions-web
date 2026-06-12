import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`focus:outline-none ${className}`}
    >
      {children}
    </main>
  );
};

export default PageContainer;
