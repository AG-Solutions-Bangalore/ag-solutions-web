import { useState } from "react";
import { Calendar, Monitor, Boxes, TrendingUp, Globe, Quote, Route, Lightbulb, ClipboardList, Code2, ShieldCheck, HeartHandshake, Eye, Target } from "lucide-react";
import AboutSEO from "../seo/AboutSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { PageHero, SectionTitle } from "@/components/layout";

type SlideDirection = "from-left" | "from-right";

interface TimelineStep {
  id: string;
  initial: string;
  title: string;
  description: string;
  image: string;
  layout: "split" | "splitReverse";
}

const timelineSteps: readonly TimelineStep[] = [
  {
    id: "initiation",
    initial: "I",
    title: "Ideation & Initiation",
    description: "We work closely with you to understand your initial ideas, business objectives, and requirements, setting a clear roadmap for the project.",
    image: "/images/about/idea.webp",
    layout: "split",
  },
  {
    id: "research",
    initial: "R",
    title: "Market Research",
    description: "We study user needs and market trends to build a highly targeted and strategic product.",
    image: "/images/about/research.webp",
    layout: "splitReverse",
  },
  {
    id: "design",
    initial: "D",
    title: "Mobile App Development Company",
    description: "After receiving all the details, our expert team starts creating the final project.",
    image: "/images/about/mobile.webp",
    layout: "splitReverse",
  },
  {
    id: "testing",
    initial: "T",
    title: "Testing",
    description: "Besides development, we also take care of an important aspect, TESTING, helping the client with final testing and make the final changes if required.",
    image: "/images/about/testing.webp",
    layout: "split",
  },
  {
    id: "launch",
    initial: "L",
    title: "Product Launch",
    description: "We deploy the application to your environment, making sure all integrations work seamlessly.",
    image: "/images/about/launch-rocket.svg",
    layout: "split",
  },
  {
    id: "maintenance",
    initial: "M",
    title: "Maintenance",
    description: "According to us, our work does not end after launching the project. Rather we feel that this is where our actual work begins! When our clients are using the project, we help them by solving any issues they may face and performing the timely update.",
    image: "/images/about/maintenance.webp",
    layout: "splitReverse",
  },
];

// colorLineSegments replaced by SectionTitle

