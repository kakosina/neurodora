#!/usr/bin/env python3
"""Validate the committed Neurodora static site without external dependencies."""

from __future__ import annotations

import json
import re
import sys
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse


ROOT = Path(__file__).resolve().parents[1]
URL_ATTRIBUTES = {"href", "src", "poster"}
SKIPPED_SCHEMES = {"data", "http", "https", "mailto", "tel", "javascript"}
CSS_URL = re.compile(r"url\(\s*([\"']?)(.*?)\1\s*\)", re.IGNORECASE)
MARKDOWN_LINK = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")


@dataclass
class ParsedDocument:
    base_href: str | None = None
    references: list[tuple[str, str]] = field(default_factory=list)
    language: str | None = None
    has_title: bool = False


class ReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.document = ParsedDocument()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {name.lower(): value for name, value in attrs if value is not None}

        if tag.lower() == "html":
            self.document.language = values.get("lang")
        elif tag.lower() == "title":
            self.document.has_title = True
        elif tag.lower() == "base":
            self.document.base_href = values.get("href")
            return

        for attribute in URL_ATTRIBUTES:
            value = values.get(attribute)
            if value:
                self.document.references.append((attribute, value.strip()))

        srcset = values.get("srcset")
        if srcset:
            for candidate in srcset.split(","):
                url = candidate.strip().split(maxsplit=1)[0]
                if url:
                    self.document.references.append(("srcset", url))


def document_url(path: Path) -> str:
    relative = path.relative_to(ROOT).as_posix()
    if relative == "index.html":
        return "/"
    if relative.endswith("/index.html"):
        return "/" + relative[: -len("index.html")]
    return "/" + relative


def local_target(source_url: str, reference: str, base_href: str | None = None) -> Path | None:
    reference = reference.strip()
    if not reference or reference.startswith("#") or reference.startswith("//"):
        return None

    parsed_reference = urlparse(reference)
    if parsed_reference.scheme.lower() in SKIPPED_SCHEMES:
        return None

    base_url = urljoin(source_url, base_href) if base_href else source_url
    resolved = urlparse(urljoin(base_url, reference))
    if resolved.scheme or resolved.netloc:
        return None

    path = unquote(resolved.path)
    if not path or path == "/":
        return ROOT / "index.html"

    candidate = ROOT / path.lstrip("/")
    if path.endswith("/"):
        candidate /= "index.html"
    return candidate


def parse_html(path: Path) -> ParsedDocument:
    parser = ReferenceParser()
    parser.feed(path.read_text(encoding="utf-8"))
    parser.close()
    return parser.document


def validate_html(errors: list[str]) -> tuple[int, int]:
    document_count = 0
    reference_count = 0

    for path in sorted(ROOT.rglob("*.html")):
        if any(part.startswith(".") or part in {"_backups", "output"} for part in path.relative_to(ROOT).parts):
            continue

        document_count += 1
        parsed = parse_html(path)
        relative = path.relative_to(ROOT)

        if not parsed.language:
            errors.append(f"{relative}: missing <html lang=...>")
        if not parsed.has_title:
            errors.append(f"{relative}: missing <title>")

        source_url = document_url(path)
        for attribute, reference in parsed.references:
            target = local_target(source_url, reference, parsed.base_href)
            if target is None:
                continue
            reference_count += 1
            if not target.exists():
                errors.append(
                    f"{relative}: {attribute}={reference!r} resolves to missing "
                    f"{target.relative_to(ROOT)}"
                )

    return document_count, reference_count


def validate_css(errors: list[str]) -> tuple[int, int]:
    stylesheet_count = 0
    reference_count = 0

    for path in sorted(ROOT.rglob("*.css")):
        if any(part.startswith(".") or part in {"_backups", "output"} for part in path.relative_to(ROOT).parts):
            continue

        stylesheet_count += 1
        source_url = "/" + path.relative_to(ROOT).as_posix()
        css = path.read_text(encoding="utf-8")

        for match in CSS_URL.finditer(css):
            reference = match.group(2).strip()
            target = local_target(source_url, reference)
            if target is None:
                continue
            reference_count += 1
            if not target.exists():
                errors.append(
                    f"{path.relative_to(ROOT)}: url({reference!r}) resolves to missing "
                    f"{target.relative_to(ROOT)}"
                )

    return stylesheet_count, reference_count


