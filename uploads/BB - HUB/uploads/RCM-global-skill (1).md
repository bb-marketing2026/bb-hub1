# Skill: RCM — Role Capability Map generator (global)

Command: **/RCM**
Description: Build a Brainbox Role Capability Map (RCM) for any role, following
precisely the same formatting every time.

This skill is self-contained: the full master template is embedded below, so it
works in any project that has the **Brainbox design system** bound at an `_ds/`
path. It reuses the template's rendering and only supplies the new role's data.

---

## Step 0 — Confirm the design system path
The embedded template references the Brainbox design system at
`_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/` and a logo at
`assets/brainbox-logo.jpg`. If the current project binds the DS at a different
folder, update the `<link>`/`<script>` paths and copy the horizontal colour logo
to `assets/brainbox-logo.jpg` before writing.

## Step 1 — Prompt for the role title
Ask (one short form, or plain question if already named):
- **Role title** (required) — e.g. "Payroll officer".
- Offshore or onshore? (default **offshore** — exclude onsite-only tasks). Optional.
- Anything specific to emphasise or leave out? Optional.
Do not ask more. Then build the whole RCM automatically.

## Step 2 — Build the file
1. Write the embedded master template (Appendix A) to a new file
   `RCM - <Role title>.dc.html`.
2. **Replace the entire `roles = { ... }` object** with a single role entry
   keyed by the role title (schema below).
3. Update BOTH default fallbacks in `renderVals()` — the lines reading
   `this.props.role ?? "..."` and `this.roles[key] || this.roles["..."]` — to the
   new role title.
4. Set `data-props` so the `role` enum `options` = `["<Role title>"]` and
   `default` = the role title. Leave `showFooterNote` as-is; keep
   `showReadingKey` default `false` (the scale shows as in-band captions).

Never alter the template markup, colours, type, spacing, or the fixed level
column headers — those guarantee identical formatting. Only the role data changes.

## Step 3 — Verify & export (must fit ONE A4 portrait page)
Verify the file renders. For PDF: copy to `RCM - <Role>.dc-print.html` (sibling of
the source so relative asset/logo/font URLs resolve). In its `<helmet>` add a
`<style>`:
- `@page { size: A4 portrait; margin: 0 }`
- `html, body { margin: 0; padding: 0; background: #fff }`
- `@media print { [data-screen-label] { width: 1205px !important; zoom: 0.653 } }`
- an animation-freeze block.

The wide (1680px) design re-flows to ≈1205px so columns narrow and the matrix
fills the page; `zoom` scales it to the sheet.

**Strictly verify it finishes within ONE page — no overflow onto page 2.**
The A4-portrait printable box (margin 0) is ≈793×1122 px. Measure
`H = [data-screen-label].scrollHeight` at `width:1205px`; the scaled height
`H × zoom` MUST be `≤ 1122`. If over (or badly under-filling), adjust `width`
and/or `zoom` and re-measure until `H × zoom ≤ 1122` with only a few px of
headroom. Longer bullet text raises `H`, so re-check per role — never trust a
fixed zoom blindly. Then open `show_pdf_export_dialog`
(`allow_non_print_document: true`); keep print-dialog margins on "Default".

---

## Role data schema (exact)
```js
"<Role title>": {
  eyebrow: "<Field / discipline> · capability & trust",
  title: "The <role title, lowercase> capability map",
  intro: "The same five-level capability model, mapped to the <role> role. Read each row left to right — from <basic> to <fully delegated>. Choose the level to start at, and raise it as confidence builds.",
  closing: "Start a/an <role> at the level that matches the trust and access you're ready to grant, then climb as capability proves itself. Brainbox can place and grow the right <role> for your team.",
  scale: ["<L1 in-short>", "<L2>", "<L3>", "<L4>", "<L5>"],   // exactly 5 — the in-band caption under each level header
  functions: [   // exactly 6
    { name: "<Function name>", sub: "<lowercase sub-label>",
      c1: ["<b>", "<b>", "<b>", "<b>"],   // Level 1 — exactly 4 bullets
      c2: ["...", "...", "...", "..."],
      c3: ["...", "...", "...", "..."],
      c4: ["...", "...", "...", "..."],
      c5: ["...", "...", "...", "..."] },
    // 5 more functions
  ]
}
```

### Fixed structure (never varies)
- **5 levels**, fixed headers: **1 Reliable hands · 2 Standing access ·
  3 Gatekeeper · 4 Delegated authority · 5 Full trust**. Each header shows a bold
  numeral, the name, and the per-role `scale` caption underneath, on the graded
  pink ramp (`#ffe0ef · #ffbcdd · #ff8cc4 · #ff0080 white · #b3005a white`).
  No separate bottom "In short" row (`showReadingKey` = `false`).
- **6 functions**, each with **4 bullets per level** (c1–c5).

