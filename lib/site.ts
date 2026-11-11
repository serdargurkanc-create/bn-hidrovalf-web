export const site = {
  name: "BN Hidrovalf Makina",
  legalName: "BN Hidrovalf Makina",
  url: "https://bnhidrovalf.com",
  locale: "tr_TR",
  phone: "+90 541 883 53 31",
  phoneTel: "+905418835331",
  email: "bnhidro@gmail.com",
  whatsapp: "https://wa.me/905418835331",
  address: {
    line: "Genç Kardeşler Sanayi Sitesi, İvedik OSB, 2285. Sk. No:40, 06378 Yenimahalle/Ankara, Türkiye",
    street: "Genç Kardeşler Sanayi Sitesi, İvedik OSB, 2285. Sk. No:40",
    postalCode: "06378",
    locality: "Yenimahalle",
    region: "Ankara",
    country: "TR",
    short: "İvedik OSB, Ankara",
  },
  maps: "https://www.google.com/maps/search/?api=1&query=Gen%C3%A7%20Karde%C5%9Fler%20Sanayi%20Sitesi%202285.%20Sk.%20No:40%20Yenimahalle%20Ankara",
  description:
    "BN Hidrovalf Makina, Ankara İvedik OSB’de 20+ yıllık tecrübeye sahip kurumsal çözüm ortağıdır. Her marka iş makinasında valf ve pompa revizyonu, spool imalatı, iç grup yüzey taşlama ve videolu test kaydı.",
  heroTitle: "İş makinalarında valf ve pompa revizyonu.",
} as const;

