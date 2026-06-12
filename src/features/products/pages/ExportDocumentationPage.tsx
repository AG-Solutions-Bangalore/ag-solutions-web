import React, { useState, type FormEvent } from "react";
import { PageHero, SectionTitle } from "@/components/layout";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import { SEO } from "@/components/seo/SEO";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const features: readonly FeatureItem[] = [
  {
    title: "Automated Document Generation",
    description:
      "Generate crucial export documents including Commercial Invoices, Packing Lists, Certificates of Origin, and Shipping Bills in a single click with pre-populated records.",
    icon: "📄",
  },
  {
    title: "Scheme Claims & Return Tracker",
    description:
      "Efficiently track and claim government export incentives, duty drawbacks, and scheme claims outstanding. Never miss a claim deadline again.",
    icon: "💰",
  },
  {
    title: "Monthly Reporting & Audits",
    description:
      "Compile comprehensive reports and monthly returns automatically. Retain digital audit trails to satisfy international customs and compliance regulations.",
    icon: "📊",
  },
];

export const ExportDocumentationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    details: "I am interested in the Export Documentation software demo.",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", details: "" });
    }, 4000);
  }

  return (
    <>
      <SEO
        title="Export Documentation Software - AG Solutions"
        description="Optimize your compliance, reporting, claims, and customs processes with AG Solutions' Export Documentation and Management Solutions (EDMS)."
        keywords={["export documentation", "EDMS", "shipping bills", "customs compliance"]}
      />

      <PageHero
        title="Export Documentation & Management Solutions"
        bgImage="/images/pattern-bg-grey.jpg"
        textColorClass="text-[#1b2c38]"
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Export Documentation" },
        ]}
      />

      {/* 2. Intro Section */}
      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="EDMS product introduction"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
            {/* Left Image */}
            <div className={`home-animated-item flex justify-center ${isVisible ? "home-animated-item-visible" : ""}`}>
              <img
                src="/images/home/ems_web.png"
                alt="Export solutions preview"
                className="w-full max-w-135 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
                loading="lazy"
              />
            </div>

            {/* Right Copy */}
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`} style={{ transitionDelay: "100ms" }}>
              <SectionTitle
                title="Accelerate Your Export Logistics"
                align="left"
                titleClassName="text-[36px] font-black leading-tight text-[#1a2b3c] max-[560px]:text-2xl"
              />
              <p className="mt-8 text-base leading-relaxed text-[#4f5a62]">
                With EDMS (Export Documentation and Management Solutions), manage all your export documentations, reporting, monthly returns, and scheme claims outstanding in an organized and central platform. Save time, reduce data errors, and remain strictly compliant with customs policies.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#435fc2] text-xl font-bold">✓</span>
                  <p className="m-0 text-sm text-[#4f5a62]">Reduced documentation time by up to 70%.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#435fc2] text-xl font-bold">✓</span>
                  <p className="m-0 text-sm text-[#4f5a62]">Live status tracking on outstanding duty refunds and government claims.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#435fc2] text-xl font-bold">✓</span>
                  <p className="m-0 text-sm text-[#4f5a62]">Seamless integration with ERP and CRM invoicing systems.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* 3. Features Section */}
      <AnimatedSection
        className="bg-[#fafafa] py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="EDMS features list"
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

      {/* 4. Contact Form Section */}
      <AnimatedSection
        className="bg-white py-20 border-t border-slate-100 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="EDMS requirement inquiry"
      >
        {(isVisible) => (
          <div className={`${layoutContainerClass} grid grid-cols-1 md:grid-cols-2 gap-12`}>
            {/* Left Info Column */}
            <div className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}>
              <SectionTitle
                title="Request a Demo"
                align="left"
                titleClassName="text-[38px] leading-[1.16] font-black tracking-normal max-[760px]:text-[30px] text-[#1a2b3c]"
              />
              <p className="mt-7 text-[17px] font-semibold leading-[1.55] text-[#1a2b3c]">
                Discover how EDMS can transform your export team's performance.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#5c6873] font-normal">
                Submit your query below and our product experts will schedule a personalized walk-through demo showing how you can save logistics, time, and claim money.
              </p>
            </div>

            {/* Right Form Column */}
            <div
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      aria-label="Your name"
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
                      aria-label="Phone number"
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
                      aria-label="Email address"
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
                      aria-label="Details"
                      placeholder="Details"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full rounded-[2rem] border-none bg-[#f1f1eb] px-7 py-5 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/50 focus:bg-[#eaeae3] transition-all resize-none min-h-[130px]"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                    <button
                      type="submit"
                      className="cursor-pointer rounded-full bg-[#93d034] text-white hover:bg-[#82c024] px-10 py-4 font-bold text-[15px] tracking-wider transition-all active:scale-[0.98] shrink-0"
                    >
                      REQUEST DEMO
                    </button>
                    <p className="text-[12px] leading-relaxed text-[#7a8894] font-normal max-w-[280px]">
                      We respect your privacy. Our team will contact you back via phone/email within 1 working day.
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
                  <h3 className="text-xl font-bold text-[#1b2c38] mb-2">Request Sent!</h3>
                  <p className="text-[#4f5a62] text-[15px]">
                    Thank you! Your demo request has been submitted successfully.
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

export default ExportDocumentationPage;
