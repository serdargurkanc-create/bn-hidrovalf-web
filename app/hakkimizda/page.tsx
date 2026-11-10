import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, QuoteCta, Section } from "@/components/Inner";
import { Pic } from "@/components/Pic";
import { SchemaLd } from "@/components/Schema";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Hakkımızda",
  description:
    "BN Hidrovalf Makina, Ankara İvedik OSB’de 20+ yıllık tecrübeye sahip kurumsal çözüm ortağıdır. Valf ve pompa revizyonu, spool imalatı, videolu test.",
  path: "/hakkimizda",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "Hakkımızda" }];

const ilkeler = [
  {
    t: "Önce tespit, sonra teklif",
    d: "Parça sökülmeden fiyat atılmaz. Teklif, arıza kaynağı netleştikten sonra yazılı verilir ve onay gelmeden işe başlanmaz.",
  },
  {
    t: "Kanıt: videolu test",
    d: "Her iş, test tezgâhında çekilen videoyla teslim edilir. Beyan yerine görüntü esastır.",
  },
  {
    t: "İmalat gücü",
    d: "Spool ve benzeri hassas parçalar beklenmez; taşlama ve talaşlı imalatla atölyede üretilir.",
  },
  {
    t: "Abartısız dil",
    d: "'En iyi', 'lider' gibi kanıtsız iddialar kullanılmaz. Resmi bayilik izlenimi verilmez; bağımsız atölye olduğumuz açıkça yazılır.",
  },
];

const shots = [
  {
    src: "/images/foto-valf-revizyonu-cat-spool-01-600.webp",
    srcSet:
      "/images/foto-valf-revizyonu-cat-spool-01-600.webp 600w, /images/foto-valf-revizyonu-cat-spool-01.webp 1600w",
    avifSrcSet:
      "/images/foto-valf-revizyonu-cat-spool-01-600.avif 600w, /images/foto-valf-revizyonu-cat-spool-01-800.avif 800w",
    alt: "Valf spool’ları yakın çekim",
  },
  {
    src: "/images/foto-pompa-govde-mikrometre-01-600.webp",
    srcSet:
      "/images/foto-pompa-govde-mikrometre-01-600.webp 600w, /images/foto-pompa-govde-mikrometre-01.webp 1600w",
    avifSrcSet:
      "/images/foto-pompa-govde-mikrometre-01-600.avif 600w, /images/foto-pompa-govde-mikrometre-01-800.avif 800w",
    alt: "Pompa gövdesinde mikrometre ile ölçü kontrolü",
  },
  {
    src: "/images/foto-valf-blok-seri-uretim-01-600.webp",
    srcSet:
      "/images/foto-valf-blok-seri-uretim-01-600.webp 600w, /images/foto-valf-blok-seri-uretim-01.webp 1600w",
    avifSrcSet: "/images/foto-valf-blok-seri-uretim-01.avif 1600w",
    alt: "Tezgâhta valf blokları",
  },
];

export default function Page() {
  return (
    <>
      <SchemaLd path="/hakkimizda" crumbs={crumbs} />
      <PageHero
        kicker="Kurumsal çözüm ortağı"
        title="20+ yıldır"
        accent="tezgâh başında"
        lead={`${site.name}, Ankara İvedik OSB, Genç Kardeşler Sanayi Sitesi’nde yerleşik bağımsız bir revizyon atölyesidir. Ana iş, her marka iş makinasında valf ve pompa revizyonudur.`}
        crumbs={crumbs}
        media={
          <Pic
            src="/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp"
            srcSet="/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.webp 800w"
            avifSrcSet="/images/foto-valf-revizyonu-spool-logo-fon-01-600.avif 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.avif 800w"
            alt="Logo fonu önünde sökülmüş valf gövdeleri ve yaylı spool’lar"
            width={1200}
            height={900}
            sizes="(max-width: 900px) 100vw, 480px"
            priority
          />
        }
      />

      <Section id="kim" kicker="Kim bu atölye?" title="Ana iş belli:" accent="revizyon">
        <div className="prose prose-wide">
          <p>
            BN Hidrovalf Makina’nın iş sıralaması nettir: birinci iş valf ve
            pompa revizyonu, ikinci iş bunu destekleyen{" "}
            <Link href="/imalat">CNC ve özel imalat</Link>, üçüncüsü ihtiyaca
            göre <Link href="/yedek-parca">yedek parça</Link> tedarikidir.
            Ostim–İvedik sanayi havzasındaki filo, servis ve atölyelere ve
            Türkiye geneline hizmet verilir.
          </p>
          <p>
            Çalışma biçimi 20 yılı aşkın sürede oturmuştur: parça gelir,
            sökülür, ölçülür; teklif yazılı verilir; iş tezgâhta{" "}
            <Link href="/revizyon/videolu-test">videolu testle</Link> kapanır
            ve parça <Link href="/revizyon/teslimat">kargo veya otobüs
            kurye</Link> ile geri döner.
          </p>
        </div>
      </Section>

      <Section id="ilkeler" kicker="İlkeler" title="Dört" accent="çalışma ilkesi" tone="soft">
        <div className="scope-grid">
          {ilkeler.map((s, i) => (
            <article
              className="scope-card rv"
              key={s.t}
              style={{ ["--d" as string]: `${i * 90}ms` }}
            >
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="atolye"
        kicker="Atölye"
        title="Tezgâhtan"
        accent="üç kare"
        lead="Yüz içeren kayıtlar, izin alınmadan yayınlanmaz."
      >
        <div className="gallery-grid gallery-grid-3">
          {shots.map((s, i) => (
            <div className="gallery-item rv-scale" key={s.src} style={{ ["--d" as string]: `${i * 90}ms` }}>
              <Pic
                src={s.src}
                srcSet={s.srcSet}
                avifSrcSet={s.avifSrcSet}
                alt={s.alt}
                width={1600}
                height={1200}
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section id="nap" kicker="Adres" title="Tek adres," accent="İvedik OSB" tone="soft">
        <div className="contact-grid">
          <div className="contact-card rv">
            <span>Adres</span>
            <a href={site.maps} rel="noopener noreferrer" target="_blank">
              {site.address.line}
            </a>
          </div>
          <div className="contact-card rv" style={{ ["--d" as string]: "90ms" }}>
            <span>Telefon / WhatsApp</span>
            <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
          </div>
          <div className="contact-card rv" style={{ ["--d" as string]: "180ms" }}>
            <span>E-posta</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </Section>

      <QuoteCta />
    </>
  );
}
