# Roadmap

The roadmap describes technical direction, not guaranteed dates. Concrete work should move into a scoped GitHub issue before implementation.

## Now: establish a maintainable public baseline

- Keep all public routes stable under the custom domain.
- Enforce the code/media licensing boundary.
- Require CI for repository changes.
- Document architecture, releases, security reporting, and contributor expectations.
- Continue mobile, loading-performance, and accessibility fixes.

## Next: make contribution and reuse easier

- Add a small authorized fixture so the article generator can be tested reproducibly in CI.
- Add browser-level smoke tests for the landing page, article navigation, and core game flow.
- Split the game runtime into focused modules with explicit state and rendering boundaries.
- Publish tagged game releases with concise release notes and downloadable artifacts outside the source tree.
- Add measurable performance budgets for critical images, transfer size, and layout shift.
- Expand accessibility testing for reduced motion, focus order, text scaling, and screen-reader landmarks.

## Later: grow a reusable creative-technology toolkit

- Extract generally useful Canvas, dialogue, and static-publishing components from project-specific content.
- Define a versioned content schema for characters, articles, scenes, and media provenance.
- Add optional preview deployments for pull requests.
- Document a threat model before introducing any write API, user-generated content, account system, or model-serving component.
- Evaluate opt-in, openly licensed media examples that contain no restricted likeness, music, or third-party rights.

## Success signals

The project will measure progress with evidence rather than claims:

- external bug reports that can be reproduced and resolved;
- pull requests reviewed and merged from contributors other than the primary maintainer;
- downstream projects or educational references that link to the repository;
- stable tagged releases and passing CI;
- public performance/accessibility improvements;
- aggregate site usage reported with a clear time window and bot filtering.

Stars and traffic are useful signals, but neither replaces maintainability, real users, or documented downstream value.
