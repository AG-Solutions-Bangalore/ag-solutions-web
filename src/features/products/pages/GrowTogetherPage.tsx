import React, { useState, type FormEvent, useRef } from "react";
import { useCreateEnquiry } from "@/features/contact-us/hooks/useCreateEnquiry";
import { PageHero, SectionTitle } from "@/components/layout";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { SEO } from "@/components/seo/SEO";
import { getUtmParams } from "@/utils/utmUtils";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const features: readonly FeatureItem[] = [
  {
    title: "Kanban Task Boards",
    description:
      "Manage projects, assign tickets, and set due dates on highly visual task boards. Gain instant transparency on team progress and blockers.",
    icon: "📋",
  },
  {
    title: "Secure Client Portals",
    description:
      "Invite your customers to review milestones, share files, and approve deliverables directly within secure, dedicated client portals.",
    icon: "🤝",
  },
  {
    title: "OKR & Goal Tracker",
    description:
      "Align remote and hybrid teams. Define quarterly objectives, track key metrics in real-time, and celebrate completed milestones together.",
    icon: "🎯",
  },
];

export const GrowTogetherPage: React.FC = () => {
  const createEnquiry = useCreateEnquiry();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    details: "I am interested in a demo of Grow Together collaboration software.",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitTimerRef = useRef<number | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const utmParams = getUtmParams();
    createEnquiry.mutate(
      {
        enquiryFullName: formData.name,
        enquiryEmail: formData.email,
        enquiryMobile: formData.phone,
        enquiryMessage: formData.details,
        utm_medium: utmParams.utm_medium,
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        enquiryFrom: "Grow Together",
      },
      {
        onSuccess: () => {
          if (submitTimerRef.current !== null) {
            window.clearTimeout(submitTimerRef.current);
          }

          setIsSubmitted(true);
          setFormData({ name: "", phone: "", email: "", details: "" });
          submitTimerRef.current = window.setTimeout(() => {
            setIsSubmitted(false);
          }, 4000);
        },
      }
    );
  }

  return (
    <>
      <SEO
        title="Grow Together Workspace Software - AG Solutions"
        description="Align your hybrid teams, track OKRs, customize task boards, and share client portals with Grow Together workspace by AG Solutions."
        keywords={["collaboration tool", "team productivity", "client portal", "Grow Together"]}
      />

      <PageHero
        title="Grow Together Solutions"
        bgImage="/images/pattern-bg-grey.jpg"
        textColorClass="text-[#1b2c38]"
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Grow Together" },
        ]}
      />

      {/* 2. Intro Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Grow Together introduction"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 items-center`}>
            {/* Left Image */}
            <div className={`home-animated-item flex justify-center ${isVisible ? "home-animated-item-visible" : ""}`}>
              <img
                src="/images/home/services_mob.png"
                alt="Grow Together collaboration mockups"
                className="w-full max-w-135 object-contain"
                loading="lazy"
              />
            </div>

            {/* Right Copy */}
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`} style={{ transitionDelay: "100ms" }}>
              <SectionTitle
                title="Align Your Teams and Clients"
                align="left"
                titleClassName="text-[36px] font-black leading-tight text-[#1a2b3c] max-[560px]:text-2xl"
              />
              <p className="mt-8 text-base leading-relaxed text-[#4f5a62]">
                Grow Together is a secure team productivity and client relations workspace. Combining goal alignment tracking, flexible task boards, real-time message feeds, and custom client portals, it helps modern organizations streamline productivity, align resources, and drive corporate success.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#13875f] text-xl font-bold">✓</span>
                  <p className="m-0 text-sm text-[#4f5a62]">Centralized communication that replaces endless daily status meetings.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#13875f] text-xl font-bold">✓</span>
                  <p className="m-0 text-sm text-[#4f5a62]">Dedicated guest access allowing clients to view and approve progress easily.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#13875f] text-xl font-bold">✓</span>
                  <p className="m-0 text-sm text-[#4f5a62]">Goal-focused workflow system linking task lists directly to key OKRs.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 3. Features Section */}
      <AnimatedSection
        className="bg-[#fafafa] py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Grow Together features"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="Product Features"
              align="center"
              titleClassName="text-[38px] leading-tight font-black text-[#1a2b3c]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />

            <div
              className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="bg-white border border-slate-100 p-8 rounded-none flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feat.icon}</div>
                  <h4 className="m-0 text-lg font-bold text-[#1a2b3c]">{feat.title}</h4>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[#5c6873] font-normal flex-1">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 4. Inquiry Form */}
      <AnimatedSection
        className="bg-white py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Grow Together inquiry form"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-2 gap-12`}>
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
              <SectionTitle
                title="Get Started With Grow Together"
                align="left"
                titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]"
              />
              <p className="mt-7 text-[17px] font-semibold leading-[1.55] text-[#1a2b3c]">
                Unlock next-level collaboration for your organization.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#5c6873] font-normal">
                Align task workflows, objectives, and client communications in one centralized dashboard. Request a live product demo to see Grow Together in action today.
              </p>
            </div>

            <div
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="enquiryFrom" value="Grow Together" />
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-full border-none bg-[#f1f1eb] px-7 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-full border-none bg-[#f1f1eb] px-7 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-full border-none bg-[#f1f1eb] px-7 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={4}
                      placeholder="Details"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full rounded-[2rem] border-none bg-[#f1f1eb] px-7 py-5 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all resize-none min-h-[130px]"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        disabled={createEnquiry.isPending}
                        className="cursor-pointer rounded-full bg-[#93d034] text-white hover:bg-[#82c024] px-10 py-4 font-bold text-[15px] tracking-wider transition-all active:scale-[0.98] shrink-0 disabled:opacity-50"
                      >
                        {createEnquiry.isPending ? "SENDING..." : "SEND INQUIRY"}
                      </button>
                      {createEnquiry.isError && (
                        <p className="text-red-500 text-sm">
                          Error: Please try again.
                        </p>
                      )}
                    </div>
                    <p className="text-[12px] leading-relaxed text-[#7a8894] font-normal max-w-[280px]">
                      Our team will reach out to schedule a live product walk-through shortly.
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
                  <h3 className="text-xl font-bold text-[#1b2c38] mb-2">Thank you!</h3>
                  <p className="text-[#4f5a62] text-[15px]">
                    Your inquiry has been submitted successfully.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatedSection>
    </>
  );
};

export default GrowTogetherPage;
