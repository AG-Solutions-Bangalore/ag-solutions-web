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
      "We deliver end-to-end web development solutions that combine innovative technologies, user-focused design, and proven development practices. Our team builds secure, scalable, and high-performance websites and web applications that help businesses strengthen their online presence, streamline operations, and achieve long-term growth.",
    alt: "Custom Web Development Services",
    titleAttr: "Web Development Services",
  },
  {
    title: "Mobile App Development",
    image: "/images/home/services_mob.png",
    path: "/mobile-app-development",
    description:
      "We create innovative, high-performance mobile applications that help businesses connect with customers anytime, anywhere. From strategy and UI/UX design to development, testing, and deployment, our end-to-end mobile app solutions deliver seamless user experiences, strong security, and scalable performance for Android and iOS platforms.",
    alt: "Mobile App Development Services",
    titleAttr: "Mobile App Development",
  },
  {
    title: "Desktop Applications",
    image: "/images/home/services_desk.png",
    path: "/desktop-applications",
    description:
      "Whether you need to modernize legacy software or build a custom desktop application from the ground up, AG Solutions delivers reliable, scalable, and high-performance software tailored to your business needs. With 13+ years of industry experience, we develop secure desktop solutions that streamline workflows, improve productivity, and support long-term business growth while ensuring quality, efficiency, and cost-effective implementation.",
    alt: "Desktop Application Development",
    titleAttr: "Desktop Software Development",
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
                      alt={service.alt}
                      title={service.titleAttr}
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
