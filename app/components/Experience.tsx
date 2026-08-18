"use client";

import type { Experience } from "@/content";
import { formatRange } from "../lib/dates";
import { useLocale } from "./LocaleProvider";

const PRIMARY_COUNT = 6;

type CompanyGroup = {
  company: string;
  roles: Experience[];
};

function groupConsecutiveByCompany(roles: Experience[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  for (const role of roles) {
    const last = groups[groups.length - 1];
    if (last && last.company === role.company) {
      last.roles.push(role);
    } else {
      groups.push({ company: role.company, roles: [role] });
    }
  }
  return groups;
}

function sharedLocation(roles: Experience[]): string | null {
  const first = roles[0]?.location;
  if (!first) return null;
  return roles.every((role) => role.location === first) ? first : null;
}

function sharedEmploymentType(roles: Experience[]): string | undefined {
  const first = roles[0]?.employmentType;
  return roles.every((role) => role.employmentType === first) ? first : undefined;
}

function companyRange(roles: Experience[]): { start: string; end: string } {
  const start = roles.reduce((min, role) => (role.start < min ? role.start : min), roles[0].start);
  const end = roles.some((role) => role.end === "present")
    ? "present"
    : roles.reduce((max, role) => (role.end > max ? role.end : max), roles[0].end);
  return { start, end };
}

function RoleCopy({
  role,
  showMeta,
}: {
  role: Experience;
  showMeta: boolean;
}) {
  return (
    <>
      {showMeta ? (
        <p className="mt-1 text-sm text-muted">
          {role.location}
          {role.employmentType ? ` · ${role.employmentType}` : ""}
        </p>
      ) : null}
      <ul className="mt-4 space-y-2">
        {(role.end === "present" ? role.bullets : role.bullets.slice(0, 4)).map((bullet) => (
          <li key={bullet} className="text-sm leading-relaxed text-muted">
            {bullet}
          </li>
        ))}
      </ul>
      {role.tech && role.tech.length > 0 ? (
        <p className="mt-4 font-mono text-[11px] text-muted-strong">{role.tech.join(" · ")}</p>
      ) : null}
    </>
  );
}

export function ExperienceSection({ experience }: { experience: Experience[] }) {
  const { locale, copy } = useLocale();
  const primary = experience.slice(0, PRIMARY_COUNT);
  const earlier = experience.slice(PRIMARY_COUNT);
  const groups = groupConsecutiveByCompany(primary);

  return (
    <section id="experience" className="border-b border-border px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {copy.experience.title}
        </h2>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {groups.map((group) => {
            if (group.roles.length === 1) {
              const role = group.roles[0];
              return (
                <li key={role.id} className="grid gap-4 py-8 md:grid-cols-[11rem_1fr] md:gap-10">
                  <p className="font-mono text-xs text-muted tabular-nums">
                    {formatRange(role.start, role.end, locale)}
                  </p>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-xl font-medium tracking-tight text-foreground">
                        {role.role}
                      </h3>
                      <p className="text-sm text-accent">{role.company}</p>
                    </div>
                    <RoleCopy role={role} showMeta />
                  </div>
                </li>
              );
            }

            const location = sharedLocation(group.roles);
            const employmentType = sharedEmploymentType(group.roles);
            const span = companyRange(group.roles);

            return (
              <li key={group.roles[0].id} className="py-8">
                <div className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-10">
                  <p className="font-mono text-xs text-muted tabular-nums">
                    {formatRange(span.start, span.end, locale)}
                  </p>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-foreground">
                      {group.company}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {location}
                      {employmentType ? ` · ${employmentType}` : ""}
                    </p>
                  </div>
                </div>

                <ol className="mt-5 space-y-5 border-l border-border pl-5 md:ml-[calc(11rem+2.5rem)]">
                  {group.roles.map((role) => (
                    <li key={role.id}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="text-lg font-medium tracking-tight text-foreground">
                          {role.role}
                        </h4>
                        <p className="font-mono text-xs text-muted tabular-nums">
                          {formatRange(role.start, role.end, locale)}
                        </p>
                      </div>
                      <RoleCopy
                        role={role}
                        showMeta={!location || role.location !== location || role.employmentType !== employmentType}
                      />
                    </li>
                  ))}
                </ol>
              </li>
            );
          })}
        </ol>

        {earlier.length > 0 ? (
          <div className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-strong">
              {copy.experience.earlier}
            </p>
            <ul className="mt-4 space-y-3">
              {earlier.map((role) => (
                <li
                  key={role.id}
                  className="flex flex-col gap-1 text-sm sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-muted">
                    {role.role} · {role.company}
                    {role.employmentType ? ` (${role.employmentType})` : ""}
                  </span>
                  <span className="font-mono text-xs text-muted tabular-nums">
                    {formatRange(role.start, role.end, locale)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
