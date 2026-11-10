import { whatsappQuote } from "@/lib/site";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-mist" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>
      <div className="wrap hero-inner">
        <p className="badge">İvedik OSB, Ankara · 20+ yıl</p>
        <h1 id="hero-title">
          <span className="hero-line">İş makinalarında</span>
          <span className="hero-line serif-accent">valf ve pompa</span>
          <span className="hero-line">revizyonu.</span>
        </h1>
        <p className="hero-lead">
          BN Hidrovalf Makina, 20+ yıllık tecrübeye sahip kurumsal çözüm ortağıdır.
          Her marka iş makinasında valf ve pompa revizyonu, spool imalatı, arıza çözümü
          ve videolu test kaydı. Teslimat kargo ile adrese veya otobüs kurye.
        </p>
        <div className="hero-cta">
          <a href="/teklif" className="btn btn-primary">
            Fotoğrafla Teklif Alın
            <Arrow />
          </a>
          <a href={whatsappQuote} className="btn btn-outline">
            WhatsApp ile fotoğraf gönderin
          </a>
        </div>
        <div className="scroll-hint" aria-hidden="true" />
      </div>
    </section>
  );
}
