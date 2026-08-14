import SEO from "@/components/seo/SEO";
import HeaderV2 from "@/components/layout/v2/Header";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Industries from "@/features/v2/home/components/Industries";
import FooterV2 from "@/components/layout/v2/Footer";

function HomePage() {
    return (
        <>
            <SEO
                title="AG Solutions - Solution Provider for New Age Businesses"
                description="We help businesses transform ideas into scalable, secure and future-ready digital solutions."
            />

            <div className="min-h-screen bg-white font-sans text-accent-dark antialiased">
                <HeaderV2 activeNav="home" />
                <HeroSection />
                <FeatureCards />
                <ServicesSection />
                <AboutSection />
                <Industries />
                <FooterV2 />
            </div>
        </>
    );
}

export default HomePage;
