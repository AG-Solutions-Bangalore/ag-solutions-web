import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { useProjects } from "@/features/portfolio/hooks/useProjects";
import { SectionTitle } from "@/components/layout/SectionTitle";

// Configure indices (0-based) to specify which project image to use for each category cover.
// Change these indices to pick different project images easily.
// e.g. web: 1 will use the second project in the "web_development" category.
export const COVER_IMAGE_INDICES = {
  web: 1,      // Websites/Ecommerce category (Index 0 image "1.PNG" is broken)
  mobile: 0,   // Mobile Apps category
  desktop: 1,  // Web/Desktop Applications category (Index 0 image "10.jpg" is broken)
};

function RecentWorksSection() {
  const { data: projectsData } = useProjects();

  const projectBaseUrl = projectsData?.image_url.find(
    (img) => img.image_for === "Projects"
  )?.image_url || "https://ag-solutions.in/webapi/public/assets/images/project_images/";

  // Filter projects by category
  const webProjects = projectsData?.data.filter((p) => p.page === "web_development") || [];
  const mobileProjects = projectsData?.data.filter((p) => p.page === "mobile_app_development") || [];
  const desktopProjects = projectsData?.data.filter((p) => p.page === "desktop_application") || [];

  // Pick project based on configured index, falling back to index 0 if not found
  const webProj = webProjects[COVER_IMAGE_INDICES.web] ?? webProjects[0];
  const mobileProj = mobileProjects[COVER_IMAGE_INDICES.mobile] ?? mobileProjects[0];
  const desktopProj = desktopProjects[COVER_IMAGE_INDICES.desktop] ?? desktopProjects[0];

  const works = [
    {
      title: "Websites/Ecommerce",
      image: webProj?.project_image ? `${projectBaseUrl}${webProj.project_image}` : "/images/home/home-18.jpg",
      path: "/portfolio",
    },
    {
      title: "Mobile Apps",
      image: mobileProj?.project_image ? `${projectBaseUrl}${mobileProj.project_image}` : "/images/home/home-19.jpg",
      path: "/portfolio",
    },
    {
      title: "Web/Desktop Applications",
      image: desktopProj?.project_image ? `${projectBaseUrl}${desktopProj.project_image}` : "/images/home/home-20.jpg",
      path: "/portfolio",
    },
  ] as const;

  return (
    <AnimatedSection
      className="bg-white py-22 text-[#1b2c38] max-[760px]:py-14"
      ariaLabel="AG Solutions recent works"
    >
      {(isVisible) => (
        <div className={layoutContainerClass}>
          <SectionTitle
            title="Our Recent Works"
            align="center"
            titleClassName="text-[52px] leading-none font-black max-[640px]:text-[38px]"
            className={`home-animated-item ${
              isVisible ? "home-animated-item-visible" : ""
            }`}
          />

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
