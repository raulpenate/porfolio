import type { Locale } from "@/content";

/** Format `YYYY-MM` or `present` for display. */
export function formatMonth(value: string, locale: Locale = "en"): string {
  if (value === "present") return locale === "es" ? "Actualidad" : "Present";
  const [year, month] = value.split("-");
  if (!year || !month) return value;
  const date = new Date(Number(year), Number(month) - 1, 1);
  const tag = locale === "es" ? "es-SV" : "en-US";
  return date.toLocaleString(tag, { month: "short", year: "numeric" });
}

export function formatRange(start: string, end: string, locale: Locale = "en"): string {
  return `${formatMonth(start, locale)} - ${formatMonth(end, locale)}`;
}
