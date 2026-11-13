import Link from "next/link";
import { Pic } from "@/components/Pic";
import { VideoFigure } from "@/components/VideoFigure";
import type { Video } from "@/lib/media";
import { site } from "@/lib/site";

const links = [
  { href: "/revizyon", label: "Tüm revizyon" },
  { href: "/revizyon/valf", label: "Valf revizyonu" },
  { href: "/revizyon/pompa", label: "Pompa revizyonu" },
  { href: "/revizyon/surec", label: "Süreç" },
  { href: "/revizyon/videolu-test", label: "Videolu test" },
  { href: "/revizyon/ariza-belirtileri", label: "Arıza belirtileri" },
  { href: "/revizyon/teslimat", label: "Teslimat" },
  { href: "/revizyon/marka", label: "Markalar" },
] as const;

/** Her revizyon sayfasında aynı kısa cevap: nerede, kanıt, başlangıç. */
export function RevFacts() {
  return (
    <section className="rev-facts" aria-labelledby="rev-kisa">
      <div className="wrap">
        <h2 id="rev-kisa" className="sr-only">
          Kısa cevap
        </h2>
        <div className="rev-facts-grid">
          <article>
            <h3>Nerede yapılır?</h3>
            <p>
              Tek atölye: {site.address.street}, {site.address.postalCode}{" "}
              {site.address.locality}/{site.address.region}. Şube ağı yoktur.
            </p>
          </article>
          <article>
            <h3>Nasıl kanıtlanır?</h3>
            <p>
              İş, yazılı rapor yerine tezgâhta çekilen videolu test kaydıyla teslim edilir.
              240 ve 320 bar yalnız yayınlanan örnek kayıtların değeridir.
            </p>
          </article>
          <article>
            <h3>Nasıl başlar?</h3>
            <p>
              Makine markası, arıza belirtisi ve bir fotoğraf yeter. Kesin fiyat, parça
              söküldükten sonra yazılı teklifte belirtilir.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export type Shot = {
  src: string;
  srcSet: string;
  avif?: string;
  alt: string;
  cap: string;
  w?: number;
  h?: number;
};

export function PhotoBand({
  kicker = "Atölyeden",
  title = "Görseller",
  accent = "kareler",
  lead = "Atölyedeki valf, pompa ve ölçü işlerinden kareler.",
  shots,
}: {
  kicker?: string;
  title?: string;
  accent?: string;
  lead?: string;
  shots: readonly Shot[];
}) {
  return (
    <section className="page-sec page-sec-soft" aria-labelledby="rev-shots-title">
      <div className="wrap">
        <div className="sec-head">
          <p className="badge">{kicker}</p>
          <h2 id="rev-shots-title">
            {title} <span className="serif-accent">{accent}</span>
          </h2>
          <p className="sec-lead">{lead}</p>
        </div>
        <div className="rev-shots">
          {shots.map((s) => (
            <figure className="rev-shot" key={s.src}>
              <Pic
                src={s.src}
                srcSet={s.srcSet}
                avifSrcSet={s.avif}
                alt={s.alt}
                width={s.w ?? 800}
                height={s.h ?? 600}
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <figcaption>{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoBand({
  kicker = "Kayıt",
  title = "Video",
  accent = "alanı",
  lead = "Klipler tıklanınca yüklenir. Otomatik oynamaz.",
  clips,
}: {
  kicker?: string;
  title?: string;
  accent?: string;
  lead?: string;
  clips: readonly Video[];
}) {
  return (
    <section className="page-sec" aria-labelledby="rev-clips-title">
      <div className="wrap">
        <div className="sec-head">
          <p className="badge">{kicker}</p>
          <h2 id="rev-clips-title">
            {title} <span className="serif-accent">{accent}</span>
          </h2>
          <p className="sec-lead">{lead}</p>
        </div>
        <div className={`video-grid${clips.length > 2 ? " video-grid-3" : ""}`}>
          {clips.map((v) => (
            <VideoFigure key={v.src} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function RevLinks({ current }: { current: string }) {
  return (
    <nav className="rev-links wrap" aria-label="Revizyon sayfaları">
      {links
        .filter((l) => l.href !== current)
        .map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
    </nav>
  );
}

function shot(
  file: string,
  cap: string,
  alt: string,
  srcSet: string,
  avif?: string
): Shot {
  return { src: `${file}-600.webp`, srcSet, avif, alt, cap, w: 1200, h: 900 };
}

/** 4:3 atölye karesi: 600 / 800 / 1200 webp + avif. */
function band(file: string, cap: string, alt: string): Shot {
  return shot(
    file,
    cap,
    alt,
    `${file}-600.webp 600w, ${file}-800.webp 800w, ${file}-1200.webp 1200w`,
    `${file}-600.avif 600w, ${file}-800.avif 800w, ${file}-1200.avif 1200w`
  );
}

export const shots = {
  hub: [
    shot(
      "/images/foto-valf-revizyonu-spool-sira-02",
      "Valf spool sırası",
      "Tezgâhta sıra halinde valf spool’ları",
      "/images/foto-valf-revizyonu-spool-sira-02-600.webp 600w, /images/foto-valf-revizyonu-spool-sira-02-800.webp 800w",
      "/images/foto-valf-revizyonu-spool-sira-02-600.avif 600w, /images/foto-valf-revizyonu-spool-sira-02-800.avif 800w"
    ),
    shot(
      "/images/foto-pompa-ic-grup-logo-fon-01",
      "Pompa iç grubu",
      "Pompa iç grubu parçaları",
      "/images/foto-pompa-ic-grup-logo-fon-01-600.webp 600w, /images/foto-pompa-ic-grup-logo-fon-01-800.webp 800w",
      "/images/foto-pompa-ic-grup-logo-fon-01-600.avif 600w, /images/foto-pompa-ic-grup-logo-fon-01-800.avif 800w"
    ),
    shot(
      "/images/foto-pompa-govde-mikrometre-01",
      "Ölçü kontrolü",
      "Pompa gövdesinde mikrometre ile ölçü",
      "/images/foto-pompa-govde-mikrometre-01-600.webp 600w, /images/foto-pompa-govde-mikrometre-01.webp 1600w",
      "/images/foto-pompa-govde-mikrometre-01-600.avif 600w, /images/foto-pompa-govde-mikrometre-01-800.avif 800w"
    ),
  ],
  teslimat: [
    shot(
      "/images/foto-valf-blok-seri-uretim-01",
      "Gönderiye hazır blok",
      "Tezgâhta valf blokları",
      "/images/foto-valf-blok-seri-uretim-01-600.webp 600w, /images/foto-valf-blok-seri-uretim-01.webp 1600w",
      "/images/foto-valf-blok-seri-uretim-01.avif 1600w"
    ),
    shot(
      "/images/foto-pompa-govde-dortlu-01",
      "Pompa gövdeleri",
      "Dört pompa gövdesi",
      "/images/foto-pompa-govde-dortlu-01-600.webp 600w, /images/foto-pompa-govde-dortlu-01-800.webp 800w",
      "/images/foto-pompa-govde-dortlu-01.avif 1600w"
    ),
    shot(
      "/images/gallery/galeri-02-mikrometre",
      "Ölçü sonrası",
      "Mikrometre ile ölçü kontrolü",
      "/images/gallery/galeri-02-mikrometre-600.webp 600w, /images/gallery/galeri-02-mikrometre-800.webp 800w",
      "/images/gallery/galeri-02-mikrometre-600.avif 600w, /images/gallery/galeri-02-mikrometre-800.avif 800w"
    ),
  ],
  ariza: [
    shot(
      "/images/foto-valf-revizyonu-spool-logo-fon-01",
      "Spool sırası",
      "Sökülmüş valf spool’ları",
      "/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.webp 800w",
      "/images/foto-valf-revizyonu-spool-logo-fon-01-600.avif 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.avif 800w"
    ),
    shot(
      "/images/foto-pompa-kayar-plaka-01",
      "Kayar plaka",
      "Pompa kayar plakası",
      "/images/foto-pompa-kayar-plaka-01-600.webp 600w, /images/foto-pompa-kayar-plaka-01.webp 1600w",
      "/images/foto-pompa-kayar-plaka-01.avif 1600w"
    ),
    shot(
      "/images/foto-sarz-pompasi-disli-set-01",
      "Dişli set",
      "Şarj pompası dişli seti",
      "/images/foto-sarz-pompasi-disli-set-01-600.webp 600w, /images/foto-sarz-pompasi-disli-set-01.webp 1600w",
      "/images/foto-sarz-pompasi-disli-set-01.avif 1600w"
    ),
  ],
  marka: [
    shot(
      "/images/foto-valf-revizyonu-cat-spool-01",
      "Valf işi",
      "Valf spool imalatı",
      "/images/foto-valf-revizyonu-cat-spool-01-600.webp 600w, /images/foto-valf-revizyonu-cat-spool-01.webp 1600w",
      "/images/foto-valf-revizyonu-cat-spool-01-600.avif 600w, /images/foto-valf-revizyonu-cat-spool-01-800.avif 800w"
    ),
    shot(
      "/images/foto-pompa-ic-grup-logo-fon-01",
      "Pompa işi",
      "Pompa iç grubu",
      "/images/foto-pompa-ic-grup-logo-fon-01-600.webp 600w, /images/foto-pompa-ic-grup-logo-fon-01-800.webp 800w",
      "/images/foto-pompa-ic-grup-logo-fon-01-600.avif 600w, /images/foto-pompa-ic-grup-logo-fon-01-800.avif 800w"
    ),
    shot(
      "/images/spool-silindirik-taslama-01",
      "Taşlama tezgâhı",
      "Silindirik taşlama tezgâhı",
      "/images/spool-silindirik-taslama-01-600.webp 600w, /images/spool-silindirik-taslama-01.webp 1600w",
      "/images/spool-silindirik-taslama-01-600.avif 600w, /images/spool-silindirik-taslama-01-800.avif 800w"
    ),
  ],
  /** Dişli ve pistonlu pompa: iç grup, port, gövde, söküm. */
  pompa: [
    band(
      "/images/foto-disli-pompa-ic-grup-01",
      "Dişli pompa iç grubu",
      "Dişli pompa iç grubu: gerotor, port plakaları, gövde kesiti, dişli set ve kırmızı kapak. İvedik OSB atölyesi."
    ),
    band(
      "/images/foto-silindir-blok-valf-plakasi-01",
      "Silindir bloğu ve valf plakası",
      "Sarı tezgahta iki silindir bloğu ve iki valf plakası, piston pompa iç grubu."
    ),
    band(
      "/images/foto-pompa-port-yuzey-01",
      "Port yüzeyleri",
      "Üç pompa gövdesinin port yüzeyi: böbrek kanallar, merkez delik ve flanş delikleri."
    ),
    band(
      "/images/foto-pompa-govde-uclu-port-01",
      "Port yüzeyi açık gövde",
      "Üç pompa gövdesi; ortadaki gövdede böbrek kanallı port yüzeyi. İvedik OSB atölyesi."
    ),
    band(
      "/images/foto-pompa-govde-koyu-cift-01",
      "Çanak uçlu gövde çifti",
      "İki koyu pompa gövdesi; soldakinin altında çanak uç, yanlarda dişli portlar."
    ),
    band(
      "/images/foto-pompa-sokum-mavi-01",
      "Mavi gövde sökümü",
      "Sökülmüş mavi boyalı pompa: silindir bloğu, plaka ve gövde yüzeyi."
    ),
    band(
      "/images/foto-pompa-govde-cift-01",
      "İşlenmiş pompa gövdesi",
      "Tezgâhta iki işlenmiş pompa gövdesi ve miller, İvedik OSB."
    ),
    band(
      "/images/foto-pompa-govde-sira-atolye-01",
      "Pompa gövde sırası",
      "İvedik OSB atölyesinde tezgâh üzerinde dişli pompa gövdeleri; arkada torna tezgâhı."
    ),
  ],
  /** Süreç başlığıyla aynı sıra: söküm, ölçü, iç grup. */
  surec: [
    band(
      "/images/foto-valf-spool-yay-sokum-01",
      "Spool ve yay sökümü",
      "Sarı tezgahta sökülmüş iki hidrolik valf gövdesi ve yaylı spool’lar, İvedik OSB."
    ),
    shot(
      "/images/gallery/galeri-02-mikrometre",
      "Ölçü kontrolü",
      "Pompa gövdesinde mikrometre ile ölçü kontrolü",
      "/images/gallery/galeri-02-mikrometre-600.webp 600w, /images/gallery/galeri-02-mikrometre-800.webp 800w",
      "/images/gallery/galeri-02-mikrometre-600.avif 600w, /images/gallery/galeri-02-mikrometre-800.avif 800w"
    ),
    band(
      "/images/foto-disli-pompa-ic-grup-01",
      "İç grup",
      "Dişli pompa iç grubu parçaları tezgâh üzerinde, İvedik OSB atölyesi."
    ),
  ],
  test: [
    shot(
      "/images/gallery/galeri-03-blok",
      "Test öncesi blok",
      "Valf blokları",
      "/images/gallery/galeri-03-blok-600.webp 600w, /images/gallery/galeri-03-blok-800.webp 800w",
      "/images/gallery/galeri-03-blok-600.avif 600w, /images/gallery/galeri-03-blok-800.avif 800w"
    ),
    shot(
      "/images/gallery/galeri-04-kayar-plaka",
      "Yüzey",
      "Kayar plaka yüzeyi",
      "/images/gallery/galeri-04-kayar-plaka-600.webp 600w, /images/gallery/galeri-04-kayar-plaka-800.webp 800w",
      "/images/gallery/galeri-04-kayar-plaka-600.avif 600w, /images/gallery/galeri-04-kayar-plaka-800.avif 800w"
    ),
    shot(
      "/images/gallery/galeri-06-dortlu",
      "Pompa sırası",
      "Pompa gövdeleri sırası",
      "/images/gallery/galeri-06-dortlu-600.webp 600w, /images/gallery/galeri-06-dortlu-800.webp 800w",
      "/images/gallery/galeri-06-dortlu-600.avif 600w, /images/gallery/galeri-06-dortlu-800.avif 800w"
    ),
  ],
};
