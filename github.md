# Brainbox BB Hub

repo: bb-marketing2026/bb-hub1
branch: main
host: vercel — project `bb-hub` (team BB-Marketing / bb-marketing1)
url: https://brainbox-hub.vercel.app

## Last sync

date: 2026-09-23T00:00:00Z
commit: (repo tree a78cbe8eebba — read only; no push made from this project)

### Updated in this project
- Landing page header: Home and Export as PDF now hidden on the home view, shown inside libraries.
- Rebuilt the landing page as `Playbook Hub.dc.html` — 11 playbook library cards plus a six-level hierarchy, replacing the old `Hub.dc.html` tree.
- Added `hub-nav.js` — floating Back / Hub pills and a Print · Save as PDF pill injected into all 37 documents.
- Added `hub-paper.css` — A4 paper framing on screen, guaranteed print margins, one page per sheet, running head.
- Added `source-pdfs/` with 16 original source PDFs, and renamed the insight articles to punctuation-free filenames.

> The repository is still at its pre-rebuild state. The files above exist only in this
> project and must be pushed to `main` before the Vercel deployment reflects them.

## Screen map

| Screen | Built from |
| --- | --- |
| Playbook Hub (landing + 9 libraries) | `Playbook Hub.dc.html` |
| Document chrome (all documents) | `hub-nav.js`, `hub-paper.css` |
| Hierarchy tree (legacy view) | `Playbook Tree.dc.html` ← repo `Hub.dc.html` |
| Playbooks | `Strategic/Revenue/Finance/Marketing/Sales/Demand Generation/AI Transformation/Fleet and Facilities/Accommodation/Client Travel/Executive Assistant Playbook.dc.html` |
| Campaign packs 01–11 | `Campaign 01…11 - *.dc.html` |
| Campaign programme | `FY27 Campaign Planning Overview.dc.html`, `Demand Generation Readiness Plan.dc.html`, `Templates/Demand Generation Playbook - Template.dc.html` |
| Content & creative | `Insight Article - *.html`, `LinkedIn Posts - Building - Trades.dc.html`, `Social Ads - Campaign 11*.dc.html` |
| Reports & reference | `Report - Monthly Finance.dc.html`, `RCM - Metal fabricator.dc*.html`, `Contract Variation Letter.dc.html`, `Playbook Hierarchy.dc.html` |
