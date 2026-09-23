# Syncing BB Hub to the live site

The live site rebuilds itself from GitHub. The only manual step is getting changed
files from the Claude workspace into the repo.

```
Claude workspace  →  [ you: commit ]  →  GitHub  →  [ automatic ]  →  Vercel live URL
```

- **Repo:** https://github.com/bb-marketing2026/bb-hub1 (branch `main`)
- **Vercel project:** `bb-hub`, team BB-Marketing
- **Live:** https://brainbox-hub.vercel.app

Any commit to `main` triggers a production rebuild — usually live within a minute.
There is no separate "deploy to Vercel" step.

---

## One-time setup — GitHub Desktop (recommended)

1. Install GitHub Desktop: https://desktop.github.com
2. **File → Clone repository → URL**, paste:
   `https://github.com/bb-marketing2026/bb-hub1`
3. Choose a local folder you'll remember, e.g. `Documents/bb-hub1`. Clone.

Done once. You never repeat this.

## Each time Claude hands you a bundle

1. Download the bundle and unzip it.
2. Copy its contents into your cloned `bb-hub1` folder, **replacing** when asked.
   Keep the folder structure — `Templates/` and `source-pdfs/` must stay as folders.
3. Open GitHub Desktop. The changed files appear in the left panel.
4. Type a summary (e.g. `Update campaign packs`) and click **Commit to main**.
5. Click **Push origin**.

Watch it build at https://vercel.com/bb-marketing1/bb-hub — or just reload
https://brainbox-hub.vercel.app in a minute.

---

## Alternative — command line

One-time:

```bash
git clone https://github.com/bb-marketing2026/bb-hub1.git
cd bb-hub1
```

Each time, after copying the bundle contents in:

```bash
git add .
git commit -m "Sync from Claude"
git push
```

---

## Housekeeping on the first sync

These repo files are superseded and should be deleted once the new bundle is in:

- `Hub.dc.html` → replaced by `Playbook Tree.dc.html`
- `Insight Article - Built, done differently (Tech).html`
- `Insight Article - Care, done differently (Healthcare).html`
- `Insight Article - Cleared for growth (Aerospace).html`
- `Insight Article - Growth, done differently.html`
- `Insight Article - Mining, done differently.html`

The last five are replaced by versions with punctuation-free filenames — commas and
parentheses in URLs break links on some hosts, which is why they were renamed.

---

## Notes

- **Don't edit files directly in GitHub** while also editing in Claude — the two will
  drift and the next bundle will overwrite your GitHub edits. Treat Claude as the
  source of truth and GitHub as the publishing channel.
- **The hub is confidential.** If the Vercel project's deployment protection is ever
  turned off, the site becomes publicly reachable by URL. Keep protection on, or put
  the site behind Vercel's password protection / SSO.
- `github.md` at the project root records what changed in each sync round.
