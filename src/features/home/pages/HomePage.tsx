import { lazy, Suspense, useEffect, useRef, useState } from "react";
import SEO from "@/components/seo/SEO";
import HeroSection from "../components/HeroSection";

// Below-the-fold components are lazy-loaded so they don't ship in the
// initial JS bundle. They render once the user scrolls within ~600px.
const HomeStatsStrip = lazy(() => import("../components/HomeStatsStrip"));
const FeatureCards = lazy(() => import("../components/FeatureCards"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));

const FeaturedBlogsSection = lazy(() => import("../components/FeaturedBlogsSection"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const Industries = lazy(() => import("@/features/home/components/Industries"));
const DynamicTestimonialSection = lazy(() =>
  import("@/components/common/DynamicTestimonialSection").then((m) => ({
    default: m.DynamicTestimonialSection,
  }))
);
const DynamicFaqSection = lazy(() =>
  import("@/components/common/DynamicFaqSection").then((m) => ({
    default: m.DynamicFaqSection,
  }))
);
const HomeBlogSection = lazy(() => import("../components/HomeBlogSection"));

function DeferredHomeContent() {
  const ref = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isNearViewport && (
        <Suspense fallback={null}>
          <FeaturedBlogsSection />
          <AboutSection />
          <Industries />
          <DynamicTestimonialSection route="home" />
          <DynamicFaqSection slug="home" />
          <HomeBlogSection />
        </Suspense>
      )}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <SEO
        title="AG Solutions - Solution Provider for New Age Businesses"
        description="We help businesses transform ideas into scalable, secure and future-ready digital solutions."
      />

      <div className="bg-background font-sans text-foreground antialiased transition-colors duration-200">
        <HeroSection />
        {/* Below-the-fold sections are code-split to keep the initial JS small */}
        <Suspense fallback={null}>
          <HomeStatsStrip />
          <FeatureCards />
          <ServicesSection />
        </Suspense>

        <DeferredHomeContent />
      </div>
    </>
  );
}

export default HomePage;

