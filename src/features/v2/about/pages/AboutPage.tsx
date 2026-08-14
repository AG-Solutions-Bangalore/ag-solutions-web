import SEO from "@/components/seo/SEO";

import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutValues from "../components/AboutValues";
import WhyChooseUs from "../components/WhyChooseUs";
import BuildTogetherCta from "../components/BuildTogetherCta";
import Industries from "@/features/v1/home/pages/New/Industries";


function AboutPageV2() {
    return (
        <>
            <SEO
                title="About Us - AG Solutions | Solution Provider for New Age Businesses"
                description="Learn about AG Solutions, our core values, mission, team, and why businesses worldwide trust us as their IT solution partner."
            />

            <div className="bg-white font-sans text-accent-dark antialiased">
                <AboutHero />
                <AboutStats />
                <AboutValues />
                <WhyChooseUs />
                <BuildTogetherCta />
                <Industries />
            </div>
        </>
    );
}

export default AboutPageV2;
