"use client";

import type { Profile } from "@/content";
import { useLocale } from "./LocaleProvider";

const FOCUS_IDS = ["ai-tools", "backend", "cloud-devops", "frontend"];

export function Stack({ profile }: { profile: Profile }) {
  const { copy } = useLocale();
  const focus = profile.skills.filter((group) => FOCUS_IDS.includes(group.id));

  return (
    <section id="stack" className="border-b border-border px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {copy.stack.title}
        </h2>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {focus.map((group) => (
            <li key={group.id}>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">
                {group.category}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {group.items.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
