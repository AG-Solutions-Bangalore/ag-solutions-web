import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Sparkles } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { useCreateEnquiry } from "@/features/v1/contact-us/hooks/useCreateEnquiry";
import { getUtmParams } from "@/utils/utmUtils";

const AVAILABLE_SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "Export Biz",
  "Custom Software",
  "Cloud & DevOps",
  "IT Consulting",
  "UI/UX Design",
] as const;

export function LeadCaptureModal() {
  const { isOpen, pageContext, closeLeadModal } = useLeadModal();
  const createEnquiry = useCreateEnquiry();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }
    if (selectedServices.length === 0) {
      setErrorMessage("Please select at least one service.");
      return;
    }

    const utmParams = getUtmParams();
    const servicesList = selectedServices.join(", ");
    const formattedMessage = `Requested Services: [${servicesList}] | Source Page: ${pageContext}`;

    createEnquiry.mutate(
      {
        enquiryFullName: name.trim(),
        enquiryMobile: phone.trim(),
        enquiryEmail: email.trim() || "no-email-provided@ag-solutions.in",
        enquiryMessage: formattedMessage,
        utm_medium: utmParams.utm_medium,
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        enquiryFrom: pageContext,
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          setTimeout(() => {
            handleReset();
            closeLeadModal();
          }, 3500);
        },
        onError: () => {
          setErrorMessage("Something went wrong. Please try again or reach out via WhatsApp.");
        },
      }
    );
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSelectedServices([]);
    setIsSuccess(false);
    setErrorMessage("");
  };

  const handleClose = () => {
    handleReset();
    closeLeadModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-white shadow-2xl border border-slate-100 z-10 my-4 sm:my-8"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close dialog"
              className="absolute right-4 top-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer border-none bg-transparent"
            >
              <X className="h-5 w-5" />
            </button>

            {isSuccess ? (
              <div className="p-6 sm:p-10 text-center py-12 sm:py-14">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-50 text-green mb-5 shadow-sm"
                >
                  <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-green" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Thank You, {name}!</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                  Your request has been received from our <strong className="text-teal font-bold">{pageContext}</strong>. Our solutions team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <div className="p-5 sm:p-8">
                {/* Header */}
                <div className="text-left pr-8">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-pink-light/80 px-3 py-1 text-xs font-bold text-pink uppercase tracking-wider">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Get Free Consultation</span>
                  </div>
                  <h2
                    id="lead-modal-title"
                    className="mt-2 text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900"
                  >
                    Let's Build Something Great
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    Connecting from: <span className="font-semibold text-teal">{pageContext}</span>
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-2">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-pink">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp Number <span className="text-pink">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                    />
                  </div>

                  {/* Optional Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                    />
                  </div>

                  {/* Multi-Select Services Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Select Service(s) You Need <span className="text-pink">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 max-h-40 sm:max-h-48 overflow-y-auto pr-1">
                      {AVAILABLE_SERVICES.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`flex items-center justify-between text-left px-2.5 sm:px-3 py-2 rounded-xl text-[11px] sm:text-xs font-medium border transition-all cursor-pointer ${isSelected
                              ? "border-teal bg-teal-light text-teal font-bold shadow-xs"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                          >
                            <span className="truncate">{srv}</span>
                            {isSelected && (
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal ml-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Error Message */}
                  {errorMessage && (
                    <p className="text-xs font-semibold text-pink bg-pink-light/60 p-2.5 rounded-xl text-center">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={createEnquiry.isPending}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink to-pink-hover text-white py-3.5 px-6 font-bold text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer border-none"
                    >
                      {createEnquiry.isPending ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default LeadCaptureModal;
