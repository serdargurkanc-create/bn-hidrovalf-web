import { asset } from "@/lib/paths";

/**
 * Ana sayfa şeridi: markaların kendi logoları, tek yükseklikte siyah.
 * İşlenen markaları gösterir.
 */

type Mark = {
  slug: string;
  name: string;
};

export const brandMarks: Mark[] = [
  { slug: "komatsu", name: "Komatsu" },
  { slug: "cat", name: "Caterpillar" },
  { slug: "hitachi", name: "Hitachi" },
  { slug: "volvo", name: "Volvo" },
  { slug: "jcb", name: "JCB" },
  { slug: "hyundai", name: "Hyundai" },
  { slug: "rexroth", name: "Rexroth" },
  { slug: "kawasaki", name: "Kawasaki" },
  { slug: "linde", name: "Linde" },
];

export function BrandMark({ mark }: { mark: Mark }) {
  return (
    <span className="brand-mark" title={mark.name}>
      <img
        src={asset(`/brands/${mark.slug}.png`)}
        alt=""
        height={28}
        draggable={false}
      />
    </span>
  );
}
