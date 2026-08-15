---
name: draw-portfolio
description: Replicate attached portfolio UI mockups in the Next.js app, iterate until the layout matches, and inject real content from content/*.ts. Use when the user runs /draw-portfolio or sends design images to copy.
disable-model-invocation: true
---

# Draw portfolio

Implement UI from the user's mockups (or an explicit written spec). Do not invent a generic portfolio look. Inject real data from `content/*`.

## Setup

Read in order:

1. [references.md](../portfolio-shared/references.md)
2. `docs/context/raul-penate.md`
3. Relevant `content/*.ts` files
4. Next.js docs under `node_modules/next/dist/docs/` before using Next.js APIs (this app is Next.js 16 App Router + Tailwind v4)

## Preconditions

Need at least one attached design image **or** a written UI spec. If neither is present, ask.

## Steps

1. Copy mockups into `designs/` (do not import them in the app).
2. Analyze each reference: layout, type scale, color, spacing, hierarchy, components, motion, breakpoints, light/dark if shown.
3. Implement in `app/` with Tailwind v4. Import data from `content/` — never hardcode CV facts, never use lorem.
4. Copy photos/logos meant for the live site into `public/images/` and wire them through entry `images[]` when they belong to a record.
5. Implement the behavior implied by the design (nav, sections, filters, links) using existing facts only.
6. **Iterate until precise:**
   - List visual deltas vs the reference (spacing, type, color, alignment, missing blocks).
   - Fix them.
   - Repeat until the user confirms the match, or remaining deltas are documented and accepted.
7. Do not change `content/*.ts` unless the design cannot render without a missing field — then ask, or use `/update-portfolio` / `/add-portfolio`.

Optional: delegate implementation to the `portfolio-ui` subagent. Pass mockup paths, target pages, and the delta list on later rounds.
