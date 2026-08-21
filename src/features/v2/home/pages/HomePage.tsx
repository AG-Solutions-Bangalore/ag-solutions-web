import SEO from "@/components/seo/SEO";
import { FAQSchema } from "@/components/seo";
import HeroSection from "../components/HeroSection";
import HomeStatsStrip from "../components/HomeStatsStrip";
import FeatureCards from "../components/FeatureCards";
import ServicesSection from "../components/ServicesSection";
import FeaturedBlogsSection from "../components/FeaturedBlogsSection";
import AboutSection from "../components/AboutSection";
import Industries from "@/features/v2/home/components/Industries";
import HomeBlogSection from "../components/HomeBlogSection";

function HomePage() {
    return (
        <>
            <SEO
                title="AG Solutions - Solution Provider for New Age Businesses"
                description="We help businesses transform ideas into scalable, secure and future-ready digital solutions."
            />
            <FAQSchema />

            <div className="bg-background font-sans text-foreground antialiased transition-colors duration-200">
                <HeroSection />
                <HomeStatsStrip />
                <FeatureCards />
                <ServicesSection />
                <FeaturedBlogsSection />
                <AboutSection />
                <Industries />
                <HomeBlogSection />
            </div>
        </>
    );
}

export default HomePage;
