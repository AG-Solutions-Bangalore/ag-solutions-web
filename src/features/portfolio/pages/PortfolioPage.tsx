import { useState } from "react";
import PortfolioSEO from "../seo/PortfolioSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { useProjects } from "../hooks/useProjects";
import { PageHero, SectionTitle } from "@/components/layout";
import { Card, Lightbox } from "@/components/ui";
import { getImageUrl } from "@/utils/imageUrl";

interface PortfolioItem {
  title: string;
  subtitle: string;
  image: string;
}

const featuredItems: readonly PortfolioItem[] = [
  {
    title: "The Basics Web UI Kit",
    subtitle: "Technologies",
    image: getImageUrl("/images/portfolio/case1.jpg"),
  },
  {
    title: "Anorak Long",
    subtitle: "SMM",
    image: getImageUrl("/images/portfolio/case2.jpg"),
  },
];

const webItems: readonly PortfolioItem[] = [
  {
    title: "Agrawal Samaj",
    subtitle: "Community",
    image: getImageUrl("/images/portfolio/web1.png"),
  },
  {
    title: "Foundation India",
    subtitle: "Social",
    image: getImageUrl("/images/portfolio/web2.png"),
  },
  {
    title: "GPW Build Tech",
    subtitle: "Builder",
    image: getImageUrl("/images/portfolio/web3.png"),
  },
  {
    title: "Hera Associate",
    subtitle: "Civil",
    image: getImageUrl("/images/portfolio/web4.png"),
  },
  {
    title: "Naturalii",
    subtitle: "Ecommerce",
    image: getImageUrl("/images/portfolio/web5.png"),
  },
  {
    title: "Business Boosters",
    subtitle: "B2B Services",
    image: getImageUrl("/images/portfolio/web6.png"),
  },
];

const mobileItems: readonly PortfolioItem[] = [
  {
    title: "Ease Marketing",
    subtitle: "Marketing",
    image: getImageUrl("/images/portfolio/em.jpg"),
  },
  {
    title: "IVF Kidney",
    subtitle: "matrimonial",
    image: getImageUrl("/images/portfolio/ivf.jpg"),
  },
  {
    title: "Grow Together",
    subtitle: "Business",
    image: getImageUrl("/images/portfolio/gt.jpg"),
  },
];

const desktopItems: readonly PortfolioItem[] = [
  {
    title: "Login Page",
    subtitle: "Safe & Secure",
    image: getImageUrl("/images/portfolio/desktop1.png"),
  },
  {
    title: "All Documents in 1 Minute",
    subtitle: "Invoice & Packing List",
    image: getImageUrl("/images/portfolio/desktop3.webp"),
  },
  {
    title: "Print, Save As PDF, Email",
    subtitle: "Print & Share",
    image: getImageUrl("/images/portfolio/desktop4.png"),
  },
];

