/**
 * GitHub Pages alt dizin (basePath) desteği: public/ altındaki ham dosya
 * yolları (görsel, video, font, script) Link dışı kullanımda bu yardımcıdan
 * geçmelidir. `next/link` basePath'i kendisi ekler; <img>, <video>, <script>
 * ve srcSet eklemez.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Tek bir public dosya yolunu basePath ile önekler. */
export function asset(p: string): string {
  if (!p.startsWith("/")) return p;
  return `${BASE}${p}`;
}

/** "url1 600w, url2 800w" biçimli srcSet dizgisindeki her yolu önekler. */
export function assetSet(srcSet: string): string {
  if (!BASE) return srcSet;
  return srcSet
    .split(",")
    .map((part) => {
      const t = part.trim();
      if (!t) return t;
      return t.startsWith("/") ? `${BASE}${t}` : t;
    })
    .join(", ");
}
