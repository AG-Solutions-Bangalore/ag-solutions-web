import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Web Development",
    image: "/images/home/services_web.png",
    path: "/web-development",
    description:
      "We offer end-to-end best web development services by strategically combining latest web technologies with mature project development methodologies & robust project management tools.",
  },
  {
    title: "Mobile App Development",
    image: "/images/home/services_mob.png",
    path: "/mobile-app-development",
    description:
      "We offer best mobile app development services from strategy & design to development, testing, and deployment, we provide enterprise mobility solutions for a wide range of industries that are guaranteed to help you thrive in this mobile-first world.",
  },
  {
    title: "Desktop Applications",
    image: "/images/home/services_desk.png",
    path: "/desktop-applications",
    description:
      "Whether you're struggling with an outdated legacy software that needs to be migrated to latest technologies, or developing a software for the first time, we ensure to minimize your risk, project timeline, and cost to implement with our 9+ years of domain expertise.",
  },
] as const;

function ServicesOverviewSection() {
  return (
    <AnimatedSection
      className="relative overflow-hidden bg-white py-22 text-[#1b2c38] max-[760px]:py-14"
      ariaLabel="AG Solutions services overview"
    >
      {(isVisible) => (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] opacity-[0.055]">
            <div className="absolute -bottom-20 left-0 h-[280px] w-full origin-bottom-left -skew-y-[27deg] bg-[#8c97a3]" />
            <div className="absolute -bottom-16 left-[10%] h-[230px] w-[85%] origin-bottom-left -skew-y-[18deg] bg-[#1b2c38]" />
          </div>

          <div className={`${layoutContainerClass} relative z-1`}>
            <SectionTitle
              title="Services"
              align="center"
              titleClassName="text-[52px] leading-none font-black max-[640px]:text-[38px]"
              className={`home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
            />

            <div className="mt-14 grid gap-10 min-[920px]:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`home-animated-item flex h-full flex-col items-center text-center ${
                    isVisible ? "home-animated-item-visible" : ""
                  }`}
                  style={{ transitionDelay: `${120 + index * 100}ms` }}
                >
                  <Link
                    to={service.path}
                    className="grid h-[116px] w-[160px] place-items-center no-underline"
                    aria-label={service.title}
                  >
                    <img
                      className="max-h-[96px] w-auto object-contain"
                      src={service.image}
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                  <h3 className="mt-7 mb-0 text-[25px] leading-tight font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-7 mb-0 text-justify text-[20px] leading-[1.3] font-extralight text-[#4f5a62] max-[760px]:text-base">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>

            <div
              className={`home-animated-item mt-14 flex flex-wrap justify-center gap-6 ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <Button
                to="/services"
                variant="secondary"
                size="lg"
                className="min-w-[196px] uppercase font-black bg-[#132d3e] hover:bg-[#0f2534] border-none"
              >
                More Info
              </Button>
              <Button
                to="/contacts"
                variant="primary"
                size="lg"
                className="min-w-[220px] uppercase font-black bg-[#27c7cd] hover:bg-[#1289bc] border-none"
              >
                Get Started!
              </Button>
            </div>
          </div>
        </>
      )}
    </AnimatedSection>
  );
}

export default ServicesOverviewSection;
