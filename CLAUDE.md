# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Start production:** `npm run start`

## Architecture

This is a single-page portfolio site built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, and deployed on Vercel.

### Key Data Flow

All portfolio content (bio, work experience, education, projects, skills, contact) is defined in a single config file: `src/data/resume.tsx`. This is the primary file to edit when updating site content. It exports a `DATA` const object consumed by `src/app/page.tsx`.

### Component Organization

- `src/components/ui/` — shadcn/ui primitives (new-york style, RSC-enabled). Path alias: `@/components`. Add new components via `npx shadcn@latest add <component>`.
- `src/components/magicui/` — Animation components from Magic UI (blur-fade, hyper-text, dock, shooting-stars, particles).
- `src/components/` — Page-level components: `navbar.tsx`, `project-card.tsx`, `resume-card.tsx`, `back-to-top.tsx`, `mode-toggle.tsx`, `background-effect.tsx`, `icons.tsx`.

### Styling

- Tailwind CSS v4 with `@tailwindcss/postcss` plugin (not the legacy config-based setup).
- CSS variables for theming defined in `src/app/globals.css`.
- Font: Space Grotesk loaded via `next/font/google`.
- Dark theme is the default; theme switching via `next-themes`.

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).
