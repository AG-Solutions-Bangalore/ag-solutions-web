import { useState ,useEffect} from "react";
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

  useEffect(() => {
  const interval = setInterval(() => {
    goToSlide(getNextIndex(activeIndex), "from-right");
  }, 2000);

  return () => clearInterval(interval);
}, [activeIndex]);

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
    <div className={`${activeSlide.contentClass} py-2`}>
      <div>
        <h1
          className={`m-0 text-[32px] sm:text-[42px] leading-[1.12] font-black ${activeSlide.titleClass}`}
        >
          {activeSlide.title}
        </h1>
      </div>
      <p
        className={`mt-3 text-[15px] sm:text-base leading-[1.6] ${activeSlide.descriptionClass}`}
      >
        {activeSlide.description}
      </p>
      <div
        className={`mt-5 flex flex-wrap gap-3 ${isCentered ? "justify-center" : ""}`}
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
    <div className="mx-auto flex w-full max-w-[620px] items-center justify-center py-2">
      <img
        className={`${activeSlide.imageClass} h-[210px] sm:h-[240px] lg:h-[270px] w-full max-w-[560px] object-contain object-center`}
        src={activeSlide.image}
        alt={activeSlide.imageAlt}
        title={activeSlide.imageTitle}
        loading={activeIndex === 0 ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={activeIndex === 0 ? "high" : "auto"}
      />
    </div>
  );

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-label="Featured AG Solutions services"
    >
      <div
        className={`relative h-[520px] sm:h-[555px] lg:h-[578px] flex items-center overflow-hidden transition-colors duration-500 ${activeSlide.backgroundClass}`}
      >
        <button
          type="button"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
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
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
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
          className={`${layoutContainerClass} relative flex h-full w-full items-center justify-center py-6 sm:py-8`}
          id={`home-carousel-${activeSlide.id}`}
        >
          <div
            key={activeSlide.id}
            className={`w-full px-6 sm:px-10 lg:px-14 ${
              slideDirection === "from-right"
                ? "home-carousel-image-from-right"
                : "home-carousel-image-from-left"
            }`}
          >
            {isCentered ? (
              <div className="flex w-full flex-col items-center gap-3 text-center">
                {slideContent}
                {slideImage}
              </div>
            ) : (
              <div className="grid w-full items-center gap-6 lg:gap-8 md:grid-cols-[1.02fr_0.98fr]">
                {imageFirst && slideImage}
                {slideContent}
                {!imageFirst && slideImage}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="hidden md:grid h-[70px] grid-cols-5 overflow-hidden"
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
