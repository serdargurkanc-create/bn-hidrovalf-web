# Atölye videoları — 14 Kasım 2026 paketi (çekim: 12 Kasım 2026)

Kaynak: 9 adet WhatsApp dikey telefon videosu (v1–v9). Bütün klipler **sessiz** (müzik ve konuşma çıkarıldı), 30 fps, 5 sn civarında, döngüye uygun.

## Dosya düzeni
Her klip için 6 dosya var:
- `<ad>-916.mp4` / `.webm` / `.webp`: dikey 9:16, 404×720. Mobil ve dikey kart için.
- `<ad>-45.mp4` / `.webm` / `.webp`: 4:5 kesit, 576×720. Masaüstü kart için.
- Kodlama: H.264 High (yuv420p, CRF 26, +faststart) ve VP9 (CRF 36). `.webp` poster ilk temiz kareden alındı (kalite 70).
- Önerilen kullanım: `<video muted playsinline loop autoplay preload="none" poster="...webp">`, önce webm, sonra mp4 kaynağı.

16:9 kesit üretilmedi. 9:16 kaynaktan çıkan yatay şerit 404×227 kalıyor ve ana parçayı kesiyor.

## Klipler

| Ad | Kaynak / aralık | Süre | Gösterdiği iş | Önerilen sayfa / bölüm |
|---|---|---|---|---|
| valf-ariza-tespiti-port-sizinti | v4 11.0–18.5 sn | 7,5 sn | Sarı iş makinesi ana kontrol valfi tezgâhta; port çevresindeki yağ izi, sızıntı noktası yakın plan | /revizyon/ariza-belirtileri, "Arıza tespiti" |
| valf-ariza-tespiti-ayar-kontrolu | v4 39.0–45.5 sn | 6,5 sn | Aynı valfte operatör ayar noktasını elle kontrol ediyor (arıza teşhisi) | /revizyon/valf, "Arıza çözümü" |
| kontrol-valfi-basinc-testi | v6 57.5–61.8 sn | 4,3 sn | Çok dilimli kontrol valfi test tezgâhında, basınç hatları bağlı | /revizyon/valf veya /revizyon/videolu-test |
| test-unitesi-ana-basinc-200bar | v3 27.0–32.5 sn | 5,5 sn | Valf test ünitesi "ANA BASINÇ" manometresi; ibre yaklaşık 200 bar | /revizyon/videolu-test, "Test kaydı" |
| cok-gozlu-valf-blogu-testi | v3 15.1–18.0 sn | 2,9 sn | Çok gözlü siyah valf bloğu tezgâhta, hortumlar bağlı | /revizyon/videolu-test (manometre klibiyle birlikte) |
| valf-blogu-basinc-testi-gri | v1 50.5–55.5 sn | 5,0 sn | Gri valf bloğu test tezgâhında, bağlantı noktası üstte | /revizyon/valf, "Test" |
| valf-blogu-test-tezgahi-sari | v2 36.0–41.5 sn | 5,5 sn | Sarı valf bloğu test tezgâhında, hortumlar bağlı genel plan | /revizyon/surec, "Test aşaması" |
| valf-akis-kontrolu-kol-testi | v5 21.0–29.0 sn | 8,0 sn | Gri valf bloğunda kol pense ile hareket ettirilip akış kontrol ediliyor | /revizyon/valf, "Akış kontrolü" |
| barel-pleyt-alistirma-genel | v8 7.5–12.3 sn | 4,8 sn | Pompa barel ve pleyt yüzeyinin alıştırma (lepleme) makinesinde işlenmesi, genel plan | /revizyon/pompa, "Barel / pleyt" |
| barel-pleyt-alistirma-yakin | v8 2.0–5.2 + v9 0.2–2.6 sn | 5,6 sn | Aynı işin yakın planı: barel yüzeyi alıştırma kafası altında | /revizyon/pompa veya /imalat |

## Alt metin ve açıklama (Türkçe)
Kanıtsız üstünlük iddiası yok. Bar değeri yalnızca görüntüde okunabiliyorsa yazıldı.

