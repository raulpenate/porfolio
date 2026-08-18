"use client";

import type { Award, Certification, Experience } from "@/content";
import { IconAward, IconBadge, IconBriefcase } from "./icons";
import { useLocale } from "./LocaleProvider";

export function Proof({
  awards,
  certifications,
  experience,
}: {
  awards: Award[];
  certifications: Certification[];
  experience: Experience[];
}) {
  const { copy } = useLocale();
  const current = experience.find((role) => role.end === "present");
  const items = [
    {
      label: copy.proof.recognition,
      value: awards[0]?.name ?? "-",
      Icon: IconAward,
    },
    {
      label: copy.proof.certification,
      value:
        certifications.find((c) => c.id === "cca-f")?.name ??
        certifications[0]?.name ??
        "-",
      Icon: IconBadge,
    },
    {
      label: copy.proof.now,
      value: current ? `${current.role}, ${current.company}` : "-",
      Icon: IconBriefcase,
    },
  ];

  return (
    <section aria-label={copy.proof.highlights} className="border-b border-border px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="flex gap-3">
            <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-accent">
              <item.Icon className="size-3.5" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-strong">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-snug text-foreground md:text-base">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
