#!/usr/bin/env python3
"""Build the Neurodora article library from the three illustrated source packs.

The source HTML files are intentionally self-contained and store large PNG files
as base64. This builder keeps the editorial HTML, extracts and compresses the
illustrations, adds site navigation/metadata, and emits stable pretty URLs.
"""

from __future__ import annotations

import argparse
import base64
import html as html_module
import io
import json
import re
import sys
import zipfile
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]


@dataclass(frozen=True)
class ArticleSource:
    number: int
    pack: str
    filename: str
    slug: str
    collection: str


SOURCES = [
    ArticleSource(1, "first10", "01-chto-takoe-kyut-rok.html", "chto-takoe-kyut-rok", "БАЗА"),
    ArticleSource(2, "first10", "02-yazyk-kyut-roka.html", "yazyk-kyut-roka", "БАЗА"),
    ArticleSource(3, "first10", "03-malenkaya-problema-dolzhna-zvuchat-kak-konec-sveta.html", "malenkaya-problema-konec-sveta", "БАЗА"),
    ArticleSource(4, "first10", "04-pochemu-kyut-roku-protivopokazan-pafos.html", "pafos-ubivaet-kyut-rok", "БАЗА"),
    ArticleSource(5, "first10", "05-milota-ne-ravna-infantilnosti.html", "milota-ne-infantilnost", "БАЗА"),
    ArticleSource(6, "first10", "06-kak-ustroen-horoshiy-pripev-kyut-roka.html", "anatomiya-pripeva", "БАЗА"),
    ArticleSource(7, "first10", "07-chetyre-akkorda-ne-prestuplenie.html", "chetyre-akkorda-ne-prestuplenie", "БАЗА"),
    ArticleSource(8, "first10", "08-gitara-v-kyut-roke-zachem-ona-voobsche-nuzhna.html", "zachem-kyut-roku-gitara", "БАЗА"),
    ArticleSource(9, "first10", "09-kyut-rok-i-russkiy-yazyk.html", "kyut-rok-po-russki", "БАЗА"),
    ArticleSource(10, "first10", "10-zapreschennyy-slovar-kyut-roka.html", "zapreshchennyy-slovar", "БАЗА"),
    ArticleSource(11, "second10", "11-kyut-rok-bez-slova-devochka.html", "kyut-rok-bez-slova-devochka", "ГЛУБЖЕ"),
    ArticleSource(12, "second10", "12-pochemu-horoshie-teksty-kyut-roka-zvuchat-chut-chut-tupo.html", "horoshiy-tekst-zvuchit-chut-tupo", "ГЛУБЖЕ"),
    ArticleSource(13, "second10", "13-nelovkost-kak-hudozhestvennyy-instrument.html", "nelovkost-eto-material", "ГЛУБЖЕ"),
    ArticleSource(14, "second10", "14-kyut-rok-ne-dolzhen-byt-idealnym.html", "kyut-roku-vredna-idealnost", "ГЛУБЖЕ"),
    ArticleSource(15, "second10", "15-vizualnyy-yazyk-kyut-roka.html", "kak-vyglyadit-kyut-rok", "ГЛУБЖЕ"),
    ArticleSource(16, "second10", "16-kyut-rok-i-internet.html", "internet-chast-zhanra", "ГЛУБЖЕ"),
    ArticleSource(17, "second10", "17-kyut-rok-posle-2019-goda.html", "kyut-rok-posle-2019", "ГЛУБЖЕ"),
    ArticleSource(18, "second10", "18-kyut-pank-kyut-shugeyz-kyut-granzh.html", "atlas-budushchego-kyut-roka", "ГЛУБЖЕ"),
    ArticleSource(19, "second10", "19-kak-ponyat-chto-vy-napisali-ai-kyut-rok.html", "kak-pahnet-ai-kyut-rok", "ГЛУБЖЕ"),
    ArticleSource(20, "second10", "20-konstituciya-kyut-roka.html", "konstituciya-kyut-roka", "ГЛУБЖЕ"),
    ArticleSource(21, "supremacy", "01-k-ut-rok-perejivet-vse-janry.html", "kyut-rok-perezhivet-vse-zhanry", "МАНИФЕСТ"),
    ArticleSource(22, "supremacy", "02-budusee-muzyki-budet-milym-i-gromkim.html", "budushchee-muzyki-budet-milym-i-gromkim", "МАНИФЕСТ"),
    ArticleSource(23, "supremacy", "03-rep-byl-epohoj-k-ut-rok-budet-sredoj.html", "rep-byl-epohoy-kyut-rok-budet-sredoy", "МАНИФЕСТ"),
    ArticleSource(24, "supremacy", "04-velikaa-teoria-peregruza.html", "velikaya-teoriya-peregruza", "МАНИФЕСТ"),
    ArticleSource(25, "supremacy", "05-pocemu-mir-ustal-ot-krutosti.html", "pochemu-mir-ustal-ot-krutosti", "МАНИФЕСТ"),
    ArticleSource(26, "supremacy", "06-nejrodora-cistaa-forma-k-ut-roka.html", "neirodora-chistaya-forma-kyut-roka", "МАНИФЕСТ"),
    ArticleSource(27, "supremacy", "07-interv-u-nejrodora-a-hocu-ctoby-k-ut-rok-perestal-byt-vospominaniem.html", "intervyu-neirodora", "МАНИФЕСТ"),
    ArticleSource(28, "supremacy", "08-2035-kak-k-ut-rok-stal-glavnoj-muzykoj-planety.html", "2035-kyut-rok-glavnaya-muzyka", "МАНИФЕСТ"),
    ArticleSource(29, "supremacy", "09-desat-zakonov-k-ut-rok-prevoshodstva.html", "desyat-zakonov-kyut-rok-prevoshodstva", "МАНИФЕСТ"),
    ArticleSource(30, "supremacy", "10-pocemu-k-ut-rok-final-naa-forma-pop-muzyki.html", "kyut-rok-finalnaya-forma-pop-muzyki", "МАНИФЕСТ"),
]


