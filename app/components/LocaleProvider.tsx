"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { catalogs, ui, type Catalog, type Locale, type UiCopy } from "@/content";

type LocaleContextValue = {
  locale: Locale;
  copy: UiCopy;
  content: Catalog;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
export const LOCALE_STORAGE_KEY = "portfolio-locale";

function readDomLocale(): Locale {
  if (typeof document === "undefined") return "en";
  return document.documentElement.lang === "es" ? "es" : "en";
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readDomLocale());

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    applyLocale(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next = current === "en" ? "es" : "en";
      applyLocale(next);
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      locale,
      copy: ui[locale],
      content: catalogs[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
