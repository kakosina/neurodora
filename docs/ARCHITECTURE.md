# Architecture

This document describes the technical architecture of Neurodora as it exists today. It intentionally distinguishes deployed behavior from the broader creative concept.

## System context

Neurodora is a static web project. GitHub Pages is the origin; Cloudflare provides DNS, TLS termination, CDN behavior, and aggregate web analytics. The browser executes all application logic.

    content archives ──► article generator ──► static article output ┐
                                                                    │
    authored HTML/CSS/JS ───────────────────────────────────────────┼─► GitHub Pages
                                                                    │        │
    image/audio masters ──► optimization tools ──► web assets ─────┘        ▼
                                                                     Cloudflare
                                                                          │
                                                                          ▼
                                                                       browser

There is currently no API server, database, model-serving endpoint, authentication service, payment processor, or privileged admin interface.

## Runtime surfaces

### Landing and editorial site

Entry point: `index.html`

The landing page is semantic HTML with a custom responsive stylesheet. It links to the article library, game, public social channels, privacy page, and terms page. The experience is usable without JavaScript; third-party JavaScript is limited to the Cloudflare analytics beacon.

Key properties:

- responsive layout implemented in `styles.css`;
- local optimized hero assets with explicit dimensions and preload hints;
- shared legal/footer presentation in `legal-footer.css`;
- root-relative navigation compatible with GitHub Pages and the custom domain;
- no client-side router and no hydration step.

### Article library

Entry point: `articles/index.html`

`articles/library.js` adds the interactive collage behavior. Article cards remain normal links, so navigation and indexing do not depend on JavaScript.

Each article is emitted as `articles/<slug>/index.html`. The public metadata index lives in `articles/articles.json`; optimized illustrations live in `articles/assets/`.

The generator is `scripts/build_articles.py`. It:

1. reads separately supplied source archives;
2. extracts article metadata, styles, body fragments, and illustrations;
3. converts illustrations to optimized WebP;
4. writes individual article pages;
5. writes the library index and JSON metadata;
6. updates `sitemap.xml`.

The source archives are intentionally not committed because their creative content is governed separately from the open-source code.

### Browser game

Canonical route: `game/index.html`

Active runtime: `cute-game.js` and `cute-game.css`

The game uses:

- Canvas 2D for world rendering;
- DOM overlays for title, HUD, dialogue, and result screens;
- `requestAnimationFrame` with delta-time updates;
- pointer and keyboard input;
- Web Audio for short effects and an HTML audio element for background music;
- preloaded WebP sprites plus lazy-loaded dialogue/interaction assets;
- viewport-normalized positioning and timing.

`game/index.html` declares `<base href="../">` so the canonical directory route can reuse root game assets. `game.html` is the root document used by packaging and local tooling. Changes to shared game markup should keep both documents synchronized.

Game state is held in memory for the active page session. There is no authoritative remote score, multiplayer state, or account data.

## Build and validation paths

### Default development path

No compilation is needed:

    python3 -m http.server 8000

### Repository validation

`scripts/validate_site.py` performs dependency-free checks:

- local `href`, `src`, `poster`, and `srcset` targets exist;
- local CSS `url(...)` targets exist;
- the article metadata file is valid and points to matching pages and images;
- required public entry points are present;
- generated HTML documents have basic language and title metadata.

JavaScript and Python syntax checks run separately in CI.

### Article generation path

Pillow is the only non-standard Python dependency. Article generation is not part of routine CI because the input archives are not distributed with the software repository.

Generated output should be reviewed as an atomic set. Hand-editing a generated article without updating its source pack creates drift and should be called out explicitly in the pull request.

## Deployment architecture

1. A reviewed change is merged into `main`.
2. GitHub Pages publishes the repository as a static origin.
3. The custom domain is declared by `CNAME`.
4. Cloudflare routes HTTPS traffic, caches eligible responses, and records aggregate analytics.
5. Maintainers smoke-test the canonical routes after propagation.

No deployment secret is embedded in the repository. DNS and Cloudflare account configuration are external operational state.

## Security boundaries

The static architecture reduces the attack surface but does not eliminate it.

In scope:

- DOM-based cross-site scripting;
- unsafe URL handling or untrusted HTML injection;
- supply-chain changes to GitHub Actions or third-party browser resources;
- malicious or malformed content archives;
- domain, Pages, or CDN configuration takeover;
- accidental publication of private media or secrets.

Out of scope because the components do not exist:

- server-side request forgery;
- SQL injection;
- account takeover in a Neurodora authentication system;
- payment or customer-record compromise.

See `SECURITY.md` for reporting instructions.

## Licensing boundary

The repository deliberately separates the reusable software implementation from the creative universe:

- application code, build tooling, CI, and technical documentation are Apache-2.0;
- media, character identity, music, editorial prose, and other creative content are reserved unless explicitly licensed otherwise;
- third-party material keeps its original license and attribution requirements.

Some HTML and JavaScript files contain both implementation and creative text. In those files the Apache-2.0 grant covers the implementation, not the embedded editorial copy, dialogue, names, audio samples, or character expression. See `LICENSE_POLICY.md`.

## Extension points

Contributors can extend the system without introducing a server:

- add static editorial collections and generators;
- add new Canvas game scenes or mechanics;
- extract generic game or publishing utilities into independently testable modules;
- improve accessibility, performance budgets, and offline resilience;
- add deterministic content-schema validation;
- add preview deployments for pull requests.

Any future AI service, user-generated content path, account system, or write API must receive a separate architecture and threat-model review before deployment.

## Known constraints

- The creative media set is larger than the code and is not fully redistributable under the code license.
- The game runtime is currently a large single JavaScript module.
- Article inputs are external, so CI validates committed output rather than reproducing it from scratch.
- There is no automated end-to-end browser test in the public workflow yet.
- The project has one primary maintainer, which creates a bus-factor risk documented in `MAINTAINERS.md`.
