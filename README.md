# Neurodora

[![CI](https://github.com/kakosina/neurodora/actions/workflows/ci.yml/badge.svg)](https://github.com/kakosina/neurodora/actions/workflows/ci.yml)
[![Code license: Apache-2.0](https://img.shields.io/badge/code%20license-Apache--2.0-ef5d67.svg)](LICENSE)
[![Live site](https://img.shields.io/badge/live-neurodora.com-2ca9bc.svg)](https://neurodora.com/)

**Neurodora is an open-source web stack and public reference implementation for an AI-native fictional artist universe.** It combines a hand-built editorial website, a zero-dependency Canvas game, a static article library, and repeatable content tooling in one repository.

The public experience is in Russian. Technical documentation and contribution guidance are in English so that the implementation can be studied and extended by a wider developer community.

> Project status: actively maintained, experimental, and pre-1.0. The website is public; the browser game is in beta.

## Live surfaces

| Surface | URL | Implementation |
| --- | --- | --- |
| Main experience | [neurodora.com](https://neurodora.com/) | Semantic HTML and responsive CSS |
| Browser game | [neurodora.com/game](https://neurodora.com/game/) | Canvas 2D, DOM overlays, Web Audio |
| Article library | [neurodora.com/articles](https://neurodora.com/articles/) | Generated static HTML, JSON index, WebP media |
| Community | [Telegram](https://t.me/neurodora) | Project updates and feedback |
| Music/video | [YouTube](https://www.youtube.com/@neurodora) | Public releases |

## Why this repository exists

Neurodora explores a practical question: what does the technical foundation of a persistent, AI-native character look like when music, editorial publishing, interactive fiction, visual identity, and community are treated as one coherent product?

This repository is useful as:

- a working example of narrative web design without a framework or build-time runtime;
- a compact Canvas 2D game with responsive input, animation, audio, and DOM-based dialogue;
- a reproducible static publishing pipeline for illustrated long-form content;
- a case study in separating open-source software from character IP and media rights;
- a base for experiments in safe maintainer automation, release QA, and content operations.

The repository does **not** currently contain an autonomous agent backend, model weights, user accounts, a database, or a payment system. The deployed product is a static web application.

## Features

- **Zero-dependency runtime.** The public site runs as plain HTML, CSS, and JavaScript.
- **Responsive editorial interface.** The landing page and article library share a custom hand-drawn cute-rock visual system.
- **Playable browser game.** The game uses Canvas 2D, a deterministic update loop, pointer and keyboard input, Web Audio, and responsive viewport scaling.
- **Static content generation.** A Python pipeline converts supplied article packs into optimized pages, images, metadata, and a sitemap.
- **Progressive media loading.** Critical hero art is preloaded; game assets use optimized WebP files and lazy loading where appropriate.
- **No privileged client state.** There is no authentication, secret-bearing frontend configuration, or server-side session.
- **Automated repository checks.** CI validates JavaScript syntax, Python syntax, internal links, required assets, and article-index integrity.

## Quick start

### Requirements

- A modern browser.
- Python 3.10 or newer for the local static server and repository tooling.
- Node.js 20 or newer for JavaScript syntax checks.
- Pillow only if you want to rebuild or process media.

The public runtime itself has no package-manager dependencies.

### Run locally

    git clone https://github.com/kakosina/neurodora.git
    cd neurodora
    python3 -m http.server 8000

Then open [http://localhost:8000](http://localhost:8000).

Important routes:

- [http://localhost:8000/](http://localhost:8000/) — landing page
- [http://localhost:8000/articles/](http://localhost:8000/articles/) — article library
- [http://localhost:8000/game/](http://localhost:8000/game/) — browser game

Do not open the HTML files directly with a `file://` URL when testing. A local HTTP server reproduces root-relative links and browser loading rules correctly.

### Optional contributor dependencies

    python3 -m venv .venv
    source .venv/bin/activate
    python3 -m pip install -r requirements-dev.txt

## Project structure

    .
    ├── index.html                 # Main public page
    ├── styles.css                # Main visual system and responsive layout
    ├── legal-footer.css          # Shared public footer styles
    ├── game/
    │   └── index.html            # Canonical GitHub Pages game route
    ├── game.html                 # Root game document used by packaging/tooling
    ├── cute-game.js              # Active Canvas game runtime
    ├── cute-game.css             # Active game presentation
    ├── articles/
    │   ├── index.html            # Article library
    │   ├── articles.json         # Generated article metadata
    │   ├── library.js            # Interactive collage behavior
    │   ├── library.css           # Library visual system
    │   ├── article-shell.css     # Shared article chrome
    │   ├── assets/               # Article media
    │   └── <slug>/index.html     # Individual static articles
    ├── assets/                   # Site, game, image, and audio assets
    ├── scripts/
    │   ├── build_articles.py     # Article generation pipeline
    │   └── validate_site.py      # Dependency-free repository validator
    ├── docs/
    │   ├── ARCHITECTURE.md       # System boundaries and data flow
    │   └── RELEASING.md          # Maintainer release procedure
    ├── .github/                  # CI, issue forms, and PR templates
    ├── CONTRIBUTING.md
    ├── SECURITY.md
    ├── MAINTAINERS.md
    ├── LICENSE                   # Apache-2.0 for software code
    └── LICENSE_POLICY.md         # Code/media licensing boundary

## Architecture

Neurodora is intentionally static:

    source files and content packs
                │
                ├── hand-authored HTML/CSS/JS
                └── scripts/build_articles.py
                             │
                             ▼
                 static pages + JSON + WebP
                             │
                             ▼
                    GitHub Pages origin
                             │
                             ▼
                 Cloudflare DNS/CDN/analytics
                             │
                             ▼
                         browser
                 ┌───────────┼───────────┐
                 ▼           ▼           ▼
              landing     articles    Canvas game

There is no application server in the request path. See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for component boundaries, runtime behavior, content flow, and extension points.

## Development

### Run all repository checks

    make check

The same checks run on pull requests and pushes to `main`.

### Run checks individually

    node --check cute-game.js
    node --check articles/library.js
    python3 -m py_compile scripts/*.py
    python3 scripts/validate_site.py

### Rebuild the article library

Article sources are supplied separately because their prose and media are not covered by the software license:

    python3 scripts/build_articles.py --archives-dir /path/to/article-archives

The generator writes article pages, optimized WebP illustrations, `articles/articles.json`, the library index, and `sitemap.xml`. Treat those outputs as one atomic change and review the generated diff before committing.

## Deployment

The production site is served from the `main` branch through GitHub Pages. Cloudflare sits in front of the Pages origin for DNS, TLS, caching, and privacy-conscious aggregate traffic analytics.

Normal changes follow this path:

1. Create a focused branch.
2. Run `make check`.
3. Open a pull request and explain user-visible changes.
4. Merge only after CI passes and the relevant pages have been reviewed at desktop and mobile widths.
5. Verify the live routes after Pages and CDN propagation.

See [docs/RELEASING.md](docs/RELEASING.md) for the maintainer checklist.

## Contributing

Bug reports, accessibility fixes, performance improvements, tooling, documentation, and narrowly scoped game improvements are welcome.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Contributions involving character art, music, article prose, likenesses, or third-party media require explicit rights review and may be declined even when the code is acceptable.

Project conduct is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Security issues should follow [SECURITY.md](SECURITY.md), not a public issue.

## Maintenance and governance

The project currently uses a maintainer-led model. Decisions are documented in issues and pull requests whenever possible. The current ownership, review expectations, and succession path are described in [MAINTAINERS.md](MAINTAINERS.md).

Versioned game changes use pre-1.0 beta identifiers. The site and editorial surfaces are released continuously from `main`.

See the [changelog](CHANGELOG.md) for material changes and the [roadmap](ROADMAP.md) for the current technical direction.

## Licensing

The licensing split is deliberate:

- **Software code** is licensed under the [Apache License 2.0](LICENSE).
- **Images, audio, video, character designs, logos, article prose, site copy, subtitles, and other creative media are not licensed under Apache-2.0** unless a file says otherwise.
- Third-party material remains subject to its original owner's terms.

Read [LICENSE_POLICY.md](LICENSE_POLICY.md) before reusing anything from the repository. A public GitHub repository is not, by itself, a grant to reuse every file.

## Identity and affiliation

Neurodora is an independent fictional/experimental character project. It is not an official product of, endorsed by, or affiliated with the singer Dora, her management, label, or other people referenced by the creative work. The Apache-2.0 license grants rights to software code only; it grants no rights in names, likenesses, trademarks, music, artwork, or publicity/personality rights.

---

Built and maintained by [@kakosina](https://github.com/kakosina). Project updates: [t.me/neurodora](https://t.me/neurodora).
