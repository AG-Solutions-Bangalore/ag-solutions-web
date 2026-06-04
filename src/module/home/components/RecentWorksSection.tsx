import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";

const works = [
  {
    title: "Websites/Ecommerce",
    image: "/images/home/home-18.jpg",
    path: "/portfolio",
  },
  {
    title: "Mobile Apps",
    image: "/images/home/home-19.jpg",
    path: "/portfolio",
  },
  {
    title: "Web/Desktop Applications",
    image: "/images/home/home-20.jpg",
    path: "/portfolio",
  },
] as const;

const colorLineSegments = [
  "w-[18%] bg-[#1b2c38]",
  "w-[22%] bg-[#27c7cd]",
  "w-[20%] bg-[#ff3c66]",
  "w-[20%] bg-[#ffcb05]",
  "w-[20%] bg-[#8bd82b]",
] as const;

function RecentWorksSection() {
  return (
    <AnimatedSection
      className="bg-white py-22 text-[#1b2c38] max-[760px]:py-14"
      ariaLabel="AG Solutions recent works"
    >
      {(isVisible) => (
        <div className={layoutContainerClass}>
          <div
            className={`home-animated-item text-center ${
              isVisible ? "home-animated-item-visible" : ""
            }`}
          >
            <h2 className="m-0 text-[52px] leading-none font-black max-[640px]:text-[38px]">
              Our Recent Works
            </h2>
            <div
              className="about-color-line relative mx-auto mt-8 h-[3px] w-[220px] overflow-hidden bg-[#1b2c38]"
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

          <div className="mt-14 grid gap-8 min-[900px]:grid-cols-3">
            {works.map((work, index) => (
              <Link
                key={work.title}
                to={work.path}
                className={`home-animated-item group block overflow-hidden bg-[#eef1eb] text-center no-underline shadow-[0_10px_30px_rgba(27,44,56,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_42px_rgba(27,44,56,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27c7cd] focus-visible:ring-offset-4 ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: `${130 + index * 110}ms` }}
              >
                <div className="relative h-[280px] overflow-hidden bg-[#e6e1da] max-[1120px]:h-[240px] max-[900px]:h-[320px] max-[560px]:h-[230px]">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    src={work.image}
                    alt={`${work.title} project preview`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#27c7cd]/0 transition-colors duration-300 group-hover:bg-[#27c7cd]/10" />
                </div>
                <div className="flex h-[66px] items-center justify-center bg-[#eef1eb] px-6 transition-colors duration-300 group-hover:bg-[#27c7cd]">
                  <span className="text-xl leading-tight font-normal text-[#4f5a62] transition-colors duration-300 group-hover:text-white">
                    {work.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div
            className={`home-animated-item mt-14 flex justify-center ${
              isVisible ? "home-animated-item-visible" : ""
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <Link
              to="/portfolio"
              className="inline-flex h-[72px] min-w-[230px] items-center justify-center rounded-full bg-[#132d3e] px-10 text-base font-black uppercase text-white no-underline transition-colors hover:bg-[#0f2534] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-4"
            >
              All Projects
            </Link>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}

export default RecentWorksSection;
