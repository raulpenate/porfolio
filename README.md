# Raúl Peñate Portfolio

Next.js portfolio site. Content lives in `content/*` and is rendered by the app.

## Arch installer (`archinstaller`)

This portfolio links to my `archinstaller` script:

- It is a Bash-based script to install Arch Linux plus the tools I use day to day.
- It was built long before AI tooling was mainstream.
- The first versions took many hours of iteration and debugging to make it reliable.

## Commit and push workflow (diagram)

```mermaid
flowchart TD
  A[Update content and/or UI] --> B[Run checks (lint/build)]
  B --> C[git status + git diff]
  C --> D[git commit -m "message"]
  D --> E[git push -u origin HEAD]
  E --> F[Open PR with `gh pr create`]
```

Example commands:

```bash
pnpm lint
pnpm build
git status
git diff
git commit -m "..."
git push -u origin HEAD
gh pr create --title "..." --body "..."
```
