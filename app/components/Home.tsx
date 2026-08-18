"use client";

import { About } from "./About";
import { ExperienceSection } from "./Experience";
import { Hero } from "./Hero";
import { IconMail, IconMapPin } from "./icons";
import { Projects } from "./Projects";
import { Proof } from "./Proof";
import { SiteNav } from "./SiteNav";
import { Stack } from "./Stack";
import { useLocale } from "./LocaleProvider";

export function Home() {
  const { content } = useLocale();
  const { profile, awards, certifications, experience, projects } = content;

  return (
    <div className="flex min-h-full flex-col bg-background">
      <SiteNav profile={profile} />
      <main className="flex-1">
        <Hero
          profile={profile}
          awards={awards}
          certifications={certifications}
          experience={experience}
        />
        <Proof
          awards={awards}
          certifications={certifications}
          experience={experience}
        />
        <Projects projects={projects} awards={awards} />
        <ExperienceSection experience={experience} />
        <Stack profile={profile} />
        <About profile={profile} />
      </main>
      <footer className="border-t border-border px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{profile.displayName}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-strong">
            <span className="inline-flex items-center gap-1.5">
              <IconMapPin className="size-3.5 text-accent" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent"
            >
              <IconMail className="size-3.5" />
              {profile.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
