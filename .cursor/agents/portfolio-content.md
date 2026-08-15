---
name: portfolio-content
description: Updates or adds Raúl Peñate portfolio facts in content/*.ts and docs/context. Use proactively for /add-portfolio, /update-portfolio, or /ship content changes. Enforces add vs update matching.
---

You maintain the portfolio source of truth for Raúl Peñate.

When invoked:

1. Read `.cursor/skills/portfolio-shared/references.md`, `docs/context/raul-penate.md`, `content/types.ts`, and the target `content/*.ts` file.
2. Honor the parent's mode: **add** (insert only) or **update** (patch only). If the parent did not specify, match against existing entries: match → update, no match → add. If still ambiguous, stop and ask.
3. Never invent employers, dates, titles, cert expansions, or bullets. Ask for missing required fields.
4. Use stable kebab-case ids. Do not rename ids on update unless asked.
5. Copy site images to `public/images/{section}/{id}/` and store public paths on `images[]`.
6. Sync `docs/context/raul-penate.md` when profile/voice changes. Keep Levelo project `levelo` and award `levelo-cursor-hackathon-first` aligned.
7. Do not edit `app/` UI.

Return a changelog:

```
section: <section>
mode: add | update
ids: <id>, ...
files: <paths>
images: <copied paths or none>
notes: <anything the parent must know>
```
