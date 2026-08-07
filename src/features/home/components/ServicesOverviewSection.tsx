import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { SectionTitle } from "@/components/layout/SectionTitle";

const services = [
  {
    title: "Web Development",
    image: "/images/services/web-development/web7.png",
    path: "/web-development",
    description:
      "Turn your vision into a powerful digital experience...",
    alt: "Custom Web Development Services",
    titleAttr: "Web Development Services",

    gradient: "from-[#2563EB] via-[#3B82F6] to-[#06B6D4]",
    glow: "bg-blue-400/30",
  },

  {
    title: "Mobile App Development",
    image: "/images/services/mobile-app-development/mobile1.png",
    path: "/mobile-app-development",
    description:
      "Create powerful mobile experiences...",
    alt: "Mobile App Development Services",
    titleAttr: "Mobile App Development",

    gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#EC4899]",
    glow: "bg-pink-400/30",
  },

  {
    title: "Desktop Applications",
    image: "/images/services/desktop-applications/desktop3.png",
    path: "/desktop-applications",
    description:
      "Turn your business vision into powerful software...",
    alt: "Desktop Application Development",
    titleAttr: "Desktop Software Development",

    gradient: "from-[#06B6D4] via-[#14B8A6] to-[#2563EB]",
    glow: "bg-cyan-400/30",
  },
] as const;

