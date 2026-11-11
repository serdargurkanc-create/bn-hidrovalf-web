export const blogAuthor = {
  name: "BN Hidrovalf Atölye",
  role: "Yazar",
  bio: "Ankara İvedik OSB’de valf ve pompa revizyonu yapan atölyenin notları. Metinler söküm, ölçüm ve test tezgâhındaki işe dayanır.",
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: {
    src: string;
    srcSet: string;
    avifSrcSet?: string;
    alt: string;
  };
  related: { href: string; label: string };
  blocks: BlogBlock[];
};

const img = (
  file: string,
  alt: string,
  widths = ["600", "800", "1200"]
): BlogPost["image"] => ({
  src: `${file}-600.webp`,
  srcSet: widths.map((w) => `${file}-${w}.webp ${w}w`).join(", "),
  avifSrcSet: widths
    .filter((w) => w !== "1200")
    .map((w) => `${file}-${w}.avif ${w}w`)
    .join(", "),
  alt,
});

export const posts: BlogPost[] = [
  {
    slug: "valf-revizyonu-ne-zaman-gerekir",
    title: "İş makinası valf revizyonu ne zaman gerekir?",
    excerpt:
      "Kol boşta hareket, tek fonksiyonun durması veya basıncın tutmaması valf kaynaklı olabilir. Kesin karar söküm ve ölçümdedir; bu yazı o eşiği anlatır.",
    category: "Valf",
    date: "2026-10-02",
    image: img(
      "/images/foto-valf-revizyonu-spool-logo-fon-01",
      "Sökülmüş valf gövdeleri ve yaylı spool’lar"
    ),
    related: { href: "/revizyon/valf", label: "Valf revizyonu" },
    blocks: [
      {
        type: "p",
        text: "Ana kumanda valfi, iş makinasının hareketlerini yönlendiren parçadır. Aşınınca kaçırır, bir dilimi keser veya sistem basıncını tutmaz. Her belirti hemen revizyon demek değildir; bazıları ayar, bazıları pompa, bazıları gerçekten spool ve kanaldır.",
      },
      { type: "h2", text: "Atölyede önce bakılan işaretler" },
      {
        type: "ul",
        items: [
          "Kumanda bırakıldığında bom, kepçe veya yürüyüş tutmuyorsa iç kaçak düşünülür.",
          "Diğer hareketler varken tek fonksiyon duruyorsa o dilimin spool’u, yayı veya tıkacı ayrılır.",
          "Kol sertleşiyor veya takılı kalıyorsa çizik, korozyon ya da eğilmiş spool ölçülür.",
          "Dış yağ kaçağı kapak, tapa veya keçeden geliyorsa sökümde yüzeyle birlikte ele alınır.",
        ],
      },
      {
        type: "p",
        text: "Genel güç kaybı, ısınma veya tüm hareketlerin birlikte zayıflaması pompaya da işaret edebilir. Valf ile pompayı fotoğraftan ayırmak mümkün değildir. Ayrım, parça açılıp mikrometreyle okunduktan sonra yazılır.",
      },
      { type: "h2", text: "Revizyon neyi kapsar?" },
      {
        type: "p",
        text: "Söküm, ölçüm, gereken taşlama veya spool imalatı, montaj ve tezgâhta test. Fiyat, parça sökülmeden atılmaz. Süre ve garanti, tespit sonrası yazılı teklifte belirtilir. Test sonucu yazılı rapor değil, videolu kayıttır.",
      },
      {
        type: "p",
        text: "BN Hidrovalf Makina bu işi İvedik OSB’deki tek atölyesinde yapar. Her marka iş makinası kabul edilir; gereken parça tedarik edilir veya atölyede imal edilir.",
      },
    ],
  },
  {
    slug: "spool-imalati-neden-atolyede",
    title: "Spool bulunamıyorsa imalat neden atölyede yapılır?",
    excerpt:
      "Aşınmış spool her zaman rafta bekleyen bir yedek değildir. Ölçü mevcut parçadan alınır; taşlama ve talaşlı imalat aynı çatı altında yürür.",
    category: "İmalat",
    date: "2026-09-18",
    image: img(
      "/images/foto-valf-revizyonu-spool-sira-02",
      "Tezgâh üzerinde sıra halinde hidrolik valf spool’ları",
      ["600", "800"]
    ),
    related: { href: "/imalat", label: "CNC ve özel imalat" },
    blocks: [
      {
        type: "p",
        text: "Valf revizyonunun darboğazı çoğu zaman gövde değil spooldur. Çizilmiş, sıkışan veya ölçüsü kaçmış bir spool, doğru yedek bulunmadan işi bekletir. Atölyede ölçü mevcut parçadan alınır ve spool yeniden işlenir.",
      },
      { type: "h2", text: "Ölçü, raftaki parçadan önce gelir" },
      {
        type: "p",
        text: "Aynı makine markasında bile dilim sayısı ve spool çapı değişir. Parça numarası yoksa veya stok yoksa tahminle mil takılmaz. Mikrometre okuması, kanal boşluğu ve yüzey kararı teklifin içindedir.",
      },
      { type: "h2", text: "Taşlama ile imalat aynı yerde" },
      {
        type: "ul",
        items: [
          "Kurtarılabilecek yüzey taşlanır.",
          "Ölçüsü bozulan spool talaşlı imalatla yeniden yapılır.",
          "İş, valf gövdesinden ayrı bir tedarik zincirine bölünmez.",
        ],
      },
      {
        type: "p",
        text: "Bu kabiliyet valf revizyonunu destekler. Çevrimiçi bir spool kataloğu yoktur. Talep, makine markası, valf tipi ve mümkünse parça fotoğrafıyla başlar.",
      },
    ],
  },
  {
    slug: "videolu-test-kaydi",
    title: "Valf testi neden videolu kayıt olarak verilir?",
    excerpt:
      "Yazılı bir basınç listesi, tezgâhtaki manometrenin yerini tutmaz. Kayıt o işe aittir; 240 ve 320 bar yalnızca örnek videolardaki değerlerdir.",
    category: "Test",
    date: "2026-08-21",
    image: img(
      "/images/valf-testi-pakens-01",
      "Pakkens manometreli valf test düzeneği",
      ["600", "800"]
    ),
    related: { href: "/revizyon/videolu-test", label: "Videolu test" },
    blocks: [
      {
        type: "p",
        text: "Revizyon montajla bitmez. Valf test tezgâhına bağlanır, çalıştırılır ve manometre görüntüsü kayda alınır. Kayıt, ilgili işle birlikte paylaşılır. Amaç, ‘test edildi’ cümlesinin yerine görüntüyü koymaktır.",
      },
      { type: "h2", text: "Örnek bar değerleri standart değildir" },
      {
        type: "p",
        text: "Sitede yayınlanan örneklerde 240 bar ve 320 bar okunur. Bunlar o kayıtların gerçek manometre değerleridir. Her valfin test basıncı tipi ve işe göre seçilir; bu sayılar tüm işlerin standardı diye okunmaz.",
      },
      { type: "h2", text: "Kayıt neyi gösterir, neyi göstermez?" },
      {
        type: "ul",
        items: [
          "O valfin tezgâhtaki davranışını ve okunan basıncı gösterir.",
          "Makinenin sahadaki tüm arızasını tek başına kapatmaz.",
          "Garanti süresinin yerine geçmez; garanti yazılı teklifte yazılır.",
        ],
      },
    ],
  },
  {
    slug: "pompa-ic-grup-yuzey-taslama",
    title: "Pompa iç grup yüzey taşlama neyi düzeltir?",
    excerpt:
      "Pistonlu pompada silindir bloğu, ayna ve kayar plaka çizilince verim düşer. Yüzey taşlama, yeni iç grup beklemeden bu yüzeyleri ölçüye çekmeyi hedefler.",
    category: "Pompa",
    date: "2026-07-09",
    image: img(
      "/images/gallery/galeri-02-mikrometre",
      "Pompa gövdesinde mikrometre ile ölçü kontrolü"
    ),
    related: { href: "/revizyon/pompa", label: "Pompa revizyonu" },
    blocks: [
      {
        type: "p",
        text: "İş makinası pompasında güç kaybı, ısınma veya gürültü iç grup aşınmasından gelebilir. Pistonlu pompalarda silindir bloğu, ayna ve kayar plaka zamanla çizilir. İlk iş söküp bu yüzeyleri ölçmektir.",
      },
      { type: "h2", text: "Taşlama ne zaman anlamlıdır?" },
      {
        type: "p",
        text: "Çizik yüzey, ölçü hâlâ kurtarılabilir aralıktaysa taşlanır. Derin hasar veya çatlak varsa parça değiştirilir ya da iş teklif dışı bırakılır. Karar, fotoğraftan değil mikrometreden çıkar.",
      },
      { type: "h2", text: "Valf işinden farkı" },
      {
        type: "p",
        text: "Valfte sorun çoğu zaman tek dilimdedir. Pompada verim düşüşü tüm hareketlere yayılır. İkisi aynı atölyede yapılır ama aynı tezgâh ve aynı parça listesi değildir. Şüphede her iki parça da söylenebilir.",
      },
    ],
  },
  {
    slug: "valf-mi-pompa-mi",
    title: "Arıza valfte mi, pompada mı?",
    excerpt:
      "Tek hareketin bozulması valf dilimine, tüm sistemin zayıflaması pompaya daha yakındır. Bu ayrım sahada ipucudur; teşhis atölyede sökümle biter.",
    category: "Arıza",
    date: "2026-06-12",
    image: img("/images/gallery/galeri-03-blok", "Tezgâhta valf blokları"),
    related: { href: "/revizyon/ariza-belirtileri", label: "Arıza belirtileri" },
    blocks: [
      {
        type: "p",
        text: "Operatör çoğu zaman ‘hidrolik gitti’ der. Atölye ise hangi parçanın gittiğini ayırmak zorundadır. Yanlış parça sökülürse süre uzar. Doğru ilk soru, arızanın tek fonksiyonda mı yoksa makinenin genelinde mi olduğudur.",
      },
      { type: "h2", text: "Valfe daha yakın duranlar" },
      {
        type: "ul",
        items: [
          "Yalnızca bir kol veya bir yönde sorun vardır.",
          "Kumanda bırakılınca o hareket kaçırır.",
          "Kol serttir veya spool takılır.",
        ],
      },
      { type: "h2", text: "Pompaya daha yakın duranlar" },
      {
        type: "ul",
        items: [
          "Birden fazla hareket birlikte güçsüzdür.",
          "Sistem geç ısınır veya pompa tarafında ses artar.",
          "Basınç hiçbir dilimde istenen değere çıkmaz.",
        ],
      },
      {
        type: "p",
        text: "Bu liste teşhis değildir. Aynı makinede valf kaçağı ile pompa verim kaybı birlikte de bulunur. Fotoğraf ve belirti ön değerlendirme içindir; iş, sökümden sonra netleşir.",
      },
    ],
  },
  {
    slug: "parca-atolyeye-nasil-ulasir",
    title: "Valf veya pompa atölyeye nasıl ulaşır?",
    excerpt:
      "Tek adres İvedik OSB’dir. İş, fotoğraf ve makine bilgisiyle başlar; parça bu atölyeye gelir, test kaydıyla birlikte geri döner.",
    category: "Atölye",
    date: "2026-05-04",
    image: img("/images/gallery/galeri-06-dortlu", "Dört pompa gövdesi tezgâh üzerinde"),
    related: { href: "/revizyon/teslimat", label: "Teslimat" },
    blocks: [
      {
        type: "p",
        text: "BN Hidrovalf Makina’nın şubesi yoktur. Tüm söküm, imalat ve test Genç Kardeşler Sanayi Sitesi, 2285. Sk. No:40, İvedik OSB, Yenimahalle adresinde yapılır. Türkiye’nin başka bir ilinden gelen parça da aynı tezgâha iner.",
      },
      { type: "h2", text: "İşin sırası" },
      {
        type: "ul",
        items: [
          "Makine markası, parça tipi ve bir fotoğraf gönderilir.",
          "Parça atölyeye ulaşınca sökülür ve ölçülür.",
          "Süre ve garanti yazılı teklifte belirtilir; onaydan önce imalata geçilmez.",
          "Biten iş, videolu test kaydıyla birlikte teslim edilir.",
        ],
      },
      {
        type: "p",
        text: "Gönderim seçenekleri teslimat sayfasında ve yazılı teklifte yer alır. Göndermeden önce aramak, parçanın takibini kolaylaştırır. Çalışma saati sitede yayınlanmaz; gün ve saat için telefon kullanılır.",
      },
    ],
  },
];

const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

export function formatBlogDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[(m || 1) - 1]} ${y}`;
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function nextPost(slug: string) {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) return posts[0];
  return posts[(i + 1) % posts.length];
}
