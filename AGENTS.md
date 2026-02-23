# AGENTS.md

This file guides agentic coding assistants working in this repo.

## Project overview

- Next.js app router site with MDX blog posts.
- Static export enabled (`output: "export"`).
- Tailwind CSS v4 with typography plugin and custom prose styles.
- TypeScript in strict mode; React 19.

## Package manager

- Use npm; lockfile is `package-lock.json`.
- Node version is pinned in `.nvmrc`.

## Commands

- Dev server: `npm run dev` (Next.js dev).
- Build: `npm run build` (creates static export).
- Start: `npm run start` (serve build output).
- Lint: `npm run lint` (Next.js lint).
- Format all: `npx prettier --write .`
- Format staged: `npx lint-staged` (runs on pre-commit).

### Tests

- No test runner is configured.
- There is no `npm run test` script.
- If you add tests, also document single-test commands here.

### Run a single test

- Not available (no test framework configured).

## Repo layout

- `app/` Next.js app router pages and components.
- `app/sections/` page sections.
- `app/components/` shared components.
- `app/blog/` blog list and post routes.
- `app/blog/lib/mdx.ts` MDX discovery utilities.
- `posts/` MDX content files.
- `public/` static assets.
- `app/globals.css` Tailwind entry and prose styles.

## Linting and formatting

- ESLint config extends `next/core-web-vitals` and `prettier`.
- Prettier uses `prettier-plugin-tailwindcss`.
- Print width is 120.
- Husky pre-commit runs `lint-staged` which runs Prettier on all staged files.

## TypeScript and types

- `strict: true` and `noEmit: true` are enabled.
- Use `import type` for type-only imports.
- Props are commonly typed as `Readonly<...>` or `readonly` fields.
- Prefer `interface` for component props (current style).
- Avoid `any`; when unavoidable, confine it to content parsing.

## React and Next.js conventions

- App router is used; pages live in `app/**/page.tsx`.
- Server components are the default; add `"use client"` only when needed.
- Files that rely on server-only behavior import `"server-only"` at the top.
- Route metadata is defined via `export const metadata`.
- Static params are generated via `generateStaticParams` for blog posts.
- Prefer async server components for data loading.

## Imports and ordering

- Side-effect imports (e.g., `"server-only"`, global CSS) first.
- Third-party imports next, then local imports.
- Keep a blank line between import groups.

## Naming

- Components and types: PascalCase (e.g., `PostsOverview`).
- Files and folders: kebab-case (e.g., `posts-overview.tsx`).
- Constants: SCREAMING_SNAKE_CASE for module-level constants.
- Props: descriptive names; prefer `className` for styling overrides.

## Styling (Tailwind)

- Tailwind is used directly in `className` strings.
- Keep class order consistent; Prettier + Tailwind plugin will sort.
- Prefer semantic HTML with Tailwind classes, not custom CSS.
- Global typography tweaks live in `app/globals.css`.
- Use `prose` utilities for MDX content.

## MDX content

- Blog posts are stored in `posts/*.mdx`.
- Frontmatter is expected and used for title/date/excerpt.
- MDX is loaded via dynamic imports in server components.
- Do not import MDX in client components.

## Data and filesystem access

- Reading MDX files uses `fs.promises` and `path` (server-only).
- Always keep filesystem access in server components or `server-only` modules.

## Error handling

- Prefer explicit guards and early returns in server code.
- For missing content, throw or use Next.js notFound helpers if added.
- Avoid `console.log` in production code unless required.

## Performance and behavior

- Static export is enabled; avoid runtime-only APIs that require a server.
- Images are configured as unoptimized; keep this in mind when adding `next/image`.

## Accessibility

- Ensure images have `alt` text.
- Maintain semantic headings and readable contrast in Tailwind classes.

## Git hooks

- Husky pre-commit runs Prettier through lint-staged.
- Expect auto-formatting on commit; do not fight it.

## Generated content

- `.next/` and `out/` are build artifacts; do not edit.
- Avoid committing generated assets unless explicitly required.

## Cursor/Copilot rules

- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` found.

## Suggested agent workflow

- Read existing components for style and patterns before editing.
- Keep changes small and focused; prefer server components.
- Update this file if new tooling or conventions are introduced.

## Common patterns

- Export default React components from page/section files.
- Use `ExternalLink` for consistent outbound link styling.
- Use `Timeline` and `TimelineEntry` for timeline layouts.

## When adding new scripts

- Add npm script entries in `package.json`.
- Document the script here, including single-test commands.

## Formatting examples

- Use 2-space indentation (Prettier default).
- Max line length is 120 characters.
- Prefer double quotes in TS/TSX imports and strings.

## File-specific notes

- `app/layout.tsx` imports global CSS and FontAwesome styles.
- `mdx-components.tsx` exposes MDX component overrides.

## Safety checks

- Ensure new MDX uses valid frontmatter keys used by the UI.
- Validate date formats if adding new posts.

## Build output

- `next build` produces static export output in `out/`.
- Deployment can serve static files (no server required).

## Deployment

- Production is deployed to `https://philipp.page` via AWS Amplify Hosting.
- `dev.philipp.page` is deployed from the `dev` branch.

## Open questions

- If tests are added, define how to run a single test.
- If new lint rules are added, reflect them here.

End of agent notes.
