import { useEffect, useRef, useState, type FormEvent } from "react";
import { useCreateNewsletter } from "@/features/newsletter/hooks/useCreateNewsletter";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "../styles";
import { CompassIcon, MailIcon, PhoneIcon } from "./FooterIcons";
import {FaInstagram,FaFacebookF,FaLinkedinIn,} from "react-icons/fa";
import axios from "axios";


type FooterProps = {
  bg?: string;
  newsletterBg?: string;
  // organizationName?: string;
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

function Footer({
  bg,
  newsletterBg = "teal",
  // organizationName = "South India Garments Association",
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
  const submitTimerRef = useRef<number | null>(null);
  const [emailValue, setEmailValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const createNewsletter = useCreateNewsletter();

  const isLime = (bg || newsletterBg)?.includes("lime");
  const bgFileName = isLime ? "pattern-bg-lime.jpg" : "pattern-bg-breez.jpg";
  const bgUrl = `/images/${bgFileName}`;

  useEffect(() => {
 const footer = document.getElementById("footer-contact");

  if (!footer) return;

  const strokes = Array.from(
    footer.querySelectorAll<SVGElement>('[data-animated-stroke="true"]'),
  );
  console.log("Number of strokes:", strokes.length);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    strokes.forEach((stroke) => {
      stroke.style.opacity = "1";
      stroke.style.strokeDashoffset = "0";
    });
    return;
  }

  let hasAnimated = false;

  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log(
  "Observer fired:",
  entry.isIntersecting,
  entry.intersectionRatio
);
      if (!entry.isIntersecting || hasAnimated) return;

      hasAnimated = true;

      const animations = strokes.map((stroke) => {
        const dashLength = stroke.dataset.dashLength ?? "0";
        const delay =
          Number.parseFloat(stroke.dataset.drawDelay ?? "0") || 0;

        stroke.style.strokeDasharray = dashLength;
        stroke.style.strokeDashoffset = dashLength;
        stroke.style.opacity = "0";
        stroke.classList.add("drawing-stroke");

        const animation = stroke.animate(
          [
            {
              opacity: 0,
              strokeDashoffset: dashLength,
            },
            {
              opacity: 1,
              offset: 0.12,
            },
            {
              opacity: 1,
              strokeDashoffset: "0",
            },
          ],
          {
            delay,
            duration: 1100,
            easing: "ease-out",
            fill: "forwards",
          }
        );
        animation.onfinish = () => {
  stroke.classList.remove("drawing-stroke");
};

return animation;
      });

      observer.disconnect();
    },
    {
      threshold: 0.35,
    }
  );

  observer.observe(footer);

  return () => observer.disconnect();
}, []);
console.log("ANIMATE CALLED");
  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
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
    if (!emailValue) return;
    createNewsletter.mutate(
      { newsletter_email: emailValue },
      {
        onSuccess: (data) => {
          if (submitTimerRef.current !== null) {
            window.clearTimeout(submitTimerRef.current);
          }

          setResponseMessage(
            data.message || "Thank you! You have successfully subscribed to our newsletter."
          );
          setIsSubmitted(true);
          setEmailValue("");
          submitTimerRef.current = window.setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
      }
    );
  }

  return (
    <>
      <AnimatedSection
        className="relative h-76 overflow-hidden pt-15 text-left text-base leading-[25.6px] text-[#495057] max-[980px]:h-auto"
        ariaLabel="Subscribe to our newsletter"
      >
        {/* Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-top bg-repeat"
          style={{
            backgroundImage: `url('${bgUrl}')`,
            backgroundSize: "450px 330px",
          }}
        />
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
            {!isSubmitted ? (
              <form method="post" className="w-full" onSubmit={handleSubmit}>
                <div className="mt-[36px] flex h-[60px] w-[669px] items-center gap-3.5 p-0 text-left text-base leading-[25.6px] text-[#495057] max-[980px]:w-full max-[640px]:h-auto max-[640px]:flex-col max-[640px]:items-stretch">
                  <input
                    className="block h-[60px] w-[502px] min-w-0 rounded-full border-0 bg-white px-[30px] py-[16.384px] text-base leading-[25.6px] text-[#495057] outline-none placeholder:text-[#34414c] placeholder:opacity-100 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white/65 max-[640px]:w-full"
                    type="email"
                    name="uemail"
                    id="uemail"
                    required
                    aria-label="Newsletter email address"
                    placeholder="Your email address"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    disabled={createNewsletter.isPending}
                  />
                  <button
                    id="butnew"
                    type="submit"
                    disabled={createNewsletter.isPending}
                    className="h-15 flex-[0_0_153px] cursor-pointer rounded-full border-0 bg-[#132d3e] text-base font-bold text-white transition-[transform,background-color] duration-150 hover:-translate-y-px hover:bg-[#0f2534] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white/65 max-[640px]:w-full max-[640px]:flex-auto disabled:opacity-50"
                  >
                    {createNewsletter.isPending ? "..." : "SUBSCRIBE"}
                  </button>
                </div>
                {createNewsletter.isError && (() => {
                  const error = createNewsletter.error;
                  const errorMessage =
                    axios.isAxiosError(error) && error.response?.data?.message
                      ? error.response.data.message
                      : "Error: Please try again.";

                  return (
                    <p className="text-red-500 text-sm mt-2 font-semibold">
                      {errorMessage}
                    </p>
                  );
                })()}
              </form>
            ) : (
              <p className="mt-[36px] block text-left text-base leading-[25.6px] font-bold text-[#8bd82b]">
                {responseMessage}
              </p>
            )}
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
      </AnimatedSection>

      <div className="bg-[#151d23] text-[#9daab7]">
        <footer
          id="site-footer"
          ref={footerRef}
          className="w-full text-[#9daab7]"
        >
          <div className={layoutContainerClass}>
            {/* <div className="pt-4 text-center text-[22px] leading-[1.4] font-normal text-[#a5b0bd] max-[980px]:pt-5 max-[640px]:text-xl">
              {organizationName}
            </div> */}
            {/* <div className="mt-[15px] h-px bg-[#29343d]" /> */}
           <div id="footer-contact" className="flex justify-between gap-8 pt-12 pb-11 max-[1200px]:gap-6 max-[980px]:grid max-[980px]:grid-cols-1 max-[980px]:gap-8 max-[980px]:pt-9 max-[980px]:pb-10">
              <div className="group flex min-w-0 items-center gap-7 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5">
                <div className="transition-all duration-500 group-hover:scale-110 group-hover:text-[#66c61c]">
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

              <div className="group flex min-w-0 items-center gap-7 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5">
                <div className="transition-all duration-500 group-hover:scale-110 group-hover:text-[#66c61c]">
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

              <div className="group flex min-w-0 items-center gap-7 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5">
                <div className="transition-all duration-500 group-hover:scale-110 group-hover:text-[#66c61c]">
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
          <div className="border-t border-white/10">
  <div
    className={`${layoutContainerClass} flex flex-col items-center justify-between gap-6 py-8 md:flex-row`}
  >
    <div>
      <h4 className="text-lg font-semibold text-white">
        Follow AG Solutions
      </h4>
      <p className="mt-1 text-sm text-gray-400">
        Stay connected with us on social media.
      </p>
    </div>

    <div className="flex items-center gap-4">
      <a
        href="https://www.instagram.com/ag_solutions_official/"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600"
      >
        <FaInstagram  className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61591878191618"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
      >
        <FaFacebookF  className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
      </a>

      <a
        href="https://www.linkedin.com/in/ag-solutions-104223427/"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600"
      >
        <FaLinkedinIn  className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  </div>
</div>
          <div className="bg-[#11181c] py-5 text-center font-light">
            <div className={layoutContainerClass}>
              <p className="text-sm text-gray-400">
  © {copyrightYear} {copyrightName}. All Rights Reserved.
</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
