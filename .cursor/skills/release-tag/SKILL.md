---
name: release-tag
description: Suggest a semver version from commit messages, create a git tag, and publish a GitHub Release with formatted notes. Use when you want to tag and release the latest changes from this repo.
disable-model-invocation: true
---

# Release tag + GitHub Release

This skill creates a `vMAJOR.MINOR.PATCH` git tag and a GitHub Release for the latest commit on the current branch.

## Preconditions

1. You have `gh` installed and authenticated:
   - `which gh`
   - `gh auth status`
2. You have permission to create tags/releases in this repo.
3. The repo tags use the `vX.Y.Z` convention (e.g. `v0.1.0`).

## What the skill does

1. Finds the latest existing tag `vX.Y.Z`
2. Collects commits since that tag up to `HEAD`
3. Suggests a semver bump:
   - **major** if any commit subject includes `BREAKING` or `feat!`
   - **minor** if any commit subject starts with `feat` (e.g. `feat:` or `feat(scope):`)
   - **patch** otherwise
4. Builds a nice release body:
   - Summary line
   - Bullet list of commit subjects grouped by type (feat/fix/other)
   - Link to compare range
5. Creates:
   - annotated git tag locally
   - pushes the tag to `origin`
   - publishes a GitHub Release using `gh release create`

## Output format (release notes)

The skill uses this template:

```markdown
## What changed
- <bullet>
- <bullet>

## Details
<optional additional bullets>

## Compare
- https://github.com/<owner>/<repo>/compare/<oldTag>...<newTag>
```

## Implementation steps (what the agent should run)

1. Read repo metadata:
   - `git remote get-url origin` to infer `<owner>/<repo>`
2. Read latest tag:
   - `git describe --tags --abbrev=0`
3. Read commit subjects since last tag:
   - `git log <oldTag>..HEAD --pretty=format:%s`
4. Compute bump + next version (semver).
5. Propose the tag to the user:
   - If the user rejects the suggestion, allow them to provide the exact version.
6. Create tag + release:
   - `git tag -a <newTag> -m "<newTag>"`
   - `git push origin <newTag>`
   - `gh release create <newTag> --title <newTag> --notes "<body>" --verify-tag`

## Version suggestion examples

- `feat: add locale toggle` => minor bump
- `fix: handle undefined prop` => patch bump
- `feat!: remove breaking API` or `BREAKING CHANGE:` => major bump

