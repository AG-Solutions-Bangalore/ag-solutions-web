import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { SectionTitle } from "@/components/layout/SectionTitle";


const features = [
  {
    icon: "/icons/home/trust1.png",
    title: "Trusted. Proven. Dependable.",
    description: "Delivering quality solutions you can count on.",
    titleColor: "#0F766E", // Teal
    descColor: "#475569",
  },
  {
    icon: "/icons/home/Support.png",
    title: "Always Available. Always Here.",
    description: "Round-the-clock support whenever you need us.",
    titleColor: "#E11D48", // Rose
    descColor: "#475569",
  },
  {
    icon: "/icons/home/bulb.png",
    title: "Creative Designs. Unique Experiences.",
    description: "Crafting innovative, user-friendly interfaces that inspire.",
    titleColor: "#D97706", // Amber
    descColor: "#475569",
  },
];

function AboutCompanySection() {
  return (
    <AnimatedSection
      className="bg-white py-14 text-[#1b2c38] max-[700px]:py-10"
      ariaLabel="AG Solutions company introduction"
    >
      {(isVisible) => (
        <div
          className={layoutContainerClass}
        >
          <div
            className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""
              }`}
          >
            <SectionTitle
              title={
                <>
                  AG Solutions: Web, Mobile <br className="hidden md:inline" /> & Software Solutions Company
                </>
              }
              align="left"
              titleClassName="max-w-[760px] text-[34px] leading-[1.2] font-extrabold max-[980px]:text-[30px] max-[560px]:text-[24px]"
            />

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">

              <div className="max-w-[650px]">
                <p className="text-[16px] leading-7 text-[#1d2d3b]">
                  AG Solutions is a Bangalore-based software development company with over
                  <b> 15 years of experience </b> delivering custom digital solutions for businesses
                  across India and global markets.

                  <br /><br />

                  We specialize in <i><b> web development, mobile app development,
                    custom software development, desktop applications,
                    ERP & CRM solutions, eCommerce platforms,
                    and digital marketing services.</b></i>

                  <br /><br />

                  Our goal is to help businesses streamline operations,
                  improve customer experiences and accelerate digital growth
                  through scalable and secure technology solutions.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="/images/home/about_us1.png"
                  className="w-full max-w-[450px] object-contain mx-auto"
                  alt="About AG Solutions"
                />
              </div>

            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 h-full"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  <h3 className="mt-4 font-bold text-[18px] min-h-[15px]" style={{ color: item.titleColor }}>
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-6  min-h-[30px]" style={{ color: item.descColor }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}

export default AboutCompanySection;
