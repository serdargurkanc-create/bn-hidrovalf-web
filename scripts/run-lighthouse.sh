#!/usr/bin/env bash
# Tüm indekslenen rotalarda Lighthouse (mobil + masaüstü). Skorlar gerçek ölçümdür.
set -u
BASE="http://localhost:4173/bn-hidrovalf-web"
OUT="/tmp/lh"
mkdir -p "$OUT"
export CHROME_PATH=/usr/local/bin/google-chrome
ROUTES=(/ /revizyon/ /revizyon/valf/ /revizyon/pompa/ /revizyon/surec/ /revizyon/videolu-test/ /revizyon/ariza-belirtileri/ /revizyon/teslimat/ /revizyon/marka/ /revizyon/marka/komatsu/ /revizyon/marka/kawasaki/ /imalat/ /yedek-parca/ /hakkimizda/ /sss/ /iletisim/ /teklif/)
for form in mobile desktop; do
  for r in "${ROUTES[@]}"; do
    slug=$(echo "$r" | sed 's|/|_|g')
    extra=""
    [ "$form" = "desktop" ] && extra="--preset=desktop"
    npx lighthouse "$BASE$r" --quiet --chrome-flags="--headless=new --no-sandbox" \
      --throttling-method=simulate $extra \
      --only-categories=performance,accessibility,best-practices,seo \
      --output=json --output-path="$OUT/$form$slug.json" >/dev/null 2>&1
    node -e "
      const r=require('$OUT/$form$slug.json');
      const c=r.categories;const a=r.audits;
      console.log(['$form','$r',
        Math.round(c.performance.score*100),
        Math.round(c.accessibility.score*100),
        Math.round(c['best-practices'].score*100),
        Math.round(c.seo.score*100),
        (a['largest-contentful-paint'].numericValue/1000).toFixed(1)+'s',
        a['cumulative-layout-shift'].displayValue
      ].join('\t'));
    "
  done
done
echo BITTI
