import { useState, useMemo, useEffect, useRef } from "react";
import PortfolioSEO from "../seo/PortfolioSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { useProjects } from "../hooks/useProjects";
import { SectionTitle } from "@/components/layout";
import { Card, Lightbox } from "@/components/ui";
import { getImageUrl } from "@/utils/imageUrl";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const CATEGORY_CONFIG: Record<
  string,
  { label: string; badge: string; description: string; order: number }
> = {
  "web-development": {
    label: "Web Development",
    badge: "WEB DEVELOPMENT",
    description: "Custom web applications, portals, and responsive websites built for enterprise growth.",
    order: 1,
  },
  "mobile-app-development": {
    label: "Mobile Apps",
    badge: "MOBILE APP DEVELOPMENT",
    description: "High-performance iOS and Android mobile solutions engineered for seamless mobile experience.",
    order: 2,
  },
  "desktop-applications": {
    label: "Desktop Applications",
    badge: "DESKTOP APPLICATIONS",
    description: "Desktop software suites, documentation tools, and offline-capable management apps.",
    order: 3,
  },
  "digital-marketing": {
    label: "Digital Marketing",
    badge: "DIGITAL MARKETING",
    description: "Data-driven marketing campaigns, social graphics, branding assets, and lead generation.",
    order: 4,
  },
  "ease-marketing": {
    label: "Ease Marketing",
    badge: "EASE MARKETING",
    description: "Automated marketing workflows, customer management tools, and growth campaigns.",
    order: 5,
  },
  "grow-together": {
    label: "Grow Together",
    badge: "GROW TOGETHER",
    description: "Collaborative business registration, networking profiles, and ecosystem expansion.",
    order: 6,
  },
};

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

  // Group all projects by their exact API page category (limit 6 items per section)
  const groupedSections = useMemo(() => {
    if (!allProjects.length) return [];

    const map = new Map<string, PortfolioItem[]>();

    allProjects.forEach((item) => {
      const key = item.categoryKey || "other";
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)!.push(item);
    });

    const results = Array.from(map.entries()).map(([key, items], idx) => {
      const config = CATEGORY_CONFIG[key] || {
        label: key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        badge: key.toUpperCase().replace(/-/g, " "),
        description: "Featured client projects and software solutions.",
        order: 99 + idx,
      };

      return {
        id: key,
        badge: `${String(config.order).padStart(2, "0")}. ${config.badge}`,
        title: config.label,
        description: config.description,
        order: config.order,
        items: items.slice(0, 6),
        totalCount: items.length,
      };
    });

    return results.sort((a, b) => a.order - b.order);
  }, [allProjects]);

  // Filter sections based on selected tab
  const visibleSections = useMemo(() => {
    if (activeTab === "all") return groupedSections;
    return groupedSections.filter((s) => s.id === activeTab);
  }, [groupedSections, activeTab]);

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

interface SectionCarouselProps {
  items: PortfolioItem[];
  renderCard: (item: PortfolioItem) => React.ReactNode;
}

