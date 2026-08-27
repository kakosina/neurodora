# Security policy

## Supported version

Security fixes are applied to the current `main` branch and the production deployment at `https://neurodora.com/`. Old game ZIPs, historical commits, and forks are not supported releases.

## Report a vulnerability

Do not publish an exploitable vulnerability in a GitHub issue.

Send a private report to the project maintainer through [Telegram](https://t.me/neurodora). Include:

- the affected URL, file, or commit;
- the vulnerability class and realistic impact;
- exact reproduction steps or a minimal proof of concept;
- whether the issue is already public;
- a safe way to contact you.

Never include unrelated personal data, credentials, or destructive payloads.

The target acknowledgement time is 72 hours. After validation, the maintainer will coordinate a fix and, when appropriate, credit the reporter. Public disclosure should wait until a fix is deployed or a mutually agreed deadline is reached.

## In scope

- cross-site scripting or unsafe DOM injection;
- unsafe redirects or URL parsing;
- compromise of the production Pages/CDN delivery path;
- exposed secrets or private source media;
- malicious content-pack behavior;
- supply-chain compromise in repository automation;
- privacy-impacting analytics or unexpected network behavior.

## Out of scope

- denial-of-service traffic against GitHub, Cloudflare, YouTube, Telegram, or other third parties;
- social engineering or attacks against individual maintainers;
- automated scanning without a specific, reproducible impact;
- reports about server-side systems that Neurodora does not operate;
- copyright or identity complaints without a software-security issue.

For content, copyright, or identity concerns, use the same private project contact but label the message as a rights request rather than a security report.

## Safe harbor

Good-faith research should avoid privacy violations, service disruption, persistence, data destruction, and access beyond what is necessary to demonstrate the issue. This policy does not authorize testing of third-party services or systems outside the maintainer's control.
