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
              title="AG Solutions | Web Development, Mobile App Development & Software Solutions Company"
              align="left"
              titleClassName="max-w-[650px] text-5xl leading-[1.16] font-black tracking-normal max-[980px]:text-[44px] max-[560px]:text-[34px]"
            />

            <p className="mt-8 max-w-[680px] text-xl leading-[1.3] text-[#1d2d3b] max-[760px]:text-lg">
              With 13+ years of experience, AG Solutions helps businesses build
              secure, scalable, and high-performance digital solutions. We
              specialize in custom web development, Android and iOS mobile
              applications, desktop software, export documentation systems, and
              digital marketing services. Our experienced team delivers
              technology that improves efficiency, enhances customer
              experiences, and supports long-term business growth.
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
