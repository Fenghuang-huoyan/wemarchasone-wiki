# We March as One Guide

Unofficial English fan guide for [We March as One](https://store.steampowered.com/app/5189160/We_March_as_One/) (Steam AppID **5189160**), aimed at **wemarchasone.wiki**.

Not affiliated with dux, Valve, or Steam. The site does not sell the game or recover accounts. Unit stats, armor multipliers, and wave compositions are unpacked from Demo Build #26192930.

## Build

```bash
npm install
npm run dev      # http://localhost:4336
npm run build
npm run preview  # http://localhost:4336
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://wemarchasone.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/wemarchasone/site.config.ts` | Domain, Steam AppID 5189160, nav |
| Ads | `sites/wemarchasone/ads.config.ts` | Slot disabled, empty id and script |
| Active site | `sites/active` → `wemarchasone` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/wemarchasone/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is `G-SDWYYDDBP3`, so the base layout loads Google Analytics 4 via gtag. The Adsterra Native Banner slot in `sites/wemarchasone/ads.config.ts` is disabled (`enabled: false`). See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.
