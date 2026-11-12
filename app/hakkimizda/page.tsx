import type { Metadata } from "next";
import Link from "next/link";
import { FlowSvg, Gauge } from "@/components/Anim";
import {
  SceneMontaj,
  SceneOlcum,
  SceneSokum,
  SceneTaslama,
  SceneTest,
} from "@/components/anim/Scenes";
import {
  BrandChips,
  FaqList,
  PageHero,
  QuoteCta,
  Section,
} from "@/components/Inner";
import { Pic } from "@/components/Pic";
import { SchemaLd } from "@/components/Schema";
import { brands } from "@/lib/brands";
import { pageMeta } from "@/lib/meta";
import { asset } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Hakkımızda: İvedik OSB valf atölyesi",
  description:
    "BN Hidrovalf Makina, İvedik OSB’de valf ve pompa revizyon atölyesidir. Spool imalatı, iç grup taşlama, videolu test. 20+ yıl.",
  path: "/hakkimizda",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "Hakkımızda" }];

const facts = [
  { v: "20+", l: "Yıl atölye tecrübesi" },
  { v: "İvedik OSB", l: "Tek adres, Ankara" },
  { v: "Videolu", l: "Test ile teslim" },
  { v: "Parça", l: "Tedarik ve imalat" },
];

const hierarchy = [
  {
    n: "01",
    t: "Valf ve pompa revizyonu",
    d: "Ana iş. Her marka iş makinasında söküm, tespit, spool imalatı veya iç grup yüzey taşlama, montaj ve tezgâhta test.",
    href: "/revizyon",
    cta: "Revizyonu incele",
  },
  {
    n: "02",
    t: "CNC ve özel imalat",
    d: "Ana işi destekler. Spool, silindirik/yüzey taşlama, iç çap ve flanş işleme; numuneden ölçü alınarak üretim.",
    href: "/imalat",
    cta: "İmalatı incele",
  },
  {
    n: "03",
    t: "Yedek parça",
    d: "Destek hizmet. Çevrimiçi stok kataloğu yoktur; parça talebe göre tedarik edilir veya atölyede imal edilir.",
    href: "/yedek-parca",
    cta: "Parça talep et",
  },
];

const ilkeler = [
  {
    t: "Önce tespit, sonra teklif",
    d: "Parça sökülmeden fiyat atılmaz. Teklif, arıza kaynağı netleştikten sonra yazılı verilir; onay gelmeden işe başlanmaz.",
  },
  {
    t: "Kanıt: videolu test",
    d: "Her iş, test tezgâhında çekilen videoyla teslim edilir. Beyan yerine görüntü esastır.",
  },
  {
    t: "İmalat gücü atölyede",
    d: "Spool ve benzeri hassas parçalar beklenmez; taşlama ve talaşlı imalatla burada üretilir.",
  },
  {
    t: "Abartısız dil",
    d: "Kanıtsız üstünlük iddiası kullanılmaz. İş; söküm, ölçüm ve videolu testle anlatılır.",
  },
];

const faqs = [
  {
    q: "BN Hidrovalf Makina nerede?",
    a: `Ankara İvedik OSB, Genç Kardeşler Sanayi Sitesi, 2285. Sk. No:40, 06378 Yenimahalle. Telefon: ${site.phone}. E-posta: ${site.email}. Şube ağı yoktur; tüm işler bu tek atölyede yapılır.`,
  },
  {
    q: "Ana işiniz nedir?",
    a: "Birinci iş valf ve pompa revizyonu, ikinci iş bunu destekleyen CNC ve özel imalat, üçüncüsü ihtiyaca göre yedek parça tedarikidir. Her marka iş makinası kabul edilir.",
  },
  {
    q: "Test sonucu nasıl belgelenir?",
    a: "Yazılı rapor yerine videolu kayıt verilir. Yayınlanan örnek kayıtlarda 240 bar ve 320 bar okunur; bunlar yalnızca o kayıtların gerçek değerleridir, her işin standart basıncı değildir.",
  },
  {
    q: "Türkiye’nin başka illerinden parça gönderilebilir mi?",
    a: "Evet. Parça kargo ile atölyeye ulaştırılır; teslimatta da kargo veya hızlı seçenek olarak otobüs kurye kullanılır. Ayrıntılar teslimat sayfasında ve yazılı teklifte yer alır.",
  },
] as const;

