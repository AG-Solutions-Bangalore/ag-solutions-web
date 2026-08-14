import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, Send, Sparkles } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    // Simulate API call for newsletter subscription
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 py-14 sm:py-16 text-white border-t border-slate-800">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-pink/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="rounded-3xl bg-slate-800/80 border border-slate-700/60 p-6 sm:p-12 shadow-xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left info */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-pink/20 px-3.5 py-1 text-xs font-bold text-pink uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>STAY AHEAD IN TECH</span>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Subscribe to Our Industry Insights
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Get the latest updates on digital transformation, enterprise software, and innovative IT solutions delivered right to your inbox.
            </p>
          </div>

          {/* Right form */}
          <div className="lg:col-span-6">
            {isSubmitted ? (
              <div className="flex items-center gap-3 rounded-2xl bg-green-950/50 border border-green-500/40 p-4 text-green-300">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-green-400" />
                <span className="text-sm font-semibold">
                  Thank you for subscribing! We'll keep you updated with our latest news.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-slate-600 bg-slate-900/90 pl-11 pr-4 py-3.5 text-base sm:text-sm text-white placeholder:text-slate-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal to-teal-hover text-white px-6 py-3.5 font-bold text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border-none shrink-0 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsletterSection;
