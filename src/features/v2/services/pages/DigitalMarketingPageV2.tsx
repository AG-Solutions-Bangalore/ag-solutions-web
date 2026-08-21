import CommonServicePage from "../components/CommonServicePage";
import { digitalMarketingServiceData } from "../data/serviceData";
import { ServiceSchema, FAQSchema, TestimonialSchema } from "@/components/seo";

const digitalMarketingFaqs = [
  {
    question: "What digital marketing channels do you manage?",
    answer:
      "We run full-funnel digital marketing including Google Search & Performance Max Ads, Meta (Facebook & Instagram) ads, Search Engine Optimization (SEO), content marketing, and WhatsApp conversion pipelines.",
  },
  {
    question: "How do you track campaign ROI and conversion performance?",
    answer:
      "We configure server-side Google Tag Manager, GA4, Meta Pixel, UTM parameters, and custom conversion tracking dashboards to deliver transparent ROI reports.",
  },
  {
    question: "How soon can we expect results from our marketing campaigns?",
    answer:
      "Paid advertising campaigns (Google Ads, Meta Ads) start generating targeted traffic within 24–48 hours, while organic SEO strategies compound sustainable traffic over 3 to 6 months.",
  },
];

const digitalMarketingReviews = [
  {
    authorName: "Divya Kapoor",
    reviewBody:
      "Their data-driven digital marketing campaigns lowered our cost per acquisition by 35% while dramatically increasing high-intent inbound leads.",
    ratingValue: 5,
    itemReviewedName: "Digital Marketing Services - AG Solutions",
    itemType: "Service" as const,
  },
];

function DigitalMarketingPageV2() {
    return (
        <>
            <ServiceSchema
                name="Digital Marketing Services"
                description={digitalMarketingServiceData.seoDescription || "Data-driven digital marketing solutions by AG Solutions."}
                serviceType="Digital Marketing"
                url="https://ag-solutions.in/digital-marketing"
            />
            <TestimonialSchema reviews={digitalMarketingReviews} />
            <FAQSchema faqs={digitalMarketingFaqs} />
            <CommonServicePage {...digitalMarketingServiceData} />
        </>
    );
}

export default DigitalMarketingPageV2;


