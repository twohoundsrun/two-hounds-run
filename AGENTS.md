# AGENTS.md

Single-page marketing site for the Two Blue Hounds studio. Not a normal Next.js repo: it is Vite + React on **Vinext** (`vinext` 0.0.50), a Next-compatible App Router runtime that builds to a **Cloudflare Worker**. `next`/`next.config.ts` are present only for type/font compatibility (`next/font/google`); do not edit `next.config.ts` to change behavior, it is not read.

## Commands

- `npm run install:ci` — the only supported install. Requires Linux `flock`, GNU `timeout`, `curl`, `sha256sum`. Runs a bounded `npm ci` with an integrity preflight on the pinned vinext tarball. Plain `npm install` will not set up the validated environment.
- `npm run dev` — Vite dev server (vinext + Cloudflare bindings).
- `npm run build` — `scripts/build-verified.sh`: runs a `timeout`-bounded `vinext build` (default 3m, `SITES_BUILD_TIMEOUT`), then validates the artifact. Result: `dist/server/index.js` + `dist/.openai/hosting.json`.
- `npm test` — full `npm run build` + `node --test tests/rendered-html.test.mjs`. Slow; the test imports `dist/server/index.js` and asserts the `/` HTML includes a `codex-preview: development` meta tag. That meta comes from `app/layout.tsx` (`metadata.other`) — removing it breaks the test.
- `npm run lint` — eslint only, ignores `dist`/`.next`. `build/` is excluded by the eslint-config-next defaults, so `build/sites-vite-plugin.ts` is never linted.
- `npm run db:generate` — `drizzle-kit generate` (writes to `drizzle/`, which the build plugin packages into `dist/.openai/drizzle`).

## Environment quirks

- `build`, `test`, `lint`, `db:generate`, and `install:ci` all re-exec themselves through `scripts/sites-env.sh`, which pins `HOME`, `TMPDIR`, npm cache, and Wrangler state under `.sites-runtime/`. Don't bypass it; plain `npm` commands from a normal shell may write to real `~/.npm` and confuse the artifact checks.
- Build/lint/test fail without the Linux-only `flock`/GNU `timeout` utilities.
- Node >= 22.13 required.

## Architecture

- `app/page.tsx` — the whole homepage: all copy, the `services`/`projects` arrays, and the temporary `Mark` logo. Contact email `collindk94@gmail.com` is hardcoded here.
- `app/globals.css` — full design system (colors, spacing, layout).
- `worker/index.ts` — Cloudflare Worker entry. Handles `/_vinext/image` optimization and proxies everything else to the vinext app-router handler. Bindings: `ASSETS`, `DB` (D1), `IMAGES`.
- `.openai/hosting.json` — toggles D1/R2 bindings (`d1`, `r2`; currently both `null`). Changing them rebuilds local bindings in `vite.config.ts`. `db/index.ts` reads the D1 `DB` binding via `cloudflare:workers` env, which only exists inside the worker runtime.
- `db/schema.ts` — intentionally empty; `examples/d1/db/schema.ts` + `examples/d1/app/api/notes/route.ts` show how to add a D1-backed route.
- `build/sites-vite-plugin.ts` — copies `.openai/hosting.json` and `drizzle/` into `dist/.openai/` on build; `validate-artifact.sh` fails the build if those are missing.
- `app/chatgpt-auth.ts` — auth helper (OpenAI `oai-authenticated-user-*` headers); currently unused by the page.

## Gotchas

- This repo is intentionally a source copy without git history (not a git repo). Deployment identity is excluded.
- Not a static site: hosting is Cloudflare/Vinext only; GitHub Pages would need a different build config.
- No CI workflows and no test fixtures beyond the single `tests/rendered-html.test.mjs`.