export default function PortfolioPage() {
  const { data: projectsData, isLoading } = useProjects();
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const projectBaseUrl = projectsData?.image_url.find(
    (img) => img.image_for === "Projects"
  )?.image_url || "https://ag-solutions.in/webapi/public/assets/images/project_images/";

  const apiWebItems = projectsData?.data
    .filter((p) => p.page === "web_development")
    .map((p) => ({
      title: p.project_name,
      subtitle: p.project_type || "Web Development",
      image: p.project_image ? `${projectBaseUrl}${p.project_image}` : getImageUrl("/images/portfolio/web1.png"),
    })) || [];

  const apiMobileItems = projectsData?.data
    .filter((p) => p.page === "mobile_app_development")
    .map((p) => ({
      title: p.project_name,
      subtitle: p.project_type || "Mobile App",
      image: p.project_image ? `${projectBaseUrl}${p.project_image}` : getImageUrl("/images/portfolio/em.jpg"),
    })) || [];

  const apiDesktopItems = projectsData?.data
    .filter((p) => p.page === "desktop_application")
    .map((p) => ({
      title: p.project_name,
      subtitle: p.project_type || "Desktop Application",
      image: p.project_image ? `${projectBaseUrl}${p.project_image}` : getImageUrl("/images/portfolio/desktop1.png"),
    })) || [];

  const apiFeaturedItems = projectsData?.data
    .filter((p) => p.page !== "web_development" && p.page !== "mobile_app_development" && p.page !== "desktop_application")
    .slice(0, 2)
    .map((p) => ({
      title: p.project_name,
      subtitle: p.project_type || p.page.replace(/_/g, " "),
      image: p.project_image ? `${projectBaseUrl}${p.project_image}` : getImageUrl("/images/portfolio/case1.jpg"),
    })) || [];

  const webList = apiWebItems.length > 0 ? apiWebItems : webItems;
  const mobileList = apiMobileItems.length > 0 ? apiMobileItems : mobileItems;
  const desktopList = apiDesktopItems.length > 0 ? apiDesktopItems : desktopItems;
  const featuredList = apiFeaturedItems.length > 0 ? apiFeaturedItems : featuredItems;

  function renderCard(item: PortfolioItem) {
    return (
      <Card
        key={item.title}
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
        onClick={() => setSelectedImage(item)}
        className="rounded-none cursor-pointer"
      />
    );
  }

  function renderSkeletonGrid(count: number = 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="animate-pulse border border-slate-100 bg-white">
            <div className="aspect-[3/2] bg-slate-100" />
            <div className="py-5 px-6 text-center bg-[#f4f5ee]/50 space-y-2">
              <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
              <div className="h-3 bg-slate-100 rounded w-1/2 mx-auto" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderFeaturedSkeleton() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="animate-pulse border border-slate-100 bg-white">
            <div className="aspect-[3/2] bg-slate-100" />
            <div className="py-5 px-6 text-center bg-[#f4f5ee]/50 space-y-2">
              <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
              <div className="h-3 bg-slate-100 rounded w-1/2 mx-auto" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <PortfolioSEO />

      <PageHero
        title="Portfolio"
        bgImage={getImageUrl("/images/pattern-bg-red.jpg")}
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "Portfolio" },
        ]}
      />

      {/* 2. Featured Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Featured portfolio items"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="We Help Over 80 Companies"
              align="center"
              titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            <div
              className={`mt-14 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              {isLoading ? renderFeaturedSkeleton() : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredList.map(renderCard)}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 3. Web Development Section */}
      <AnimatedSection
        className="bg-slate-50/50 border-t border-slate-100 py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Web development portfolio items"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="Web Development"
              align="center"
              titleClassName="text-[34px] leading-[1.16] font-black tracking-normal max-[760px]:text-[28px]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            <div
              className={`mt-12 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              {isLoading ? renderSkeletonGrid(3) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {webList.map(renderCard)}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 4. Mobile Application Section */}
      <AnimatedSection
        className="bg-white border-t border-slate-100 py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Mobile application portfolio items"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="Mobile Application"
              align="center"
              titleClassName="text-[34px] leading-[1.16] font-black tracking-normal max-[760px]:text-[28px]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            <div
              className={`mt-12 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              {isLoading ? renderSkeletonGrid(3) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {mobileList.map(renderCard)}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 5. Desktop Application Section */}
      <AnimatedSection
        className="bg-slate-50/50 border-t border-slate-100 py-20 pb-28 text-[#1b2c38] max-[760px]:py-14 max-[760px]:pb-20"
        ariaLabel="Desktop application portfolio items"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="Desktop Application"
              align="center"
              titleClassName="text-[34px] leading-[1.16] font-black tracking-normal max-[760px]:text-[28px]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            <div
              className={`mt-12 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              {isLoading ? renderSkeletonGrid(3) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {desktopList.map(renderCard)}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>

      <Lightbox
        isOpen={selectedImage !== null}
        image={selectedImage?.image || ""}
        title={selectedImage?.title || ""}
        subtitle={selectedImage?.subtitle}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
