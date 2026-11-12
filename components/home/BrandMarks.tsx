import { asset } from "@/lib/paths";

/**
 * Ana sayfa şeridi: markaların kendi logoları, tek yükseklikte siyah.
 * İşlenen markaları gösterir.
 */

type Mark = {
  slug: string;
  name: string;
  w: number;
  h: number;
};

export const brandMarks: Mark[] = [
  { slug: "komatsu", name: "Komatsu", w: 600, h: 116 },
  { slug: "cat", name: "Caterpillar", w: 110, h: 18 },
  { slug: "hitachi", name: "Hitachi", w: 534, h: 118 },
  { slug: "volvo", name: "Volvo", w: 872, h: 120 },
  { slug: "jcb", name: "JCB", w: 258, h: 68 },
  { slug: "hyundai", name: "Hyundai", w: 933, h: 120 },
  { slug: "rexroth", name: "Rexroth", w: 296, h: 78 },
  { slug: "kawasaki", name: "Kawasaki", w: 176, h: 19 },
  { slug: "linde", name: "Linde", w: 176, h: 48 },
];

export function BrandMark({ mark }: { mark: Mark }) {
  return (
    <span className="brand-mark" title={mark.name}>
      <img
        src={asset(`/brands/${mark.slug}.png`)}
        alt=""
        width={mark.w}
        height={mark.h}
        draggable={false}
      />
    </span>
  );
}
