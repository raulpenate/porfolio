# Portfolio shared reference

Read this file plus `docs/context/raul-penate.md` and `content/types.ts` before mutating content or UI.

## Files

| Section | Path | Match on |
|---|---|---|
| profile | `content/profile.ts` | `id: "profile"` |
| education | `content/education.ts` | `id` or institution + program |
| experience | `content/experience.ts` | `id` or company + role |
| projects | `content/projects.ts` | `id` or name |
| articles | `content/articles.ts` | `id` or title + href |
| certifications | `content/certifications.ts` | `id` or name (+ issuer if given) |
| awards | `content/awards.ts` | `id` or name |

Aliases: career/work/jobs → experience. certs → certifications. about/bio/headline → profile. writing/posts → articles.

## IDs

New entries get a stable kebab-case `id`.

- Experience: `{company}-{role-slug}-{start-year}` e.g. `ravn-backend-2025`
- Education: `{institution-slug}-{program-slug}-{start-year}`
- Project: `{name-slug}`
- Article: `{title-slug}`
- Certification: `{issuer-slug}-{name-slug}` or `{name-slug}`
- Award: `{name-slug}`

Do not rename an `id` during an update unless the user asks.

## Dates

Use `YYYY-MM`. Ongoing roles use `end: "present"`. Do not guess month or year.

## Images

- Site photos, logos, award shots: copy into `public/images/{section}/{id}/` and store public paths on the entry `images[]` (e.g. `/images/experience/ravn-backend-2025/hero.png`).
- UI mockups: copy into `designs/` (not imported by the app).
- Do not commit secrets or unrelated downloads.

## Add vs update

**Add:** insert only. If a match exists, stop and tell the user to use `/update-portfolio`.

**Update:** patch only. If no match exists, stop and tell the user to use `/add-portfolio`.

If several entries could match, or the section is unclear, ask 1–2 questions. Do not guess.

## Profile sync

After changing `content/profile.ts` (name, headline, location, email, languages, skills), update the Identity section in `docs/context/raul-penate.md` so both stay aligned.

## Levelo

Project `levelo` and award `levelo-cursor-hackathon-first` are linked via `relatedProjectId`. If one side changes in a way that affects the other, update both.

## Changelog

After content edits, report:

```
section: <section>
mode: add | update
ids: <id>, ...
files: <paths>
images: <copied paths or none>
```

## GitHub

PRs, checks, issues, releases, and other GitHub work use the **`gh` binary on this machine** (`which gh`, `gh auth status`, then `gh pr create` / `gh release create` / `gh pr view`). Never curl the GitHub API or invent tokens. If `gh` is missing or logged out, stop and ask the user to install or run `gh auth login`.

Production deploy: `/deploy` tags `HEAD`, publishes a GitHub Release, and `.github/workflows/release-deploy.yml` deploys to Vercel.

## UI

Do not invent a layout. Implement UI only from attached mockups or an explicit written spec (`/draw-portfolio`). Inject real `content/*` data. Read Next.js guides in `node_modules/next/dist/docs/` before using Next.js APIs.
