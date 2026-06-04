import React from "react";
import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  schema: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = React.memo(({ schema }) => {
  const schemaWithContext = {
    "@context": "https://schema.org",
    ...schema,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaWithContext)}
      </script>
    </Helmet>
  );
});

JsonLd.displayName = "JsonLd";

export default JsonLd;
