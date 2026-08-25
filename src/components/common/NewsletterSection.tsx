import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useCreateNewsletter } from "@/features/newsletter/hooks/useCreateNewsletter";


import { getImageUrl } from "@/utils/imageUrl";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const createNewsletter = useCreateNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    createNewsletter.mutate(
      { newsletter_email: email },
      {
        onSuccess: (data) => {
          setIsSubmitted(true);
          setResponseMessage(data?.message || "Thank you for subscribing!");
          setEmail("");
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        onError: () => {
          setIsSubmitted(true);
          setResponseMessage("Thank you for subscribing to our newsletter!");
          setEmail("");
          setTimeout(() => setIsSubmitted(false), 5000);
        },
      }
    );
  };

  return (
    <section className="relative w-full dark:bg-[#0C1220] bg-[#F8FAFC]  py-3 sm:py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#07134b] via-[#0e2c8d] to-[#1c4ee0] p-4 sm:p-6 lg:px-8 lg:py-5 text-white shadow-2xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-400/20 blur-2xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-indigo-500/15 blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            {/* Left Title & Supporting Text */}
            <div className="text-center lg:text-left shrink-0 max-w-md">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-white leading-snug">
                Subscribe to our Newsletter
              </h2>
              <p className="mt-0.5 text-xs sm:text-[13px] text-blue-100/85 font-normal leading-relaxed">
                Join our newsletter &amp; nurturing communication. We'll send you news and offers.
              </p>
            </div>

            {/* Middle: Email Input & Subscribe Button */}
            <div className="w-full lg:w-auto flex-1 flex items-center justify-center lg:justify-center">
              {isSubmitted ? (
                <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2 text-[#07134b] font-bold shadow-md animate-in fade-in">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1c4ee0]" />
                  <span className="text-xs sm:text-sm">
                    {responseMessage || "Thank you for subscribing!"}
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full max-w-md lg:max-w-lg"
                >
                  <input
                    type="email"
                    required
                    aria-label="Your email address"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={createNewsletter.isPending}
                    className="w-full rounded-full bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-medium shadow-md outline-none border border-white/80 focus:ring-2 focus:ring-blue-300 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={createNewsletter.isPending}
                    className="w-full sm:w-auto shrink-0 rounded-full bg-gradient-to-r from-[#2f55eb] via-[#484beb] to-[#7c3aed] px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer disabled:opacity-50 border-none whitespace-nowrap"
                  >
                    {createNewsletter.isPending ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Graphic Illustration (newslatterImage1.webp) */}
            <div className="hidden md:flex items-center justify-center shrink-0">
              <img
                src={getImageUrl("/images/newslatterImage1.webp")}
                alt="Subscribe to AG Solutions Newsletter"
                title="Subscribe to AG Solutions Newsletter"
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsletterSection;
