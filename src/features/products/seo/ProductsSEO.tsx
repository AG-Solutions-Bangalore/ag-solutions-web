import React from "react";
import { SEO } from "@/shared/seo/SEO";

/**
 * Products index page SEO.
 *
 * Lists the AG Solutions product family (Export Biz, BizStock, Ease
 * Marketing, Grow Together). Per-product pages have their own
 * `<Product>SEO` wrappers in their own `seo/` folders.
 */
export const ProductsSEO: React.FC = () => {
  return (
    <SEO
      title="Products - AG Solutions"
      description="Explore AG Solutions products: EXPORT BIZ, EASE Marketing, and Grow Together collaboration tool."
      keywords={["EDMS", "Export Biz", "EASE Marketing", "Grow Together", "AG Solutions products"]}
    />
  );
};

export default ProductsSEO;
