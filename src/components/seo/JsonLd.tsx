import React from "react";
import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  id?: string;
  schema: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = React.memo(({ id, schema }) => {
  const schemaWithContext = {
    "@context": "https://schema.org",
    ...schema,
  };

  const jsonString = JSON.stringify(schemaWithContext);

  const rawType = schema["@type"];
  const typeStr = Array.isArray(rawType)
    ? rawType.join("-").toLowerCase()
    : typeof rawType === "string"
      ? rawType.toLowerCase()
      : "custom";
  const scriptId = id || `schema-${typeStr}`;

  return (
    <Helmet>
      <script id={scriptId} type="application/ld+json">
        {jsonString}
      </script>
    </Helmet>
  );
});

JsonLd.displayName = "JsonLd";

export default JsonLd;

