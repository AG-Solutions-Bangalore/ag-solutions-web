import { useEffect, useRef, type FormEvent } from "react";
import { layoutContainerClass } from "../styles";
import { CompassIcon, MailIcon, PhoneIcon } from "./FooterIcons";
type FooterBg = "teal" | "lime";

type FooterProps = {
  bg?: FooterBg;
  newsletterBg?: FooterBg;
  organizationName?: string;
  phone?: string;
  phoneHref?: string;
  supportHours?: string;
  email?: string;
  supportLabel?: string;
  addressTitle?: string;
  address?: string;
  copyrightYear?: number;
  copyrightName?: string;
};

const newsletterBgClass: Record<FooterBg, string> = {
  teal: "bg-[#09c7ca] before:opacity-[0.82]",
  lime: "bg-[#80df00] before:opacity-[0.22]",
};

function Footer({
  bg,
  newsletterBg = "teal",
  organizationName = "South India Garments Association",
  phone = "+91 8867171060",
  phoneHref = "tel:8867171060",
  supportHours = "Mon-Fri 10am-7pm",
  email = "info@ag-solutions.in",
  supportLabel = "online support",
  addressTitle = "Address",
  address = "Jayanagara 9th Block, Bengaluru, 560069",
  copyrightYear = 2025,
  copyrightName = "AG Solutions",
}: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);
  const activeBg = bg ?? newsletterBg;

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return undefined;
    }

    const strokes = Array.from(
      footer.querySelectorAll<SVGElement>('[data-animated-stroke="true"]'),
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      strokes.forEach((stroke) => {
        stroke.style.opacity = "1";
        stroke.style.strokeDashoffset = "0";
      });

      return undefined;
    }

    const animations = strokes.map((stroke) => {
      const dashLength = stroke.dataset.dashLength ?? "0";
      const delay = Number.parseFloat(stroke.dataset.drawDelay ?? "0") || 0;

      stroke.style.strokeDasharray = dashLength;
      stroke.style.strokeDashoffset = dashLength;
      stroke.style.opacity = "0";

      return stroke.animate(
        [
          { opacity: 0, strokeDashoffset: dashLength },
          { opacity: 1, offset: 0.12 },
          { opacity: 1, strokeDashoffset: "0" },
        ],
        {
          delay,
          duration: 1100,
          easing: "ease",
          fill: "forwards",
        },
      );
    });

    return () => {
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: copyrightName,
    image: "/images/08-subscribe.svg",
    telephone: phone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jayanagara 9th Block",
      addressLocality: "Bengaluru",
      postalCode: "560069",
    },
    url: "https://www.ag-solutions.in/",
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <section
        className={`relative h-76 overflow-hidden pt-15 text-left text-base leading-[25.6px] text-[#495057] before:pointer-events-none before:absolute before:inset-0 before:bg-[url('/images/pattern-bg-breez.jpg')] before:bg-[length:450px_330px] before:bg-top before:content-[''] max-[980px]:h-auto ${newsletterBgClass[activeBg]}`}
      >
        <div
          className={`${layoutContainerClass} relative z-1 flex h-full items-start justify-between max-[980px]:h-auto`}
        >
          <div className="mb-6 h-55 w-174.75 px-3.75 text-left text-base leading-[25.6px] text-[#495057] max-[980px]:h-auto max-[980px]:w-full max-[980px]:pb-[62px]">
            <h4 className="m-0 mb-[5px] block h-[36px] w-[669px] p-0 text-left text-[28px] leading-[36.4px] font-bold text-[#1b2c38] max-[980px]:h-auto max-[980px]:w-full">
              Subscribe to our Newsletter
            </h4>
            <p className="m-0 block h-[25px] w-[669px] p-0 text-left text-base leading-[25.6px] font-normal text-white max-[980px]:h-auto max-[980px]:w-full">
              <span className="font-bold">Join Our Newsletter</span> &amp;
              Marketing Communication. We'll send you news and offers.
            </p>
            <form method="post" className="w-full" onSubmit={handleSubmit}>
              <div className="mt-[36px] flex h-[60px] w-[669px] items-center gap-3.5 p-0 text-left text-base leading-[25.6px] text-[#495057] max-[980px]:w-full max-[640px]:h-auto max-[640px]:flex-col max-[640px]:items-stretch">
                <input
                  className="block h-[60px] w-[502px] min-w-0 rounded-full border-0 bg-white px-[30px] py-[16.384px] text-base leading-[25.6px] text-[#495057] outline-none placeholder:text-[#34414c] placeholder:opacity-100 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white/65 max-[640px]:w-full"
                  type="email"
                  name="uemail"
                  id="uemail"
                  placeholder="Your email address"
                />
                <button
                  id="butnew"
                  type="submit"
                  className="h-[60px] flex-[0_0_153px] cursor-pointer rounded-full border-0 bg-[#132d3e] text-base font-bold text-white transition-[transform,background-color] duration-150 hover:-translate-y-px hover:bg-[#0f2534] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white/65 max-[640px]:w-full max-[640px]:flex-auto"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
          <div
            className="pointer-events-none mt-auto block h-[244px] w-[399px] px-[15px] text-left text-base leading-[25.6px] text-[#495057] max-[980px]:hidden"
            aria-hidden="true"
          >
            <img
              className="h-auto w-full"
              src="/images/08-subscribe.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      <footer
        id="site-footer"
        ref={footerRef}
        className="bg-[#151d23] text-[#9daab7]"
      >
        <div className={layoutContainerClass}>
          <div className="pt-4 text-center text-[22px] leading-[1.4] font-normal text-[#a5b0bd] max-[980px]:pt-5 max-[640px]:text-xl">
            {organizationName}
          </div>
          <div className="mt-[15px] h-px bg-[#29343d]" />
          <div className="flex justify-between gap-8 pt-12 pb-11 max-[1200px]:gap-6 max-[980px]:grid max-[980px]:grid-cols-1 max-[980px]:gap-8 max-[980px]:pt-9 max-[980px]:pb-10">
            <div className="flex min-w-0 items-center gap-7 max-[1200px]:gap-6 max-[980px]:gap-7 max-[640px]:gap-4">
              <div className="flex flex-[0_0_50.4px] items-center justify-center max-[640px]:flex-[0_0_43.2px]">
                <PhoneIcon />
              </div>
              <div className="min-w-0">
                <a
                  href={phoneHref}
                  className="mb-2 block text-xl leading-[1.15] font-normal text-white no-underline hover:text-[#f6fbff] max-[1200px]:text-lg max-[640px]:[overflow-wrap:anywhere]"
                >
                  {phone}
                </a>
                <p className="m-0 text-base leading-[1.35] font-normal text-[#99a4b0] max-[1200px]:text-[15px]">
                  {supportHours}
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-7 max-[1200px]:gap-6 max-[980px]:gap-7 max-[640px]:gap-4">
              <div className="flex flex-[0_0_50.4px] items-center justify-center max-[640px]:flex-[0_0_43.2px]">
                <MailIcon />
              </div>
              <div className="min-w-0">
                <a
                  href={`mailto:${email}`}
                  className="mb-2 block text-xl leading-[1.15] font-normal text-white no-underline hover:text-[#f6fbff] max-[1200px]:text-lg max-[640px]:[overflow-wrap:anywhere]"
                >
                  {email}
                </a>
                <p className="m-0 text-base leading-[1.35] font-normal text-[#99a4b0] max-[1200px]:text-[15px]">
                  {supportLabel}
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-7 max-[1200px]:gap-6 max-[980px]:gap-7 max-[640px]:gap-4">
              <div className="flex flex-[0_0_50.4px] items-center justify-center max-[640px]:flex-[0_0_43.2px]">
                <CompassIcon />
              </div>
              <div className="min-w-0">
                <div className="mb-2 block text-xl leading-[1.15] font-normal text-white max-[1200px]:text-lg max-[640px]:[overflow-wrap:anywhere]">
                  {addressTitle}
                </div>
                <p className="m-0 whitespace-nowrap text-base leading-[1.35] font-normal text-[#99a4b0] max-[1200px]:text-[15px] max-[980px]:whitespace-normal">
                  {address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="bg-[#11181c] py-5 text-center font-light">
          <div className={layoutContainerClass}>
            Copyright&copy; {copyrightYear} {copyrightName} all right reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
