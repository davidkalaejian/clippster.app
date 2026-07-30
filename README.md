# Clippster — Landing Page

Marketing site for **Clippster**, a native macOS menu bar clipboard manager with
on-device AI. Static HTML/CSS/JS — zero build, zero dependencies.

## Run locally

```sh
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repo.
2. **Settings → Pages → Source:** deploy from branch, root `/`.
3. `.nojekyll` is included, so the site serves as-is.

## Before going live

- Replace the `APP_STORE_URL` placeholder at the top of `index.html` with the
  real Mac App Store link (all Download buttons read from it).

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Single page, all sections |
| `privacy.html` / `terms.html` | Legal pages (Privacy Policy, Terms & Conditions) |
| `css/styles.css` | Design system (dark navy glass, iridescent accent) |
| `js/main.js` | Reveal choreography, nav state, App Store link wiring |
| `assets/` | Optimized screenshots (JPEG q80 @2000px), icon, hero video |
| `PRODUCT.md` / `DESIGN.md` | Product truth + visual world contract |
