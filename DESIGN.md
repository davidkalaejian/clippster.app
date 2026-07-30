# DESIGN.md — Clippster Landing Page

Surface mode: **Persuade**. Theme: **dark, locked** (no light mode, no toggle).

## Direction contract
- **THESIS:** A quiet, cinematic dark stage where the product's own glass material
  and App Store screenshots carry the persuasion. The site should feel like the app:
  deep navy, frosted glass, one iridescent shimmer.
- **OWN-WORLD:** The app's existing App Store frames + glass icon define the visual
  world. The site's job is to stage them, not to invent a parallel look.
- **STORY:** Never lose a copy → everything is remembered and findable → recall in
  one keystroke → all of it stays on your Mac → download.
- **FIRST VIEWPORT:** Left-aligned headline, spinning glass icon centerpiece, one
  pill CTA, ⌥⌘V hint chip. Fits entirely, no scroll needed.
- **FORM:** Static HTML/CSS/JS, zero build, GitHub Pages. No frameworks, no web
  fonts (system SF Pro stack), no animation libraries.

## Color
| Token | Value | Use |
|---|---|---|
| `--bg-0` | `#070B18` | page base (deep navy off-black) |
| hero field | `#000000` | first viewport only — true black stage for the icon video; scrubs to `--bg-0` over the first ~85vh of scroll (CSS `animation-timeline: scroll()`, IntersectionObserver class-toggle fallback, QA escape via `?snap`) |
| `--bg-1` | `#0C1226` | raised fields, footer band |
| `--glass` | `rgba(255,255,255,.055)` + `backdrop-filter: blur(22px)` | panels |
| `--stroke` | `rgba(255,255,255,.10)` | all panel borders |
| `--ink` | `#F2F5FC` | primary text |
| `--ink-2` | `rgba(226,233,248,.68)` | secondary text |
| `--ink-3` | `rgba(226,233,248,.44)` | tertiary/captions |
| `--accent-a` | `#7DD3FC` (ice blue) | iridescent ramp start |
| `--accent-b` | `#A5B4FC` (periwinkle) | ramp middle |
| `--accent-c` | `#F0ABFC` (pink) | ramp end |

**Iridescent rule:** the blue→pink ramp (from the icon) is the ONLY accent.
Used for: display-moment gradient text, the CTA hover sheen, gradient hairlines,
glow behind the hero icon. Never for body text, never as two separate accents.
One accent, locked, whole page.

No pure black, no pure white fills, no purple/AI-glow default, no neon.

## Typography
- **Stack:** `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
  "Segoe UI", Inter, Roboto, sans-serif`. No web fonts — visitors on macOS get real
  SF Pro, matching the screenshots.
- **Mono:** `ui-monospace, "SF Mono", SFMono-Regular, Menlo, monospace` — hotkeys,
  spec values.
- **Display:** `clamp(2.6rem, 6vw, 4.6rem)`, weight 700, `letter-spacing: -0.03em`,
  `line-height: 1.02`.
- **Section titles:** `clamp(2rem, 4vw, 3rem)`, weight 700, `-0.02em`.
- **Body:** 1.0625rem, `line-height: 1.6`, max 62ch, color `--ink-2`.
- **Emphasis inside headlines:** italic/bold of the same family only.

## Shape & material
- Panels: 18px radius. Media frames: 20px. Chips/pills/buttons: full pill.
  Nothing square. One documented rule, applied everywhere.
- Glass panel = `--glass` background + 1px `--stroke` border + `blur(22px)` +
  inner top highlight `inset 0 1px 0 rgba(255,255,255,.08)`.
- `prefers-reduced-transparency`: solid `#121A33` fallback, no blur.
- Shadows: only large soft ambient `0 24px 80px rgba(0,0,0,.45)` under media.

## Motion (vanilla, no libs)
- Entrance: opacity + translateY(18px) staggered, `cubic-bezier(.16,1,.3,1)`,
  via IntersectionObserver, once.
- Hover: translateY(-1px) / sheen sweep on CTA; 180ms ease.
- Hero icon video: uncropped 16:9 frame, autoplay muted playsinline, **plays once and
  holds the last frame** (no loop; trimmed to 3.15s to end before the source fade-out);
  edges melt into the black hero via a subtle radial feather. Poster = app icon.
- `prefers-reduced-motion`: everything instant/static; video paused with poster.

## Layout
- Max width 1180px, gutters 24px. Sections separated by 120–160px rhythm.
- Hero: `min-height: 100dvh`, top padding ≤ 24 incl. nav offset. Left-aligned
  copy / right visual at ≥1024px; single column below.
- Eyebrow budget: ≤2 on the whole page. No zigzag chains. One CTA label:
  "Download for Mac". Nav height ≤72px, single line.
- Mobile collapse is explicit per section: grids → 1 col, media after copy,
  hero headline `clamp` handles scale.

## Imagery
- Real App Store frames (JPEG q80 @2000px) in 20px-radius media frames with
  gradient hairline border. Lazy-loaded below the fold.
- No fake UI built from divs, no stock photos, no generated filler.
- Icon: `assets/icon-512.png`; hero video: `assets/icon-spin.mp4`.

## Accessibility
- Contrast: `--ink` on `--bg-0` ≈ 15:1; `--ink-2` ≈ 7:1 — AA/AAA pass.
- Focus-visible: 2px `accent-a` outline, offset 3px, on all interactive elements.
- Semantic landmarks: nav / main / section with aria-labels / footer.
- Keyboard: all CTAs and links reachable; no hover-only meaning.
