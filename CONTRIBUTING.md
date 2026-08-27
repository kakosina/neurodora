# Contributing to Neurodora

Thank you for helping improve Neurodora. The project welcomes focused technical contributions while applying a stricter review to character identity, music, artwork, and editorial content.

## Before you start

Use a GitHub issue for:

- a reproducible bug;
- an accessibility or performance problem;
- a proposed feature that changes public behavior;
- a refactor spanning multiple components;
- a question about whether an asset or content change is acceptable.

Tiny documentation corrections do not need a prior issue.

For security vulnerabilities, follow `SECURITY.md` and do not open a public issue.

## Development setup

Requirements:

- Python 3.10 or newer;
- Node.js 20 or newer;
- a modern browser;
- Pillow only for media and article-generation scripts.

Clone and serve the repository:

    git clone https://github.com/kakosina/neurodora.git
    cd neurodora
    python3 -m http.server 8000

Open `http://localhost:8000`. Use an HTTP server rather than opening files through `file://`.

Optional Python environment:

    python3 -m venv .venv
    source .venv/bin/activate
    python3 -m pip install -r requirements-dev.txt

## Make a change

1. Fork the repository and create a branch from the latest `main`.
2. Keep the branch focused on one problem.
3. Preserve the zero-dependency browser runtime unless a dependency proposal has been discussed first.
4. Follow `.editorconfig`.
5. Add or update checks for behavior that can be validated automatically.
6. Run `make check`.
7. Review the affected routes in both a desktop and a narrow mobile viewport.
8. Open a pull request using the repository template.

Suggested branch names:

- `fix/mobile-hero-overflow`
- `feat/game-input-feedback`
- `docs/article-pipeline`

## Engineering expectations

### HTML

- Prefer semantic elements and native controls.
- Preserve keyboard navigation and visible focus.
- Include useful alternative text for meaningful images; decorative images should have an empty `alt`.
- Keep canonical routes and root-relative links working under the custom domain.
- Do not introduce untrusted HTML insertion.

### CSS

- Work with the existing custom properties and responsive breakpoints.
- Test common mobile widths and reduced-motion preferences.
- Avoid layout shifts by keeping media dimensions explicit.
- Do not solve a local issue with a broad selector that changes unrelated surfaces.

### JavaScript

- Use browser APIs available in current evergreen browsers.
- Keep input behavior usable with keyboard and pointer/touch.
- Avoid hidden network calls, fingerprinting, or new analytics.
- Keep frame-loop allocations and synchronous media work small.
- Treat content packs and JSON as untrusted input when adding parsers.

### Python tooling

- Keep the command-line interface deterministic and document all required external inputs.
- Prefer the standard library; add a dependency only when it materially reduces risk or complexity.
- Do not silently overwrite source archives.
- Generated output should be stable across repeated runs with the same inputs.

## Tests and checks

Run:

    make check

This includes:

- JavaScript syntax validation;
- Python syntax validation;
- static-site link and asset validation;
- article-index consistency checks.

When a visual or interactive change cannot be covered automatically, describe the manual test matrix in the pull request.

## Generated articles

`scripts/build_articles.py` reads separately supplied archives and writes public article output. If you change the generator:

- test against an authorized local source pack;
- include the generated diff when appropriate;
- do not commit the private/source archives;
- confirm `articles/articles.json`, individual article pages, illustrations, and `sitemap.xml` remain synchronized.

## Media and identity contributions

The Apache-2.0 license applies to software code, not automatically to creative media.

Do not submit:

- copyrighted images, music, video, fonts, or text without permission;
- celebrity likeness material presented as official or endorsed;
- private source packs or credentials;
- cloned voices or other biometric media without documented authorization;
- content that violates a platform's terms or a person's publicity/personality rights.

Every pull request that adds media must state:

1. who created the material;
2. which tool or source was used;
3. who owns or controls the relevant rights;
4. the license or project-specific permission under which it may be published.

Maintainers may decline media or editorial submissions without rejecting an otherwise useful code idea. Read `LICENSE_POLICY.md`.

## Commit and pull-request quality

Good commits explain one coherent change. Use an imperative subject, for example:

    Fix article-card stacking order

A pull request should include:

- the problem and intended outcome;
- affected routes/files;
- test evidence;
- before/after images for visual changes;
- accessibility and mobile impact;
- media-rights information when applicable;
- known limitations or follow-up work.

## Review and decision process

The project currently uses maintainer review. Maintainers evaluate:

- correctness and regression risk;
- fit with the architecture and creative direction;
- accessibility and performance;
- security and privacy;
- licensing and media provenance;
- long-term maintenance cost.

Substantial changes may be split or declined even when technically sound. Decisions should be explained in the issue or pull request.

## Contribution license

Unless you explicitly state otherwise, code intentionally submitted for inclusion is provided under Apache-2.0, consistent with section 5 of that license. You must have the right to submit it.

Creative content is not accepted under Apache-2.0 by default. Any separate media permission must be explicit and recorded in the pull request.
