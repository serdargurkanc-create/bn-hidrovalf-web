import type { Metadata } from "next";
import { Inner } from "@/components/Inner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK aydınlatma ve gizlilik",
  description:
    "BN Hidrovalf Makina KVKK aydınlatma metni taslağı: işlenen veriler, amaçlar, saklama ve başvuru yolları.",
  alternates: { canonical: "/gizlilik" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Inner
      title="KVKK aydınlatma ve gizlilik"
      lead="Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında hazırlanmış bir taslaktır; nihai hali hukuk incelemesinden sonra yayınlanacaktır."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "KVKK ve gizlilik" }]}
    >
      <h2>Veri sorumlusu</h2>
      <p>
        {site.legalName} — {site.address.line}. İletişim: {site.email},{" "}
        {site.phone}.
      </p>
      <h2>Hangi veriler, hangi amaçla işlenir?</h2>
      <ul>
        <li>
          <strong>İletişim verileri</strong> (ad, telefon, e-posta): teklif
          taleplerini yanıtlamak ve iş sürecini yürütmek için işlenir.
        </li>
        <li>
          <strong>İş verileri</strong> (makine marka/model, parça bilgisi,
          fotoğraf ve videolar): arıza tespiti, teklif hazırlanması ve işin
          belgelenmesi (videolu test kaydı) için işlenir.
        </li>
      </ul>
      <p>
        Bu sitedeki teklif ve parça formları sunucuya veri kaydetmez; girilen
        bilgiler, sizin cihazınızda bir WhatsApp mesajına dönüştürülür ve
        yalnızca siz gönderirseniz iletilir. WhatsApp üzerinden iletilen veriler
        için Meta’nın kendi gizlilik koşulları geçerlidir.
      </p>
      <h2>Saklama ve paylaşım</h2>
      <p>
        Veriler, işin ve yasal yükümlülüklerin gerektirdiği süre boyunca
        saklanır; üçüncü kişilerle pazarlama amacıyla paylaşılmaz. Kargo ve
        kurye firmalarıyla yalnızca teslimat için gerekli ad, adres ve telefon
        bilgisi paylaşılır.
      </p>
      <h2>Haklarınız</h2>
      <p>
        KVKK’nın 11. maddesi kapsamındaki bilgi, düzeltme, silme ve itiraz
        taleplerinizi {site.email} adresine veya {site.phone} numarasına
        iletebilirsiniz.
      </p>
      <p>
        <em>Not: Bu sayfa taslaktır; hukuk incelemesi beklenmektedir.</em>
      </p>
    </Inner>
  );
}
