---
name: update-portfolio
description: Patch an existing portfolio entry (education, experience, projects, articles, certifications, awards, or profile) using user-provided text, dates, and images. Use when the user runs /update-portfolio or asks to update existing career, education, project, article, cert, or award content.
disable-model-invocation: true
---

# Update portfolio

Patch **existing** content only. Do not create new entries.

## Setup

Read in order:

1. [references.md](../portfolio-shared/references.md)
2. `docs/context/raul-penate.md`
3. `content/types.ts` and the target `content/*.ts` file

## Steps

1. Identify the section (education, experience/career, projects, articles, certifications, awards, profile). If missing or ambiguous, ask.
2. Find the target by `id` or the match keys in the shared reference.
3. **If no match:** stop. Tell the user to run `/add-portfolio`.
4. **If multiple matches:** ask which `id` to update.
5. Apply only the fields the user provided (text, dates as `YYYY-MM`, bullets, tech, images). Leave unspecified fields unchanged.
6. Copy new site images to `public/images/{section}/{id}/` and append those paths to `images[]`.
7. If profile/voice changed, sync `docs/context/raul-penate.md`.
8. If Levelo project or award changed, keep the linked record in sync.
9. Report the changelog format from the shared reference.

Optional: delegate to the `portfolio-content` subagent. Pass section, match key, and the new facts.
