import React from "react";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";

export const QuoteBizTestimonials: React.FC = () => {
  return (
    <DynamicTestimonialSection
      route="quote-biz"
      tag="WHAT OUR CUSTOMERS SAY"
      title="Loved by Businesses Like Yours"
      subtitle="Real feedback from businesses and sales leaders who trust QuoteBiz for faster quote turnaround and higher conversions."
      showSchema={false}
    />
  );
};

export default QuoteBizTestimonials;


