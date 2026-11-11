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
        <aside className="faq-help" aria-label="Cevabı olmayan soru için iletişim">
          <p>Sorunuzun cevabı yoksa doğrudan ulaşın.</p>
          <div className="faq-help-actions">
            <a href={`tel:${site.phoneTel}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4h2z" />
              </svg>
              {site.phone}
            </a>
            <a className="is-wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.99.58 3.84 1.6 5.4L2 22l4.92-1.6a9.9 9.9 0 0 0 5.12 1.41h.01c5.46 0 9.89-4.4 9.89-9.83S17.5 2 12.04 2zm5.75 13.9c-.24.67-1.4 1.23-1.93 1.31-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.78-4.16-4.93-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.18 0 .41-.06.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.16.28.73 1.2 1.56 1.94 1.07.96 1.97 1.26 2.25 1.4.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.67-.17 1.34z" />
              </svg>
              WhatsApp
            </a>
            <Link href="/iletisim">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 7 9-7" />
              </svg>
              İletişim
            </Link>
          </div>
        </aside>
      </Section>

      <QuoteCta />
    </>
  );
}
