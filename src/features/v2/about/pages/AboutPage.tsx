import SEO from "@/components/seo/SEO";
import HeaderV2 from "@/components/layout/v2/Header";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutValues from "../components/AboutValues";
import WhyChooseUs from "../components/WhyChooseUs";
import BuildTogetherCta from "../components/BuildTogetherCta";
import Industries from "@/features/v1/home/pages/New/Industries";
import FooterV2 from "@/components/layout/v2/Footer";

function AboutPageV2() {
    return (
        <>
            <SEO
                title="About Us - AG Solutions | Solution Provider for New Age Businesses"
                description="Learn about AG Solutions, our core values, mission, team, and why businesses worldwide trust us as their IT solution partner."
            />

            <div className="min-h-screen bg-white font-sans text-accent-dark antialiased">
                <HeaderV2 activeNav="about" />
                <AboutHero />
                <AboutStats />
                <AboutValues />
                <WhyChooseUs />
                <BuildTogetherCta />
                <Industries />
                <FooterV2 />
            </div>
        </>
    );
}

export default AboutPageV2;
