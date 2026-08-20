import React, { useEffect } from "react";
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
  const type = (schema["@type"] as string) || "schema";
  const scriptId = id || `schema-${type.toLowerCase()}`;

  // Dynamic Client-side DOM Injection guarantee on every page transition
  useEffect(() => {
    if (typeof document === "undefined") return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema-type", type);
    script.id = scriptId;
    script.text = jsonString;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [scriptId, type, jsonString]);

  return (
    <Helmet>
      <script type="application/ld+json">
        {jsonString}
      </script>
    </Helmet>
  );
});

JsonLd.displayName = "JsonLd";

export default JsonLd;
