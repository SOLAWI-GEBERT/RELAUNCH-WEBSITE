# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for "Stadt, Land, Beides" – a Solidarische Landwirtschaft (Community Supported Agriculture) initiative. Originally generated from Figma Make, now being developed further. All content is in German.

Figma source: https://www.figma.com/design/nbJDbizkocH2lFo0bpkx61/Landing-Page-Klonen

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build

No test runner, linter, or formatter is configured.

## Tech Stack

- **React 18** with **Vite 6** (ES modules)
- **React Router v7** (`createBrowserRouter`) — layout-based nested routing
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (not PostCSS)
- **shadcn/ui** components (Radix UI primitives) in `src/app/components/ui/`
- **Motion** (formerly Framer Motion) for animations
- **react-hook-form** for form handling
- Path alias: `@` → `./src`

## Architecture

```
src/
├── main.tsx                    # React entry point
├── app/
│   ├── App.tsx                 # Root component, renders RouterProvider
│   ├── routes.tsx              # All route definitions (Layout wraps all pages)
│   ├── components/
│   │   ├── Layout.tsx          # Navigation + Outlet + Footer
│   │   ├── Navigation.tsx      # 3-level nested nav (desktop hover, mobile accordion)
│   │   ├── Footer.tsx
│   │   ├── figma/              # Figma-generated helpers (ImageWithFallback)
│   │   └── ui/                 # ~49 shadcn/ui components
│   └── pages/                  # Route page components (8 pages)
├── styles/
│   ├── index.css               # Main import file
│   ├── tailwind.css            # Tailwind v4 @source directive
│   └── theme.css               # CSS custom properties & @theme inline
└── imports/                    # Markdown content docs, legacy CSS
```

## Styling

- Tailwind v4 with `@theme inline` for custom tokens in `src/styles/theme.css`
- Brand colors: primary green (#16a085), pink (#d10038), purple (#8a2b7d)
- Dark mode via `next-themes` with `.dark` class and `oklch()` colors
- Utility helpers: `clsx`, `tailwind-merge`, `class-variance-authority` (cva)

## Key Patterns

- **Static content**: All page data (farms, events, navigation items) is hardcoded in components — no CMS or API
- **No backend**: Client-side only, no API calls or database
- **Figma origin**: Components follow Figma Make export conventions; `ImageWithFallback` handles Unsplash image loading
- **Form state**: Registration (`Anmeldung.tsx`) uses React `useState`; other forms use `react-hook-form`
