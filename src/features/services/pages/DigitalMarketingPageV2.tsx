import CommonServicePage from "../components/CommonServicePage";
import { digitalMarketingServiceData } from "../data/serviceData";
import { ServiceSchema } from "@/components/seo";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import Industries from "@/features/home/components/Industries";

function DigitalMarketingPageV2() {
  return (
    <>
      <ServiceSchema
        name="Digital Marketing Services"
        description={digitalMarketingServiceData.seoDescription || "Data-driven digital marketing solutions by AG Solutions."}
        serviceType="Digital Marketing"
        url="https://ag-solutions.in/digital-marketing"
      />
      <CommonServicePage {...digitalMarketingServiceData}>
        <DynamicTestimonialSection route="digital-marketing" />
        <DynamicFaqSection slug="digital-marketing" />
        <Industries />
      </CommonServicePage>
    </>
  );
}

export default DigitalMarketingPageV2;




