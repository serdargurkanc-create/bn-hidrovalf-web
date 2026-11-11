import { Pic } from "@/components/Pic";
import { asset } from "@/lib/paths";

const shots = [
  {
    src: "/images/foto-valf-revizyonu-cat-spool-01-600.webp",
    srcSet: "/images/foto-valf-revizyonu-cat-spool-01-600.webp 600w, /images/foto-valf-revizyonu-cat-spool-01.webp 1600w",
    avifSrcSet: "/images/foto-valf-revizyonu-cat-spool-01-600.avif 600w, /images/foto-valf-revizyonu-cat-spool-01-800.avif 800w, /images/foto-valf-revizyonu-cat-spool-01.avif 1600w",
    full: "/images/foto-valf-revizyonu-cat-spool-01.webp",
    w: 1600,
    h: 1200,
    alt: "Valf spool’ları yakın çekim",
  },
  {
    src: "/images/foto-pompa-govde-mikrometre-01-600.webp",
    srcSet: "/images/foto-pompa-govde-mikrometre-01-600.webp 600w, /images/foto-pompa-govde-mikrometre-01.webp 1600w",
    avifSrcSet: "/images/foto-pompa-govde-mikrometre-01-600.avif 600w, /images/foto-pompa-govde-mikrometre-01-800.avif 800w, /images/foto-pompa-govde-mikrometre-01.avif 1600w",
    full: "/images/foto-pompa-govde-mikrometre-01.webp",
    w: 1600,
    h: 1200,
    alt: "Pompa gövdesinde mikrometre ile ölçü kontrolü",
  },
  {
    src: "/images/foto-valf-blok-seri-uretim-01-600.webp",
    srcSet: "/images/foto-valf-blok-seri-uretim-01-600.webp 600w, /images/foto-valf-blok-seri-uretim-01.webp 1600w",
    avifSrcSet: "/images/foto-valf-blok-seri-uretim-01.avif 1600w",
    full: "/images/foto-valf-blok-seri-uretim-01.webp",
    w: 1600,
    h: 1200,
    alt: "Tezgâhta valf blokları",
  },
  {
    src: "/images/foto-pompa-kayar-plaka-01-600.webp",
    srcSet: "/images/foto-pompa-kayar-plaka-01-600.webp 600w, /images/foto-pompa-kayar-plaka-01.webp 1600w",
    avifSrcSet: "/images/foto-pompa-kayar-plaka-01.avif 1600w",
    full: "/images/foto-pompa-kayar-plaka-01.webp",
    w: 1600,
    h: 1200,
    alt: "Pompa kayar plakası",
  },
  {
    src: "/images/foto-sarz-pompasi-disli-set-01-600.webp",
    srcSet: "/images/foto-sarz-pompasi-disli-set-01-600.webp 600w, /images/foto-sarz-pompasi-disli-set-01.webp 1600w",
    avifSrcSet: "/images/foto-sarz-pompasi-disli-set-01.avif 1600w",
    full: "/images/foto-sarz-pompasi-disli-set-01.webp",
    w: 1600,
    h: 1200,
    alt: "Şarj pompası dişli seti",
  },
  {
    src: "/images/foto-pompa-govde-dortlu-01-600.webp",
    srcSet: "/images/foto-pompa-govde-dortlu-01-600.webp 600w, /images/foto-pompa-govde-dortlu-01-800.webp 800w",
    avifSrcSet: "/images/foto-pompa-govde-dortlu-01-800.avif 800w, /images/foto-pompa-govde-dortlu-01.avif 1600w",
    full: "/images/foto-pompa-govde-dortlu-01.webp",
    w: 1600,
    h: 1200,
    alt: "Dört pompa gövdesi tezgâh üzerinde",
  },
];

export function Atelier() {
  return (
    <section className="gallery" aria-labelledby="atolye-title">
      <div className="wrap">
        <div className="gallery-head rv">
          <p className="badge">Atölye</p>
          <h2 id="atolye-title">
            Tezgâhtan <span className="serif-accent">kareler</span>
          </h2>
          <p style={{ color: "var(--ink-soft)", margin: 0 }}>
            BN Hidrovalf Makina atölyesinden fotoğraflar. Yüz içeren kayıtlar, izin
            alınmadan yayınlanmaz.
          </p>
        </div>
        <div className="gallery-grid">
          {shots.map((s, i) => (
            <a
              key={s.src}
              href={asset(s.full)}
              className="gallery-item rv-scale"
              style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}
              data-lightbox
              data-alt={s.alt}
            >
              <Pic
                src={s.src}
                srcSet={s.srcSet}
                avifSrcSet={s.avifSrcSet}
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes="(max-width: 900px) 50vw, 33vw"
              />
            </a>
          ))}
        </div>
      </div>
      <div id="lightbox" className="lightbox" hidden role="dialog" aria-modal="true" aria-label="Fotoğraf">
        <button type="button" className="lightbox-close" data-lightbox-close>
          Kapat
        </button>
        {/* src, lightbox açılırken motion.js tarafından atanır; boş src bırakılmaz */}
        <img alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
      </div>
    </section>
  );
}
