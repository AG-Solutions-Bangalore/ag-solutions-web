import { navbarContainerClass } from "./styles";

const socialLinks = [
  {
    label: "Facebook",
    title: "Follow AG Solutions on Facebook",
    image: "/images/home/fb.png",
    href: "https://www.facebook.com/agsolutionsbangalore/",
  },
  {
    label: "Instagram",
    title: "Follow AG Solutions on Instagram",
    image: "/images/home/ig.png",
    href: "#",
  },
  {
    label: "LinkedIn",
    title: "Connect with AG Solutions on LinkedIn",
    image: "/images/home/linkdin.png",
    href: "https://in.linkedin.com/in/garggovind",
  },
] as const;

function TopBar() {
  return (
    <div className="top-bar top-bar-dark hidden border-t-[6px] border-[#34393f] bg-[#151d23] text-white min-[900px]:block">
      <div className={`${navbarContainerClass} flex p-2 items-center`}>
        <div className="top-bar-content flex h-full w-full min-w-0 items-center">
          <div className="top-bar-item flex h-full items-center border-l border-r border-[#2e373f]">
            <a
              href="tel:8867171060"
              title="Call AG Solutions"
              className="px-8 text-white no-underline transition-colors hover:text-[#38b8e8]"
            >
              Mobile: +91-8867171060
            </a>
          </div>
          <div className="top-bar-item flex h-full items-center border-r border-[#2e373f] px-8">
            <a
              href="mailto:info@ag-solutions.in"
              title="Email AG Solutions"
              className="text-white no-underline transition-colors hover:text-[#38b8e8]"
            >
              Email: info@ag-solutions.in
            </a>
          </div>
          <div className="top-bar-item flex h-full items-center border-r border-[#2e373f] px-8 text-white">
            <span>Mon. - Fri.10am - 7pm</span>
          </div>
          <div className="top-bar-item follow_us ml-auto flex h-full items-center gap-2 pl-8 pr-8">
            <span className="text-white">Follow us:</span>
            <div className="socials flex items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="social-item grid h-6 w-6 place-items-center rounded-full transition-transform hover:-translate-y-0.5"
                  href={link.href}
                  aria-label={link.label}
                  title={link.title}
                >
                  <img
                    loading="lazy"
                    width="22"
                    height="22"
                    className="crumina-icon h-[18px] w-[18px] object-contain"
                    src={link.image}
                    alt={link.label}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
