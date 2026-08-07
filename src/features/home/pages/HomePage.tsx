import HomeSEO from "../seo/HomeSEO";
import AboutCompanySection from "../components/AboutCompanySection";
import ExportSolutionsSection from "../components/ExportSolutionsSection";
import HeroCarousel from "../components/HeroCarousel";
import RecentWorksSection from "../components/RecentWorksSection";
import ServicesOverviewSection from "../components/ServicesOverviewSection";
import StatsCounterSection from "../components/StatsCounterSection";
import { BlogCarousel } from "@/features/blog/components/BlogCarousel";
import WhatsAppWidget from "@/components/WhatsAppWidget";

function HomePage() {
  return (
    <>
      <HomeSEO />
      <HeroCarousel />
      <AboutCompanySection />
      <ExportSolutionsSection />
      <ServicesOverviewSection />
      <BlogCarousel
        type="featured"
        title="Featured Insights"
        subtitle="Explore handpicked stories, insights, and tech trends from our experts."
        bgClass="bg-[#f8fafc]"
      />
      <StatsCounterSection />
      <RecentWorksSection />
      <BlogCarousel
        type="front"
        title="Our Latest Blogs"
        subtitle="Stay updated with our recent tutorials, technical guides, and company news."
        bgClass="bg-[#f8fafc]"
      />
      <WhatsAppWidget />
      
    </>
  );
}

export default HomePage;

