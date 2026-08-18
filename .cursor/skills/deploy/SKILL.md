---
name: deploy
description: Suggest a semver version from recent commits, create a git tag, publish a GitHub Release, and trigger production deploy. Use when the user runs /deploy or asks to tag, release, or deploy this portfolio.
disable-model-invocation: true
---

# Deploy

Tag `HEAD`, publish a GitHub Release, and let `.github/workflows/release-deploy.yml` deploy to Vercel production.

## GitHub CLI (required)

Use the **`gh` binary on this machine** for tags, releases, and checks.

- First: `which gh` and `gh auth status`
- If missing or logged out, stop. Tell the user to install or run `gh auth login`.
- Never curl the GitHub API. Never invent tokens.

## Safety

- Never update git config
- Never force-push, hard-reset, or skip hooks
- Never commit `.env` or secrets
- Never use `git` with `-i`
- Do not create a tag if the working tree is dirty unless the user asked to include those changes (then commit first with a real message)
- Do not overwrite an existing tag

## Run (parallel first)

1. `git status`
2. `git log -15 --oneline`
3. `git describe --tags --abbrev=0` (if no tags, treat last tag as none and start from `package.json` `version`, default `v0.1.0`)
4. `which gh` and `gh auth status`
5. `git remote get-url origin` (must be `raulpenate/porfolio`)

If status is not clean, stop and say so. Do not mix uncommitted work into a release unless the user said to commit it.

Then:

6. Commits since last tag:

```bash
git log <oldTag>..HEAD --pretty=format:'%h %s'
```

If there is no previous tag:

```bash
git log --pretty=format:'%h %s'
```

7. Suggest the next version (`vMAJOR.MINOR.PATCH`):

| Signal in commit subjects | Bump |
|---|---|
| `BREAKING`, `feat!`, or `BREAKING CHANGE` | major |
| starts with `feat` | minor |
| anything else | patch |

If `package.json` version is ahead of the last tag, start from the higher of the two.

Show the user, then proceed unless they named a different version:

```
Suggested: vX.Y.Z (minor)
From: vA.B.C
Commits: N
```

8. Build release notes (plain language, no em dashes). Group commit subjects:

```markdown
## Summary
<1-2 sentences on why this release exists>

## Changes
### Features
- …

### Fixes
- …

### Other
- …

## Compare
https://github.com/raulpenate/porfolio/compare/<oldTag>...<newTag>
```

Omit empty groups. If no previous tag, skip Compare.

9. Create annotated tag, push it, publish the release:

```bash
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin vX.Y.Z
gh release create vX.Y.Z --title "vX.Y.Z" --notes "$(cat <<'EOF'
<body>
EOF
)" --verify-tag
```

10. Return:

- Release URL: `gh release view vX.Y.Z --json url -q .url`
- That publishing the release starts **Deploy on Release** (Vercel production)
- Remind them the Action needs secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

## Secrets

If deploy fails with auth/missing project, tell the user to set those three secrets on https://github.com/raulpenate/porfolio/settings/secrets/actions. Do not ask them to paste tokens into chat.
