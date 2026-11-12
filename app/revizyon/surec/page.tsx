import type { Metadata } from "next";
import Link from "next/link";
import { Timeline } from "@/components/Anim";
import { FaqList, PageHero, QuoteCta, Section } from "@/components/Inner";
import { Pic } from "@/components/Pic";
import { SchemaLd } from "@/components/Schema";
import { VideoFigure } from "@/components/VideoFigure";
import { videos } from "@/lib/media";
import { PhotoBand, RevFacts, RevLinks, shots } from "@/components/revizyon/Frame";
import { pageMeta } from "@/lib/meta";
import { journey } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Revizyon süreci, test ve teslimat",
  description:
    "Fotoğrafla ön değerlendirme, söküm ve tespit, yazılı teklif, revizyon, videolu test ve teslimat. Kargo veya otobüs kurye. BN Hidrovalf Makina süreci adım adım.",
  path: "/revizyon/surec",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { href: "/revizyon", label: "Revizyon" },
  { label: "Süreç" },
];

const stepVideos = [
  videos.govdeHazirlik,
  videos.icCapHazirlik,
  videos.icCapIsleme,
  videos.spoolTaslama,
  videos.test320,
] as const;

const faqItems = [
  {
    q: "Süreç nasıl başlıyor?",
    a: "Makine marka ve modeli, parça tipi, arıza belirtisi ve bir fotoğraf ya da kısa video ile başlar. Bilgiler form, telefon veya WhatsApp üzerinden iletilir; ön değerlendirme ücretsizdir.",
  },
  {
    q: "Parçayı atölyeye nasıl gönderirim?",
    a: "Türkiye’nin her yerinden kargo ile gönderilebilir. Daha hızlı ulaşması gereken parçalar için otobüs kurye kullanılır. Adres: Genç Kardeşler Sanayi Sitesi, İvedik OSB, 2285. Sk. No:40, Yenimahalle/Ankara.",
  },
  {
    q: "Teklif ne zaman veriliyor?",
    a: "Parça söküldükten ve arıza kaynağı netleştikten sonra yazılı teklif gönderilir. Onay gelmeden revizyona başlanmaz. Süre ve garanti koşulları teklifte belirtilir.",
  },
  {
    q: "Test kaydında ne görürüm?",
    a: "Valf veya pompanın test tezgâhındaki çalışması, manometre değerleri ve varsa sesli anlatım. Örnek kayıtlarda 240 bar ve 320 bar değerleri okunmaktadır; basınç, parçanın tipine göre belirlenir.",
  },
  {
    q: "Teslimat nasıl yapılıyor?",
    a: "Revizyonu biten parça, videolu test kaydıyla birlikte kargo ile adrese gönderilir; hızlı seçenek olarak otobüs kurye kullanılır.",
  },
];

export default function Page() {
  const steps = journey.map((s, i) => ({
    id: s.id,
    title: s.title,
    body: s.body,
    media:
      i >= 2 ? (
        <VideoFigure video={stepVideos[i]} />
      ) : (
        <Pic
          src={s.image.webp}
          srcSet={s.image.srcSet}
          avifSrcSet={s.image.avifSrcSet}
          alt={s.image.alt}
          width={s.image.w}
          height={s.image.h}
          sizes="(max-width: 700px) 100vw, 360px"
        />
      ),
  }));

  return (
    <>
      <SchemaLd
        path="/revizyon/surec"
        crumbs={crumbs}
        faqs={faqItems}
        videoList={[videos.icCapIsleme, videos.spoolTaslama, videos.test320]}
      />
      <PageHero
        kicker="Süreç"
        title="Fotoğraftan"
        accent="teslime"
        lead="Revizyon beş adımda ilerler. İlk adım bir fotoğraftır; son adım videolu test kaydıyla teslimdir. Süre vaadi verilmez; iş, onaylanan yazılı teklife göre yürür."
        crumbs={crumbs}
      />
      <RevFacts />

      <Section
        id="adimlar"
        kicker="Adım adım"
        title="Beş adımda"
        accent="revizyon"
      >
        <Timeline steps={steps} />
      </Section>

      <Section
        id="test-ve-teslimat"
        kicker="Test ve teslimat"
        title="Kayıtla biter,"
        accent="kuryeyle döner"
        lead="Test adımının ayrıntısı ve örnek kayıtlar için videolu test sayfasına, gönderim seçenekleri için teslimat sayfasına bakın."
        tone="soft"
      >
        <div className="support-grid">
          <Link href="/revizyon/videolu-test" className="support-card rv">
            <strong>Videolu test</strong>
            <p>Yazılı rapor yerine tezgâhta çekilen gerçek kayıt. Örnekler: 240 ve 320 bar.</p>
          </Link>
          <Link href="/revizyon/teslimat" className="support-card rv" style={{ ["--d" as string]: "90ms" }}>
            <strong>Teslimat</strong>
            <p>Türkiye geneline kargo ile adrese; hızlı seçenek otobüs kurye.</p>
          </Link>
        </div>
      </Section>

      <Section id="sss" kicker="SSS" title="Süreç" accent="soruları">
        <FaqList items={faqItems} idPrefix="surec-soru" />
      </Section>

      <PhotoBand shots={shots.hub} title="Sürecin" accent="kareleri" lead="Söküm, ölçü ve iç grup." />
      <RevLinks current="/revizyon/surec" />
      <QuoteCta />
    </>
  );
}
