import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Check, Send, Sparkles } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { useCreateEnquiry } from "@/features/v1/contact-us/hooks/useCreateEnquiry";
import { getUtmParams } from "@/utils/utmUtils";

// 5 Dedicated Services across exactly 3 Rows
const SERVICE_ROWS = [
  [
    {
      id: "web",
      name: "Web Development",
      colorStyle: {
        borderColor: "var(--teal)",
        color: "var(--foreground)",
      },
      activeStyle: {
        backgroundColor: "var(--teal)",
        borderColor: "var(--teal)",
        color: "#ffffff",
      },
      iconColor: "var(--teal)",
    },
    {
      id: "mobile",
      name: "Mobile App Development",
      colorStyle: {
        borderColor: "var(--blue)",
        color: "var(--foreground)",
      },
      activeStyle: {
        backgroundColor: "var(--blue)",
        borderColor: "var(--blue)",
        color: "#ffffff",
      },
      iconColor: "var(--blue)",
    },
  ],
  [
    {
      id: "marketing",
      name: "Digital Marketing",
      colorStyle: {
        borderColor: "var(--pink)",
        color: "var(--foreground)",
      },
      activeStyle: {
        backgroundColor: "var(--pink)",
        borderColor: "var(--pink)",
        color: "#ffffff",
      },
      iconColor: "var(--pink)",
    },
    {
      id: "software",
      name: "Custom Software",
      colorStyle: {
        borderColor: "var(--green)",
        color: "var(--foreground)",
      },
      activeStyle: {
        backgroundColor: "var(--green)",
        borderColor: "var(--green)",
        color: "#ffffff",
      },
      iconColor: "var(--green)",
    },
  ],
  [
    {
      id: "consulting",
      name: "IT Consulting",
      colorStyle: {
        borderColor: "var(--yellow)",
        color: "var(--foreground)",
      },
      activeStyle: {
        backgroundColor: "var(--yellow)",
        borderColor: "var(--yellow)",
        color: "#ffffff",
      },
      iconColor: "var(--yellow)",
    },
  ],
];

export function LeadCaptureModal() {
  const { isOpen, closeLeadModal } = useLeadModal();
  const createEnquiry = useCreateEnquiry();

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (name.trim().length < 2) {
      setErrorMessage("Name must be at least 2 characters.");
      return;
    }

    // Sanitize and validate mobile number
    let cleanMobile = mobileNumber.replace(/\D/g, "");
    if (cleanMobile.startsWith("91") && cleanMobile.length === 12) {
      cleanMobile = cleanMobile.slice(2);
    } else if (cleanMobile.startsWith("0") && cleanMobile.length === 11) {
      cleanMobile = cleanMobile.slice(1);
    }

    // Must be exactly 10 digits starting with 6, 7, 8, or 9 (rejects dummy 0000000000 etc)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!cleanMobile) {
      setErrorMessage("Please enter your mobile number.");
      return;
    }
    if (!mobileRegex.test(cleanMobile)) {
      setErrorMessage("Please enter a valid 10-digit mobile number (e.g. 9876543210).");
      return;
    }
    if (selectedServices.length === 0) {
      setErrorMessage("Please select at least one service.");
      return;
    }

    const pageRoute = window.location.pathname || "/";
    const utmParams = getUtmParams();

    // Send clean payload with dedicated fields
    createEnquiry.mutate(
      {
        enquiryFullName: name.trim(),
        enquiryMobile: cleanMobile,
        enquiryEmail: "info@ag-solutions.in",
        enquiryMessage: message.trim(),
        enquiryService: selectedServices,
        enquiryRoute: pageRoute,
        utm_medium: utmParams.utm_medium,
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        enquiryFrom: pageRoute,
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
          setErrorMessage("Something went wrong. Please try again or reach out directly.");
        },
      }
    );
  };

  const handleReset = () => {
    setName("");
    setMobileNumber("");
    setMessage("");
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
            className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-card shadow-2xl border border-border z-10 my-4 sm:my-8"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close dialog"
              className="absolute right-4 top-5 p-2 rounded-full text-muted hover:text-foreground hover:bg-muted/10 transition-colors cursor-pointer border-none bg-transparent"
            >
              <X className="h-5 w-5" />
            </button>

            {isSuccess ? (
              <div className="p-6 sm:p-10 text-center py-12 sm:py-14">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-light/40 text-green mb-5 shadow-sm"
                >
                  <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-green" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-dark">Thank You, {name}!</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted max-w-xs mx-auto leading-relaxed">
                  Your request has been received. Our solutions team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <div className="p-5 sm:p-8">
                {/* Header */}
                <div className="text-left pr-8 mb-5">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-pink-light/80 px-3 py-1 text-xs font-bold text-pink uppercase tracking-wider">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Get Free Consultation</span>
                  </div>
                  <h2
                    id="lead-modal-title"
                    className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-dark"
                  >
                    Let's Build Something Great
                  </h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name Input */}
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                      Your Name <span className="text-pink">*</span>
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                    />
                  </div>

                  {/* Mobile Number Input */}
                  <div>
                    <label htmlFor="modal-mobile" className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                      Mobile Number <span className="text-pink">*</span>
                    </label>
                    <input
                      id="modal-mobile"
                      type="tel"
                      required
                      maxLength={10}
                      inputMode="numeric"
                      placeholder="e.g. 9876543210"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                    />
                  </div>

                  {/* Service Selection Grid */}
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-dark mb-2.5">
                      SELECT SERVICE(S) YOU NEED <span className="text-pink">*</span>
                    </span>

                    <div className="flex flex-col gap-2" role="group" aria-label="Select Service(s) You Need">
                      {SERVICE_ROWS.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                          {row.map((service) => {
                            const isSelected = selectedServices.includes(service.name);
                            return (
                              <button
                                type="button"
                                key={service.id}
                                onClick={() => toggleService(service.name)}
                                aria-pressed={isSelected}
                                style={isSelected ? service.activeStyle : service.colorStyle}
                                className={`w-max inline-flex items-center justify-between gap-2.5 px-3.5 py-1.75 rounded-full text-xs sm:text-[13px] font-semibold border-1.5 transition-all duration-200 cursor-pointer select-none ${isSelected ? "shadow-xs" : "bg-transparent hover:opacity-90"
                                  }`}
                              >
                                <span>{service.name}</span>
                                <span
                                  className="w-4 h-4 rounded-full flex items-center justify-center border-1.5 shrink-0 transition-colors"
                                  style={{
                                    borderColor: isSelected ? "#ffffff" : service.iconColor,
                                    backgroundColor: isSelected ? "rgba(255,255,255,0.25)" : "transparent",
                                  }}
                                  aria-hidden="true"
                                >
                                  {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="modal-message" className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="modal-message"
                      rows={3}
                      placeholder="Write a small message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-border bg-light/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all resize-y min-h-[75px]"
                    />
                  </div>

                  {/* Error Message */}
                  {errorMessage && (
                    <p className="text-xs font-semibold text-pink bg-pink-light/60 p-2.5 rounded-xl text-center" role="alert">
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

