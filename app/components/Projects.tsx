"use client";

import type { Award, Project, ProjectLink } from "@/content";
import { PhotoGallery } from "./PhotoGallery";
import { IconAward, IconGithub, linkIcon } from "./icons";
import { useLocale } from "./LocaleProvider";

const FEATURED_IDS = ["levelo", "react-websockets", "jungle-ds-algo", "pypususa"] as const;
const COMMUNITY_ID = "claude-for-dummies-sv";

function TextLinks({
  links,
  className = "mt-4",
  Icon,
}: {
  links?: ProjectLink[];
  className?: string;
  Icon?: typeof IconGithub;
}) {
  if (!links?.length) return null;
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => {
        const Glyph = Icon ?? linkIcon(link.name);
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <Glyph className="size-3.5" />
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Projects({
  projects,
  awards,
}: {
  projects: Project[];
  awards: Award[];
}) {
  const { copy } = useLocale();
  const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    Boolean,
  ) as Project[];
  const community = projects.find((p) => p.id === COMMUNITY_ID);
  const rest = projects.filter(
    (p) =>
      p.id !== COMMUNITY_ID && !FEATURED_IDS.includes(p.id as (typeof FEATURED_IDS)[number]),
  );
  const leveloAward = awards.find((a) => a.relatedProjectId === "levelo");

  const [lead, ...others] = featured;

  return (
    <section id="projects" className="border-b border-border px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {copy.projects.title}
        </h2>

        {lead ? (
          <article className="mt-12 overflow-hidden border border-border bg-surface">
            {lead.images?.length ? (
              <PhotoGallery images={lead.images} alt={lead.name} variant="hero" />
            ) : null}
            <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {lead.name}
              </h3>
              {leveloAward ? (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-accent/15 px-2.5 py-1 font-mono text-[11px] font-medium text-accent">
                  <IconAward className="size-3.5" />
                  {leveloAward.name}
                </span>
              ) : null}
            </div>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {lead.summary}
            </p>
            <ul className="mt-6 max-w-3xl space-y-2">
              {lead.bullets.map((bullet) => (
                <li key={bullet} className="text-sm leading-relaxed text-muted-strong">
                  {bullet}
                </li>
              ))}
            </ul>
            {lead.tech ? (
              <p className="mt-6 font-mono text-[11px] text-muted-strong">{lead.tech.join(" · ")}</p>
            ) : null}
            <TextLinks links={lead.repos} Icon={IconGithub} />
            </div>
          </article>
        ) : null}

        {community ? (
          <article className="mt-6 overflow-hidden border border-border bg-surface">
            <PhotoGallery images={community.images ?? []} alt={community.name} />
            <div className="p-6 md:p-10">
              <h3 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {community.name}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                {community.summary}
              </p>
              <ul className="mt-6 max-w-3xl space-y-2">
                {community.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-muted-strong">
                    {bullet}
                  </li>
                ))}
              </ul>
              {community.tech ? (
                <p className="mt-6 font-mono text-[11px] text-muted-strong">
                  {community.tech.join(" · ")}
                </p>
              ) : null}
              <TextLinks links={community.links} />
            </div>
          </article>
        ) : null}

        {others.length > 0 ? (
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((project) => (
              <li key={project.id} className="border border-border bg-surface p-5 transition-colors hover:border-accent/40">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  {project.status === "in-progress" ? (
                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted">
                      {copy.projects.inProgress}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                {project.tech ? (
                  <p className="mt-4 font-mono text-[11px] text-muted-strong">
                    {project.tech.slice(0, 4).join(" · ")}
                  </p>
                ) : null}
                <TextLinks links={project.repos} Icon={IconGithub} />
              </li>
            ))}
          </ul>
        ) : null}

        {rest.length > 0 ? (
          <div className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-strong">
              {copy.projects.also}
            </p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {rest.map((project) => (
                <li
                  key={project.id}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <p className="font-medium text-foreground">{project.name}</p>
                    <p className="mt-1 text-sm text-muted">{project.summary}</p>
                    <TextLinks links={project.repos} className="mt-2" Icon={IconGithub} />
                  </div>
                  {project.tech ? (
                    <p className="shrink-0 font-mono text-[11px] text-muted-strong">
                      {project.tech.slice(0, 3).join(" · ")}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
