import { site } from "@/lib/site";

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
          <div className="contact-card rv">
            <span>Telefon</span>
            <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
          </div>
          <div className="contact-card rv" style={{ ["--d" as string]: "90ms" }}>
            <span>E-posta</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="contact-card rv" style={{ ["--d" as string]: "180ms" }}>
            <span>Adres</span>
            <a href={site.maps} rel="noopener noreferrer" target="_blank">
              {site.address.line}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
