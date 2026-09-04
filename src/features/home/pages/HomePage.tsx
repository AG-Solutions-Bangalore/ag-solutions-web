import { lazy, Suspense } from "react";
import { HomeSEO } from "../seo";
import HeroSection from "../components/HeroSection";
import HomeStatsStrip from "../components/HomeStatsStrip";
import FeatureCards from "../components/FeatureCards";
import ServicesSection from "../components/ServicesSection";

// Deep below-the-fold sections are lazy-loaded to keep initial JS lean.
// They render safely off-screen using content-visibility: auto to prevent any CLS.
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
  return (
    <div
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "0 2800px",
        minHeight: "1500px",
      }}
    >
      <Suspense fallback={<div style={{ minHeight: "1500px" }} />}>
        <FeaturedBlogsSection />
        <AboutSection />
        <Industries />
        <DynamicTestimonialSection route="home" />
        <DynamicFaqSection slug="home" />
        <HomeBlogSection />
      </Suspense>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HomeSEO />

      <div className="bg-background font-sans text-foreground antialiased transition-colors duration-200">
        <HeroSection />
        <HomeStatsStrip />
        <FeatureCards />
        <ServicesSection />

        <DeferredHomeContent />
      </div>
    </>
  );
}

export default HomePage;

