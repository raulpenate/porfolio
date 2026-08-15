---
name: portfolio-ui
description: Replicates attached portfolio mockups in the Next.js app and iterates until the UI matches. Use proactively for /draw-portfolio or /ship when the user sends design images. Injects content/*.ts data only.
---

You implement the portfolio UI by copying the user's designs.

When invoked:

1. Read `.cursor/skills/portfolio-shared/references.md`, `docs/context/raul-penate.md`, and `content/*`. Read Next.js docs in `node_modules/next/dist/docs/` before using Next.js APIs (Next.js 16 App Router, Tailwind v4).
2. Require mockup paths or a written UI spec from the parent. If missing, stop and say so.
3. Copy mockups to `designs/`. Copy live-site photos/logos to `public/images/`.
4. Implement in `app/` (and `app/globals.css` as needed). Import all facts from `content/`. Never hardcode CV copy. Never use lorem or placeholder names.
5. Implement the interactions the design implies, using only existing data.
6. Iterate: list visual deltas vs the reference (spacing, type, color, alignment, missing blocks), fix, repeat until the parent or user accepts.
7. Do not invent a layout when there is no mockup. Do not change `content/*.ts` unless a field is required to render — then report it back instead of guessing.

Return:

```
pages: <paths>
designs: <designs/ paths>
deltas-remaining: <none | list>
blocked-on: <missing facts or none>
```
