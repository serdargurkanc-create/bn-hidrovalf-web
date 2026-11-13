import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, PageHero, QuoteCta, Section } from "@/components/Inner";
import { Pic } from "@/components/Pic";
import { LatheScene } from "@/components/anim/Scenes";
import { SchemaLd } from "@/components/Schema";
import { VideoFigure } from "@/components/VideoFigure";
import { videos } from "@/lib/media";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "CNC ve özel imalat",
  description:
    "Spool imalatı, iç çap, flanş işleme ve silindirik taşlama. CNC ve taşlama, valf ve pompa revizyonunu destekler. İvedik OSB.",
  path: "/imalat",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { label: "CNC ve özel imalat" },
];

const kabiliyet = [
  {
    t: "Spool imalatı",
    d: "Aşınmış veya bulunamayan valf spool’u, mevcut parçadan ölçü alınarak taşlama ve talaşlı imalatla yeniden üretilir.",
  },
  {
    t: "Silindirik ve yüzey taşlama",
    d: "Spool dış çapı, pompa iç grup yüzeyleri ve ayna/kayar plaka taşlaması atölyedeki taşlama tezgâhlarında yapılır.",
  },
  {
    t: "İç çap işleme",
    d: "Gövde ve blokta iç çap hazırlığı ve işleme; revizyonda ölçüsünden çıkmış kanalların toparlanması.",
  },
  {
    t: "Flanş ve yüzey işleme",
    d: "Flanş yüzeyleri, oturma ve sızdırmazlık yüzeyleri tezgâhta işlenir.",
  },
];

const faqItems = [
  {
    q: "İmalat yalnızca revizyon işlerine mi bağlı?",
    a: "Hayır. Ana rolü valf ve pompa revizyonunu desteklemektir; ancak ayrı bir özel parça talebi için de teklif istenebilir.",
  },
  {
    q: "Hangi işler atölyede yapılabiliyor?",
    a: "Spool imalatı, silindirik ve yüzey taşlama, iç çap işleme ve flanş yüzey işleme atölye içinde yapılır. Talebin uygunluğu, parça fotoğrafı ve ölçüler üzerinden değerlendirilir.",
  },
  {
    q: "Numune parçadan imalat yapılıyor mu?",
    a: "Evet. Aşınmış spool gibi parçalarda mevcut parçadan ölçü alınarak imalat yapılır; teknik resim şart değildir.",
  },
  {
    q: "İmalat işinde de test var mı?",
    a: "İmal edilen parça revizyonun parçasıysa, iş videolu tezgâh testiyle birlikte teslim edilir.",
  },
];