function ServicesOverviewSection() {
  return (
    <AnimatedSection
      className="relative overflow-hidden bg-white py-8 text-[#1b2c38] max-[760px]:py-14"
      ariaLabel="AG Solutions services overview"
    >
      {(isVisible) => (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] opacity-[0.055]">
            <div className="absolute -bottom-20 left-0 h-[280px] w-full origin-bottom-left -skew-y-[27deg] bg-[#8c97a3]" />
            <div className="absolute -bottom-16 left-[10%] h-[230px] w-[85%] origin-bottom-left -skew-y-[18deg] bg-[#1b2c38]" />
          </div>

          <section className="relative overflow-hidden py-16">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#eef8ff] via-white to-[#f0fbff]" />

          {/* Top Left Blob */}
          <div
            className=" absolute -top-44 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-400/30 blur-[130px] animate-[blob_10s_ease-in-out_infinite]"
          />

          {/* Top Right Blob */}
          <div
            className=" absolute -top-24 right-0  h-[360px] w-[360px] rounded-full  bg-blue-500/25 blur-[120px] animate-[blob2_12s_ease-in-out_infinite]"
          />

          {/* Bottom Blob */}
          <div
            className=" absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-[150px] animate-[blob3_14s_ease-in-out_infinite]"
          />

          {/* Decorative Grid */}
          <div
            className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#2563eb_1px,transparent_1px),linear-gradient(90deg,#2563eb_1px,transparent_1px)]
    [background-size:45px_45px] "
          />

          {/* Noise Overlay */}
          <div
            className=" absolute inset-0  opacity-[0.03] mix-blend-overlay bg-[url('/images/noise.png')]  "
          />

          

            <div className={`${layoutContainerClass} relative z-10`}>
              <SectionTitle
                title="Services"
                align="center"
                titleClassName="text-[52px] leading-none font-black max-[640px]:text-[38px]"
                className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""
                  }`}
              />
              <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-gray-500">
                We build secure, scalable, and innovative software solutions tailored
                to your business needs across web, mobile, and desktop platforms.
              </p>
              <div className="mt-14 grid gap-10 min-[920px]:grid-cols-3">
                {services.map((service, index) => (

                  <article
                    key={service.title}
                    className={`group relative overflow-hidden rounded-[30px] border border-white/30 bg-white/60 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,.08)]  *:transition-all
                      duration-700 hover:-translate-y-6 hover:scale-[1.02] hover:shadow-[0_45px_90px_rgba(0,83,192,.28)]
                         ${isVisible
                        ? "home-animated-item-visible"
                        : ""
                      }
                      home-animated-item`}
                    style={{
                      transitionDelay: `${120 + index * 100}ms`
                    }}
                  >

                    {/* Glow Behind Image */}
                    <div
                      className={`absolute top-12 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full
                        ${service.glow}
                          blur-[70px] opacity-70 transition-all duration-700 group-hover:scale-150
                     `}
                    />

                    {/* Decorative Icon */}
                    <div className=" absolute right-5 top-5 z-20 flex h-10  w-10 items-center  justify-center rounded-full bg-white/40
                backdrop-blur-xl transition-all duration-500 group-hover:rotate-180 group-hover:scale-125" >
                     ✦
                    </div>

                    {/* Animated Border */}
                    <div
                      className={`absolute inset-0 rounded-[30px] bg-gradient-to-r 
                        ${service.gradient}
                        opacity-0 transition-all duration-700 group-hover:opacity-100`}
                    />

                    <div className="absolute inset-[2px] rounded-[28px] bg-white/90 backdrop-blur-xl"></div>
                    {/* Shine */}
                    <div
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                    />
                    {/* Image */}
                    <div className="relative z-10 overflow-hidden rounded-t-3xl">
                      <img
                        src={service.image}
                        alt={service.alt}
                        title={service.titleAttr}
                        className="relative  z-10 h-[230px] w-full object-contain p-8 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-3 group-hover:rotate-2 animate-float "
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 px-8 pb-8">
                      <h3 className={`text-2xl font-extrabold  bg-gradient-to-r
                        ${service.gradient}
                        bg-clip-text text-transparent`}
                        >
                        {service.title}
                      </h3>

                      <p className="mt-4 text-[16px] leading-7 text-[#5d6974] line-clamp-5">
                        {service.description}
                      </p>
                      <Link
  to={service.path}
  className="group relative mt-8 inline-flex overflow-hidden rounded-full"
>

  {/* Animated Gradient */}
  <div
    className={`
      absolute
      inset-0
      bg-gradient-to-r
      ${service.gradient}
      bg-[length:250%_250%]
      animate-gradient-x
    `}
  />

  {/* Glow */}
  <div
    className="
      absolute
      inset-0
      blur-xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-80
      bg-cyan-400/40
    "
  />

  {/* Shine */}
  <div
    className="
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent
      transition-transform
      duration-1000
      group-hover:translate-x-full
    "
  />

  {/* Button */}
  <div
    className="
      relative
      z-10
      flex
      items-center
      gap-4

      rounded-full

      px-7
      py-3

      text-sm
      font-semibold
      text-white

      transition-all
      duration-300

      group-hover:scale-105
    "
  >

    Learn More

    <span
      className="
        flex
        h-9
        w-9
        items-center
        justify-center

        rounded-full

        bg-white/20

        transition-all
        duration-500

        group-hover:translate-x-2
        group-hover:rotate-45
        group-hover:bg-white/30
      "
    >
      →
    </span>

  </div>

</Link>
                    </div>
                  </article>
                ))}
              </div>

              <div
                className={`home-animated-item mt-14 flex flex-wrap justify-center gap-6 ${isVisible ? "home-animated-item-visible" : ""
                  }`}
                style={{ transitionDelay: "450ms" }}
              >
                <Link
  to="/services"
  className="
    group
    relative
    overflow-hidden

    rounded-full

    bg-gradient-to-r
    from-[#2563EB]
    via-[#06B6D4]
    to-[#2563EB]

    bg-[length:250%_250%]

    animate-gradient-x

    px-10
    py-4

    font-bold
    text-white

    shadow-[0_15px_40px_rgba(37,99,235,.35)]

    transition-all
    duration-500

    hover:scale-110
    hover:shadow-[0_25px_70px_rgba(37,99,235,.45)]
  "
>
  Explore All Services →

  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">
    →
  </span>
</Link>

              </div>
            </div>
          </section>
        </>
      )}
    </AnimatedSection>
  );
}

export default ServicesOverviewSection;
