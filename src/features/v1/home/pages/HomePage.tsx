import HomeSEO from "../seo/HomeSEO";
import AboutCompanySection from "../components/AboutCompanySection";
import ExportSolutionsSection from "../components/ExportSolutionsSection";
import HeroCarousel from "../components/HeroCarousel";
import RecentWorksSection from "../components/RecentWorksSection";
import ServicesOverviewSection from "../components/ServicesOverviewSection";
import StatsCounterSection from "../components/StatsCounterSection";
import Industries from "../pages/New/Industries";
import WhyChooseUs from "../pages/New/WhyChooseUs";
import { BlogCarousel } from "@/features/v1/blog/components/BlogCarousel";
import WhatsAppWidget from "@/components/WhatsAppWidget";

function HomePage() {
  return (
    <>
      <HomeSEO />
      <HeroCarousel />
      <AboutCompanySection />
      <ExportSolutionsSection />
      <ServicesOverviewSection />
      <Industries />
      <StatsCounterSection />
      <WhyChooseUs />
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

