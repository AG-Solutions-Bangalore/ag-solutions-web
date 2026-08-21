import CommonServicePage from "../components/CommonServicePage";
import { webDevelopmentServiceData } from "../data/serviceData";
import { ServiceSchema, FAQSchema, TestimonialSchema } from "@/components/seo";

const webDevFaqs = [
  {
    question: "What web development technologies do you use?",
    answer:
      "We develop websites using React, Next.js, Vite, TypeScript, Tailwind CSS, Node.js, and modern headless CMS platforms for maximum speed and SEO performance.",
  },
  {
    question: "Are your websites mobile-responsive and SEO-optimized?",
    answer:
      "Yes, 100% of our websites are mobile-first responsive, pass Google Core Web Vitals, follow WCAG accessibility guidelines, and include structured JSON-LD schema markup.",
  },
  {
    question: "Do you provide e-commerce website development?",
    answer:
      "Yes, we build scalable custom e-commerce solutions with secure payment gateways, inventory sync, and real-time order tracking.",
  },
];

const webDevReviews = [
  {
    authorName: "Karthik N.",
    reviewBody:
      "AG Solutions developed an exceptionally fast and modern web application for our business. Conversions increased by 40% in two months.",
    ratingValue: 5,
    itemReviewedName: "Web Development Services - AG Solutions",
    itemType: "Service" as const,
  },
];

function WebDevelopmentPageV2() {
    return (
        <>
            <ServiceSchema
                name="Web & Website Development Services"
                description={webDevelopmentServiceData.seoDescription || "Custom web development services by AG Solutions."}
                serviceType="Web Development"
                url="https://ag-solutions.in/web-development"
            />
            <TestimonialSchema reviews={webDevReviews} />
            <FAQSchema faqs={webDevFaqs} />
            <CommonServicePage {...webDevelopmentServiceData} />
        </>
    );
}

export default WebDevelopmentPageV2;


