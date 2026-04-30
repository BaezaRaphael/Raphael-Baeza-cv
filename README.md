# Raphael Baeza — CV Site

Personal CV / portfolio site, designed and coded by Raphael Baeza.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**, **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — UI animations
- **Lenis** — smooth scroll
- Built-in i18n (`/fr`, `/en`) using dictionaries

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — root redirects to `/fr` (or `/en` based on `Accept-Language`).

## Project structure

```
src/
├── app/
│   ├── [lang]/
│   │   ├── dictionaries.ts   # i18n loader
│   │   ├── layout.tsx        # html shell + nav + smooth scroll
│   │   └── page.tsx          # home, assembles all sections
│   └── globals.css
├── components/
│   ├── sections/             # Hero, About, Journey, Skills, Projects, Passions, Contact
│   └── ui/                   # Navbar, ScrollProgress, SmoothScroll, Reveal
├── dictionaries/             # fr.json, en.json — editable text content
└── proxy.ts                  # locale detection + redirect
```

## Editing content

All text lives in `src/dictionaries/fr.json` and `src/dictionaries/en.json`. Edit those — no code changes needed for content updates.

## CV PDF

Drop your `cv.pdf` in `public/cv.pdf` (replaces the placeholder).

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com). Set the project name to `raphael-baeza` for the `raphael-baeza.vercel.app` subdomain.
