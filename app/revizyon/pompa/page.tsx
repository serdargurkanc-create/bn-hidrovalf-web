import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandChips,
  FaqList,
  PageHero,
  QuoteCta,
  Section,
} from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { Pic } from "@/components/Pic";
import { PumpExploded } from "@/components/anim/Scenes";
import { VideoFigure } from "@/components/VideoFigure";
import { brands } from "@/lib/brands";
import { videos } from "@/lib/media";
import { PhotoBand, RevFacts, RevLinks, shots } from "@/components/revizyon/Frame";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "İş makinası pompa revizyonu",
  description:
    "İş makinası pompa revizyonu: iç grup yüzey taşlama, ölçü ve videolu test. BN Hidrovalf Makina, İvedik OSB, Ankara.",
  path: "/revizyon/pompa",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { href: "/revizyon", label: "Revizyon" },
  { label: "Pompa revizyonu" },
];

const scope = [
  {
    t: "Söküm ve ölçü kontrolü",
    d: "Pompa sökülür; iç grup (silindir bloğu, pistonlar, kayar plaka, ayna) mikrometre ile ölçülür ve aşınma haritası çıkarılır.",
  },
  {
    t: "İç grup yüzey taşlama",
    d: "Aşınan iç grup yüzeyleri atölyedeki taşlama tezgâhlarında işlenir. Çizilen ayna veya kayar plaka çoğu durumda yenisi beklenmeden kurtarılabilir.",
  },
  {
    t: "Montaj ve ayar",
    d: "Taşlanan ve değişen parçalarla pompa toplanır; eksen ve boşluk ayarları yapılır.",
  },
  {
    t: "Tezgâhta pompa testi",
    d: "Revizyon sonrası pompa test edilir; debi ve basınç davranışı gözlenir. Sonuç videolu kayıt olarak paylaşılır.",
  },
];

const faqItems = [
  {
    q: "Hangi pompalar revizyona kabul ediliyor?",
    a: "Her marka iş makinasının hidrolik pompası kabul edilir. Kawasaki K3V/K5V gibi pistonlu pompalar, Rexroth ve Linde pompa grupları ile dişli ve şarj pompaları kapsam dahilindedir. Gereken parça tedarik edilir veya atölyede imal edilir.",
  },
  {
    q: "İç grup yüzey taşlama nedir, neden önemlidir?",
    a: "Pistonlu pompalarda silindir bloğu, ayna ve kayar plaka yüzeyleri zamanla çizilir ve verim düşer. Yüzey taşlama ile bu parçalar ölçüsünde düzeltilir; çoğu durumda yeni iç grup beklemeden pompa kurtarılır.",
  },
  {
    q: "Pompa testi nasıl belgeleniyor?",
    a: "Test, tezgâhta videoya alınır ve kayıt işle birlikte paylaşılır. Yazılı rapor yerine videolu kayıt verilir; böylece pompanın çalışır hali görülür.",
  },
  {
    q: "Pompamda güç kaybı var; revizyon şart mı?",
    a: "Güç kaybı, ısınma veya gürültü pompa iç grubundaki aşınmaya işaret edebilir; kesin tespit atölyede söküm ve ölçümle yapılır. Fotoğraf ve belirti ile ön değerlendirme ücretsiz başlar.",
  },
  {
    q: "Pompa revizyonu için ne göndermeliyim?",
    a: "Makine marka ve modeli, pompa tipi (biliniyorsa) ve bir fotoğraf yeterlidir. Parça kargo veya otobüs kurye ile atölyeye ulaştırılır.",
  },
  {
    q: "Garanti veriliyor mu?",
    a: "Garanti koşulları, tespit sonrası gönderilen yazılı teklifte belirtilir.",
  },
];

