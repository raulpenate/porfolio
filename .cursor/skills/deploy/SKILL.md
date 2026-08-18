---
name: deploy
description: Push to main so GitHub Pages rebuilds this portfolio, or check the latest Pages deploy. Use when the user runs /deploy or asks to deploy this portfolio.
disable-model-invocation: true
---

# Deploy

Production is GitHub Pages. Pushing `main` runs `.github/workflows/github-pages.yml`. There is no Vercel deploy.

Site URL: https://raulpenate.github.io/porfolio/

## GitHub CLI (required)

Use the **`gh` binary on this machine** for checks and runs.

- First: `which gh` and `gh auth status`
- If missing or logged out, stop. Tell the user to install or run `gh auth login`.
- Never curl the GitHub API. Never invent tokens.

## Safety

- Never update git config
- Never force-push, hard-reset, or skip hooks
- Never commit `.env` or secrets
- Never use `git` with `-i`

## Run (parallel first)

1. `git status`
2. `git branch --show-current`
3. `git remote get-url origin` (must be `raulpenate/porfolio`)
4. `which gh` and `gh auth status`

Then:

5. If the working tree is dirty, commit only if the user asked to include those changes. Otherwise stop and say so.
6. If the current branch is not `main`, stop. Do not merge unless the user asked.
7. Push `main` if it is ahead of `origin/main`:

```bash
git push origin HEAD
```

8. Watch the Pages workflow:

```bash
gh run list --workflow=github-pages.yml --limit 3
gh run watch
```

9. Return:

- Site: https://raulpenate.github.io/porfolio/
- That GitHub Pages must use **GitHub Actions** as the source (Settings → Pages)
- No Vercel secrets are required

If the first Pages run fails with a missing environment or “Pages is not enabled”, tell the user to open https://github.com/raulpenate/porfolio/settings/pages and set Source to **GitHub Actions**.
