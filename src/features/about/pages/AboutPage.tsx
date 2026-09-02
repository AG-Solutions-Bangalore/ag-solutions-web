import { AboutSEO } from "../seo";
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
      <AboutSEO />

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
