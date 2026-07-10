import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";

function ExportSolutionsSection() {
  return (
    <AnimatedSection
      className="relative overflow-hidden bg-[#151d23] py-20 text-white max-[760px]:py-14"
      ariaLabel="EXPORT BIZ"
    >
      {(isVisible) => (
        <>
          <div className="absolute inset-0 bg-[url('/images/pattern-bg-breez.jpg')] bg-[length:450px_330px] bg-top opacity-[0.08]" />
          <div className="absolute inset-0 bg-[#151d23]/80" />

          <div
            className={`${layoutContainerClass} relative grid min-h-[380px] items-center gap-10 min-[980px]:grid-cols-[0.95fr_1.05fr]`}
          >
            <div
              className={`home-animated-item relative z-1 max-w-[740px] ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
            >
              <h2 className="m-0 text-[43px] leading-[1.1] font-medium text-white max-[760px]:text-[34px] max-[480px]:text-[29px]">
                Export Documentation and Management Solutions
              </h2>
              <p className="mt-8 text-[20px] leading-[1.2] font-light text-white/92 max-[760px]:text-base">
                Simplify and streamline your export operations with our Export
                Documentation and Management Solutions (EDMS). Manage export
                documentation, regulatory compliance, reporting, monthly returns,
                scheme claims, and outstanding records from a single, secure
                platform. Our intelligent solution reduces manual work, improves
                accuracy, saves valuable time, and helps your business operate
                more efficiently.
              </p>

              <div className="mt-10 flex flex-wrap gap-8 max-[560px]:gap-4">
                <Link
                  to="/export-biz"
                  className="inline-flex h-[62px] min-w-[210px] items-center justify-center rounded-full bg-[#27c7cd] px-8 text-base font-black uppercase text-white no-underline transition-colors hover:bg-[#1289bc] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#151d23]"
                >
                  Learn More
                </Link>
                <Link
                  to="/contacts"
                  className="inline-flex h-[62px] min-w-[210px] items-center justify-center rounded-full bg-[#27c7cd] px-8 text-base font-black text-white no-underline transition-colors hover:bg-[#1289bc] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#151d23]"
                >
                  Need a Demo
                </Link>
              </div>
            </div>

            <div
              className={`home-animated-item relative min-h-[260px] max-[980px]:min-h-0 ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "140ms" }}
            >
              <img
                className="relative z-1 ml-auto block w-full max-w-[720px] object-contain drop-shadow-[0_22px_45px_rgba(0,0,0,0.28)] max-[980px]:mx-auto"
                src="/images/home/ems_web.png"
                alt="Container ship for EXPORT BIZ software"
                title="Export Solutions Diagram"
                loading="lazy"
              />
            </div>
          </div>
        </>
      )}
    </AnimatedSection>
  );
}

export default ExportSolutionsSection;
