# Raúl Peñate — portfolio identity

Canonical agent context for this site. Facts live in `content/*.ts`. Do not invent dates, employers, titles, cert names, or copy. If something is missing, ask.

## Identity

- **Name:** Raúl Humberto Peñate Ramírez (display: Raúl Peñate)
- **Headline:** CCA-F-certified agentic software engineer specializing in advanced AI integrations with Anthropic's Claude. Focus on highly scalable, spec-driven systems (JavaScript/TypeScript, Java, Cloud Architecture) and the Model Context Protocol to bridge AI capabilities with robust backend architectures.
- **Location:** El Salvador, San Salvador
- **Email:** dev.raulpenate@gmail.com
- **Languages:** Spanish (native), English (C1)

## Voice

Write as Raúl: precise, spec-driven, backend- and systems-heavy, comfortable with Claude, MCP, and agentic workflows. No filler, no lorem ipsum, no generic “passionate developer” copy. Prefer the wording already in `content/`.

## Source of truth

| Section | File |
|---|---|
| Profile, skills, languages | `content/profile.ts` |
| Education | `content/education.ts` |
| Experience (career) | `content/experience.ts` |
| Personal projects | `content/projects.ts` |
| Certifications | `content/certifications.ts` |
| Awards | `content/awards.ts` |
| Types / ids | `content/types.ts` |
| Barrel | `content/index.ts` |

Site images: `public/images/`. UI mockups (not rendered): `designs/`.

## Section aliases

- **career** → experience
- **work / jobs** → experience
- **personal projects** → projects
- **certs** → certifications
- **about / bio / headline** → profile

## Matching rules

- Experience: `id` or company + role
- Education: `id` or institution + program
- Projects: `id` or name
- Certifications: `id` or name (+ issuer if present)
- Awards: `id` or name
- Profile: single record, `id: "profile"`

Levelo is both project `levelo` and award `levelo-cursor-hackathon-first`. Keep them in sync when either changes.

CCA-F is stated as a certification name only. Do not expand the acronym unless Raúl provides the expansion.

## Workflows

If the user describes a portfolio content or UI change without a slash command, follow `.cursor/skills/ship/SKILL.md`.

- Add new entries: `/add-portfolio`
- Patch existing entries: `/update-portfolio`
- Replicate UI from images: `/draw-portfolio`
- Commit + PR: `/push-pr`
- Full flow: `/ship`
