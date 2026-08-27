# License policy

This file explains which parts of the Neurodora repository are open-source software and which parts are creative content with separate rights. It does not replace the full Apache License text in `LICENSE`.

## Short version

| Material | Default status |
| --- | --- |
| Application code, build scripts, CI configuration, and technical documentation | Apache-2.0 |
| Images, illustrations, animation frames, audio, music, video, subtitles, fonts, logos, character designs, and release artwork | Not licensed under Apache-2.0; rights reserved unless a file says otherwise |
| Article prose, dialogue, lyrics, story text, and distinctive public-facing creative copy | Not licensed under Apache-2.0; rights reserved unless a file says otherwise |
| Third-party material | Its original license or permission |

The repository is therefore an **open-source software project with separately governed media and editorial content**, not a claim that every visible file is open content.

## 1. Apache-2.0 software

Subject to the exclusions below, the following implementation work is licensed under Apache-2.0:

- JavaScript application and game logic;
- CSS layout and interface implementation;
- HTML structure, accessibility implementation, and technical templates;
- Python build, optimization, validation, and packaging tools;
- GitHub Actions and repository automation;
- technical documentation and contributor templates.

The full terms are in `LICENSE`. Apache-2.0 includes copyright and patent grants from contributors for their covered contributions and does not grant trademark rights.

## 2. Creative content excluded from Apache-2.0

Unless an adjacent notice explicitly grants a different license, no license is granted under Apache-2.0 for:

- `assets/**`;
- `articles/assets/**`;
- `output/**` and visual audit output;
- `*.png`, `*.jpg`, `*.jpeg`, `*.webp`, `*.gif`, `*.svg`;
- `*.mp3`, `*.m4a`, `*.wav`, `*.ogg`, `*.mp4`, `*.mov`;
- `*.srt`, source content archives, and packaged creative releases;
- the Neurodora wordmark, logo, character appearance, character bible, and distinctive visual identity;
- article body text, lyrics, dialogue, story material, and distinctive creative site copy;
- names, likenesses, voices, trademarks, and publicity/personality rights.

To the extent any excluded material is protected by copyright or related rights, those rights are reserved by their respective holders. Public access through GitHub permits viewing and platform features such as forking under GitHub's terms; it is not a general media-reuse license.

## 3. Mixed files

Some HTML and JavaScript files contain both reusable implementation and excluded creative content.

For a mixed file:

- Apache-2.0 covers the software implementation, data structures, algorithms, markup structure, and interface behavior contributed by the project;
- Apache-2.0 does not cover embedded prose, dialogue, lyrics, character expression, names/likenesses, artwork, audio samples, or other excluded media.

A downstream project may reuse the covered implementation, but must replace or separately clear the excluded content.

Generated article pages and pack-derived styles may incorporate separately supplied material. Their presence in the repository does not convert that material to Apache-2.0.

## 4. Third-party material

Third-party works remain under their original terms. A project maintainer cannot relicense rights they do not own or control.

Before redistributing a file, check:

1. this policy;
2. an adjacent `.license`, attribution, or source notice;
3. the commit or pull request that introduced it;
4. the original provider's terms.

If the provenance is unclear, do not redistribute the material until the rights are confirmed.

## 5. Contributions

Code intentionally submitted for inclusion is accepted under Apache-2.0 unless the contributor and maintainer agree otherwise in writing.

Media or editorial contributions require an explicit statement of:

- authorship and source;
- ownership or authorization;
- intended license or project-specific publication permission;
- any attribution, model, tool, or platform restrictions.

Opening a pull request does not automatically place creative media under Apache-2.0.

## 6. Future openly licensed media

Media should only receive a Creative Commons license when the project owns or controls all necessary rights and deliberately chooses to make that grant. Such a grant must be file-specific or directory-specific and clearly state the exact license version.

Recommended options for fully controlled media are:

- CC BY 4.0 for broad reuse with attribution;
- CC BY-SA 4.0 when adaptations should remain under the same terms;
- CC0 1.0 for material intentionally dedicated as broadly as possible.

Do not use a Creative Commons license for software code. Do not use a NonCommercial or NoDerivatives restriction while describing the material as open-source software.

## 7. No implied endorsement

The software license grants no endorsement, affiliation, trademark, name, likeness, voice, or publicity/personality rights. Neurodora is an independent fictional/experimental project and is not an official project of the singer Dora, her team, label, or other referenced people.

## Questions

For a concrete reuse request, contact the project through [Telegram](https://t.me/neurodora) and identify the exact file and intended use.

This policy is practical project documentation, not legal advice. Rights involving real-person likenesses, cloned voices, third-party music, or commercial distribution should be reviewed by a qualified lawyer in the relevant jurisdiction.
