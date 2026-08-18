# Raúl Peñate Portfolio

Next.js site. Content lives in `content/*` and is rendered by the app.

## Tech

- Next.js `16.3.1`
- React `19.2.8`
- pnpm `11.22.0`
- Build output: `out/` (Next.js `output: "export"` used for GitHub Pages)

## Prerequisites

- Node.js (GitHub Pages workflow uses Node `22`)
- pnpm (repo specifies `packageManager: pnpm@11.22.0`)

## Install

```bash
corepack enable
pnpm install --frozen-lockfile
```

## Run locally

```bash
pnpm dev
```

Open the URL printed by `next dev`.

## Build for production (static export)

```bash
pnpm build
```

This generates the exported site in `out/`.

## Lint

```bash
pnpm lint
```

## Security

See `SECURITY.md`.
