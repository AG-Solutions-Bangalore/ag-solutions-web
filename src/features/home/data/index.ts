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
  layout: "center" | "split" | "splitReverse";
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
    description: "Discover More About Our Web Development Expertise!",
    image: "/images/home/01Crausle.svg",
    tabIcon: "/images/home/home-08.png",
    path: "/web-development",
    backgroundClass: "bg-[#eef0eb]",
    tabClass: "bg-[#eef0eb] text-[#1b2c38]",
    titleClass: "text-[#1b2c38]",
    descriptionClass: "text-[#63717b]",
    layout: "center",
    imageClass: "mx-auto mt-10 w-full max-w-[850px]",
    contentClass: "mx-auto max-w-[760px] text-center",
    arrowClass: "invert-0 opacity-45",
    imageAlt: "Web and Mobile App Development Company",
    imageTitle: "AG Solutions Homepage Banner",
    tabIconAlt: "Web Development Icon",
    tabIconTitle: "Web Development",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "From strategy and design to development, testing, and deployment, we build mobile-first products for modern business needs.",
    image: "/images/home/02Crausle.svg",
    tabIcon: "/images/home/home-09.png",
    path: "/mobile-app-development",
    backgroundClass: "bg-[#27c7cd]",
    tabClass: "bg-[#27c7cd] text-white",
    titleClass: "text-white",
    descriptionClass: "text-white/90",
    layout: "splitReverse",
    imageClass: "w-full max-w-[480px]",
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
      "Whether you are migrating legacy software or developing a system for the first time, we reduce risk, timeline, and implementation cost with practical domain experience.",
    image: "/images/home/03Crausle.svg",
    tabIcon: "/images/home/home-10.png",
    path: "/desktop-applications",
    backgroundClass: "bg-[#ff3c66]",
    tabClass: "bg-[#ff3c66] text-[#1b2c38]",
    titleClass: "text-[#1b2c38]",
    descriptionClass: "text-white",
    layout: "split",
    imageClass: "w-full max-w-[560px]",
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
    layout: "center",
    imageClass: "mx-auto mt-10 w-full max-w-[830px]",
    contentClass: "mx-auto max-w-[720px] text-center",
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
    image: "/images/home/05Crausle.svg",
    tabIcon: "/images/home/home-12.png",
    path: "/services/digital-marketing",
    backgroundClass: "bg-[#8bd82b]",
    tabClass: "bg-[#8bd82b] text-[#1b2c38]",
    titleClass: "text-[#1b2c38]",
    descriptionClass: "text-[#26343d]",
    layout: "splitReverse",
    imageClass: "w-full max-w-[540px]",
    contentClass: "max-w-[530px]",
    arrowClass: "opacity-40",
    imageAlt: "Digital Marketing Services",
    imageTitle: "Digital Marketing Services",
    tabIconAlt: "Digital Marketing Icon",
    tabIconTitle: "Digital Marketing Services",
  },
];
