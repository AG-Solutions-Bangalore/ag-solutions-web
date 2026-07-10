import { useState } from "react";
import { Link } from "react-router-dom";
import { layoutContainerClass } from "@/components/layout/styles";
import { heroSlides } from "../data";

type SlideDirection = "from-left" | "from-right";

function getNextIndex(index: number) {
  return (index + 1) % heroSlides.length;
}

function getPreviousIndex(index: number) {
  return (index - 1 + heroSlides.length) % heroSlides.length;
}

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] =
    useState<SlideDirection>("from-right");
  const activeSlide = heroSlides[activeIndex];

  const imageFirst = activeSlide.layout === "splitReverse";
  const isCentered = activeSlide.layout === "center";

  function goToSlide(nextIndex: number, direction: SlideDirection) {
    if (nextIndex === activeIndex) {
      return;
    }

    setSlideDirection(direction);
    setActiveIndex(nextIndex);
  }

  const slideContent = (
    <div className={activeSlide.contentClass}>
      <div>
        <h1
          className={`m-0 text-[42px] leading-[1.12] font-black max-[640px]:text-[32px] ${activeSlide.titleClass}`}
        >
          {activeSlide.title}
        </h1>
      </div>
      <p
        className={`mt-5 text-base leading-[1.75] max-[640px]:text-[15px] ${activeSlide.descriptionClass}`}
      >
        {activeSlide.description}
      </p>
      <div
        className={`mt-7 flex flex-wrap gap-3 ${isCentered ? "justify-center" : ""}`}
      >
        <Link
          to={activeSlide.path}
          className="inline-flex h-11 min-w-[116px] items-center justify-center rounded-full bg-[#132d3e] px-5 text-xs font-black text-white no-underline transition-colors hover:bg-[#0f2534] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#132d3e]"
        >
          View Details
        </Link>
        <Link
          to="/contacts"
          className="inline-flex h-11 min-w-[116px] items-center justify-center rounded-full bg-[#132d3e] px-5 text-xs font-black text-white no-underline transition-colors hover:bg-[#0f2534] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#132d3e]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );

  const slideImage = (
    <img
      className={`${activeSlide.imageClass} block max-h-[360px] object-contain max-[860px]:max-h-[330px] max-[560px]:max-h-[280px]`}
      src={activeSlide.image}
      alt={activeSlide.imageAlt}
      title={activeSlide.imageTitle}
      width="560"
      height="360"
      loading={activeIndex === 0 ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={activeIndex === 0 ? "high" : "auto"}
    />
  );

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-label="Featured AG Solutions services"
    >
      <div
        className={`relative h-[620px] overflow-hidden max-[860px]:h-[640px] max-[560px]:h-[680px] transition-colors duration-500 ${activeSlide.backgroundClass}`}
      >
        <button
          type="button"
          className="absolute left-6 top-1/2 z-10 grid h-12 w-12 place-items-center rounded-full hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white max-[760px]:left-3 cursor-pointer"
          onClick={() => goToSlide(getPreviousIndex(activeIndex), "from-left")}
          aria-label="Previous carousel slide"
        >
          <img
            className={`h-[30px] w-10 ${activeSlide.arrowClass}`}
            src="/images/leftArrow.svg"
            alt="Previous Slide"
            title="Previous Slide"
          />
        </button>
        <button
          type="button"
          className="absolute right-6 top-1/2 z-10 grid h-12 w-12 place-items-center rounded-full hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white max-[760px]:right-3 cursor-pointer"
          onClick={() => goToSlide(getNextIndex(activeIndex), "from-right")}
          aria-label="Next carousel slide"
        >
          <img
            className={`h-[30px] w-10 ${activeSlide.arrowClass}`}
            src="/images/rightArrow.svg"
            alt="Next Slide"
            title="Next Slide"
          />
        </button>

        <div
          className={`${layoutContainerClass} relative flex h-full items-center justify-center`}
          id={`home-carousel-${activeSlide.id}`}
        >
          <div
            key={activeSlide.id}
            className={`w-full px-14 max-[640px]:px-8 ${
              slideDirection === "from-right"
                ? "home-carousel-image-from-right"
                : "home-carousel-image-from-left"
            }`}
          >
            {isCentered ? (
              <div className="flex flex-col items-center text-center">
                {slideContent}
                {slideImage}
              </div>
            ) : (
              <div className="grid w-full items-center gap-12 min-[860px]:grid-cols-2">
                {imageFirst && slideImage}
                {slideContent}
                {!imageFirst && slideImage}
              </div>
            )}
          </div>
        </div>
      </div>


      <div
        className="grid h-[70px] grid-cols-5 overflow-hidden max-[780px]:hidden"
        role="tablist"
        aria-label="Choose a featured service"
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`relative flex h-[70px] min-w-[245px] items-center overflow-hidden px-8 text-left text-sm font-bold focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-white ${slide.tabClass}`}
              onClick={() =>
                goToSlide(
                  index,
                  index > activeIndex ? "from-right" : "from-left",
                )
              }
            >
              <span className="relative z-1">{slide.title}</span>
              <img
                className="absolute right-6 top-1/2 h-[48px] w-[48px] -translate-y-1/2 object-contain opacity-20"
                src={slide.tabIcon}
                alt={slide.tabIconAlt}
                title={slide.tabIconTitle}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default HeroCarousel;
