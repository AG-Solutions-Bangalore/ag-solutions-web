import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { Button } from "@/components/ui/Button";

const trustPoints = [
  "We Are Reliable.",
  "Available Any Time.",
  "Unique, Creative User Interfaces.",
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
            <SectionTitle
              title={
                <>
                  AG Solutions | Web Development,<br />
                  Mobile App Development<br />
                  & Software Solutions Company
                </>
              }
              align="left"
              titleClassName="max-w-[650px] text-[34px] leading-[1.26] font-black tracking-normal max-[980px]:text-[30px] max-[560px]:text-[24px]"
            />

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
              <Button
                to="/about"
                variant="outline"
                size="lg"
                className="min-w-[210px] uppercase font-black border-[#132d3e] text-[#132d3e] hover:bg-[#132d3e]"
              >
                Learn More
              </Button>
              <Button
                to="/contacts"
                variant="primary"
                size="lg"
                className="min-w-[210px] uppercase font-black bg-[#27c7cd] hover:bg-[#1289bc] border-none"
              >
                Get a Quote
              </Button>
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
              title="About AG Solutions"
              loading="lazy"
              width="560"
              height="450"
            />
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}

export default AboutCompanySection;
