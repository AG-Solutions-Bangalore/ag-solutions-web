import SEO from "@/components/seo/SEO";
import { FAQSchema, TestimonialSchema } from "@/components/seo";
import HeroSection from "../components/HeroSection";
import HomeStatsStrip from "../components/HomeStatsStrip";
import FeatureCards from "../components/FeatureCards";
import ServicesSection from "../components/ServicesSection";
import FeaturedBlogsSection from "../components/FeaturedBlogsSection";
import AboutSection from "../components/AboutSection";
import Industries from "@/features/home/components/Industries";

import HomeBlogSection from "../components/HomeBlogSection";

const homeFaqs = [
  {
    question: "What digital and software services does AG Solutions provide?",
    answer:
      "AG Solutions provides full-cycle custom web development, mobile application development (iOS & Android), custom desktop software, digital marketing strategies, and specialized export/inventory management products like Export Biz and BizStock.",
  },
  {
    question: "How does AG Solutions ensure project quality and security?",
    answer:
      "We adhere to strict agile development practices, modern clean architecture, automated QA testing, and high-performance frontend standards.",
  },
  {
    question: "Can AG Solutions build customized software solutions tailored to our business?",
    answer:
      "Yes. We specialize in custom architecture and turnkey software development designed around your exact workflow, scaling requirements, and integration needs.",
  },
  {
    question: "How can I get started with a consultation or project quote?",
    answer:
      "You can schedule a free consultation through our contact form, call us at +91-8867171060, or email info@ag-solutions.in.",
  },
];

const homeReviews = [
  {
    authorName: "Vikram Singhania",
    reviewBody:
      "AG Solutions delivered our custom web platform ahead of schedule with flawless performance. Their engineering team is top-tier.",
    ratingValue: 5,
    itemReviewedName: "AG Solutions",
    itemType: "Organization" as const,
  },
  {
    authorName: "Ananya Deshmukh",
    reviewBody:
      "From mobile app design to digital marketing, AG Solutions transformed our digital presence and helped double our lead flow.",
    ratingValue: 5,
    itemReviewedName: "AG Solutions",
    itemType: "Organization" as const,
  },
];

function HomePage() {
  return (
    <>
      <SEO
        title="Updated AG Solutions - Solution Provider for New Age Businesses"
        description="We help businesses transform ideas into scalable, secure and future-ready digital solutions."
      />
      <TestimonialSchema reviews={homeReviews} />
      <FAQSchema faqs={homeFaqs} />


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
