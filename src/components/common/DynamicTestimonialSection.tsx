import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, UserCheck } from "lucide-react";
import { useTestimonials } from "@/features/testimonials/hooks/useTestimonials";
import type { TestimonialItem } from "@/features/testimonials/types/testimonial.types";
import { TestimonialSchema } from "@/components/seo";

export interface DynamicTestimonialSectionProps {
  route?: string;
  testimonials?: TestimonialItem[];
  tag?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  showSchema?: boolean;
}

export const DynamicTestimonialSection: React.FC<DynamicTestimonialSectionProps> = ({
  route,
  testimonials: propTestimonials,
  tag = "CLIENT TESTIMONIALS",
  title = "What Our Clients Say",
  subtitle = "Real feedback from businesses and leaders who trust AG Solutions for their digital transformation.",
  className = "",
  showSchema = true,
}) => {
  const { data: apiResponse, isLoading } = useTestimonials(route || "");
  const [currentPage, setCurrentPage] = useState(0);

  // Combine prop or query data
  const rawItems = propTestimonials || apiResponse?.data || [];
  const items = Array.isArray(rawItems) ? rawItems.filter((t) => t.testimonial_description && t.testimonial_client_name) : [];

  // Conditional Rendering Rule: If no data is available, do not render the section
  if (items.length === 0 && !isLoading) {
    return null;
  }

  // Loading skeleton while fetching
  if (isLoading && items.length === 0) {
    return (
      <section className={`py-12 sm:py-16 bg-background border-t border-border ${className}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="h-4 bg-muted/20 rounded w-28 mx-auto mb-3" />
          <div className="h-8 bg-muted/20 rounded w-72 mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-3xl bg-muted/10 border border-border p-6" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Convert for schema
  const schemaReviews = items.map((item) => ({
    authorName: item.testimonial_client_name,
    reviewBody: item.testimonial_description,
    ratingValue: item.testimonial_rating ?? item.rating ?? item.rating_value,
  }));

  return (
    <>
      {showSchema && schemaReviews.length > 0 && (
        <TestimonialSchema reviews={schemaReviews} />
      )}

      <section
        className={`relative overflow-hidden py-12 sm:py-16 md:py-20 bg-section-alt border-t border-border transition-colors duration-200 ${className}`}
        aria-label="Client testimonials"
      >
        {/* Subtle Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[350px] w-[600px] rounded-full bg-gradient-to-r from-teal/10 via-pink/10 to-yellow/10 blur-3xl opacity-70" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal">
                <Sparkles className="h-3.5 w-3.5 text-yellow" />
                <span>{tag}</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-2 text-xs sm:text-sm md:text-base text-muted max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Carousel Controls if multiple pages */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2.5 self-start md:self-auto">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-teal hover:border-teal hover:scale-105 active:scale-95 transition-all shadow-2xs cursor-pointer"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="text-xs font-bold text-muted px-2">
                  {currentPage + 1} / {totalPages}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-teal hover:border-teal hover:scale-105 active:scale-95 transition-all shadow-2xs cursor-pointer"
                  aria-label="Next testimonials"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Testimonial Cards Grid with Animation */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {currentItems.map((item, idx) => {
                  return (
                    <div
                      key={`${item.testimonial_client_name}-${idx}`}
                      className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-teal/40 transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Quote Mark Watermark */}
                      <div className="absolute top-6 right-6 text-muted/15 group-hover:text-teal/20 transition-colors pointer-events-none">
                        <Quote className="h-10 w-10 rotate-180" />
                      </div>

                      <div>
                        {/* 5-Star Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow text-yellow"
                            />
                          ))}
                        </div>

                        {/* Review Body */}
                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal italic relative z-10 line-clamp-6">
                          &ldquo;{item.testimonial_description}&rdquo;
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="mt-6 pt-4 border-t border-border flex items-center gap-3.5">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-light to-pink-light dark:from-teal/20 dark:to-pink/20 flex items-center justify-center text-teal font-bold shrink-0 border border-border">
                          <UserCheck className="h-5 w-5 text-teal" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs sm:text-sm font-bold text-foreground truncate">
                            {item.testimonial_client_name}
                          </h3>
                          {item.testimonial_for && (
                            <span className="inline-block text-[11px] font-semibold text-muted uppercase tracking-wider truncate">
                              {item.testimonial_for.replace(/-/g, " ")}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator for Mobile */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-1 md:hidden">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentPage(i)}
                  className="p-2 flex items-center justify-center cursor-pointer border-none bg-transparent"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span
                    className={`h-2 rounded-full transition-all ${
                      currentPage === i ? "w-6 bg-teal" : "w-2 bg-muted/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DynamicTestimonialSection;
