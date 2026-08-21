import CommonServicePage from "../components/CommonServicePage";
import { mobileAppServiceData } from "../data/serviceData";
import MobileAppIdeaCta from "../components/MobileAppIdeaCta";
import { ServiceSchema, FAQSchema, TestimonialSchema } from "@/components/seo";

const mobileAppFaqs = [
  {
    question: "Do you develop both native iOS and Android apps?",
    answer:
      "Yes, we build high-performance native apps for iOS (Swift) and Android (Kotlin) as well as cross-platform mobile apps using Flutter and React Native.",
  },
  {
    question: "Can you assist with App Store and Google Play Store publishing?",
    answer:
      "Yes, our team handles end-to-end app store submissions, compliance checks, asset preparation, and post-launch maintenance.",
  },
  {
    question: "How do you ensure mobile app data security?",
    answer:
      "We implement end-to-end encryption, secure token authentication, biometric authorization, and OWASP mobile security guidelines.",
  },
];

const mobileAppReviews = [
  {
    authorName: "Rahul Saxena",
    reviewBody:
      "AG Solutions built our enterprise iOS and Android mobile app with an intuitive UI and zero crashes. Truly impressed by their development standards.",
    ratingValue: 5,
    itemReviewedName: "Mobile App Development Services - AG Solutions",
    itemType: "Service" as const,
  },
];

function MobileAppPageV2() {
    return (
        <>
            <ServiceSchema
                name="Mobile App Development Services"
                description={mobileAppServiceData.seoDescription || "iOS and Android mobile app development by AG Solutions."}
                serviceType="Mobile App Development"
                url="https://ag-solutions.in/mobile-app-development"
            />
            <TestimonialSchema reviews={mobileAppReviews} />
            <FAQSchema faqs={mobileAppFaqs} />
            <CommonServicePage {...mobileAppServiceData}>
                <MobileAppIdeaCta />
            </CommonServicePage>
        </>
    );
}

export default MobileAppPageV2;