def validate_markdown(errors: list[str]) -> tuple[int, int]:
    document_count = 0
    reference_count = 0

    for path in sorted(ROOT.rglob("*.md")):
        if any(part.startswith(".") or part in {"_backups", "output"} for part in path.relative_to(ROOT).parts):
            continue

        document_count += 1
        source_url = "/" + path.relative_to(ROOT).as_posix()
        markdown = path.read_text(encoding="utf-8")

        for match in MARKDOWN_LINK.finditer(markdown):
            raw_reference = match.group(1).strip()
            if raw_reference.startswith("<") and ">" in raw_reference:
                reference = raw_reference[1 : raw_reference.index(">")]
            else:
                reference = raw_reference.split(maxsplit=1)[0]
            target = local_target(source_url, reference)
            if target is None:
                continue
            reference_count += 1
            if not target.exists():
                errors.append(
                    f"{path.relative_to(ROOT)}: link {reference!r} resolves to missing "
                    f"{target.relative_to(ROOT)}"
                )

    return document_count, reference_count


def validate_article_index(errors: list[str]) -> int:
    metadata_path = ROOT / "articles" / "articles.json"
    if not metadata_path.exists():
        errors.append("articles/articles.json: required metadata file is missing")
        return 0

    try:
        records = json.loads(metadata_path.read_text(encoding="utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as error:
        errors.append(f"articles/articles.json: invalid JSON: {error}")
        return 0

    if not isinstance(records, list):
        errors.append("articles/articles.json: top-level value must be an array")
        return 0

    slugs: set[str] = set()
    for index, record in enumerate(records):
        label = f"articles/articles.json[{index}]"
        if not isinstance(record, dict):
            errors.append(f"{label}: record must be an object")
            continue

        slug = record.get("slug")
        title = record.get("title")
        description = record.get("description")
        width = record.get("image_width")
        height = record.get("image_height")

        if not isinstance(slug, str) or not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug):
            errors.append(f"{label}: invalid slug {slug!r}")
            continue
        if slug in slugs:
            errors.append(f"{label}: duplicate slug {slug!r}")
        slugs.add(slug)

        if not isinstance(title, str) or not title.strip():
            errors.append(f"{label}: title must be a non-empty string")
        if not isinstance(description, str) or not description.strip():
            errors.append(f"{label}: description must be a non-empty string")
        if not isinstance(width, int) or width <= 0 or not isinstance(height, int) or height <= 0:
            errors.append(f"{label}: image dimensions must be positive integers")

        article_page = ROOT / "articles" / slug / "index.html"
        article_image = ROOT / "articles" / "assets" / f"{slug}.webp"
        if not article_page.exists():
            errors.append(f"{label}: missing {article_page.relative_to(ROOT)}")
        if not article_image.exists():
            errors.append(f"{label}: missing {article_image.relative_to(ROOT)}")

    return len(records)


def validate_required_files(errors: list[str]) -> None:
    required = (
        "index.html",
        "game/index.html",
        "articles/index.html",
        "privacy/index.html",
        "terms/index.html",
        "CNAME",
        "robots.txt",
        "sitemap.xml",
        "README.md",
        "CONTRIBUTING.md",
        "SECURITY.md",
        "MAINTAINERS.md",
        "CHANGELOG.md",
        "ROADMAP.md",
        "LICENSE",
        "LICENSE_POLICY.md",
        "docs/ARCHITECTURE.md",
        "docs/RELEASING.md",
    )
    for relative in required:
        if not (ROOT / relative).exists():
            errors.append(f"{relative}: required public entry point is missing")

    cname = ROOT / "CNAME"
    if cname.exists() and cname.read_text(encoding="utf-8").strip() != "neurodora.com":
        errors.append("CNAME: expected neurodora.com")


def main() -> int:
    errors: list[str] = []
    validate_required_files(errors)
    html_documents, html_references = validate_html(errors)
    stylesheets, css_references = validate_css(errors)
    markdown_documents, markdown_references = validate_markdown(errors)
    articles = validate_article_index(errors)

    if errors:
        print(f"Static-site validation failed with {len(errors)} error(s):", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        return 1

    print(
        "Static-site validation passed: "
        f"{html_documents} HTML documents, "
        f"{stylesheets} stylesheets, "
        f"{markdown_documents} Markdown documents, "
        f"{html_references + css_references + markdown_references} local references, "
        f"{articles} article records."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
