"use client";

import { useEffect, useState } from "react";
import type { Profile } from "@/content";
import { IconMail } from "./icons";
import { LocaleToggle } from "./LocaleToggle";
import { useLocale } from "./LocaleProvider";
import { ThemeToggle } from "./ThemeToggle";

const navHrefs = [
  { key: "home", href: "#home" },
  { key: "work", href: "#projects" },
  { key: "articles", href: "#articles" },
  { key: "experience", href: "#experience" },
  { key: "stack", href: "#stack" },
  { key: "about", href: "#about" },
] as const;

const sectionIds = navHrefs.map((item) => item.href.slice(1));

export function SiteNav({ profile }: { profile: Profile }) {
  const { copy } = useLocale();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);

      let current = sections[0]?.id ?? "home";

      // Use stable document coordinates so short sections (like About) still register.
      // Header is sticky, so consider a point slightly below it.
      const headerOffset = Math.min(180, Math.round(window.innerHeight * 0.2));
      for (const section of sections) {
        if (section.offsetTop <= window.scrollY + headerOffset) current = section.id;
      }

      // If we are at (or extremely close to) the bottom, force the last section active.
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 8) {
        current = sections[sections.length - 1]?.id ?? current;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#home" className="text-sm font-medium tracking-tight text-foreground">
          {profile.displayName}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navHrefs.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative text-sm transition-colors ${
                  isActive
                    ? "font-medium text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {copy.nav[item.key]}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px bg-accent transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LocaleToggle />
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white sm:px-4"
          >
            <IconMail className="size-3.5" />
            <span className="hidden sm:inline">{copy.nav.contact}</span>
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{copy.nav.menu}</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-4 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-4 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-border px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          {navHrefs.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-md px-3 py-2 text-sm ${
                  isActive
                    ? "bg-surface-elevated font-medium text-accent"
                    : "text-muted hover:bg-surface-elevated hover:text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {copy.nav[item.key]}
              </a>
            );
          })}
        </nav>
      ) : null}

      <div
        className="h-0.5 bg-border"
        aria-hidden
      >
        <div
          className="h-full origin-left bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
