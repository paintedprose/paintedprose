MASTER PRO — Painted Prose
Upgrades added:
- Share buttons (no trackers)
- Post Generator PRO with auto-merge for Search + JSON Feed
- PWA-lite: manifest + service worker (offline cache)
- Everything from earlier bundles (theme, journal, lightbox, animations, parchment, search, feeds, 404, contact, print portfolio, tools).

How to publish:
1) Upload everything to your repo root.
2) Add your images: assets/images/banner.png, assets/images/seal.png
3) Contact: replace YOUR_CODE in contact.html with your Formspree form ID.
4) Post Generator PRO: visit /tools/post-maker-pro.html on your live site. Use “Fetch current files” (or paste them), click “Merge”, then download the updated files and upload them to:
   - search/index.json
   - feeds/feed.json
5) Optional: replace URLs in feeds/feed.xml & feeds/feed.json with your real GitHub Pages URL.

Service Worker:
- Already registered in script.js; caches core assets; falls back to 404.html when offline.

Share buttons:
- Appear under each post (Twitter, Bluesky, Tumblr, Copy link).
