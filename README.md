# Zed Portfolio · Astro

An independent, Zed-inspired personal portfolio template: an editor shell around a real, readable website. Inspired by [Zed](https://zed.dev) and the concept of [vscode-portfolio](https://github.com/itsnitinr/vscode-portfolio). No affiliation with Zed Industries. Written from scratch in Astro, TypeScript, and CSS.

## Run locally

Use Node.js 22.19+ (Node 22 LTS recommended). A compatible project-local Node 22 runtime is included as a development dependency, so npm scripts also work on the older Node 22 runtime used to create this template.

```sh
npm install
npm run dev
```

Open http://localhost:4321. `npm run build` runs Astro's type checker and creates a static production build in `dist/`. `npm run preview` previews that build.

## Make it yours

- `src/data/portfolio.ts`: sample name, email, social URL, availability, project metadata, journal entries, and file navigation.
- `src/pages/index.astro`: homepage headline and introduction layout.
- `src/pages/about.astro`: longer biography and tools.
- `src/components/Project.astro`: original CSS project artwork. Replace with real screenshots when adding your projects.
- `src/styles/global.css`: all layout and theme tokens. Dark and light palettes are declared at the top.
- `public/favicon.svg`: site icon.

All Alex Morgan biography, projects, and journal entries are illustrative sample content. The email is an example address and the GitHub link is generic. Replace these before publishing. Project notes intentionally identify the examples rather than pretending to link to live products.

## Included

- Welcome, About, Projects, Journal, Contact, and custom 404 pages.
- Responsive Zed-inspired title bar, file tree, tabs, breadcrumbs, and status bar.
- Quick file picker: Cmd/Ctrl+K or Cmd/Ctrl+P, arrow keys, Enter, Escape.
- Light/dark theme with a locally stored preference.
- Toggleable terminal: Cmd/Ctrl+backtick. Commands: `help`, `ls`, `open projects`, `about`, `projects`, `journal`, `contact`, `theme`, and `clear`.
- Project filters, copy email, keyboard focus styles, skip navigation, reduced-motion support.
- Locally bundled JetBrains Mono Variable font and no tracking or external font requests.
- Static HTML for every page; portfolio navigation and content work without JavaScript.

## Deploy

Run `npm run build` and deploy `dist/` to a static host. No server adapter or environment variables are needed. The template uses root-relative URLs; deploy at the root of a domain. If you need a subdirectory deployment, first adapt the links and Astro's `base` setting. Add your production URL as `site` in `astro.config.mjs` when configuring canonical URLs or a sitemap.
