import React from "react";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import type { TestimonialItem } from "@/features/testimonials/types/testimonial.types";

export interface QuoteBizTestimonialsProps {
  testimonials?: TestimonialItem[];
}

export const QuoteBizTestimonials: React.FC<QuoteBizTestimonialsProps> = ({
  testimonials,
}) => {
  return (
    <DynamicTestimonialSection
      route="quote-biz"
      testimonials={testimonials}
      tag="WHAT OUR CUSTOMERS SAY"
      title="Loved by Businesses Like Yours"
      subtitle="Real feedback from businesses and sales leaders who trust QuoteBiz for faster quote turnaround and higher conversions."
      showSchema={false}
    />
  );
};

export default QuoteBizTestimonials;