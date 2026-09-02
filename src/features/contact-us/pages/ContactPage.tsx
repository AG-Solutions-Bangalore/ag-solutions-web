import { getUtmParams } from "@/utils/utmUtils";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  Settings,
  ShieldCheck,
  Users,
  Zap,
  Check,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useCreateEnquiry } from "../hooks/useCreateEnquiry";
import ContactSEO from "../seo/ContactSEO";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import { getImageUrl } from "@/utils/imageUrl";

// 5 Dedicated Services in 2 Rows matching PDF Page 15 & 16
const SERVICE_ROWS = [
  [
    {
      id: "web",
      name: "Web Development",
      unselectedClass: "border-teal border-2 text-foreground bg-card hover:bg-teal-light/20",
      selectedClass: "bg-teal text-white border-teal border-2 shadow-xs scale-[1.02]",
      circleUnselected: "border-teal border-2 text-transparent",
      circleSelected: "bg-white border-2 border-white text-teal",
      checkColor: "text-teal",
    },
    {
      id: "mobile",
      name: "Mobile App Development",
      unselectedClass: "border-blue border-2 text-foreground bg-card hover:bg-blue-light/20",
      selectedClass: "bg-blue text-white border-blue border-2 shadow-xs scale-[1.02]",
      circleUnselected: "border-blue border-2 text-transparent",
      circleSelected: "bg-white border-2 border-white text-blue",
      checkColor: "text-blue",
    },
  ],
  [
    {
      id: "marketing",
      name: "Digital Marketing",
      unselectedClass: "border-pink border-2 text-foreground bg-card hover:bg-pink-light/20",
      selectedClass: "bg-pink text-white border-pink border-2 shadow-xs scale-[1.02]",
      circleUnselected: "border-pink border-2 text-transparent",
      circleSelected: "bg-white border-2 border-white text-pink",
      checkColor: "text-pink",
    },
    {
      id: "software",
      name: "Custom Software",
      unselectedClass: "border-green border-2 text-foreground bg-card hover:bg-green-light/20",
      selectedClass: "bg-green text-white border-green border-2 shadow-xs scale-[1.02]",
      circleUnselected: "border-green border-2 text-transparent",
      circleSelected: "bg-white border-2 border-white text-green",
      checkColor: "text-green",
    },
    {
      id: "consulting",
      name: "IT Consulting",
      unselectedClass: "border-yellow border-2 text-foreground bg-card hover:bg-yellow-light/20",
      selectedClass: "bg-yellow text-white border-yellow border-2 shadow-xs scale-[1.02]",
      circleUnselected: "border-yellow border-2 text-transparent",
      circleSelected: "bg-white border-2 border-white text-yellow",
      checkColor: "text-yellow",
    },
  ],
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    details: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const submitTimerRef = useRef<number | null>(null);
  const createEnquiry = useCreateEnquiry();

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
    if (formError) {
      setFormError("");
    }
  };

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim()) {
      setFormError("Please enter your name.");
      return;
    }

    let cleanMobile = formData.mobile.replace(/\D/g, "");
    if (cleanMobile.startsWith("91") && cleanMobile.length === 12) {
      cleanMobile = cleanMobile.slice(2);
    } else if (cleanMobile.startsWith("0") && cleanMobile.length === 11) {
      cleanMobile = cleanMobile.slice(1);
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!cleanMobile || !mobileRegex.test(cleanMobile)) {
      setFormError("Please enter a valid 10-digit mobile number (e.g. 9876543210).");
      return;
    }

    if (selectedServices.length === 0) {
      setFormError("Please select at least one service.");
      return;
    }

    const utmParams = getUtmParams();
    createEnquiry.mutate(
      {
        enquiryFullName: formData.name.trim(),
        enquiryEmail: formData.email.trim() || "info@ag-solutions.in",
        enquiryMobile: cleanMobile,
        enquiryMessage: formData.details.trim(),
        enquiryService: selectedServices,
        utm_medium: utmParams.utm_medium,
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        enquiryFrom: "Contact",
      },
      {
        onSuccess: () => {
          if (submitTimerRef.current !== null) {
            window.clearTimeout(submitTimerRef.current);
          }

          setIsSubmitted(true);
          setFormData({ name: "", mobile: "", email: "", details: "" });
          setSelectedServices([]);
          submitTimerRef.current = window.setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        onError: () => {
          setFormError("Something went wrong. Please try again or contact us directly.");
        },
      }
    );
  }

  // Exact Google Maps Link specified on PDF Page 18
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/place/AG+Solutions/@12.9207136,77.5923704,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae150995555555:0x440eaf1d21e4db01!8m2!3d12.9207136!4d77.5923704!16s%2Fg%2F11p67397gv?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D&utm_source=chatgpt.com";

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=12.9207136,77.5923704&t=&z=17&ie=UTF8&iwloc=&output=embed";

  return (
    <>
      <ContactSEO />

      {/* Main UI Layout Container */}
      <div className="w-full bg-background py-8 lg:py-14 font-sans text-dark transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">

          {/* ==========================================
              SECTION 1: HERO HEADER & OFFICE SHOWCASE
          ========================================== */}
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal">
                <span className="h-2 w-2 rounded-full bg-teal shrink-0" />
                CONTACT US
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
                Let’s Build Something <br />
                <span className="text-pink">Amazing Together!</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-muted font-normal leading-relaxed">
                Have a project in mind or want to learn more about our services? We'd love to hear from you.
              </p>

              {/* Quick Contact List */}
              <div className="pt-2 space-y-4">

                {/* Phone */}
                <div className="flex items-start gap-3.5 group">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">Call Us</h3>
                    <a
                      href="tel:+918867171060"
                      title="Call AG Solutions"
                      className="text-sm font-bold text-dark hover:text-teal transition-colors"
                    >
                      +91 8867171060
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 group">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-full bg-pink text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">Email Us</h3>
                    <a
                      href="mailto:info@ag-solutions.in"
                      title="Email AG Solutions"
                      className="text-sm font-bold text-dark hover:text-pink transition-colors break-all"
                    >
                      info@ag-solutions.in
                    </a>
                  </div>
                </div>

                {/* Address (Clickable Hyperlink opening Google Maps as per PDF Page 18) */}
                <div className="flex items-start gap-3.5 group">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-full bg-green text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">Visit Us</h3>
                    <a
                      href={googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open AG Solutions on Google Maps"
                      className="text-sm font-bold text-dark hover:text-teal transition-colors leading-snug inline-flex items-center gap-1.5 no-underline group/link"
                    >
                      <span>Jayanagara 9th Block, Bengaluru, 560069</span>
                      <ExternalLink className="h-3.5 w-3.5 text-teal shrink-0 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* Hours: Updated to 9:30 AM – 6:30 PM as per PDF Page 17 */}
                <div className="flex items-start gap-3.5 group">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-full bg-yellow text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">Business Hours</h3>
                    <p className="text-sm font-bold text-dark">Mon - Fri: 9:30 AM – 6:30 PM</p>
                    <p className="text-xs text-muted font-medium">Sat - Sun: Closed</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Reception Photo with Exact Floating Square Accents (Matching About Us Section) */}
            <div className="relative lg:col-span-7 flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-lg">
                {/* Dot Matrix Pattern */}
                <div className="absolute -left-6 -bottom-4 hidden sm:grid grid-cols-4 gap-1.5 opacity-30 z-10 pointer-events-none">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-teal" />
                  ))}
                </div>

                {/* Soft Pill Accent (Top-Left) */}
                <div className="absolute -left-4 top-8 z-10 hidden sm:block h-6 w-14 rounded-full bg-teal/20 backdrop-blur-xs" />

                {/* Floating Teal Square (Left Middle) */}
                <div className="absolute -left-4 sm:-left-6 top-1/3 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-md bg-teal shadow-xl transition-transform duration-300 hover:scale-110" />

                {/* Main Reception Photo with Cut-out Geometry */}
                <div className="relative z-10 overflow-hidden rounded-tl-[50px] sm:rounded-tl-[70px] rounded-br-[50px] sm:rounded-br-[70px] rounded-tr-[24px] rounded-bl-[24px] shadow-2xl transition-transform duration-500 hover:scale-[1.01] aspect-[16/11] sm:aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-border">
                  <img
                    src={getImageUrl("/images/ag-sl-desk.webp")}
                    alt="AG Solutions Reception Office"
                    title="AG Solutions Office and Reception"
                    width={600}
                    height={450}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Floating Pink Square (Top Right) */}
                <div className="absolute -right-4 sm:-right-6 top-6 sm:top-10 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-md bg-pink shadow-xl transition-transform duration-300 hover:scale-110" />

                {/* Floating Yellow Square (Bottom Right) */}
                <div className="absolute -right-4 sm:-right-6 bottom-6 sm:bottom-10 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-md bg-yellow shadow-xl transition-transform duration-300 hover:scale-110" />
              </div>
            </div>

          </div>


          {/* ==========================================
              SECTION 2: MESSAGE FORM WITH SERVICE PILLS (PDF Page 15 & 16)
          ========================================== */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

            {/* Left: Contact Form with Multi-Select Service Pills */}
            <div className="lg:col-span-7 rounded-3xl bg-card p-5 sm:p-8 shadow-sm border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-dark">Let's Build Something Great</h2>
                    <p className="mt-1 text-xs sm:text-sm text-muted">
                      Fill out the form below and our team will get back to you shortly.
                    </p>
                  </div>
                  <div className="h-1 w-12 rounded-full bg-pink" />
                </div>

                {isSubmitted ? (
                  <div className="my-8 rounded-2xl bg-green-light/40 border border-green-border p-6 sm:p-8 text-center animate-in fade-in">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-white mb-3 shadow-md">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-dark">Message Sent!</h3>
                    <p className="text-sm text-muted mt-1">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* YOUR NAME */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                        YOUR NAME <span className="text-pink">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        aria-label="Your name"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                      />
                    </div>

                    {/* 2-Column Grid for MOBILE NUMBER and EMAIL ID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* MOBILE NUMBER */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                          MOBILE NUMBER <span className="text-pink">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          inputMode="numeric"
                          aria-label="Mobile number"
                          placeholder="e.g. 9876543210"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                          className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                        />
                      </div>

                      {/* EMAIL ID */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                          EMAIL ID
                        </label>
                        <input
                          type="email"
                          aria-label="Email address"
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                        />
                      </div>
                    </div>

                    {/* SELECT SERVICE(S) YOU NEED (PDF Page 15 & 16 Multi-Select Pills) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                        SELECT SERVICE(S) YOU NEED <span className="text-pink">*</span>
                      </label>

                      <div className="flex flex-col gap-2.5">
                        {SERVICE_ROWS.map((row, rowIndex) => (
                          <div key={rowIndex} className="flex gap-3 flex-wrap items-center">
                            {row.map((service) => {
                              const isSelected = selectedServices.includes(service.name);
                              return (
                                <button
                                  type="button"
                                  key={service.id}
                                  onClick={() => toggleService(service.name)}
                                  aria-pressed={isSelected}
                                  className={`inline-flex items-center justify-between gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer select-none ${isSelected
                                      ? service.selectedClass
                                      : service.unselectedClass
                                    }`}
                                >
                                  <span>{service.name}</span>
                                  <span
                                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${isSelected
                                        ? service.circleSelected
                                        : service.circleUnselected
                                      }`}
                                    aria-hidden="true"
                                  >
                                    {isSelected && <Check className={`w-2.5 h-2.5 stroke-[3.5] ${service.checkColor}`} />}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                        MESSAGE
                      </label>
                      <textarea
                        rows={3}
                        aria-label="Your message"
                        placeholder="Write a small message"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground outline-none resize-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                      />
                    </div>

                    {/* Form Error Message */}
                    {formError && (
                      <p className="text-xs font-semibold text-pink bg-pink-light/60 p-2.5 rounded-xl text-center">
                        {formError}
                      </p>
                    )}

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={createEnquiry.isPending}
                        className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-pink px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-pink-hover hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 w-full sm:w-auto border-none"
                      >
                        <span>{createEnquiry.isPending ? "Sending..." : "Send Message"}</span>
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>

                      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-muted">
                        <ShieldCheck className="h-4 w-4 text-green" />
                        Your information is safe with us.
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: "We're Here to Help" Card */}
            <div className="lg:col-span-5 rounded-3xl bg-card dark:bg-slate-900/90 p-5 sm:p-8 border border-border flex flex-col justify-between">
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-dark">We’re Here to Help</h2>
                  <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                    Whether you have a question, need support, or want to discuss a project, our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal border border-teal-border/40">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-dark">Quick Response</h3>
                      <p className="text-xs text-muted mt-0.5">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-pink-light text-pink border border-pink-border/40">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-dark">Expert Support</h3>
                      <p className="text-xs text-muted mt-0.5">Get advice from our experienced engineering team.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-light text-yellow border border-yellow-border/40">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-dark">Customized Solutions</h3>
                      <p className="text-xs text-muted mt-0.5">We provide solutions tailored to your business needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Follow Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/ag-solutions-104223427/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-xs transition-transform duration-300 hover:scale-110"
                    title="AG Solutions on LinkedIn"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61591878191618"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-xs transition-transform duration-300 hover:scale-110"
                    title="AG Solutions on Facebook"
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DA1F2] text-white shadow-xs transition-transform duration-300 hover:scale-110"
                    title="AG Solutions on X (Twitter)"
                  >
                    <FaTwitter className="h-4 w-4" />
                  </a>

                  <a
                    href="https://www.instagram.com/ag_solutions_official/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-yellow via-pink to-purple-600 text-white shadow-xs transition-transform duration-300 hover:scale-110"
                    title="AG Solutions on Instagram"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>


          {/* ==========================================
              SECTION 3: GOOGLE MAPS LOCATION
          ========================================== */}
          <div className="relative overflow-hidden rounded-3xl bg-card p-3 shadow-xs border border-border flex flex-col sm:block">
            <div className="relative h-[260px] sm:h-[340px] w-full overflow-hidden rounded-2xl">
              <iframe
                title="AG Solutions Location – Jayanagara, Bengaluru"
                src={mapEmbedUrl}
                className="h-full w-full border-0 grayscale-[20%] contrast-[105%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Desktop Float Card */}
              <div className="hidden sm:block absolute left-4 top-4 z-10 max-w-xs rounded-2xl bg-card/95 backdrop-blur-md p-4 shadow-xl border border-border">
               
                <p className="mt-1 text-xs font-bold text-pink">AG Solutions</p>
                <p className="text-xs text-muted font-medium leading-relaxed mt-0.5">
                  Jayanagara 9th Block, Bengaluru, Karnataka - 560069, India
                </p>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="AG Solutions Location – Jayanagara, Bengaluru"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-teal px-3.5 py-1.5 text-xs font-bold text-teal transition-all duration-300 hover:bg-teal hover:text-white no-underline"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Mobile Location Details Card */}
            <div className="block sm:hidden mt-3 rounded-2xl bg-card p-4 border border-border text-left">

              <p className="mt-1 text-xs font-bold text-pink">AG Solutions</p>
              <p className="text-xs text-muted font-medium leading-relaxed mt-0.5">
                Jayanagara 9th Block, Bengaluru, Karnataka - 560069, India
              </p>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                title="AG Solutions Location – Jayanagara, Bengaluru"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-teal text-white px-4 py-2 text-xs font-bold transition-all duration-300 no-underline w-full"
              >
                <span>Get Directions</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>


          {/* Dynamic Testimonials */}
          <DynamicTestimonialSection route="contact" />

          {/* Dynamic FAQs */}
          <DynamicFaqSection slug="contact" />

        </div>
      </div>
    </>
  );
}