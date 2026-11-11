import type { Metadata } from "next";
import Link from "next/link";
import { Gauge } from "@/components/Anim";
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
  IndependentNotice,
  PageHero,
  QuoteCta,
  Section,
} from "@/components/Inner";
import { Pic } from "@/components/Pic";
import { SchemaLd } from "@/components/Schema";
import { VideoFigure } from "@/components/VideoFigure";
import { brands } from "@/lib/brands";
import { videos } from "@/lib/media";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "İş makinası valf revizyonu — spool, arıza çözümü, videolu test",
  description:
    "Ankara İvedik OSB’de her marka iş makinası valf revizyonu. Söküm, spool imalatı, arıza çözümü ve tezgâhta videolu valf testi. Bağımsız atölye: BN Hidrovalf Makina.",
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
    d: "Ana kumanda valfi sökülür. Spool, yay, çek valf ve gövde kanalları incelenir. Arıza kaynağı bu aşamada netleşir; fiyat bundan sonra yazılır.",
  },
  {
    t: "Spool imalatı",
    d: "Aşınmış veya sıkışan spool, atölyedeki taşlama ve talaşlı imalatla mevcut parçadan ölçü alınarak yeniden yapılabilir.",
  },
  {
    t: "Arıza çözümü",
    d: "İç kaçak, basınç düşmesi veya tek fonksiyonun durması gibi sorunların kaynağı giderilir. İş, yalnızca parça değişimine bırakılmaz.",
  },
  {
    t: "Tezgâhta valf testi",
    d: "Toplanan valf test tezgâhına bağlanır. Sonuç yazılı rapor yerine videolu kayıt olarak iş sahibiyle paylaşılır.",
  },
];

const symptoms = [
  {
    t: "Kol boşta hareket",
    d: "Kumanda bırakıldığında bom, kepçe veya yürüyüş tutmuyorsa kaçak spool veya çek valfte olabilir.",
  },
  {
    t: "Tek fonksiyon durur",
    d: "Diğer hareketler çalışırken bir dilim tepki vermiyorsa o kanalın spool’u, yayı veya tıkacı kontrol edilir.",
  },
  {
    t: "Basınç düşmesi",
    d: "Sistem basıncı istenen değere çıkmıyorsa valf iç kaçağı ile pompa verimi birlikte ayırt edilir.",
  },
  {
    t: "Spool sıkışması",
    d: "Kol sertleşir veya takılı kalır. Çizik, korozyon veya eğilmiş spool ölçüldükten sonra taşlanır ya da imal edilir.",
  },
  {
    t: "Yavaş veya eksik hareket",
    d: "Hareket var ama güçsüzse kanal aşınması ve iç kaçak ilk bakılan yerlerdendir.",
  },
  {
    t: "Dış yağ kaçağı",
    d: "Kapak, tapa veya keçeden gelen yağ, söküm sırasında conta ve yüzeyle birlikte ele alınır.",
  },
];

const chapters = [
  {
    n: "01",
    t: "Söküm",
    d: "Valf açılır. Kapak, cıvata ve spool dışarı alınır; arıza gözle ve ölçüyle ayrılır.",
    Scene: SceneSokum,
  },
  {
    n: "02",
    t: "Ölçüm",
    d: "Spool çapı, kanal ve boşluk mikrometreyle okunur. Yazılı teklif bu ölçüye dayanır.",
    Scene: SceneOlcum,
  },
  {
    n: "03",
    t: "Taşlama ve imalat",
    d: "Kurtarılan yüzey taşlanır. Ölçüsü bozulan spool atölyede yeniden imal edilir.",
    Scene: SceneTaslama,
  },
  {
    n: "04",
    t: "Montaj",
    d: "Temizlenen parçalar gövdeye toplanır. Yay, keçe ve plaka yerinde kontrol edilir.",
    Scene: SceneMontaj,
  },
  {
    n: "05",
    t: "Test",
    d: "Valf tezgâhta çalıştırılır. Manometre görüntüsü videoya alınır ve iş ile birlikte verilir.",
    Scene: SceneTest,
  },
] as const;

