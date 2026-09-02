import React from "react";
import { JsonLd } from "@/shared/seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbList schema — used by the Blog detail page.
 *
 * Mirrors the in-page breadcrumb UI so Google can render a trail under the
 * article snippet in search results.
 */
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  const schema = {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return <JsonLd id="schema-breadcrumblist" schema={schema} />;
};

export default BreadcrumbSchema;
