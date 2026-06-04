import HomeSEO from "../seo/HomeSEO";
import AboutCompanySection from "../components/AboutCompanySection";
import ExportSolutionsSection from "../components/ExportSolutionsSection";
import HeroCarousel from "../components/HeroCarousel";
import RecentWorksSection from "../components/RecentWorksSection";
import ServicesOverviewSection from "../components/ServicesOverviewSection";
import StatsCounterSection from "../components/StatsCounterSection";

function HomePage() {
  return (
    <>
      <HomeSEO />
      <HeroCarousel />
      <AboutCompanySection />
      <ExportSolutionsSection />
      <ServicesOverviewSection />
      <StatsCounterSection />
      <RecentWorksSection />
    </>
  );
}

export default HomePage;
