import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "BizStock has simplified our inventory management. We save time, reduce errors, and our growth has doubled!",
    name: "Ravi Sharma",
    role: "Retail Business Owner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The reports and analytics help us make better decisions. Highly recommended for any business.",
    name: "Sneha Patel",
    role: "Operations Manager",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Managing multiple warehouses was never this easy. BizStock is a game-changer!",
    name: "Arjun Mehta",
    role: "Supply Chain Head",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
];

export const BizStockTestimonials: React.FC = () => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal mb-3">
            TRUSTED BY CUSTOMERS SAY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Trusted by Businesses Worldwide
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-7 sm:p-8 border border-border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Pink Quote Icon */}
                <div className="text-pink mb-4">
                  <Quote className="h-8 w-8 fill-pink/15 stroke-pink rotate-180" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-dark font-medium leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-border/70">
                <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-pink/30 shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.avatar}
                    alt={`${item.name} - BizStock Customer`}
                    title={`${item.name} - BizStock Customer`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark group-hover:text-pink transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveDot(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === idx ? "w-6 bg-pink" : "w-2.5 bg-slate-300 dark:bg-slate-700"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizStockTestimonials;
