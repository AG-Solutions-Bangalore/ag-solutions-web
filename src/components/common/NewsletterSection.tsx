import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useCreateNewsletter } from "@/features/v1/newsletter/hooks/useCreateNewsletter";
import { getImageUrl } from "@/utils/imageUrl";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const createNewsletter = useCreateNewsletter();

  const bgUrl = getImageUrl("/images/pattern-bg-breez.jpg");

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
          setResponseMessage("Thank you for subscribing to our industry insights!");
          setEmail("");
          setTimeout(() => setIsSubmitted(false), 5000);
        },
      }
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#00c5cd] py-10 sm:py-12 md:py-14 text-white">
      {/* Background pattern texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-top bg-repeat opacity-90"
        style={{
          backgroundImage: `url('${bgUrl}')`,
          backgroundSize: "450px 330px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Content & Form */}
          <motion.div
            className="lg:col-span-7 xl:col-span-8 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black tracking-tight text-[#132d3e] leading-[1.2] m-0">
              Subscribe to Our Industry Insights
            </h2>
            <p className="text-sm sm:text-base text-white font-medium leading-relaxed max-w-2xl mt-1">
              Get the latest updates on digital transformation, enterprise software, and innovative IT solutions delivered right to your inbox.
            </p>

            <div className="pt-2">
              {isSubmitted ? (
                <div className="inline-flex items-center gap-3 rounded-full bg-white/95 px-6 py-3.5 text-[#132d3e] font-bold shadow-lg animate-in fade-in">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00c5cd]" />
                  <span className="text-sm sm:text-base">
                    {responseMessage || "Thank you for subscribing!"}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
                  <input
                    type="email"
                    required
                    aria-label="Newsletter email address"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={createNewsletter.isPending}
                    className="w-full sm:flex-1 h-14 sm:h-[58px] rounded-full bg-white px-6 text-base sm:text-base text-slate-800 placeholder:text-slate-500 font-normal outline-none shadow-md border-0 focus:ring-3 focus:ring-white/60 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={createNewsletter.isPending}
                    className="h-14 sm:h-[58px] px-8 sm:px-10 rounded-full bg-[#132d3e] hover:bg-[#0c202e] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border-0 shrink-0 disabled:opacity-50"
                  >
                    {createNewsletter.isPending ? "Subscribing..." : "SUBSCRIBE"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="/images/08-subscribe.svg"
              alt="Subscribe to Our Industry Insights"
              title="Subscribe to AG Solutions Industry Insights"
              className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px] h-auto object-contain drop-shadow-md pointer-events-none"
              loading="lazy"
              width="399"
              height="244"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
