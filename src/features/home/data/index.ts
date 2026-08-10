type HeroSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
  tabIcon: string;
  path: string;
  backgroundClass: string;
  tabClass: string;
  titleClass: string;
  descriptionClass: string;
  layout: "split" | "splitReverse"|"center";
  imageClass: string;
  contentClass: string;
  arrowClass: string;
  imageAlt: string;
  imageTitle: string;
  tabIconAlt: string;
  tabIconTitle: string;
};

export const heroSlides: readonly HeroSlide[] = [
  {
  id: "web",
  title: "Web Development",
  description:
  "Transform your ideas into powerful digital experiences with custom websites and web applications that combine stunning design, seamless functionality, and business-driven performance.",
  image: "/images/home/01Crausle.png",
  tabIcon: "/images/home/home-08.png",
  path: "/web-development",
  backgroundClass:
    "bg-gradient-to-r from-[#eef5fb] via-[#f9fcff] to-[#eef5fb]",
  tabClass: "bg-[#eef5fb] text-[#1b2c38]",
  titleClass: "text-[#162938]",
  descriptionClass: "text-[#54616d]",
  layout: "split",
  imageClass: "w-full max-w-[520px] hover:scale-120 transition duration-700",
  contentClass: "max-w-[520px]",
  arrowClass: "invert-0 opacity-45",
  imageAlt: "Web Development",
  imageTitle: "Web Development",
  tabIconAlt: "Web Development Icon",
  tabIconTitle: "Web Development",
},
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
       "We build high-performance Android, iOS, and cross-platform mobile applications that deliver seamless user experiences, strengthen customer engagement, and accelerate business growth.",
    image: "/images/home/02Crausle.png",
    tabIcon: "/images/home/home-09.png",
    path: "/mobile-app-development",
    backgroundClass: "bg-[#27c7cd]",
    tabClass: "bg-[#27c7cd] text-white",
    titleClass: "text-white",
    descriptionClass: "text-white/90",
    layout: "splitReverse",
    imageClass: "w-full max-w-[480px]  hover:scale-120 transition-all duration-700 ease-out",
    contentClass: "max-w-[520px]",
    arrowClass: "brightness-0 invert opacity-70",
    imageAlt: "Mobile App Development Services",
    imageTitle: "Mobile App Development",
    tabIconAlt: "Mobile App Development Icon",
    tabIconTitle: "Mobile App Development",
  },
  {
    id: "desktop",
    title: "Desktop Application Development",
    description:
      "We develop secure, scalable desktop applications that streamline business operations, improve productivity, and deliver reliable performance for organizations of every size.",
    image: "/images/home/03Crausle.png",
    tabIcon: "/images/home/home-10.png",
    path: "/desktop-applications",
    backgroundClass: "bg-[#ff3c66]",
    tabClass: "bg-[#ff3c66] text-[#1b2c38]",
    titleClass: "text-[#1b2c38]",
    descriptionClass: "text-white",
    layout: "split",
    imageClass: "w-full max-w-[560px] hover:scale-120 transition-all duration-700 ease-out",
    contentClass: "max-w-[520px]",
    arrowClass: "brightness-0 invert opacity-65",
    imageAlt: "Desktop Application Development",
    imageTitle: "Desktop Software Development",
    tabIconAlt: "Desktop Application Development Icon",
    tabIconTitle: "Desktop Software Development",
  },
  {
    id: "email",
    title: "Email Marketing",
    description:
      "We create tailored marketing campaigns for each segment of your audience to advertise products and services and engage new customers.",
    image: "/images/home/04Crausle.svg",
    tabIcon: "/images/home/home-11.png",
    path: "/services/email-marketing",
    backgroundClass: "bg-[#ffcb05]",
    tabClass: "bg-[#ffcb05] text-[#1b2c38]",
    titleClass: "text-[#1b2c38]",
    descriptionClass: "text-white",
    layout: "splitReverse",
    imageClass: "w-full max-w-[500px] hover:scale-110 transition-all duration-700 ease-out",
    contentClass: "max-w-[520px]",
    arrowClass: "opacity-35",
    imageAlt: "Email Marketing Services",
    imageTitle: "Email Marketing Services",
    tabIconAlt: "Email Marketing Icon",
    tabIconTitle: "Email Marketing Services",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description:
      "Campaign planning, content systems, and measurable digital activity for teams that want cleaner outreach and better visibility.",
    image: "/images/home/05Crausle.png",
    tabIcon: "/images/home/home-12.png",
    path: "/services/digital-marketing",
    backgroundClass: "bg-[#8bd82b]",
    tabClass: "bg-[#8bd82b] text-[#1b2c38]",
    titleClass: "text-[#1b2c38]",
    descriptionClass: "text-[#26343d]",
    layout: "split",
    imageClass: "w-full max-w-[500px] hover:scale-120 transition-all duration-700 ease-out",
    contentClass: "max-w-[520px]",
    arrowClass: "opacity-40",
    imageAlt: "Digital Marketing Services",
    imageTitle: "Digital Marketing Services",
    tabIconAlt: "Digital Marketing Icon",
    tabIconTitle: "Digital Marketing Services",
  },
];
