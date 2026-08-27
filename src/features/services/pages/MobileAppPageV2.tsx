import CommonServicePage from "../components/CommonServicePage";
import { mobileAppServiceData } from "../data/serviceData";
import MobileAppIdeaCta from "../components/MobileAppIdeaCta";
import { ServiceSchema } from "@/components/seo";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import Industries from "@/features/home/components/Industries";
import RelatedBlogSection from "@/features/blog/components/RelatedBlogSection";

function MobileAppPageV2() {
  return (
    <>
      <ServiceSchema
        name="Mobile App Development Services"
        description={mobileAppServiceData.seoDescription || "iOS and Android mobile app development by AG Solutions."}
        serviceType="Mobile App Development"
        url="https://ag-solutions.in/mobile-app-development"
      />
      <CommonServicePage {...mobileAppServiceData}>
        <MobileAppIdeaCta />
        <DynamicTestimonialSection route="mobile-app-development" />
        <DynamicFaqSection slug="mobile-app-development" />
        <Industries />
        <RelatedBlogSection
          eyebrow="MOBILE APP INSIGHTS"
          title="Mobile App"
          titleHighlight="Growth & Engagement"
          subtitle="Discover why mobile apps drive stronger customer loyalty, higher sales, and better engagement for modern brands."
          categories={["Mobile App"]}
        />
      </CommonServicePage>
    </>
  );
}

export default MobileAppPageV2;




