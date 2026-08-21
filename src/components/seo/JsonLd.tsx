import React, { useEffect } from "react";

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
  
  // Resolve unique script ID
  const rawType = schema["@type"];
  const typeStr = Array.isArray(rawType)
    ? rawType.join("-").toLowerCase()
    : typeof rawType === "string"
    ? rawType.toLowerCase()
    : "custom";
  const scriptId = id || `schema-${typeStr}`;

  useEffect(() => {
    if (typeof document === "undefined") return;

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (script) {
      // Update in place to avoid duplicate script tags across re-renders
      script.textContent = jsonString;
    } else {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.setAttribute("data-schema-type", typeStr);
      script.textContent = jsonString;
      document.head.appendChild(script);
    }

    return () => {
      // Clean up script on component unmount
      const existing = document.getElementById(scriptId);
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, [scriptId, typeStr, jsonString]);

  return null;
});

JsonLd.displayName = "JsonLd";

export default JsonLd;

