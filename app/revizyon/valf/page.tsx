import type { Metadata } from "next";
import Link from "next/link";
import { Gauge } from "@/components/Anim";
import {
  BrandChips,
  FaqList,
  PageHero,
  QuoteCta,
  Section,
} from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { VideoFigure } from "@/components/VideoFigure";
import { brands } from "@/lib/brands";
import { videos } from "@/lib/media";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "İş makinası valf revizyonu",
  description:
    "Her marka iş makinası valf revizyonu: spool imalatı, arıza çözümü ve tezgâhta valf testi. Test sonucu videolu kayıttır. BN Hidrovalf Makina, İvedik OSB, Ankara.",
  path: "/revizyon/valf",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { href: "/revizyon", label: "Revizyon" },
  { label: "Valf revizyonu" },
];

const scope = [
  {
    t: "Söküm ve tespit",
    d: "Ana kumanda valfi sökülür; spool, yay, çek valf ve gövde kanalları incelenir. Arıza kaynağı bu aşamada netleşir.",
  },
  {
    t: "Spool imalatı",
    d: "Aşınmış veya sıkışan spool, atölyedeki taşlama ve talaşlı imalat kabiliyetiyle ölçüsüne göre yeniden imal edilebilir.",
  },
  {
    t: "Arıza çözümü",
    d: "İç kaçak, basınç düşmesi, bir fonksiyonun çalışmaması gibi sorunların kaynağı giderilir; yalnızca parça değişimiyle yetinilmez.",
  },
  {
    t: "Tezgâhta valf testi",
    d: "Revizyon sonrası valf test tezgâhına bağlanır. Sonuç yazılı rapor yerine videolu kayıt olarak paylaşılır.",
  },
];

const faqItems = [
  {
    q: "Hangi marka iş makinalarının valfleri revize ediliyor?",
    a: "Her marka kabul edilir. Komatsu, CAT, Hitachi, Volvo, JCB ve Hyundai iş makinalarının ana kumanda valfleri ile Rexroth ve benzeri üretici valf grupları revizyon kapsamındadır. BN Hidrovalf Makina bağımsız bir atölyedir; herhangi bir markanın resmi bayisi değildir.",
  },
  {
    q: "Spool bulunamıyorsa ne oluyor?",
    a: "Spool, atölyedeki taşlama ve talaşlı imalat kabiliyetiyle mevcut parça ölçü alınarak yeniden imal edilebilir. Bu, valf revizyonunun en güçlü yanlarından biridir; parça beklenmeden iş ilerleyebilir.",
  },
  {
    q: "Valf testi nasıl belgeleniyor?",
    a: "Test tezgâhında yapılan kontrol videoya alınır ve kayıt işle birlikte paylaşılır. Örnek kayıtlarda 240 bar ve 320 bar değerleri manometreden okunmaktadır; test basıncı her işte valfin tipine göre belirlenir.",
  },
  {
    q: "Valf revizyonu için ne göndermem gerekiyor?",
    a: "Makine marka ve modeli, valf tipi (biliniyorsa) ve bir fotoğraf yeterlidir. Ön değerlendirme sonrası kargo veya otobüs kurye ile parça atölyeye gönderilir.",
  },
  {
    q: "Revizyon ne kadar sürer?",
    a: "Süre; valfin tipine, hasarın kapsamına ve imalat gereksinimine göre değişir. Süre ve garanti koşulları, tespit sonrası gönderilen yazılı teklifte belirtilir.",
  },
  {
    q: "Revize edilen valf nasıl teslim edilir?",
    a: "Türkiye geneline kargo ile adrese teslim edilir; hızlı seçenek olarak otobüs kurye kullanılır.",
  },
];

const pageVideos = [videos.spoolLogo, videos.spoolTaslama, videos.test240];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/revizyon/valf"
        crumbs={crumbs}
        service={{
          name: "İş makinası valf revizyonu",
          description:
            "Her marka iş makinası valf revizyonu, spool imalatı, arıza çözümü ve videolu valf testi.",
        }}
        faqs={faqItems}
        videoList={pageVideos}
      />
      <PageHero
        kicker="Ana hizmet · Valf"
        title="İş makinası"
        accent="valf revizyonu"
        lead="Her marka iş makinasının ana kumanda valfi revizyona kabul edilir. Kapsamda spool imalatı, arıza çözümü ve tezgâhta videolu valf testi vardır."
        crumbs={crumbs}
        media={<VideoFigure video={videos.spoolLogo} />}
      >
        <ul className="hero-chips" aria-label="Kapsam">
          <li>Spool imalatı</li>
          <li>Arıza çözümü</li>
          <li>Videolu valf testi</li>
        </ul>
      </PageHero>

      <Section
        id="kapsam"
        kicker="Kapsam"
        title="Sökümden"
        accent="videolu teste"
        lead="Valf revizyonu dört ana adımda ilerler. Her adım aynı atölyede, aynı elden yürür."
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
        id="atolyeden"
        kicker="Atölyeden"
        title="Spool imalatı"
        accent="kayıtta"
        lead="Aşağıdaki klipler atölyedeki gerçek işlerden alınmıştır; tıklayınca oynar, otomatik yüklenmez."
        tone="soft"
      >
        <div className="video-grid">
          <VideoFigure video={videos.spoolTaslama} />
          <VideoFigure video={videos.test240} />
        </div>
        <div className="gauge-row">
          <Gauge bar={240} label="Yanmar valf testi kaydındaki örnek değer" />
          <div className="gauge-copy rv">
            <h3>Test basıncı işe göre belirlenir</h3>
            <p>
              Kayıtlardaki 240 bar ve 320 bar, gerçek test videolarında
              manometreden okunan örnek değerlerdir; her işin standardı
              değildir. Testin tamamı videoya alınır ve iş sahibiyle
              paylaşılır.{" "}
              <Link href="/revizyon/videolu-test">
                Videolu test uygulamasını inceleyin
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="markalar"
        kicker="Markalar"
        title="Hangi makinalar"
        accent="kabul edilir?"
        lead="Aşağıdaki markalar dahil her marka iş makinasının valfi revizyona alınır. Resmi bayilik veya yetkili servis ilişkisi yoktur."
      >
        <BrandChips slugs={brands} />
        <p className="sec-note">
          Belirti üzerinden ilerlemek isterseniz{" "}
          <Link href="/revizyon/ariza-belirtileri">arıza belirtileri rehberine</Link>{" "}
          bakabilirsiniz.
        </p>
      </Section>

      <Section id="sss" kicker="SSS" title="Valf revizyonu" accent="soruları" tone="soft">
        <FaqList items={faqItems} idPrefix="valf-soru" />
      </Section>

      <QuoteCta />
    </>
  );
}