### Content rules
- **Level 1 (Reliable hands) must be VERY basic** — simple, closely-directed,
  fully-reviewed tasks ("as directed", "from a template/list", "flag to the
  manager", "log/file"). No judgement, no independent decisions.
- Progression left→right: reviewed work → standing access → owns & runs →
  decides within guardrails → owns the outcome / signs off.
- **Offshore by default: remove any task needing personal, onsite presence**
  (greeting visitors, physical mail/printing, room/catering, site visits,
  tidying). Use remote equivalents (virtual meetings, digital filing, online
  ordering, calls/email).
- Voice: Brainbox — warm, plain, active, Australian English. Sentence case.
  No emoji. Bullets short (≈3–7 words), verb-first.

---

## Appendix A — Master template (write verbatim, then edit per Step 2)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/fonts/fonts.css">
  <link rel="stylesheet" href="_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/tokens/colors.css">
  <link rel="stylesheet" href="_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/tokens/typography.css">
  <link rel="stylesheet" href="_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/tokens/spacing.css">
  <link rel="stylesheet" href="_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/tokens/effects.css">
  <link rel="stylesheet" href="_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/tokens/base.css">
  <link rel="stylesheet" href="_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/styles.css">
  <script src="_ds/bb-design-system-5ef09e1e-728b-4c73-9668-6117b0c43dd7/_ds_bundle.js"></script>
</helmet>

<div data-screen-label="Role Capability Map" style="width:1680px; background:var(--bb-white); font-family:var(--font-body); color:var(--bb-grey-800); padding:52px 0 0;">

  <!-- Header -->
  <div style="padding:0 56px;">
    <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:40px;">
      <div style="flex:1; min-width:0;">
        <div style="font-family:var(--font-mono); font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:var(--bb-pink); font-weight:600;">{{ eyebrow }}</div>
        <h1 style="font-family:var(--font-display); font-weight:600; font-size:44px; color:var(--bb-grey-700); margin:14px 0 0; letter-spacing:-0.015em; line-height:1.05;">{{ title }}</h1>
      </div>
      <img src="assets/brainbox-logo.jpg" alt="Brainbox" style="width:190px; height:auto; flex:none; margin-top:2px;">
    </div>
    <div style="height:1px; background:var(--bb-pink); opacity:0.35; margin:16px 0 16px;"></div>
    <p style="font-family:var(--font-body); font-weight:300; font-size:15.5px; line-height:1.55; color:var(--bb-grey-800); max-width:1180px; margin:0;">{{ intro }}</p>
  </div>

  <!-- Matrix -->
  <div style="margin:28px 56px 0; border:1px solid var(--bb-grey-200); border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-md);">

    <!-- Header row -->
    <div style="display:grid; grid-template-columns:210px repeat(5, 1fr);">
      <div style="padding:16px 18px; background:var(--bb-grey-50); display:flex; flex-direction:column; justify-content:flex-end;">
        <div style="font-family:var(--font-mono); font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:var(--bb-grey-500);">Function</div>
        <div style="font-family:var(--font-body); font-style:italic; font-size:12.5px; color:var(--bb-pink); margin-top:5px;">trust grows →</div>
      </div>
      <div style="padding:14px 15px 15px; background:#ffe0ef;">
        <div style="line-height:1.18;">
          <span style="font-family:var(--font-display); font-weight:600; font-size:20px; color:var(--bb-pink); margin-right:7px; vertical-align:baseline;">1</span>
          <span style="font-family:var(--font-display); font-weight:600; font-size:14.5px; color:var(--bb-grey-700); line-height:1.12;">Reliable hands</span>
        </div>
        <div style="font-family:var(--font-body); font-weight:400; font-size:11.5px; line-height:1.25; color:var(--bb-pink-700); margin-top:6px;">{{ s1 }}</div>
      </div>
      <div style="padding:14px 15px 15px; background:#ffbcdd; border-left:1px solid rgba(255,255,255,0.7);">
        <div style="line-height:1.18;">
          <span style="font-family:var(--font-display); font-weight:600; font-size:20px; color:var(--bb-pink); margin-right:7px; vertical-align:baseline;">2</span>
          <span style="font-family:var(--font-display); font-weight:600; font-size:14.5px; color:var(--bb-grey-700); line-height:1.12;">Standing access</span>
        </div>
        <div style="font-family:var(--font-body); font-weight:400; font-size:11.5px; line-height:1.25; color:var(--bb-pink-700); margin-top:6px;">{{ s2 }}</div>
      </div>
      <div style="padding:14px 15px 15px; background:#ff8cc4; border-left:1px solid rgba(255,255,255,0.7);">
        <div style="line-height:1.18;">
          <span style="font-family:var(--font-display); font-weight:600; font-size:20px; color:var(--bb-pink); margin-right:7px; vertical-align:baseline;">3</span>
          <span style="font-family:var(--font-display); font-weight:600; font-size:14.5px; color:var(--bb-grey-700); line-height:1.12;">Gatekeeper</span>
        </div>
        <div style="font-family:var(--font-body); font-weight:400; font-size:11.5px; line-height:1.25; color:var(--bb-grey-700); margin-top:6px;">{{ s3 }}</div>
      </div>
      <div style="padding:14px 15px 15px; background:var(--bb-pink); border-left:1px solid rgba(255,255,255,0.5);">
        <div style="line-height:1.18;">
          <span style="font-family:var(--font-display); font-weight:600; font-size:20px; color:#fff; margin-right:7px; vertical-align:baseline;">4</span>
          <span style="font-family:var(--font-display); font-weight:600; font-size:14.5px; color:#fff; line-height:1.12;">Delegated authority</span>
        </div>
        <div style="font-family:var(--font-body); font-weight:400; font-size:11.5px; line-height:1.25; color:rgba(255,255,255,0.92); margin-top:6px;">{{ s4 }}</div>
      </div>
      <div style="padding:14px 15px 15px; background:#b3005a; border-left:1px solid rgba(255,255,255,0.35);">
        <div style="line-height:1.18;">
          <span style="font-family:var(--font-display); font-weight:600; font-size:20px; color:#fff; margin-right:7px; vertical-align:baseline;">5</span>
          <span style="font-family:var(--font-display); font-weight:600; font-size:14.5px; color:#fff; line-height:1.12;">Full trust</span>
        </div>
        <div style="font-family:var(--font-body); font-weight:400; font-size:11.5px; line-height:1.25; color:rgba(255,255,255,0.92); margin-top:6px;">{{ s5 }}</div>
      </div>
    </div>

    <!-- Function rows -->
    <sc-for list="{{ functions }}" as="fn" hint-placeholder-count="6">
      <div style="display:grid; grid-template-columns:210px repeat(5, 1fr);">
        <div style="padding:16px 18px; background:var(--bb-grey-50); border-top:1px solid var(--bb-grey-200);">
          <div style="font-family:var(--font-display); font-weight:600; font-size:16px; color:var(--bb-grey-700); line-height:1.2;">{{ fn.name }}</div>
          <div style="font-family:var(--font-mono); font-size:10.5px; letter-spacing:0.06em; text-transform:uppercase; color:var(--bb-grey-500); margin-top:7px;">{{ fn.sub }}</div>
        </div>

        <div style="padding:15px 15px; background:#ffffff; border-top:1px solid var(--bb-grey-200);">
          <ul style="margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:9px;">
            <sc-for list="{{ fn.c1 }}" as="b" hint-placeholder-count="4">
              <li style="font-family:var(--font-body); font-weight:300; font-size:13px; line-height:1.32; color:var(--bb-grey-800); padding-left:16px; position:relative;"><span style="position:absolute; left:0; top:6px; width:5px; height:5px; border-radius:999px; background:var(--bb-pink);"></span>{{ b }}</li>
            </sc-for>
          </ul>
        </div>
        <div style="padding:15px 15px; background:#ffffff; border-top:1px solid var(--bb-grey-200); border-left:1px solid var(--bb-grey-100);">
          <ul style="margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:9px;">
            <sc-for list="{{ fn.c2 }}" as="b" hint-placeholder-count="4">
              <li style="font-family:var(--font-body); font-weight:300; font-size:13px; line-height:1.32; color:var(--bb-grey-800); padding-left:16px; position:relative;"><span style="position:absolute; left:0; top:6px; width:5px; height:5px; border-radius:999px; background:var(--bb-pink);"></span>{{ b }}</li>
            </sc-for>
          </ul>
        </div>
        <div style="padding:15px 15px; background:#ffffff; border-top:1px solid var(--bb-grey-200); border-left:1px solid var(--bb-grey-100);">
          <ul style="margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:9px;">
            <sc-for list="{{ fn.c3 }}" as="b" hint-placeholder-count="4">
              <li style="font-family:var(--font-body); font-weight:300; font-size:13px; line-height:1.32; color:var(--bb-grey-800); padding-left:16px; position:relative;"><span style="position:absolute; left:0; top:6px; width:5px; height:5px; border-radius:999px; background:var(--bb-pink);"></span>{{ b }}</li>
            </sc-for>
          </ul>
        </div>
        <div style="padding:15px 15px; background:#ffffff; border-top:1px solid var(--bb-grey-200); border-left:1px solid var(--bb-grey-100);">
          <ul style="margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:9px;">
            <sc-for list="{{ fn.c4 }}" as="b" hint-placeholder-count="4">
              <li style="font-family:var(--font-body); font-weight:300; font-size:13px; line-height:1.32; color:var(--bb-grey-800); padding-left:16px; position:relative;"><span style="position:absolute; left:0; top:6px; width:5px; height:5px; border-radius:999px; background:var(--bb-pink);"></span>{{ b }}</li>
            </sc-for>
          </ul>
        </div>
        <div style="padding:15px 15px; background:#ffffff; border-top:1px solid var(--bb-grey-200); border-left:1px solid var(--bb-grey-100);">
          <ul style="margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:9px;">
            <sc-for list="{{ fn.c5 }}" as="b" hint-placeholder-count="4">
              <li style="font-family:var(--font-body); font-weight:300; font-size:13px; line-height:1.32; color:var(--bb-grey-800); padding-left:16px; position:relative;"><span style="position:absolute; left:0; top:6px; width:5px; height:5px; border-radius:999px; background:var(--bb-pink);"></span>{{ b }}</li>
            </sc-for>
          </ul>
        </div>
      </div>
    </sc-for>

    <!-- Reading key -->
    <sc-if value="{{ showReadingKey }}" hint-placeholder-val="{{ true }}">
      <div style="display:grid; grid-template-columns:210px repeat(5, 1fr);">
        <div style="padding:13px 18px; background:var(--bb-grey-50); border-top:2px solid var(--bb-pink); font-family:var(--font-mono); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--bb-grey-500); display:flex; align-items:center;">In short</div>
        <sc-for list="{{ scale }}" as="s" hint-placeholder-count="5">
          <div style="padding:13px 15px; border-top:2px solid var(--bb-pink); border-left:1px solid var(--bb-grey-100); font-family:var(--font-body); font-weight:400; font-size:12px; line-height:1.3; color:var(--bb-pink-700); display:flex; align-items:center;">{{ s }}</div>
        </sc-for>
      </div>
    </sc-if>
  </div>

  <!-- Closing note -->
  <sc-if value="{{ showFooterNote }}" hint-placeholder-val="{{ true }}">
    <div style="padding:20px 56px 0;">
      <p style="font-family:var(--font-body); font-weight:300; font-style:italic; font-size:13.5px; line-height:1.5; color:var(--bb-grey-500); max-width:1180px; margin:0;">{{ closing }}</p>
    </div>
  </sc-if>

  <!-- Footer -->
  <div style="margin-top:26px; padding:14px 56px 0; border-top:1px solid var(--bb-grey-200);">
    <span style="font-family:var(--font-mono); font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:var(--bb-grey-500);">Powerful People Performance · brain-box.com.au</span>
  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;$preview&quot;:{&quot;width&quot;:1680},&quot;role&quot;:{&quot;editor&quot;:&quot;enum&quot;,&quot;options&quot;:[&quot;Administration assistant&quot;,&quot;Electrical estimator&quot;,&quot;SEO specialist&quot;,&quot;Executive assistant&quot;,&quot;Bookkeeper&quot;,&quot;HR support officer&quot;,&quot;Landscape designer&quot;],&quot;default&quot;:&quot;Administration assistant&quot;,&quot;tsType&quot;:&quot;string&quot;},&quot;showReadingKey&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:false,&quot;tsType&quot;:&quot;boolean&quot;,&quot;section&quot;:&quot;Layout&quot;},&quot;showFooterNote&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:true,&quot;tsType&quot;:&quot;boolean&quot;,&quot;section&quot;:&quot;Layout&quot;}}">
