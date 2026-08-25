import { useState, useMemo } from "react";
import PortfolioSEO from "../seo/PortfolioSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { useProjects } from "../hooks/useProjects";
import { PageHero, SectionTitle } from "@/components/layout";
import { Card, Lightbox } from "@/components/ui";
import { getImageUrl } from "@/utils/imageUrl";

import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";

interface PortfolioItem {
  id?: string | number;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imageTitle: string;
  categoryKey?: string;
}

const IMAGE_TITLE_MAP: Record<string, string> = {
  "13.png": "Login Page",
  "1.png": "Agrawal Samaj Project",
  "7.jpg": "Ease Marketing Project",
  "10.jpg": "Login Page",
  "24.png": "Login Page",
  "29.jpg": "Login Page",
  "2.png": "Foundation India Project",
  "8.jpg": "IVFrishtey Project",
  "11.png": "Export Documents Management",
  "14.png": "Invoice Packing",
  "25.jpg": "Sign Up Page",
  "30.jpg": "Grow Together Project",
  "3.png": "GPW Buildtech Project",
  "9.jpg": "Grow Together Project",
  "12.png": "Print, Save PDF & Email",
  "15.png": "Invoice Packing",
  "26.jpg": "Ease Marketing Project",
  "31.jpg": "Registration Form",
  "16.png": "Invoice Packing",
  "27.jpg": "Category Selection",
  "5.png": "Naturalli Project",
  "17.png": "Invoice Packing",
  "28.jpg": "Login Page",
  "32.jpg": "Business Profile",
  "6.png": "Business Boosters Project",
  "18.png": "Invoice Packing",
  "33.jpg": "Updated Login Page",
  "19.png": "Invoice Packing",
  "21.png": "Invoice Packing",
  "33.jpeg": "Test Project",
};

const ALT_TITLE_MAP: Record<string, string> = {
  "login": "Login Page",
  "agrawalsamaj": "Agrawal Samaj Project",
  "ease marketing": "Ease Marketing Project",
  "login page": "Login Page",
  "login updated": "Updated Login Page",
  "foundation india": "Foundation India Project",
  "ivfrishtey": "IVFrishtey Project",
  "all documents in 1 minute": "Export Documents Management",
  "invoice packing": "Invoice Packing",
  "sign up": "Sign Up Page",
  "grow together": "Grow Together Project",
  "gpwbuildtech": "GPW Buildtech Project",
  "print,save ad pdf,email": "Print, Save PDF & Email",
  "registration form": "Registration Form",
  "select category": "Category Selection",
  "naturalli": "Naturalli Project",
  "business profile": "Business Profile",
  "businessboosters": "Business Boosters Project",
  "test project": "Test Project",
};

function getSuggestedImageTitle(imagePath?: string, rawName?: string): string {
  if (imagePath) {
    const filename = imagePath.split("/").pop()?.toLowerCase();
    if (filename && IMAGE_TITLE_MAP[filename]) {
      return IMAGE_TITLE_MAP[filename];
    }
  }
  if (rawName) {
    const key = rawName.trim().toLowerCase();
    if (ALT_TITLE_MAP[key]) {
      return ALT_TITLE_MAP[key];
    }
  }
  return rawName || "AG Solutions Portfolio Project";
}

const CATEGORY_TABS = [
  { key: "all", label: "All Projects" },
  { key: "web-development", label: "Web Development" },
  { key: "mobile-app-development", label: "Mobile Apps" },
  { key: "desktop-applications", label: "Desktop Software" },
  { key: "digital-marketing", label: "Digital Marketing" },
  { key: "ease-marketing", label: "Ease Marketing" },
  { key: "grow-together", label: "Grow Together" },
] as const;

export default function PortfolioPage() {
  const { data: projectsData, isLoading } = useProjects("all");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const projectBaseUrl = useMemo(() => {
    return (
      projectsData?.image_url.find((img) => img.image_for === "Projects")?.image_url ||
      "https://ag-solutions.in/webapi/public/assets/images/project_images/"
    );
  }, [projectsData]);

  // Normalize API projects
  const allProjects: PortfolioItem[] = useMemo(() => {
    if (!projectsData?.data || !Array.isArray(projectsData.data)) {
      return [];
    }

    return projectsData.data.map((p, idx) => {
      const normalizedPage = String(p.page || "")
        .trim()
        .replace(/_/g, "-")
        .toLowerCase();

      const imageUrl = p.project_image
        ? `${projectBaseUrl}${p.project_image}`
        : getImageUrl("/images/portfolio/case1.jpg");

      const categoryLabel =
        CATEGORY_TABS.find((t) => t.key === normalizedPage)?.label ||
        p.project_type ||
        normalizedPage.replace(/-/g, " ");

      const suggestedTitle = getSuggestedImageTitle(p.project_image, p.project_name);

      return {
        id: `${normalizedPage}-${p.project_sort || idx}-${p.project_name}`,
        title: suggestedTitle || p.project_name || "Client Project",
        subtitle: p.project_type || categoryLabel,
        image: imageUrl,
        imageAlt: suggestedTitle,
        imageTitle: suggestedTitle,
        categoryKey: normalizedPage,
      };
    });
  }, [projectsData, projectBaseUrl]);

  // Filtered by selected tab
  const filteredProjects = useMemo(() => {
    if (activeTab === "all") {
      return allProjects;
    }
    return allProjects.filter((p) => p.categoryKey === activeTab);
  }, [allProjects, activeTab]);

  function renderCard(item: PortfolioItem) {
    return (
      <Card
        key={item.id || item.title}
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
        imageAlt={item.imageAlt}
        imageTitle={item.imageTitle}
        onClick={() => setSelectedImage(item)}
        className="rounded-none cursor-pointer hover:shadow-lg transition-shadow duration-300"
      />
    );
  }

  function renderSkeletonGrid(count: number = 6) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Main Portfolio Explorer Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Client portfolio showcase"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="We Help Over 80+ Companies Worldwide"
              align="center"
              titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            {/* Category Filter Tabs */}
            <div
              className={`mt-10 flex flex-wrap justify-center items-center gap-2.5 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                const count =
                  tab.key === "all"
                    ? allProjects.length
                    : allProjects.filter((p) => p.categoryKey === tab.key).length;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                    {count > 0 && (
                      <span
                        className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-slate-200/80 text-slate-600"
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <div
              className={`mt-14 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {isLoading ? (
                renderSkeletonGrid(6)
              ) : filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map(renderCard)}
                </div>
              ) : (
                <div className="text-center py-16 bg-slate-50 border border-slate-100">
                  <p className="text-slate-500 font-medium">
                    No projects found for the selected category.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>

      <DynamicTestimonialSection route="portfolio" />
      <DynamicFaqSection slug="portfolio" />

      {/* Lightbox for full image inspection */}
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
