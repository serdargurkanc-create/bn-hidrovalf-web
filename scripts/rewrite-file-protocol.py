#!/usr/bin/env python3
"""Rewrite a Next.js static export so index.html works via file://."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else "out")

ASSET_PREFIXES = (
    "/_next/",
    "/images/",
    "/videos/",
    "/fonts/",
    "/logo/",
)
ROOT_FILES = (
    "favicon.ico",
    "favicon.png",
    "llms.txt",
    "apple-touch-icon.png",
    "robots.txt",
    "sitemap.xml",
    "icon-512.png",
    "og.jpg",
    "window.svg",
    "vercel.svg",
    "noise.png",
    "motion.js",
    "fonts-deferred.css",
)

ASSET_EXT = (
    ".html",
    ".css",
    ".js",
    ".mjs",
    ".png",
    ".webp",
    ".avif",
    ".jpg",
    ".jpeg",
    ".gif",
    ".ico",
    ".txt",
    ".xml",
    ".mp4",
    ".webm",
    ".svg",
    ".woff",
    ".woff2",
    ".json",
    ".map",
)

ABS_HREF = re.compile(
    r"""(?P<prefix>href=)(?P<q>['"])/(?!/)(?P<path>[^'"]*)(?P=q)"""
)


def depth_of(path: Path) -> int:
    return len(path.relative_to(ROOT).parts) - 1


def prefix_for(depth: int) -> str:
    return "/".join([".."] * depth) if depth > 0 else "."


def rebase_assets(text: str, pre: str) -> str:
    for p in ASSET_PREFIXES:
        text = text.replace(p, f"{pre}{p}")
    # url(/fonts/...) already covered; url("/fonts also
    for name in ROOT_FILES:
        text = text.replace(f'"/{name}', f'"{pre}/{name}')
        text = text.replace(f"'/{name}", f"'{pre}/{name}")
        text = text.replace(f"url(/{name}", f"url({pre}/{name}")
    return text


def with_html_suffix(path: str) -> str:
    hashpart = ""
    query = ""
    rest = path
    if "#" in rest:
        rest, hashpart = rest.split("#", 1)
        hashpart = "#" + hashpart
    if "?" in rest:
        rest, query = rest.split("?", 1)
        query = "?" + query
    low = rest.lower()
    if any(low.endswith(ext) for ext in ASSET_EXT):
        return path
    rest = rest.rstrip("/") or "."
    last = rest.split("/")[-1]
    if last in (".", ".."):
        return f"{rest}/index.html{query}{hashpart}"
    return f"{rest}.html{query}{hashpart}"


def rewrite_page_hrefs(text: str, pre: str) -> str:
    def repl(m: re.Match) -> str:
        path = m.group("path")
        if path.startswith("#") or path.startswith("?"):
            return m.group(0)
        rel = f"{pre}/{path}" if path else f"{pre}/"
        rel = with_html_suffix(rel)
        return f"{m.group('prefix')}{m.group('q')}{rel}{m.group('q')}"

    return ABS_HREF.sub(repl, text)



def strip_next_scripts(text: str) -> str:
    """Keep JSON-LD; drop Next/React boot so file:// cannot hydrate-crash."""
    def keep(m: re.Match) -> str:
        block = m.group(0)
        typ = re.search(r'type=["\']([^"\']+)["\']', block, re.I)
        typ_val = typ.group(1).lower() if typ else ""
        if typ_val in {"application/ld+json", "application/json"}:
            return block
        # Drop Next runtime / flight / deferred tags. Do not use a raw
        # "data-defer-next" substring check: the boot script mentions that
        # selector in source and must be kept.
        if re.search(r"<script[^>]*\bdata-defer-next\b", block, re.I):
            return ""
        if re.search(r"<script[^>]*\bsrc=[\"\'][^\"\']*/_next/", block, re.I):
            return ""
        if typ_val in {"text/plain", "javascript/deferred"}:
            return ""
        if re.match(r"<script[^>]*>\s*(?:self\.__next_f|\(self\.__next_f)", block, re.I):
            return ""
        if "motion.js" in block or "fonts-deferred.css" in block or "menu-toggle" in block:
            return block
        return ""
    text = re.sub(r"<script\b[\s\S]*?</script>", keep, text, flags=re.I)
    text = re.sub(
        r"<link\b[^>]*rel=[\"'](?:modulepreload|preload)[\"'][^>]*>",
        "",
        text,
        flags=re.I,
    )
    # preload-as-script may use as= before rel=
    text = re.sub(
        r"<link\b[^>]*as=[\"']script[\"'][^>]*>",
        "",
        text,
        flags=re.I,
    )
    return text

def main() -> None:
    text_exts = {".html", ".js", ".css", ".txt", ".json", ".xml", ".map", ".svg"}
    changed = 0
    for path in ROOT.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in text_exts:
            continue
        raw = path.read_text(encoding="utf-8", errors="surrogateescape")
        depth = depth_of(path)
        # JS chunks: document-relative (./) so publicPath works from the homepage.
        # HTML, CSS, RSC text: path-relative to this file.
        pre = "." if path.suffix.lower() == ".js" else prefix_for(depth)
        new = rebase_assets(raw, pre)
        if path.suffix.lower() == ".html":
            new = rewrite_page_hrefs(new, prefix_for(depth))
            new = strip_next_scripts(new)
        if new != raw:
            path.write_text(new, encoding="utf-8")
            changed += 1
    print(f"rewrote {changed} files under {ROOT}")


if __name__ == "__main__":
    main()
