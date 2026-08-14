import React from "react";
import { Link } from "react-router-dom";
import { PageHero, SectionTitle } from "@/components/layout";
import AnimatedSection from "@/components/animation/AnimatedSection";
import { layoutContainerClass } from "@/components/layout/styles";
import ProductMenuIcon from "@/components/layout/Navbar/ProductMenuIcon";
import { SEO } from "@/components/seo/SEO";
import { getImageUrl } from "@/utils/imageUrl";

interface ProductCard {
  title: string;
  subtitle: string;
  description: string;
  iconName: "export" | "marketing" | "grow";
  path: string;
  badgeText: string;
  badgeClass: string;
  btnHoverClass: string;
  iconBgClass: string;
  iconColorClass: string;
}

const products: readonly ProductCard[] = [
  {
    title: "EXPORT BIZ",
    subtitle: "EDMS Compliance Platform",
    description:
      "A complete compliance and workflow automation suite built specifically for export teams. Simplify document generation, track scheme claims outstanding, organize monthly returns, and audit trails securely.",
    iconName: "export",
    path: "/export-biz",
    badgeText: "EDMS",
    badgeClass: "bg-[#eaf0ff] text-[#435fc2]",
    btnHoverClass: "hover:bg-[#435fc2] focus-visible:ring-[#435fc2]",
    iconBgClass: "bg-[#eaf0ff]",
    iconColorClass: "text-[#435fc2]",
  },
  {
    title: "EASE Marketing",
    subtitle: "Campaign & Workflow Management",
    description:
      "Run, track, and optimize all marketing workflows in one place. Design marketing campaigns, track conversion rates, orchestrate team operations, and measure multi-channel campaign performance effortlessly.",
    iconName: "marketing",
    path: "/ease-marketing",
    badgeText: "EASE",
    badgeClass: "bg-[#ffeaf0] text-[#bf3159]",
    btnHoverClass: "hover:bg-[#bf3159] focus-visible:ring-[#bf3159]",
    iconBgClass: "bg-[#ffeaf0]",
    iconColorClass: "text-[#bf3159]",
  },
  {
    title: "Grow Together",
    subtitle: "Collaborative Business Space",
    description:
      "A unified, highly collaborative workspace for team productivity and customer relations. Centralize task boards, goal tracking, client portals, and secure documents to boost alignment and output.",
    iconName: "grow",
    path: "/grow-together",
    badgeText: "GROW",
    badgeClass: "bg-[#e9fbf3] text-[#13875f]",
    btnHoverClass: "hover:bg-[#13875f] focus-visible:ring-[#13875f]",
    iconBgClass: "bg-[#e9fbf3]",
    iconColorClass: "text-[#13875f]",
  },
];

export const ProductsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Products - AG Solutions"
        description="Explore AG Solutions products: EXPORT BIZ, EASE Marketing, and Grow Together collaboration tool."
        keywords={["EDMS", "EASE Marketing", "Grow Together", "AG Solutions products"]}
      />

      <PageHero
        title="Our Products"
        bgImage={getImageUrl("/images/pattern-bg-breez.jpg")}
        bgColorClass="bg-[#ffffff]"
        textColorClass="text-[#1b2c38]"
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "Products" },
        ]}
      />

      <AnimatedSection
        className="bg-white py-20 text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="AG Solutions products overview"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="Innovative Solutions For Your Business"
              align="center"
              titleClassName="text-[38px] leading-tight font-black text-[#1a2b3c] max-[760px]:text-[30px]"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />
            <p
              className={`mt-4 text-center text-base text-[#4f5a62] font-normal leading-relaxed max-w-[700px] mx-auto home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              We design and develop premium software tools aimed at optimizing business workflows, compliance operations, and team collaboration.
            </p>

            {/* Products grid */}
            <div
              className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {products.map((product) => (
                <div
                  key={product.title}
                  className="bg-white border border-slate-100/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full rounded-none group"
                >
                  {/* Icon & Badge Area */}
                  <div className="p-8 pb-4 flex items-center justify-between">
                    <div
                      className={`h-16 w-16 rounded-2xl flex items-center justify-center ${product.iconBgClass} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <ProductMenuIcon
                        name={product.iconName}
                        className={`h-9 w-9 fill-current ${product.iconColorClass}`}
                      />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${product.badgeClass}`}
                    >
                      {product.badgeText}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="px-8 pb-8 pt-2 flex flex-col flex-1">
                    <h3 className="m-0 text-xl font-bold leading-snug text-[#1b2c38] group-hover:text-[#09c7ca] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#7a8894] font-medium uppercase tracking-wider">
                      {product.subtitle}
                    </p>
                    <p className="m-0 mt-5 text-[14.5px] leading-relaxed text-[#4f5a62] font-normal flex-1">
                      {product.description}
                    </p>

                    {/* Action Button */}
                    <div className="mt-8 pt-6 border-t border-slate-50">
                      <Link
                        to={product.path}
                        className={`inline-flex items-center justify-center rounded-full bg-[#132d3e] text-white font-bold text-sm px-6 py-3 no-underline transition-all ${product.btnHoverClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full`}
                      >
                        Explore Product &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </AnimatedSection>
    </>
  );
};

export default ProductsPage;
