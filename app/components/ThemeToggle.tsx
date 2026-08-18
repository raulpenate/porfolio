"use client";

import { IconMoon, IconSun } from "./icons";
import { useLocale } from "./LocaleProvider";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { copy } = useLocale();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-accent/50 hover:text-accent ${className}`}
      aria-label={isDark ? copy.theme.toLight : copy.theme.toDark}
    >
      {isDark ? <IconSun className="size-4" /> : <IconMoon className="size-4" />}
    </button>
  );
}
