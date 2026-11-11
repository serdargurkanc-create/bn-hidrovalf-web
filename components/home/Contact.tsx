import { site } from "@/lib/site";

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

export function Contact() {
  return (
    <section className="contact-sec" aria-labelledby="iletisim-title">
      <div className="wrap">
        <div className="faq-head rv">
          <p className="badge">İletişim</p>
          <h2 id="iletisim-title">
            İvedik OSB, <span className="serif-accent">Ankara</span>
          </h2>
        </div>
        <div className="contact-grid">
          <a className="contact-card rv" href={`tel:${site.phoneTel}`}>
            <span className="contact-ico">
              <PhoneIcon />
            </span>
            <span className="contact-k">Telefon</span>
            <strong>{site.phone}</strong>
            <em>Arayın</em>
          </a>
          <a className="contact-card rv" href={`mailto:${site.email}`} style={{ ["--d" as string]: "90ms" }}>
            <span className="contact-ico">
              <MailIcon />
            </span>
            <span className="contact-k">E-posta</span>
            <strong>{site.email}</strong>
            <em>Yazın</em>
          </a>
          <a
            className="contact-card rv"
            href={site.maps}
            rel="noopener noreferrer"
            target="_blank"
            style={{ ["--d" as string]: "180ms" }}
          >
            <span className="contact-ico">
              <PinIcon />
            </span>
            <span className="contact-k">Adres</span>
            <strong>{site.address.line}</strong>
            <em>Haritada açın</em>
          </a>
        </div>
      </div>
    </section>
  );
}
