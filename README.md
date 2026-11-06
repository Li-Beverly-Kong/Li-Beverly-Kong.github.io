# Li Kong Academic Homepage

This repository contains Li Kong's academic homepage, built with Astro and the
open-source Scholar Pages template.

## Content map

- `site.config.ts` — identity, navigation, profile links, page copy, and homepage sections.
- `src/data/publications.bib` — publications and manuscripts.
- `src/data/about.yml` — structured CV content.
- `src/content/projects/` — internship records (the template's project collection is reused internally).
- `src/content/teaching/` — teaching records.
- `src/content/posts/` — news and academic updates.
- `public/profile.png` — homepage profile image.

## Local development

Requires Node.js 22.13+ and pnpm 11+.

```bash
pnpm install
pnpm dev
```

Run the full validation suite before deployment:

```bash
ASTRO_TELEMETRY_DISABLED=1 pnpm verify
```

The production site is generated in `dist/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which validates,
builds, and deploys `dist/` to GitHub Pages.

## Credits

The current design is based on
[Scholar Pages](https://github.com/jxpeng98/astro-theme-scholars). Its MIT
license is preserved in `LICENSE-SCHOLAR-PAGES`.
