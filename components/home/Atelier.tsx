import { Pic } from "@/components/Pic";
import { asset } from "@/lib/paths";

/** Hepsi 4:3 kırpılmış atölye kareleri — tek tip ızgara, boşluksuz. */
const shots = [
  {
    src: "/images/gallery/galeri-01-spool-600.webp",
    srcSet:
      "/images/gallery/galeri-01-spool-600.webp 600w, /images/gallery/galeri-01-spool-800.webp 800w, /images/gallery/galeri-01-spool-1200.webp 1200w",
    full: "/images/gallery/galeri-01-spool-1200.webp",
    w: 1200,
    h: 900,
    alt: "Valf spool’ları yakın çekim",
    label: "Spool",
  },
  {
    src: "/images/gallery/galeri-02-mikrometre-600.webp",
    srcSet:
      "/images/gallery/galeri-02-mikrometre-600.webp 600w, /images/gallery/galeri-02-mikrometre-800.webp 800w, /images/gallery/galeri-02-mikrometre-1200.webp 1200w",
    full: "/images/gallery/galeri-02-mikrometre-1200.webp",
    w: 1200,
    h: 900,
    alt: "Pompa gövdesinde mikrometre ile ölçü kontrolü",
    label: "Ölçüm",
  },
  {
    src: "/images/gallery/galeri-03-blok-600.webp",
    srcSet:
      "/images/gallery/galeri-03-blok-600.webp 600w, /images/gallery/galeri-03-blok-800.webp 800w, /images/gallery/galeri-03-blok-1200.webp 1200w",
    full: "/images/gallery/galeri-03-blok-1200.webp",
    w: 1200,
    h: 900,
    alt: "Tezgâhta valf blokları",
    label: "Valf bloğu",
  },
  {
    src: "/images/gallery/galeri-04-kayar-plaka-600.webp",
    srcSet:
      "/images/gallery/galeri-04-kayar-plaka-600.webp 600w, /images/gallery/galeri-04-kayar-plaka-800.webp 800w, /images/gallery/galeri-04-kayar-plaka-1200.webp 1200w",
    full: "/images/gallery/galeri-04-kayar-plaka-1200.webp",
    w: 1200,
    h: 900,
    alt: "Pompa kayar plakası",
    label: "Kayar plaka",
  },
  {
    src: "/images/gallery/galeri-05-disli-600.webp",
    srcSet:
      "/images/gallery/galeri-05-disli-600.webp 600w, /images/gallery/galeri-05-disli-800.webp 800w, /images/gallery/galeri-05-disli-1200.webp 1200w",
    full: "/images/gallery/galeri-05-disli-1200.webp",
    w: 1200,
    h: 900,
    alt: "Şarj pompası dişli seti",
    label: "Dişli set",
  },
  {
    src: "/images/gallery/galeri-06-dortlu-600.webp",
    srcSet:
      "/images/gallery/galeri-06-dortlu-600.webp 600w, /images/gallery/galeri-06-dortlu-800.webp 800w, /images/gallery/galeri-06-dortlu-1200.webp 1200w",
    full: "/images/gallery/galeri-06-dortlu-1200.webp",
    w: 1200,
    h: 900,
    alt: "Dört pompa gövdesi tezgâh üzerinde",
    label: "Pompa gövdesi",
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
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 360px"
              />
              <span className="gallery-cap">{s.label}</span>
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