PACK_FILES = {
    "first10": "cuterockology_first10_illustrated.zip",
    "second10": "cuterockology_11_20_illustrated.zip",
    "supremacy": "cuterock_supremacy_pack_illustrated.zip",
}


def archive_member(archive: zipfile.ZipFile, filename: str) -> str:
    matches = [name for name in archive.namelist() if name.endswith("/" + filename) or name == filename]
    if len(matches) != 1:
        raise RuntimeError(f"Expected one {filename!r} in archive, found {len(matches)}")
    return matches[0]


def read_source(archive: zipfile.ZipFile, filename: str) -> str:
    return archive.read(archive_member(archive, filename)).decode("utf-8")


def strip_tags(value: str) -> str:
    plain = re.sub(r"<[^>]+>", "", value)
    return " ".join(html_module.unescape(plain).split())


def first_match(pattern: str, value: str, label: str) -> str:
    match = re.search(pattern, value, re.IGNORECASE | re.DOTALL)
    if not match:
        raise RuntimeError(f"Could not find {label}")
    return match.group(1)


def source_metadata(source_html: str) -> tuple[str, str]:
    without_image = re.sub(r"data:image/[^;]+;base64,[^\"]+", "IMAGE", source_html)
    title = strip_tags(first_match(r"<h1[^>]*>(.*?)</h1>", without_image, "article title"))
    deck_match = re.search(
        r'<p class="(?:cr-dek|crx-deck)"[^>]*>(.*?)</p>',
        without_image,
        re.IGNORECASE | re.DOTALL,
    )
    deck = strip_tags(deck_match.group(1)) if deck_match else "Кьют-рокология Нейродоры: мило, громко и очень близко."
    deck = deck.replace(
        "Фальшивая ретроспектива из будущего. История победы, которая пока ещё не произошла.",
        "Ретроспектива из будущего. История победы кьют-рока.",
    )
    return title, deck


