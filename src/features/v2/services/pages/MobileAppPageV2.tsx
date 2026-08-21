import { useMemo } from "react";

import CommonServicePage from "../components/CommonServicePage";
import { mobileAppServiceData } from "../data/serviceData";
import MobileAppIdeaCta from "../components/MobileAppIdeaCta";
import { ServiceSchema, FAQSchema, TestimonialSchema } from "@/components/seo";
import { useFAQs } from "@/features/v1/service/hooks/useFAQs";

const fallbackMobileAppFaqs = [
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
  },
];

function MobileAppPageV2() {
    const { data: faqResponse } = useFAQs("mobile-app-development");

    const dynamicFaqs = useMemo(() => {
        if (faqResponse?.data && Array.isArray(faqResponse.data) && faqResponse.data.length > 0) {
            return faqResponse.data.map((item) => ({
                question: item.faq_que,
                answer: item.faq_ans,
            }));
        }
        return fallbackMobileAppFaqs;
    }, [faqResponse]);

    return (
        <>
            <ServiceSchema
                name="Mobile App Development Services"
                description={mobileAppServiceData.seoDescription || "iOS and Android mobile app development by AG Solutions."}
                serviceType="Mobile App Development"
                url="https://ag-solutions.in/mobile-app-development"
            />
            <TestimonialSchema reviews={mobileAppReviews} />
            <FAQSchema faqs={dynamicFaqs} />
            <CommonServicePage {...mobileAppServiceData}>
                <MobileAppIdeaCta />
            </CommonServicePage>
        </>
    );
}

export default MobileAppPageV2;




