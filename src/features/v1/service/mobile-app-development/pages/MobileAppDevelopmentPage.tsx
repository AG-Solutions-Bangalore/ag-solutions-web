import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import MobileAppDevelopmentSEO from "../seo/MobileAppDevelopmentSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { useCreateEnquiry } from "@/features/v1/contact-us/hooks/useCreateEnquiry";
import { layoutContainerClass } from "@/components/layout/styles";
import { PageHero, SectionTitle } from "@/components/layout";
import { Card, Lightbox } from "@/components/ui";
import { FAQSchema } from "@/components/seo";
import { getUtmParams } from "@/utils/utmUtils";
import { getImageUrl } from "@/utils/imageUrl";

interface PortfolioItem {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  imageTitle: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: readonly FAQItem[] = [
  {
    question: "1. What mobile app development services does AG Solutions provide?",
    answer:
      "AG Solutions provides custom Android and iOS app development services for businesses looking to build secure, scalable, and user-friendly mobile applications. Our services cover the complete app development lifecycle, including requirement analysis, UI/UX design, development, testing, deployment, and ongoing support.",
  },
  {
    question: "2. Does AG Solutions develop both Android and iOS apps?",
    answer:
      "Yes. AG Solutions specializes in developing Android and iOS applications based on your business requirements and target audience. We can help businesses create applications designed specifically for Android devices, Apple devices, or both platforms.",
  },
  {
    question: "3. How does AG Solutions develop a custom mobile application?",
    answer:
      "Our mobile app development process starts with understanding your business goals, target users, required features, and technical requirements. We then move through UI/UX design, application development, testing, deployment, and post-launch support to deliver a reliable mobile application.",
  },
  {
    question: "4. How much does mobile app development cost?",
    answer:
      "The cost of mobile app development depends on factors such as app complexity, number of features, UI/UX requirements, platform, integrations, security requirements, and development timeline. AG Solutions evaluates your requirements and provides a practical development approach based on your project scope.",
  },
  {
    question: "5. How long does it take to develop an Android or iOS app?",
    answer:
      "The development timeline depends on the application's features, complexity, design requirements, integrations, and testing needs. After understanding your requirements, AG Solutions can define a suitable development roadmap and timeline for your Android or iOS application.",
  },
  {
    question: "6. Can AG Solutions build an app according to our specific business requirements?",
    answer:
      "Yes. AG Solutions focuses on custom mobile app development rather than a one-size-fits-all approach. We understand your business processes, users, and objectives before developing an application tailored to your specific requirements.",
  },
  {
    question: "7. Does AG Solutions provide UI/UX design for mobile applications?",
    answer:
      "Yes. Our mobile app development process includes UI/UX design focused on creating intuitive navigation, clear interfaces, and engaging user experiences. Designs can be planned according to the requirements and design standards of Android and iOS platforms.",
  },
  {
    question: "8. Does AG Solutions test mobile applications before launch?",
    answer:
      "Yes. Mobile applications are tested before deployment to identify functional issues, compatibility problems, usability concerns, and performance issues. Testing helps ensure the Android or iOS application provides a reliable experience before it reaches users.",
  },
  {
    question: "9. Does AG Solutions provide app deployment services?",
    answer:
      "Yes. We can support the deployment and launch process for Android and iOS applications, including preparation for the relevant app distribution platforms. Our team can also assist with post-launch updates and improvements.",
  },
  {
    question: "10. Does AG Solutions provide mobile app maintenance and support?",
    answer:
      "Yes. Our support continues after the application is launched. We can provide bug fixes, application updates, performance improvements, feature enhancements, and ongoing technical maintenance to help keep your mobile application reliable.",
  },
  {
    question: "11. Why should businesses choose AG Solutions for mobile app development?",
    answer:
      "AG Solutions combines 15+ years of industry experience, customized development, technical expertise, clear communication, and ongoing support. We focus on understanding each business requirement and building Android and iOS applications that are practical, scalable, secure, and user-friendly.",
  },
  {
    question: "12. Does AG Solutions develop apps for businesses in Bangalore?",
    answer:
      "Yes. AG Solutions provides Android and iOS mobile app development services for businesses in Bangalore and other locations. Our team works with businesses to understand their requirements and develop customized mobile applications based on their goals and target users.",
  },
];

const whyChooseCards = [
  {
    title: "Clear Planning & Requirement Analysis",
    emoji: "🧠",
    description:
      "Every successful mobile application starts with a clear understanding of the business requirement. We analyze your app idea, target users, required features, and business objectives before development to create a clear and practical development plan.",
  },
  {
    title: "15+ Years of Industry Experience",
    emoji: "🏆",
    description:
      "With 15+ years of industry experience, AG Solutions brings proven technical expertise to every project. We understand diverse business requirements and use this experience to plan and develop custom Android and iOS applications that are reliable, user-friendly, scalable, and aligned with your business goals.",
  },
  {
    title: "Reliable App Development & Ongoing Support",
    emoji: "🤝",
    description:
      "We work closely with you throughout the mobile app development journey, from planning and development to deployment and post-launch support. Our team remains available for updates, enhancements, performance improvements, and maintenance to help keep your Android and iOS applications reliable and up to date.",
  },
  {
    title: "Strong Technical Expertise",
    emoji: "⚙️",
    description:
      "Our experienced team uses reliable and modern technologies to develop high-quality Android and iOS applications. We focus on secure development, smooth performance, scalability, and maintainable solutions to deliver mobile apps that support your business goals and provide a dependable user experience.",
  },
  {
    title: "Cost-Effective App Development",
    emoji: "💰",
    description:
      "We provide cost-effective Android and iOS app development based on your actual business requirements and project scope. By focusing on essential features, efficient development, and practical solutions, we help businesses achieve a high-quality mobile application while making the most of their development budget.",
  },
  {
    title: "Clear Communication & Ongoing Support",
    emoji: "📞",
    description:
      "We provide regular project updates, clear timelines, and transparent communication throughout the app development process. Even after your Android or iOS app is launched, our team remains available for updates, improvements, bug fixes, and ongoing technical support to ensure your application continues to perform reliably.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis & Strategy",
    description:
      "We begin by understanding your business objectives, target audience, industry, and app requirements. Our team conducts market research and technical analysis to define the app's features, functionality, technology stack, and development roadmap.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description:
      "Our UI/UX designers create intuitive user journeys, wireframes, prototypes, and engaging interfaces. We focus on usability, accessibility, responsive design, and consistent experiences across Android and iOS devices.",
  },
  {
    step: "03",
    title: "App Development & Testing",
    description:
      "Our developers build secure, scalable, and high-performance mobile applications using modern technologies and agile development practices. Every feature undergoes functional, security, compatibility, and performance testing to ensure a reliable app before launch.",
  },
  {
    step: "04",
    title: "Deployment & Ongoing Support",
    description:
      "We manage the complete app deployment process, including Google Play Store and Apple App Store submission. After launch, we provide continuous monitoring, performance optimization, bug fixes, updates, and ongoing mobile app maintenance to support long-term growth.",
  },
];

const industries = [
  { name: "Plastic Industries & Manufacturers", icon: "🏭" },
  { name: "Garment Manufacturers & Association", icon: "👕" },
  { name: "Transportation & Fleet Management", icon: "🚛" },
  { name: "Granite & Tiles Wholesalers", icon: "🧱" },
  { name: "Large Hardware Retailers", icon: "🛠️" },
  { name: "Exporters & Trading Businesses", icon: "📦" },
  { name: "Manufacturing & Industrial Companies", icon: "⚙️" },
  { name: "Home Services & Home Automation", icon: "🏠" },
  { name: "NGOs & Foundations", icon: "🤝" },
  { name: "Communities, Associations & Groups", icon: "👥" },
  { name: "Education & Professional Training", icon: "🎓" },
  { name: "Business Networking Platforms", icon: "🌐" },
  { name: "Matrimonial & Community Platforms", icon: "💍" },
  { name: "Financial & Investment Platforms", icon: "📈" },
  { name: "Service Businesses & SMEs", icon: "💼" },
  { name: "Other Custom Business Requirements", icon: "✨" },
];

const recentWorks: readonly PortfolioItem[] = [
  {
    title: "Ease Marketing",
    subtitle: "marketing",
    image: getImageUrl("/images/services/mobile-app-development/em.jpg"),
    alt: "Ease Marketing mobile application",
    imageTitle: "Ease Marketing App",
  },
  {
    title: "IVF Kidney",
    subtitle: "matrimonial",
    image: getImageUrl("/images/services/mobile-app-development/ivf.jpg"),
    alt: "IVF healthcare mobile application",
    imageTitle: "IVF Healthcare App",
  },
  {
    title: "Grow Together",
    subtitle: "business",
    image: getImageUrl("/images/services/mobile-app-development/gt.jpg"),
    alt: "Grow Together mobile application",
    imageTitle: "Grow Together App",
  },
];

export default function MobileAppDevelopmentPage() {
  const createEnquiry = useCreateEnquiry();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; subtitle?: string } | null>(null);
  const faqList = defaultFaqs;
  const worksList = recentWorks;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const utmParams = getUtmParams();
    createEnquiry.mutate(
      {
        enquiryFullName: formData.name,
        enquiryEmail: formData.email,
        enquiryMobile: formData.phone,
        enquiryMessage: formData.details,
        utm_medium: utmParams.utm_medium,
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        enquiryFrom: "Mobile Development",
      },
      {
        onSuccess: () => {
          if (submitTimerRef.current !== null) {
            window.clearTimeout(submitTimerRef.current);
          }

          setIsSubmitted(true);
          setFormData({ name: "", phone: "", email: "", details: "" });
          submitTimerRef.current = window.setTimeout(() => {
            setIsSubmitted(false);
          }, 4000);
        },
      }
    );
  }

  function toggleFaq(index: number) {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  }

  return (
    <>
      <MobileAppDevelopmentSEO />
      <FAQSchema faqs={faqList} />

      {/* 1. Page Hero */}
      <PageHero
        title="Mobile App Development Company In Bangalore"
        bgImage={getImageUrl("/images/pattern-bg-red.jpg")}
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "Mobile Application Development" },
        ]}
      />

      {/* 2. Top Architecture Banner & Intro */}
      <AnimatedSection
        className="relative overflow-hidden py-20 text-[#1b2c38] max-[760px]:py-14 bg-white"
        ariaLabel="Mobile Application Development details"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} relative z-1`}>
            {/* Main Header */}
            <SectionTitle
              title="Mobile Application Development"
              align="center"
              titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#151d23]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            {/* 3 Columns Banner Graphic */}
            <div
              className={`mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-[#0d2331] text-white p-8 lg:p-12 rounded-[24px] shadow-xl home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              {/* Android Column */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={getImageUrl("/images/services/mobile-app-development/android.png")}
                  alt="Android app development by AG Solutions"
                  title="Android App Development"
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
                <h3 className="mt-4 text-[24px] font-black text-[#ff3c66] tracking-tight">
                  Android
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-200 font-normal max-w-[300px] mx-auto">
                  From strategy & design to development, testing, and deployment, we provide enterprise mobility solutions for a wide range of industries that are guaranteed to help you thrive in the mobile-first world.
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="flex justify-center my-4 lg:my-0">
                <img
                  src={getImageUrl("/images/services/mobile-app-development/mobile-app-architecture.png")}
                  alt="Mobile app architecture for Android and iOS applications"
                  title="Mobile App Architecture"
                  className="w-full max-w-[340px] object-contain drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* iOS Column */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={getImageUrl("/images/services/mobile-app-development/apple.png")}
                  alt="iOS app development by AG Solutions"
                  title="iOS App Development"
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
                <h3 className="mt-4 text-[24px] font-black text-[#ff3c66] tracking-tight">
                  iOS
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-200 font-normal max-w-[300px] mx-auto">
                  From strategy & design to development, testing, and deployment, we provide enterprise mobility solutions for a wide range of industries that are guaranteed to help you thrive in the mobile-first world.
                </p>
              </div>
            </div>

            {/* Introductory Text Box */}
            <div
              className={`mt-16 text-center max-w-[920px] mx-auto home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="text-[28px] sm:text-[34px] font-black leading-[1.25] text-[#151d23]">
                Why Choose AG Solutions for Web & Mobile App Development?
              </h2>
              <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.65] text-[#4f5a62] font-normal">
                Choosing the right mobile app development company is about more than simply building an application. At <strong className="font-bold text-[#151d23]">AG Solutions</strong>, we understand your business requirements, target users, and app objectives to create reliable, user-friendly, and scalable <strong className="font-bold text-[#151d23]">Android and iOS applications</strong> designed for real-world business needs.
              </p>
            </div>

            {/* 6 Cards Grid (Why Choose AG Solutions) */}
            <div
              className={`mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              {whyChooseCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[18px] p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{card.emoji}</span>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-bold leading-[1.3] text-[#151d23] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-[#5c6873] font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 3. Mobile App Development Services We Offer */}
      <AnimatedSection
        className="py-20 bg-[#f8fafc] border-t border-slate-200/60 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Mobile app development services we offer"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Header */}
            <div
              className={`text-center max-w-[800px] mx-auto home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
            >
              <h2 className="text-[34px] sm:text-[40px] font-black leading-[1.18] text-[#151d23]">
                Mobile app development services we offer
              </h2>
              <p className="mt-3 text-[16px] sm:text-[18px] font-semibold text-[#09c7ca]">
                High-quality, scalable, and performance-driven mobile app solutions
              </p>
            </div>

            {/* Alternating Service Cards */}
            <div className="mt-14 space-y-16">
              {/* Row 1: Android App Development (Image Left, Content Right) */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[24px] p-8 lg:p-12 border border-slate-200/80 shadow-md home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                  }`}
                style={{ transitionDelay: "150ms" }}
              >
                {/* Left: Graphic / Image */}
                <div className="flex justify-center bg-[#0d2331] rounded-[20px] p-8 text-white relative overflow-hidden">
                  <div className="relative z-10 text-center flex flex-col items-center">
                    <img
                      src={getImageUrl("/images/services/mobile-app-development/android.png")}
                      alt="Android application development services"
                      title="Android Application Development"
                      className="w-20 h-20 object-contain mb-4"
                      loading="lazy"
                    />
                    <h3 className="text-2xl font-black text-white">Android App Development</h3>
                    <p className="mt-2 text-sm text-slate-300 max-w-[320px]">
                      Fast, secure, and native Android smartphone solutions.
                    </p>
                    <img
                      src={getImageUrl("/images/services/mobile-app-development/mobile-app-architecture.png")}
                      alt="Mobile application architecture diagram"
                      title="Mobile Application Architecture"
                      className="w-full max-w-[280px] object-contain mt-6"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div>
                  <h3 className="text-[28px] font-black text-[#151d23] leading-tight">
                    Android App Development
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-[#4f5a62] font-normal">
                    Android app development focuses on creating <strong className="font-bold text-[#151d23]">fast, secure, scalable, and user-friendly mobile applications</strong> for Android smartphones, tablets, and other Android-powered devices. Our Android app development solutions are designed to deliver seamless performance, engaging user experiences, and business-focused functionality.
                  </p>

                  <h4 className="mt-6 text-[17px] font-bold text-[#151d23]">
                    Advantages of Android App Development:
                  </h4>
                  <ul className="mt-4 space-y-3 list-none p-0">
                    {[
                      "Wider reach across diverse Android devices and users",
                      "Custom UI/UX design tailored to your brand and business needs",
                      "Seamless integration with Android device features and APIs",
                      "Scalable and secure applications built for long-term growth",
                      "Cost-effective development with efficient deployment and maintenance",
                    ].map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14.5px] text-[#334155] leading-snug">
                        <span className="text-[#09c7ca] font-bold text-base shrink-0">✓</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Row 2: iOS App Development (Content Left, Image Right) */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[24px] p-8 lg:p-12 border border-slate-200/80 shadow-md home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                  }`}
                style={{ transitionDelay: "250ms" }}
              >
                {/* Left: Content */}
                <div className="order-2 lg:order-1">
                  <h3 className="text-[28px] font-black text-[#151d23] leading-tight">
                    iOS App Development
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-[#4f5a62] font-normal">
                    iOS app development focuses on creating <strong className="font-bold text-[#151d23]">secure, high-performance, and intuitive mobile applications</strong> for Apple devices, including iPhone and iPad. Our custom iOS applications are designed around Apple’s development standards to provide smooth performance, consistent design, strong security, and an engaging user experience.
                  </p>

                  <h4 className="mt-6 text-[17px] font-bold text-[#151d23]">
                    Advantages of iOS App Development:
                  </h4>
                  <ul className="mt-4 space-y-3 list-none p-0">
                    {[
                      "High performance with smooth and responsive app experiences",
                      "Strong security and data protection for users and businesses",
                      "Consistent UI/UX design across Apple devices",
                      "Better user engagement with a premium mobile experience",
                      "Scalable applications built to support business growth and future updates",
                    ].map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14.5px] text-[#334155] leading-snug">
                        <span className="text-[#09c7ca] font-bold text-base shrink-0">✓</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Graphic / Image */}
                <div className="order-1 lg:order-2 flex justify-center bg-[#0d2331] rounded-[20px] p-8 text-white relative overflow-hidden">
                  <div className="relative z-10 text-center flex flex-col items-center">
                    <img
                      src={getImageUrl("/images/services/mobile-app-development/apple.png")}
                      alt="iOS application development services"
                      title="iOS Application Development"
                      className="w-20 h-20 object-contain mb-4"
                      loading="lazy"
                    />
                    <h3 className="text-2xl font-black text-white">iOS App Development</h3>
                    <p className="mt-2 text-sm text-slate-300 max-w-[320px]">
                      High-performance iOS apps for iPhone and iPad.
                    </p>
                    <img
                      src={getImageUrl("/images/services/mobile-app-development/mobile1.webp")}
                      alt="Mobile app development showcase by AG Solutions"
                      title="Mobile App Development Showcase"
                      className="w-full max-w-[260px] object-contain mt-6 rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 4. Our Mobile App Development Process */}
      <AnimatedSection
        className="py-20 bg-[#0d2331] text-white max-[760px]:py-14"
        ariaLabel="Our mobile app development process"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Title & Subtitle */}
            <div
              className={`text-center max-w-[850px] mx-auto home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
            >
              <h2 className="text-[34px] sm:text-[40px] font-black leading-[1.18] text-white">
                Our Mobile App Development Process
              </h2>
              <p className="mt-4 text-[15.5px] sm:text-[17px] leading-relaxed text-slate-300 font-normal">
                A structured, transparent, and agile mobile app development process designed to create secure, scalable, high-performing applications that meet your business goals and deliver an excellent user experience.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div
              className={`mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "150ms" }}
            >
              {processSteps.map((proc, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-[18px] p-6 border border-white/10 hover:border-[#09c7ca]/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black font-mono text-[#09c7ca] block mb-3">
                      {proc.step}.
                    </span>
                    <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">
                      {proc.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-slate-300 font-normal">
                      {proc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Prominent CTA Button in the Middle */}
            <div
              className={`mt-14 text-center home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "250ms" }}
            >
              <Link
                to="/contacts"
                className="inline-flex items-center gap-3 bg-[#facc15] text-[#0d2331] hover:bg-[#eab308] px-10 py-4 rounded-full text-[17px] font-black uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-xl no-underline"
              >
                <span>Start Now</span>
                <span className="text-xl">&rarr;</span>
              </Link>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 5. Industry We Serve */}
      <AnimatedSection
        className="py-20 bg-white text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Industries we serve"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Title & Subtitle */}
            <div
              className={`text-center max-w-[850px] mx-auto home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
            >
              <h2 className="text-[34px] sm:text-[40px] font-black leading-[1.18] text-[#151d23]">
                Industry we serve
              </h2>
              <p className="mt-4 text-[15.5px] sm:text-[17px] leading-relaxed text-[#4f5a62] font-normal">
                AG Solutions is a software development company helping businesses across industries with web development, mobile app development, and custom software solutions designed to improve efficiency and accelerate digital growth.
              </p>
            </div>

            {/* Industry Tags Grid */}
            <div
              className={`mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "150ms" }}
            >
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-[#f8fafc] rounded-xl p-4 border border-slate-200/80 hover:border-[#09c7ca] hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl shrink-0">{ind.icon}</span>
                  <span className="text-[14px] font-bold text-[#1e293b] leading-tight">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 6. Mobile App Case Studies */}
      <AnimatedSection
        className="py-20 bg-[#f8fafc] border-t border-slate-200/60 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Mobile app case studies"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Heading row */}
            <div
              className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
            >
              <div>
                <h2 className="text-[34px] sm:text-[40px] font-black leading-[1.18] text-[#151d23] uppercase">
                  MOBILE APP CASE STUDIES
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#4f5a62] max-w-[700px]">
                  A snapshot of real mobile applications we’ve built for startups and businesses — solving real problems through strong UX, scalable architecture, and clean engineering.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="text-[15px] font-bold text-[#09c7ca] hover:text-[#07b6b9] transition-colors no-underline flex items-center gap-1.5 self-start sm:self-end border-b border-transparent hover:border-[#09c7ca] pb-0.5 shrink-0"
              >
                See all Projects <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>

            {/* Works Cards Grid */}
            <div
              className={`mt-12 home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {worksList.map((work) => (
                  <Card
                    key={work.title}
                    title={work.title}
                    subtitle={work.subtitle}
                    image={work.image}
                    imageAlt={work.alt}
                    imageTitle={work.imageTitle}
                    onClick={() => setSelectedImage({ image: work.image, title: work.title, subtitle: work.subtitle })}
                    className="rounded-xl cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all"
                  />
                ))}
              </div>
            </div>

            {/* Single Click App Showcase Banner */}
            <div className="mt-14 bg-[#0d2331] text-white rounded-[24px] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono font-bold text-[#09c7ca] uppercase tracking-wider block mb-2">
                  Featured Mobile Showcase
                </span>
                <h3 className="text-3xl font-black text-white">Single Click Solution App</h3>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  Automate operations, manage export documentation, and empower your team on the go with AG Solutions' flagship mobile application suite.
                </p>
                <div className="mt-6">
                  <Link
                    to="/export-biz"
                    title="Export Biz Export Management Software"
                    className="inline-flex items-center gap-2 bg-[#09c7ca] hover:bg-[#07b6b9] text-white font-bold px-6 py-3 rounded-full text-sm transition-all no-underline"
                  >
                    Explore App Features &rarr;
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={getImageUrl("/images/services/mobile-app-development/single_clik_four_phones_transparent.webp")}
                  alt="Single Click mobile application by AG Solutions"
                  title="Single Click Mobile App"
                  className="w-full max-w-[320px] object-contain rounded-xl drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 7. Frequently Asked Questions ( FAQ ) */}
      <AnimatedSection
        className="bg-white py-20 border-t border-slate-200/60 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Mobile app FAQs accordion"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Heading */}
            <SectionTitle
              title="Frequently Asked Questions ( FAQ )"
              align="left"
              titleClassName="text-[34px] sm:text-[40px] leading-[1.16] font-black tracking-normal text-[#151d23]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            {/* Accordion Rows */}
            <div
              className={`mt-12 space-y-4 max-w-[940px] home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              {faqList.map((faq, idx) => {
                const isOpen = expandedFaqIndex === idx;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl border border-slate-200/80 bg-white px-6 py-4 transition-all duration-200 shadow-xs hover:border-[#09c7ca]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full cursor-pointer items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-4"
                      aria-expanded={isOpen}
                      aria-controls={`mobile-app-faq-${idx}`}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`text-[17px] font-bold text-[#09c7ca] transition-transform duration-300 block transform ${isOpen ? "rotate-90" : ""
                            }`}
                        >
                          &raquo;
                        </span>
                        <span className="text-[16px] font-bold text-[#151d23]">
                          {faq.question}
                        </span>
                      </span>
                    </button>

                    <div
                      id={`mobile-app-faq-${idx}`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 text-[14.5px] leading-relaxed text-[#4f5a62] font-normal border-t border-slate-100 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 8. Requirement Form Section */}
      <AnimatedSection
        className="bg-[#f8fafc] py-20 border-t border-slate-200/60 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Submit requirement details"
      >
        {(isVisible) => (
          <div
            className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-2 gap-12`}
          >
            {/* Left info column */}
            <div
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            >
              <SectionTitle
                title="Send Your Requirement"
                align="left"
                titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]"
              />
              <p className="mt-7 text-[17px] font-semibold leading-[1.55] text-[#1a2b3c]">
                Let us help you get your business online and grow it with passion.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#5c6873] font-normal">
                Our team of professional developers and experts is the perfect partner for a successful business partnership.
              </p>
            </div>

            {/* Right form column */}
            <div
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="enquiryFrom" value="Mobile Development" />
                  <div>
                    <input
                      type="text"
                      required
                      aria-label="Your full name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-full border-none bg-white px-7 py-4 text-[15px] text-[#1d2d3b] shadow-xs outline-none placeholder:text-[#34414c]/50 focus:ring-2 focus:ring-[#09c7ca] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      aria-label="Phone number"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-full border-none bg-white px-7 py-4 text-[15px] text-[#1d2d3b] shadow-xs outline-none placeholder:text-[#34414c]/50 focus:ring-2 focus:ring-[#09c7ca] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      aria-label="Email address"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-full border-none bg-white px-7 py-4 text-[15px] text-[#1d2d3b] shadow-xs outline-none placeholder:text-[#34414c]/50 focus:ring-2 focus:ring-[#09c7ca] transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={4}
                      aria-label="Requirement details"
                      placeholder="Details"
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      className="w-full rounded-[2rem] border-none bg-white px-7 py-5 text-[15px] text-[#1d2d3b] shadow-xs outline-none placeholder:text-[#34414c]/50 focus:ring-2 focus:ring-[#09c7ca] transition-all resize-none min-h-[130px]"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        disabled={createEnquiry.isPending}
                        className="cursor-pointer rounded-full bg-[#93d034] text-white hover:bg-[#82c024] px-10 py-4 font-bold text-[15px] tracking-wider transition-all active:scale-[0.98] shrink-0 disabled:opacity-50"
                      >
                        {createEnquiry.isPending ? "SENDING..." : "SEND INQUIRY"}
                      </button>
                      {createEnquiry.isError && (
                        <p className="text-red-500 text-sm">
                          Error: Please try again.
                        </p>
                      )}
                    </div>
                    <p className="text-[12px] leading-relaxed text-[#7a8894] font-normal max-w-[280px]">
                      Please, let us know any particular things to check and the best time to contact you by phone (if provided).
                    </p>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 animate-scaleUp">
                    <svg
                      className="h-10 w-10 fill-none stroke-current stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1b2c38] mb-2">
                    Thank you!
                  </h3>
                  <p className="text-[#4f5a62] text-[15px]">
                    Your request was submitted successfully.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>

      <Lightbox
        isOpen={Boolean(selectedImage)}
        image={selectedImage?.image || ""}
        title={selectedImage?.title || ""}
        subtitle={selectedImage?.subtitle}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
