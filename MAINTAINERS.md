# Maintainers

Neurodora currently follows a maintainer-led governance model.

## Current maintainer

| Maintainer | Scope |
| --- | --- |
| [@kakosina](https://github.com/kakosina) | Project direction, code review, content review, releases, infrastructure, and licensing decisions |

The single-maintainer model is an acknowledged bus-factor risk, not a permanent goal.

## Responsibilities

Maintainers are expected to:

- triage actionable issues and close duplicates or unsupported requests with an explanation;
- review pull requests for correctness, security, accessibility, performance, and licensing;
- keep CI and public routes operational;
- verify the provenance of newly published media;
- publish releases or continuous-deployment changes with an auditable commit history;
- disclose project limitations and avoid invented usage or adoption claims;
- apply the Code of Conduct consistently.

## Review targets

These are targets, not service-level guarantees:

- security report acknowledgement: within 72 hours;
- reproducible bug triage: within 7 days;
- first pull-request response: within 14 days.

If capacity is limited, security, data exposure, broken production routes, and regressions affecting all users take priority.

## Decision making

Routine decisions are made in pull requests. Material architecture, licensing, privacy, or identity changes should have a public issue or design note before implementation unless confidentiality is required.

The maintainer may make a final decision when consensus is not possible. The decision should include the technical or project constraint that led to it.

## Becoming a maintainer

Regular contributors may be invited after demonstrating:

- sustained, constructive participation;
- reliable technical judgment;
- respect for the code/media licensing boundary;
- careful handling of identity, safety, and privacy concerns;
- willingness to review and maintain work beyond their own changes.

Access should be granted incrementally, beginning with issue triage or review responsibilities before release or infrastructure permissions.

## Succession

If the current maintainer becomes unavailable, a trusted contributor with a documented history may be nominated in a public issue. Domain, Pages, and CDN ownership require separate operational transfer and are not conveyed by repository access alone.