const shots = [
  ["galeri-01-spool", "Valf spool’ları yakın çekim"],
  ["galeri-02-mikrometre", "Pompa gövdesinde mikrometre ile ölçü kontrolü"],
  ["galeri-03-blok", "Tezgâhta valf blokları"],
  ["galeri-04-kayar-plaka", "Pompa kayar plakası"],
  ["galeri-05-disli", "Şarj pompası dişli seti"],
  ["galeri-06-dortlu", "Dört pompa gövdesi tezgâh üzerinde"],
].map(([id, alt]) => ({
  src: `/images/gallery/${id}-600.webp`,
  srcSet: `/images/gallery/${id}-600.webp 600w, /images/gallery/${id}-800.webp 800w, /images/gallery/${id}-1200.webp 1200w`,
  avifSrcSet: `/images/gallery/${id}-600.avif 600w, /images/gallery/${id}-800.avif 800w`,
  alt,
}));

const chapters = [
  {
    n: "01",
    t: "Söküm",
    d: "Valf veya pompa açılır. Kapak, cıvata ve spool dışarı alınır; arıza kaynağı görünür hale gelir.",
    Scene: SceneSokum,
  },
  {
    n: "02",
    t: "Ölçüm",
    d: "Spool, kanal ve iç grup mikrometreyle ölçülür. Teklif bu ölçüden sonra yazılır.",
    Scene: SceneOlcum,
  },
  {
    n: "03",
    t: "Taşlama",
    d: "Aşınan yüzey taşlanır. Gereken spool atölyede imal edilir; parça dışarıda bekletilmez.",
    Scene: SceneTaslama,
  },
  {
    n: "04",
    t: "Montaj",
    d: "Temizlenen parçalar gövdeye geri toplanır. Keçe, yay ve plaka yerinde kontrol edilir.",
    Scene: SceneMontaj,
  },
  {
    n: "05",
    t: "Test",
    d: "Parça tezgâhta çalıştırılır. Sonuç yazılı rapor değil, videolu kayıt olarak paylaşılır.",
    Scene: SceneTest,
  },
] as const;

