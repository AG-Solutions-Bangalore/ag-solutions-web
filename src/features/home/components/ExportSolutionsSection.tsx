import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";

gsap.registerPlugin(ScrollTrigger);

function ExportSolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. Dotted route path drawing animation (ScrollTrigger-controlled)
    const path = section.querySelector(".route-line") as SVGPathElement;
    let pathScrollTrigger: ScrollTrigger | null = null;
    if (path) {
      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      pathScrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        end: "bottom 30%",
        scrub: 1.5,
        onUpdate: (self) => {
          gsap.set(path, {
            strokeDashoffset: pathLength * (1 - self.progress)
          });
        }
      });
    }

    // 2. Ship slide-in animation (ScrollTrigger-controlled)
    const ship = section.querySelector(".ship-vessel") as SVGElement;
    let shipScrollTrigger: ScrollTrigger | null = null;
    if (ship) {
      gsap.set(ship, {
        x: 180,
        opacity: 0,
      });

      shipScrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "center 40%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(ship, {
            x: 180 * (1 - self.progress),
            opacity: self.progress
          });
        }
      });

      // 3. Idle bobbing floating animation (Infinite loop)
      const floatAnim = gsap.to(ship, {
        y: "-=8",
        rotation: "+=0.6",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 4. Wave animations (Infinite loops)
      const waveMidAnim = gsap.to(section.querySelector(".wave-mid"), {
        x: "-=25",
        y: "+=3",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      const waveFrontAnim = gsap.to(section.querySelector(".wave-front"), {
        x: "+=20",
        y: "-=3",
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      return () => {
        // Clean up
        if (pathScrollTrigger) pathScrollTrigger.kill();
        if (shipScrollTrigger) shipScrollTrigger.kill();
        floatAnim.kill();
        waveMidAnim.kill();
        waveFrontAnim.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-[#151d23]">
      <AnimatedSection
        className="py-20 text-white max-[760px]:py-14"
        ariaLabel="EXPORT BIZ"
      >
        {(isVisible) => (
          <>
            <div className="absolute inset-0 bg-[url('/images/pattern-bg-breez.jpg')] bg-[length:450px_330px] bg-top opacity-[0.08]" />
            <div className="absolute inset-0 bg-[#151d23]/80" />

            <div
              className={`${layoutContainerClass} relative grid min-h-[380px] items-center gap-10 min-[980px]:grid-cols-[1.15fr_0.85fr] z-1`}
            >
              {/* Left content: wider text container */}
              <div
                className={`home-animated-item relative z-10 max-w-[740px] ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
              >
                <h2 className="m-0 text-[43px] leading-[1.1] font-medium text-white max-[760px]:text-[34px] max-[480px]:text-[29px]">
                  EXPORT BIZ
                </h2>
                <p className="mt-8 text-[20px] leading-[1.2] font-light text-white/92 max-[760px]:text-base">
                  with EXPORT BIZ
                  manage all your export biz documentation, reporting, monthly return
                  and scheme claims outstanding etc. organized and save your time
                  and money.
                </p>

                <div className="mt-10 flex flex-wrap gap-8 max-[560px]:gap-4">
                  <Link
                    to="/export-biz"
                    className="inline-flex h-[62px] min-w-[210px] items-center justify-center rounded-full bg-[#27c7cd] px-8 text-base font-black uppercase text-white no-underline transition-colors hover:bg-[#1289bc] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#151d23]"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contacts"
                    className="inline-flex h-[62px] min-w-[210px] items-center justify-center rounded-full bg-[#27c7cd] px-8 text-base font-black text-white no-underline transition-colors hover:bg-[#1289bc] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#151d23]"
                  >
                    Need a Demo
                  </Link>
                </div>
              </div>

              {/* Right column: space holder containing the absolute-positioned animating ship */}
              <div
                className={`home-animated-item relative min-h-[340px] max-[980px]:min-h-[260px] w-full flex items-end justify-end overflow-visible ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "140ms" }}
              >
                <div
                  className="absolute right-[-8vw] bottom-[-60px] w-[140%] h-[140%] max-w-[760px] flex items-end justify-end pointer-events-none select-none z-1"
                >
                  <svg
                    viewBox="0 0 600 400"
                    className="w-full h-full overflow-visible"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Dotted path representing trade routes */}
                    <path
                      d="M 50 250 Q 200 130 380 280 T 580 180"
                      fill="none"
                      stroke="#27c7cd"
                      strokeWidth="2.5"
                      strokeDasharray="6,6"
                      className="route-line"
                      opacity="0.35"
                    />

                    {/* Ship vessel group */}
                    <g className="ship-vessel">
                      {/* Ship Hull */}
                      <path d="M 120 280 L 145 325 L 455 325 L 495 280 Z" fill="#1c3a54" />
                      <path d="M 435 280 L 445 325 L 455 325 L 495 280 Z" fill="#142637" /> {/* Hull shadow */}

                      {/* Cabin Structure */}
                      <rect x="395" y="200" width="60" height="80" fill="#f8fafc" rx="4" />
                      <rect x="405" y="160" width="40" height="40" fill="#f8fafc" rx="2" />
                      {/* Windows */}
                      <rect x="412" y="172" width="8" height="8" fill="#1c3a54" rx="1" />
                      <rect x="428" y="172" width="8" height="8" fill="#1c3a54" rx="1" />
                      <rect x="402" y="215" width="46" height="6" fill="#1c3a54" />
                      {/* Radar / Mast */}
                      <line x1="425" y1="160" x2="425" y2="130" stroke="#f8fafc" strokeWidth="3" />
                      <line x1="415" y1="140" x2="435" y2="140" stroke="#27c7cd" strokeWidth="2.5" />

                      {/* Cargo Containers */}
                      {/* Row 1 */}
                      <rect x="150" y="250" width="45" height="30" fill="#27c7cd" rx="2" />
                      <rect x="200" y="250" width="45" height="30" fill="#e2e8f0" rx="2" />
                      <rect x="250" y="250" width="45" height="30" fill="#1c3a54" rx="2" />
                      <rect x="300" y="250" width="45" height="30" fill="#f1c40f" rx="2" />
                      <rect x="350" y="250" width="45" height="30" fill="#27c7cd" rx="2" />

                      {/* Row 2 */}
                      <rect x="175" y="220" width="45" height="30" fill="#1c3a54" rx="2" />
                      <rect x="225" y="220" width="45" height="30" fill="#f1c40f" rx="2" />
                      <rect x="275" y="220" width="45" height="30" fill="#27c7cd" rx="2" />
                      <rect x="325" y="220" width="45" height="30" fill="#e2e8f0" rx="2" />

                      {/* Row 3 */}
                      <rect x="210" y="190" width="45" height="30" fill="#27c7cd" rx="2" />
                      <rect x="260" y="190" width="45" height="30" fill="#1c3a54" rx="2" />
                      <rect x="310" y="190" width="45" height="30" fill="#f1c40f" rx="2" />
                    </g>

                    {/* Water waves */}
                    <path
                      d="M 0 310 C 150 290 300 330 450 310 C 525 300 600 315 600 315 L 600 400 L 0 400 Z"
                      fill="#151d23"
                      opacity="0.9"
                      className="wave-back"
                    />
                    <path
                      d="M 0 325 C 100 335 250 305 400 325 C 500 335 600 320 600 320 L 600 400 L 0 400 Z"
                      fill="#27c7cd"
                      opacity="0.2"
                      className="wave-mid"
                    />
                    <path
                      d="M 0 340 C 120 320 280 350 420 335 C 510 325 600 340 600 340 L 600 400 L 0 400 Z"
                      fill="#1c3a54"
                      opacity="0.35"
                      className="wave-front"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatedSection>
    </div>
  );
}

export default ExportSolutionsSection;
