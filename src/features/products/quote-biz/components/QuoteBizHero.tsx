import React from "react";
import { m } from "framer-motion";
import {
  FileText,
  Zap,
  Eye,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { getImageUrl } from "@/utils/imageUrl";

export const QuoteBizHero: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  const highlights = [
    {
      icon: <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-500/10 border-blue-500/20",
      title: "Professional Quotes",
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      iconBg: "bg-amber-500/10 border-amber-500/20",
      title: "Fast & Easy Creation",
    },
    {
      icon: <Eye className="h-5 w-5 text-teal" />,
      iconBg: "bg-teal/10 border-teal/20",
      title: "Track & Follow Up",
    },
    {
      icon: <Trophy className="h-5 w-5 text-pink" />,
      iconBg: "bg-pink/10 border-pink/20",
      title: "More Deals Won",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 transition-colors duration-200">
      {/* Background Glows & Accent Gradients */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[480px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-pink/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow, Heading, Subtitle, CTAs, Highlights */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 z-10 text-center lg:text-left"
          >
            {/* Small Eyebrow Badge */}
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400 mb-3 sm:mb-4">
              SMART QUOTE MANAGEMENT
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-dark leading-[1.15]">
              Create Quotes.{" "}
              <span className="block text-pink mt-1">
                Win More Business.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              QuoteBiz helps you create professional quotes in minutes, send to customers, track responses, and convert more leads into sales.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => openLeadModal("QuoteBiz Free Trial")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-pink hover:bg-pink-hover text-white font-bold text-sm sm:text-base px-8 py-3.5 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer border-none"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => openLeadModal("QuoteBiz Demo Request")}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-card hover:bg-slate-100 dark:hover:bg-slate-800 text-dark font-bold text-sm sm:text-base px-8 py-3.5 border border-border shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                Book a Demo
              </button>
            </div>

            {/* 4 Feature Highlights Strip */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {highlights.map((item) => (
                <div key={item.title} className="flex flex-col items-center group">
                  <div
                    className={`h-12 w-12 rounded-full ${item.iconBg} border flex items-center justify-center shadow-xs mb-2.5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-dark leading-tight group-hover:text-pink transition-colors">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </m.div>

          {/* Right Column: Hero Graphic Preview */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-2xl flex items-center justify-center p-2 sm:p-4">
              <img
                src={getImageUrl("/images/bizStack/bz2.webp")}
                alt="QuoteBiz Smart Quote Management Laptop & Mobile Preview"
                title="QuoteBiz Smart Quote Management"
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBizHero;
