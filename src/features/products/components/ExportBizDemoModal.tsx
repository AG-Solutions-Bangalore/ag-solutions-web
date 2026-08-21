import React, { useState, useEffect, useRef, type FormEvent } from "react";
import { useCreateEnquiry } from "@/features/contact-us/hooks/useCreateEnquiry";

import { getUtmParams } from "@/utils/utmUtils";
import { Sparkles, X, CheckCircle2 } from "lucide-react";

interface ExportBizDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportBizDemoModal: React.FC<ExportBizDemoModalProps> = ({ isOpen, onClose }) => {
  const createEnquiry = useCreateEnquiry();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    country: "",
    details: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitTimerRef = useRef<number | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const cleanMobile = formData.phone.replace(/\D/g, "");
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!cleanMobile || !mobileRegex.test(cleanMobile)) {
      setErrorMessage("Please enter a valid 10-digit mobile number (e.g. 9876543210).");
      return;
    }

    const utmParams = getUtmParams();
    const pageRoute = window.location.pathname || "/products/export-biz";

    const structuredDetails = [
      formData.company ? `Company: ${formData.company}` : "",
      formData.country ? `Country: ${formData.country}` : "",
      formData.details ? `Details: ${formData.details}` : "",
    ].filter(Boolean).join("\n");

    createEnquiry.mutate(
      {
        enquiryFullName: formData.name.trim(),
        enquiryEmail: formData.email.trim() || "info@ag-solutions.in",
        enquiryMobile: cleanMobile,
        enquiryMessage: structuredDetails || "Requesting Export Biz demo",
        enquiryService: "Export Biz Software",
        enquiryRoute: pageRoute,
        utm_medium: utmParams.utm_medium,
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        enquiryFrom: pageRoute,
      },
      {
        onSuccess: () => {
          if (submitTimerRef.current !== null) {
            window.clearTimeout(submitTimerRef.current);
          }

          setIsSubmitted(true);
          setFormData({
            name: "",
            phone: "",
            email: "",
            company: "",
            country: "",
            details: "",
          });
          
          submitTimerRef.current = window.setTimeout(() => {
            setIsSubmitted(false);
            onClose();
          }, 3500);
        },
        onError: () => {
          setErrorMessage("Something went wrong. Please try again or contact us directly.");
        },
      }
    );
  }

  return (
    <div 
      className="fixed inset-0 z-[999] overflow-y-auto flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-card shadow-2xl border border-border z-10 my-4 sm:my-8 p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-5 p-2 rounded-full text-muted hover:text-foreground hover:bg-muted/10 transition-colors cursor-pointer border-none bg-transparent"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-left pr-8 mb-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-pink-light/80 px-3 py-1 text-xs font-bold text-pink uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Export Biz Demo</span>
              </div>
              <h2
                id="demo-modal-title"
                className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-dark"
              >
                Request a Free Demo
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Discover how EXPORT BIZ can streamline your export team's performance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                  Full Name <span className="text-pink">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                    Mobile Number <span className="text-pink">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    inputMode="numeric"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. India, UAE"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                  Requirements / Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your requirements..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all resize-none min-h-[80px]"
                />
              </div>

              {errorMessage && (
                <p className="text-xs font-semibold text-destructive mt-1">
                  {errorMessage}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={createEnquiry.isPending}
                  className="w-full rounded-xl bg-pink py-3 text-sm font-bold text-white shadow-md hover:bg-pink-hover hover:shadow-lg active:scale-98 transition-all disabled:opacity-50 cursor-pointer border-none"
                >
                  {createEnquiry.isPending ? "Submitting..." : "Book a Free Demo"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-6 text-center py-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-light/40 text-green mb-5 shadow-sm">
              <CheckCircle2 className="h-8 w-8 text-green" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-dark">
              Demo Request Sent!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted max-w-xs mx-auto leading-relaxed">
              Thank you! Our export product team will get in touch with you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
