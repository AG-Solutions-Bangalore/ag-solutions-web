import CommonServicePage from "../components/CommonServicePage";
import { digitalMarketingServiceData } from "../data/serviceData";
import { ServiceSchema } from "@/components/seo";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import Industries from "@/features/home/components/Industries";
import RelatedBlogSection from "@/features/blog/components/RelatedBlogSection";

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
        <RelatedBlogSection
          eyebrow="DIGITAL MARKETING INSIGHTS"
          title="Digital Marketing"
          titleHighlight="Strategies & Tips"
          subtitle="Actionable playbooks on SEO, social media, paid campaigns, and analytics to grow your brand online."
          categories={["Tech"]}
        />
      </CommonServicePage>
    </>
  );
}

export default DigitalMarketingPageV2;




