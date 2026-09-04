# Ken Chen CV

A bilingual, image-free CV website built with Next.js and deployed independently on GitHub Pages.

## Edit the CV

- Update all English and Chinese content in `app/resume-data.ts`.
- Update the page structure and interactions in `app/resume-site.tsx`.
- Update colours, typography, spacing, and responsive styling in `app/globals.css`.
- Update page metadata in `app/layout.tsx`.

The language selector remembers the visitor's choice. Press `Shift + L` to switch between English and Chinese.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml` and publishes the static export to GitHub Pages.

To use a custom domain later, add it in the repository's **Settings → Pages** screen and create the DNS records requested by GitHub. When using an apex custom domain instead of the `/kenchen-cv` project path, set `GITHUB_ACTIONS` handling in `next.config.ts` to use an empty `basePath`.
