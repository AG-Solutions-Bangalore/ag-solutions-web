import SEO from "@/components/seo/SEO";
import { FAQSchema } from "@/components/seo";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutValues from "../components/AboutValues";
import WhyChooseUs from "../components/WhyChooseUs";
import BuildTogetherCta from "../components/BuildTogetherCta";
import Industries from "@/features/home/components/Industries";

const aboutFaqs = [
  {
    question: "When was AG Solutions founded and where are you located?",
    answer:
      "AG Solutions is headquartered in Jayanagar, Bengaluru, Karnataka, India, providing software engineering and digital transformation services to clients across India and globally.",
  },
  {
    question: "What is AG Solutions' core mission?",
    answer:
      "Our mission is to help new-age businesses, exporters, and enterprises transform ideas into scalable, secure, high-performance digital platforms and automated tools.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We serve global export & trading houses, manufacturing, healthcare, e-commerce, real estate, logistics, and retail businesses.",
  },
];

function AboutPageV2() {
    return (
        <>
            <SEO
                title="About Us - AG Solutions | Solution Provider for New Age Businesses"
                description="Learn about AG Solutions, our core values, mission, team, and why businesses worldwide trust us as their IT solution partner."
            />
            <FAQSchema faqs={aboutFaqs} />



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