def body_fragment(source_html: str, supremacy: bool) -> tuple[str, str]:
    if supremacy:
        body_match = re.search(
            r'<body(?:\s+class="([^"]*)")?[^>]*>(.*?)</body>',
            source_html,
            re.IGNORECASE | re.DOTALL,
        )
        if not body_match:
            raise RuntimeError("Could not extract source body")
        body_class = " ".join(
            class_name
            for class_name in (body_match.group(1) or "").split()
            if class_name != "dark"
        )
        fragment = body_match.group(2).strip()
    else:
        fragment = re.sub(r"<!--.*?-->", "", source_html, flags=re.DOTALL)
        fragment = re.sub(r"<style>.*?</style>", "", fragment, flags=re.DOTALL | re.IGNORECASE).strip()
        body_class = ""

    # The source packs contain their own editorial chrome. On neurodora.com
    # every page is simply an article, so only the article itself is retained.
    fragment = re.sub(
        r'<header class="(?:cr-top|crx-top)"[^>]*>.*?</header>',
        "",
        fragment,
        flags=re.IGNORECASE | re.DOTALL,
    )
    fragment = re.sub(
        r'<footer class="(?:cr-footer|crx-footer)"[^>]*>.*?</footer>',
        "",
        fragment,
        flags=re.IGNORECASE | re.DOTALL,
    )
    fragment = re.sub(
        r'<nav class="(?:cr-toc|crx-toc)"[^>]*>.*?</nav>',
        "",
        fragment,
        flags=re.IGNORECASE | re.DOTALL,
    )
    fragment = fragment.replace("в документе", "в статье")
    fragment = fragment.replace("документ из будущего", "из будущего")
    fragment = fragment.replace("основной документ", "основные правила")
    fragment = fragment.replace(
        "Поэтому этот документ сразу признаёт право на исключение.",
        "Поэтому эта статья сразу признаёт право на исключение.",
    )
    fragment = fragment.replace("документалок про Вторую кьют-рок волну", "фильмов про Вторую кьют-рок волну")
    fragment = fragment.replace("Спокойный закатный манифест", "Спокойный закатный текст")
    fragment = fragment.replace('<span class="crx-kicker">манифест</span>', '<span class="crx-kicker">правила жанра</span>')
    fragment = fragment.replace("Фальшивая грязь", "Нарочитая грязь")
    fragment = fragment.replace("Фальшивую ноту", "Неточную ноту")

    # Nейродора states her future as fact: remove fictional/editorial caveats.
    fragment = fragment.replace(
        "Фальшивая ретроспектива из будущего. История победы, которая пока ещё не произошла.",
        "Ретроспектива из будущего. История победы кьют-рока.",
    )
    fragment = fragment.replace(
        "Оно может быть розовым и очень громким.",
        "Оно будет розовым и очень громким.",
    )
    fragment = re.sub(
        r'<div class="crx-call[^\"]*"[^>]*>\s*<b>заметка института</b>\s*'
        r'<p>Примечание редакции 2026 года: этот текст полностью вымышлен\..*?</p>\s*</div>',
        "",
        fragment,
        flags=re.IGNORECASE | re.DOTALL,
    )
    fragment = re.sub(
        r'<section class="crx-end"[^>]*>\s*<h2>Интервью с вымышленным виртуальным артистом Нейродорой\..*?</h2>\s*</section>',
        "",
        fragment,
        flags=re.IGNORECASE | re.DOTALL,
    )
    fragment = re.sub(r'<a href="#end">финал</a>', "", fragment, flags=re.IGNORECASE)
    fragment = fragment.replace("<b>заметка института</b>", "")
    fragment = fragment.replace("Редакционный закон:", "Закон:")
    fragment = fragment.replace(
        "Условный индекс жанровой опасности Cute Rock Institute:",
        "Индекс жанровой опасности:",
    )
    fragment = fragment.replace(" Да, индекс мы придумали сами. Но спорить всё равно неприятно.", "")
    fragment = fragment.replace(
        "Внутри института мы используем шуточный коэффициент:",
        "Работает эмоциональный коэффициент:",
    )
    fragment = fragment.replace(
        "Cute Rock Institute называет это «дефицитом неловкости»:",
        "Это «дефицит неловкости»:",
    )
    fragment = fragment.replace("Тезис Cute Rock Institute:", "Тезис:")
    fragment = fragment.replace(
        "Редакционная теория финальной формы не претендует на научность. "
        "Она претендует на то, чтобы раздражать людей своей подозрительной логичностью.",
        "Финальная форма поп-музыки подозрительно логична.",
    )

    # Repair the old .co references without turning an existing .com into .comm.
    fragment = re.sub(r"NEURODORA\.CO(?!M)", "NEURODORA.COM", fragment)
    fragment = re.sub(r"neurodora\.co(?!m)", "neurodora.com", fragment)
    fragment = fragment.replace("NEURODORA.COMM", "NEURODORA.COM")
    fragment = fragment.replace("neurodora.comm", "neurodora.com")

    # The last ten source articles ship a static strip. Repeat its text so the
    # shared CSS can animate it as a continuous marquee.
    def repeat_strip(match: re.Match[str]) -> str:
        strip_text = strip_tags(match.group(1)).rstrip(" ·")
        repeated = " · ".join([strip_text] * 4) + " ·"
        return f'<div class="crx-strip"><span>{html_module.escape(repeated)}</span></div>'

    fragment = re.sub(
        r'<div class="crx-strip"[^>]*>\s*<span>(.*?)</span>\s*</div>',
        repeat_strip,
        fragment,
        flags=re.IGNORECASE | re.DOTALL,
    )
    return fragment, body_class


