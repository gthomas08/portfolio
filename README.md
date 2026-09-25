# George Thomas Portfolio

A personal portfolio built with Astro and styled after the Zed editor.

## Run locally

Requires Node.js 22 or later.

```sh
npm install
npm run dev
```

## Edit content

Update `src/data/portfolio.ts` for portfolio details and `src/styles/global.css` for styles.

## Deploy

GitHub Actions builds and deploys the site to Cloudflare Workers when changes are pushed to `master`. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets. The Worker and `georgethomas.dev` domain are configured in `wrangler.jsonc`.
