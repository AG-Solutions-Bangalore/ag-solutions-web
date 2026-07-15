import React from "react";
import Heading from "../ui/Heading";

interface SectionTitleProps {
  title: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
}

const colorLineSegments = [
  "w-[18%] bg-[#1b2c38]",
  "w-[22%] bg-[#27c7cd]",
  "w-[20%] bg-[#ff3c66]",
  "w-[20%] bg-[#ffcb05]",
  "w-[20%] bg-[#8bd82b]",
] as const;

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  align = "center",
  className = "",
  titleClassName = "",
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const lineAlignClass = {
    left: "mt-6",
    center: "mt-4 mx-auto",
    right: "mt-4 ml-auto",
  }[align];

  return (
    <div className={`${alignClass} ${className}`}>
      <Heading level="h2" className={`m-0 text-[#1a2b3c] ${titleClassName}`}>
        {title}
      </Heading>
      <div
        className={`about-color-line relative h-[3px] w-[220px] overflow-hidden bg-[#1b2c38] ${lineAlignClass}`}
        aria-hidden="true"
      >
        <div className="about-color-line-track absolute inset-y-0 left-0 flex w-[440px]">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full w-[220px] shrink-0">
              {colorLineSegments.map((segmentClass) => (
                <span
                  key={`${group}-${segmentClass}`}
                  className={segmentClass}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
