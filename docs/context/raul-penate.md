# Raúl Peñate — portfolio identity

Canonical agent context for this site. Facts live in `content/*.ts`. Do not invent dates, employers, titles, cert names, or copy. If something is missing, ask.

## Identity

- **Name:** Raúl Humberto Peñate Ramírez (display: Raúl Peñate)
- **Headline:** CCA-F certified agentic software engineer. I work with Claude. I handle architecture, code, tests, and production deploys. JavaScript/TypeScript, Java, cloud architecture, and MCP.
- **Location:** El Salvador, San Salvador
- **Email:** dev.raulpenate@gmail.com
- **Links:** [LinkedIn](https://www.linkedin.com/in/raulpenate/), [GitHub](https://github.com/raulpenate), [Stack Overflow](https://stackoverflow.com/users/15445661/raul-penate), [Luma](https://luma.com/user/raulpenate)
- **Languages:** Spanish (native), English (C1)
- **Portrait:** `/images/profile/raul-penate-portrait.png`

## Voice

Write as Raúl: short sentences, backend- and systems-heavy, comfortable with Claude, MCP, and agentic workflows. No filler, no lorem ipsum, no generic “passionate developer” copy, no em dashes, no marketing slogans. Prefer the wording already in `content/`.

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

English in `content/*.ts` is the source of truth. Spanish lives in `content/es.ts` as a translation of the same ids. Do not add Spanish-only facts.

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

Claude For Dummies SV (`claude-for-dummies-sv`) is El Salvador's first Claude and Notion MCP meetup. Raúl helped and spoke (Don Quijote en la Era del Silicio), with support from Ai Labs (https://www.ailabs.sv/en). Hosted at Universidad Francisco Gavidia. Do not copy Ravn's team CCAF headcount onto his personal site.

CCA-F is stated as a certification name only. Do not expand the acronym unless Raúl provides the expansion.

## Workflows

If the user describes a portfolio content or UI change without a slash command, follow `.cursor/skills/ship/SKILL.md`.

- Add new entries: `/add-portfolio`
- Patch existing entries: `/update-portfolio`
- Replicate UI from images: `/draw-portfolio`
- Commit + PR: `/push-pr`
- Full flow: `/ship`
