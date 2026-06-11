import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import DesktopApplicationsSEO from "../seo/DesktopApplicationsSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { useCreateNewsletter } from "@/module/newsletter/hooks/useCreateNewsletter";
import { useProjects } from "@/module/portfolio/hooks/useProjects";
import { layoutContainerClass } from "@/components/layout/styles";

interface PortfolioItem {
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

const recentWorks: readonly PortfolioItem[] = [
  {
    title: "Login Page",
    subtitle: "Safe & Secure",
    image: "/images/services/desktop-applications/desktop1.png",
  },
  {
    title: "All Documents in 1 Minute",
    subtitle: "Invoice & Packing List",
    image: "/images/services/desktop-applications/desktop2.png",
  },
  {
    title: "Print, Save As PDF, Email",
    subtitle: "Print & Share",
    image: "/images/services/desktop-applications/desktop4.png",
  },
];

const faqs: readonly FAQItem[] = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services.",
  },
  {
    question: "Types of Digital Marketing",
    answer:
      "Key types of digital marketing include Search Engine Optimization (SEO), Search Engine Marketing (SEM), Content Marketing, Social Media Marketing (SMM), Pay-Per-Click Advertising (PPC), and Affiliate Marketing.",
  },
  {
    question: "What are the 5 benefits of digital marketing?",
    answer:
      "1. Global reach: A website allows you to find new markets and trade globally. \n2. Lower cost: A properly planned and targeted digital marketing campaign can reach the right customers at a much lower cost than traditional marketing methods. \n3. Trackable, measurable results: Web analytics make it easier to establish how effective your campaign has been. \n4. Personalization: Connect customer profile data with website visits to make targeted offers. \n5. Social currency: Create engaging campaigns to gain social sharing and customer loyalty.",
  },
  {
    question: "Why do we need a digital marketing?",
    answer:
      "Businesses need digital marketing to build brand awareness, stay visible to customers who are online 24/7, analyze consumer behavior accurately, outpace competitors in search listings, and scale lead generation cost-effectively.",
  },
  {
    question: "What are the 5 benefits of digital marketing?",
    answer:
      "1. Global reach: A website allows you to find new markets and trade globally. \n2. Lower cost: A properly planned and targeted digital marketing campaign can reach the right customers at a much lower cost than traditional marketing methods. \n3. Trackable, measurable results: Web analytics make it easier to establish how effective your campaign has been. \n4. Personalization: Connect customer profile data with website visits to make targeted offers. \n5. Social currency: Create engaging campaigns to gain social sharing and customer loyalty.",
  },
  {
    question: "Why do we need a digital marketing?",
    answer:
      "Businesses need digital marketing to build brand awareness, stay visible to customers who are online 24/7, analyze consumer behavior accurately, outpace competitors in search listings, and scale lead generation cost-effectively.",
  },
];

