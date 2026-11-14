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
  /** Belge başlığı 60 karakteri aşmasın diye; görünür H1 `title` kalır. */
  seoTitle?: string;
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
  widths = ["600", "800", "1200"],
  avifWidths?: string[]
): BlogPost["image"] => ({
  src: `${file}-600.webp`,
  srcSet: widths.map((w) => `${file}-${w}.webp ${w}w`).join(", "),
  avifSrcSet: (avifWidths ?? widths.filter((w) => w !== "1200"))
    .map((w) => `${file}-${w}.avif ${w}w`)
    .join(", "),
  alt,
});

const full = ["600", "800", "1200"];

export const posts: BlogPost[] = [
  {
    slug: "yazili-teklif-neye-dayanir",
    title: "Yazılı teklif neden sökümden sonra gelir?",
    seoTitle: "Yazılı teklif neye dayanır?",
    excerpt:
      "Fiyat, kapak açılmadan ve mikrometre okunmadan yazılmaz. Teklif; ölçü, yapılacak iş, süre ve garantiyi aynı kâğıtta toplar.",
    category: "Atölye",
    date: "2026-11-12",
    image: img(
      "/images/foto-pompa-govde-plaka-01",
      "Açık pompa gövdesi ve yanındaki yuvarlak port plakası.",
      full,
      full
    ),
    related: { href: "/teklif", label: "Teklif formu" },
    blocks: [
      {
        type: "p",
        text: "İlk mesajda makine markası, parça tipi ve bir fotoğraf yeter. Bu, işin atölyeye alınacağını gösterir; fiyatın kendisi değildir. Kapak dururken spool çapı, kanal boşluğu veya iç grup çizikleri görünmez. Yazılı teklif, parça sökülüp ölçüldükten sonra çıkar.",
      },
      { type: "h2", text: "Teklifte ne yazılır?" },
      {
        type: "ul",
        items: [
          "Hangi parçanın söküldüğü ve ölçülen yerler.",
          "Taşlanacak yüzey, imal edilecek spool veya değişecek parça.",
          "Süre ve garanti. İkisi de bu metindedir; sitede sabit bir gün sayısı yoktur.",
          "Onaydan önce imalata geçilmez.",
        ],
      },
      { type: "h2", text: "Fotoğraf ne işe yarar?" },
      {
        type: "p",
        text: "Fotoğraf, valf ile pompayı ve kabaca işin büyüklüğünü ayırt eder. [[/revizyon/ariza-belirtileri|Arıza belirtileri]] ile birlikte okununca ön değerlendirme hızlanır. Kesin ayrım yine tezgahta yapılır. Genel güç kaybı pompaya, tek fonksiyonun durması valf dilimine daha yakındır; ikisi bir arada da olabilir.",
      },
      { type: "h2", text: "Onaydan sonra sıra" },
      {
        type: "p",
        text: "Onaylanan kapsam [[/revizyon/surec|süreç]] sayfasındaki sırayla yürür: işleme veya taşlama, montaj, sonra tezgâhta kayıt. Test sonucu yazılı bir basınç listesi değil, o işe ait videodur. Gönderim seçenekleri ayrıca [[/revizyon/teslimat|teslimat]] sayfasında durur.",
      },
      { type: "h2", text: "Nereden başlanır?" },
      {
        type: "p",
        text: "Form, telefon veya WhatsApp aynı kapıya çıkar. Adres tektir: Genç Kardeşler Sanayi Sitesi, 2285. Sk. No:40, İvedik OSB, Yenimahalle/Ankara. Çalışma saati sitede yayınlanmaz; gün ve saat için telefon kullanılır.",
      },
    ],
  },
  {
    slug: "montajdan-sonra-test",
    title: "Montaj bittiğinde iş neden hâlâ açık sayılır?",
    seoTitle: "Montajdan sonra test neden ayrı?",
    excerpt:
      "Yay, keçe ve plaka yerinde diye valf teslim edilmez. Parça tezgâhta çalıştırılır; manometre görüntüsü kayda alınır ve iş ile birlikte verilir.",
    category: "Test",
    date: "2026-11-05",
    image: img(
      "/images/foto-valf-govde-yayli-spool-01",
      "Ayakta duran hidrolik valf gövdesi, takılı yaylı spool ve iki flanş plakası. İvedik OSB atölyesi.",
      full,
      full
    ),
    related: { href: "/revizyon/videolu-test", label: "Videolu test" },
    blocks: [
      {
        type: "p",
        text: "Montaj, temizlenen parçaların gövdeye toplanmasıdır. Yay, keçe ve plaka yerinde kontrol edilir. Bu adım gerekli ama yeterli değildir. Valf, tezgâha bağlanıp çalışmadan teslim edilmez.",
      },
      { type: "h2", text: "Tezgâh neyi gösterir?" },
      {
        type: "p",
        text: "Kayıt, o valfin o andaki davranışını ve manometrede okunan değeri gösterir. Sitedeki 240 bar ve 320 bar örnekleri yalnızca yayınlanan kayıtların değerleridir. Her işin test basıncı, valfin tipine göre seçilir; bu sayılar standart diye okunmaz. Ayrıntı [[/blog/videolu-test-kaydi|videolu test kaydı]] yazısındadır.",
      },
      { type: "h2", text: "Kayıt neyin yerine geçmez?" },
      {
        type: "ul",
        items: [
          "Makinenin sahadaki tüm arızasını tek başına kapatmaz.",
          "Garanti cümlesinin yerine geçmez; garanti yazılı teklifte yazılır.",
          "Pompa verimini ölçmez. Şüphe varsa [[/revizyon/pompa|pompa revizyonu]] ayrı değerlendirilir.",
        ],
      },
      { type: "h2", text: "Montajın kendi kontrolü" },
      {
        type: "p",
        text: "Spool gövdeye geri otururken kanal yönü, yay ve kapak sırası gözle de bakılır. Takılı yaylı bir gövde, söküm masasındaki dağınık parçadan farklı bir andır. [[/revizyon/valf|Valf revizyonu]] sayfasındaki sıra bu yüzden beş adımdır: söküm, ölçüm, taşlama veya imalat, montaj, test.",
      },
      { type: "h2", text: "Teslim" },
      {
        type: "p",
        text: "Kayıt, parça ile birlikte verilir. Parça aynı atölyeden çıkar. Gönderim, [[/revizyon/teslimat|teslimat]] seçenekleriyle ve teklifte yazılan yolla olur.",
      },
    ],
  },
  {
    slug: "marka-adi-olcuyu-degistirmez",
    title: "Makine markası, spool ölçüsünün yerine geçer mi?",
    seoTitle: "Marka adı ölçüyü değiştirmez",
    excerpt:
      "Komatsu, CAT veya Hitachi yazmak işi başlatır. Spool çapı, kanal ve boşluk yine mikrometreyle okunur; marka adı bu ölçünün yerine konmaz.",
    category: "Marka",
    date: "2026-10-28",
    image: img(
      "/images/foto-ana-kontrol-valfi-01",
      "Sarı boyalı iş makinesi ana kontrol valfi, çok dilimli hidrolik blok",
      full,
      full
    ),
    related: { href: "/revizyon/marka", label: "Markalar" },
    blocks: [
      {
        type: "p",
        text: "Atölye her marka iş makinasının valf ve pompasını kabul eder. Marka, parçanın hangi aileden geldiğini söyler. Aynı markada bile dilim sayısı, spool çapı ve pompa iç grubu değişir. Bu yüzden isim, ölçü formunun ilk satırıdır; son satırı değildir.",
      },
      { type: "h2", text: "Marka sayfası ne anlatır?" },
      {
        type: "p",
        text: "[[/revizyon/marka|Marka sayfaları]] işin kapsamını gösterir: valf revizyonu, pompa revizyonu, gereken spool imalatı ve videolu test. Sayfa, o markanın resmi bir yetki belgesi değildir. Parça bu atölyede sökülür, ölçülür ve tezgâhta kanıtlanır.",
      },
      { type: "h2", text: "Boyadan marka okunmaz" },
      {
        type: "p",
        text: "Sarı bir valf gövdesi tek başına bir marka kanıtı değildir. Boya, atölyede veya sahada yenilenmiş olabilir. Etiket, plaka veya makine bilgisi yoksa tahmin yazılmaz. Fotoğrafta okunamayan döküm numarası da metne taşınmaz.",
      },
      { type: "h2", text: "Stok yoksa ne olur?" },
      {
        type: "p",
        text: "Parça numarası yoksa veya spool rafta yoksa mil uydurulmaz. Ölçü mevcut parçadan alınır. Kurtarılan yüzey taşlanır; ölçüsü bozulan spool [[/imalat|atölyede imal]] edilir. [[/yedek-parca|Yedek parça]] talebi de aynı kapıdan, fotoğraf ve makine bilgisiyle başlar.",
      },
      { type: "h2", text: "Hangi bilgi yeter?" },
      {
        type: "ul",
        items: [
          "Makine markası ve modeli.",
          "Valf veya pompa olduğu.",
          "Mümkünse parça fotoğrafı ve arıza belirtisi.",
        ],
      },
    ],
  },
  {
    slug: "valf-ignesi-ne-zaman-degisir",
    title: "Valf iğnesi çizilince gövde de mi açılır?",
    seoTitle: "Valf iğnesi ne zaman değişir?",
    excerpt:
      "Konik iğne ve yuvası kaçırıyorsa küçük parça tek başına hüküm vermez. Gövde açılır, iğne ve oturma yüzeyi birlikte ölçülür.",
    category: "Valf",
    date: "2026-10-20",
    image: img(
      "/images/foto-valf-igne-cift-01",
      "Çizik tezgahta iki konik hidrolik valf iğnesi ve küçük pim.",
      full,
      full
    ),
    related: { href: "/revizyon/valf", label: "Valf revizyonu" },
    blocks: [
      {
        type: "p",
        text: "Bazı valflerde kaçak, uzun spool’dan önce konik iğnede ve oturduğu yuvada toplanır. İğne tezgahta küçük durur. İşin kendisi küçük sayılmaz: yuva çizildiyse yalnız iğneyi değiştirmek kaçağı kapatmaz.",
      },
      { type: "h2", text: "Ne zaman iğneye bakılır?" },
      {
        type: "ul",
        items: [
          "Basınç tutmuyor ama spool kanalları ilk bakışta düzgün görünüyorsa.",
          "İğne ucu ezilmiş, çizilmiş veya yuvayla aynı hizada oturmuyorsa.",
          "Küçük bir pim veya yay eksikse; eksik parça montajda ayrıca kontrol edilir.",
        ],
      },
      { type: "h2", text: "Ölçü yine gövdeyle birlikte" },
      {
        type: "p",
        text: "İğne masaya konduğunda gövde de açıktır. Oturma yüzeyi gözle ve ölçüyle ayrılır. Kurtarılan yüzey işlenir; kurtarılamayan parça değiştirilir veya teklif dışı bırakılır. Karar fotoğraftaki çizikten değil, tezgahtaki ölçüden yazılır. Spool tarafı ayrıdır; onu [[/blog/spool-olcusu-nasil-okunur|spool ölçüsü]] yazısı anlatır.",
      },
      { type: "h2", text: "Tek başına katalog parçası değil" },
      {
        type: "p",
        text: "İğne, çevrimiçi bir listeden ‘şu milimetre’ diye seçilip gönderilmez. [[/yedek-parca|Yedek parça]] gerekiyorsa ölçü mevcut parçadan alınır. Gövde revizyonu ile parça tedariki aynı adreste birleşir.",
      },
      { type: "h2", text: "İşin kapanışı" },
      {
        type: "p",
        text: "İğne yerine oturduktan sonra valf yine tezgâhta çalıştırılır. Kayıt, [[/revizyon/videolu-test|videolu test]] ile işe eklenir. Küçük parça, test adımını kaldırmaz.",
      },
    ],
  },
  {
    slug: "kayar-plaka-cizigi",
    title: "Kayar plakadaki çizik verimi neden düşürür?",
    seoTitle: "Kayar plaka çizikleri",
    excerpt:
      "Pistonlu pompada kayar plaka, piston pabucuyla sürekli sürtünür. Çizik derinleşince kaçak artar. Taşlama, ölçü kurtarılabiliyorsa bu yüzeyi düzeltmeyi hedefler.",
    category: "Pompa",
    date: "2026-10-14",
    image: img(
      "/images/gallery/galeri-04-kayar-plaka",
      "Pompa kayar plakası"
    ),
    related: { href: "/revizyon/pompa", label: "Pompa revizyonu" },
    blocks: [
      {
        type: "p",
        text: "Kayar plaka, piston pabuçlarının üzerinde çalıştığı yüzeydir. Ayna düzgünken yağ filmi kaçırmaz. Çizik, yanık veya dalgalanma bu filmi bozar. Belirti çoğu zaman tek bir kolda değil, makinenin genelinde güç kaybı ve ısınmadır.",
      },
      { type: "h2", text: "Çizik her zaman taşlanır mı?" },
      {
        type: "p",
        text: "Hayır. Yüzey, ölçü hâlâ kurtarılabilir aralıktaysa taşlanır. Derin kanal, çatlak veya eğilme varsa parça değiştirilir ya da iş teklif dışı kalır. Bu cümle fotoğrafa bakarak kurulmaz. Plaka sökülür, mikrometre ve yüzey kararı yazılır. Aynı mantık [[/blog/pompa-ic-grup-yuzey-taslama|iç grup yüzey taşlama]] yazısında silindir bloğu için de geçerlidir.",
      },
      { type: "h2", text: "Tek parça gibi düşünülmez" },
      {
        type: "ul",
        items: [
          "Kayar plaka, piston pabucu ve silindir bloğu birlikte okunur.",
          "Valf plakası ayrı bir yüzeydir; böbrek kanalları ayrıca bakılır.",
          "Biri çizik, diğeri düzgünse teklif ikisini aynı kefeye koymaz.",
        ],
      },
      { type: "h2", text: "Valf kaçağından ayrımı" },
      {
        type: "p",
        text: "Kayar plaka kaçağı hareketlerin geneline yayılır. Tek dilimin kaçırması daha çok [[/revizyon/valf|valf]] tarafındadır. İkisi aynı makinede birlikte de bulunur. [[/blog/valf-mi-pompa-mi|Valf mi, pompa mı]] yazısı bu ilk ayrımı anlatır; kesin sonuç sökümdedir.",
      },
      { type: "h2", text: "Sonra kayıt" },
      {
        type: "p",
        text: "Taşlanan plaka gövdeye toplanır ve pompa tezgâhta çalıştırılır. Sonuç, yazılı bir tablo değil, o işin videolu kaydıdır.",
      },
    ],
  },
  {
    slug: "silindir-bloku-ve-valf-plakasi",
    title: "Silindir bloğu ile valf plakası neden yan yana durur?",
    seoTitle: "Silindir bloğu ve valf plakası",
    excerpt:
      "Piston pompanın silindir bloğu ve pirinç valf plakası aynı eksendedir. Biri çizilince diğeri de ölçülür; yüzeyler ayrı teklif satırı olabilir.",
    category: "Pompa",
    date: "2026-10-08",
    image: img(
      "/images/foto-silindir-blok-valf-plakasi-01",
      "Pirinç valf plakası ve yanında piston pompa silindir bloğu",
      full,
      full
    ),
    related: { href: "/imalat", label: "CNC ve özel imalat" },
    blocks: [
      {
        type: "p",
        text: "Pistonlu pompada silindir bloğu, pistonların içinde gezdiği parçadır. Valf plakası ise yağın böbrek kanallardan geçtiği karşı yüzeydir. İkisi tezgahta yan yana durduğunda iş bitmiş sayılmaz; ikisi de ölçülmek için yan yana konmuştur.",
      },
      { type: "h2", text: "Hangi iz ne anlatır?" },
      {
        type: "ul",
        items: [
          "Blok aynasında dairesel çizik, piston yatağının sürttüğünü gösterir.",
          "Valf plakasında kanal kenarı yenmişse kaçak o yüzeyden de gelir.",
          "İkisi birden bozuksa yalnız birini taşlamak verimi geri getirmeyebilir.",
        ],
      },
      { type: "h2", text: "Torna ve taşlama" },
      {
        type: "p",
        text: "Blok, ölçüye göre torna veya taşlama tezgâhına gider. Bu, şema değil; aynı atölyedeki tezgahtır. [[/imalat|CNC ve özel imalat]] sayfası silindir bloğunun aynada durduğu kareyi gösterir. Valf spool’u başka bir parçadır ve başka bir tezgahta işlenir.",
      },
      { type: "h2", text: "Teklif satırı" },
      {
        type: "p",
        text: "Blok kurtarılabiliyor, plaka kurtarılamıyorsa teklif bunu ayırır. İkisi de değişecekse o da yazılır. Onaydan önce talaş kalkmaz. Süre, bu kapsama göre [[/blog/yazili-teklif-neye-dayanir|yazılı teklifte]] belirtilir.",
      },
      { type: "h2", text: "Pompa sayfasındaki yeri" },
      {
        type: "p",
        text: "Bu ikili, [[/revizyon/pompa|pompa revizyonunun]] iç grup işidir. Dişli pompanın iç grubu başka bir geometridir; onu ayrı yazı anlatır.",
      },
    ],
  },
  {
    slug: "valf-revizyonu-ne-zaman-gerekir",
    title: "İş makinası valf revizyonu ne zaman gerekir?",
    seoTitle: "Valf revizyonu ne zaman gerekir?",
    excerpt:
      "Kol boşta hareket, tek fonksiyonun durması veya basıncın tutmaması valf kaynaklı olabilir. Kesin karar söküm ve ölçümdedir; bu yazı o eşiği anlatır.",
    category: "Valf",
    date: "2026-10-02",
    image: img(
      "/images/foto-valf-revizyonu-spool-logo-fon-01",
      "Sökülmüş valf gövdeleri ve yaylı spool’lar",
      full,
      full
    ),
    related: { href: "/revizyon/valf", label: "Valf revizyonu" },
    blocks: [
      {
        type: "p",
        text: "Ana kumanda valfi, iş makinasının hareketlerini yönlendiren parçadır. Aşınınca kaçırır, bir dilimi keser veya sistem basıncını tutmaz. Her belirti hemen revizyon demek değildir. Bazısı ayar, bazısı pompa, bazısı gerçekten spool ve kanaldır.",
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
      { type: "h2", text: "Pompa ile karışan yer" },
      {
        type: "p",
        text: "Genel güç kaybı, ısınma veya tüm hareketlerin birlikte zayıflaması pompaya da işaret edebilir. Valf ile pompayı fotoğraftan ayırmak mümkün değildir. Ayrım, parça açılıp mikrometreyle okunduktan sonra yazılır. İlk ipuçları [[/blog/valf-mi-pompa-mi|arıza valfte mi, pompada mı]] yazısında toplanmıştır.",
      },
      { type: "h2", text: "Revizyon neyi kapsar?" },
      {
        type: "p",
        text: "Söküm, ölçüm, gereken taşlama veya spool imalatı, montaj ve tezgâhta test. Fiyat, parça sökülmeden atılmaz. Süre ve garanti, tespit sonrası yazılı teklifte belirtilir. Test sonucu yazılı rapor değil, [[/revizyon/videolu-test|videolu kayıt]]tır. Spool rafta yoksa iş [[/imalat|atölyede imalata]] döner.",
      },
      { type: "h2", text: "Nerede yapılır?" },
      {
        type: "p",
        text: "BN Hidrovalf Makina bu işi İvedik OSB’deki tek atölyesinde yapar. Her marka iş makinası kabul edilir; gereken parça tedarik edilir veya atölyede imal edilir. Marka adı ölçüyü değiştirmez; bunu [[/blog/marka-adi-olcuyu-degistirmez|marka yazısı]] ayrıca açar.",
      },
    ],
  },
  {
    slug: "disli-pompa-ic-grubu",
    title: "Dişli pompa iç grubu sökülünce neye bakılır?",
    seoTitle: "Dişli pompa iç grubu",
    excerpt:
      "Dişli pompada gövde, dişli çifti ve yan plakalar birlikte okunur. Aşınma çoğu zaman diş dibinde ve plaka yüzündedir; piston pompanın kayar plakasıyla karıştırılmaz.",
    category: "Pompa",
    date: "2026-09-24",
    image: img(
      "/images/foto-disli-pompa-ic-grup-01",
      "Dişli pompa iç grubu: iki dişli, mil ve yan plakalar",
      full,
      full
    ),
    related: { href: "/revizyon/pompa", label: "Pompa revizyonu" },
    blocks: [
      {
        type: "p",
        text: "Dişli pompa, pistonlu pompa gibi silindir bloğu ve kayar plakayla çalışmaz. İçinde birbirine geçen dişliler, miller ve yan plakalar vardır. Verim düşünce ilk bakılan yer diş dibi, mil yatağı ve plakanın dişliye bakan yüzüdür.",
      },
      { type: "h2", text: "Sökümde ayrılan parçalar" },
      {
        type: "ul",
        items: [
          "Gövde boşluğu: dişli dış çapı gövdeyi yemiş mi?",
          "Dişli çifti: diş dibi ve alın yüzeyi çizik mi?",
          "Yan plakalar: yüz düz mü, kanal kaçırıyor mu?",
          "Keçe ve mil: dış kaçak içerideki aşınmadan ayrı yazılır.",
        ],
      },
      { type: "h2", text: "Piston pompadan farkı" },
      {
        type: "p",
        text: "Pistonlu pompada [[/blog/silindir-bloku-ve-valf-plakasi|silindir bloğu ve valf plakası]] ölçülür. Dişli pompada bu ikili yoktur. Aynı ‘iç grup’ kelimesi iki geometriyi birleştirmez. [[/revizyon/pompa|Pompa revizyonu]] sayfası ikisini de kabul eder; teklif hangisi olduğunu ayırır.",
      },
      { type: "h2", text: "Ne zaman değişir, ne zaman işlenir?" },
      {
        type: "p",
        text: "Hafif yüz çizikleri, ölçü kurtarılabiliyorsa taşlanır veya plaka düzeltilir. Diş kırığı, derin yenme veya gövde boşluğu kaçmışsa parça değiştirilir. Parça atölyede yoksa tedarik edilir; uydurma dişli takılmaz.",
      },
      { type: "h2", text: "Belirti" },
      {
        type: "p",
        text: "Dişli pompa çoğu zaman ikincil devreyi veya şarj hattını besler. Ses, ısınma ve basıncın çabuk düşmesi ipucudur. Teşhis değildir. Aynı makinede ana pompa da zayıf olabilir. İkisi şüpheliyse ikisi de söylenir.",
      },
    ],
  },
  {
    slug: "spool-imalati-neden-atolyede",
    title: "Spool bulunamıyorsa imalat neden atölyede yapılır?",
    seoTitle: "Spool imalatı neden atölyede?",
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
        text: "Aynı makine markasında bile dilim sayısı ve spool çapı değişir. Parça numarası yoksa veya stok yoksa tahminle mil takılmaz. Mikrometre okuması, kanal boşluğu ve yüzey kararı teklifin içindedir. Okumanın kendisi [[/blog/spool-olcusu-nasil-okunur|spool ölçüsü]] yazısında adım adım durur.",
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
      { type: "h2", text: "Katalog yoktur" },
      {
        type: "p",
        text: "Çevrimiçi bir spool kataloğu yoktur. [[/imalat|CNC ve özel imalat]] bu yüzden valf işinin destek hattıdır, ayrı bir vitrin değildir. Talep, makine markası, valf tipi ve mümkünse parça fotoğrafıyla başlar. Gövde revizyonu [[/revizyon/valf|valf sayfasında]] anlatılır.",
      },
      { type: "h2", text: "Biten mil nasıl kapanır?" },
      {
        type: "p",
        text: "Yeni veya taşlanmış spool gövdeye toplanır ve valf tezgâhta çalıştırılır. Kayıt, imalatın ‘oldu’ cümlesinin yerine geçer. Garanti yine yazılı tekliftedir.",
      },
    ],
  },
  {
    slug: "spool-olcusu-nasil-okunur",
    title: "Spool çapı, kanal ve boşluk nasıl okunur?",
    seoTitle: "Spool ölçüsü nasıl okunur?",
    excerpt:
      "Spool’un boyunları ve kanalları göz kararı yazılmaz. Çap, kanal genişliği ve gövde boşluğu mikrometreyle okunur; teklif bu sayılara dayanır.",
    category: "Valf",
    date: "2026-09-04",
    image: img(
      "/images/gallery/galeri-01-spool",
      "Sökülmüş hidrolik valf spool’u; kanal ve boyunlar yakın planda"
    ),
    related: { href: "/revizyon/valf", label: "Valf revizyonu" },
    blocks: [
      {
        type: "p",
        text: "Spool, gövdenin içinde gidip gelen mildir. Boyunlar yağı keser, kanallar yağı yönlendirir. Aşınma bu iki yerde toplanır. Yakın planda kanal görünür; görünmek, ölçülmüş olmak değildir.",
      },
      { type: "h2", text: "Üç okuma" },
      {
        type: "ul",
        items: [
          "Çap: boyun ve kanal dişi, gövde yuvasıyla karşılaştırılır.",
          "Kanal: genişlik ve kenar boşluğu, kaçağın nereden geçtiğini ayırır.",
          "Boşluk: spool ile gövde arasındaki fark, taşlama payını belirler.",
        ],
      },
      { type: "h2", text: "Neden mikrometre?" },
      {
        type: "p",
        text: "Kumpasın kaba okuması teklif yazdırmaz. Hidrolikte kaçak, gözün seçemediği aralıktan da geçer. Ölçü mevcut parçadan alınır; başka bir makinenin spool’u referans diye kullanılmaz. [[/blog/marka-adi-olcuyu-degistirmez|Marka adı]] bu yüzden ölçünün yerine geçmez.",
      },
      { type: "h2", text: "Okuma nereye gider?" },
      {
        type: "p",
        text: "Sayılar [[/blog/yazili-teklif-neye-dayanir|yazılı teklifin]] içindedir. Kurtarılan boyun taşlanır. Çap kaçmışsa spool [[/blog/spool-imalati-neden-atolyede|atölyede yeniden imal]] edilir. İki karar aynı cümlede birleştirilmez.",
      },
      { type: "h2", text: "Gövde de masadadır" },
      {
        type: "p",
        text: "Spool tek başına ölçülmez. Yuva çizildiyse mil yeni olsa da kaçak sürer. [[/revizyon/valf|Valf revizyonu]] gövde ve mili birlikte ele alır. İş, montaj ve test ile kapanır.",
      },
    ],
  },
  {
    slug: "videolu-test-kaydi",
    title: "Valf testi neden videolu kayıt olarak verilir?",
    seoTitle: "Valf testi neden videolu kayıt?",
    excerpt:
      "Yazılı bir basınç listesi, tezgâhtaki manometrenin yerini tutmaz. Kayıt o işe aittir; 240 ve 320 bar yalnızca örnek videolardaki değerlerdir.",
    category: "Test",
    date: "2026-08-21",
    image: img(
      "/images/foto-valf-blok-hortumlu-01",
      "Civatalı siyah hidrolik valf bloğu ve bağlı hortumlar.",
      full,
      full
    ),
    related: { href: "/revizyon/videolu-test", label: "Videolu test" },
    blocks: [
      {
        type: "p",
        text: "Revizyon montajla bitmez. Valf test tezgâhına bağlanır, çalıştırılır ve manometre görüntüsü kayda alınır. Kayıt, ilgili işle birlikte paylaşılır. Amaç, ‘test edildi’ cümlesinin yerine görüntüyü koymaktır. Hortumlu bir blok, bağlantının kendisini gösterir; basınç değeri ise kayıttaki manometrededir.",
      },
      { type: "h2", text: "Örnek bar değerleri standart değildir" },
      {
        type: "p",
        text: "Sitede yayınlanan örneklerde 240 bar ve 320 bar okunur. Bunlar o kayıtların gerçek manometre değerleridir. Her valfin test basıncı tipi ve işe göre seçilir; bu sayılar tüm işlerin standardı diye okunmaz. Aynı uyarı [[/blog/montajdan-sonra-test|montajdan sonraki test]] yazısında da durur.",
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
      { type: "h2", text: "Pompa testi ayrıdır" },
      {
        type: "p",
        text: "Valf kaydı, pompa verimini kanıtlamaz. İç grup taşlandıysa pompa kendi tezgâh kaydını alır. İki parça aynı işteyse iki kayıt da teklifte yazılan kapsama göre verilir. Pompa tarafı [[/revizyon/pompa|pompa revizyonu]] sayfasındadır.",
      },
      { type: "h2", text: "Kayıt nasıl izlenir?" },
      {
        type: "p",
        text: "Sitedeki örnekler tıklanınca yüklenir, kendiliğinden oynamaz. Yüz görünen kayıt yayınlanmaz. Kendi işinizin kaydı, parça ile birlikte size verilir; herkese açık bir arşiv değildir.",
      },
    ],
  },
  {
    slug: "tek-fonksiyon-durursa",
    title: "Tek fonksiyon durunca neden tüm valf suçlanmaz?",
    seoTitle: "Tek fonksiyon durursa",
    excerpt:
      "Kepçe durup bom çalışıyorsa arıza çoğu zaman bir dilimdedir. O dilimin spool’u, yayı ve tıkacı ayrılır; sağlam dilimler aynı teklife yazılmaz.",
    category: "Arıza",
    date: "2026-07-28",
    image: img(
      "/images/foto-valf-spool-yay-sokum-01",
      "Sarı tezgahta sökülmüş iki hidrolik valf gövdesi ve yaylı spool’lar, İvedik OSB",
      full,
      full
    ),
    related: { href: "/revizyon/ariza-belirtileri", label: "Arıza belirtileri" },
    blocks: [
      {
        type: "p",
        text: "Çok dilimli bir valfte her dilim bir hareketi yönetir. Biri kaçırınca diğeri çalışmaya devam edebilir. ‘Valf bitti’ cümlesi, beş dilimi birden değiştirmeyi gerektirmez. Atölye, duran fonksiyonun dilimini ayırır.",
      },
      { type: "h2", text: "O dilimde bakılanlar" },
      {
        type: "ul",
        items: [
          "Spool çizik, eğik veya sıkışık mı?",
          "Yay kırık veya takılı mı?",
          "Tıkaç, kapak veya keçe o dilimden yağ kaçırıyor mu?",
          "Kanal aşınması yalnız o yönde mi?",
        ],
      },
      { type: "h2", text: "Tüm hareketler zayıfsa" },
      {
        type: "p",
        text: "Bom, kepçe ve yürüyüş birlikte güçsüzse dilim teorisi yetmez. Basınç kaynağı, yani pompa, aynı şüphenin içindedir. [[/blog/valf-mi-pompa-mi|Valf mi, pompa mı]] yazısı bu eşiği anlatır. İkisi birlikte arızalıysa teklif ikisini de yazar.",
      },
      { type: "h2", text: "Söküm masası" },
      {
        type: "p",
        text: "Gövde açılınca spool ve yay dışarı alınır. Bu kare teşhisin kendisi değil, teşhisin başladığı yerdir. Ölçü [[/blog/spool-olcusu-nasil-okunur|mikrometreyle]] okunur. Sağlam dilimin spool’u, bozuk olanla aynı işleme konmaz.",
      },
      { type: "h2", text: "Belirti listesi" },
      {
        type: "p",
        text: "Daha geniş işaretler [[/revizyon/ariza-belirtileri|arıza belirtileri]] sayfasındadır. Liste teşhis değildir. Kesin ayrım, [[/revizyon/valf|valf revizyonunda]] sökümle yapılır.",
      },
    ],
  },
  {
    slug: "pompa-ic-grup-yuzey-taslama",
    title: "Pompa iç grup yüzey taşlama neyi düzeltir?",
    seoTitle: "Pompa yüzey taşlama neyi düzeltir?",
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
        text: "İş makinası pompasında güç kaybı, ısınma veya gürültü iç grup aşınmasından gelebilir. Pistonlu pompalarda silindir bloğu, ayna ve kayar plaka zamanla çizilir. İlk iş söküp bu yüzeyleri ölçmektir. Mikrometre masada duruyorsa karar henüz yazılmamıştır.",
      },
      { type: "h2", text: "Taşlama ne zaman anlamlıdır?" },
      {
        type: "p",
        text: "Çizik yüzey, ölçü hâlâ kurtarılabilir aralıktaysa taşlanır. Derin hasar veya çatlak varsa parça değiştirilir ya da iş teklif dışı bırakılır. Karar, fotoğraftan değil mikrometreden çıkar. Kayar plakanın kendi hali [[/blog/kayar-plaka-cizigi|kayar plaka çizikleri]] yazısında, blok ile plaka ikilisi [[/blog/silindir-bloku-ve-valf-plakasi|silindir bloğu yazısında]] durur.",
      },
      { type: "h2", text: "Valf işinden farkı" },
      {
        type: "p",
        text: "Valfte sorun çoğu zaman tek dilimdedir. Pompada verim düşüşü tüm hareketlere yayılır. İkisi aynı atölyede yapılır ama aynı tezgâh ve aynı parça listesi değildir. Şüphede her iki parça da söylenebilir. Dişli pompa ise ayrı bir iç gruptur.",
      },
      { type: "h2", text: "Tezgâh sırası" },
      {
        type: "ul",
        items: [
          "Gövde açılır, iç grup ortaya konur.",
          "Yüzeyler ölçülür, taşlanacak olan ayrılır.",
          "Montajdan sonra pompa kendi test kaydını alır.",
        ],
      },
      { type: "h2", text: "Nerede?" },
      {
        type: "p",
        text: "Taşlama, İvedik OSB’deki aynı atölyede yapılır. Parça başka bir ile gönderilecekse yol [[/revizyon/teslimat|teslimat]] sayfasındadır. İşin kapsamı [[/revizyon/pompa|pompa revizyonu]] sayfasında toplanır.",
      },
    ],
  },
  {
    slug: "valf-mi-pompa-mi",
    title: "Arıza valfte mi, pompada mı?",
    seoTitle: "Arıza valfte mi, pompada mı?",
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
      {
        type: "p",
        text: "Bu üçü, [[/blog/tek-fonksiyon-durursa|tek fonksiyon]] yazısının konusudur. Yine de liste teşhis değildir.",
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
      { type: "h2", text: "İkisi birlikte" },
      {
        type: "p",
        text: "Aynı makinede valf kaçağı ile pompa verim kaybı birlikte de bulunur. Fotoğraf ve belirti ön değerlendirme içindir; iş, sökümden sonra netleşir. Valf yolu [[/revizyon/valf|valf revizyonu]], pompa yolu [[/revizyon/pompa|pompa revizyonu]] sayfasıdır. Hangisinin açılacağı [[/blog/yazili-teklif-neye-dayanir|teklif]] metninde yazılır.",
      },
      { type: "h2", text: "Sahadaki not" },
      {
        type: "p",
        text: "Göndermeden önce hangi hareketin durduğunu, ne zamandır sürdüğünü ve makine markasını yazmak yeter. Saat yayınlanmaz. Adres ve gönderim, [[/blog/parca-atolyeye-nasil-ulasir|parçanın atölyeye gelişi]] yazısındadır.",
      },
    ],
  },
  {
    slug: "parca-atolyeye-nasil-ulasir",
    title: "Valf veya pompa atölyeye nasıl ulaşır?",
    seoTitle: "Parça atölyeye nasıl ulaşır?",
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
      { type: "h2", text: "Gönderim" },
      {
        type: "p",
        text: "Seçenekler [[/revizyon/teslimat|teslimat]] sayfasında ve yazılı teklifte yer alır. Göndermeden önce aramak, parçanın takibini kolaylaştırır. Çalışma saati sitede yayınlanmaz; gün ve saat için telefon kullanılır. [[/iletisim|İletişim]] sayfası telefon, e-posta ve adresi bir arada tutar.",
      },
      { type: "h2", text: "Atölyede ne olur?" },
      {
        type: "p",
        text: "Gelen pompa gövdesi veya valf, geliş sırasında değil, sökümden sonra hüküm giyer. Dört gövdenin yan yana durması bir parti işi de olabilir, ayrı ayrı işleri de. Her biri kendi ölçüsünü alır. Sıra [[/revizyon/surec|süreç]] sayfasında anlatılır.",
      },
      { type: "h2", text: "Geri dönüş" },
      {
        type: "p",
        text: "Parça, kayıtla birlikte aynı adresten çıkar. Şube ağı olmadığı için teslim de bu atölyeden yazılır. Yeni bir işe başlamak için [[/teklif|teklif formu]] açıktır.",
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
