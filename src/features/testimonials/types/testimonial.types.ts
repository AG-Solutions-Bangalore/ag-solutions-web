export interface TestimonialItem {
  testimonial_for?: string | null;
  testimonial_client_name: string;
  testimonial_description: string;
  testimonial_rating?: string | number | null;
  rating?: string | number | null;
  rating_value?: string | number | null;
  testimonial_created_date?: string | null;
}

export interface TestimonialsResponse {
  data: TestimonialItem[];
}
