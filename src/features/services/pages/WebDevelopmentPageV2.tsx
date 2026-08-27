import CommonServicePage from "../components/CommonServicePage";
import { webDevelopmentServiceData } from "../data/serviceData";
import { ServiceSchema } from "@/components/seo";
import { DynamicTestimonialSection } from "@/components/common/DynamicTestimonialSection";
import { DynamicFaqSection } from "@/components/common/DynamicFaqSection";
import Industries from "@/features/home/components/Industries";
import RelatedBlogSection from "@/features/blog/components/RelatedBlogSection";

function WebDevelopmentPageV2() {
  return (
    <>
      <ServiceSchema
        name="Web & Website Development Services"
        description={webDevelopmentServiceData.seoDescription || "Custom web development services by AG Solutions."}
        serviceType="Web Development"
        url="https://ag-solutions.in/web-development"
      />
      <CommonServicePage {...webDevelopmentServiceData}>
        <DynamicTestimonialSection route="web-development" />
        <DynamicFaqSection slug="web-development" />
        <Industries />
        <RelatedBlogSection
          eyebrow="WEB DEVELOPMENT INSIGHTS"
          title="Web & Website"
          titleHighlight="Development Insights"
          subtitle="Expert articles on building high-performance websites, SEO best practices, and digital growth strategies for modern businesses."
          categories={["Website", "Web Application"]}
        />
      </CommonServicePage>
    </>
  );
}

export default WebDevelopmentPageV2;



