import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";

function ExportSolutionsSection() {
  return (
    <AnimatedSection
      ariaLabel="Export Biz"
      className="relative overflow-hidden text-white h-[560px] lg:h-[620px]"
    >
      {(isVisible) => (
        <>
          {/* Background Banner */}
          <img
            src="/images/home/ship.png"
            alt="Export Biz export management software banner by AG Solutions"
            title="Export Biz Export Management Software"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]  animate-[shipFloat_8s_ease-in-out_infinite]"
          />

          {/* Left Gradient Overlay */}
          <div className="absolute inset-0 bg-[length:200%_200%] animate-[gradientMove_5s_linear_infinite] from-transparent via-white/5 to-transparent animate-[shimmer_10s_linear_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03101B]/88 via-[#03101B]/45 via-50% to-transparent" />

          {/* Soft Glow */}
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px] animate-pulse" />
          <div
            className={`${layoutContainerClass} relative z-10 flex items-center h-full px-8 lg:px-0`}
          >
            <div
              className={`w-full max-w-[540px] lg:ml-0 pl-0 lg:pl-1 transition-all duration-1000 ease-out ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              {/* Badge */}
              <span
                className={`inline-flex text-lg lg:text-xl font-medium items-center rounded-full transition-all duration-700 delay-100
              ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"}
              `}
              >
                Export Documentation Software
              </span>

              {/* Heading */}
              <h1
                className={`mt-4 text-4xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-200
              ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"}`} >
                EXPORT{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  BIZ
                </span>
              </h1>

              {/* Description */}
              <div
  className={`mt-5 max-w-[520px] text-base lg:text-lg text-white/90 leading-8 transition-all duration-700 delay-500
  ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-8 opacity-0"
  }`}
>
  <p>
    Export Biz is an intelligent <strong>export documentation software</strong> that
    helps businesses simplify and automate export operations.
  </p>

  <ul className="mt-6 space-y-4">
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
      <span>Create and manage export documents quickly and accurately.Organize shipping documents and shipment information from one platform.</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
      <span>Reduce manual paperwork and improve operational efficiency.</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
      <span>Streamline documentation while ensuring speed, accuracy, and compliance.</span>
    </li>
  </ul>
</div>

              {/* Buttons */}
              <div className={`mt-5 flex flex-wrap gap-3 transition-all duration-700 delay-700
${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"}
`}>
                <Link
                  to="/export-biz"
                  title="Export Biz Export Management Software"
                  className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(14,165,233,.45)]"
                >
                  Explore More →
                </Link>
                <Link
                  to="/contacts"
                  title="Contact AG Solutions"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:scale-105 hover:bg-white/20"
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