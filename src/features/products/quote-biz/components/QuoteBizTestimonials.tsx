import React, { useState } from "react";
import { m } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "QuoteBiz has transformed our quoting process. We create quotes 3x faster and close more deals.",
    author: "Ravi Sharma",
    role: "CEO, TechCorp Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    text: "The tracking feature is a game-changer. We always know when to follow up and close the deal.",
    author: "Sneha Patel",
    role: "Operations Head, Digital Valley",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    text: "Professional quotes, easy to use and helps us maintain a great brand image.",
    author: "Arjun Mehta",
    role: "Director, BuildWell Ltd.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
];

export const QuoteBizTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400 mb-3">
            WHAT OUR CUSTOMERS SAY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Loved by Businesses Like Yours
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Quote Icon */}
                <div className="mb-4 text-pink">
                  <Quote className="h-8 w-8 fill-pink/15 text-pink transform rotate-180" />
                </div>

                {/* Testimonial Body */}
                <p className="text-sm sm:text-base text-dark/90 dark:text-slate-200 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 flex items-center gap-3.5 pt-4 border-t border-border/60">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="h-11 w-11 rounded-full object-cover border-2 border-pink/30 shadow-xs"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-dark group-hover:text-pink transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-xs text-muted">
                    {item.role}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 bg-pink shadow-xs shadow-pink/30"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteBizTestimonials;