export default function Page() {
  return (
    <>
      <SchemaLd path="/hakkimizda" crumbs={crumbs} about faqs={faqs} />

      <PageHero
        kicker="Kurumsal çözüm ortağı"
        title="20+ yıldır"
        accent="tezgâh başında"
        lead={`${site.name}, Ankara İvedik OSB’de yerleşik bağımsız bir revizyon atölyesidir. Ana iş: her marka iş makinasında valf ve pompa revizyonu; destek: spool imalatı, iç grup taşlama ve videolu test.`}
        crumbs={crumbs}
        media={
          <Pic
            src="/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp"
            srcSet="/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.webp 800w, /images/foto-valf-revizyonu-spool-logo-fon-01-1200.webp 1200w"
            avifSrcSet="/images/foto-valf-revizyonu-spool-logo-fon-01-600.avif 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.avif 800w, /images/foto-valf-revizyonu-spool-logo-fon-01-1200.avif 1200w"
            alt="Logo fonu önünde sökülmüş valf gövdeleri ve yaylı spool’lar"
            width={1200}
            height={900}
            sizes="(max-width: 900px) 55vw, 480px"
            priority
          />
        }
      />

      <div data-about>
      <script
        defer
        src={asset("/about.js")}
      />
      {/* Özet olgular — GEO / hızlı tarama */}
      <section className="about-facts" aria-label="Kısa olgular">
        <div className="wrap about-facts-grid">
          {facts.map((f, i) => (
            <div className="about-fact" data-rise key={f.l} style={{ ["--d" as string]: `${i * 70}ms` }}>
              <b>
                {f.v === "20+" ? (
                  <span data-count="20" data-suffix="+" suppressHydrationWarning>
                    20+
                  </span>
                ) : (
                  f.v
                )}
              </b>
              <span>{f.l}</span>
            </div>
          ))}
        </div>
      </section>

      <Section id="kim" kicker="Kim bu atölye?" title="İş sırası net:" accent="revizyon önce">
        <div className="prose prose-wide">
          <p>
            {site.name}, Genç Kardeşler Sanayi Sitesi’nde (İvedik OSB, Yenimahalle/Ankara)
            yerleşiktir. Ostim–İvedik sanayi havzasındaki filo, servis ve atölyelere
            hizmet verir; parça Türkiye geneline gönderilir ve geri alınır.
          </p>
          <p>
            Çalışma biçimi yıllar içinde oturmuştur: parça gelir, sökülür, ölçülür;
            teklif yazılı verilir; iş tezgâhta{" "}
            <Link href="/revizyon/videolu-test">videolu testle</Link> kapanır.
            Gönderim seçenekleri <Link href="/revizyon/teslimat">teslimat</Link> sayfasında
            açıklanır.
          </p>
        </div>

        <ol className="hierarchy">
          {hierarchy.map((h, i) => (
            <li key={h.n} className="hierarchy-card" data-rise style={{ ["--d" as string]: `${i * 100}ms` }}>
              <span className="hierarchy-n">{h.n}</span>
              <div>
                <h3>{h.t}</h3>
                <p>{h.d}</p>
                <Link href={h.href} className="text-link">
                  {h.cta} →
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <FlowSvg />
      </Section>

      <Section
        id="surec"
        kicker="Atölyede nasıl ilerler?"
        title="Revizyon"
        accent="beş adımda"
        lead="Kaydırdıkça hat dolar; her adımın şeması görünür alana gelince oynar. Ayrıntılı metin süreç sayfasında."
        tone="soft"
      >
        <div className="about-rail" data-rail>
          <span className="about-rail-track" aria-hidden="true">
            <i data-rail-fill />
          </span>
          <ol>
          {chapters.map((c) => (
            <li key={c.n} className="about-chapter" data-rise>
              <div className="about-chapter-scene">
                <c.Scene live />
              </div>
              <div className="about-chapter-copy">
                <span className="hierarchy-n">{c.n}</span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>
        <p className="about-more">
          Adım adım metin ve teslimat için{" "}
          <Link href="/revizyon/surec">süreç sayfasına</Link> bakın.
        </p>
      </Section>

      <Section
        id="kanit"
        kicker="Kanıt"
        title="Videolu test,"
        accent="yazılı rapor değil"
        lead="Örnek kayıtlarda manometreden okunan değerler yalnızca o işlere aittir; her işin standart basıncı değildir."
      >
        <div className="split">
          <div className="gauge-pair rv-l">
            <Gauge bar={240} label="Yanmar valf testi kaydı (örnek)" delayMs={0} />
            <Gauge bar={320} label="Çok dilimli valf testi (örnek)" delayMs={220} />
          </div>
          <div className="split-copy rv-r">
            <h3>Tezgâhta çekilir, paylaşılır</h3>
            <p>
              Test sonucu PDF rapor olarak değil, videolu kayıt olarak verilir. Kayıt,
              ilgili valf veya pompa işiyle birlikte paylaşılır.
            </p>
            <p>
              <Link href="/revizyon/videolu-test">Videolu test sayfası</Link> — gerçek
              atölye klipleri, tıklanınca yüklenir.
            </p>
          </div>
        </div>
      </Section>

      <Section id="ilkeler" kicker="İlkeler" title="Dört" accent="çalışma ilkesi" tone="soft">
        <div className="scope-grid">
          {ilkeler.map((s, i) => (
            <article
              className="scope-card" data-rise
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
        id="markalar"
        kicker="Kapsam"
        title="İşlenen"
        accent="markalar"
        lead="Listede olmayan markalar için de teklif istenebilir. Gereken parça tedarik edilir veya atölyede imal edilir."
      >
        <div className="about-brand-block rv">
          <BrandChips
            heading="Marka sayfaları"
            slugs={brands.map((b) => ({ slug: b.slug, name: b.name }))}
          />
        </div>
        <p className="about-more">
          Marka bazlı kapsam için <Link href="/revizyon/marka">marka dizinine</Link> gidin.
        </p>
      </Section>

      <Section
        id="atolye"
        kicker="Atölye"
        title="Tezgâhtan"
        accent="kareler"
        lead="Yüz içeren kayıtlar, izin alınmadan yayınlanmaz."
        tone="soft"
      >
        <div className="gallery-grid gallery-grid-3">
          {shots.map((s, i) => (
            <div
              className="gallery-item" data-rise
              key={s.src}
              style={{ ["--d" as string]: `${i * 90}ms` }}
            >
              <Pic
                src={s.src}
                srcSet={s.srcSet}
                avifSrcSet={s.avifSrcSet}
                alt={s.alt}
                width={1200}
                height={900}
                sizes="(max-width: 700px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section id="nap" kicker="Konum ve iletişim" title="Tek adres," accent="İvedik OSB">
        <div className="about-nap">
          <div className="about-nap-card rv">
            <h3>NAP</h3>
            <dl className="nap-list">
              <div>
                <dt>Unvan</dt>
                <dd>{site.legalName}</dd>
              </div>
              <div>
                <dt>Adres</dt>
                <dd>
                  <a href={site.maps} rel="noopener noreferrer" target="_blank">
                    {site.address.line}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Telefon / WhatsApp</dt>
                <dd>
                  <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>E-posta</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
            <p className="nap-note">
              Çalışma saatleri sitede yayınlanmaz; planlama için telefon önerilir.
            </p>
            <div className="page-cta">
              <Link href="/iletisim" className="btn btn-outline">
                İletişim
              </Link>
              <a href={site.maps} className="btn btn-primary" rel="noopener noreferrer" target="_blank">
                Haritada aç
              </a>
            </div>
          </div>
          <div className="about-nap-map">
            <svg className="about-map-svg" viewBox="0 0 480 420" role="img" aria-label="İvedik OSB konum şeması">
              <g className="about-map-grid" aria-hidden="true">
                {Array.from({ length: 8 }, (_, i) => (
                  <line key={`h${i}`} x1="24" x2="456" y1={36 + i * 48} y2={36 + i * 48} />
                ))}
                {Array.from({ length: 9 }, (_, i) => (
                  <line key={`v${i}`} y1="24" y2="396" x1={36 + i * 50} x2={36 + i * 50} />
                ))}
              </g>
              <rect className="about-map-block" x="70" y="70" width="120" height="78" rx="10" />
              <rect className="about-map-block" x="210" y="58" width="150" height="64" rx="10" />
              <rect className="about-map-block" x="86" y="188" width="96" height="90" rx="10" />
              <rect className="about-map-plot" x="214" y="168" width="168" height="112" rx="14" />
              <path
                className="about-map-route"
                data-draw
                d="M48 360 C 90 340, 120 300, 160 286 S 210 250, 250 230"
                fill="none"
              />
              <circle className="about-map-dot" cx="250" cy="224" r="7" />
              <text className="about-map-label" x="228" y="206">
                2285. Sk. No:40
              </text>
              <text className="about-map-sub" x="228" y="312">
                İvedik OSB · Yenimahalle
              </text>
            </svg>
          </div>
        </div>
      </Section>

      <Section id="sss" kicker="SSS" title="Hakkımızda" accent="soruları" tone="soft">
        <FaqList items={faqs} />
      </Section>

      <QuoteCta />
      </div>
    </>
  );
}
