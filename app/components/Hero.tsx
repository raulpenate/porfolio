"use client";

import Image from "next/image";
import type { Award, Certification, Experience, Profile } from "@/content";
import {
  IconAward,
  IconBadge,
  IconBriefcase,
  IconMail,
  IconMapPin,
  linkIcon,
} from "./icons";
import { useLocale } from "./LocaleProvider";

export function Hero({
  profile,
  awards,
  certifications,
  experience,
}: {
  profile: Profile;
  awards: Award[];
  certifications: Certification[];
  experience: Experience[];
}) {
  const { copy } = useLocale();
  const portrait = profile.images?.[0] ?? "/images/profile/raul-penate-portrait.png";
  const current = experience.find((role) => role.end === "present");
  const award = awards[0];
  const cca = certifications.find((cert) => cert.id === "cca-f");

  const proofs = [
    cca
      ? { label: cca.name, Icon: IconBadge }
      : null,
    award
      ? { label: award.name, Icon: IconAward }
      : null,
    current
      ? { label: `${current.role} @ ${current.company}`, Icon: IconBriefcase }
      : null,
  ].filter(Boolean) as { label: string; Icon: typeof IconBadge }[];

  return (
    <section id="home" className="relative overflow-hidden border-b border-border px-5 py-16 md:px-8 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, var(--glow), transparent 55%), radial-gradient(ellipse at 20% 80%, color-mix(in oklab, var(--surface) 80%, transparent), transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-1.5 text-sm text-muted">
            <IconMapPin className="size-3.5 shrink-0" />
            <span>
              {profile.location}
              {current ? ` · ${current.company}` : ""}
            </span>
          </p>

          <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.displayName}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {copy.hero.tagline}
          </p>

          {proofs.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {proofs.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-muted md:text-xs"
                >
                  <Icon className="size-3.5 shrink-0 text-accent" />
                  {label}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
            >
              <IconMail className="size-4" />
              {copy.hero.emailMe}
            </a>
            {profile.links?.map((link) => {
              const Icon = linkIcon(link.label);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Strong circular halo behind the portrait */}
          <div
            className="pointer-events-none absolute left-1/2 top-[54%] -z-20 aspect-square w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 58%, rgba(125,211,252,0.5) 0%, rgba(167,139,250,0.35) 45%, rgba(0,0,0,0) 72%), radial-gradient(circle at 50% 58%, rgba(0,0,0,0) 64%, rgba(125,211,252,0.55) 68%, rgba(0,0,0,0) 73%)",
            }}
          />

          <div className="relative p-3 md:p-4">
            <Image
              src={portrait}
              alt={profile.displayName}
              width={720}
              height={720}
              priority
              className="mx-auto h-auto w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
