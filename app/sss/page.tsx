import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, PageHero, QuoteCta, Section } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { pageMeta } from "@/lib/meta";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Sık sorulan sorular",
  description:
    "Ankara, İvedik ve Ostim’de iş makinası valf veya pompa revizyonu, videolu test kaydı, teslimat ve garanti hakkında sık sorulan sorular. BN Hidrovalf Makina.",
  path: "/sss",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "SSS" }];

const extraFaqs = [
  {
    q: "Garanti veriyor musunuz?",
    a: "Garanti koşulları, işin kapsamına göre tespit sonrası gönderilen yazılı teklifte belirtilir. Sitede kanıtlanamayan genel bir garanti süresi yayınlanmaz.",
  },
  {
    q: "Çalışma saatleriniz nedir?",
    a: "Saat bilgisi bu sitede yayınlanmaz; gün ve saat planlaması için +90 541 883 53 31 numarasını arayabilir veya WhatsApp’tan yazabilirsiniz.",
  },
  {
    q: "Resmi bayi veya yetkili servis misiniz?",
    a: "Hayır. BN Hidrovalf Makina bağımsız bir revizyon atölyesidir; hiçbir üreticinin bayisi veya yetkili servisi değildir. Marka adları yalnızca revize edilen parçaların ait olduğu makinaları tarif eder.",
  },
  {
    q: "Fiyatı görmeden parça göndermek istemiyorum; nasıl ilerleyebilirim?",
    a: "Fotoğraf ve belirti ile ücretsiz ön değerlendirme yapılır; yaklaşık kapsam telefonda konuşulur. Kesin teklif, parça söküldükten sonra yazılı verilir ve onaysız işe başlanmaz.",
  },
  {
    q: "Spool’u piyasada bulamadım; çözüm var mı?",
    a: "Var. Spool, mevcut parçadan ölçü alınarak atölyedeki taşlama ve talaşlı imalat kabiliyetiyle yeniden imal edilebilir.",
  },
];

const allFaqs = [...faqs, ...extraFaqs];

export default function Page() {
  return (
    <>
      <SchemaLd path="/sss" crumbs={crumbs} faqs={allFaqs} />
      <PageHero
        kicker="SSS"
        title="Sık sorulan"
        accent="sorular"
        lead="Revizyon, test, teslimat ve çalışma biçimi hakkında en çok sorulanlar. Her sorunun paylaşılabilir bir bağlantısı vardır."
        crumbs={crumbs}
      />

      <Section id="sorular" kicker="Sorular" title="Cevabı" accent="burada olanlar">
        <FaqList items={allFaqs} idPrefix="sss" />
        <p className="sec-note">
          Sorunuzun cevabı yoksa <a href={`tel:${site.phoneTel}`}>{site.phone}</a>{" "}
          numarasını arayın, <a href={site.whatsapp}>WhatsApp’tan yazın</a> veya{" "}
          <Link href="/iletisim">iletişim sayfasını</Link> kullanın.
        </p>
      </Section>

      <QuoteCta />
    </>
  );
}
