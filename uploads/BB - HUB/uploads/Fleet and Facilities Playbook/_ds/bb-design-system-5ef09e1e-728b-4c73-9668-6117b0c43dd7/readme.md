# Brainbox Design System

The brand system for **Brainbox Group** — *Powerful People Performance*.
Use it to generate on-brand interfaces, documents, decks and marketing collateral
for Brainbox, whether production code or throwaway prototypes.

---

## 1. Company & product context

**Brainbox Group** (brain-box.com.au) is an Australian (Perth, WA) **people-performance,
HR advisory and offshoring consultancy**. They help organisations build high-performing,
people-first teams — recruitment, HR/people strategy, leadership & culture, and managed
offshore teams.

- **Tagline / positioning:** *Powerful People Performance*
- **Cultural motto:** *Always Be Kind* — kindness is the explicit core value, expressed
  as a playful secondary brand mark.
- **Mascot / symbol:** the **elephant** — gentle giant; strength, memory, loyalty, and
  herd/"together we thrive" togetherness. The primary logo is two interlocking elephant
  heads forming a single mark.
- **Voice:** warm, human, confident, optimistic. Performance-minded but kind.

### Core collateral the brand produces (from the brand guide)
Website · Business cards · A5 sales brochure · Banners · LinkedIn · Email signature ·
Industry guide · White papers · Presentation template · Proposal template · Letterhead ·
Video template · EDM campaign · Downloadable resources.

### Source materials provided
- `BB - Brand Guide - 20250530.pdf` — the master brand guide (colours, type, logo, collateral list).
- Logos: coloured & white horizontal, vertical, plus the *Always Be Kind* secondary mark (pink/white).
- `BB - Colour Palette.png` — primary & secondary colour swatches with HEX/RGB/CMYK/Pantone.
- Duotone elephant photography: `BB - Document Cover Image-01/02/04.jpg`.
- `Group Internal Presentation Template-01/02.png` — deck background + banner treatments.
- `Template - BB Document - Default (with cover image).dotx` — Word document template.
- Fonts: **Exo** (display/headings), **Aptos** family + **Aptos Mono** (body), **Beon** (logotype), **Exo** italics.

> All originals live under `uploads/`. Working copies are organised under `assets/` and `fonts/`.

---

## 2. Content fundamentals (voice & tone)

**Personality:** kind, capable, warm, human-first, quietly confident. Never corporate-cold,
never hype-y. Think "the smartest, kindest person in the room."

- **Person:** speak to the reader as **"you"**; speak as **"we"** for Brainbox. Inclusive and direct.
- **Casing:** **Sentence case** for headings and UI labels (not Title Case, not ALL CAPS) —
  *except* the logotype "BRAINBOX" and short eyebrow/label kickers, which may be UPPERCASE
  with wide tracking. Australian English spelling (organise, colour, programme, centre).
- **Tone words:** powerful, people, performance, kind, together, thrive, gentle, growth.
- **Sentence style:** short, plain, active. Lead with the benefit to people. Avoid jargon
  and buzzwords; if a sentence sounds like a brochure, rewrite it kinder and simpler.
- **Hashtags / rallying phrases:** *Always Be Kind*, *Powerful People Performance*,
  *Together We Thrive*, *Gentle Giants*.
- **Emoji:** not part of the system — avoid in product and formal collateral. The brand's
  "playfulness" comes from the *Always Be Kind* mark and the elephant, not emoji.
- **Examples**
  - Eyebrow: `POWERFUL PEOPLE PERFORMANCE`
  - Heading: `Build a team that actually wants to be here.`
  - Body: `We partner with you to find, grow and keep the people who make your business work — kindly, and for the long haul.`
  - CTA: `Start a conversation` · `See how we help` · `Meet the herd`

---

## 3. Visual foundations

### Colour
- **Pink `#FF0080` is the hero** — used for the logo, primary actions, accents, key headings.
  Use it with confidence but not wall-to-wall; it sings against white space.
- **Soft pink `#FE5EAA`** for secondary fills, hovers, tints.
- **Blue `#96B3D2`** is the calm counterweight — supporting surfaces, the cool end of the
  signature gradient, charts. It is muted, never neon.
- **Greys** `#585858` (ink/headings) and `#AFAFAF` (muted) carry most text. White `#FEFFFE`
  is the dominant canvas.
- **Signature gradient:** pink → blue, applied at a shallow **~6.7° angle** (`--bb-gradient-brand`).
  This is THE brand device — on the logotype, on hero panels, and as a duotone over photography.

### Typography
- **Exo** for everything display & heading — geometric, rounded, modern. H1 = SemiBold(600),
  H2 = Regular(400). Tracking is tight-to-normal; eyebrows go wide-tracked uppercase.
- **Aptos** for body — set **Light (300)** by default per the brand guide, which gives an airy,
  premium feel. Step up to Regular/SemiBold for emphasis and small sizes.
