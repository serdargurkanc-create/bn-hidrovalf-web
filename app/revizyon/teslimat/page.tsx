import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, PageHero, QuoteCta, Section } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { PhotoBand, RevFacts, RevLinks, VideoBand, shots } from "@/components/revizyon/Frame";
import { videos } from "@/lib/media";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Teslimat: kargo ve otobüs kurye",
  description:
    "Revize edilen valf ve pompalar Türkiye geneline kargo ile adrese teslim edilir; hızlı seçenek otobüs kuryedir. Gönderim adresi ve ambalaj önerileri.",
  path: "/revizyon/teslimat",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { href: "/revizyon", label: "Revizyon" },
  { label: "Teslimat" },
];

const faqItems = [
  {
    q: "Parçayı hangi adrese göndermeliyim?",
    a: "Genç Kardeşler Sanayi Sitesi, İvedik OSB, 2285. Sk. No:40, 06378 Yenimahalle/Ankara. Gönderi öncesinde +90 541 883 53 31 numarasına haber vermeniz, parçanın takibini kolaylaştırır.",
  },
  {
    q: "Otobüs kurye nasıl çalışır?",
    a: "Parça, kalkış ilindeki otogardan Ankara’ya otobüsle gönderilir; aynı gün içinde ulaşması mümkündür. Ankara otogarından teslim alınır. Acil işlerde kargodan hızlı bir seçenektir.",
  },
  {
    q: "Gönderim ücretini kim karşılar?",
    a: "Gönderim düzenlemesi işin kapsamına göre yazılı teklifte belirtilir.",
  },
  {
    q: "Parçayı nasıl paketlemeliyim?",
    a: "Yağ akmasına karşı ağzı bağlı sağlam bir poşet ve darbeye karşı destekli bir koli yeterlidir. Bağlantı ağızlarını temiz bir malzemeyle kapatmanız, taşıma sırasında içine pislik girmesini önler.",
  },
  {
    q: "Türkiye’nin her ilinden gönderim yapılabilir mi?",
    a: "Evet. Kargo tüm illerden çalışır; otobüs kurye, kalkış ilindeki otogar seferlerine bağlıdır. BN Hidrovalf Makina’nın şubesi yoktur; tüm işler Ankara İvedik OSB’deki atölyede yapılır.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/revizyon/teslimat"
        crumbs={crumbs}
        faqs={faqItems}
        service={{
          name: "Valf ve pompa revizyon teslimatı",
          description:
            "Revize edilen valf ve pompalar Türkiye geneline kargo ile adrese teslim edilir. Hızlı seçenek otobüs kuryedir. Tek atölye Ankara İvedik OSB.",
        }}
      />
      <PageHero
        kicker="Teslimat"
        title="Kargoyla gelir,"
        accent="kuryeyle döner"
        lead="Parça Türkiye’nin her yerinden kargo ile atölyeye gönderilir; revizyon bitince videolu test kaydıyla birlikte adresinize kargolanır. Acil işlerde otobüs kurye kullanılır."
        crumbs={crumbs}
        media={
          <div className="ship-figure anim" aria-hidden="true">
            <svg viewBox="0 0 320 260" fill="none">
              <circle cx="160" cy="130" r="118" className="ship-ring" />
              <circle cx="160" cy="130" r="8" className="ship-hub" />
              <text x="160" y="118" textAnchor="middle" className="ship-label">
                Ankara
              </text>
              <text x="160" y="136" textAnchor="middle" className="ship-sub">
                İvedik OSB
              </text>
              <g className="ship-lines">
                <path className="ship-line" d="M160 130 C 120 70, 70 50, 34 44" />
                <path className="ship-line" d="M160 130 C 220 80, 260 66, 290 60" />
                <path className="ship-line" d="M160 130 C 110 180, 66 204, 38 214" />
                <path className="ship-line" d="M160 130 C 216 184, 256 206, 286 216" />
              </g>
              <circle cx="34" cy="44" r="5" className="ship-dot" />
              <circle cx="290" cy="60" r="5" className="ship-dot" />
              <circle cx="38" cy="214" r="5" className="ship-dot" />
              <circle cx="286" cy="216" r="5" className="ship-dot" />
            </svg>
            <p className="ship-caption">
              Tek atölye, Türkiye geneline gönderim. Şube ağı yoktur.
            </p>
          </div>
        }
      />
      <RevFacts />

      <Section
        id="secenekler"
        kicker="İki seçenek"
        title="Kargo ve"
        accent="otobüs kurye"
      >
        <div className="support-grid">
          <div className="support-card rv">
            <strong>Kargo ile adrese teslim</strong>
            <p>
              Standart yol. Parça, revizyon ve videolu test sonrasında
              adresinize kargolanır; takip numarası paylaşılır.
            </p>
          </div>
          <div className="support-card rv" style={{ ["--d" as string]: "90ms" }}>
            <strong>Otobüs kurye (hızlı seçenek)</strong>
            <p>
              Acil işlerde parça otogar üzerinden otobüsle taşınır; uygun
              seferde aynı gün ulaşması mümkündür.
            </p>
          </div>
        </div>
        <p className="sec-note">
          Gönderi öncesi <a href={`tel:${site.phoneTel}`}>{site.phone}</a>{" "}
          numarasına haber verin; süreç <Link href="/revizyon/surec">süreç
          sayfasında</Link> adım adım anlatılır.
        </p>
      </Section>

      <Section id="sss" kicker="SSS" title="Teslimat" accent="soruları" tone="soft">
        <FaqList items={faqItems} idPrefix="teslimat-soru" />
      </Section>

      <PhotoBand shots={shots.teslimat} title="Paket ve" accent="tezgâh" lead="Gönderiye giden parçaların atölyedeki hâli." />
      <VideoBand clips={[videos.govdeHazirlik, videos.test240]} title="Hazırlık ve" accent="test" />
      <RevLinks current="/revizyon/teslimat" />
      <QuoteCta />
    </>
  );
}