def extract_and_write_image(source_html: str, destination: Path) -> tuple[int, int, str]:
    image_match = re.search(
        r'<img\s+src="data:image/([^;]+);base64,([^\"]+)"([^>]*)>',
        source_html,
        re.IGNORECASE | re.DOTALL,
    )
    if not image_match:
        raise RuntimeError("Could not find inline article illustration")

    raw = base64.b64decode(image_match.group(2))
    with Image.open(io.BytesIO(raw)) as opened:
        image = ImageOps.exif_transpose(opened)
        image.thumbnail((1600, 1080), Image.Resampling.LANCZOS)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        if image.mode == "RGBA":
            canvas = Image.new("RGB", image.size, "#fff8fb")
            canvas.paste(image, mask=image.getchannel("A"))
            image = canvas
        width, height = image.size
        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(destination, "WEBP", quality=84, method=6, optimize=True)

    return width, height, image_match.group(0)


def article_page(
    article: ArticleSource,
    title: str,
    description: str,
    fragment: str,
    source_img_tag: str,
    width: int,
    height: int,
    body_class: str,
    previous_article: dict | None,
    next_article: dict | None,
) -> str:
    image_path = f"../assets/{article.slug}.webp"
    new_img_tag = re.sub(
        r'src="data:image/[^;]+;base64,[^\"]+"',
        f'src="{image_path}"',
        source_img_tag,
        count=1,
        flags=re.IGNORECASE | re.DOTALL,
    )
    new_img_tag = new_img_tag[:-1] + (
        f' width="{width}" height="{height}" loading="eager" decoding="async" fetchpriority="high">'
    )
    fragment = fragment.replace(source_img_tag, new_img_tag, 1)

    series_css = "supremacy-pack.css" if article.pack == "supremacy" else "cuterockology-pack.css"
    classes = " ".join(filter(None, ["article-body", "article-body--supremacy" if article.pack == "supremacy" else "article-body--ology", body_class]))
    canonical = f"https://neurodora.com/articles/{article.slug}/"
    og_image = f"https://neurodora.com/articles/assets/{article.slug}.webp"
    json_ld = json.dumps(
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": [og_image],
            "datePublished": "2026-08-25",
            "dateModified": "2026-08-25",
            "author": {"@type": "Organization", "name": "Нейродора", "url": "https://neurodora.com/"},
            "publisher": {"@type": "Organization", "name": "Нейродора", "url": "https://neurodora.com/"},
            "mainEntityOfPage": canonical,
            "inLanguage": "ru-RU",
        },
        ensure_ascii=False,
        separators=(",", ":"),
    )

    def pager_link(item: dict | None, direction: str) -> str:
        if not item:
            return '<span class="article-pager-empty" aria-hidden="true"></span>'
        arrow = "←" if direction == "prev" else "→"
        label = "ПРЕДЫДУЩАЯ" if direction == "prev" else "СЛЕДУЮЩАЯ"
        visual = f"{arrow} {label}" if direction == "prev" else f"{label} {arrow}"
        return (
            f'<a class="article-pager-link article-pager-{direction}" href="../{item["slug"]}/">'
            f'<small>{visual}</small><b>{html_module.escape(item["title"])}</b></a>'
        )

    return f'''<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#fff6fa" />
    <meta name="description" content="{html_module.escape(description, quote=True)}" />
    <link rel="canonical" href="{canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Нейродора" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:title" content="{html_module.escape(title, quote=True)}" />
    <meta property="og:description" content="{html_module.escape(description, quote=True)}" />
    <meta property="og:url" content="{canonical}" />
    <meta property="og:image" content="{og_image}" />
    <meta property="og:image:width" content="{width}" />
    <meta property="og:image:height" content="{height}" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>{html_module.escape(title)} · Кьют-рокология Нейродоры</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⭐</text></svg>" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&amp;family=Neucha&amp;family=Oswald:wght@600;700&amp;family=Shantell+Sans:wght@700;800&amp;display=swap" />
    <link rel="stylesheet" href="../{series_css}?v=3" />
    <link rel="stylesheet" href="../article-shell.css?v=4" />
    <script type="application/ld+json">{json_ld}</script>
  </head>
  <body class="{html_module.escape(classes, quote=True)}">
    <a class="article-skip" href="#article-content">К СТАТЬЕ</a>
    <header class="site-header">
      <a class="brand" href="/#top" aria-label="Нейродора — на главную"><span>Нейро</span><b>Дора</b></a>
      <nav aria-label="Главная навигация">
        <a href="/#top">ГЛАВНАЯ</a>
        <a href="/#about">СМОТРЕТЬ</a>
        <a href="/#now">СЛУШАТЬ</a>
        <a class="active" href="/articles/">ЧИТАТЬ</a>
        <a href="/game/">ИГРАТЬ</a>
        <a href="/#follow">ДРУЖИТЬ</a>
      </nav>
      <a class="header-telegram" href="https://t.me/neurodora" target="_blank" rel="noopener noreferrer" aria-label="Телеграм Нейродоры">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M27.7 5.2 23.6 25c-.3 1.4-1.1 1.7-2.3 1.1l-6.2-4.6-3 2.9c-.3.3-.6.6-1.3.6l.4-6.3L22.7 8.3c.5-.4-.1-.7-.7-.3L7.8 17l-6.1-1.9c-1.3-.4-1.4-1.3.3-1.9L25.9 4c1.1-.4 2.1.3 1.8 1.2Z" /></svg>
      </a>
    </header>
    <main id="article-content">
      {fragment}
    </main>
    <nav class="article-pager" aria-label="Другие статьи">
      {pager_link(previous_article, "prev")}
      <a class="article-pager-home" href="/articles/"><span>✦</span><b>ВСЕ 30 СТАТЕЙ</b></a>
      {pager_link(next_article, "next")}
    </nav>
    <footer class="article-sitefooter">
      <a href="/">НЕЙРОДОРА</a><span>МИЛО · ГРОМКО · БЛИЗКО</span><a href="/articles/">КЬЮТ-РОКОЛОГИЯ ↑</a>
    </footer>
    <script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{{"token":"ce1213c7e62e4829ac111b234aa64707"}}'></script>
  </body>
</html>
'''