function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(5); // Default to 'Maintenance'
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("from-right");
  const activeStep = timelineSteps[activeIndex];

  const titleAnimationClass =
    slideDirection === "from-right"
      ? "home-carousel-title-from-right"
      : "home-carousel-title-from-left";
  const copyAnimationClass =
    slideDirection === "from-right"
      ? "home-carousel-copy-from-right"
      : "home-carousel-copy-from-left";
  const imageAnimationClass =
    slideDirection === "from-right"
      ? "home-carousel-image-from-right"
      : "home-carousel-image-from-left";

  function handlePrev() {
    const nextIndex = (activeIndex - 1 + timelineSteps.length) % timelineSteps.length;
    setSlideDirection("from-left");
    setActiveIndex(nextIndex);
  }

  function handleNext() {
    const nextIndex = (activeIndex + 1) % timelineSteps.length;
    setSlideDirection("from-right");
    setActiveIndex(nextIndex);
  }

  // Handle clicking on specific nodes
  function handleNodeClick(index: number) {
    if (index === activeIndex) return;
    setSlideDirection(index > activeIndex ? "from-right" : "from-left");
    setActiveIndex(index);
  }

  const imageFirst = activeStep.layout === "splitReverse";

  return (
    <>
      <AboutSEO />

      <PageHero
        title="About Us"
        bgImage="/images/pattern-bg-blue-light.jpg"
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "About Us" },
        ]}
      />

      {/* 2. Short Story Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="AG Solutions story and workflow process"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass}`}>
            {/* Header Content */}
            <div
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                }`}
            >
              <SectionTitle
                title="Short Story About Our Company"
                align="left"
                titleClassName="text-[42px] leading-[1.16] font-black tracking-normal max-[980px]:text-[36px] max-[560px]:text-[28px]"
              />

              <p className="mt-8 max-w-[940px] text-lg leading-[1.55] text-[#4f5a62] max-[760px]:text-base">
                At AG Solutions, we believe that every successful business deserves technology built exclusively for its unique vision. That's why we don't deliver generic software—we create custom digital solutions that perfectly match your business goals, processes, and future growth.
                With 15+ years of industry expertise, we've helped businesses transform their operations through innovative custom software development, web applications, mobile apps, desktop software, cloud solutions, digital marketing, and business automation. Our mission is simple: deliver technology that makes your business faster, smarter, and more competitive.
                We combine innovation, creativity, and cutting-edge technology to develop solutions that are secure, scalable, user-friendly, and future-ready. Every product is designed with an exceptional user experience, allowing anyone—from beginners to experienced professionals—to use it effortlessly without complex training.
                Our team works as your technology partner, understanding your challenges, identifying opportunities, and delivering tailor-made solutions that improve productivity, automate workflows, reduce operational costs, and accelerate business growth. Every project is built with performance, security, and long-term scalability at its core.
                What truly sets AG Solutions apart is our commitment to quality, transparency, and customer success. We don't just develop software—we create digital experiences that empower businesses to innovate, adapt, and lead in today's competitive world.
                Whether you're a startup launching your first product, a growing business looking to automate operations, or an enterprise planning digital transformation, AG Solutions provides end-to-end technology solutions that turn ideas into impactful business success.
                Your Vision. Our Innovation. One Smart Digital Solution for Every Business.
              </p>
            </div>

            {/* Interactive Timeline Slider Navigation */}
            <div
              className={`home-animated-item mt-16 flex items-center justify-between gap-4 max-[640px]:mt-10 ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "80ms" }}
            >
              {/* Prev Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-none transition-all group"
                aria-label="Previous story phase"
              >
                <img
                  className="h-[30px] w-10 object-contain opacity-40 group-hover:opacity-80 transition-opacity"
                  src="/images/leftArrow.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>

              {/* Connecting Line + Nodes */}
              <div className="relative flex flex-1 items-center justify-between px-2 max-w-[800px]">
                {/* Horizontal Bar background - Gray for future */}
                <div className="absolute left-0 right-0 top-1/2 h-[2.5px] -translate-y-1/2 bg-gray-100" />

                {/* Highlighted Teal line up to active node */}
                <div
                  className="absolute left-0 top-1/2 h-[2.5px] -translate-y-1/2 bg-[#27c7cd] transition-all duration-300"
                  style={{
                    width: `${(activeIndex / (timelineSteps.length - 1)) * 100}%`,
                  }}
                />

                {/* Circles */}
                {timelineSteps.map((step, idx) => {
                  const isActive = idx === activeIndex;
                  const isCompletedOrActive = idx <= activeIndex;

                  return (
                    <div key={step.id} className="relative flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => handleNodeClick(idx)}
                        className={`relative z-1 flex h-[52px] w-[52px] items-center justify-center rounded-full text-lg font-black transition-all duration-300 max-[560px]:h-10 max-[560px]:w-10 max-[560px]:text-sm ${isActive
                          ? "bg-[#27c7cd] text-white scale-110"
                          : isCompletedOrActive
                            ? "border-[2.5px] border-[#27c7cd] bg-white text-[#27c7cd] hover:bg-teal-50"
                            : "border-[2.5px] border-[#ffcb05] bg-white text-[#ffcb05] hover:bg-yellow-50"
                          }`}
                        aria-label={`Show ${step.title} details`}
                        aria-current={isActive ? "step" : undefined}
                      >
                        {step.initial}
                      </button>

                      {/* Small dot below node when active */}
                      {isActive && (
                        <span
                          className="absolute -bottom-4 h-2.5 w-2.5 rounded-full bg-[#27c7cd] max-[560px]:-bottom-3"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={handleNext}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full  bg-white shadow-none transition-all group"
                aria-label="Next story phase"
              >
                <img
                  className="h-[30px] w-10 object-contain opacity-40 group-hover:opacity-80 transition-opacity"
                  src="/images/rightArrow.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Dynamic Step Content */}
            <div
              key={`${activeStep.id}-${slideDirection}`}
              className={`home-animated-item mt-16 ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="grid w-full items-center gap-12 min-[860px]:grid-cols-2">
                {/* Layout Controlled Image First (Opposite/Reverse) */}
                {imageFirst && (
                  <div className="flex justify-center min-[860px]:justify-start">
                    <img
                      className={`block w-full max-w-[340px] object-contain max-[560px]:max-w-[260px] ${imageAnimationClass}`}
                      src={activeStep.image}
                      alt={`${activeStep.title} process phase illustration`}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content Block */}
                <div>
                  <div className={titleAnimationClass}>
                    <h3 className="m-0 text-[32px] font-black leading-tight text-[#1b2c38] max-[560px]:text-2xl">
                      {activeStep.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-6 text-[17px] leading-relaxed text-[#4f5a62] max-[560px]:text-base ${copyAnimationClass}`}
                  >
                    {activeStep.description}
                  </p>
                </div>

                {/* Layout Controlled Image Last (Normal/Default) */}
                {!imageFirst && (
                  <div className="flex justify-center min-[860px]:justify-end">
                    <img
                      className={`block w-full max-w-[340px] object-contain max-[560px]:max-w-[260px] ${imageAnimationClass}`}
                      src={activeStep.image}
                      alt={`${activeStep.title} process phase illustration`}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 3. Key Features Banner Section */}
      <AnimatedSection
        className="bg-[#f4f5ef] py-18 text-[#1b2c38] max-[760px]:py-12"
        ariaLabel="Key features and strengths"
      >
        {(isVisible) => (
          <div
            className={`${layoutContainerClass} grid gap-8 min-[760px]:grid-cols-3`}
          >
            {/* Feature 1: Excellent Support */}
            <div
              className={`home-animated-item flex flex-col items-center text-center p-6 bg-[#f4f5ef]/40 rounded-2xl  transition-all duration-300  ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "0ms" }}
            >
              <img
                src="/images/about/icon31.svg"
                alt=""
                className="h-16 w-16 object-contain transition-transform duration-300 hover:rotate-12"
                aria-hidden="true"
                loading="lazy"
              />
              <h4 className="mt-5 text-xl font-bold tracking-tight">
                Excellent Support
              </h4>
            </div>

            {/* Feature 2: Awesome Team */}
            <div
              className={`home-animated-item flex flex-col items-center text-center p-6 bg-[#f4f5ef]/40 rounded-2xl  transition-all duration-300  ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              <img
                src="/images/about/icon32.svg"
                alt=""
                className="h-16 w-16 object-contain transition-transform duration-300 hover:scale-110"
                aria-hidden="true"
                loading="lazy"
              />
              <h4 className="mt-5 text-xl font-bold tracking-tight">
                Awesome Team
              </h4>
            </div>

            {/* Feature 3: Faster Performance */}
            <div
              className={`home-animated-item flex flex-col items-center text-center p-6 bg-[#f4f5ef]/40 rounded-2xl  transition-all duration-300  ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <img
                src="/images/about/icon33.svg"
                alt=""
                className="h-16 w-16 object-contain transition-transform duration-300 hover:rotate-6"
                aria-hidden="true"
                loading="lazy"
              />
              <h4 className="mt-5 text-xl font-bold tracking-tight">
                Faster Performance
              </h4>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* Company Snapshot Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Company snapshot and key statistics"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass}`}>
            <div
              className={`home-animated-item text-center ${isVisible ? "home-animated-item-visible" : ""
                }`}
            >
              <SectionTitle
                title="Company Snapshot"
                align="center"
                titleClassName="text-[42px] leading-[1.16] font-black tracking-normal max-[980px]:text-[36px] max-[560px]:text-[28px]"
              />
              <p className="mt-8 text-center text-lg leading-[1.55] text-[#4f5a62] max-[760px]:text-base max-w-[800px] mx-auto font-medium">
                Fifteen years of building practical technology and business solutions for organizations across industries.
              </p>
            </div>

            {/* Grid of 4 Cards */}
            <div
              className={`home-animated-item mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              {/* Card 1: Founded */}
              <div className="relative flex flex-col items-center bg-white rounded-xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#2b66e3] rounded-t-xl" />
                <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#2b66e3]">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <span className="mt-6 text-[38px] font-black leading-none text-[#2b66e3] tracking-tight">
                  2011
                </span>
                <h4 className="mt-4 text-[17px] font-bold text-[#1b2c38]">
                  Founded
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77]">
                  Established in Bengaluru, Karnataka, India
                </p>
              </div>

              {/* Card 2: Projects Delivered */}
              <div className="relative flex flex-col items-center bg-white rounded-xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff6262] rounded-t-xl" />
                <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6262]">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <span className="mt-6 text-[38px] font-black leading-none text-[#ff6262] tracking-tight">
                  300+
                </span>
                <h4 className="mt-4 text-[17px] font-bold text-[#1b2c38]">
                  Projects Delivered
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77]">
                  Software, web, mobile & marketing engagements
                </p>
              </div>

              {/* Card 3: Custom Applications */}
              <div className="relative flex flex-col items-center bg-white rounded-xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#8a4dff] rounded-t-xl" />
                <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#8a4dff]">
                  <Boxes className="h-6 w-6 text-white" />
                </div>
                <span className="mt-6 text-[38px] font-black leading-none text-[#8a4dff] tracking-tight">
                  50+
                </span>
                <h4 className="mt-4 text-[17px] font-bold text-[#1b2c38]">
                  Custom Applications
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77]">
                  Built across diverse operating models
                </p>
              </div>

              {/* Card 4: Years in Business */}
              <div className="relative flex flex-col items-center bg-white rounded-xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#00bfa5] rounded-t-xl" />
                <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#00bfa5]">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <span className="mt-6 text-[38px] font-black leading-none text-[#00bfa5] tracking-tight">
                  15+
                </span>
                <h4 className="mt-4 text-[17px] font-bold text-[#1b2c38]">
                  Years in Business
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77]">
                  Combined technology & business experience
                </p>
              </div>
            </div>

            {/* Serving Clients Banner */}
            <div
              className={`home-animated-item mt-12 flex flex-col sm:flex-row items-center gap-6 bg-[#8a4dff] rounded-xl p-5 md:py-6 md:px-8 text-white shadow-[0_10px_30px_rgba(138,77,255,0.2)] ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#8a4dff] shadow-sm">
                <Globe className="h-7 w-7" />
              </div>
              <p className="text-base md:text-lg font-bold leading-relaxed text-center sm:text-left">
                Serving clients across Bengaluru, Karnataka, pan-India and international markets with customized, practical and scalable solutions.
              </p>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* Our Positioning Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14 border-t border-gray-50"
        ariaLabel="Our positioning and business philosophy"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} flex flex-col items-center text-center`}>
            {/* Red Circle Quote Icon */}
            <div
              className={`home-animated-item flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5a5a] shadow-[0_8px_25px_rgba(255,90,90,0.3)] ${isVisible ? "home-animated-item-visible" : ""
                }`}
            >
              <Quote className="h-10 w-10 text-white fill-white" />
            </div>

            {/* Quote Text */}
            <div
              className={`home-animated-item mt-10 max-w-[960px] ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              <blockquote className="m-0 text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold leading-[1.4] text-[#1b2c38] tracking-tight">
                “We do not force businesses to adapt to ready-made software. We first understand how the business works, identify the real requirement, and then build or deploy the right solution around that process.”
              </blockquote>
            </div>

            {/* Thick Red Divider Line */}
            <div
              className={`home-animated-item mt-8 h-1.5 w-44 rounded-full bg-[#ff5a5a] ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "150ms" }}
              aria-hidden="true"
            />

            {/* Section Heading & Subtitle */}
            <div
              className={`home-animated-item mt-6 ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="m-0 text-xs font-extrabold tracking-[0.25em] text-[#1b2c38] uppercase">
                Our Positioning
              </h3>
              <p className="mt-2 text-sm text-[#5e6d77] font-medium">
                The philosophy behind every AG Solutions engagement
              </p>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* How We Work Section */}
      <AnimatedSection
        className="bg-[#fcf5e8] py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="How we work and our delivery process"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass}`}>
            {/* Header Content */}
            <div
              className={`home-animated-item flex flex-col items-center text-center ${isVisible ? "home-animated-item-visible" : ""
                }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5a5a] shadow-[0_8px_25px_rgba(255,90,90,0.25)]">
                <Route className="h-7 w-7 text-white" />
              </div>
              <h2 className="mt-6 text-[42px] leading-tight font-black text-[#1b2c38] max-[980px]:text-[36px] max-[560px]:text-[28px]">
                How We Work
              </h2>
              <p className="mt-4 text-lg text-[#4f5a62] font-semibold max-w-[800px] leading-relaxed max-[760px]:text-base">
                A structured delivery approach, from first conversation to long-term support
              </p>
            </div>

            {/* Delivery Approach Divider */}
            <div
              className={`home-animated-item mt-16 flex flex-col items-center text-center ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "80ms" }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a5a]">
                Our Process
              </span>
              <h3 className="mt-2 text-2xl font-black text-[#1b2c38] tracking-tight sm:text-3xl">
                Our Delivery Approach
              </h3>
            </div>

            {/* Process Timeline Steps Grid */}
            <div
              className={`home-animated-item relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 ${isVisible ? "home-animated-item-visible" : ""
                }`}
              style={{ transitionDelay: "150ms" }}
            >
              {/* Connecting Line for large screens */}
              <div className="absolute top-8 left-[10%] right-[10%] hidden h-[2.5px] bg-[#1b2c38]/10 lg:block" />

              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="relative z-1 flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.03)] group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-7 w-7 text-[#ffcb05]" />
                </div>
                <span className="mt-6 text-[11px] font-black uppercase tracking-[0.15em] text-[#ff5a5a]">
                  Step 1
                </span>
                <h4 className="mt-2 text-lg font-bold text-[#1b2c38]">
                  Understand
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77] max-w-[220px]">
                  Study the business, users, existing process, pain points and desired outcome.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="relative z-1 flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.03)] group-hover:scale-110 transition-transform duration-300">
                  <ClipboardList className="h-7 w-7 text-[#2563eb]" />
                </div>
                <span className="mt-6 text-[11px] font-black uppercase tracking-[0.15em] text-[#ff5a5a]">
                  Step 2
                </span>
                <h4 className="mt-2 text-lg font-bold text-[#1b2c38]">
                  Define
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77] max-w-[220px]">
                  Translate the requirement into a practical scope, workflow and implementation plan.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="relative z-1 flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.03)] group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-7 w-7 text-[#00bfa5]" />
                </div>
                <span className="mt-6 text-[11px] font-black uppercase tracking-[0.15em] text-[#ff5a5a]">
                  Step 3
                </span>
                <h4 className="mt-2 text-lg font-bold text-[#1b2c38]">
                  Design & Develop
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77] max-w-[220px]">
                  Build the interface, application, integrations and required business logic.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="relative z-1 flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.03)] group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-7 w-7 text-[#8a4dff]" />
                </div>
                <span className="mt-6 text-[11px] font-black uppercase tracking-[0.15em] text-[#ff5a5a]">
                  Step 4
                </span>
                <h4 className="mt-2 text-lg font-bold text-[#1b2c38]">
                  Test & Deploy
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77] max-w-[220px]">
                  Validate the solution, deploy it and support users through adoption.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="relative z-1 flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.03)] group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="h-7 w-7 text-[#ff6262]" />
                </div>
                <span className="mt-6 text-[11px] font-black uppercase tracking-[0.15em] text-[#ff5a5a]">
                  Step 5
                </span>
                <h4 className="mt-2 text-lg font-bold text-[#1b2c38]">
                  Support & Improve
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5e6d77] max-w-[220px]">
                  Provide ongoing support, maintenance, updates and improvements as required.
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 4. What Drives Us Section */}
      <AnimatedSection
        className="relative bg-[#ffcb05] py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="AG Solutions company vision and mission"
      >
        {(isVisible) => (
          <>
            {/* Background Pattern overlay (Calculators/Gears) */}
            <div className="absolute inset-0 bg-[url('/images/pattern-bg-lime.jpg')] bg-[length:450px_330px] bg-top opacity-[0.16]" />
            <div className="absolute inset-0 bg-[#ffcb05]/75" />

            <div className={`${layoutContainerClass} relative z-1`}>
              {/* Heading */}
              <div
                className={`home-animated-item text-center ${isVisible ? "home-animated-item-visible" : ""
                  }`}
              >
                <h2 className="m-0 text-[42px] leading-tight font-black md:text-6xl text-[#1b2c38]">
                  What Drives Us
                </h2>
              </div>

              {/* Grid content */}
              <div
                className={`home-animated-item mt-12 grid gap-12 items-center lg:grid-cols-3 ${isVisible ? "home-animated-item-visible" : ""
                  }`}
                style={{ transitionDelay: "100ms" }}
              >
                {/* Left: Our Vision */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-[0_4px_15px_rgba(37,99,235,0.3)]">
                      <Eye className="h-8 w-8" />
                    </div>
                    <h3 className="m-0 text-3xl sm:text-6xl font-black text-[#1b2c38] tracking-tight">
                      Our Vision
                    </h3>
                  </div>
                  <p className="mt-6 text-[19px] sm:text-2xl leading-relaxed text-[#1b2c38] font-semibold max-w-[450px]">
                    To make technology and business services simpler, practical and accessible — enabling organizations to improve operations, customer engagement and growth.
                  </p>
                </div>

                {/* Center: Lighthouse Image */}
                <div className="flex justify-center lg:self-end self-center">
                  <img
                    src="/images/about/Picture1.webp"
                    alt="Lighthouse representing vision and direction"
                    className="relative -z-10 h-auto w-full max-w-[340px] drop-shadow-xl -mb-20 max-[760px]:-mb-24"
                    loading="lazy"
                  />
                </div>

                {/* Right: Mission */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ff5a5a] text-white shadow-[0_4px_15px_rgba(255,90,90,0.3)]">
                      <Target className="h-8 w-8" />
                    </div>
                    <h3 className="m-0 text-3xl sm:text-6xl font-black text-[#1b2c38] tracking-tight uppercase">
                      MISSION
                    </h3>
                  </div>
                  <p className="mt-6 text-[19px] sm:text-2xl leading-relaxed text-[#1b2c38] font-semibold max-w-[450px]">
                    To deliver customized, cost-effective and dependable solutions by combining technology, business understanding, digital communication and long-term client support
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatedSection>
    </>
  );
}

export default AboutPage;
