/**
 * İzinli, kırpılmış atölye videoları. 02, 08, 13 kullanılamaz;
 * 12 ve 15 (yüz görünür) izinsizdir ve pakette yoktur.
 * 240 ve 320 bar yalnız bu kayıtlardaki gerçek test değerleridir.
 */
export type Video = {
  src: string;
  poster: string;
  w: number;
  h: number;
  /** ISO 8601 süre (VideoObject). */
  duration: string;
  sound: boolean;
  title: string;
  desc: string;
};

export const videos = {
  test240: {
    src: "/videos/video-01-valf-testi-240bar-15s.mp4",
    poster: "/images/posters/video-01-valf-testi-240bar-15s-poster.webp",
    w: 402,
    h: 720,
    duration: "PT15S",
    sound: true,
    title: "Valf testi — 240 bar kayıt örneği",
    desc: "Yanmar valf testi: Pakkens manometrede 240 bar okunan, sesli anlatımlı gerçek test kaydı örneği.",
  },
  test320: {
    src: "/videos/video-14-valf-testi-320bar.mp4",
    poster: "/images/posters/video-14-valf-testi-320bar-poster.webp",
    w: 406,
    h: 720,
    duration: "PT6S",
    sound: true,
    title: "Valf testi — 320 bar kayıt örneği",
    desc: "Çok dilimli valf testi: manometrede 320 bar okunan, sesli anlatımlı gerçek test kaydı örneği.",
  },
  test320b: {
    src: "/videos/video-16-valf-testi-320bar-18s.mp4",
    poster: "/images/posters/video-16-valf-testi-320bar-18s-poster.webp",
    w: 408,
    h: 720,
    duration: "PT18S",
    sound: true,
    title: "Valf testi — 320 bar, uzun kayıt",
    desc: "320 bar valf testinin sesli anlatımlı, daha uzun kayıt örneği.",
  },
  spoolLogo: {
    src: "/videos/video-03-valf-spool-logo-8s.mp4",
    poster: "/images/posters/video-03-valf-spool-logo-8s-poster.webp",
    w: 406,
    h: 720,
    duration: "PT8S",
    sound: false,
    title: "Temizlenmiş valf ve spool",
    desc: "Revizyonu tamamlanan valf gövdesi ve spool’ların atölyedeki görüntüsü.",
  },
  spoolTaslama: {
    src: "/videos/video-04-spool-taslama-10s.mp4",
    poster: "/images/posters/video-04-spool-taslama-10s-poster.webp",
    w: 406,
    h: 720,
    duration: "PT10S",
    sound: false,
    title: "Spool dış çap taşlama",
    desc: "Silindirik taşlama tezgâhında spool dış çap taşlama işlemi.",
  },
  govdeHazirlik: {
    src: "/videos/video-05-govde-hazirlik-10s.mp4",
    poster: "/images/posters/video-05-govde-hazirlik-10s-poster.webp",
    w: 402,
    h: 720,
    duration: "PT10S",
    sound: false,
    title: "Gövde işleme hazırlığı",
    desc: "Pompa gövdesinin işleme öncesi tezgâha bağlanması.",
  },
  icCapHazirlik: {
    src: "/videos/video-06-ic-cap-hazirlik-10s.mp4",
    poster: "/images/posters/video-06-ic-cap-hazirlik-10s-poster.webp",
    w: 402,
    h: 720,
    duration: "PT10S",
    sound: false,
    title: "İç çap hazırlığı",
    desc: "İç çap işleme öncesi hazırlık ve ayar.",
  },
  icCapIsleme: {
    src: "/videos/video-07-ic-cap-isleme.mp4",
    poster: "/images/posters/video-07-ic-cap-isleme-poster.webp",
    w: 406,
    h: 720,
    duration: "PT11S",
    sound: false,
    title: "İç çap işleme",
    desc: "Tezgâhta iç çap işleme operasyonu.",
  },
  flansIsleme: {
    src: "/videos/video-09-flans-isleme.mp4",
    poster: "/images/posters/video-09-flans-isleme-poster.webp",
    w: 408,
    h: 720,
    duration: "PT8S",
    sound: false,
    title: "Flanş yüzey işleme",
    desc: "Flanş yüzeyinin tezgâhta işlenmesi.",
  },
  isleme: {
    src: "/videos/video-10-ilk-8s.mp4",
    poster: "/images/posters/video-10-ilk-8s-poster.webp",
    w: 406,
    h: 720,
    duration: "PT8S",
    sound: false,
    title: "Tezgâhta işleme",
    desc: "Atölyede talaşlı imalat operasyonundan bir kesit.",
  },
  icCapTaslama: {
    src: "/videos/video-11-hero-ic-cap-taslama-8s.mp4",
    poster: "/images/posters/video-11-hero-ic-cap-taslama-8s-poster.webp",
    w: 406,
    h: 720,
    duration: "PT8S",
    sound: false,
    title: "İç çap / yüzey taşlama",
    desc: "İç çap yüzey taşlama; kıvılcımlı taşlama görüntüsü.",
  },
} as const satisfies Record<string, Video>;

export type VideoKey = keyof typeof videos;
