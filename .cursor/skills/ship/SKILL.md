---
name: ship
description: Orchestrate a full portfolio change — classify add vs update vs UI, apply content, replicate designs, then commit and open a PR. Use when the user runs /ship or says to add, update, or draw portfolio content and ship it.
---

# Ship portfolio

End-to-end flow. Classify the request, mutate content and/or UI, then open a PR unless the user says not to push.

## Setup

Read:

1. [references.md](../portfolio-shared/references.md)
2. `docs/context/raul-penate.md`

## Classify

| Intent | Signal | Next |
|---|---|---|
| content-add | "add", new job/school/project/cert/award | `add-portfolio` + `portfolio-content` |
| content-update | "update", existing employer/role/entry | `update-portfolio` + `portfolio-content` |
| UI-only | mockups / "create this UI" / "replicate" | `draw-portfolio` + `portfolio-ui` |
| mixed | new or changed facts **and** design images | content first, then UI |

If add vs update is unclear, check `content/*` for a match. Match exists → update. No match → add. Still ambiguous → ask 1–2 questions.

If section, dates, or required names are missing, ask before writing.

## Run

1. **Content** (if any): follow `.cursor/skills/add-portfolio/SKILL.md` or `.cursor/skills/update-portfolio/SKILL.md`. Prefer the `portfolio-content` subagent. Keep its changelog.
2. **UI** (if mockups or UI intent): follow `.cursor/skills/draw-portfolio/SKILL.md`. Prefer the `portfolio-ui` subagent. Pass the changelog so the UI uses the new facts.
3. **PR** (unless the user said not to push): follow `.cursor/skills/push-pr/SKILL.md` via the `portfolio-pr` subagent. Pass the changelog as the PR summary. All GitHub actions must use the local `gh` CLI.

Do not duplicate those skills' rules here. Do not invent UI when there is no mockup or written spec. Do not invent CV facts.
