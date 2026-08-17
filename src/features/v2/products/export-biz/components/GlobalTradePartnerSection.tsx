import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const tradePoints = [
  "Expert team with in-depth export knowledge",
  "Strong network of international partners",
  "Transparent processes and clear communication",
  "Customized solutions for your business needs",
];

export const GlobalTradePartnerSection: React.FC = () => {
  return (
    <section className="bg-background py-8 sm:py-12 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Text & Bullets (PDF Page 12) */}
          <motion.div
            className="lg:col-span-6 z-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-teal mb-2">
              WHY CHOOSE AG SOLUTIONS
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-dark leading-tight">
              Your Trusted Partner <br />
              <span className="text-pink">in Global Trade</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              With our expertise and strong global network, we simplify the complexities of export business and help you focus on what you do best — growing your business.
            </p>

            {/* Bullets */}
            <div className="mt-5 sm:mt-6 space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              {tradePoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-dark">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Cargo / Logistics Image with Exact Floating Squares & Outline (Matching PDF & Reference) */}
          <motion.div
            className="relative lg:col-span-6 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Left Teal Outline Curved Shape */}
              <div className="absolute -left-5 sm:-left-7 top-1/4 bottom-1/4 w-12 sm:w-16 border-2 border-teal rounded-l-3xl pointer-events-none z-10 hidden sm:block" />

              {/* Floating Lime Green Square (Bottom Left) */}
              <div className="absolute -left-4 sm:-left-6 bottom-10 sm:bottom-14 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-[#84cc16] shadow-xl transition-transform duration-300 hover:scale-110" />

              {/* Main Cargo / Shipping Yard Photo with Organic Cut */}
              <div className="relative z-10 overflow-hidden rounded-tl-[50px] sm:rounded-tl-[70px] rounded-br-[50px] sm:rounded-br-[70px] rounded-tr-[24px] rounded-bl-[24px] shadow-2xl transition-transform duration-500 hover:scale-[1.01] aspect-[16/10] bg-slate-900 border border-border">
                <img
                  src="/images/exportbiz/Shipping Yard.png"
                  alt="Global Trade & Export Logistics"
                  title="Global Trade Logistics by AG Solutions"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback to ship image if Shipping Yard not found
                    (e.target as HTMLImageElement).src = "/images/exportbiz/ship.png";
                  }}
                />
              </div>

              {/* Floating Pink Square (Top Right) */}
              <div className="absolute -right-4 sm:-right-6 top-8 sm:top-10 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-pink shadow-xl transition-transform duration-300 hover:scale-110" />

              {/* Dot Matrix Pattern (Right Side) */}
              <div className="absolute -right-6 top-28 hidden sm:grid grid-cols-4 gap-1.5 opacity-30 z-10 pointer-events-none">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-teal" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTradePartnerSection;
