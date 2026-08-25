export interface TestimonialItem {
  testimonial_for?: string | null;
  testimonial_client_name: string;
  testimonial_description: string;
  testimonial_created_date?: string | null;
}

export interface TestimonialsResponse {
  data: TestimonialItem[];
}
