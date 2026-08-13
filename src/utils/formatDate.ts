/**
 * Formats any given date string or Date object into dd-mm-YYYY format (e.g. 12-08-2026).
 * Returns the formatted date string or empty string if input is null/undefined.
 */
export function formatDateToDDMMYYYY(
  dateInput: string | Date | null | undefined
): string {
  if (!dateInput) return "";

  if (typeof dateInput === "string") {
    const trimmed = dateInput.trim();
    if (!trimmed) return "";

    // Already dd-mm-YYYY format (e.g., 12-08-2026)
    if (/^\d{2}-\d{2}-\d{4}$/.test(trimmed)) {
      return trimmed;
    }

    // YYYY-MM-DD or YYYY/MM/DD format (e.g., 2026-08-12)
    const ymdMatch = trimmed.match(/^(\d{4})[-/](\d{2})[-/](\d{2})/);
    if (ymdMatch) {
      const [, yyyy, mm, dd] = ymdMatch;
      return `${dd}-${mm}-${yyyy}`;
    }

    // DD/MM/YYYY or DD.MM.YYYY format
    const dmyMatch = trimmed.match(/^(\d{2})[/.](\d{2})[/.](\d{4})/);
    if (dmyMatch) {
      const [, dd, mm, yyyy] = dmyMatch;
      return `${dd}-${mm}-${yyyy}`;
    }
  }

  const d = new Date(dateInput);
  if (isNaN(d.getTime())) {
    return typeof dateInput === "string" ? dateInput : "";
  }

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}

export const formatDate = formatDateToDDMMYYYY;