const shots = [
  {
    src: "/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp",
    srcSet:
      "/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.webp 800w, /images/foto-valf-revizyonu-spool-logo-fon-01-1200.webp 1200w",
    avif:
      "/images/foto-valf-revizyonu-spool-logo-fon-01-600.avif 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.avif 800w",
    alt: "Sökülmüş valf gövdeleri ve yaylı spool’lar",
    cap: "Sökülmüş gövde ve spool",
  },
  {
    src: "/images/foto-valf-revizyonu-spool-sira-02-600.webp",
    srcSet:
      "/images/foto-valf-revizyonu-spool-sira-02-600.webp 600w, /images/foto-valf-revizyonu-spool-sira-02-800.webp 800w",
    avif: "/images/foto-valf-revizyonu-spool-sira-02-600.avif 600w, /images/foto-valf-revizyonu-spool-sira-02-800.avif 800w",
    alt: "Tezgâh üzerinde sıra halinde hidrolik valf spool’ları",
    cap: "Spool sırası",
  },
  {
    src: "/images/gallery/galeri-01-spool-600.webp",
    srcSet:
      "/images/gallery/galeri-01-spool-600.webp 600w, /images/gallery/galeri-01-spool-800.webp 800w, /images/gallery/galeri-01-spool-1200.webp 1200w",
    avif: "/images/gallery/galeri-01-spool-600.avif 600w, /images/gallery/galeri-01-spool-800.avif 800w",
    alt: "Valf spool’ları yakın çekim",
    cap: "Yakın çekim",
  },
  {
    src: "/images/valf-testi-pakens-01-600.webp",
    srcSet:
      "/images/valf-testi-pakens-01-600.webp 600w, /images/valf-testi-pakens-01-800.webp 800w, /images/valf-testi-pakens-01.webp 1200w",
    avif: "/images/valf-testi-pakens-01-600.avif 600w, /images/valf-testi-pakens-01-800.avif 800w",
    alt: "Pakkens manometreli valf test düzeneği",
    cap: "Test tezgâhı",
  },
];

const starts = [
  {
    n: "01",
    t: "Fotoğraf gönderin",
    d: "Makine marka ve modeli, valf tipi biliniyorsa o bilgi ve bir fotoğraf yeter. Form veya WhatsApp ön değerlendirmeyi açar.",
  },
  {
    n: "02",
    t: "Yazılı teklif",
    d: "Parça sökülüp ölçüldükten sonra süre ve garanti koşulları yazılı verilir. Onay olmadan imalata geçilmez.",
  },
  {
    n: "03",
    t: "Test kaydıyla teslim",
    d: "İş bitince valf tezgâh videosuyla birlikte teslim edilir. Gönderim seçenekleri teslimat sayfasında yazılıdır.",
  },
];

const faqItems = [
  {
    q: "İş makinası valf revizyonu nedir?",
    a: "Ana kumanda valfinin sökülmesi, spool ve kanalların ölçülmesi, gereken taşlama veya spool imalatı, montaj ve tezgâhta test edilmesidir. BN Hidrovalf Makina bu işi Ankara İvedik OSB’deki atölyesinde, her marka iş makinası için yapar.",
  },
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
    a: "Test tezgâhında yapılan kontrol videoya alınır ve kayıt işle birlikte paylaşılır. Örnek kayıtlarda 240 bar ve 320 bar değerleri manometreden okunmaktadır; test basıncı her işte valfin tipine göre belirlenir, bu sayılar standart değildir.",
  },
  {
    q: "Valf revizyonu için ne göndermem gerekiyor?",
    a: "Makine marka ve modeli, valf tipi (biliniyorsa) ve bir fotoğraf yeterlidir. Ön değerlendirme sonrası parça atölyeye ulaştırılır. Adres: Genç Kardeşler Sanayi Sitesi, 2285. Sk. No:40, İvedik OSB, Yenimahalle/Ankara.",
  },
  {
    q: "Revizyon ne kadar sürer?",
    a: "Süre; valfin tipine, hasarın kapsamına ve imalat gereksinimine göre değişir. Süre ve garanti koşulları, tespit sonrası gönderilen yazılı teklifte belirtilir.",
  },
  {
    q: "Revize edilen valf başka bir ile nasıl gider?",
    a: "Türkiye geneline gönderim yapılır. Seçenekler teslimat sayfasında ve yazılı teklifte yer alır. Şube ağı yoktur; iş tek atölyede biter.",
  },
  {
    q: "Valf arızası ile pompa arızası nasıl ayrılır?",
    a: "Tek hareketin bozulması çoğu zaman valf dilimine, genel güç kaybı ise pompaya işaret eder. Kesin ayrım söküm ve ölçümle yapılır. Pompa işi ayrı sayfada anlatılır.",
  },
];

