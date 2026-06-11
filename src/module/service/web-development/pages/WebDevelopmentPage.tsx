import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import WebDevelopmentSEO from "../seo/WebDevelopmentSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { useProjects } from "@/module/portfolio/hooks/useProjects";
import { layoutContainerClass } from "@/components/layout/styles";

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  bgClass: string;
}

interface PortfolioCard {
  title: string;
  subtitle: string;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const colorLineSegments = [
  "w-[18%] bg-[#1b2c38]",
  "w-[22%] bg-[#27c7cd]",
  "w-[20%] bg-[#ff3c66]",
  "w-[20%] bg-[#ffcb05]",
  "w-[20%] bg-[#8bd82b]",
] as const;

const services: readonly ServiceCard[] = [
  {
    title: "Bussiness Website",
    description:
      "Typically on branding websites, you will find information about the company, the product and/or the service. It's goal is to make the user familiar with the brand and to promote name recognition.",
    icon: "/images/services/web-development/icon22.svg",
    bgClass: "bg-[#27c7cd]",
  },
  {
    title: "E-Commerce",
    description:
      "Our web design & development helps you building your eCommerce .The purpose of the e-commerce website is to sell products. You can have e-commerce websites like Amazon that sell a large variety of products.",
    icon: "/images/services/web-development/icon23.svg",
    bgClass: "bg-[#5c60f5]",
  },
  {
    title: "Publishing Website",
    description:
      "Websites that focus solely on publishing are similar to news websites or blogs - these ones often depend on advertisements and sponsored content to generate revenue.",
    icon: "/images/services/web-development/icon24.svg",
    bgClass: "bg-[#ffcb05]",
  },
];

const recentWorks: readonly PortfolioCard[] = [
  {
    title: "Agrawal Samaj",
    subtitle: "Community",
    image: "/images/services/web-development/web1.png",
  },
  {
    title: "Foundation India",
    subtitle: "Social",
    image: "/images/services/web-development/web2.png",
  },
  {
    title: "GPW Build Tech",
    subtitle: "Builder",
    image: "/images/services/web-development/web3.png",
  },
  {
    title: "Hera Associate",
    subtitle: "Civil",
    image: "/images/services/web-development/web4.png",
  },
  {
    title: "Naturalii",
    subtitle: "Ecommerce",
    image: "/images/services/web-development/web5.png",
  },
  {
    title: "Business Boosters",
    subtitle: "B2B Services",
    image: "/images/services/web-development/web6 (1).png",
  },
];

const faqs: readonly FAQItem[] = [
  {
    question: "What does a website do?",
    answer:
      "A website is a collection of publicly accessible, interlinked Web pages that share a single domain name. It serves as an online presence for individuals, businesses, or organizations to share information, sell products, or provide services globally.",
  },
  {
    question: "Why is a website important?",
    answer:
      "A website is crucial for building credibility, expanding market reach, providing 24/7 customer access, enabling online sales/marketing, and keeping your customers updated about your brand's offerings.",
  },
  {
    question: "Why choose HTML5?",
    answer:
      "HTML5 is the standard markup language for modern web pages. It offers superior rendering speed, responsiveness across devices, native multimedia support, cleaner code structure, and excellent search engine indexability.",
  },
  {
    question: "Why do we need a website?",
    answer:
      "Businesses need websites to showcase their services, establish search engine visibility, collect customer requirements, automate bookings/sales, and outpace competitors in the digital landscape.",
  },
  {
    question: "How does a website work?",
    answer:
      "Websites are hosted on servers and accessed via web browsers. When a user enters your domain name, the browser sends a request to the hosting server, which transfers the website files (HTML, CSS, JS) to be rendered on the user's screen.",
  },
];

export default function WebDevelopmentPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: projectsData, isLoading: isProjectsLoading } = useProjects();

  const projectBaseUrl = projectsData?.image_url.find(
    (img) => img.image_for === "Projects"
  )?.image_url || "https://ag-solutions.in/webapi/public/assets/images/project_images/";

  const apiWorks = projectsData?.data
    .filter((p) => p.page === "web_development")
    .map((p) => ({
      title: p.project_name,
      subtitle: p.project_type || "Web Development",
      image: p.project_image ? `${projectBaseUrl}${p.project_image}` : "/images/services/web-development/web1.png",
    })) || [];

  const worksList = apiWorks.length > 0 ? apiWorks : recentWorks;
  const totalSlides = Math.ceil(worksList.length / 3);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", details: "" });
    }, 4000);
  }

  function toggleFaq(index: number) {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  }

  function renderColorLine() {
    return (
      <div
        className="about-color-line relative mt-4 h-[3px] w-[220px] overflow-hidden bg-[#1b2c38]"
        aria-hidden="true"
      >
        <div className="about-color-line-track absolute inset-y-0 left-0 flex w-[440px]">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full w-[220px] shrink-0">
              {colorLineSegments.map((segmentClass) => (
                <span
                  key={`${group}-${segmentClass}`}
                  className={segmentClass}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <WebDevelopmentSEO />

      {/* 1. Header Banner */}
      <section className="relative overflow-hidden bg-[#fafafa] py-24 text-center text-[#1b2c38] max-[760px]:py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg-grey.jpg')] bg-[length:450px_330px] bg-top" />
        <div className="relative z-1">
          <h1 className="m-0 text-5xl font-black tracking-normal max-[760px]:text-4xl text-[#1a2b3c]">
            Web Development Company In Bangalore
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2.5 text-base font-normal text-[#5c6873]">
            <Link to="/" className="text-[#5c6873] hover:text-[#09c7ca] no-underline transition-colors border-b border-transparent hover:border-[#09c7ca]">
              Homepage
            </Link>
            <span className="text-[#9daab7]">&bull;</span>
            <span>Web Design and Development</span>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Web design and development services introduction"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
            {/* Left Image */}
            <div className={`home-animated-item flex justify-center ${isVisible ? "home-animated-item-visible" : ""}`}>
              <img
                src="/images/services/web-development/banner-website-design.jpg"
                alt="Web design and development illustration"
                className="w-full max-w-135 object-contain"
                loading="lazy"
              />
            </div>

            {/* Right Copy */}
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`} style={{ transitionDelay: "100ms" }}>
              <h2 className="m-0 text-[36px] font-black leading-tight text-[#1a2b3c] max-[560px]:text-2xl">
                Web Design and Development Services.
              </h2>
              {renderColorLine()}
              <p className="mt-8 text-base leading-relaxed text-[#4f5a62]">
                Yes, We offer web design and development services. We focus on validation of our developing websites for
                our business or personal use for our clients. We use HTML5 for the web development because of standard
                quality, rendering speed, global execution standard, & flexibility.
              </p>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 3. Services List */}
      <AnimatedSection
        className="bg-[#fafafa] py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Web development services cards"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Heading */}
            <div className={`text-center home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
              <h2 className="m-0 text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]">
                Services
              </h2>
              <div className="flex justify-center mt-4">
                {renderColorLine()}
              </div>
            </div>

            {/* Services Cards */}
            <div
              className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {services.map((service) => (
                <div
                  key={service.title}
                  className="relative bg-white border border-slate-100 px-8 pb-10 pt-16 rounded-none flex flex-col items-center text-center shadow-xs transition-shadow duration-300 hover:shadow-md"
                >
                  {/* Hanging Icon Circle */}
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center text-white ${service.bgClass} shadow-sm`}
                  >
                    <img
                      src={service.icon}
                      alt=""
                      className="h-full w-full object-contain"
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="m-0 mt-2 text-[20px] font-bold text-[#1a2b3c] tracking-tight">{service.title}</h4>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[#5c6873] font-normal">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 4. Few Recent Works */}
      <AnimatedSection
        className="bg-white py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Recent web development works"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Heading */}
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
              <h2 className="m-0 text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]">
                Few Recent Works
              </h2>
              {renderColorLine()}
            </div>

            {/* Works Cards Grid */}
            {isProjectsLoading ? (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="animate-pulse border border-slate-100 bg-white">
                    <div className="aspect-[3/2] bg-slate-100" />
                    <div className="py-5 px-6 text-center bg-[#f4f5ee]/50 space-y-2">
                      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
                      <div className="h-3 bg-slate-100 rounded w-1/2 mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div
                  key={currentSlide}
                  className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn"
                >
                  {worksList.slice(currentSlide * 3, currentSlide * 3 + 3).map((work) => {
                    const barBgClass = "bg-[#f4f5ee] text-[#1b2c38] group-hover:bg-[#09c7ca] group-hover:text-white";
                    const subtitleClass = "text-[#7a8894] group-hover:text-white/85";

                    return (
                      <div
                        key={work.title}
                        className="group overflow-hidden rounded-none border border-slate-100 bg-white cursor-pointer"
                      >
                        {/* Image Zoom */}
                        <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                          <img
                            src={work.image}
                            alt={`${work.title} recent work screenshot`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        {/* Bottom bar */}
                        <div className={`py-5 px-6 text-center transition-all duration-300 ease-in-out ${barBgClass}`}>
                          <h4 className="m-0 text-[17px] font-bold tracking-tight">{work.title}</h4>
                          <p className={`m-0 mt-1 text-[13.5px] font-medium transition-colors duration-300 ${subtitleClass}`}>
                            {work.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Pagination Slider Dots */}
                {totalSlides > 1 && (
                  <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                      <button
                        key={slideIdx}
                        type="button"
                        onClick={() => setCurrentSlide(slideIdx)}
                        aria-label={`View recent works group ${slideIdx + 1}`}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                          currentSlide === slideIdx ? "bg-[#09c7ca] scale-110" : "bg-slate-300 hover:bg-[#09c7ca]/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </AnimatedSection>

      {/* 5. Frequently Asked Questions ( FAQ ) */}
      <AnimatedSection
        className="bg-[#fafafa] py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Web development FAQs accordion"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Heading */}
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
              <h2 className="m-0 text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]">
                Frequently Asked Questions ( FAQ )
              </h2>
              {renderColorLine()}
            </div>

            {/* Accordion Rows */}
            <div
              className={`mt-12 space-y-4 max-w-[940px] home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaqIndex === idx;

                return (
                  <div
                    key={faq.question}
                    onClick={() => toggleFaq(idx)}
                    className="bg-white border border-slate-100 rounded-none overflow-hidden py-4 px-6 cursor-pointer select-none transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-[17px] font-bold text-[#09c7ca] transition-transform duration-300 block transform ${
                          isOpen ? "rotate-90" : ""
                        }`}>
                          &raquo;
                        </span>
                        <span className="text-[16px] font-bold text-[#1a2b3c]">{faq.question}</span>
                      </div>
                    </div>

                    <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}>
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

      {/* 6. Requirement Form Section */}
      <AnimatedSection
        className="bg-white py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Submit requirement details"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-2 gap-12`}>
            {/* Left info column */}
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
              <h2 className="m-0 text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]">
                Submit Your Requirment
              </h2>
              {renderColorLine()}
              <p className="mt-7 text-[17px] font-semibold leading-[1.55] text-[#1a2b3c]">
                Let us help you get your business online and grow it with passion.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#5c6873] font-normal">
                Our team of professional Development experts is the perfect partner for a successful business partnership.
              </p>
            </div>

            {/* Right form column */}
            <div
              className={`home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-full border-none bg-[#f1f1eb] px-7 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-full border-none bg-[#f1f1eb] px-7 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-full border-none bg-[#f1f1eb] px-7 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={4}
                      placeholder="Details"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full rounded-[2rem] border-none bg-[#f1f1eb] px-7 py-5 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all resize-none min-h-[130px]"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                    <button
                      type="submit"
                      className="cursor-pointer rounded-full bg-[#93d034] text-white hover:bg-[#82c024] px-10 py-4 font-bold text-[15px] tracking-wider transition-all active:scale-[0.98] shrink-0"
                    >
                      SEND INQUIRY
                    </button>
                    <p className="text-[12px] leading-relaxed text-[#7a8894] font-normal max-w-[280px]">
                      Please, let us know any particular things to check and the best time to contact you by phone (if provided).
                    </p>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 animate-scaleUp">
                    <svg className="h-10 w-10 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1b2c38] mb-2">Thank you!</h3>
                  <p className="text-[#4f5a62] text-[15px]">
                    Your request was submitted successfully.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>
    </>
  );
}
