# Fazeel Portfolio (React + TypeScript)

This is the React + TypeScript (Vite) conversion of the static portfolio.

## Requirements
- Node.js 18+ (recommended by Vite templates)

## Install
```bash
npm install
```

## Run (development)
```bash
npm run dev
```

## Build (production)
```bash
npm run build
npm run preview
```

## Project structure
- `src/components/` – UI sections (Navbar, Hero, About, Experience, Education, Portfolio, Contact)
- `src/hooks/` – behaviors (typing, reveal-on-scroll, active nav)
- `src/data/content.ts` – data for experience, education, skills, projects
- `public/assets/` – images (hero, profile, project thumbnails)

## Asset paths
Assets under `public/` are served at root (e.g., `public/assets/hero.png` is referenced as `/assets/hero.png`).
