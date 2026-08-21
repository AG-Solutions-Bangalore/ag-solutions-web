import React from "react";
import JsonLd from "./JsonLd";

export const WebSiteSchema: React.FC = () => {
  const schema = {
    "@type": "WebSite",
    name: "AG Solutions",
    url: "https://ag-solutions.in/",
  };

  return <JsonLd schema={schema} />;
};

export default WebSiteSchema;