export default function DesktopApplicationsPage() {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const createNewsletter = useCreateNewsletter();
  const { data: projectsData, isLoading: isProjectsLoading } = useProjects();

  const projectBaseUrl = projectsData?.image_url.find(
    (img) => img.image_for === "Projects"
  )?.image_url || "https://ag-solutions.in/webapi/public/assets/images/project_images/";

  const apiWorks = projectsData?.data
    .filter((p) => p.page === "desktop_application")
    .map((p) => ({
      title: p.project_name,
      subtitle: p.project_type || "Desktop Application",
      image: p.project_image ? `${projectBaseUrl}${p.project_image}` : "/images/services/desktop-applications/desktop1.png",
    })) || [];

  const worksList = apiWorks.length > 0 ? apiWorks : recentWorks;

  function handleNewsletterSubmit(e: FormEvent) {
    e.preventDefault();
    if (!newsletterEmail) return;
    createNewsletter.mutate(
      { newsletter_email: newsletterEmail },
      {
        onSuccess: () => {
          setNewsletterSubmitted(true);
          setNewsletterEmail("");
          setTimeout(() => {
            setNewsletterSubmitted(false);
          }, 5000);
        },
      }
    );
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
      <DesktopApplicationsSEO />

      {/* 1. Header Banner */}
      <section className="relative overflow-hidden py-24 text-center text-[#1b2c38] max-[760px]:py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg-lime.jpg')] bg-[length:450px_330px] bg-top" />
        <div className="relative z-1">
          <h1 className="m-0 text-5xl font-black tracking-normal max-[760px]:text-4xl">
            Desktop App Development Company In Bangalore
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2.5 text-base font-normal text-[#1b2c38]/80">
            <Link
              to="/"
              className="text-[#1b2c38]/80 hover:text-[#09c7ca] no-underline transition-colors border-b border-transparent hover:border-[#09c7ca]"
            >
              Homepage
            </Link>
            <span className="text-[#1b2c38]/40">&bull;</span>
            <span>Desktop Application Development</span>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Desktop Application Development intro"
      >
        {(isVisible) => (
          <div
            className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
          >
            {/* Left Image */}
            <div
              className={`home-animated-item flex justify-center ${isVisible ? "home-animated-item-visible" : ""}`}
            >
              <img
                src="/images/services/desktop-applications/desktop-application-development.png"
                alt="Desktop application development illustration"
                className="w-full max-w-135 object-contain"
                loading="lazy"
              />
            </div>

            {/* Right Copy */}
            <div
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <h2 className="m-0 text-[36px] font-black leading-tight text-[#1a2b3c] max-[560px]:text-2xl">
                Desktop Application Development
              </h2>
              {renderColorLine()}
              <p className="mt-8 text-base leading-relaxed text-[#4f5a62]">
                Whether you're struggling with an outdated legacy software that
                needs to be migrated to latest technologies, or developing a
                software for the first time, we ensure to minimize your risk,
                project timeline, and cost to implement with our 6+ years of
                experience in Desktop Application Development Services.
              </p>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 3. Few Recent Works */}
      <AnimatedSection
        className="bg-white py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Recent desktop app works"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Heading row with link */}
            <div
              className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
            >
              <div>
                <h2 className="m-0 text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]">
                  Few Recent Works
                </h2>
                {renderColorLine()}
              </div>
              <Link
                to="/portfolio"
                className="text-[15px] font-bold text-[#09c7ca] hover:text-[#07b6b9] transition-colors no-underline flex items-center gap-1.5 self-start sm:self-end border-b border-transparent hover:border-[#09c7ca] pb-0.5"
              >
                See all Projects{" "}
                <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>

            {/* Works Cards Grid */}
            <div
              className={`mt-12 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              {isProjectsLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {worksList.map((work) => {
                    const barBgClass =
                      "bg-[#f4f5ee] text-[#1b2c38] group-hover:bg-[#09c7ca] group-hover:text-white";
                    const subtitleClass =
                      "text-[#7a8894] group-hover:text-white/85";

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
                        <div
                          className={`py-5 px-6 text-center transition-all duration-300 ease-in-out ${barBgClass}`}
                        >
                          <h4 className="m-0 text-[17px] font-bold tracking-tight">
                            {work.title}
                          </h4>
                          <p
                            className={`m-0 mt-1 text-[13.5px] font-medium transition-colors duration-300 ${subtitleClass}`}
                          >
                            {work.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 4. Frequently Asked Questions ( FAQ ) */}
      <AnimatedSection
        className="bg-[#fafafa] py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Desktop app FAQs accordion"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            {/* Heading */}
            <div
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            >
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
                    key={`${faq.question}-${idx}`}
                    onClick={() => toggleFaq(idx)}
                    className="bg-white border border-slate-100 rounded-none overflow-hidden py-4 px-6 cursor-pointer select-none transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-[17px] font-bold text-[#09c7ca] transition-transform duration-300 block transform ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        >
                          &raquo;
                        </span>
                        <span className="text-[16px] font-bold text-[#1a2b3c]">
                          {faq.question}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 text-[14.5px] leading-relaxed text-[#4f5a62] font-normal border-t border-slate-100 pt-4 whitespace-pre-line">
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
      {/* 5. Newsletter Subscription Section */}
      <AnimatedSection
        className="relative overflow-hidden py-16 text-[#1b2c38] max-[760px]:py-12"
        ariaLabel="Subscribe to newsletter"
      >
        {(isVisible) => (
          <>
            <div className="absolute inset-0 bg-[url('/images/pattern-bg-lime.jpg')] bg-[length:450px_330px] bg-top" />
            <div className={`${layoutContainerClass} relative z-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center`}>
              {/* Left & Middle Column copy + form */}
              <div className={`md:col-span-8 space-y-6 home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
                <div className="space-y-2">
                  <h2 className="m-0 text-[32px] font-black leading-tight text-[#1b2c38]">
                    Subscribe to our Newsletter
                  </h2>
                  <p className="m-0 text-base font-semibold text-[#1b2c38]/90">
                    Join Our Newsletter & Marketing Communication. We'll send you news and offers.
                  </p>
                </div>

                {!newsletterSubmitted ? (
                  <div className="max-w-[540px]">
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        disabled={createNewsletter.isPending}
                        className="flex-1 rounded-full border-none bg-white text-[#1d2d3b] px-6 py-4 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b2c38]"
                      />
                      <button
                        type="submit"
                        disabled={createNewsletter.isPending}
                        className="cursor-pointer rounded-full bg-[#1b2c38] hover:bg-[#2c3f51] text-white px-10 py-4 font-bold text-[15px] uppercase tracking-wider transition-all active:scale-[0.98] shrink-0 disabled:opacity-50"
                      >
                        {createNewsletter.isPending ? "..." : "SUBSCRIBE"}
                      </button>
                    </form>
                    {createNewsletter.isError && (
                      <p className="text-red-600 text-sm mt-2 font-bold">
                        Error: Please try again.
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-base font-bold text-[#1b2c38] animate-fadeIn">
                    Thank you! You have successfully subscribed to our newsletter.
                  </div>
                )}
              </div>

              {/* Right Megaphone Illustration */}
              <div
                className={`hidden md:flex md:col-span-4 justify-end home-animated-item ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <img
                  src="/images/08-subscribe.svg"
                  alt="Newsletter megaphone illustration"
                  className="w-full max-w-[200px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </>
        )}
      </AnimatedSection>
    </>
  );
}
