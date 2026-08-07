import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";

function ExportSolutionsSection() {
  return (
    <AnimatedSection
      ariaLabel="Export Biz"
      className="relative overflow-hidden text-white h-[450px] lg:h-[400px] text-white"
    >
      {(isVisible) => (
        <>
          {/* Background Banner */}
          <img
            src="/images/home/ship.png"
            alt="Export Biz Banner"
            className="absolute inset-0 h-full w-full object-cover object-right animate-[shipFloat_8s_ease-in-out_infinite]"
          />

          {/* Left Gradient Overlay */}
          <div className="absolute inset-0 bg-[length:200%_200%] animate-[gradientMove_5s_linear_infinite] from-transparent via-white/5 to-transparent animate-[shimmer_10s_linear_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03101B]/88 via-[#03101B]/45 via-50% to-transparent" />

          {/* Soft Glow */}
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px] animate-pulse" />
          <div
            className={`${layoutContainerClass} relative z-10 flex items-center h-full pt-6`}
          >
            <div
              className={`max-w-[460px] pl-0 lg:pl-2 transition-all duration-1000 ease-out ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              {/* Badge */}
              <span
                className={`inline-flex items-center rounded-full transition-all duration-700 delay-100
              ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"}
              `}
              >
                Export Documentation Software
              </span>

              {/* Heading */}
              <h1
                className={`mt-4 text-3xl lg:text-5xl font-extrabold leading-nonetransition-all duration-700 delay-200
              ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"}`} >
                EXPORT{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  BIZ
                </span>
              </h1>

              {/* Description */}
              <p className={`mt-4 max-w-[420px] text-sm lg:text-base leading-7 transition-all duration-700 delay-500
              ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"}
                `}>
                Export Biz helps businesses automate export documentation with
                speed, precision, and reliability. Generate shipping documents,
                manage compliance, and streamline every
                shipment from one intelligent platform.
              </p>

              {/* Buttons */}
              <div className={`
mt-6 flex gap-4
transition-all duration-700 delay-700
${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"}
`}>
                <Link
                  to="/export-biz"
                  className="rounded-full bg-gradient-to-r  from-sky-500 to-blue-600 px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-150 hover:shadow-[0_20px_40px_rgba(14,165,233,.45)]"
                >
                  Explore More →
                </Link>
                <Link
                  to="/contacts"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover-scale-105 hover:bg-white/20"
                >
                  Get Free Demo
                </Link>
              </div>
            </div>
          </div>

        </>
      )}
    </AnimatedSection>
  );
}

export default ExportSolutionsSection;