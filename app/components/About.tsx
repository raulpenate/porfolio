"use client";

import type { Profile } from "@/content";
import { IconMail, IconMapPin } from "./icons";
import { useLocale } from "./LocaleProvider";

export function About({ profile }: { profile: Profile }) {
  const { copy } = useLocale();
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            {copy.about.title}
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {profile.headline}
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-strong">
                {copy.about.languages}
              </dt>
              <dd className="mt-2 text-sm text-muted">
                {profile.languages.map((lang) => `${lang.name} (${lang.level})`).join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-strong">
                {copy.about.basedIn}
              </dt>
              <dd className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                <IconMapPin className="size-3.5 shrink-0 text-accent" />
                {profile.location}
              </dd>
            </div>
          </dl>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <IconMail className="size-4" />
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
