import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, QuoteCta } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { pageMeta } from "@/lib/meta";
import { site, whatsappQuote } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "İletişim — telefon, WhatsApp, e-posta ve İvedik OSB adresi",
  description:
    "BN Hidrovalf Makina: +90 541 883 53 31, WhatsApp, bnhidro@gmail.com. Genç Kardeşler Sanayi Sitesi, 2285. Sk. No:40, İvedik OSB, Yenimahalle/Ankara. Harita sayfada.",
  path: "/iletisim",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "İletişim" }];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4h2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.99.58 3.84 1.6 5.4L2 22l4.92-1.6a9.9 9.9 0 0 0 5.12 1.41h.01c5.46 0 9.89-4.4 9.89-9.83S17.5 2 12.04 2zm5.75 13.9c-.24.67-1.4 1.23-1.93 1.31-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.78-4.16-4.93-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.18 0 .41-.06.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.16.28.73 1.2 1.56 1.94 1.07.96 1.97 1.26 2.25 1.4.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.67-.17 1.34z" />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <SchemaLd path="/iletisim" crumbs={crumbs} contact />
      <PageHero
        kicker="İletişim"
        title="Tek atölye,"
        accent="üç kanal"
        lead="Cep telefonu, WhatsApp veya e-posta. Çalışma saati sitede yayınlanmaz; gün ve saat için arayın. Adres ve harita aşağıda."
        crumbs={crumbs}
      />

      <section className="reach" aria-labelledby="ulas-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="badge">Kanallar</p>
            <h2 id="ulas-title">
              Doğrudan <span className="serif-accent">ulaşın</span>
            </h2>
          </div>

          <div className="reach-actions">
            <a className="reach-card" href={`tel:${site.phoneTel}`}>
              <span className="reach-ico" aria-hidden="true">
                <PhoneIcon />
              </span>
              <span className="reach-k">Cep telefonu</span>
              <strong>{site.phone}</strong>
              <em>Hemen arayın</em>
            </a>
            <a className="reach-card reach-wa" href={whatsappQuote} target="_blank" rel="noopener noreferrer">
              <span className="reach-ico" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span className="reach-k">WhatsApp</span>
              <strong>Fotoğrafla yazın</strong>
              <em>{site.phone}</em>
            </a>
            <a className="reach-card" href={`mailto:${site.email}`}>
              <span className="reach-ico" aria-hidden="true">
                <MailIcon />
              </span>
              <span className="reach-k">E-posta</span>
              <strong>{site.email}</strong>
              <em>Yazılı not için</em>
            </a>
          </div>

          <div className="reach-place">
            <div className="reach-address">
              <span className="reach-ico" aria-hidden="true">
                <PinIcon />
              </span>
              <p className="badge">Atölye</p>
              <h2>İvedik OSB, Ankara</h2>
              <address>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.locality} / {site.address.region}
              </address>
              <p>Şube yok. Valf ve pompa işi bu adreste biter.</p>
              <a className="text-link" href={site.maps} target="_blank" rel="noopener noreferrer">
                Google Haritalar’da aç →
              </a>
              <p className="reach-note">
                Parça göndermeden önce aramanız takibi kolaylaştırır. Seçenekler{" "}
                <Link href="/revizyon/teslimat">teslimat sayfasında</Link>.
              </p>
            </div>
            <div className="reach-map">
              <iframe
                title="BN Hidrovalf Makina konumu: İvedik OSB, 2285. Sokak No:40, Yenimahalle"
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <QuoteCta note="Makine markası, parça tipi ve bir fotoğraf yeter. Gün ve saat için telefonu kullanın." />
    </>
  );
}
