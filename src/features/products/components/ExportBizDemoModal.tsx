import React, { useState, useEffect, useRef, type FormEvent } from "react";
import { useCreateEnquiry } from "@/features/contact-us/hooks/useCreateEnquiry";
import { getUtmParams } from "@/utils/utmUtils";

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
    subject: "EXPORT BIZ Demo Request",
    details: "",
  });
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
      // Prevent body scrolling when modal is open
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
    const utmParams = getUtmParams();
    createEnquiry.mutate(
      {
        enquiryFullName: formData.name,
        enquiryEmail: formData.email,
        enquiryMobile: formData.phone,
        enquiryMessage: `Subject: ${formData.subject}\nCompany: ${formData.company}\nCountry: ${formData.country}\n\nDetails: ${formData.details}`,
        utm_medium: utmParams.utm_medium,
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        enquiryFrom: "export-biz",
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
            subject: "EXPORT BIZ Demo Request",
            details: "",
          });
          
          submitTimerRef.current = window.setTimeout(() => {
            setIsSubmitted(false);
            onClose();
          }, 3000);
        },
      }
    );
  }

  return (
    <div 
      className="fixed inset-0 z-999 overflow-y-auto flex items-start sm:items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#12141a] text-white rounded-[24px] w-full max-w-[600px] p-5 sm:p-10 relative box-border shadow-2xl border border-white/10 my-4 sm:my-0 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-white/50 hover:text-white text-2xl transition-colors cursor-pointer focus:outline-none"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="box-border">
            <input type="hidden" name="enquiryFrom" value="export-biz" />
            <h2 className="text-[28px] sm:text-[32px] font-bold font-space-grotesk tracking-[-0.64px] m-0 mb-[10px] pr-8 text-white box-border">
              Request a Free Demo
            </h2>
            <p className="text-[#9fc1db] text-[15px] leading-relaxed mb-8 font-space-grotesk box-border">
              Discover how EXPORT BIZ can streamline your export team's performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left box-border">
              <div className="sm:col-span-2 box-border">
                <label className="block text-[12.5px] font-mono text-[#9fc1db] uppercase mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-[8px] border border-white/15 bg-white/8 py-[12px] px-4 text-[14.5px] text-white outline-none focus:border-[#e39a3b] transition-all box-border placeholder:text-white/30"
                />
              </div>
              <div className="box-border">
                <label className="block text-[12.5px] font-mono text-[#9fc1db] uppercase mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-[8px] border border-white/15 bg-white/8 py-[12px] px-4 text-[14.5px] text-white outline-none focus:border-[#e39a3b] transition-all box-border placeholder:text-white/30"
                />
              </div>
              <div className="box-border">
                <label className="block text-[12.5px] font-mono text-[#9fc1db] uppercase mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-[8px] border border-white/15 bg-white/8 py-[12px] px-4 text-[14.5px] text-white outline-none focus:border-[#e39a3b] transition-all box-border placeholder:text-white/30"
                />
              </div>
              <div className="box-border">
                <label className="block text-[12.5px] font-mono text-[#9fc1db] uppercase mb-1.5">Company</label>
                <input
                  type="text"
                  required
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-[8px] border border-white/15 bg-white/8 py-[12px] px-4 text-[14.5px] text-white outline-none focus:border-[#e39a3b] transition-all box-border placeholder:text-white/30"
                />
              </div>
              <div className="box-border">
                <label className="block text-[12.5px] font-mono text-[#9fc1db] uppercase mb-1.5">Country</label>
                <input
                  type="text"
                  required
                  placeholder="Your Country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full rounded-[8px] border border-white/15 bg-white/8 py-[12px] px-4 text-[14.5px] text-white outline-none focus:border-[#e39a3b] transition-all box-border placeholder:text-white/30"
                />
              </div>
              <div className="sm:col-span-2 box-border">
                <label className="block text-[12.5px] font-mono text-[#9fc1db] uppercase mb-1.5">Requirements / Details</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your requirements..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full rounded-[8px] border border-white/15 bg-white/8 py-[12px] px-4 text-[14.5px] text-white outline-none resize-none focus:border-[#e39a3b] transition-all box-border placeholder:text-white/30 min-h-[90px]"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-6 box-border">
              <button
                type="submit"
                disabled={createEnquiry.isPending}
                className="bg-[#e39a3b] text-[#000000] font-space-grotesk font-bold text-[14.5px] py-[13px] px-12 rounded-[8px] cursor-pointer hover:scale-[1.02] hover:bg-[#d08b30] active:scale-[0.98] transition-all disabled:opacity-50 box-border w-full sm:w-auto"
              >
                {createEnquiry.isPending ? "SENDING..." : "Book a free demo"}
              </button>
              {createEnquiry.isError && (
                <p className="text-[#ff6b6b] text-[13px] m-0 box-border">
                  Error: Please try again.
                </p>
              )}
            </div>
          </form>
        ) : (
          <div className="py-10 text-center box-border animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-[#2fae73]/12 text-[#2fae73] inline-flex items-center justify-center text-[28px] mb-4 box-border">
              ✓
            </div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-2 text-white box-border">
              Demo Request Sent!
            </h3>
            <p className="text-[#9fc1db] text-[15.5px] m-0 box-border">
              Thank you! Our export product experts will contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
