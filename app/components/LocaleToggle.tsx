"use client";

import { useLocale } from "./LocaleProvider";

export function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, copy } = useLocale();

  return (
    <div
      role="group"
      aria-label={copy.locale.switchTo}
      className={`inline-flex h-9 items-stretch overflow-hidden rounded-md border border-border bg-background ${className}`}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2.5 font-mono text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
          locale === "en"
            ? "bg-surface-elevated text-accent"
            : "bg-background text-muted hover:bg-surface-elevated/50 hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="w-px bg-border" aria-hidden />
      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-pressed={locale === "es"}
        className={`px-2.5 font-mono text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
          locale === "es"
            ? "bg-surface-elevated text-accent"
            : "bg-background text-muted hover:bg-surface-elevated/50 hover:text-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
}
