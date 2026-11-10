import { Pic } from "@/components/Pic";

const works = [
  {
    href: "/revizyon/valf",
    title: "Valf revizyonu",
    tag: "Ana hizmet",
    src: "/images/foto-valf-revizyonu-spool-sira-02-600.webp",
    srcSet: "/images/foto-valf-revizyonu-spool-sira-02-600.webp 600w, /images/foto-valf-revizyonu-spool-sira-02-800.webp 800w",
    avifSrcSet: "/images/foto-valf-revizyonu-spool-sira-02-800.avif 800w, /images/foto-valf-revizyonu-spool-sira-02.avif 1600w",
    w: 800,
    h: 600,
    alt: "Tezgâh üzerinde sıra halinde hidrolik valf spool’ları",
  },
  {
    href: "/imalat",
    title: "Spool imalatı",
    tag: "Atölye",
    src: "/images/spool-silindirik-taslama-01-600.webp",
    srcSet: "/images/spool-silindirik-taslama-01-600.webp 600w, /images/spool-silindirik-taslama-01.webp 1200w",
    avifSrcSet: "/images/spool-silindirik-taslama-01-600.avif 600w, /images/spool-silindirik-taslama-01-800.avif 800w, /images/spool-silindirik-taslama-01.avif 1600w",
    w: 576,
    h: 1024,
    alt: "Silindirik taşlama tezgâhında spool işleme",
  },
  {
    href: "/revizyon/pompa",
    title: "Pompa revizyonu",
    tag: "Ana hizmet",
    src: "/images/foto-pompa-ic-grup-logo-fon-01-600.webp",
    srcSet: "/images/foto-pompa-ic-grup-logo-fon-01-600.webp 600w, /images/foto-pompa-ic-grup-logo-fon-01-800.webp 800w",
    avifSrcSet: "/images/foto-pompa-ic-grup-logo-fon-01-800.avif 800w, /images/foto-pompa-ic-grup-logo-fon-01.avif 1600w",
    w: 800,
    h: 600,
    alt: "Logo fonu önünde pompa iç grubu parçaları",
  },
  {
    href: "/revizyon/surec",
    title: "Videolu test",
    tag: "Teslimat",
    src: "/images/valf-testi-pakens-01-600.webp",
    srcSet: "/images/valf-testi-pakens-01-600.webp 600w, /images/valf-testi-pakens-01-800.webp 800w, /images/valf-testi-pakens-01.webp 1200w",
    avifSrcSet: "/images/valf-testi-pakens-01-800.avif 800w, /images/valf-testi-pakens-01.avif 1600w",
    w: 480,
    h: 848,
    alt: "Pakkens manometreli valf test düzeneği",
  },
];

export function Proof() {
  return (
    <section className="cards-sec" aria-labelledby="isler-title">
      <div className="wrap">
        <div className="cards-head rv">
          <p className="badge">Atölyeden</p>
          <h2 id="isler-title">
            Revizyonun <span className="serif-accent">görünen hali</span>
          </h2>
          <p style={{ color: "var(--ink-soft)", margin: 0 }}>
            Valf, spool, pompa ve test — dört iş, aynı atölye.
          </p>
        </div>
        <div className="cards-grid">
          {works.map((w, i) => (
            <a
              key={w.href}
              href={w.href}
              className="work-card rv-scale"
              style={{ ["--d" as string]: `${i * 90}ms` }}
            >
              <div className="media">
                <Pic
                  src={w.src}
                  srcSet={w.srcSet}
                  avifSrcSet={w.avifSrcSet}
                  alt={w.alt}
                  width={w.w}
                  height={w.h}
                  sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 25vw"
                />
              </div>
              <div className="work-meta">
                {w.title}
                <span className="tag">{w.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