class Component extends DCLogic {
  roles = {
    "SEO specialist": {
      eyebrow: "Search engine optimisation · capability & trust",
      title: "The SEO specialist capability map",
      intro: "The same five-level capability model, mapped to the search engine optimisation (SEO) role. Read each row left to right — from routine, reviewed work to fully delegated authority over organic search. Choose the level to start at, and raise it as confidence builds.",
      closing: "Start an SEO specialist at the level that matches the trust and access you're ready to grant, then climb as the partnership proves itself. Brainbox can place and grow the right SEO specialist for your team.",
      scale: ["Assists, fully directed", "Routine tasks, reviewed", "Standing access to tools", "Owns & runs the function", "Decides within guardrails"],
      functions: [
        { name: "Keyword & search research", sub: "Keywords & intent",
          c1: ["Open the keyword tool as directed", "Copy keyword lists into the sheet", "Highlight terms the manager points out", "Save exports to the shared folder"],
          c2: ["Pull keyword lists from approved tools", "Log search volumes into the sheet", "Group keywords by topic", "File competitor keyword exports"],
          c3: ["Build keyword sets for each page", "Map keywords to search intent", "Track ranking positions weekly", "Spot gaps against competitors"],
          c4: ["Own the keyword strategy", "Prioritise targets by value and effort", "Run competitor and SERP analysis", "Set the research standard for the team"],
          c5: ["Decide which markets and terms to chase", "Approve the keyword roadmap within scope", "Judge opportunity against resources", "Sign off targeting priorities"] },
        { name: "On-page & content", sub: "Pages & content",
          c1: ["Make text edits exactly as briefed", "Paste in supplied meta titles and descriptions", "Add alt text from the provided list", "Flag anything unclear to the manager"],
          c2: ["Update title tags and meta descriptions as briefed", "Add alt text to images", "Format headings to the template", "Fix flagged on-page issues"],
          c3: ["Optimise pages against target keywords", "Write and refine metadata", "Structure content with headings and links", "Brief writers on SEO requirements"],
          c4: ["Own on-page optimisation across the site", "Run content audits and refreshes", "Set the internal-linking approach", "Guide the content team on SEO"],
          c5: ["Decide content priorities within the plan", "Approve on-page changes for publishing", "Balance SEO against brand and UX", "Sign off optimisation standards"] },
        { name: "Technical SEO", sub: "Crawl, index & speed",
          c1: ["Run the crawl using the saved settings", "Export the error list to the tracker", "Tick off issues as directed", "Save audit files to the folder"],
          c2: ["Run crawls with approved tools", "Log technical errors into the tracker", "Check pages for broken links", "File crawl and audit exports"],
          c3: ["Diagnose crawl and index issues", "Monitor site speed and Core Web Vitals", "Maintain sitemaps and robots.txt", "Track fixes with the dev team"],
          c4: ["Own the technical SEO health", "Run full technical audits", "Specify fixes for developers", "Manage structured data and schema"],
          c5: ["Decide technical priorities within scope", "Approve site changes affecting SEO", "Judge migration and platform risk", "Sign off technical standards"] },
        { name: "Link building & digital PR", sub: "Authority & off-page",
          c1: ["Add supplied prospects to the outreach sheet", "Look up contact details as directed", "Copy backlink data into the tracker", "File outreach responses"],
          c2: ["Research link prospects from lists", "Log outreach targets and contacts", "Track backlinks in the sheet", "File disavow and audit exports"],
          c3: ["Run outreach to approved prospects", "Qualify links for relevance and quality", "Monitor the backlink profile", "Draft outreach emails for review"],
          c4: ["Own the link-building program", "Run digital PR and outreach campaigns", "Manage the backlink profile and disavows", "Build relationships with publishers"],
          c5: ["Decide link targets and tactics within policy", "Approve outreach and partnerships", "Manage budget for placements", "Sign off the off-page approach"] },
        { name: "Analytics & reporting", sub: "Data & performance",
          c1: ["Open the dashboards as directed", "Copy figures into the report template", "Take screenshots of the charts", "Save the report to the folder"],
          c2: ["Pull data from GA and Search Console", "Compile figures into the report", "Update ranking dashboards", "File monthly report exports"],
          c3: ["Build performance reports for review", "Track traffic, rankings and conversions", "Set up and maintain dashboards", "Flag notable movements"],
          c4: ["Own SEO reporting end to end", "Interpret data into insights", "Set the measurement framework", "Run analysis on wins and losses"],
          c5: ["Decide which metrics matter within scope", "Advise stakeholders on performance", "Approve reporting cadence and format", "Sign off the numbers"] },
        { name: "Strategy & roadmap", sub: "Planning & growth",
          c1: ["Update the task list as items are passed on", "Note deadlines in the tracker", "Gather the requested inputs", "Keep project files tidy"],
          c2: ["Maintain the SEO task list", "Track deadlines and flag due dates", "Compile inputs for the plan", "Keep project files organised"],
          c3: ["Coordinate the SEO roadmap", "Track initiatives to completion", "Prepare status updates", "Chase contributors for deliverables"],
          c4: ["Own the SEO roadmap and delivery", "Prioritise initiatives by impact", "Report progress by exception", "Align SEO with marketing plans"],
          c5: ["Decide strategy within agreed guardrails", "Approve the roadmap and resourcing", "Balance quick wins against long plays", "Commit to campaign direction"] }
      ]
    },
    "Administration assistant": {
      eyebrow: "Administration assistant · capability & trust",
      title: "The administration assistant capability map",
      intro: "The same five-level capability model, mapped to the administration assistant role. Read each row left to right — from simple, closely-directed tasks to owning the function outright. Choose the level to start at, and raise it as confidence builds.",
      closing: "Start an administration assistant at the level that matches the trust and access you're ready to grant, then climb as capability proves itself. Brainbox can place and grow the right administration assistant for your team.",
      scale: ["Assists, closely directed", "Routine admin, reviewed", "Standing access to systems", "Owns & runs the function", "Decides within guardrails"],
      functions: [
        { name: "Enquiries & call handling", sub: "Phones & first contact",
          c1: ["Answer calls and take a written message", "Route calls on as directed", "Respond to enquiries using set scripts", "Log every enquiry in the tracker"],
          c2: ["Handle routine enquiries directly", "Manage the enquiry queue unsupervised", "Follow up on open enquiries", "Keep contact records up to date"],
          c3: ["Own the enquiry channel end to end", "Field and route all enquiries", "Set response standards and scripts", "Handle difficult callers calmly"],
          c4: ["Decide how enquiries are handled within scope", "Manage sensitive enquiries discreetly", "Own escalation to the right person", "Represent the business by phone and mail"],
          c5: ["Own first contact as the business's voice", "Commit to responses with authority", "Carry final call on enquiry handling", "Set the tone every caller remembers"] },
        { name: "Diary & meetings", sub: "Scheduling & coordination",
          c1: ["Add appointments as they are passed on", "Send meeting invitations when asked", "Set up the video-meeting links", "Set reminders ahead of meetings"],
          c2: ["Keep team diaries accurate", "Schedule routine meetings directly", "Manage clashes and reschedules", "Circulate agendas and papers"],
          c3: ["Own the scheduling for the team", "Triage and prioritise meeting requests", "Coordinate multi-party meetings across time zones", "Prepare briefing packs"],
          c4: ["Decide scheduling priorities within guardrails", "Protect key people's focus time", "Commit the team's time to priorities", "Resolve clashes on their behalf"],
          c5: ["Own how the team's time is run", "Design the meeting rhythm", "Commit arrangements without checking first", "Guard focus across the team"] },
        { name: "Documents & data entry", sub: "Filing & records",
          c1: ["Type up documents from a template", "Enter data exactly as supplied", "File records in the labelled folder", "Scan and upload as directed"],
          c2: ["Format documents to the house style", "Maintain records and spreadsheets", "Proofread routine documents", "Keep the digital filing system in order"],
          c3: ["Own document and records management", "Design templates and filing structures", "Run version control and archiving", "Set the standard for accuracy"],
          c4: ["Decide record-keeping practice within policy", "Manage confidential records discreetly", "Approve document releases within scope", "Safeguard data quality"],
          c5: ["Own information integrity end to end", "Commit to records practice in your name", "Carry final call on retention", "Steward compliance across the team"] },
        { name: "Correspondence & email", sub: "Inbox & comms",
          c1: ["Monitor the shared inbox and flag urgent mail", "File and sort messages into folders", "Draft simple replies for review", "Send correspondence exactly as briefed"],
          c2: ["Manage the shared inbox daily", "Reply to routine queries directly", "Draft correspondence for review", "Summarise incoming mail"],
          c3: ["Own the shared inbox and routing", "Filter so only what matters escalates", "Chase responses on the team's behalf", "Draft correspondence in the house voice"],
          c4: ["Reply on substantive matters within guardrails", "Handle confidential mail discreetly", "Send correspondence in the team's name", "Manage escalations"],
          c5: ["Be the trusted voice in writing", "Decide what never needs to escalate", "Commit in correspondence with authority", "Hold every confidence"] },
        { name: "Systems & procurement admin", sub: "Tools & ordering",
          c1: ["Enter records into the systems as directed", "Raise purchase orders from a list", "Log invoices and receipts", "Track orders and deliveries in the sheet"],
          c2: ["Maintain data in the core systems", "Place routine orders online when low", "Reconcile orders against invoices", "Keep supplier records current"],
          c3: ["Own systems administration and ordering", "Manage supplier relationships remotely", "Run reporting from the systems", "Anticipate and pre-empt needs"],
          c4: ["Decide procurement within budget", "Commit to supplier arrangements online", "Manage the budget line", "Negotiate routine contracts"],
          c5: ["Own the systems and procurement function", "Commit the business to arrangements", "Carry final call on tools and vendors", "Steward data and spend"] },
        { name: "Coordination & support", sub: "Tasks & projects",
          c1: ["Maintain the team to-do list", "Track deadlines and flag due dates", "Gather requested inputs", "Keep project files tidy"],
          c2: ["Coordinate small tasks end to end", "Chase contributors for deliverables", "Prepare simple status updates", "Support online events and travel bookings"],
          c3: ["Run coordination and report by exception", "Hold contributors accountable kindly", "Own online event and travel logistics", "Streamline routine workflows"],
          c4: ["Make coordination decisions within guardrails", "Commit to bookings and arrangements", "Approve spend within limits", "Drive initiatives on the team's behalf"],
          c5: ["Be the operational backbone of the team", "Make significant calls without being asked", "Commit arrangements with authority", "Run it all so nothing slips"] }
      ]
    },
    "Executive assistant": {
      eyebrow: "Executive assistant · capability & trust",
      title: "The executive assistant capability map",
      intro: "The same five-level capability model, mapped to the executive assistant role. Read each row left to right — from routine, reviewed support to acting fully on your behalf. Choose the level to start at, and raise it as confidence builds.",
      closing: "Start an executive assistant at the level that matches the trust and access you're ready to grant, then climb as the partnership proves itself. Brainbox can place and grow the right EA for you.",
      scale: ["Routine support, reviewed", "Standing access to your systems", "Gatekeeps & represents you", "Decides within guardrails", "Acts on your behalf"],
      functions: [
        { name: "Calendar & scheduling", sub: "Diary & meetings",
          c1: ["Add appointments as you pass them on", "Send invitations and chase RSVPs", "Set reminders ahead of commitments", "Convert times across time zones"],
          c2: ["Own the diary and keep it accurate", "Schedule routine meetings directly", "Protect your focus blocks", "Build in travel and prep time"],
          c3: ["Act as the point of contact for requests", "Triage and decline meetings kindly", "Decide what you attend or skip", "Brief you on the day ahead"],
          c4: ["Run the calendar to agreed principles", "Commit your time to your priorities", "Handle sensitive scheduling discreetly", "Resolve clashes on your behalf"],
          c5: ["Own your time as a strategic asset", "Commit you without checking first", "Design your weekly and annual rhythm", "Guard your focus and energy"] },
        { name: "Inbox & communications", sub: "Email & correspondence",
          c1: ["Monitor and flag urgent email", "Sort and file into folders", "Draft simple replies for review", "Unsubscribe from clutter"],
          c2: ["Manage the inbox to zero daily", "Reply to routine queries for you", "Draft correspondence in your voice", "Summarise overnight mail"],
          c3: ["Act as first line for all email", "Filter so only what matters reaches you", "Chase responses on your behalf", "Manage your inbox during travel"],
          c4: ["Reply on substantive matters within guardrails", "Handle confidential email discreetly", "Send correspondence in your name", "Manage escalations for you"],
          c5: ["Be your trusted voice in writing", "Decide what you never need to see", "Speak and commit for you", "Hold every confidence absolutely"] },
        { name: "Travel & logistics", sub: "Trips & itineraries",
          c1: ["Research flight and hotel options", "Book travel once approved", "Build the itinerary document", "Arrange transfers and transport"],
          c2: ["Plan complete trips to your preferences", "Manage loyalty programs and upgrades", "Prepare a single mobile itinerary", "Reconcile travel against budget"],
          c3: ["Own travel end to end", "Rebook instantly when disruption hits", "Liaise with airlines and hotels", "Brief you on each destination"],
          c4: ["Run travel autonomously within budget", "Commit to bookings on your behalf", "Coordinate sensitive travel discreetly", "Resolve crises in transit"],
          c5: ["Design how you move through the year", "Commit you to any arrangement", "Manage private aviation and security", "Protect your privacy on every trip"] },
        { name: "Meetings & follow-ups", sub: "Agendas & actions",
          c1: ["Prepare and circulate agendas", "Take clear minutes", "Capture actions, owners and dates", "Distribute notes afterwards"],
          c2: ["Run the full meeting cycle", "Chase action owners to closure", "Prepare your briefing pack", "Track decisions across meetings"],
          c3: ["Own the meeting rhythm", "Drive actions to closure for you", "Brief you on context and people", "Hold others accountable kindly"],
          c4: ["Decide what you attend or delegate", "Make commitments in meetings for you", "Handle sensitive content discreetly", "Manage board and investor follow-up"],
          c5: ["Be custodian of every commitment", "Attend and act for you in your absence", "Commit in your name with authority", "Hold every confidence from the room"] },
        { name: "Projects & operations", sub: "Tasks & coordination",
          c1: ["Maintain your task and to-do lists", "Track deadlines and flag due dates", "Keep files and folders organised", "Format and proofread documents"],
          c2: ["Coordinate small projects end to end", "Chase contributors for deliverables", "Prepare status reports", "Run your filing and systems"],
          c3: ["Run projects and report by exception", "Hold contributors accountable", "Pre-empt problems before they reach you", "Streamline workflows"],
          c4: ["Make operational decisions within guardrails", "Negotiate and commit to contracts", "Approve spend within limits", "Drive initiatives in your name"],
          c5: ["Be the operational mind behind you", "Make significant decisions for you", "Commit the organisation with authority", "Run it all without being asked"] },
        { name: "Personal & lifestyle", sub: "Life admin",
          c1: ["Book personal appointments", "Order gifts, flowers and cards", "Arrange deliveries and returns", "Manage your personal to-do list"],
          c2: ["Manage your personal admin end to end", "Coordinate household appointments", "Plan personal trips and outings", "Anticipate personal needs"],
          c3: ["Run your personal life on your behalf", "Manage sensitive personal matters", "Coordinate your family's logistics", "Protect your personal time"],
          c4: ["Make personal decisions within guardrails", "Handle highly sensitive matters discreetly", "Manage personal finances in your name", "Coordinate your whole life as one"],
          c5: ["Steward your personal life as an equal", "Hold your deepest confidences", "Make significant personal decisions for you", "Free you to live, it's all handled"] }
      ]
    },
    "Bookkeeper": {
      eyebrow: "Bookkeeping · capability & trust",
      title: "The bookkeeper capability map",
      intro: "The same five-level capability model, mapped to the bookkeeping function. Read each row left to right — from routine, reviewed work to fully delegated, fiduciary responsibility. Choose the level to start at, and raise it as confidence builds.",
      closing: "Start a bookkeeper at the level that matches the trust and access you're ready to grant, then climb as the partnership proves itself. Brainbox can place and grow the right person for your books.",
      scale: ["Routine entry, reviewed", "Recurring ledger access", "Runs & filters the function", "Approves within limits", "Signs off & advises"],
      functions: [
        { name: "Accounts payable", sub: "Bills & suppliers",
          c1: ["Enter supplier bills and file receipts", "Match invoices to purchase orders", "Set up new suppliers in the system", "Scan and attach source documents"],
          c2: ["Manage the bill inbox and code expenses", "Prepare payment runs for approval", "Reconcile supplier statements", "Track due dates and early-payment discounts"],
          c3: ["Own the AP ledger and supplier queries", "Chase credit notes and resolve disputes", "Manage the approval workflow", "Keep aged payables clean and current"],
          c4: ["Approve payments within agreed limits", "Negotiate terms and manage cash timing", "Release scheduled payment batches", "Set supplier payment policy"],
          c5: ["Authorise the full payment run in your name", "Steward supplier relationships and controls", "Own the AP control environment", "Safeguard against duplicate and fraudulent payments"] },
        { name: "Accounts receivable", sub: "Invoicing & collections",
          c1: ["Raise invoices from approved details", "Record customer receipts", "Maintain the customer master file", "Issue receipts and remittances"],
          c2: ["Issue invoices and send statements", "Allocate payments and track aged debt", "Apply approved discounts and credits", "Send reminders on due accounts"],
          c3: ["Run collections and follow overdue accounts", "Resolve billing queries with customers", "Own the aged-receivables ledger", "Set up payment plans within guidelines"],
          c4: ["Set and apply credit terms within policy", "Decide write-offs within agreed limits", "Place accounts on stop or to collections", "Approve new customer credit"],
          c5: ["Own the cash-collection result", "Manage credit risk and key accounts in your name", "Set credit policy across the business", "Protect the receivables and DSO position"] },
        { name: "Bank & reconciliations", sub: "Cash & matching",
          c1: ["Download and file bank statements", "Enter transactions to the ledger", "Code card and petty-cash spend", "File supporting documentation"],
          c2: ["Reconcile bank and card accounts", "Flag unmatched or unusual items", "Reconcile petty cash and floats", "Keep the cashbook up to date"],
          c3: ["Own monthly reconciliations across accounts", "Investigate and clear discrepancies", "Reconcile loan and merchant accounts", "Maintain the bank feed and rules"],
          c4: ["Manage cash position and short-term forecast", "Approve transfers within limits", "Manage multiple accounts and currencies", "Optimise interest and idle balances"],
          c5: ["Steward cash controls and banking relationships", "Safeguard against fraud and error", "Own bank authorities and signatories", "Sign off all reconciliations"] },
        { name: "Expense management", sub: "Cards & reimbursements",
          c1: ["Collect and file expense receipts", "Enter claims for review", "Match receipts to card transactions", "Maintain the expense log"],
          c2: ["Process staff expense claims", "Code and allocate card spend", "Chase missing receipts", "Reconcile the card statement"],
          c3: ["Own the expense process end to end", "Enforce the expense policy", "Resolve claim queries and exceptions", "Manage the card program day to day"],
          c4: ["Approve expenses within agreed limits", "Set and update the expense policy", "Manage card limits and issuance", "Flag and investigate misuse"],
          c5: ["Authorise expense and card spend in your name", "Own expense controls and compliance", "Steward the travel and expense budget", "Safeguard against fraud and leakage"] },
        { name: "Payroll", sub: "Pay, super & leave",
          c1: ["Collect timesheets and leave forms", "Enter pay data for review", "Maintain employee files", "File payslips and records"],
          c2: ["Prepare payroll for approval", "Maintain employee and super records", "Process starters and terminations", "Track leave accruals and balances"],
          c3: ["Run payroll end to end", "Handle pay queries and adjustments", "Process super and STP submissions", "Reconcile payroll to the ledger"],
          c4: ["Approve payroll within delegated authority", "Manage super, PAYG and leave liabilities", "Manage awards and pay-rate changes", "Handle terminations and entitlements"],
          c5: ["Sign off payroll in your name", "Hold confidential remuneration data absolutely", "Own payroll compliance and risk", "Advise on pay structures and costs"] },
        { name: "Reporting, BAS & compliance", sub: "Month-end & lodgements",
          c1: ["Compile data for reports", "File and label compliance documents", "Keep the chart of accounts tidy", "Gather records for the accountant"],
          c2: ["Prepare monthly management figures", "Draft the BAS for review", "Reconcile control accounts", "Maintain the fixed-asset register"],
          c3: ["Produce month-end reports and packs", "Liaise with the accountant on queries", "Run the month-end close", "Prepare working papers"],
          c4: ["Lodge BAS and manage GST/PAYG within authority", "Interpret results and flag risks", "Manage the audit and year-end process", "Track compliance deadlines and lodgements"],
          c5: ["Own reporting integrity and lodgements", "Advise you on the numbers, not just report them", "Sign off the management accounts", "Steward financial controls and governance"] }
      ]
    },
    "Electrical estimator": {
      eyebrow: "Commercial electrical estimating · capability & trust",
      title: "The electrical estimator capability map",
      intro: "A five-level capability model, mapped to the commercial electrical estimating function. Read each row left to right — from routine, reviewed work to fully delegated authority over the bid. Choose the level to start at, and raise it as confidence builds.",
      closing: "Start an estimator at the level that matches the trust you're ready to grant, then climb as the partnership proves itself. Brainbox can place and grow the right estimator for your team.",
      scale: ["Assists, closely directed", "Works the live estimate", "Owns & runs the estimate", "Prices & commits within limits", "Signs off the bid"],
      functions: [
        { name: "Takeoff & quantities", sub: "Measuring the works",
          c1: ["Count a symbol type when shown which one", "Tally marked-up items into the sheet", "Highlight drawings as instructed", "Save and file drawings where told"],
          c2: ["Complete takeoffs across disciplines", "Track drawing revisions and changes", "Build switchboard and DB schedules", "Flag missing or unclear details"],
          c3: ["Own the takeoff for the whole project", "Reconcile quantities to the design", "Query the consultant on ambiguities", "Set the takeoff standard for the team"],
          c4: ["Decide measurement allowances and wastage", "Resolve scope gaps with the design team", "Sign off quantities for pricing", "Judge buildability and access risks"],
          c5: ["Own the quantified scope end to end", "Commit the takeoff as tender-ready", "Carry final judgement on what's included", "Stand behind the numbers to the client"] },
        { name: "Pricing & cost build-up", sub: "Materials, labour & rates",
          c1: ["Type in prices from a given list", "Copy labour units as instructed", "Add up columns in the sheet", "Check totals against a worked example"],
          c2: ["Build up rates for each item", "Apply labour constants and crews", "Update prices from supplier lists", "Calculate prelims and on-costs"],
          c3: ["Own the priced estimate", "Set labour rates and productivity", "Manage the cost build-up structure", "Review for gaps and double-counts"],
          c4: ["Set margins and risk allowances", "Adjust rates for site conditions", "Approve the cost plan within limits", "Decide make-versus-buy and prefab"],
          c5: ["Set the final price and margin", "Own the commercial position", "Commit pricing into the bid", "Defend the rates to the client"] },
        { name: "Tender & bid management", sub: "RFTs & submissions",
          c1: ["Download the tender files when told", "Note the deadline in the calendar", "Gather documents into one folder", "Add the tender to the log"],
          c2: ["Prepare tender returnables", "Manage the bid program and dates", "Compile qualifications and exclusions", "Assemble the submission pack"],
          c3: ["Run the tender end to end", "Own deadlines and compliance", "Coordinate inputs from the team", "Draft the commercial proposal"],
          c4: ["Decide bid / no-bid recommendations", "Approve qualifications and exclusions", "Manage RFIs with the principal", "Sign off the submission within limits"],
          c5: ["Own the bid decision and strategy", "Submit the tender in your name", "Commit the company to the offer", "Lead negotiations through to award"] },
        { name: "Supplier & subbie quotes", sub: "Vendors & subcontractors",
          c1: ["Send a supplied RFQ email template", "Save incoming quotes to the folder", "Tick off who has replied", "File each quote where told"],
          c2: ["Compare quotes on a like basis", "Level subcontractor scopes", "Maintain the supplier register", "Track quote validity dates"],
          c3: ["Own the procurement schedule", "Run quote comparison and selection", "Resolve scope gaps with subbies", "Negotiate routine pricing"],
          c4: ["Select preferred suppliers within policy", "Approve buy prices within limits", "Negotiate terms and rebates", "Manage key vendor relationships"],
          c5: ["Commit to suppliers in your name", "Own the supply-chain strategy", "Lock in major package pricing", "Steward vendor partnerships"] },
        { name: "Scope, risk & compliance", sub: "Standards & exclusions",
          c1: ["Copy inclusions from a checklist", "File the spec and standards notes", "Highlight sections when pointed out", "Pass questions to the estimator"],
          c2: ["Mark up scope against AS/NZS 3000", "Build the qualifications list", "Track variations to the brief", "Note long-lead and risk items"],
          c3: ["Own scope definition and clarity", "Assess compliance and standards", "Run the risk and assumptions register", "Raise RFIs on unclear scope"],
          c4: ["Decide risk allowances and contingency", "Approve exclusions and qualifications", "Judge code and compliance exposure", "Sign off the scope within limits"],
          c5: ["Own scope, risk and compliance", "Carry final call on what's excluded", "Commit the risk position in the bid", "Stand behind compliance to the client"] },
        { name: "Handover & project setup", sub: "Won-job handover",
          c1: ["Gather the estimate files into one pack", "File the awarded documents", "Print or share the pack as asked", "Pass drawings and quotes to the team"],
          c2: ["Prepare the handover pack", "Transfer budgets to the system", "Brief the team on the estimate", "Set up cost codes"],
          c3: ["Run the estimate-to-delivery handover", "Reconcile budget to the tender", "Brief PMs on scope and risk", "Set the procurement schedule"],
          c4: ["Approve the project budget setup", "Decide buy targets and savings", "Manage handover within authority", "Resolve scope queries with delivery"],
          c5: ["Own the handover and budget integrity", "Commit budgets in your name", "Advise on margin and recovery", "Steward the estimate through delivery"] }
      ]
    },
    "HR support officer": {
      eyebrow: "HR support officer (WA) · capability & trust",
      title: "The HR support officer capability map",
      intro: "The same five-level capability model, mapped to an HR support officer in Western Australia — including apprenticeship and traineeship support. Read each row left to right, from routine, reviewed work to fully delegated authority. Choose the level to start at, and raise it as confidence builds.",
      closing: "Start an HR support officer at the level that matches the trust and access you're ready to grant, then climb as the partnership proves itself. Brainbox can place and grow the right HR support officer for your team.",
      scale: ["Routine admin, reviewed", "Standing access to HR systems", "Owns & runs the function", "Advises & decides within policy", "Acts on the business' behalf"],
      functions: [
        { name: "Recruitment & onboarding", sub: "Hiring & induction",
          c1: ["Post job ads to approved boards", "Schedule interviews and book rooms", "Collect and file applications", "Prepare onboarding paperwork"],
          c2: ["Screen applications to criteria", "Coordinate the interview process", "Run reference and police checks", "Manage induction logistics"],
          c3: ["Own the recruitment pipeline", "Shortlist candidates for managers", "Draft offers and contracts for review", "Run the onboarding program"],
          c4: ["Advise managers on selection", "Approve offers within salary bands", "Decide onboarding approach", "Resolve pre-start issues"],
          c5: ["Own the hiring outcome", "Commit offers in the business' name", "Shape the recruitment strategy", "Steward the candidate experience"] },
        { name: "Employee records & HRIS", sub: "Files & systems",
          c1: ["Maintain employee files", "Enter data into the HRIS", "File signed documents", "Update contact details"],
          c2: ["Keep the HRIS accurate and current", "Process changes and movements", "Run standard HR reports", "Maintain org charts"],
          c3: ["Own data integrity across systems", "Audit records for compliance", "Manage access and permissions", "Build reports for managers"],
          c4: ["Decide data and retention policy", "Approve system and process changes", "Manage confidential records", "Sign off HR reporting"],
          c5: ["Own HR data governance", "Hold confidential records absolutely", "Steward privacy and compliance", "Advise leadership on workforce data"] },
        { name: "Payroll & entitlements", sub: "Pay, leave & super",
          c1: ["Collect timesheets and leave forms", "Enter pay data for review", "File payroll paperwork", "Answer basic leave queries"],
          c2: ["Prepare payroll inputs for approval", "Track leave balances and accruals", "Maintain super and tax records", "Process starters and leavers"],
          c3: ["Own the payroll input process", "Interpret awards and agreements", "Resolve pay and leave queries", "Reconcile payroll to records"],
          c4: ["Approve payroll within authority", "Advise on entitlements and awards", "Manage leave and LSL liabilities", "Handle complex pay matters"],
          c5: ["Own payroll accuracy and compliance", "Hold remuneration data absolutely", "Advise on pay structures and cost", "Sign off entitlements"] },
        { name: "Apprenticeships & traineeships", sub: "Training & funding (WA)",
          c1: ["Maintain apprentice and trainee records", "File training contracts and plans", "Track training plan due dates", "Help complete enrolment forms"],
          c2: ["Lodge training contracts with the AASN", "Track competency progress and reviews", "Coordinate with the RTO and ATO", "Maintain the training plan schedule"],
          c3: ["Own apprenticeship administration", "Liaise with the AASN, RTO and DTWD", "Manage incentives and funding claims", "Support apprentices through milestones"],
          c4: ["Advise managers on apprenticeship setup", "Manage completions, cancellations and transfers", "Decide funding and incentive approach", "Resolve training contract issues"],
          c5: ["Own the apprenticeship program", "Steward apprentice success and retention", "Commit to training contracts in your name", "Advise on workforce-development strategy"] },
        { name: "ER, compliance & WHS", sub: "Awards, Fair Work & safety",
          c1: ["File WHS and compliance records", "Track training and certification dates", "Collate documents for cases", "Maintain policy and procedure files"],
          c2: ["Track award and Fair Work updates", "Maintain WHS records and registers", "Coordinate return-to-work admin", "Prepare compliance reports"],
          c3: ["Own HR compliance and WHS admin", "Interpret awards and the NES", "Support investigations and cases", "Run inductions on policy and safety"],
          c4: ["Advise managers on ER matters", "Manage grievances and performance cases", "Decide compliance approach within policy", "Sign off WHS and compliance"],
          c5: ["Own ER, compliance and WHS", "Hold sensitive case information absolutely", "Advise leadership on risk and exposure", "Represent the business with regulators"] },
        { name: "Performance & development", sub: "Reviews & L&D",
          c1: ["Schedule review meetings", "Maintain training records", "Collate review paperwork", "Book courses as directed"],
          c2: ["Coordinate the review cycle", "Track development plans and goals", "Maintain the training calendar", "Process L&D requests"],
          c3: ["Own the performance cycle admin", "Support managers through reviews", "Coordinate L&D programs", "Identify training needs from data"],
          c4: ["Advise on performance and capability", "Approve L&D within budget", "Decide development priorities", "Manage underperformance processes"],
          c5: ["Own performance and development", "Shape the capability strategy", "Advise leadership on talent", "Steward a culture of growth"] }
      ]
    },
    "Landscape designer": {
      eyebrow: "Landscape design (remote) · capability & trust",
      title: "The landscape designer capability map",
      intro: "The same five-level capability model, mapped to a remote landscape design role — working from supplied surveys, photos and drawings. Read each row left to right — from routine, reviewed work to fully delegated authority over the design. Choose the level to start at, and raise it as confidence builds.",
      closing: "Start a landscape designer at the level that matches the trust you're ready to grant, then climb as the partnership proves itself. Brainbox can place and grow the right designer for your studio.",
      scale: ["Assists & files, fully directed", "Drafts to direction", "Owns & runs the design", "Designs & commits within limits", "Signs off the design"],
      functions: [
        { name: "Site analysis & brief", sub: "From supplied survey & brief",
          c1: ["Compile supplied site photos and survey", "Sort and file the site information", "Log site levels from the survey", "Set up the project information folder"],
          c2: ["Interpret the supplied survey and levels", "Catalogue existing trees from the survey", "Assess sun, aspect and drainage from data", "Flag constraints to the designer"],
          c3: ["Own the site analysis from supplied data", "Run the client briefing call", "Interpret needs into design goals", "Set the survey-review standard for the team"],
          c4: ["Decide design priorities from the brief", "Resolve scope with the client", "Sign off the brief and budget range", "Judge site risks from the information provided"],
          c5: ["Own the brief and design intent", "Commit the project scope", "Carry final call on direction", "Set the vision with the client"] },
        { name: "Concept & design development", sub: "Concepts & layouts",
          c1: ["Collect reference images as directed", "Tidy up CAD base files", "Compile digital presentation boards", "Trace and clean up sketches"],
          c2: ["Sketch layout options to direction", "Prepare mood and reference boards", "Draft concept plans for review", "Lay out base plans in CAD"],
          c3: ["Own the design development", "Resolve the layout and flow", "Lead the concept presentation", "Set the design language"],
          c4: ["Decide the design direction", "Approve concepts within scope", "Balance design against budget", "Sign off the developed design"],
          c5: ["Own the creative vision", "Commit the design to the client", "Carry final aesthetic judgement", "Defend the design to stakeholders"] },
        { name: "Planting & materials", sub: "Plants & hardscape",
          c1: ["Look up plant names and photos", "Fetch and label material samples", "File supplier catalogues", "Tidy the plant schedule"],
          c2: ["Build the planting plan to direction", "Look up species for conditions", "List hardscape materials", "Calculate quantities and spacing"],
          c3: ["Own the planting and materials design", "Match species to site and climate", "Curate the materials palette", "Review for maintenance and longevity"],
          c4: ["Approve the plant and material schedule", "Decide substitutions within budget", "Set quality and sourcing standards", "Sign off specifications"],
          c5: ["Own the planting and material outcome", "Commit specifications in your name", "Carry final call on the palette", "Stand behind plant performance"] },
        { name: "Documentation & drawings", sub: "Plans & details",
          c1: ["Set up drawing sheets and titles", "Add labels and legends as directed", "File and number drawing revisions", "Export and collate drawing sets"],
          c2: ["Draft setout and layout plans", "Prepare detail sheets", "Build setout and levels plans", "Keep the drawing set tidy"],
          c3: ["Own the documentation set", "Resolve detailing and buildability", "Coordinate with consultants", "Set the drawing standard"],
          c4: ["Approve the documentation for issue", "Decide detailing and tolerances", "Sign off drawings within authority", "Judge constructability and risk"],
          c5: ["Own documentation integrity", "Commit the drawings for construction", "Carry final technical judgement", "Stand behind the set to the builder"] },
        { name: "Approvals & compliance", sub: "Council & standards",
          c1: ["Gather documents for approval", "Fill in submission checklists", "File council and standards notes", "Track submission dates"],
          c2: ["Prepare the DA / permit pack", "Check against planning controls", "Note tree and heritage constraints", "Track conditions and deadlines"],
          c3: ["Own the approvals process", "Liaise with council and certifiers", "Assess compliance and standards", "Raise queries on unclear controls"],
          c4: ["Decide compliance approach and risk", "Approve submissions within authority", "Negotiate conditions with council", "Sign off the compliance position"],
          c5: ["Own approvals and compliance", "Commit submissions in your name", "Carry final call on conditions", "Stand behind compliance to the client"] },
        { name: "Procurement & site support", sub: "Contractors & remote oversight",
          c1: ["Send drawings to contractors as directed", "Log quotes and lead times", "Order samples and materials", "File contractor documents"],
          c2: ["Compare contractor quotes", "Schedule deliveries and stages", "Track variations remotely", "Chase outstanding prices"],
          c3: ["Own procurement and the build program", "Run quote comparison and selection", "Coordinate trades and site queries remotely", "Review site progress photos and reports"],
          c4: ["Select contractors within policy", "Approve purchases within limits", "Manage variations and the budget", "Sign off site works from progress evidence"],
          c5: ["Commit to contractors in your name", "Own delivery and quality outcomes", "Carry final call on site decisions", "Steward the project to completion"] }
      ]
    }
  };

  renderVals() {
    const key = this.props.role ?? "Administration assistant";
    const data = this.roles[key] || this.roles["Administration assistant"];
    return {
      eyebrow: data.eyebrow,
      title: data.title,
      intro: data.intro,
      closing: data.closing,
      scale: data.scale,
      s1: data.scale[0], s2: data.scale[1], s3: data.scale[2], s4: data.scale[3], s5: data.scale[4],
      functions: data.functions,
      showReadingKey: this.props.showReadingKey ?? false,
      showFooterNote: this.props.showFooterNote ?? true
    };
  }
}
</script>
</body>
</html>

```
