# 46 Dogs — Landing Page

Single-page site for [46dogs.com](https://46dogs.com). Next.js (App Router) +
Tailwind v4, pure-monochrome theme taken from the logo.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## The logo (do this first)

Everything visual is derived from **one file**: `public/logo.png`
(square, black background, white artwork — the 46DOGS badge).

To swap the artwork, replace that file and regenerate:

```bash
cp /path/to/46dogs-logo.png public/logo.png
python3 scripts/generate-assets.py
rm -rf .next/cache/images        # next/image caches by path, not content
```

That writes:

| File | Use |
|---|---|
| `public/logo-lockup.png` | hero — lockup trimmed so it fills its frame |
| `public/logo-mark.png` | footer — dog mark alone |
| `public/og.png` | 1200×630 social card |
| `src/app/icon.png` | favicon (mark only; the lockup is illegible at 32px) |
| `src/app/apple-icon.png` | iOS home screen |

`public/logo.png` stays the untouched master and is what the NGO schema
points at.

## Editing copy

All copy, links, and structured data live in [`src/lib/site.ts`](src/lib/site.ts) —
hero text is in `src/app/page.tsx`. The two JSON-LD blocks (`NGO`, `FAQPage`) are
built from the same constants, so the FAQ section and its rich-snippet schema can
never drift apart.

## Discoverability

Built to be quoted by answer engines, not just ranked by Google.

- **`/llms.txt`** — a flat-markdown brief for language models: the facts, the
  FAQ, and an explicit citation note telling them *not* to call 46 Dogs a
  registered charity (registration is still in progress). Generated from the
  same constants as the page.
- **Three linked JSON-LD blocks** — `NGO`, `WebSite`/`WebPage`, `FAQPage` —
  cross-referenced by `@id` so a crawler reads one entity rather than three
  unrelated islands.
- **AI crawlers named explicitly** in `robots.txt` (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, and others) rather than left to the
  blanket `*` allow.
- Every answer is server-rendered — the FAQ uses native `<details>`, so the
  text is in the HTML whether or not a crawler runs JavaScript.

## SEO checklist

- [x] Title, meta description, canonical, robots
- [x] Open Graph + Twitter `summary_large_image`
- [x] JSON-LD: `NGO` + `FAQPage` in `<head>`
- [x] `sitemap.xml`, `robots.txt`, web manifest
- [x] Favicon + apple touch icon
- [ ] Submit `https://46dogs.com/sitemap.xml` to Google Search Console at launch

## Contact

There is no email-capture form — the launch list was removed. Every call to
action points at `hello@46dogs.com` (set in `SITE.email`). The FAQ answer and
its `FAQPage` schema both say the same thing, from the same constant.
