---
name: push-pr
description: Commit portfolio changes, push the branch, and open a GitHub pull request with the local gh CLI. Use when the user runs /push-pr or asks to commit, push, and create a PR for this repo.
disable-model-invocation: true
---

# Push PR

Commit, push, and open a PR. Delegate to the `portfolio-pr` subagent when available.

## GitHub CLI (required)

Use the **`gh` binary installed on this machine** for every GitHub action (PRs, checks, issues, releases, repo metadata).

- Before GitHub work: `which gh` and `gh auth status`
- If `gh` is missing or unauthenticated, stop and tell the user to install/login (`gh auth login`). Do not invent a workaround.
- Never call the GitHub REST/GraphQL API with `curl`, `wget`, or hardcoded tokens.
- Never use the GitHub web UI as a substitute when `gh` can do it.

## Safety

- Never update git config
- Never force-push, hard-reset, or skip hooks (`--no-verify`, `--no-gpg-sign`)
- Never commit `.env`, credentials, or secrets
- Never use `git` with `-i`
- Do not push if the user said not to

## Steps (run git commands in parallel first)

1. `git status`
2. `git diff` (staged and unstaged)
3. `git log` (recent messages, match this repo's style)
4. Confirm branch tracking / whether a remote exists

Then sequentially:

5. Create a branch if still on `main`/`master`:
   - Content: `content/<add|update>-<section>-<id-or-slug>`
   - UI: `ui/<short-slug>`
   - Mixed: `ship/<short-slug>`
6. Stage only relevant files (include `content/`, `docs/context/`, `app/`, `public/images/`, `designs/`, `.cursor/` as applicable).
7. Commit with HEREDOC (1–2 sentences, why not what):

```bash
git commit -m "$(cat <<'EOF'
Message here.

EOF
)"
```

8. `git push -u origin HEAD`
9. Create the PR with local `gh` (not the API):

```bash
gh pr create --title "the pr title" --body "$(cat <<'EOF'
## Summary
- bullet

## Test plan
- [ ] checklist

EOF
)"
```

10. Run `git status` after the commit. Return the PR URL from `gh` (`gh pr view --json url -q .url` if needed).

If a pre-commit hook fails, fix and create a **new** commit. Do not amend unless the user asked, HEAD was created in this conversation, and the commit was not pushed.
