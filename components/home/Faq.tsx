import Link from "next/link";
import { faqs, whatsappQuote } from "@/lib/site";

/* Teslimat sorusu ana sayfada gösterilmez; SSS ve teslimat sayfasında kalır. */
const homeFaqs = faqs.filter((f) => !f.q.includes("gönderilir"));

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Faq() {
  return (
    <>
      <section className="cta-wrap" aria-labelledby="cta-title">
        <div className="wrap">
          <div className="cta-card rv-scale">
            <p className="badge">Teklif</p>
            <h2 id="cta-title">
              Parçanın fotoğrafını gönderin,{" "}
              <span className="serif-accent">teklifi yazalım.</span>
            </h2>
            <p>
              Makine marka ve modeli, valf veya pompa tipi ve arıza belirtisi yeterlidir.
              Yazılı teklif, tespit sonrasında iletilir.
            </p>
            <div className="hero-cta">
              <Link href="/teklif" className="btn btn-primary">
                Fotoğrafla Teklif Alın
                <Arrow />
              </Link>
              <a
                href={whatsappQuote}
                className="btn btn-outline"
                aria-label="WhatsApp ile yazın"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="faq" aria-labelledby="sss-title">
        <div className="wrap">
          <div className="faq-head rv">
            <p className="badge">SSS</p>
            <h2 id="sss-title">
              Sık sorulan <span className="serif-accent">sorular</span>
            </h2>
          </div>
          <div className="faq-list">
            {homeFaqs.map((item) => (
              <details key={item.q} className="faq-item rv">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
