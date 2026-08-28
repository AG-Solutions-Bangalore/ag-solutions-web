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

  const rawType = schema["@type"];
  const typeStr = Array.isArray(rawType)
    ? rawType.join("-").toLowerCase()
    : typeof rawType === "string"
      ? rawType.toLowerCase()
      : "custom";
  const scriptId = id || `schema-${typeStr}`;

  useEffect(() => {
    if (typeof document === "undefined") return;

    let el = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (el) {
      el.textContent = jsonString;
    } else {
      el = document.createElement("script");
      el.id = scriptId;
      el.type = "application/ld+json";
      el.setAttribute("data-rh", "true");
      el.textContent = jsonString;
      document.head.appendChild(el);
    }

    return () => {
      const scriptEl = document.getElementById(scriptId);
      if (scriptEl) {
        scriptEl.remove();
      }
    };
  }, [scriptId, jsonString]);

  return null;
});

JsonLd.displayName = "JsonLd";

export default JsonLd;