- **Aptos Mono** for data, code, fine technical labels.
- **Beon** is reserved for the *logotype look only* (the thin rounded BRAINBOX wordmark) — never body.

### Space & layout
- Generous **white space** is core to the look — consulting-grade restraint (think Anthropic /
  Deloitte marketing): big margins, few elements per view, one clear idea per section.
- 4px spacing grid (`--space-*`). Containers cap around 1080–1280px with wide gutters.
- Asymmetry is welcome: text on one side, a full-bleed duotone elephant on the other.

### Imagery
- **Duotone elephant photography** with the pink→blue gradient laid over it — warm hot-pink in
  the lows, cool blue/indigo in the highs. Real photography, never illustration.
- Photos are often **full-bleed** or bleed off one edge, with copy in the clear pink field.
- Mood: vivid, optimistic, a little editorial. High contrast between the saturated gradient
  and clean white type areas.

### Shape, depth & motion
- **Rounded, friendly corners** everywhere (`--radius-lg` 18px for cards, pills for chips/buttons-optional).
  Echoes the rounded elephant linework and the pill shapes in *Always Be Kind*.
- **Shadows are soft and low** — diffuse ambient, slightly warm; never hard or dark. Hero/primary
  elements may carry a subtle pink glow (`--shadow-brand`).
- **Borders** are hairline neutral (`--border-subtle`), or pink for brand emphasis.
- **Motion:** quick and gentle — `--duration-normal` 200ms, standard/`ease-out` curves. Fades and
  small lifts/translations. **No bounce, no spring, no flashy loops.**
- **Hover:** primary → darken pink (`--color-primary-hover`); subtle surfaces → tint to `--bb-pink-50`
  or lift with a slightly deeper shadow. **Press:** darken further + optionally nudge down 1px.
  Keep interactions calm and kind.
- **Transparency/blur:** used sparingly — light frosted overlays on photography, not a default.

---

## 4. Iconography

The brand guide does **not** ship a proprietary icon set. The mascot **elephant** and the
*Always Be Kind* crown/heart/sparkle doodles are the signature graphic language.

- **UI icons:** use **Lucide** (https://lucide.dev) — thin, rounded-cap line icons whose
  geometry matches the rounded, single-weight elephant linework. Loaded from CDN in components
  and kits. *(Substitution flagged: Lucide is the closest match to the brand's line style; if
  Brainbox has an official icon library, drop it into `assets/icons/` and update this section.)*
- **Logos & marks** live in `assets/logos/` — use these PNG/JPG assets directly; never redraw them.
- **Emoji / unicode as icons:** avoid.
- When a kit needs an icon, prefer a Lucide line icon at 1.75–2px stroke, rounded caps, in
  `--bb-grey-700` or `--bb-pink`.

---

## 5. Index / manifest

**Foundations**
- `styles.css` — root entry (import this one file).
- `fonts/fonts.css` + `fonts/*.ttf` — webfonts (Exo, Aptos, Aptos Mono, Beon).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`.

**Assets** (`assets/`)
- `logos/` — horizontal (colour/white), vertical, *Always Be Kind* (pink/white).
- `images/` — duotone elephant covers, presentation backgrounds/banner.
- `brand/` — colour palette reference.

**Guideline cards** (`guidelines/`) — foundation specimen cards rendered in the Design System
tab: `colors-primary` · `colors-supporting` · `colors-pink-ramp` · `colors-neutral-ramp` ·
`colors-gradient` · `colors-semantic` · `type-display` · `type-headings` · `type-body` ·
`type-mono-eyebrow` · `spacing-scale` · `spacing-radii` · `spacing-shadows` · `brand-logos` ·
`brand-always-be-kind` · `brand-imagery`.

**Components** (`components/`) — reusable React primitives. Namespace at runtime:
`window.BrainboxDesignSystem_5ef09e`. See each `*.prompt.md`.
- `core/` — **Button, Card, Input, Badge, Switch, Avatar** (card: `core.card.html`).
- `brand/` — **Logo, Eyebrow, Stat** (card: `brand.card.html`).

**Slides** (`slides/`) — 1280×720 presentation templates: `slide-title` · `slide-section` ·
`slide-content` · `slide-stats` · `slide-closing`.

**Document** (`documents/document.html`) — printable A4 report/proposal (cover + content page).

**UI kits** (`ui_kits/website/`) — full marketing-homepage recreation (`index.html` +
`Site.jsx` + `Icons.jsx`) composing the primitives.

**SKILL.md** — Agent-Skills-compatible entry point.

---

## 6. Caveats / substitutions
- **Fonts:** all supplied as `.ttf` originals (Exo, Aptos, Beon). Aptos is Microsoft's default
  family; if web licensing matters for production, confirm usage rights.
- **Icons:** Lucide substituted for a missing official icon set (see §4).
- **Imagery:** only the supplied duotone elephant photos are included; source more on-brand
  duotone photography for production work.
