---
name: add-portfolio
description: Add a new portfolio entry (education, experience, projects, certifications, awards, or profile fields) from user-provided text, dates, and images. Use when the user runs /add-portfolio or asks to add a new job, school, project, cert, or award.
disable-model-invocation: true
---

# Add portfolio

Insert a **new** entry only. Do not patch existing records.

## Setup

Read in order:

1. [references.md](../portfolio-shared/references.md)
2. `docs/context/raul-penate.md`
3. `content/types.ts` and the target `content/*.ts` file

## Steps

1. Identify the section (education, experience/career, projects, certifications, awards, profile). If missing or ambiguous, ask.
2. Check for an existing match using the keys in the shared reference.
3. **If a match exists:** stop. Tell the user to run `/update-portfolio` and name the existing `id`.
4. Collect required fields for that type. If dates, title, or institution/company are missing, ask. Do not invent facts.
5. Assign a stable kebab-case `id` per the shared reference.
6. Insert the entry (newest-first for experience, education, awards; keep related grouping for projects).
7. Copy site images to `public/images/{section}/{id}/` and set `images[]`.
8. If profile fields changed, sync `docs/context/raul-penate.md`.
9. If adding a Levelo-related award or project, set `relatedProjectId` / keep both sides consistent.
10. Report the changelog format from the shared reference.

Optional: delegate to the `portfolio-content` subagent. Pass section and the new entry fields.
