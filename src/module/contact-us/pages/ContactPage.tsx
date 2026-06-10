import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import ContactSEO from "../seo/ContactSEO";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { PhoneIcon, MailIcon, CompassIcon } from "@/components/layout/Footer/FooterIcons";

const colorLineSegments = [
  "w-[18%] bg-[#1b2c38]",
  "w-[22%] bg-[#27c7cd]",
  "w-[20%] bg-[#ff3c66]",
  "w-[20%] bg-[#ffcb05]",
  "w-[20%] bg-[#8bd82b]",
] as const;


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", details: "" });
    }, 4000);
  }

  function renderColorLine() {
    return (
      <div
        className="about-color-line relative mt-5 h-[3px] w-[220px] overflow-hidden bg-[#1b2c38]"
        aria-hidden="true"
      >
        <div className="about-color-line-track absolute inset-y-0 left-0 flex w-[440px]">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full w-[220px] shrink-0">
              {colorLineSegments.map((segmentClass) => (
                <span
                  key={`${group}-${segmentClass}`}
                  className={segmentClass}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <ContactSEO />

      {/* 1. Breadcrumbs Header Banner */}
      <section className="relative overflow-hidden bg-[#132d3e] py-24 text-center text-white max-[760px]:py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg-blue-light.jpg')] bg-[length:450px_330px] bg-top opacity-[0.15]" />
        <div className="absolute inset-0 bg-[#132d3e]/55" />
        <div className="relative z-1">
          <h1 className="m-0 text-5xl font-black tracking-normal max-[760px]:text-4xl">
            Contact Us
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2.5 text-base font-semibold text-white/90">
            <Link to="/" className="text-white hover:text-white/80 no-underline transition-colors border-b border-transparent hover:border-white">
              Homepage
            </Link>
            <span className="text-white/70">&bull;</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. Form Section */}
      <AnimatedSection
        className="relative overflow-hidden bg-[#fafafa] py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Have any questions contact form"
      >
        {(isVisible) => (
          <>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/images/pattern-bg-grey.jpg')] bg-[length:450px_330px] bg-top  pointer-events-none" />

            <div className={`${layoutContainerClass} relative z-1`}>
              <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
                <h2 className="m-0 text-[42px] leading-[1.16] font-black tracking-normal max-[980px]:text-[36px] max-[560px]:text-[28px]">
                  Have Any Questions?
                </h2>
                {renderColorLine()}
                <p className="mt-7 text-lg leading-[1.55] text-[#4f5a62] max-[760px]:text-base">
                  Please contact us using the form and we'll get back to you as soon as possible.
                </p>
              </div>

              <div
                className={`home-animated-item mt-10 p-8 md:p-10 bg-white/70 backdrop-blur-xs border border-slate-100 rounded-3xl shadow-xs ${
                  isVisible ? "home-animated-item-visible" : ""
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-full border border-slate-200 bg-white px-6 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/65 focus:border-[#5c60f5] focus:ring-2 focus:ring-[#5c60f5]/20 transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-full border border-slate-200 bg-white px-6 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/65 focus:border-[#5c60f5] focus:ring-2 focus:ring-[#5c60f5]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-full border border-slate-200 bg-white px-6 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/65 focus:border-[#5c60f5] focus:ring-2 focus:ring-[#5c60f5]/20 transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-full border border-slate-200 bg-white px-6 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/65 focus:border-[#5c60f5] focus:ring-2 focus:ring-[#5c60f5]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        required
                        rows={5}
                        placeholder="Details"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/65 focus:border-[#5c60f5] focus:ring-2 focus:ring-[#5c60f5]/20 transition-all resize-none min-h-[140px]"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-6 pt-2">
                      <button
                        type="submit"
                        className="cursor-pointer rounded-full bg-[#8bd82b] hover:bg-[#7bc81f] text-white px-10 py-4 font-bold text-[16px] transition-all hover:shadow-[0_4px_15px_rgba(139,216,43,0.35)] active:scale-[0.98]"
                      >
                        Send Message
                      </button>
                      <p className="text-[13px] leading-relaxed text-[#5c6873] font-normal max-w-sm">
                        Please, let us know any particular things to check and the best time to contact you by phone (if provided).
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 animate-scaleUp">
                      <svg className="h-10 w-10 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1b2c38] mb-2">Message Sent!</h3>
                    <p className="text-[#4f5a62] text-[16px]">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </AnimatedSection>

      {/* 3. Get In Touch Section */}
      <AnimatedSection
        className="bg-white pt-20"
        ariaLabel="Get in touch contact details"
      >
        {(isVisible) => (
          <>
            <div className={`${layoutContainerClass} pb-14`}>
              <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
                <h2 className="m-0 text-[42px] leading-[1.16] font-black tracking-normal text-[#1b2c38] max-[980px]:text-[36px] max-[560px]:text-[28px]">
                  Get In Touch
                </h2>
                {renderColorLine()}
              </div>
            </div>

            {/* Dark Info Band */}
            <div
              className={`bg-[#151d23] py-14 text-[#9daab7] home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4`}>
                {/* Phone Card */}
                <div className="flex items-center gap-5">
                  <div className="flex-none">
                    <PhoneIcon />
                  </div>
                  <div>
                    <a
                      href="tel:8867171060"
                      className="block text-xl font-bold text-white no-underline hover:text-[#ffca06] transition-colors"
                    >
                      +91 8867171060
                    </a>
                    <span className="block mt-1.5 text-sm font-normal text-[#9daab7]">
                      Mon-Fri 9am-6pm
                    </span>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-center gap-5">
                  <div className="flex-none">
                    <MailIcon />
                  </div>
                  <div>
                    <a
                      href="mailto:info@ag-solutions.in"
                      className="block text-xl font-bold text-white no-underline hover:text-[#ff3c66] transition-colors"
                    >
                      info@ag-solutions.in
                    </a>
                    <span className="block mt-1.5 text-sm font-normal text-[#9daab7]">
                      online support
                    </span>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex items-center gap-5">
                  <div className="flex-none">
                    <CompassIcon />
                  </div>
                  <div>
                    <span className="block text-xl font-bold text-white">
                      Address
                    </span>
                    <span className="block mt-1.5 text-sm font-normal leading-relaxed text-[#9daab7]">
                      Jayanagara 9th Block, Bengaluru, 560069
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div
              className={`w-full h-[480px] relative overflow-hidden home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=911,%2028th%20Main%20Rd,%20Corporation%20Colony,%20Jayanagara%209th%20Block,%20Jayanagar,%20Bengaluru,%20Karnataka%20560041&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                title="AG Solutions Office Google Map Location"
              />
            </div>
          </>
        )}
      </AnimatedSection>
    </>
  );
}
