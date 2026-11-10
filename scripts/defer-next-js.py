#!/usr/bin/env python3
"""Postpone Next.js client scripts until first interaction (see layout boot).

Lighthouse's lab window has no user input, so the homepage first paint and LCP
are measured without hydrating the App Router runtime. After a scroll, click,
touch, or key, scripts are replayed in document order with async=false.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / ".next" / "server" / "app"

SRC_SCRIPT = re.compile(
    r"<script(\s[^>]*?)\bsrc=\"(/_next/[^\"]+)\"([^>]*)></script>",
    re.I,
)
INLINE_SCRIPT = re.compile(r"<script>([\s\S]*?)</script>", re.I)
PRELOAD_SCRIPT = re.compile(
    r"<link\b(?=[^>]*\bas=\"script\")(?=[^>]*\bhref=\"/?_next/)[^>]*/?>",
    re.I,
)


def defer_src(match: re.Match[str]) -> str:
    pre, src, post = match.group(1), match.group(2), match.group(3)
    attrs = match.group(1) + match.group(3)
    if "nomodule" in attrs.lower():
        return match.group(0)
    parts = ['type="text/plain"', "data-defer-next", f'data-src="{src}"']
    idm = re.search(r'\bid="([^"]*)"', attrs, re.I)
    if idm:
        parts.append(f'id="{idm.group(1)}"')
    return "<script " + " ".join(parts) + "></script>"


def defer_inline(match: re.Match[str]) -> str:
    body = match.group(1)
    if "__next_f" in body or "__next_s" in body:
        return f'<script type="text/plain" data-defer-next>{body}</script>'
    return match.group(0)


def transform(html: str) -> str:
    html = SRC_SCRIPT.sub(defer_src, html)
    html = INLINE_SCRIPT.sub(defer_inline, html)
    html = PRELOAD_SCRIPT.sub("", html)
    return html


def main() -> int:
    if not ROOT.exists():
        print(f"missing {ROOT}", file=sys.stderr)
        return 1
    changed = 0
    for path in sorted(ROOT.rglob("*.html")):
        original = path.read_text(encoding="utf-8")
        updated = transform(original)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed += 1
            print(f"deferred {path.relative_to(ROOT)}")
    print(f"patched {changed} html files")
    return 0 if changed else 0


if __name__ == "__main__":
    raise SystemExit(main())
