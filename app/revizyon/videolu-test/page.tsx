import type { Metadata } from "next";
import Link from "next/link";
import { Gauge } from "@/components/Anim";
import { TestBenchScene } from "@/components/anim/Scenes";
import { FaqList, PageHero, QuoteCta, Section } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { VideoFigure } from "@/components/VideoFigure";
import { videos } from "@/lib/media";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Videolu test kaydı",
  description:
    "BN Hidrovalf Makina’da valf ve pompa testleri yazılı rapor yerine videolu kayıtla belgelenir. Gerçek kayıt örnekleri: 240 bar ve 320 bar valf testleri.",
  path: "/revizyon/videolu-test",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { href: "/revizyon", label: "Revizyon" },
  { label: "Videolu test" },
];

const faqItems = [
  {
    q: "Neden yazılı rapor değil de video?",
    a: "Yazılı rapor, testin yapıldığını yalnızca beyan eder. Videolu kayıt, parçanın tezgâhta çalışır halini ve manometre değerini gösterir; iş sahibi testi kendi gözüyle izler.",
  },
  {
    q: "Kayıtta ne görürüm?",
    a: "Valf veya pompanın test tezgâhına bağlı hali, manometre üzerindeki basınç değeri ve varsa ustanın sesli anlatımı. Bu sayfadaki örnekler gerçek işlerden alınmıştır.",
  },
  {
    q: "240 ve 320 bar her testte uygulanan değerler midir?",
    a: "Hayır. Bu değerler, örnek kayıtlarda manometreden okunan gerçek değerlerdir. Test basıncı, parçanın tipine ve üretici değerlerine göre her işte ayrıca belirlenir.",
  },
  {
    q: "Kaydı nasıl teslim alırım?",
    a: "Kayıt, iş tamamlandığında WhatsApp üzerinden veya tercih edilen kanaldan parçayla birlikte paylaşılır.",
  },
];

const pageVideos = [videos.test240, videos.test320, videos.test320b];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/revizyon/videolu-test"
        crumbs={crumbs}
        faqs={faqItems}
        videoList={pageVideos}
      />
      <PageHero
        kicker="Fark"
        title="Yazılı rapor değil,"
        accent="videolu kayıt"
        lead="Her revizyon, test tezgâhında çekilen bir video ile teslim edilir. Aşağıdaki kayıtlar gerçek işlerden alınmış örneklerdir; ses, siz başlatmadan açılmaz."
        crumbs={crumbs}
      />

      <Section
        id="kayitlar"
        kicker="Gerçek kayıtlar"
        title="Tezgâhtan"
        accent="üç örnek"
        lead="Klipler tıklanınca yüklenir ve oynar; üçü de sesli anlatımlıdır."
      >
        <div className="video-grid video-grid-3">
          {pageVideos.map((v) => (
            <VideoFigure key={v.src} video={v} />
          ))}
        </div>
      </Section>

      <Section
        id="cizimle"
        kicker="Çizimle anlatım"
        title="Test tezgâhı"
        accent="nasıl kurulur?"
        lead="Şematik çizim: güç ünitesinden gelen hat revizyonu biten valfe bağlanır, manometre basıncı gösterir ve tüm test kamerayla kaydedilir."
      >
        <TestBenchScene />
      </Section>

      <Section
        id="degerler"
        kicker="Ölçülen değerler"
        title="Manometrede"
        accent="okunanlar"
        tone="soft"
      >
        <div className="gauge-row gauge-row-2">
          <Gauge bar={240} label="Yanmar valf testi kaydı (15 sn, sesli)" />
          <Gauge bar={320} label="Çok dilimli valf testi kayıtları (sesli)" />
        </div>
        <p className="sec-note">
          Bu değerler yalnızca yukarıdaki kayıtlarda okunan örneklerdir; her
          işin standart test basıncı değildir. Sürecin tamamı için{" "}
          <Link href="/revizyon/surec">süreç sayfasına</Link> bakın.
        </p>
      </Section>

      <Section id="sss" kicker="SSS" title="Videolu test" accent="soruları">
        <FaqList items={faqItems} idPrefix="test-soru" />
      </Section>

      <QuoteCta />
    </>
  );
}
