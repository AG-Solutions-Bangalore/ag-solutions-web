import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

type RequirementDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RequirementDrawer({ isOpen, onClose }: RequirementDrawerProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", details: "" });
  const submitTimerRef = useRef<number | null>(null);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  if (typeof document === "undefined") return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitTimerRef.current !== null) {
      window.clearTimeout(submitTimerRef.current);
    }

    setIsSubmitted(true);
    submitTimerRef.current = window.setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", details: "" });
      onClose();
    }, 3000);
  }

  const drawerContent = (
    <div className={`fixed inset-0 z-[2000] transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/55 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div
        className={`absolute right-0 top-0 bottom-0 flex h-full w-full max-w-[460px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Send your requirement"
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close drawer"
          className="absolute top-6 left-0 -translate-x-1/2 z-[2010] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-[4px] border-white bg-[#5c60f5] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#5c60f5]"
        >
          <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto px-9 py-10 flex flex-col">
          {/* Brand Logo Header */}
          <div className="flex shrink-0 items-center gap-2.5">
            <img
              className="h-[50px] w-[74px] object-contain"
              src="/images/logo.png"
              alt="AG Solutions Logo"
              title="AG Solutions"
            />
            <span className="leading-none text-[#1a2936]">
              <span className="block text-[28px] font-normal tracking-normal">
                <span className="font-black">AG</span>Solutions
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase text-[#68737c]">
                Single Click Solution
              </span>
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-[15px] leading-relaxed text-[#5c6873] font-normal">
            We are a team of believers, thinkers, and creators. We are customer-centric and crazy enough to innovate
            and create new opportunities..
          </p>

          {/* Conditional Form / Success State */}
          <div className="mt-8 flex-1 flex flex-col justify-center">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3
                  id="requirement-drawer-title"
                  className="text-[22px] font-bold text-[#1a2b3c] tracking-tight mb-6"
                >
                  Send Your Requirement
                </h3>

                <div>
                  <input
                    type="text"
                    required
                    aria-label="Your name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-full bg-[#f4f3ee] border-0 px-6 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/60 focus:bg-[#ebeae4] focus:ring-2 focus:ring-[#5c60f5] transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    aria-label="Mobile number"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-full bg-[#f4f3ee] border-0 px-6 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/60 focus:bg-[#ebeae4] focus:ring-2 focus:ring-[#5c60f5] transition-all"
                  />
                </div>

                <div>
                  <textarea
                    required
                    rows={4}
                    aria-label="Requirement details"
                    placeholder="Details"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full rounded-2xl bg-[#f4f3ee] border-0 px-6 py-4 text-[15px] text-[#1d2d3b] outline-none placeholder:text-[#34414c]/60 focus:bg-[#ebeae4] focus:ring-2 focus:ring-[#5c60f5] transition-all resize-none min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-full bg-[#1b2d3e] text-white py-4 font-bold text-[16px] transition-all hover:bg-[#12202e] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1b2d3e] focus:ring-offset-2 active:scale-[0.98]"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 animate-scaleUp">
                  <svg className="h-10 w-10 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#1a2b3c] mb-2">Thank you!</h4>
                <p className="text-[#5c6873] text-[15px]">
                  Your requirement has been sent successfully. We will contact you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
}
