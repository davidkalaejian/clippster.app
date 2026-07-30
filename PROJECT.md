# Clippster — Project Description

**Clippster** is a lightweight, native macOS menu bar clipboard manager with on-device
AI superpowers. No cloud, no accounts — everything stays on your Mac. Near-zero idle CPU.

## What it does

### Capture everything
- Every copy — **text, URLs, images, and files** — is silently recorded to a persistent
  on-disk history (SwiftData), surviving restarts.
- **Every screenshot you take** is automatically added as a clip the moment it lands
  in your screenshots folder.
- **Privacy guardrail:** content from password managers (concealed/transient/
  auto-generated pasteboard types) is never captured.

### Recall instantly
- **Menu bar popover** (click the icon): your latest 15 clips, newest first,
  with real content previews — 3-line text snippets, image thumbnails, file names.
  The popover auto-dismisses when you open the Manager.
- **Tap any clip to re-copy it.** Hover a clip for floating action buttons:
  **Copy**, **Copy scanned text** (for anything with OCR text), **Pin**, **Delete**.
- **Global hotkey ⌥⌘V** opens the Manager from anywhere.

### Manage everything
- **Manager window**: full searchable history grouped by day, with Pinned + Images +
  category filter chips.
- **Search by text or meaning** — semantic search finds clips by concept, not just
  exact words (e.g. searching "terminal command" finds that `git` snippet).
- **Pin clips** to keep them forever (pinned items are exempt from auto-pruning;
  unpinned history is capped at 500).
- **Export** the full history to JSON.
- **Settings cog** (bottom right): Launch at Login toggle, Re-categorize All,
  and app version.
- **Clear everything** with one click (with confirmation).

### On-device intelligence
Every clip is automatically enriched by Apple's frameworks — entirely on-device:
- **OCR** (Vision): text is extracted from images and screenshots, and is searchable
  and copyable.
- **Auto-categorization** — a hybrid two-stage classifier: a deterministic pre-stage
  handles high-confidence cases (URLs → link, files → file-path, email/phone regex,
  API-key prefixes sk-/ghp_/AKIA/eyJ → credentials-suspect, numbers and short phrases →
  plain-text). Anything ambiguous (code, shell syntax) is resolved by the on-device
  **Foundation Models** LLM (macOS 26+, Apple Intelligence). A key icon warns on
  anything that looks like a password or API key.
- **Embeddings** (NaturalLanguage): sentence vectors power the semantic search.

## At a glance

| | |
|---|---|
| Platform | macOS 14+ (categorization needs macOS 26 + Apple Intelligence) |
| Stack | Swift + SwiftUI, SwiftData, Vision, Foundation Models, NaturalLanguage |
| Distribution | Developer ID + notarized (see DISTRIBUTION.md) |
| Bundle ID | com.davidkalayejian.Clippster |
| Version | 1.1 |

*For architecture, file layout, build commands and hard-won gotchas, see CONTEXT.md.*
