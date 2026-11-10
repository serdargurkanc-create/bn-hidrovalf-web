import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, QuoteCta, Section } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { pageMeta } from "@/lib/meta";
import { site, whatsappQuote } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "İletişim",
  description:
    "BN Hidrovalf Makina iletişim: Genç Kardeşler Sanayi Sitesi, İvedik OSB, 2285. Sk. No:40, Yenimahalle/Ankara. Tel +90 541 883 53 31, bnhidro@gmail.com.",
  path: "/iletisim",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "İletişim" }];

export default function Page() {
  return (
    <>
      <SchemaLd path="/iletisim" crumbs={crumbs} />
      <PageHero
        kicker="İletişim"
        title="Tek atölye,"
        accent="dört kanal"
        lead="Telefon, WhatsApp, e-posta veya teklif formu. Çalışma saatleri sitede yayınlanmaz; gün ve saat planlaması için arayın."
        crumbs={crumbs}
      />

      <Section id="kanallar" kicker="Kanallar" title="Bize" accent="ulaşın">
        <div className="contact-grid contact-grid-2">
          <div className="contact-card rv">
            <span>Telefon</span>
            <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
            <p>Saat planlaması ve hızlı sorular için en kısa yol.</p>
          </div>
          <div className="contact-card rv" style={{ ["--d" as string]: "90ms" }}>
            <span>WhatsApp</span>
            <a href={whatsappQuote}>Fotoğrafla yazın</a>
            <p>Parça fotoğrafı ve kısa video göndermek için uygundur.</p>
          </div>
          <div className="contact-card rv" style={{ ["--d" as string]: "180ms" }}>
            <span>E-posta</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>Teklif ve doküman paylaşımı için.</p>
          </div>
          <div className="contact-card rv" style={{ ["--d" as string]: "270ms" }}>
            <span>Adres</span>
            <a href={site.maps} rel="noopener noreferrer" target="_blank">
              {site.address.line}
            </a>
            <p>Bağlantı, haritayı yeni sekmede açar.</p>
          </div>
        </div>
        <p className="sec-note">
          Parça gönderimi öncesinde aramanız takibi kolaylaştırır; gönderim
          seçenekleri <Link href="/revizyon/teslimat">teslimat sayfasında</Link>{" "}
          anlatılır.
        </p>
      </Section>

      <QuoteCta />
    </>
  );
}
