import { getUtmParams } from "@/utils/utmUtils";
import {
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  Headphones,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  Settings,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useCreateEnquiry } from "../hooks/useCreateEnquiry";
import ContactSEO from "../seo/ContactSEO";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitTimerRef = useRef<number | null>(null);
  const createEnquiry = useCreateEnquiry();

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const utmParams = getUtmParams();
    createEnquiry.mutate(
      {
        enquiryFullName: formData.name,
        enquiryEmail: formData.email,
        enquiryMobile: formData.phone,
        enquiryMessage: `Subject: ${formData.subject}\n\nDetails: ${formData.details}`,
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
          setFormData({ name: "", email: "", phone: "", subject: "", details: "" });
          submitTimerRef.current = window.setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
      }
    );
  }

  // Google Maps Links & Embed URL
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=12.9207136,77.5923704&t=&z=17&ie=UTF8&iwloc=&output=embed";

  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/place/AG+Solutions/@12.9207136,77.5897955,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae150995555555:0x440eaf1d21e4db01!8m2!3d12.9207136!4d77.5923704!16s%2Fg%2F11p67397gv?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <>
      <ContactSEO />

      {/* Main UI Layout Container */}
      <div className="w-full bg-background py-12 lg:py-20 font-sans text-dark transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* ==========================================
              SECTION 1: HERO HEADER & OFFICE SHOWCASE
          ========================================== */}
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal">
                <span className="h-2 w-2 rounded-full bg-teal shrink-0" />
                CONTACT US
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
                Let’s Build Something <br />
                <span className="text-pink">Amazing Together!</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-muted font-normal leading-relaxed">
                Have a project in mind or want to learn more about our services? We'd love to hear from you.
              </p>

              {/* Quick Contact List */}
              <div className="pt-2 space-y-4 sm:space-y-5">

                {/* Phone */}
                <div className="flex items-start gap-3.5 sm:gap-4 group">
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
                <div className="flex items-start gap-3.5 sm:gap-4 group">
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

                {/* Address */}
                <div className="flex items-start gap-3.5 sm:gap-4 group">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-full bg-green text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">Visit Us</h3>
                    <p className="text-sm font-bold text-dark leading-snug">
                      Jayanagara 9th Block, Bengaluru, 560069
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 sm:gap-4 group">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-full bg-yellow text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted uppercase tracking-wide">Business Hours</h3>
                    <p className="text-sm font-bold text-dark">Mon - Fri: 10:00 AM - 7:00 PM</p>
                    <p className="text-xs text-muted font-medium">Sat - Sun: Closed</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Hero Image with Asymmetric Cut & 4 Rotating Squares */}
            <div className="relative lg:col-span-7 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative w-full max-w-lg lg:max-w-none">

                {/* Background Soft Aura */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-teal/15 via-pink/10 to-yellow/15 blur-2xl pointer-events-none z-0" />

                {/* Asymmetric Image Frame */}
                <div className="relative z-10 overflow-hidden rounded-tl-[60px] sm:rounded-tl-[100px] rounded-br-[50px] sm:rounded-br-[80px] rounded-tr-[24px] sm:rounded-tr-[30px] rounded-bl-[30px] sm:rounded-bl-[40px] shadow-2xl bg-card border border-border">
                  <img
                    src="/images/ag-sl-desk.png"
                    alt="AG Solutions Reception Office"
                    title="AG Solutions Office and Reception"
                    className="h-[280px] sm:h-[380px] lg:h-[480px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                {/* Rotating Accent Squares */}
                <div className="absolute -left-2 sm:-left-4 top-8 z-20 hidden sm:block">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-teal shadow-lg animate-spin [animation-duration:12s]" />
                </div>
                <div className="absolute -left-2 top-2/3 z-20 hidden sm:block">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-pink shadow-lg animate-[spin_10s_linear_infinite_reverse]" />
                </div>
                <div className="absolute -right-2 sm:-right-3 top-1/3 z-20 hidden sm:block">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-yellow shadow-lg animate-spin [animation-duration:15s]" />
                </div>
                <div className="absolute -right-2 bottom-6 z-20 hidden sm:block">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-green shadow-lg animate-[spin_12s_linear_infinite_reverse]" />
                </div>

                {/* Dot Matrix Accent */}
                <div className="absolute -right-8 bottom-20 z-0 hidden lg:grid grid-cols-4 gap-2 opacity-50">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-teal" />
                  ))}
                </div>

              </div>
            </div>

          </div>


          {/* ==========================================
              SECTION 2: MESSAGE FORM & "WE'RE HERE TO HELP"
          ========================================== */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

            {/* Left: Contact Form (Connected to API) */}
            <div className="lg:col-span-7 rounded-3xl bg-card p-5 sm:p-10 shadow-sm border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-dark">Send Us a Message</h2>
                    <p className="mt-1 text-xs sm:text-sm text-muted">
                      Fill out the form below and our team will get back to you shortly.
                    </p>
                  </div>
                  <div className="h-1 w-12 rounded-full bg-pink" />
                </div>

                {isSubmitted ? (
                  <div className="my-8 rounded-2xl bg-green-light/40 border border-green-border p-6 sm:p-8 text-center animate-fadeIn">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-white mb-3 shadow-md">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-dark">Message Sent!</h3>
                    <p className="text-sm text-muted mt-1">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="enquiryFrom" value="Contact" />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-dark mb-1.5">Full Name</label>
                        <input
                          type="text"
                          required
                          aria-label="Your full name"
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-border bg-light/50 px-4 py-3 text-base sm:text-sm text-foreground outline-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-semibold text-dark mb-1.5">Email Address</label>
                        <input
                          type="email"
                          required
                          aria-label="Email address"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border bg-light/50 px-4 py-3 text-base sm:text-sm text-foreground outline-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-semibold text-dark mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          required
                          aria-label="Phone number"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-border bg-light/50 px-4 py-3 text-base sm:text-sm text-foreground outline-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-semibold text-dark mb-1.5">Subject</label>
                        <input
                          type="text"
                          required
                          aria-label="Subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-xl border border-border bg-light/50 px-4 py-3 text-base sm:text-sm text-foreground outline-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                        />
                      </div>
                    </div>

                    {/* Message Details */}
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Your Message</label>
                      <textarea
                        rows={4}
                        required
                        aria-label="Message details"
                        placeholder="Details..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full rounded-xl border border-border bg-light/50 px-4 py-3 text-base sm:text-sm text-foreground outline-none resize-none transition-all focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={createEnquiry.isPending}
                        className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-pink px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-pink-hover hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 w-full sm:w-auto border-none"
                      >
                        <span>{createEnquiry.isPending ? "Sending..." : "Send Message"}</span>
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>

                      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-muted">
                        <ShieldCheck className="h-4 w-4 text-green" />
                        Your information is safe with us.
                      </div>
                    </div>

                    {/* API Error Message */}
                    {createEnquiry.isError && (
                      <p className="text-pink text-xs font-semibold pt-2">
                        Error: Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Right: "We're Here to Help" Card */}
            <div className="lg:col-span-5 rounded-3xl bg-card dark:bg-slate-900/90 p-5 sm:p-10 border border-border flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-dark">We’re Here to Help</h2>
                  <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                    Whether you have a question, need support, or want to discuss a project, our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-5 pt-2">
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
              <div className="pt-6 sm:pt-8 border-t border-border mt-6 sm:mt-8">
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-4">
                  Follow Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/ag-solutions-104223427/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                    title="AG Solutions on LinkedIn"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61591878191618"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                    title="AG Solutions on Facebook"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                    title="AG Solutions on X (Twitter)"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.instagram.com/ag_solutions_official/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-yellow via-pink to-purple-600 text-white shadow-sm transition-transform duration-300 hover:scale-110"
                    title="AG Solutions on Instagram"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>


          {/* ==========================================
              SECTION 3: GOOGLE MAPS LOCATION
          ========================================== */}
          <div className="relative overflow-hidden rounded-3xl bg-card p-3 shadow-sm border border-border flex flex-col sm:block">
            <div className="relative h-[280px] sm:h-[380px] w-full overflow-hidden rounded-2xl">
              <iframe
                title="AG Solutions Location – Jayanagara, Bengaluru"
                src={mapEmbedUrl}
                className="h-full w-full border-0 grayscale-[20%] contrast-[105%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Desktop Float Card */}
              <div className="hidden sm:block absolute left-4 top-4 z-10 max-w-xs rounded-2xl bg-card/95 backdrop-blur-md p-5 shadow-xl border border-border">
                <h3 className="text-base font-extrabold text-dark">Our Location</h3>
                <p className="mt-2 text-xs font-bold text-pink">AG Solutions</p>
                <p className="text-xs text-muted font-medium leading-relaxed mt-1">
                  Jayanagara 9th Block, Bengaluru, Karnataka - 560069, India
                </p>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="AG Solutions Location – Jayanagara, Bengaluru"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-teal px-4 py-2 text-xs font-bold text-teal transition-all duration-300 hover:bg-teal hover:text-white no-underline"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Mobile Location Details Card below map to avoid blocking map interaction */}
            <div className="block sm:hidden mt-3 rounded-2xl bg-card p-4 border border-border text-left">
              <h3 className="text-sm font-extrabold text-dark">Our Location</h3>
              <p className="mt-1 text-xs font-bold text-pink">AG Solutions</p>
              <p className="text-xs text-muted font-medium leading-relaxed mt-1">
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


          {/* ==========================================
              SECTION 4: FAQS
          ========================================== */}
          <div className="space-y-8 pt-4">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-pink">
                FAQS
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-dark sm:text-3xl lg:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal mb-4 border border-teal-border/30">
                  <HelpCircle className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-sm font-bold text-dark leading-snug">
                  How quickly will you respond to my inquiry?
                </h3>
                <p className="mt-2 text-xs text-muted font-normal leading-relaxed">
                  We typically respond to all inquiries within 24 business hours.
                </p>
              </div>

              <div className="group rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-light text-pink mb-4 border border-pink-border/30">
                  <FileText className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-sm font-bold text-dark leading-snug">
                  Can I get a customized quote for my project?
                </h3>
                <p className="mt-2 text-xs text-muted font-normal leading-relaxed">
                  Yes! Just share your requirements and we'll provide a tailored quote.
                </p>
              </div>

              <div className="group rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-light text-green mb-4 border border-green-border/30">
                  <Calendar className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-sm font-bold text-dark leading-snug">
                  What information do you need to get started?
                </h3>
                <p className="mt-2 text-xs text-muted font-normal leading-relaxed">
                  A brief about your project, goals, timeline, and any specific requirements.
                </p>
              </div>

              <div className="group rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-light text-yellow mb-4 border border-yellow-border/30">
                  <Headphones className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-sm font-bold text-dark leading-snug">
                  Do you provide ongoing support after delivery?
                </h3>
                <p className="mt-2 text-xs text-muted font-normal leading-relaxed">
                  Yes, we offer maintenance and support packages to keep your business running smoothly.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}