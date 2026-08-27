# Releasing

Neurodora uses continuous deployment for the website and pre-1.0 beta versions for the browser game.

## Before merging

- Confirm the change has a focused issue or pull-request description.
- Run `make check`.
- Review all generated files, especially article HTML, JSON, images, and `sitemap.xml`.
- Verify that newly added media has a documented origin and can legally be published.
- Check that no token, cookie, private URL, source archive, or user data is included.
- Test affected pages at desktop and mobile widths.
- For game changes, test keyboard and pointer/touch input with sound both enabled and disabled.
- Update visible cache-busting identifiers together when a changed asset may remain cached.

## Merge and deploy

1. Merge into `main` only after CI passes.
2. Wait for the GitHub Pages deployment to complete.
3. Verify:
   - `https://neurodora.com/`
   - `https://neurodora.com/articles/` when editorial files changed
   - `https://neurodora.com/game/` when game files changed
4. Test once through the custom domain, not only the Pages origin.
5. Confirm that Cloudflare is serving a valid certificate and no mixed-content request appears.
6. Record user-visible changes in the pull request or release notes.

## Game versions

The game uses `0.x` beta identifiers while mechanics, art, and balance remain unstable.

- Patch: bug fixes, optimization, copy, balance, or presentation changes.
- Minor: a material new mechanic, chapter, opponent, or content system.
- Major: reserved for a stable public contract after 1.0.

Keep the visible version and cache query in `game.html` and `game/index.html` synchronized.

## Rollback

Prefer a normal revert commit over rewriting `main`. A revert keeps the public history auditable and allows GitHub Pages to redeploy the previous state.

If a release publishes private data, unauthorized media, or an active security issue, remove access to the affected material immediately, rotate any exposed secret, and then document the incident privately before publishing a safe summary.

## Release evidence

For each material release, keep:

- a pull request or issue describing intent;
- passing CI;
- a short human QA note;
- the deployed version or commit SHA;
- follow-up issues for accepted limitations.

This history is the project's evidence of active maintenance; do not manufacture adoption or usage claims.
