import type { Metadata } from "next";
import { Inner } from "@/components/Inner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Çerez politikası",
  description:
    "BN Hidrovalf Makina web sitesi çerez politikası: bu site izleme çerezi kullanmaz.",
  alternates: { canonical: "/cerez-politikasi" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Inner
      title="Çerez politikası"
      lead="Bu site, zorunlu olmayan hiçbir çerez kullanmaz."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "Çerez politikası" }]}
    >
      <h2>Kullanılan çerezler</h2>
      <p>
        Bu web sitesi statik olarak yayınlanır. Ölçüm çerezi, yalnızca ölçüm
        kimliği tanımlıysa ve siz onayladıktan sonra yüklenir; onay yoksa
        hiçbir izleme çerezi yazılmaz. Reklam çerezi kullanılmaz. Tarayıcı,
        sitenin çalışması için gereken kaynakları (yazı tipi, görsel, video)
        indirir.
      </p>
      <h2>Üçüncü taraf bağlantılar</h2>
      <p>
        WhatsApp ve harita bağlantıları sizi ilgili hizmetlere yönlendirir; bu
        hizmetlerde kendi çerez ve gizlilik koşulları geçerlidir.
      </p>
      <h2>İletişim</h2>
      <p>
        Çerez uygulamalarıyla ilgili sorular için: {site.email},{" "}
        {site.phone}.
      </p>
      <p>
        <em>Not: Bu sayfa taslaktır; hukuk incelemesi beklenmektedir.</em>
      </p>
    </Inner>
  );
}