const pageVideos = [videos.flansIsleme, videos.spoolTaslama, videos.isleme];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/imalat"
        crumbs={crumbs}
        service={{
          name: "CNC ve özel imalat",
          description:
            "Spool imalatı, silindirik ve yüzey taşlama, iç çap ve flanş işleme. Valf ve pompa revizyonunu destekleyen atölye kabiliyeti.",
        }}
        faqs={faqItems}
        videoList={pageVideos}
      />
      <PageHero
        kicker="İkincil hizmet"
        title="CNC ve"
        accent="özel imalat"
        lead="Revizyonun arkasındaki kas: torna, freze ve taşlama. Spool ve benzeri hassas parçalar beklenmez, atölyede imal edilir."
        crumbs={crumbs}
        media={
          <Pic
            src="/images/foto-spool-imalati-tezgah-01.webp"
            srcSet="/images/foto-spool-imalati-tezgah-01.webp 1200w"
            alt="Tezgâhta spool imalatı"
            width={1200}
            height={900}
            sizes="(max-width: 900px) 100vw, 480px"
            priority
          />
        }
      >
        <ul className="hero-chips" aria-label="Kabiliyet">
          <li>Torna ve freze</li>
          <li>Silindirik taşlama</li>
          <li>Yüzey taşlama</li>
        </ul>
      </PageHero>

      <Section id="kabiliyet" kicker="Kabiliyet" title="Atölyede" accent="yapılanlar">
        <div className="scope-grid">
          {kabiliyet.map((s, i) => (
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
        id="cizimle"
        kicker="Çizimle anlatım"
        title="Tezgâhta"
        accent="talaşlı imalat"
        lead="Şematik çizim: aynaya bağlı iş parçası döner, kesici takım yüzeyi işler. Spool ve özel parçalar bu düzende üretilir."
        tone="soft"
      >
        <LatheScene />
      </Section>

      <Section
        id="atolyeden"
        kicker="Atölyeden"
        title="Tezgâh"
        accent="kayıtları"
        lead="Klipler gerçek işlerden alınmıştır; tıklayınca oynar."
        tone="soft"
      >
        <div className="video-grid video-grid-3">
          {pageVideos.map((v) => (
            <VideoFigure key={v.src} video={v} />
          ))}
        </div>
        <div className="split" style={{ marginTop: "1.5rem" }}>
          <div className="split-media">
            <Pic
              src="/images/foto-pompa-govde-isleme-01-600.webp"
              srcSet="/images/foto-pompa-govde-isleme-01-600.webp 600w, /images/foto-pompa-govde-isleme-01-800.webp 800w, /images/foto-pompa-govde-isleme-01-1200.webp 1200w"
              avifSrcSet="/images/foto-pompa-govde-isleme-01-600.avif 600w, /images/foto-pompa-govde-isleme-01-800.avif 800w, /images/foto-pompa-govde-isleme-01-1200.avif 1200w"
              alt="İşleme tezgâhında, soğutma hortumu yanında iki pompa gövdesi ve miller"
              width={1200}
              height={900}
              sizes="(max-width: 900px) 100vw, 480px"
            />
          </div>
          <div className="split-copy">
            <h3>
              Gövde, <span className="serif-accent">tezgâhta işlenir.</span>
            </h3>
            <p>
              Pompa gövdesinin iç çapı ve mil yatakları atölyedeki işleme tezgâhında hazırlanır.
              Bu iş valf ve pompa revizyonunun içindedir.
            </p>
            <p>
              Kapsam için <Link href="/revizyon/valf">valf</Link> ve{" "}
              <Link href="/revizyon/pompa">pompa</Link> sayfalarına bakın.
            </p>
          </div>
        </div>
        <div className="split" style={{ marginTop: "1.5rem" }}>
          <div className="split-media">
            <Pic
              src="/images/foto-silindir-blok-torna-01-600.webp"
              srcSet="/images/foto-silindir-blok-torna-01-600.webp 600w, /images/foto-silindir-blok-torna-01-800.webp 800w, /images/foto-silindir-blok-torna-01-1200.webp 1200w"
              avifSrcSet="/images/foto-silindir-blok-torna-01-600.avif 600w, /images/foto-silindir-blok-torna-01-800.avif 800w, /images/foto-silindir-blok-torna-01-1200.avif 1200w"
              alt="Atölyedeki torna aynasında piston pompa silindir bloğu ve yanında pirinç valf plakası"
              width={1200}
              height={900}
              sizes="(max-width: 900px) 100vw, 480px"
            />
          </div>
          <div className="split-copy">
            <h3>
              Silindir bloğu, <span className="serif-accent">tornada.</span>
            </h3>
            <p>
              Piston pompanın silindir bloğu torna aynasında durur; yanında valf plakası.
              Bu yüzeyler pompa revizyonunda ölçülür ve taşlanır.
            </p>
          </div>
        </div>
      </Section>

      <Section id="sss" kicker="SSS" title="İmalat" accent="soruları">
        <FaqList items={faqItems} idPrefix="imalat-soru" />
      </Section>

      <QuoteCta title="Özel imalat teklifi al" />
    </>
  );
}