def article_index(records: list[dict]) -> str:
    turns = (-3.4, 2.2, -1.1, 3.7, -2.5, 1.4, -4.1, 2.9, -1.8, 4.0)
    shifts = (-12, 18, 3, -20, 14, -6, 21, -14, 8, -2)
    drops = (0, 14, 5, 19, 8, 2, 16, 9, 22, 4)
    doodles = ("♡", "☆", "♫", "✦", "♡", "♪")
    # A deterministic shuffle keeps archive packs from appearing as three groups.
    shuffled = [records[(index * 11) % len(records)] for index in range(len(records))]

    cards_html = "".join(
        f'''<a class="article-photo-card" href="{record["slug"]}/"
          style="--turn:{turns[index % len(turns)]}deg;--shift:{shifts[index % len(shifts)]}px;--drop:{drops[index % len(drops)]}px"
          data-doodle="{doodles[index % len(doodles)]}">
          <figure>
            <img src="assets/{record["slug"]}.webp" width="{record["image_width"]}" height="{record["image_height"]}" loading="{("eager" if index < 4 else "lazy")}" decoding="async" alt="" />
            <figcaption><h2>{html_module.escape(record["title"])}</h2><span>ЧИТАТЬ →</span></figcaption>
          </figure>
        </a>'''
        for index, record in enumerate(shuffled)
    )

    return f'''<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#fff4e8" />
    <meta name="description" content="30 статей Нейродоры о кьют-роке: звук, тексты, эстетика, интернет и будущее жанра." />
    <link rel="canonical" href="https://neurodora.com/articles/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Нейродора" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:title" content="Кьют-рокология Нейродоры — 30 статей" />
    <meta property="og:description" content="Мило, громко, близко: большая библиотека о кьют-роке от Нейродоры." />
    <meta property="og:url" content="https://neurodora.com/articles/" />
    <meta property="og:image" content="https://neurodora.com/articles/assets/neirodora-chistaya-forma-kyut-roka.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>КЬЮТ-РОКОЛОГИЯ · 30 СТАТЕЙ НЕЙРОДОРЫ</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⭐</text></svg>" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&amp;family=Neucha&amp;family=Oswald:wght@600;700&amp;family=Shantell+Sans:wght@700;800&amp;display=swap" />
    <link rel="stylesheet" href="library.css?v=3" />
  </head>
  <body>
    <a class="library-skip" href="#library">К СТАТЬЯМ</a>
    <header class="site-header">
      <a class="brand" href="/#top" aria-label="Нейродора — на главную"><span>Нейро</span><b>Дора</b></a>
      <nav aria-label="Главная навигация">
        <a href="/#top">ГЛАВНАЯ</a>
        <a href="/#about">СМОТРЕТЬ</a>
        <a href="/#now">СЛУШАТЬ</a>
        <a class="active" href="/articles/">ЧИТАТЬ</a>
        <a href="/game/">ИГРАТЬ</a>
        <a href="/#follow">ДРУЖИТЬ</a>
      </nav>
      <a class="header-telegram" href="https://t.me/neurodora" target="_blank" rel="noopener noreferrer" aria-label="Телеграм Нейродоры">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M27.7 5.2 23.6 25c-.3 1.4-1.1 1.7-2.3 1.1l-6.2-4.6-3 2.9c-.3.3-.6.6-1.3.6l.4-6.3L22.7 8.3c.5-.4-.1-.7-.7-.3L7.8 17l-6.1-1.9c-1.3-.4-1.4-1.3.3-1.9L25.9 4c1.1-.4 2.1.3 1.8 1.2Z" /></svg>
      </a>
    </header>
    <main id="library">
      <section class="library-hero">
        <div class="library-hero-copy">
          <h1>КЬЮТ-<em>РОКОЛОГИЯ</em></h1>
          <p>мои статьи о кьют-роке ♡</p>
          <i class="doodle-heart" aria-hidden="true">♡</i><i class="doodle-star" aria-hidden="true">☆</i>
        </div>
      </section>

      <section class="article-collage" id="all-articles" aria-label="Все статьи">
        {cards_html}
      </section>

      <section class="library-cta">
        <span aria-hidden="true">♫</span><div><small>ДОЧИТАЛА ДО КОНЦА?</small><h2>ТЕПЕРЬ МОЖНО<br />СДЕЛАТЬ ПОГРОМЧЕ.</h2></div><a href="https://www.youtube.com/@neurodora" target="_blank" rel="noopener noreferrer">СЛУШАТЬ НЕЙРОДОРУ ↗</a>
      </section>
    </main>
    <footer class="library-footer"><a href="/">НЕЙРОДОРА</a><p>КЬЮТ-РОК РУЛИТ · 2026</p><a href="#library">НАВЕРХ ↑</a></footer>
    <script src="library.js?v=3" defer></script>
    <script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{{"token":"ce1213c7e62e4829ac111b234aa64707"}}'></script>
  </body>
</html>
'''


