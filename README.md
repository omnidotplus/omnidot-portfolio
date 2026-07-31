# Omnidot — web

Next.js 15 (App Router, TypeScript). Statically prerendered, deploys to Vercel with no configuration.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Deploying

Push to a Git repo and import it on Vercel. Framework preset **Next.js** is detected automatically; no build settings, env vars or `vercel.json` needed.

## Layout

```
app/
  layout.tsx        document shell, fonts, metadata
  page.tsx          section composition
  globals.css       imports omnidot.css then motion.css (order matters)
  omnidot.css       the exported design system
  motion.css        motion layer + responsive repair
components/
  Header … Footer   sections, generated from the export (see "Regenerating")
  Wordmark.tsx      inline SVG logo — the dot is a real <circle> so CSS can animate it
  Intro.tsx         entrance veil
  ServicesIndex.tsx services, state-driven
  MotionLayer.tsx   reveals, counters, cursor behaviour, nav, magnetism
lib/content.ts      services copy
public/assets/      images + the Humane webfont
```

## Origin of the section components

`components/Header.tsx` … `LineWrap.tsx` were originally generated from a static HTML export
by a one-off converter, then hand-patched. **That converter and its source HTML are not part
of this repo** — these files are now the source of truth and are edited directly.

Worth knowing when reading them: the markup is machine-converted, so class names follow the
original export's naming (`hero-bottom-h1`, `project-left-bottom-content-wrap`) rather than
anything chosen for this codebase. `app/omnidot.css` is that same export's stylesheet.

`Wordmark`, `Intro`, `ServicesIndex`, `MotionLayer` and `lib/content.ts` are hand-written.

## Decisions worth knowing

**jQuery and the Webflow runtime are gone** (~220 KB). They drove sliders, the nav and the
IX2 scroll interactions. Consequences that had to be handled explicitly:

- The mobile sliders were duplicates of the static grids, so they were dropped and the grids
  made responsive instead. The export hid those grids under `479px` because the sliders took
  over — `motion.css` section 8 restores them, without which **Team is empty on a phone**.
- Inline `opacity: 0` was IX2's start frame. With that engine gone it would hide content
  permanently, so the converter strips it; `MotionLayer` owns reveals now.
- The nav had no open/close logic left. `MotionLayer` provides it, with Escape, click-outside
  and body-scroll lock.

**Reveals replay.** Elements are never unobserved, so sections re-animate each time they
re-enter view rather than firing once.

**The logo is inline SVG, not an `<img>`.** An external SVG exposes nothing to CSS, so the dot
could not be animated. Each instance gets a unique gradient id — the mark renders in the
header, footer and intro, and duplicate ids would make every copy reference the first.

**Everything motion no-ops under `prefers-reduced-motion`.**

## Known content issues, not fixed here

- JSON-LD in the original export describes the template company ("Amplify", a Brooklyn
  address, `hello@amplify.com`). It was not carried into this port, so add correct structured
  data before launch.
- The team heading reads "POWERFUL DIGITL EXPERIENCES" — typo present in the source copy.
- Contact `tel:`/`mailto:` targets pointed at the template's details while the visible text
  showed Omnidot's. `wire.py` corrects them to `+2348134408179` and `omnidotplus@gmail.com`;
  confirm both are right.
