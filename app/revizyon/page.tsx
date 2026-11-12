import type { Metadata } from "next";
import Link from "next/link";
import { FlowSvg } from "@/components/Anim";
import { BrandChips, PageHero, QuoteCta, Section } from "@/components/Inner";
import { Pic } from "@/components/Pic";
import { SchemaLd } from "@/components/Schema";
import { brands } from "@/lib/brands";
import { videos } from "@/lib/media";
import { pageMeta } from "@/lib/meta";
import { PhotoBand, RevFacts, RevLinks, VideoBand, shots } from "@/components/revizyon/Frame";

export const metadata: Metadata = pageMeta({
  title: "Valf ve pompa revizyonu",
  description:
    "BN Hidrovalf Makina, her marka iş makinasında valf ve pompa revizyonu yapar. Spool imalatı, iç grup yüzey taşlama, videolu test kaydı. İvedik OSB, Ankara.",
  path: "/revizyon",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "Revizyon" }];

const cards = [
  {
    href: "/revizyon/valf",
    title: "Valf revizyonu",
    tag: "Ana hizmet",
    desc: "Ana kumanda valfi, spool imalatı, arıza çözümü ve videolu valf testi.",
    src: "/images/foto-valf-revizyonu-spool-sira-02-600.webp",
    srcSet:
      "/images/foto-valf-revizyonu-spool-sira-02-600.webp 600w, /images/foto-valf-revizyonu-spool-sira-02-800.webp 800w",
    avifSrcSet:
      "/images/foto-valf-revizyonu-spool-sira-02-800.avif 800w, /images/foto-valf-revizyonu-spool-sira-02.avif 1600w",
    w: 800,
    h: 600,
    alt: "Tezgâh üzerinde sıra halinde hidrolik valf spool’ları",
  },
  {
    href: "/revizyon/pompa",
    title: "Pompa revizyonu",
    tag: "Ana hizmet",
    desc: "İç grup yüzey taşlama, ölçü kontrolü ve videolu pompa testi.",
    src: "/images/foto-pompa-ic-grup-logo-fon-01-600.webp",
    srcSet:
      "/images/foto-pompa-ic-grup-logo-fon-01-600.webp 600w, /images/foto-pompa-ic-grup-logo-fon-01-800.webp 800w",
    avifSrcSet:
      "/images/foto-pompa-ic-grup-logo-fon-01-800.avif 800w, /images/foto-pompa-ic-grup-logo-fon-01.avif 1600w",
    w: 800,
    h: 600,
    alt: "Logo fonu önünde pompa iç grubu parçaları",
  },
  {
    href: "/revizyon/surec",
    title: "Süreç ve teslimat",
    tag: "Nasıl çalışır",
    desc: "Fotoğrafla ön değerlendirmeden videolu teste; kargo veya otobüs kurye ile teslim.",
    src: "/images/valf-testi-pakens-01-600.webp",
    srcSet:
      "/images/valf-testi-pakens-01-600.webp 600w, /images/valf-testi-pakens-01-800.webp 800w, /images/valf-testi-pakens-01.webp 1200w",
    avifSrcSet:
      "/images/valf-testi-pakens-01-800.avif 800w, /images/valf-testi-pakens-01.avif 1600w",
    w: 480,
    h: 848,
    alt: "Pakkens manometreli valf test düzeneği",
  },
];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/revizyon"
        crumbs={crumbs}
        service={{
          name: "Valf ve pompa revizyonu",
          description:
            "Her marka iş makinasında valf ve pompa revizyonu; spool imalatı, iç grup yüzey taşlama, videolu test kaydı.",
        }}
      />
      <PageHero
        kicker="Ana hizmet"
        title="Valf ve pompa"
        accent="revizyonu"
        lead="BN Hidrovalf Makina'nın ana işi budur: her marka iş makinasında valf ve pompa revizyonu. Her iş, tezgâhta yapılan videolu test kaydıyla teslim edilir."
        crumbs={crumbs}
      >
        <FlowSvg />
      </PageHero>
      <RevFacts />

      <Section
        id="hizmetler"
        kicker="Hizmetler"
        title="Üç kapı,"
        accent="tek atölye"
      >
        <div className="cards-grid cards-grid-3">
          {cards.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className="work-card rv-scale"
              style={{ ["--d" as string]: `${i * 90}ms` }}
            >
              <div className="media">
                <Pic
                  src={c.src}
                  srcSet={c.srcSet}
                  avifSrcSet={c.avifSrcSet}
                  alt={c.alt}
                  width={c.w}
                  height={c.h}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <div className="work-meta">
                {c.title}
                <span className="tag">{c.tag}</span>
              </div>
              <p className="work-desc">{c.desc}</p>
            </Link>
          ))}
        </div>
        <p className="sec-note">
          Ayrıca:{" "}
          <Link href="/revizyon/videolu-test">videolu test uygulaması</Link>,{" "}
          <Link href="/revizyon/ariza-belirtileri">arıza belirtileri rehberi</Link>{" "}
          ve <Link href="/revizyon/teslimat">teslimat seçenekleri</Link>.
        </p>
      </Section>

      <Section
        id="markalar"
        kicker="Markalar"
        title="Her marka"
        accent="kabul edilir"
        lead="Marka sayfaları, o markanın valf ve pompalarında yapılan işi anlatır. Gereken parça tedarik edilir veya atölyede imal edilir."
        tone="soft"
      >
        <BrandChips slugs={brands} />
      </Section>

      <PhotoBand
        shots={shots.hub}
        title="Atölye"
        accent="kareleri"
        lead="Valf, pompa ve ölçü. Kareler yer tutucudur; görseller sonra değiştirilebilir."
      />
      <VideoBand
        clips={[videos.test240, videos.icCapTaslama]}
        title="Test ve"
        accent="taşlama"
        lead="Solda valf test kaydı, sağda iç çap taşlama. Kayıtlar yer tutucudur."
      />
      <RevLinks current="/revizyon" />
      <QuoteCta />
    </>
  );
}
