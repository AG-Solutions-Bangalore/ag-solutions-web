import { useState, useEffect, useRef, type FormEvent } from "react";
import { Link } from "react-router-dom";
import DesktopApplicationsSEO from "../seo/DesktopApplicationsSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import Lightbox from "@/components/ui/Lightbox";
import { useProjects } from "@/features/portfolio/hooks/useProjects";
import { useFAQs } from "@/features/service/hooks/useFAQs";
import { useCreateEnquiry } from "@/features/contact-us/hooks/useCreateEnquiry";
import { layoutContainerClass } from "@/components/layout/styles";
import { PageHero, SectionTitle } from "@/components/layout";
import { Card } from "@/components/ui";
import { FAQSchema } from "@/components/seo";
import { getUtmParams } from "@/utils/utmUtils";

interface PortfolioItem {
  title: string;
  subtitle: string;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// colorLineSegments replaced by SectionTitle

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
  const createEnquiry = useCreateEnquiry();
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
        enquiryFrom: "Desktop Applications",
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

  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; subtitle?: string } | null>(null);
  const { data: projectsData, isLoading: isProjectsLoading } = useProjects(
    "desktop-applications",
  );
  const { data: faqResponse } = useFAQs("desktop-applications");

  const faqList =
    faqResponse?.data && faqResponse.data.length > 0
      ? faqResponse.data.map((faq) => ({
          question: faq.faq_que,
          answer: faq.faq_ans,
        }))
      : faqs;

  const projectBaseUrl =
    projectsData?.image_url.find((img) => img.image_for === "Projects")
      ?.image_url ||
    "https://ag-solutions.in/webapi/public/assets/images/project_images/";

  const apiWorks =
    projectsData?.data
      .filter((p) => p.page === "desktop_application")
      .map((p) => ({
        title: p.project_name,
        subtitle: p.project_type || "Desktop Application",
        image: p.project_image
          ? `${projectBaseUrl}${p.project_image}`
          : "/images/services/desktop-applications/desktop1.png",
      })) || [];

  const worksList = apiWorks.length > 0 ? apiWorks : recentWorks;

  function toggleFaq(index: number) {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  }

// renderColorLine replaced by SectionTitle

  return (
    <>
      <DesktopApplicationsSEO />
      <FAQSchema faqs={faqList} />

      <PageHero
        title="Desktop App Development Company In Bangalore"
        bgImage="/images/pattern-bg-lime.jpg"
        bgColorClass="bg-[#ffffff]"
        textColorClass="text-[#1b2c38]"
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "Desktop Application Development" },
        ]}
      />

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
              <SectionTitle
                title="Desktop Application Development"
                align="left"
                titleClassName="text-[36px] font-black leading-tight text-[#1a2b3c] max-[560px]:text-2xl"
              />
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
              <SectionTitle
                title="Few Recent Works"
                align="left"
                titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]"
              />
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
                    <div
                      key={i}
                      className="animate-pulse border border-slate-100 bg-white"
                    >
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
                  {worksList.map((work) => (
                    <Card
                      key={work.title}
                      title={work.title}
                      subtitle={work.subtitle}
                      image={work.image}
                      onClick={() => setSelectedImage({ image: work.image, title: work.title, subtitle: work.subtitle })}
                      className="rounded-none cursor-pointer"
                    />
                  ))}
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
            <SectionTitle
              title="Frequently Asked Questions ( FAQ )"
              align="left"
              titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            {/* Accordion Rows */}
            <div
              className={`mt-12 space-y-4 max-w-[940px] home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {faqList.map((faq, idx) => {
                const isOpen = expandedFaqIndex === idx;

                return (
                  <div
                    key={`${faq.question}-${idx}`}
                    className="overflow-hidden rounded-none border border-slate-100 bg-white px-6 py-4 transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full cursor-pointer items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-4"
                      aria-expanded={isOpen}
                      aria-controls={`desktop-app-faq-${idx}`}
                    >
                      <span className="flex items-center gap-4">
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
                      </span>
                    </button>

                    <div
                      id={`desktop-app-faq-${idx}`}
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

      {/* Requirement Form Section */}
      <AnimatedSection
        className="bg-white py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Submit requirement details"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-2 gap-12`}>
            {/* Left info column */}
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
              <SectionTitle
                title="Submit Your Requirement"
                align="left"
                titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]"
              />
              <p className="mt-7 text-[17px] font-semibold leading-[1.55] text-[#1a2b3c]">
                Let us help you get your business online and grow it with passion.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#5c6873] font-normal">
                Our team of professional experts is the perfect partner for a successful business partnership.
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
                  <input type="hidden" name="enquiryFrom" value="Desktop Applications" />
                  <div>
                    <input
                      type="text"
                      required
                      aria-label="Your full name"
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
                      aria-label="Phone number"
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
                      aria-label="Email address"
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
                      aria-label="Requirement details"
                      placeholder="Details"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full rounded-[2rem] border-none bg-[#f1f1eb] px-7 py-5 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all resize-none min-h-[130px]"
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
