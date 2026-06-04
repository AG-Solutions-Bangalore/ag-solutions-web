import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";

const trustPoints = [
  "We Are Reliable.",
  "Available Any Time.",
  "Unique, Creative User Interfaces.",
] as const;

const colorLineSegments = [
  "w-[18%] bg-[#1b2c38]",
  "w-[22%] bg-[#27c7cd]",
  "w-[20%] bg-[#ff3c66]",
  "w-[20%] bg-[#ffcb05]",
  "w-[20%] bg-[#8bd82b]",
] as const;

function AboutCompanySection() {
  return (
    <AnimatedSection
      className="bg-white py-22 text-[#1b2c38] max-[760px]:py-14"
      ariaLabel="AG Solutions company introduction"
    >
      {(isVisible) => (
        <div
          className={`${layoutContainerClass} grid items-center min-[980px]:grid-cols-[0.94fr_1.06fr]`}
        >
          <div
            className={`home-animated-item ${
              isVisible ? "home-animated-item-visible" : ""
            }`}
          >
            <h2 className="m-0 max-w-[650px] text-5xl leading-[1.16] font-black tracking-normal max-[980px]:text-[44px] max-[560px]:text-[34px]">
              Web and Mobile App <br /> Development Company
            </h2>

            <div
              className="about-color-line relative mt-8 h-[3px] w-[220px] overflow-hidden bg-[#1b2c38]"
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

            <p className="mt-8 max-w-[680px] text-xl leading-[1.3] text-[#1d2d3b] max-[760px]:text-lg">
              We take immense pleasure in introducing our esteemed company "AG
              Solutions!" TEN YEARS OLD and still rocking! Striving hard towards
              perfection, providing all types of tech and digital solution to
              our clients under one roof! We are into web development, desktop
              applications (stand-alone) and mobile applications.
            </p>

            <div className="mt-8 space-y-0">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-[19px] text-[#4f5a62] max-[560px]:gap-4 max-[560px]:text-base"
                >
                  <span className="text-[22px] font-black text-[#ff3c66]">
                    &#10003;
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-6">
              <Link
                to="/about"
                className="inline-flex h-[62px] min-w-[210px] items-center justify-center rounded-full border-2 border-[#132d3e] bg-white px-8 text-base font-black uppercase text-[#132d3e] no-underline transition-colors hover:bg-[#132d3e] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-4"
              >
                Learn More
              </Link>
              <Link
                to="/contacts"
                className="inline-flex h-[62px] min-w-[210px] items-center justify-center rounded-full bg-[#27c7cd] px-8 text-base font-black uppercase text-white no-underline transition-colors hover:bg-[#1289bc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-4"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          <div
            className={`home-animated-item flex justify-center min-[980px]:justify-end ${
              isVisible ? "home-animated-item-visible" : ""
            }`}
            style={{ transitionDelay: "130ms" }}
          >
            <img
              className="w-full max-w-[560px] object-contain"
              src="/images/home/about_us1.png"
              alt="Responsive web and mobile app development illustration"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}

export default AboutCompanySection;
