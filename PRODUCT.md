# PRODUCT.md — Clippster (Landing Page)

## What Clippster is
Clippster is a lightweight, native macOS menu bar clipboard manager with on-device
AI superpowers. Everything you copy — text, URLs, images, files — plus every
screenshot you take becomes a searchable record, accessible right from your menu
bar. No cloud, no accounts. Everything stays on your Mac.

- **Version:** 1.1 · **Platform:** macOS 14+ (auto-categorization with Foundation
  Models requires macOS 26 + Apple Intelligence)
- **Stack:** Swift + SwiftUI, SwiftData, Vision, Foundation Models, NaturalLanguage
- **Distribution:** Mac App Store (CTA target; URL placeholder until live)
- **Price:** Free

## The one thing it promises
**Never lose what you copy.** Every copy is silently saved to persistent on-disk
history that survives restarts — searchable by text *or by meaning*.

## Core capabilities (all true, do not exaggerate)
1. **Capture everything** — text, URLs, images, files, and screenshots (screenshots
   captured automatically when they land in the Screenshots folder). Persistent
   on-disk history (SwiftData).
2. **Instant recall** — global hotkey **⌥⌘V** opens the popover from anywhere:
   latest 15 clips with live previews, fully keyboard-navigable (↑↓ move, ↵ copy,
   ⇧↵ copy OCR text, Esc close, ⌫ delete, P pin, ⌘O Manager). Hover reveals
   floating actions: Copy, Copy scanned text, Pin, Delete.
3. **Manager window** — full history grouped by day, Pinned + category filter
   chips, search by text or meaning (semantic search via NaturalLanguage
   sentence embeddings).
4. **On-device AI** — OCR (Vision) on images/screenshots; auto-categorization
   (hybrid deterministic classifier + Foundation Models LLM on macOS 26; flags
   password/API-key-looking clips with a key icon); embeddings for semantic search.
5. **Pins & pruning** — pinned clips are kept forever; unpinned history auto-pruned
   at 500 clips.
6. **Export & reset** — one-click JSON export; one-click clear (with confirmation).

## Non-negotiable product truths (never contradict)
- **Privacy:** no cloud, no accounts, no network calls, no analytics. Everything
  stays on the Mac. Content from password managers is never captured.
- **Performance:** near-zero idle CPU. No background daemons. Menu bar icon +
  hotkey only.
- **Native:** Swift/SwiftUI for macOS 14+. Notarized.

## Voice
Calm, confident, plain-spoken. Short sentences. No hype adjectives ("blazing",
"revolutionary"). The product is quiet software — the copy should sound like it.
Approved phrases in use: "Your intelligent clipboard companion" · "Never lose what
matters" · "Everything stays on your Mac" · "Search by meaning, not just words."

## Landing page job
Get a Mac power-user to click **Download on the Mac App Store**. Single intent,
single CTA label everywhere: "Download for Mac".

## Audience
Mac power users: developers, designers, researchers — people who copy-paste all day,
care about privacy, and distrust cloud clipboard sync.
