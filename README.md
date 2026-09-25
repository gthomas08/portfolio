# Zed Portfolio · Astro

An independent, Zed-inspired personal portfolio template: an editor shell around a real, readable website. Inspired by [Zed](https://zed.dev) and the concept of [vscode-portfolio](https://github.com/itsnitinr/vscode-portfolio). No affiliation with Zed Industries. Written from scratch in Astro, TypeScript, and CSS.

## Run locally

Use Node.js 22.19+ (Node 22 LTS recommended). A compatible project-local Node 22 runtime is included as a development dependency, so npm scripts also work on the older Node 22 runtime used to create this template.

```sh
npm install
npm run dev
```

Open http://localhost:4321. `npm run build` runs Astro's type checker and creates a static production build in `dist/`. `npm run preview` previews that build.

## Update the resume

- `src/data/portfolio.ts`: profile, experience, projects, education, skills, certificate, spoken languages, and file navigation.
- `src/pages/index.astro`: welcome page and portfolio overview.
- `src/pages/experience.astro`, `src/pages/projects.astro`, `src/pages/education.astro`, and `src/pages/skills.astro`: the individual portfolio pages.
- `src/styles/global.css`: all layout and theme tokens. Dark and light palettes are declared at the top.

The current profile information was supplied by George Thomas. Update the data file and page content with your own details before reusing the site. No email or social links are included because none were supplied.

## Included

- Welcome, Experience, Projects, Education, Skills, and custom 404 pages.
- Responsive Zed-inspired title bar, file tree, tabs, breadcrumbs, and status bar.
- Quick file picker: Cmd/Ctrl+K or Cmd/Ctrl+P, arrow keys, Enter, Escape.
- Light/dark theme with a locally stored preference.
- Toggleable terminal: Cmd/Ctrl+backtick. Commands: `help`, `ls`, `open experience`, `projects`, `education`, `skills`, `theme`, and `clear`.
- Keyboard focus styles, skip navigation, and reduced-motion support.
- Locally bundled fonts and no tracking or external font requests.
- Static HTML for every page; resume navigation and content work without JavaScript.

## Deploy

Run `npm run build` and deploy `dist/` to a static host. No server adapter or environment variables are needed. The template uses root-relative URLs; deploy at the root of a domain. If you adapt this portfolio, update `site` in `astro.config.mjs` so canonical and Open Graph URLs use your domain. The social preview is served from `public/og-image.png`; `public/og-image.svg` is its editable vector source.
