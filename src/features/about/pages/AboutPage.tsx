import { useState } from "react";
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
    image: "/images/about/09-story-company.svg",
    layout: "split",
  },
  {
    id: "research",
    initial: "R",
    title: "Market Research",
    description: "We study user needs and market trends to build a highly targeted and strategic product.",
    image: "/images/about/09-story-company.svg",
    layout: "splitReverse",
  },
  {
    id: "design",
    initial: "D",
    title: "Mobile App Development Company",
    description: "After receiving all the details, our expert team starts creating the final project.",
    image: "/images/about/09-story-company.svg",
    layout: "splitReverse",
  },
  {
    id: "testing",
    initial: "T",
    title: "Testing",
    description: "Besides development, we also take care of an important aspect, TESTING, helping the client with final testing and make the final changes if required.",
    image: "/images/about/09-story-company.svg",
    layout: "split",
  },
  {
    id: "launch",
    initial: "L",
    title: "Product Launch",
    description: "We deploy the application to your environment, making sure all integrations work seamlessly.",
    image: "/images/about/09-story-company.svg",
    layout: "split",
  },
  {
    id: "maintenance",
    initial: "M",
    title: "Maintenance",
    description: "According to us, our work does not end after launching the project. Rather we feel that this is where our actual work begins! When our clients are using the project, we help them by solving any issues they may face and performing the timely update.",
    image: "/images/about/09-story-company.svg",
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
              className={`home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
            >
              <SectionTitle
                title="Short Story About Our Company"
                align="left"
                titleClassName="text-[42px] leading-[1.16] font-black tracking-normal max-[980px]:text-[36px] max-[560px]:text-[28px]"
              />

              <p className="mt-8 max-w-[940px] text-lg leading-[1.55] text-[#4f5a62] max-[760px]:text-base">
                We stand apart from others, in that, we provide our clients with fully
                customized solutions and Softwares which are designed as per their needs
                and specifications. There is no &ldquo;one-size-fits-all&rdquo; in our designs!
                The software design done by us is completely hassle-free, user-friendly and
                remarkably easy to install. In fact, the &ldquo;not so tech-savvy&rdquo; will also
                fall in love with it.
              </p>
            </div>

            {/* Interactive Timeline Slider Navigation */}
            <div
              className={`home-animated-item mt-16 flex items-center justify-between gap-4 max-[640px]:mt-10 ${
                isVisible ? "home-animated-item-visible" : ""
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
                        className={`relative z-1 flex h-[52px] w-[52px] items-center justify-center rounded-full text-lg font-black transition-all duration-300 max-[560px]:h-10 max-[560px]:w-10 max-[560px]:text-sm ${
                          isActive
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
              className={`home-animated-item mt-16 ${
                isVisible ? "home-animated-item-visible" : ""
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
              className={`home-animated-item flex flex-col items-center text-center p-6 bg-[#f4f5ef]/40 rounded-2xl  transition-all duration-300  ${
                isVisible ? "home-animated-item-visible" : ""
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
              className={`home-animated-item flex flex-col items-center text-center p-6 bg-[#f4f5ef]/40 rounded-2xl  transition-all duration-300  ${
                isVisible ? "home-animated-item-visible" : ""
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
              className={`home-animated-item flex flex-col items-center text-center p-6 bg-[#f4f5ef]/40 rounded-2xl  transition-all duration-300  ${
                isVisible ? "home-animated-item-visible" : ""
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

      {/* 4. Our Vision Section */}
      <AnimatedSection
        className="relative overflow-hidden bg-[#ffcb05] pt-20 pb-0 text-center text-[#1b2c38] max-[760px]:pt-14"
        ariaLabel="AG Solutions company vision"
      >
        {(isVisible) => (
          <>
            {/* Background Pattern overlay (Calculators/Gears) */}
            <div className="absolute inset-0 bg-[url('/images/pattern-bg-lime.jpg')] bg-[length:450px_330px] bg-top opacity-[0.16]" />
            <div className="absolute inset-0 bg-[#ffcb05]/75" />

            <div className={`${layoutContainerClass} relative z-1 flex flex-col items-center`}>
              {/* Heading */}
              <div
                className={`home-animated-item ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
              >
                <h2 className="m-0 text-[42px] leading-tight font-black max-[760px]:text-3xl">
                  Our Vision
                </h2>
              </div>

              {/* Vision text content */}
              <div
                className={`home-animated-item mt-6 max-w-[820px] ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <p className="m-0 text-lg leading-relaxed font-light text-[#1b2c38] max-[760px]:text-base">
                  We always want to check and understand the clients business and then depending on the
                  satisfaction of the client we will be providing the solutions by keeping all the concepts in
                  mind. Also, help the clients to make a better understanding and relationship with the audience
                  to increase brand awareness.
                </p>
              </div>

              {/* Lighthouse illustration at the bottom */}
              <div
                className={`home-animated-item mt-10 w-full max-w-[340px] flex justify-center ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <img
                  src="/images/about/11-our-vision.svg"
                  alt="Lighthouse illustration representing our vision"
                  className="h-auto w-full max-[560px]:max-w-[260px] block"
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

export default AboutPage;