const pageVideos = [videos.spoolLogo, videos.spoolTaslama, videos.test240, videos.test320];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/revizyon/valf"
        crumbs={crumbs}
        service={{
          name: "İş makinası valf revizyonu",
          description:
            "Her marka iş makinası valf revizyonu, spool imalatı, arıza çözümü ve videolu valf testi. Ankara İvedik OSB, BN Hidrovalf Makina.",
        }}
        howTo={{
          name: "İş makinası valfi nasıl revize edilir?",
          description:
            "BN Hidrovalf Makina atölyesinde valf revizyonu beş adımda ilerler: söküm, ölçüm, taşlama veya spool imalatı, montaj ve videolu test.",
          steps: chapters.map((c) => ({ name: c.t, text: c.d })),
        }}
        faqs={faqItems}
        videoList={pageVideos}
      />
      <PageHero
        kicker="Ana hizmet · İvedik OSB"
        title="İş makinası"
        accent="valf revizyonu"
        lead="Her marka iş makinasının ana kumanda valfi bu atölyede revize edilir. Kapsam spool imalatı, arıza çözümü ve tezgâhta videolu testtir. Resmi bayi değiliz; iş tek adreste biter."
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
        id="nedir"
        kicker="Kısa cevap"
        title="Valf revizyonu"
        accent="ne işe yarar?"
        lead="Ana kumanda valfi, iş makinasının hareketlerini yönlendiren parçadır. Aşınınca kaçırır, bir fonksiyonu keser veya basıncı tutmaz. Revizyon, valfi söküp ölçmek, gereken spool’u işlemek ve tezgâhta kanıtlamaktır."
      >
        <div className="scope-grid">
          {scope.map((s) => (
            <article className="scope-card" key={s.t}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="belirti"
        kicker="Ne zaman bakılır?"
        title="Sık görülen"
        accent="valf belirtileri"
        lead="Aşağıdakiler teşhis değildir; atölyede valf sökülünce bakılan işaretlerdir. Kesin ayrım ölçümle yapılır."
        tone="soft"
      >
        <div className="symptom-grid">
          {symptoms.map((s) => (
            <article className="symptom" key={s.t}>
              <strong>{s.t}</strong>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
        <p className="sec-note">
          Belirti listesinin tamamı için{" "}
          <Link href="/revizyon/ariza-belirtileri">arıza belirtileri rehberine</Link> bakın.
          Genel güç kaybında{" "}
          <Link href="/revizyon/pompa">pompa revizyonu</Link> da değerlendirilir.
        </p>
      </Section>

      <Section
        id="adimlar"
        kicker="Atölyede sıra"
        title="Beş adımda"
        accent="valf revizyonu"
        lead="Her adım aynı tezgahta yürür. Şema, görünür alana gelince oynar."
      >
        <div className="about-rail" data-rail>
          <span className="about-rail-track" aria-hidden="true">
            <i data-rail-fill />
          </span>
          <ol>
            {chapters.map((c) => (
              <li key={c.n} className="about-chapter">
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
          Teslimat ve süre metni için <Link href="/revizyon/surec">süreç sayfasına</Link> geçin.
          Spool’un imalat ayrıntısı <Link href="/imalat">CNC ve özel imalat</Link> sayfasındadır.
        </p>
      </Section>

      <Section
        id="kareler"
        kicker="Atölyeden"
        title="Valf tezgâhından"
        accent="kareler"
        lead="Yüz içeren kayıtlar yayınlanmaz. Fotoğraflar bu atölyedeki valf işlerindendir."
        tone="soft"
      >
        <div className="valf-shots">
          {shots.map((s) => (
            <figure className="valf-shot" key={s.src}>
              <Pic
                src={s.src}
                srcSet={s.srcSet}
                avifSrcSet={s.avif}
                alt={s.alt}
                width={1200}
                height={900}
                sizes="(max-width: 700px) 50vw, 25vw"
              />
              <figcaption>{s.cap}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        id="kayit"
        kicker="Kanıt"
        title="Taşlama ve test"
        accent="kayıtta"
        lead="Klipler gerçek işlerdendir. Tıklayınca yüklenir; kendiliğinden oynamaz. Bardaki sayılar yalnızca o kayıtların manometre değeridir."
      >
        <div className="video-grid video-grid-fill">
          <VideoFigure video={videos.spoolTaslama} />
          <VideoFigure video={videos.test240} />
          <VideoFigure video={videos.test320} />
        </div>
        <div className="gauge-row">
          <div className="gauge-pair">
            <Gauge bar={240} label="Yanmar valf testi kaydı (örnek)" />
            <Gauge bar={320} label="Çok dilimli valf testi (örnek)" delayMs={180} />
          </div>
          <div className="gauge-copy">
            <h3>Test basıncı işe göre seçilir</h3>
            <p>
              240 bar ve 320 bar, yayınlanan örnek videolarda okunan değerlerdir.
              Her valfin standart basıncı değildir. Kayıt, ilgili işle birlikte
              paylaşılır.{" "}
              <Link href="/revizyon/videolu-test">Videolu test sayfası</Link> diğer
              örnekleri toplar.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="markalar"
        kicker="Kapsam"
        title="Hangi makinalar"
        accent="kabul edilir?"
        lead="Listede olmayan marka da teklif ister. Adlar, revize edilen parçanın hangi makinaya ait olduğunu söyler."
        tone="soft"
      >
        <IndependentNotice />
        <BrandChips
          heading="Marka sayfaları"
          slugs={brands.map((b) => ({ slug: b.slug, name: b.name }))}
        />
        <p className="sec-note">
          Marka dizini: <Link href="/revizyon/marka">tüm markalar</Link>.
        </p>
      </Section>

      <Section id="basla" kicker="Sipariş" title="İş nasıl" accent="başlar?">
        <div className="start-grid">
          {starts.map((s) => (
            <article className="start-card" key={s.n}>
              <span className="hierarchy-n">{s.n}</span>
              <strong>{s.t}</strong>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
        <dl className="valf-nap">
          <div>
            <dt>Atölye</dt>
            <dd>{site.legalName}</dd>
          </div>
          <div>
            <dt>Adres</dt>
            <dd>
              <a href={site.maps} rel="noopener noreferrer" target="_blank">
                {site.address.street}, {site.address.postalCode} {site.address.locality}/{site.address.region}
              </a>
            </dd>
          </div>
          <div>
            <dt>Telefon</dt>
            <dd>
              <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
            </dd>
          </div>
        </dl>
        <nav className="related-row" aria-label="İlgili sayfalar">
          <Link className="chip" href="/teklif">Teklif formu</Link>
          <Link className="chip" href="/revizyon/teslimat">Teslimat</Link>
          <Link className="chip" href="/revizyon/pompa">Pompa revizyonu</Link>
          <Link className="chip" href="/iletisim">İletişim</Link>
        </nav>
      </Section>

      <Section id="sss" kicker="SSS" title="Valf revizyonu" accent="soruları" tone="soft">
        <FaqList items={faqItems} idPrefix="valf-soru" />
      </Section>

      <QuoteCta note="Makine markası, valf tipi ve bir fotoğraf yeter. Süre ve garanti, tespit sonrası yazılı teklifte belirtilir." />
    </>
  );
}
