# Michael Sabado — Portfolio

Minimal, typography-forward portfolio built with Vue 3 + Tailwind. The latest iteration embraces cardless sections, timeline-inspired experience cards, and alternating case-study layouts for projects.

## Stack

- Vue 3 (Composition API)
- Vite (dev server + build output)
- Tailwind CSS (class-based dark mode)
- pnpm/npm (scripts), Prettier (formatting)

## Features

- Light/dark mode toggle with system preference + `localStorage` persistence
- Section components (Hero, About, Skills, Work Experience, Projects, Contact, Footer)
- Timeline-style work history fed by `src/data/work.js`
- Alternating case-study layout with problem/solution/result data from `src/data/projects.js`
- Centralized profile/skills/projects/work data in `src/data/*.js`
- Mobile-first layout with `max-w-6xl` container and smooth anchor scrolling offsets

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start a dev server (http://localhost:5173)
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```
4. Preview the production build locally
   ```bash
   npm run preview
   ```

## Customization

- **Content**: Edit the data modules inside `src/data/` to change profile text, skills, work entries, or project case studies.
- **Theme**: Tailwind tokens live in `tailwind.config.js`. Update the brand palette or spacing scale there.
- **Images / CV**: Drop assets into `public/` (e.g., `/projects/*.jpg`, `/cv.pdf`) and reference them by absolute path.
- **Favicon**: Place `favicon.svg` (or `.ico/.png`) in `public/` and add the appropriate `<link rel="icon" href="/favicon.svg">` entries inside `index.html`.
