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
      // Element already exists. If it was prerendered (carries canonical
      // prerendered schemas, e.g. an Organization with dynamically-computed
      // aggregateRating), leave it alone — overwriting would strip fields
      // the React component doesn't know about (e.g. aggregateRating on
      // Organization). Only update if the existing element is empty.
      if (el.textContent && el.textContent.trim().length > 0) {
        return;
      }
      el.textContent = jsonString;
    } else {
      el = document.createElement("script");
      el.id = scriptId;
      el.type = "application/ld+json";
      el.setAttribute("data-rh", "true");
      el.textContent = jsonString;
      document.head.appendChild(el);
    }
    // Intentionally no cleanup function — if we removed the prerendered
    // <script> on unmount, route changes would wipe out the canonical
    // schema and Google's crawler would lose aggregateRating, etc.
  }, [scriptId, jsonString]);

  return null;
});

JsonLd.displayName = "JsonLd";

export default JsonLd;

