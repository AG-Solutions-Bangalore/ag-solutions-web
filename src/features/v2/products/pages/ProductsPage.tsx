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
      "Export Biz helps Exporters in creating manual export documentations into structured digital documentation, reducing repetitive data entry and making document preparation faster and easier.",
    iconName: "export",
    path: "/products/export-biz",
    badgeText: "EDMS",
    badgeClass: "bg-teal-light text-teal border border-teal-border/40",
    btnHoverClass: "hover:bg-teal-hover focus-visible:ring-teal",
    iconBgClass: "bg-teal-light",
    iconColorClass: "text-teal",
  },
  {
    title: "SS Marketing",
    subtitle: "Campaign & Workflow Management",
    description:
      "Run, track, and optimize all marketing workflows in one place. Design marketing campaigns, track conversion rates, orchestrate team operations, and measure multi-channel campaign performance effortlessly.",
    iconName: "marketing",
    path: "/products/ss-marketing",
    badgeText: "EASE",
    badgeClass: "bg-pink-light text-pink border border-pink-border/40",
    btnHoverClass: "hover:bg-pink-hover focus-visible:ring-pink",
    iconBgClass: "bg-pink-light",
    iconColorClass: "text-pink",
  },
  {
    title: "Grow Together",
    subtitle: "Collaborative Business Space",
    description:
      "A unified, highly collaborative workspace for team productivity and customer relations. Centralize task boards, goal tracking, client portals, and secure documents to boost alignment and output.",
    iconName: "grow",
    path: "/products/grow-together",
    badgeText: "GROW",
    badgeClass: "bg-green-light text-green border border-green-border/40",
    btnHoverClass: "hover:bg-green-hover focus-visible:ring-green",
    iconBgClass: "bg-green-light",
    iconColorClass: "text-green",
  },
];

export const ProductsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Products - AG Solutions"
        description="Explore AG Solutions products: EXPORT BIZ, SS Marketing, and Grow Together collaboration tool."
        keywords={["EDMS", "Export Biz", "SS Marketing", "Grow Together", "AG Solutions products"]}
      />

      <PageHero
        title="Our Products"
        bgImage={getImageUrl("/images/pattern-bg-breez.jpg")}
        bgColorClass="bg-white"
        textColorClass="text-dark"
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "Products" },
        ]}
      />

      <AnimatedSection
        className="bg-white py-12 md:py-20 text-dark"
        ariaLabel="AG Solutions products overview"
      >
        {(isVisible) => (
          <div className={layoutContainerClass}>
            <SectionTitle
              title="Innovative Solutions For Your Business"
              align="center"
              titleClassName="text-2xl sm:text-3xl md:text-[38px] leading-tight font-black text-dark"
              className={`home-animated-item ${isVisible ? "home-animated-item-visible" : ""}`}
            />
            <p
              className={`mt-4 text-center text-sm sm:text-base text-muted font-normal leading-relaxed max-w-[700px] mx-auto home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              We design and develop premium software tools aimed at optimizing business workflows, compliance operations, and team collaboration.
            </p>

            {/* Products grid */}
            <div
              className={`mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 home-animated-item ${
                isVisible ? "home-animated-item-visible" : ""
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {products.map((product) => (
                <div
                  key={product.title}
                  className="bg-white border border-slate-100/90 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group p-2"
                >
                  {/* Icon & Badge Area */}
                  <div className="p-5 sm:p-6 pb-2 flex items-center justify-between">
                    <div
                      className={`h-14 w-14 sm:h-16 sm:w-16 rounded-2xl flex items-center justify-center ${product.iconBgClass} transition-transform duration-300 group-hover:scale-105 shadow-sm`}
                    >
                      <ProductMenuIcon
                        name={product.iconName}
                        className={`h-8 w-8 sm:h-9 sm:w-9 fill-current ${product.iconColorClass}`}
                      />
                    </div>
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${product.badgeClass}`}
                    >
                      {product.badgeText}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 pt-2 flex flex-col flex-1">
                    <h3 className="m-0 text-lg sm:text-xl font-bold leading-snug text-dark group-hover:text-pink transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-xs text-teal font-bold uppercase tracking-wider">
                      {product.subtitle}
                    </p>
                    <p className="m-0 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted font-normal flex-1">
                      {product.description}
                    </p>

                    {/* Action Button */}
                    <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100">
                      <Link
                        to={product.path}
                        className={`inline-flex items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm px-6 py-3 no-underline transition-all ${product.btnHoverClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full`}
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