function SectionCarousel({ items, renderCard }: SectionCarouselProps) {
  const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // Tracks whether the user is actively scrolling (vertical or horizontal).
  // We pause auto-scroll during/after user scroll to avoid fighting Lenis.
  const userScrollingRef = useRef(false);
  const userScrollTimerRef = useRef<number | null>(null);

  // Duplicate items once for continuous infinite scrolling (12 cards max per section)
  const displayItems = useMemo(() => {
    if (items.length <= 1) return items;
    return [...items, ...items];
  }, [items]);

  // Pause auto-scroll when section leaves the viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0]?.isIntersecting ?? false);
      },
      { rootMargin: "200px 0px", threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Detect vertical page scrolling and pause auto-scroll while the user is moving
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        userScrollingRef.current = true;
        if (userScrollTimerRef.current !== null) {
          window.clearTimeout(userScrollTimerRef.current);
        }
        userScrollTimerRef.current = window.setTimeout(() => {
          userScrollingRef.current = false;
          userScrollTimerRef.current = null;
        }, 5000);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (userScrollTimerRef.current !== null) {
        window.clearTimeout(userScrollTimerRef.current);
        userScrollTimerRef.current = null;
      }
    };
  }, []);

  // Detect horizontal carousel scrolling by the user
  useEffect(() => {
    if (!scrollEl) return;
    const onCarouselScroll = () => {
      userScrollingRef.current = true;
      if (userScrollTimerRef.current !== null) {
        window.clearTimeout(userScrollTimerRef.current);
      }
      userScrollTimerRef.current = window.setTimeout(() => {
        userScrollingRef.current = false;
        userScrollTimerRef.current = null;
      }, 5000);
    };
    scrollEl.addEventListener("scroll", onCarouselScroll, { passive: true });
    return () => {
      scrollEl.removeEventListener("scroll", onCarouselScroll);
    };
  }, [scrollEl]);

  useEffect(() => {
    if (!scrollEl || isHovered || !isInView || items.length <= 1) return;

    // Respect prefers-reduced-motion: don't auto-scroll
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    let intervalId: number | undefined;
    let cancelled = false;

    const start = () => {
      if (cancelled) return;
      intervalId = window.setInterval(() => {
        // Skip if the user is actively scrolling the page or carousel
        if (userScrollingRef.current) return;
        const { scrollLeft, clientWidth, scrollWidth } = scrollEl;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          // "auto" avoids triggering a smooth-scroll animation that fights Lenis
          scrollEl.scrollTo({ left: 0, behavior: "auto" });
        } else {
          const amount = scrollEl.clientWidth * 0.75;
          scrollEl.scrollBy({ left: amount, behavior: "auto" });
        }
      }, 4500);
    };

    // Defer auto-scroll until idle so first paint isn't blocked
    const idleId = (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(start, { timeout: 2000 })
      : window.setTimeout(start, 1200);

    return () => {
      cancelled = true;
      if (intervalId !== undefined) window.clearInterval(intervalId);
      if ((window as any).requestIdleCallback) {
        (window as any).cancelIdleCallback?.(idleId);
      } else {
        window.clearTimeout(idleId as number);
      }
    };
  }, [scrollEl, isHovered, isInView, items.length]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollEl) {
      const amount = scrollEl.clientWidth * 0.75;
      scrollEl.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative group/carousel px-10 sm:px-14"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={() => handleScroll("left")}
        aria-label="Previous items"
        className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card text-foreground border border-border shadow-lg flex items-center justify-center hover:bg-pink hover:text-white hover:border-pink transition-all duration-200 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => handleScroll("right")}
        aria-label="Next items"
        className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card text-foreground border border-border shadow-lg flex items-center justify-center hover:bg-pink hover:text-white hover:border-pink transition-all duration-200 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Container — removed scroll-smooth so auto-scroll doesn't chain
          smooth animations that fight the Lenis vertical scroll. Removed
          content-visibility/containIntrinsicSize which were causing layout
          shifts that felt like a stuck scroll on first interaction. */}
      <div
        ref={setScrollEl}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {displayItems.map((item, idx) => (
          <div
            key={`${item.id || item.title}-${idx}`}
            className="shrink-0 w-full sm:w-[330px] md:w-[360px] snap-center"
          >
            {renderCard(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

  function renderSkeletonGrid(count: number = 6) {
    return (
      <div className="flex gap-6 overflow-x-hidden py-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="shrink-0 w-full sm:w-[330px] md:w-[360px] animate-pulse border border-border bg-card overflow-hidden shadow-xs">
            <div className="aspect-[3/2] bg-muted/20" />
            <div className="py-6 px-6 text-center space-y-2.5">
              <div className="h-4 bg-muted/40 rounded w-2/3 mx-auto" />
              <div className="h-3 bg-muted/20 rounded w-1/2 mx-auto" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <PortfolioSEO />

      {/* Main Portfolio Explorer Section */}
      <AnimatedSection
        className="bg-background pt-8 pb-16 sm:pt-12 sm:pb-20 text-foreground transition-colors duration-200"
        ariaLabel="Client portfolio showcase"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="Our Project Showcase"
              align="center"
              titleClassName="text-2xl sm:text-3xl md:text-[38px] leading-tight font-black text-dark"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />
            <p
              className={`mt-4 text-center text-sm sm:text-base text-muted font-normal leading-relaxed max-w-[700px] mx-auto home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Explore our comprehensive portfolio across Web Development, Mobile Apps, Desktop Applications, Digital Marketing, Ease Marketing, and Grow Together initiatives.
            </p>

            {/* Category Filter Tabs */}
            {groupedSections.length > 0 && (
              <div
                className={`mt-10 flex flex-wrap justify-center items-center gap-2.5 home-animated-item ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    activeTab === "all"
                      ? "bg-pink text-white shadow-md shadow-pink/20"
                      : "bg-card text-foreground border border-border hover:bg-pink-light hover:text-pink hover:border-pink/30 shadow-xs"
                  }`}
                >
                  All Projects ({allProjects.length})
                </button>
                {groupedSections.map((sec) => {
                  const isActive = activeTab === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveTab(sec.id)}
                      className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-pink text-white shadow-md shadow-pink/20"
                          : "bg-card text-foreground border border-border hover:bg-pink-light hover:text-pink hover:border-pink/30 shadow-xs"
                      }`}
                    >
                      {sec.title} ({sec.totalCount})
                    </button>
                  );
                })}
              </div>
            )}

            {/* Vertical Categorized Sections */}
            <div className="mt-14 space-y-16 sm:space-y-20">
              {isLoading ? (
                renderSkeletonGrid(6)
              ) : visibleSections.length > 0 ? (
                visibleSections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="space-y-8 pt-8 border-t border-border/40 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal mb-2">
                        {section.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-dark dark:text-foreground">
                        {section.title}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-muted max-w-lg leading-relaxed">
                        {section.description}
                      </p>
                    </div>

                    <SectionCarousel items={section.items} renderCard={renderCard} />
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-card border border-border rounded-2xl shadow-xs">
                  <p className="text-muted font-medium text-sm">
                    No projects available for this category yet.
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