- **valf-ariza-tespiti-port-sizinti**: "Test tezgâhındaki iş makinesi kontrol valfinde port çevresindeki sızıntının yakından incelenmesi."
- **valf-ariza-tespiti-ayar-kontrolu**: "Kontrol valfinde ayar noktasının elle kontrol edilerek arızanın tespit edilmesi."
- **kontrol-valfi-basinc-testi**: "Çok dilimli kontrol valfinin test tezgâhında basınç altında denenmesi."
- **test-unitesi-ana-basinc-200bar**: "Valf test ünitesinde ana basınç manometresi yaklaşık 200 bar gösteriyor."
- **cok-gozlu-valf-blogu-testi**: "Çok gözlü valf bloğu hortumları bağlanmış hâlde test tezgâhında."
- **valf-blogu-basinc-testi-gri**: "Revizyonu yapılan valf bloğunun test tezgâhında basınç testi."
- **valf-blogu-test-tezgahi-sari**: "Sarı valf bloğu test tezgâhına bağlanmış, basınç testi sürüyor."
- **valf-akis-kontrolu-kol-testi**: "Valf kolunun hareket ettirilerek akışın kontrol edilmesi."
- **barel-pleyt-alistirma-genel**: "Hidrolik pompa barel ve pleyt yüzeyinin alıştırma makinesinde işlenmesi."
- **barel-pleyt-alistirma-yakin**: "Pompa barel yüzeyinin alıştırma işlemi, yakın plan."

## VideoObject önerisi
Hepsinde `uploadDate`: `2026-11-12`. `contentUrl` → `-45.mp4` (veya `-916.mp4`), `thumbnailUrl` → aynı adlı `.webp`.

| name | description | duration |
|---|---|---|
| Valf arıza tespiti: port sızıntısı | (alt metin) | PT7.5S |
| Valf arıza tespiti: ayar kontrolü | (alt metin) | PT6.5S |
| Kontrol valfi basınç testi | (alt metin) | PT4.3S |
| Valf test ünitesi ana basınç (200 bar) | (alt metin) | PT5.5S |
| Çok gözlü valf bloğu testi | (alt metin) | PT2.9S |
| Valf bloğu basınç testi | (alt metin) | PT5S |
| Valf bloğu test tezgâhında | (alt metin) | PT5.5S |
| Valf akış kontrolü | (alt metin) | PT8S |
| Pompa barel ve pleyt alıştırma | (alt metin) | PT4.8S |
| Pompa barel alıştırma, yakın plan | (alt metin) | PT5.6S |

## Kesit ve işleme notları
- 4:5 kesit kaynağın tam genişliğini korur, yalnızca dikey konum seçildi. Konumlar boş alanın oranı olarak verildi (0 = üst): gri 0,40 · sarı 0,35 · çok gözlü 0,40 · manometre 0,15 · port sızıntı 0,10 · ayar 0,40 · akış (v5) 0,00 (parça üst-solda) · kontrol valfi 0,15 · barel genel 0,55 · barel yakın 0,50. Her klipte ana parça ve işlem noktası kadrajda; baş, orta ve son kareler kontrol edildi.
- Stabilizasyon (vidstab, smoothing 12, optzoom) şu kliplere uygulandı: v1, v2, v3 (iki klip), v6. Siyah kenar oluşmadı, ana parça kesilmedi. v4, v5 ve v8/v9 zaten sabit olduğu için uygulanmadı.
- 464×832 kaynaklardan (v1, v2, v4, v6, v9) gelen 4:5 kesitler 576×720'ye yaklaşık 1,24× büyütüldü. Hafif yumuşaklık olabilir.
- Kullanılmayanlar: v7 (karelerin çoğunda Instagram yazı katmanı var, aynı iş v8'de temiz), v5'in 0–10 sn bölümü (7. sn civarında ikinci kişinin ayağı görünüyor, sarsıntılı), v3 18–26 sn (hortum lensi kapatıyor, hızlı pan).
- Eski numaralı videolarla (video-01…16) ad çakışması yok.
