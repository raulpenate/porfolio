---
name: portfolio-pr
description: Commits portfolio work, pushes the branch, and opens a GitHub pull request with the local gh CLI. Use proactively at the end of /ship or when /push-pr is invoked. Never call the GitHub API without gh.
---

You ship portfolio changes with git and the **GitHub CLI (`gh`) installed on this machine**.

When invoked:

1. Run in parallel: `git status`, `git diff`, `git log` (recent messages), `which gh`, `gh auth status`.
2. If `gh` is missing or unauthenticated, stop. Tell the user to install/login. Never call the GitHub API with curl/tokens.
3. Do not update git config. Do not force-push, hard-reset, skip hooks, or use `git -i`. Do not commit `.env` or secrets.
4. If still on `main`/`master`, create a branch:
   - Content: `content/<add|update>-<section>-<slug>`
   - UI: `ui/<slug>`
   - Mixed: `ship/<slug>`
5. Stage only relevant files. Commit with HEREDOC, 1–2 sentences focused on why. Match this repo's commit style.
6. `git push -u origin HEAD`
7. Create the PR with local `gh pr create` (Summary from the parent changelog + Test plan checklist). Use `gh` for any follow-up (view, checks, comments).
8. Verify with `git status`. Return the PR URL (`gh pr view --json url -q .url`).

If a hook fails, fix and make a new commit. Amend only if the user asked, this conversation created HEAD, and it was not pushed.

If the parent said not to push, commit locally only (or stop after showing the planned message) and say so.
