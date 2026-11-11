/**
 * Ana sayfa şeridi için tek tip, monokrom marka wordmark’ları.
 * Resmi bayi / yetkili servis izlenimi vermez; yalnızca işlenen markaları
 * gösterir. Hepsi aynı yükseklik, ağırlık ve opaklıkta durur.
 */

type Mark = {
  slug: string;
  name: string;
  /** Görünen wordmark (çoğunlukla uppercase kısa ad) */
  label: string;
  /** Opsiyonel küçük geometrik imza */
  glyph?: "cat" | "volvo" | "hyundai";
};

export const brandMarks: Mark[] = [
  { slug: "komatsu", name: "Komatsu", label: "Komatsu" },
  { slug: "cat", name: "CAT", label: "CAT", glyph: "cat" },
  { slug: "hitachi", name: "Hitachi", label: "Hitachi" },
  { slug: "volvo", name: "Volvo", label: "Volvo", glyph: "volvo" },
  { slug: "jcb", name: "JCB", label: "JCB" },
  { slug: "hyundai", name: "Hyundai", label: "Hyundai", glyph: "hyundai" },
  { slug: "rexroth", name: "Rexroth", label: "Rexroth" },
  { slug: "kawasaki", name: "Kawasaki", label: "Kawasaki" },
  { slug: "linde", name: "Linde", label: "Linde" },
];

function Glyph({ kind }: { kind: NonNullable<Mark["glyph"]> }) {
  if (kind === "cat") {
    return (
      <svg className="bm-glyph" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2 13.5 8 2.5l6 11Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "volvo") {
    return (
      <svg className="bm-glyph" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2.2" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className="bm-glyph" viewBox="0 0 16 16" aria-hidden="true">
      <ellipse cx="8" cy="8" rx="6.4" ry="5.6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 8h8M8 4.2v7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BrandMark({ mark }: { mark: Mark }) {
  return (
    <span className="brand-mark" title={mark.name}>
      {mark.glyph ? <Glyph kind={mark.glyph} /> : null}
      <span className="bm-label">{mark.label}</span>
    </span>
  );
}
