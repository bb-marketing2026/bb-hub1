# Brainbox Playbook Suite — SharePoint upload

Target site: https://hellobrainbox.sharepoint.com/sites/DemandGeneration

## What this folder is

31 self-contained HTML files. Each has fonts, images, CSS and scripts inlined —
no external dependencies, nothing else to upload. Cross-document links are
rewritten to plain `.html` filenames.

## Upload steps

1. In the site, create a document library (e.g. **Playbooks**).
2. Upload **all 31 files into that single folder** — flat, no subfolders.
   Links between documents are relative filenames and only resolve when the
   files are siblings.
3. Start at **Hub.html** — it is the index for the whole suite.
4. Optional: pin Hub.html to the site navigation, or embed it on a site page
   with a **File viewer** web part.

## Important

- Do not rename the files. Every link uses the exact filename shown here.
- Do not reorganise into subfolders. Flat structure only.
- SharePoint may open HTML in a preview pane. If interactive elements
  (pan/zoom on Hub.html and Playbook Hierarchy.html) feel constrained,
  use **Open > Open in browser**.
- If your tenant blocks HTML rendering in libraries (classic
  "HTML from document libraries" restriction), ask IT to allow it for this
  site, or use the PDF set instead.

## Contents

**Level 1** — Strategic Playbook
**Level 2** — Revenue, Finance, Fleet and Facilities Playbooks
**Level 3** — Sales, Marketing, Demand Generation, AI Transformation,
Accommodation, Client Travel
**Level 4-6** — FY27 Campaign Planning Overview, Demand Generation Readiness
Plan, Campaigns 01-11, campaign templates
**Also included** — Executive Assistant Playbook, Monthly Finance Report,
Contract Variation Letter, Playbook Hierarchy, Insight Article (PE & VC),
Social Ads (Campaign 11), LinkedIn Posts (Building & Trades)

## Note on print quality

The two image-heavy documents (Insight Article, Social Ads) use photos
downscaled to 1400px for bundle size. For print-quality output of those two,
export them to PDF from the project instead.