export const nav = [
  {
    href: "/revizyon",
    label: "Revizyon",
    children: [
      { href: "/revizyon/valf", label: "Valf revizyonu" },
      { href: "/revizyon/pompa", label: "Pompa revizyonu" },
      { href: "/revizyon/surec", label: "Süreç ve teslimat" },
      { href: "/revizyon/videolu-test", label: "Videolu test" },
      { href: "/revizyon/ariza-belirtileri", label: "Arıza belirtileri" },
      { href: "/revizyon/marka", label: "Markalar" },
    ],
  },
  { href: "/imalat", label: "CNC ve özel imalat" },
  { href: "/yedek-parca", label: "Yedek parça" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const whatsappQuote =
  "https://wa.me/905418835331?text=" +
  encodeURIComponent(
    "Merhaba, valf veya pompa revizyonu için teklif almak istiyorum. Makine marka/model ve parça fotoğrafını ileteceğim."
  );

export const journey = [
  {
    id: "01",
    title: "Ön değerlendirme",
    body: "Makine marka ve modeli, valf veya pompa tipi, arıza belirtisi ve fotoğraf ya da kısa video yeterlidir. Form, telefon veya WhatsApp üzerinden iletilir.",
    image: {
      webp: "/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp",
      srcSet: "/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.webp 800w, /images/foto-valf-revizyonu-spool-logo-fon-01-1200.webp 1200w",
      avifSrcSet: "/images/foto-valf-revizyonu-spool-logo-fon-01-600.avif 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.avif 800w, /images/foto-valf-revizyonu-spool-logo-fon-01-1200.avif 1200w",
      w: 1200,
      h: 900,
      alt: "Logo fonu önünde sökülmüş valf gövdeleri ve yaylı spool’lar",
    },
  },
  {
    id: "02",
    title: "Söküm ve tespit",
    body: "Parça sökülür, arıza kaynağı ve yapılacak iş netleştirilir. Valfte spool, pompada iç grup gibi ihtiyaçlar bu aşamada görünür hale gelir.",
    image: {
      webp: "/images/foto-valf-revizyonu-spool-sira-02-600.webp",
      srcSet: "/images/foto-valf-revizyonu-spool-sira-02-600.webp 600w, /images/foto-valf-revizyonu-spool-sira-02-800.webp 800w",
      avifSrcSet: "/images/foto-valf-revizyonu-spool-sira-02-800.avif 800w, /images/foto-valf-revizyonu-spool-sira-02.avif 1600w",
      w: 800,
      h: 600,
      alt: "Tezgâh üzerinde sıra halinde hidrolik valf spool’ları",
    },
  },
  {
    id: "03",
    title: "Yazılı teklif",
    body: "Tespit sonrası yazılı teklif gönderilir. Onayın ardından revizyona başlanır. Süre vaadi verilmez; iş, onaylanan kapsama göre yürür.",
    image: {
      webp: "/images/foto-pompa-govde-mikrometre-01-600.webp",
      srcSet: "/images/foto-pompa-govde-mikrometre-01-600.webp 600w, /images/foto-pompa-govde-mikrometre-01.webp 1600w",
      avifSrcSet: "/images/foto-pompa-govde-mikrometre-01-600.avif 600w, /images/foto-pompa-govde-mikrometre-01-800.avif 800w, /images/foto-pompa-govde-mikrometre-01.avif 1600w",
      w: 1600,
      h: 1200,
      alt: "Pompa gövdesinde mikrometre ile ölçü kontrolü",
    },
  },
  {
    id: "04",
    title: "Revizyon",
    body: "Valfte gerektiğinde spool imalatı ve arıza çözümü; pompada gerektiğinde iç grup yüzey taşlama atölyede yapılır. CNC ve taşlama kabiliyeti bu işi destekler.",
    image: {
      webp: "/images/spool-silindirik-taslama-01-600.webp",
      srcSet: "/images/spool-silindirik-taslama-01-600.webp 600w, /images/spool-silindirik-taslama-01.webp 1200w",
      avifSrcSet: "/images/spool-silindirik-taslama-01-600.avif 600w, /images/spool-silindirik-taslama-01-800.avif 800w, /images/spool-silindirik-taslama-01.avif 1600w",
      w: 576,
      h: 1024,
      alt: "Silindirik taşlama tezgâhında spool işleme",
    },
  },
  {
    id: "05",
    title: "Videolu test ve teslim",
    body: "Valf veya pompa testi yapılır. Sonuç yazılı rapor olarak değil, videolu kayıt olarak verilir ve parça teslim edilir. Gönderim seçenekleri teslimat sayfasında açıklanır.",
    image: {
      webp: "/images/valf-testi-pakens-01-600.webp",
      srcSet: "/images/valf-testi-pakens-01-600.webp 600w, /images/valf-testi-pakens-01-800.webp 800w, /images/valf-testi-pakens-01.webp 1200w",
      avifSrcSet: "/images/valf-testi-pakens-01-800.avif 800w, /images/valf-testi-pakens-01.avif 1600w",
      w: 480,
      h: 848,
      alt: "Pakkens manometreli valf test düzeneği",
    },
  },
] as const;

export const faqs = [
  {
    q: "Ankara’da iş makinası valf revizyonu için kime başvurulur?",
    a: "BN Hidrovalf Makina, İvedik OSB’deki atölyesinde her marka iş makinası valf revizyonu, spool imalatı, arıza çözümü ve valf testi yapar. 20+ yıllık tecrübeye sahip kurumsal bir çözüm ortağıdır. İletişim: +90 541 883 53 31, bnhidro@gmail.com, Genç Kardeşler Sanayi Sitesi, 2285. Sk. No:40, Yenimahalle/Ankara.",
  },
  {
    q: "Ankara, Ostim veya İvedik’te iş makinası pompa revizyonunu kim yapar?",
    a: "BN Hidrovalf Makina, İvedik OSB’de her marka iş makinası pompa revizyonu, iç grup yüzey taşlama ve pompa testi sunar. Ostim–İvedik sanayi havzasındaki filolara ve servislere hizmet verir. Her iş videolu test kaydı ile teslim edilir.",
  },
  {
    q: "Valf veya pompa testi nasıl belgelenir?",
    a: "BN Hidrovalf Makina test sonucunu yazılı rapor olarak değil, videolu kayıt olarak verir. Kayıt, ilgili valf veya pompa işiyle birlikte paylaşılır.",
  },
  {
    q: "Revize edilen valf veya pompa Türkiye’nin başka bir iline nasıl gönderilir?",
    a: "Teslimat kargo ile adrese yapılır. Daha hızlı çözüm gerektiğinde otobüs kurye kullanılır. Teklif formunda teslimat tercihi belirtilebilir.",
  },
  {
    q: "Her marka iş makinası valf ve pompası kabul ediliyor mu?",
    a: "Evet. BN Hidrovalf Makina, her marka iş makinasında valf ve pompa revizyonu yapar. Teklif için makine marka/modeli, parça tipi veya fotoğrafı yeterlidir.",
  },
] as const;

/** Sitemap'e giren (indekslenen) rotalar. Noindex yasal sayfalar bilinçli olarak yoktur. */
export const routes = [
  "/",
  "/revizyon",
  "/revizyon/valf",
  "/revizyon/pompa",
  "/revizyon/surec",
  "/revizyon/videolu-test",
  "/revizyon/ariza-belirtileri",
  "/revizyon/teslimat",
  "/revizyon/marka",
  "/revizyon/marka/komatsu",
  "/revizyon/marka/cat",
  "/revizyon/marka/hitachi",
  "/revizyon/marka/volvo",
  "/revizyon/marka/jcb",
  "/revizyon/marka/hyundai",
  "/revizyon/marka/rexroth",
  "/revizyon/marka/kawasaki",
  "/revizyon/marka/linde",
  "/teklif",
  "/imalat",
  "/yedek-parca",
  "/hakkimizda",
  "/sss",
  "/iletisim",
] as const;