const pageVideos = [videos.icCapTaslama, videos.icCapIsleme];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/revizyon/pompa"
        crumbs={crumbs}
        service={{
          name: "İş makinası pompa revizyonu",
          description:
            "Her marka iş makinası pompa revizyonu, iç grup yüzey taşlama ve videolu pompa testi.",
        }}
        faqs={faqItems}
        videoList={pageVideos}
      />
      <PageHero
        kicker="Ana hizmet · Pompa"
        title="İş makinası"
        accent="pompa revizyonu"
        lead="Her marka iş makinasının hidrolik pompası revizyona kabul edilir. Kapsamda iç grup yüzey taşlama, ölçü kontrolü ve tezgâhta videolu pompa testi vardır."
        crumbs={crumbs}
        media={<VideoFigure video={videos.icCapTaslama} />}
      >
        <ul className="hero-chips" aria-label="Kapsam">
          <li>İç grup yüzey taşlama</li>
          <li>Ölçü kontrolü</li>
          <li>Videolu pompa testi</li>
        </ul>
      </PageHero>
      <RevFacts />

      <Section
        id="kapsam"
        kicker="Kapsam"
        title="Ölçümden"
        accent="teste"
        lead="Pompa revizyonu dört ana adımda ilerler; taşlama ve imalat aynı atölyede yapıldığı için parça beklemesi azalır."
      >
        <div className="scope-grid">
          {scope.map((s, i) => (
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
        title="İç grup"
        accent="nasıl çalışır?"
        lead="Şematik çizim pistonlu pompanın iç grubunu açılmış hâlde gösterir: kayar plaka, pistonlar, silindir bloğu ve valf plakası. Revizyonda bu parçaların yüzeyleri ölçülür ve taşlanır."
        tone="soft"
      >
        <PumpExploded />
      </Section>

      <Section
        id="atolyeden"
        kicker="Atölyeden"
        title="İç grup taşlama"
        accent="kayıtta"
        lead="Klipler atölyedeki gerçek işlerden alınmıştır; tıklayınca oynar, otomatik yüklenmez."
        tone="soft"
      >
        <div className="video-grid">
          <VideoFigure video={videos.icCapTaslama} />
          <VideoFigure video={videos.icCapIsleme} />
        </div>
        <div className="split">
          <div className="split-media rv-l">
            <Pic
              src="/images/foto-pompa-ic-grup-logo-fon-01-600.webp"
              srcSet="/images/foto-pompa-ic-grup-logo-fon-01-600.webp 600w, /images/foto-pompa-ic-grup-logo-fon-01-800.webp 800w"
              avifSrcSet="/images/foto-pompa-ic-grup-logo-fon-01-800.avif 800w, /images/foto-pompa-ic-grup-logo-fon-01.avif 1600w"
              alt="Logo fonu önünde pompa iç grubu parçaları"
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 480px"
            />
          </div>
          <div className="split-copy rv-r">
            <h3>
              İç grup, <span className="serif-accent">atölyede kurtarılır.</span>
            </h3>
            <p>
              Silindir bloğu, ayna ve kayar plaka yüzeyleri taşlama
              tezgâhlarında ölçüsüne göre işlenir. Mikrometre ile ölçü
              kontrolü her taşlamanın öncesinde ve sonrasında yapılır.
            </p>
            <p>
              Dişli ve şarj pompaları da aynı kapsamda revize edilir.{" "}
              <Link href="/imalat">CNC ve taşlama kabiliyeti</Link> bu işin
              altyapısıdır.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="markalar"
        kicker="Markalar"
        title="Hangi pompalar"
        accent="kabul edilir?"
        lead="Aşağıdaki markalar dahil her marka kabul edilir. Gereken parça tedarik edilir veya atölyede imal edilir."
      >
        <BrandChips slugs={brands} />
        <p className="sec-note">
          Belirtiden ilerlemek için{" "}
          <Link href="/revizyon/ariza-belirtileri">arıza belirtileri rehberi</Link>,
          teslim şekli için{" "}
          <Link href="/revizyon/teslimat">teslimat sayfası</Link> yardımcı olur.
        </p>
      </Section>

      <PhotoBand
        shots={shots.pompa}
        title="Dişli pompa ve"
        accent="gövde"
        lead="Dişli pompa iç grubu, işlenmiş gövde ve atölyedeki gövde sırası."
      />

      <Section id="sss" kicker="SSS" title="Pompa revizyonu" accent="soruları" tone="soft">
        <FaqList items={faqItems} idPrefix="pompa-soru" />
      </Section>

      <RevLinks current="/revizyon/pompa" />
      <QuoteCta />
    </>
  );
}
