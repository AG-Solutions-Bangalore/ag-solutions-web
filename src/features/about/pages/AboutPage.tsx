import SEO from "@/components/seo/SEO";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutValues from "../components/AboutValues";
import WhyChooseUs from "../components/WhyChooseUs";
import BuildTogetherCta from "../components/BuildTogetherCta";
import Industries from "@/features/home/components/Industries";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";

function AboutPageV2() {
  return (
    <>
      <SEO
        title="About AG Solutions | IT Solutions for New Age Businesses"
        description="Learn about AG Solutions, our core values, mission, team, and why businesses worldwide trust us as their IT solution partner."
      />

      <div className="bg-white font-sans text-accent-dark antialiased">
        <AboutHero />
        <AboutStats />
        <AboutValues />
        <WhyChooseUs />
        <DynamicTestimonialSection route="about" />
        <DynamicFaqSection slug="about" />
        <BuildTogetherCta />
        <Industries />
      </div>
    </>
  );
}

export default AboutPageV2;
