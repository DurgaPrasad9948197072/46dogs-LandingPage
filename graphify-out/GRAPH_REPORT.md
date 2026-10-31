# Graph Report - 46Dogs-LandingPage  (2026-10-31)

## Corpus Check
- Corpus is ~5,581 words - fits in a single context window. You may not need a graph.

## Summary
- 178 nodes · 268 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.86)
- Token cost: 251,460 input · 0 output

## Community Hubs (Navigation)
- Page Sections & Icons
- Dependencies & Lint Config
- Root Layout & llms.txt
- Asset Placements & SEO
- Asset Generation Script
- TypeScript Config
- Structured Data & Discoverability
- Brand Mark Imagery
- npm Scripts
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `SITE` - 13 edges
3. `next` - 9 edges
4. `Home()` - 8 edges
5. `46DOGS Master Logo (logo.png)` - 8 edges
6. `Asset Generation Script (generate-assets.py)` - 7 edges
7. `SEO Checklist` - 7 edges
8. `46DOGS Logo Mark (square icon)` - 7 edges
9. `main()` - 6 edges
10. `FAQPage JSON-LD Schema` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Server-Rendered FAQ (native details)` --references--> `Faq()`  [INFERRED]
  README.md → src/components/Faq.tsx
- `/llms.txt Brief` --implements--> `GET()`  [INFERRED]
  README.md → src/app/llms.txt/route.ts
- `Single Source of Truth for Copy (site.ts)` --rationale_for--> `Faq()`  [INFERRED]
  README.md → src/components/Faq.tsx
- `Logo Mark (footer)` --references--> `Footer()`  [INFERRED]
  README.md → src/components/Footer.tsx
- `Web Manifest` --references--> `manifest()`  [INFERRED]
  README.md → src/app/manifest.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Logo-Derived Asset Pipeline** — readme_master_logo, readme_generate_assets, readme_logo_lockup, readme_logo_mark, readme_og_image, readme_favicon, readme_apple_icon [EXTRACTED 1.00]
- **site.ts Constants Fan-Out (no drift)** — src_lib_site_site, readme_ngo_schema, readme_faqpage_schema, readme_llms_txt, readme_contact_email [EXTRACTED 1.00]
- **Answer-Engine Discoverability Stack** — readme_answer_engine_discoverability, readme_llms_txt, readme_linked_json_ld, readme_ai_crawlers_robots, readme_server_rendered_faq [EXTRACTED 1.00]
- **Per-placement variants derived from logo.png** — public_logo, public_logo_mark, public_logo_lockup, public_og, src_app_icon, src_app_apple_icon [INFERRED 0.85]
- **Per-placement logo variants derived from public/logo.png** — public_logo, public_logo_mark, src_app_icon, src_app_apple_icon [INFERRED 0.85]

## Communities (10 total, 1 thin omitted)

### Community 0 - "Page Sections & Icons"
Cohesion: 0.10
Nodes (20): 46 Dogs Landing Page, Next.js (App Router), Tailwind v4, HELP_ICONS, Home(), Faq(), Footer(), Header() (+12 more)

### Community 1 - "Dependencies & Lint Config"
Cohesion: 0.10
Nodes (27): eslintConfig, dependencies, next@16.3.1, react@19.2.8, react-dom@19.2.8, devDependencies, eslint@^9, eslint-config-next@16.3.1 (+19 more)

### Community 2 - "Root Layout & llms.txt"
Cohesion: 0.14
Nodes (14): instrument, inter, metadata, outfit, viewport, build(), dynamic, GET() (+6 more)

### Community 3 - "Asset Placements & SEO"
Cohesion: 0.12
Nodes (15): nextConfig, Apple Touch Icon, Favicon (src/app/icon.png), Asset Generation Script (generate-assets.py), Google Search Console Submission, Logo Lockup (hero), Logo Mark (footer), OG Social Card (1200x630) (+7 more)

### Community 4 - "Asset Generation Script"
Cohesion: 0.16
Nodes (9): fit(), flatten(), ink_rows(), isolate_mark(), load_font(), main(), tracked_text(), trim() (+1 more)

### Community 5 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - "Structured Data & Discoverability"
Cohesion: 0.16
Nodes (11): AI Crawlers Named in robots.txt, Charity Registration In Progress Caveat, Contact Email CTA (hello@46dogs.com, SITE.email), FAQPage JSON-LD Schema, /llms.txt Brief, Master Logo (public/logo.png), NGO JSON-LD Schema, WebSite/WebPage JSON-LD Schema (+3 more)

### Community 7 - "Brand Mark Imagery"
Cohesion: 0.20
Nodes (16): 46DOGS Master Logo (logo.png), Dog-from-46 Numeral Mark, 46DOGS Logo Lockup, Numeral-dog brand mark (46 forming a seated dog), Tagline: RESCUE. CARE. LOVE., 46DOGS Logo Mark (square icon), Numeral-46-as-dog-silhouette motif, Tagline: Rescue. Care. Love. (+8 more)

### Community 8 - "npm Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

## Knowledge Gaps
- **14 isolated node(s):** `Next.js (App Router)`, `Tailwind v4`, `Logo Lockup (hero)`, `WebSite/WebPage JSON-LD Schema`, `Charity Registration In Progress Caveat` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 71 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Asset Placements & SEO` to `Page Sections & Icons`, `Dependencies & Lint Config`, `Root Layout & llms.txt`, `Structured Data & Discoverability`?**
  _High betweenness centrality (0.191) - this node is a cross-community bridge._
- **What connects `Next.js (App Router)`, `Tailwind v4`, `Logo Lockup (hero)` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page Sections & Icons` be split into smaller, more focused modules?**
  _Cohesion score 0.1028225806451613 - nodes in this community are weakly interconnected._
- **Why does `SITE` connect `Structured Data & Discoverability` to `Page Sections & Icons`, `Root Layout & llms.txt`, `Asset Placements & SEO`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Should `Dependencies & Lint Config` be split into smaller, more focused modules?**
  _Cohesion score 0.0960591133004926 - nodes in this community are weakly interconnected._
- **Why does `NGO JSON-LD Schema` connect `Structured Data & Discoverability` to `Asset Placements & SEO`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Should `Root Layout & llms.txt` be split into smaller, more focused modules?**
  _Cohesion score 0.14210526315789473 - nodes in this community are weakly interconnected._