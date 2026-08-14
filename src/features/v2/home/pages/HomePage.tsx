import SEO from "@/components/seo/SEO";

import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Industries from "@/features/v2/home/components/Industries";


function HomePage() {
    return (
        <>
            <SEO
                title="AG Solutions - Solution Provider for New Age Businesses"
                description="We help businesses transform ideas into scalable, secure and future-ready digital solutions."
            />

            <div className="bg-white font-sans text-accent-dark antialiased">
                <HeroSection />
                <FeatureCards />
                <ServicesSection />
                <AboutSection />
                <Industries />
            </div>
        </>
    );
}

export default HomePage;
