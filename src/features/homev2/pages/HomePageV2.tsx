import SEO from "@/components/seo/SEO";
import HeaderV2 from "@/components/layout/v2/HeaderV2";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Industries from "@/features/home/pages/New/Industries";
import FooterV2 from "@/components/layout/v2/FooterV2";

function HomePageV2() {
    return (
        <>
            <SEO
                title="AG Solutions - Solution Provider for New Age Businesses"
                description="We help businesses transform ideas into scalable, secure and future-ready digital solutions."
            />

            <div className="min-h-screen bg-white font-sans text-ag-dark antialiased">
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

export default HomePageV2;
