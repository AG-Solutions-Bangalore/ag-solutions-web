export interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
}

/**
 * Splits a combined UTM query string (e.g. from an encoded or improperly parsed URL)
 * into individual key-value pairs.
 */
function parseCombinedUtmString(val: string): Partial<UtmParams> {
  const params: Partial<UtmParams> = {};
  const parts = val.split("&");
  for (const part of parts) {
    const eqIndex = part.indexOf("=");
    if (eqIndex !== -1) {
      const k = part.substring(0, eqIndex).trim();
      const v = part.substring(eqIndex + 1).trim();
      if (k === "utm_source") params.utm_source = v;
      else if (k === "utm_medium") params.utm_medium = v;
      else if (k === "utm_campaign") params.utm_campaign = v;
    } else {
      // If there's no '=', it's the raw value of the parameter itself (e.g. utm_source)
      if (part.trim() && !params.utm_source) {
        params.utm_source = part.trim();
      }
    }
  }
  return params;
}

/**
 * Extracts UTM parameters from URLSearchParams, resolving any combined values.
 */
export function extractUtmParams(searchParams: URLSearchParams): UtmParams {
  let source = searchParams.get("utm_source") || "";
  let medium = searchParams.get("utm_medium") || "";
  let campaign = searchParams.get("utm_campaign") || "";

  // If utm_source contains query parameters (e.g., due to encoded ampersands), parse it.
  if (source.includes("&") || source.includes("=")) {
    const parsed = parseCombinedUtmString(source);
    if (parsed.utm_source) source = parsed.utm_source;
    if (parsed.utm_medium && !medium) medium = parsed.utm_medium;
    if (parsed.utm_campaign && !campaign) campaign = parsed.utm_campaign;
  }

  // If utm_medium contains query parameters, parse it.
  if (medium.includes("&") || medium.includes("=")) {
    const parsed = parseCombinedUtmString(medium);
    if (parsed.utm_source && !source) source = parsed.utm_source;
    if (parsed.utm_medium) medium = parsed.utm_medium;
    if (parsed.utm_campaign && !campaign) campaign = parsed.utm_campaign;
  }

  // If utm_campaign contains query parameters, parse it.
  if (campaign.includes("&") || campaign.includes("=")) {
    const parsed = parseCombinedUtmString(campaign);
    if (parsed.utm_source && !source) source = parsed.utm_source;
    if (parsed.utm_medium && !medium) medium = parsed.utm_medium;
    if (parsed.utm_campaign) campaign = parsed.utm_campaign;
  }

  return {
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
  };
}

/**
 * Stores any non-empty UTM parameters into sessionStorage.
 */
export function storeUtmParams(params: UtmParams) {
  if (params.utm_source || params.utm_medium || params.utm_campaign) {
    try {
      const stored = sessionStorage.getItem("utm_params");
      let current: UtmParams = stored
        ? JSON.parse(stored)
        : { utm_source: "", utm_medium: "", utm_campaign: "" };

      if (params.utm_source) current.utm_source = params.utm_source;
      if (params.utm_medium) current.utm_medium = params.utm_medium;
      if (params.utm_campaign) current.utm_campaign = params.utm_campaign;

      sessionStorage.setItem("utm_params", JSON.stringify(current));
    } catch (e) {
      console.error("Failed to store UTM parameters:", e);
    }
  }
}

/**
 * Retrieves the UTM parameters, combining active URL params and stored fallback params.
 */
export function getUtmParams(searchParams?: URLSearchParams): UtmParams {
  const currentSearchParams = searchParams || new URLSearchParams(window.location.search);
  const urlParams = extractUtmParams(currentSearchParams);
  
  try {
    const stored = sessionStorage.getItem("utm_params");
    if (stored) {
      const parsed: UtmParams = JSON.parse(stored);
      return {
        utm_source: urlParams.utm_source || parsed.utm_source || "",
        utm_medium: urlParams.utm_medium || parsed.utm_medium || "",
        utm_campaign: urlParams.utm_campaign || parsed.utm_campaign || "",
      };
    }
  } catch (e) {
    console.error("Failed to retrieve UTM parameters:", e);
  }

  return urlParams;
}