def sitemap(records: list[dict]) -> str:
    urls = [
        ("https://neurodora.com/", "weekly", "1.0"),
        ("https://neurodora.com/game/", "monthly", "0.9"),
        ("https://neurodora.com/articles/", "weekly", "0.9"),
    ]
    urls.extend(
        (f'https://neurodora.com/articles/{record["slug"]}/', "monthly", "0.7")
        for record in records
    )
    entries = "\n".join(
        f'''  <url>
    <loc>{url}</loc>
    <lastmod>2026-08-25</lastmod>
    <changefreq>{frequency}</changefreq>
    <priority>{priority}</priority>
  </url>'''
        for url, frequency, priority in urls
    )
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{entries}
</urlset>
'''


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--archives-dir",
        type=Path,
        default=Path.home() / "Downloads",
        help="Directory containing the three source ZIP files",
    )
    args = parser.parse_args()

    article_root = ROOT / "articles"
    asset_root = article_root / "assets"
    article_root.mkdir(exist_ok=True)
    asset_root.mkdir(exist_ok=True)

    archives: dict[str, zipfile.ZipFile] = {}
    try:
        for pack, archive_name in PACK_FILES.items():
            archive_path = args.archives_dir / archive_name
            if not archive_path.exists():
                raise FileNotFoundError(f"Missing source pack: {archive_path}")
            archives[pack] = zipfile.ZipFile(archive_path)

        first_style = first_match(
            r"<style>(.*?)</style>",
            read_source(archives["first10"], SOURCES[0].filename),
            "first article stylesheet",
        ).strip()
        supremacy_source = next(source for source in SOURCES if source.pack == "supremacy")
        supremacy_style = first_match(
            r"<style>(.*?)</style>",
            read_source(archives["supremacy"], supremacy_source.filename),
            "supremacy stylesheet",
        ).strip()
        (article_root / "cuterockology-pack.css").write_text(
            "/* Extracted from the supplied Cuterockology article pack. */\n" + first_style + "\n",
            encoding="utf-8",
        )
        (article_root / "supremacy-pack.css").write_text(
            "/* Extracted from the supplied Cuterock Supremacy article pack. */\n" + supremacy_style + "\n",
            encoding="utf-8",
        )

        prepared: list[dict] = []
        for source in SOURCES:
            raw_html = read_source(archives[source.pack], source.filename)
            title, description = source_metadata(raw_html)
            image_destination = asset_root / f"{source.slug}.webp"
            width, height, source_img_tag = extract_and_write_image(raw_html, image_destination)
            fragment, body_class = body_fragment(raw_html, source.pack == "supremacy")
            prepared.append(
                {
                    "number": source.number,
                    "pack": source.pack,
                    "slug": source.slug,
                    "collection": source.collection,
                    "title": title,
                    "description": description,
                    "fragment": fragment,
                    "source_img_tag": source_img_tag,
                    "image_width": width,
                    "image_height": height,
                    "body_class": body_class,
                }
            )

        for index, (source, record) in enumerate(zip(SOURCES, prepared)):
            previous_record = prepared[index - 1] if index > 0 else None
            next_record = prepared[index + 1] if index + 1 < len(prepared) else None
            output_dir = article_root / source.slug
            output_dir.mkdir(exist_ok=True)
            page = article_page(
                article=source,
                title=record["title"],
                description=record["description"],
                fragment=record["fragment"],
                source_img_tag=record["source_img_tag"],
                width=record["image_width"],
                height=record["image_height"],
                body_class=record["body_class"],
                previous_article=previous_record,
                next_article=next_record,
            )
            (output_dir / "index.html").write_text(page, encoding="utf-8")

        public_records = [
            {
                key: value
                for key, value in record.items()
                if key
                not in {
                    "number",
                    "pack",
                    "collection",
                    "fragment",
                    "source_img_tag",
                    "body_class",
                }
            }
            for record in prepared
        ]
        (article_root / "articles.json").write_text(
            json.dumps(public_records, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        (article_root / "index.html").write_text(article_index(public_records), encoding="utf-8")
        (ROOT / "sitemap.xml").write_text(sitemap(public_records), encoding="utf-8")

        original_bytes = sum(
            len(read_source(archives[source.pack], source.filename).encode("utf-8")) for source in SOURCES
        )
        image_bytes = sum((asset_root / f"{source.slug}.webp").stat().st_size for source in SOURCES)
        print(f"Built {len(SOURCES)} articles")
        print(f"Inline source HTML: {original_bytes / 1024 / 1024:.1f} MiB")
        print(f"Optimized article images: {image_bytes / 1024 / 1024:.1f} MiB")
        return 0
    finally:
        for archive in archives.values():
            archive.close()


if __name__ == "__main__":
    sys.exit(main())
