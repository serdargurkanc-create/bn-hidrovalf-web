import { Pic } from "@/components/Pic";
import { ValveStory } from "@/components/anim/Scenes";

const feats = [
  "20+ yıllık tecrübeye sahip kurumsal çözüm ortağı",
  "Her marka iş makinası valf ve pompa revizyonu",
  "Test sonucu videolu kayıt olarak paylaşılır",
  "Spool imalatı ve yüzey taşlama atölye içinde",
];

export function Journey() {
  return (
    <>
      <section className="about" aria-labelledby="biz-title">
        <div className="wrap">
          <div className="about-panel">
            <div className="about-copy rv-l">
              <p className="badge">Kurumsal çözüm ortağı</p>
              <h2 id="biz-title">
                20+ yıldır İvedik OSB’de, <span className="serif-accent">atölyede.</span>
              </h2>
              <p>
                BN Hidrovalf Makina, Ankara İvedik OSB, Genç Kardeşler Sanayi Sitesi’nde
                valf ve pompa revizyonu yapar. Ana iş budur. CNC ve özel imalat bu işi
                destekler; yedek parça ihtiyaca göre sağlanır.
              </p>
              <ul className="feat-list">
                {feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="about-media rv-r">
              <Pic
                src="/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp"
                srcSet="/images/foto-valf-revizyonu-spool-logo-fon-01-600.webp 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.webp 800w, /images/foto-valf-revizyonu-spool-logo-fon-01-1200.webp 1200w"
                avifSrcSet="/images/foto-valf-revizyonu-spool-logo-fon-01-600.avif 600w, /images/foto-valf-revizyonu-spool-logo-fon-01-800.avif 800w, /images/foto-valf-revizyonu-spool-logo-fon-01-1200.avif 1200w"
                alt="Logo fonu önünde sökülmüş valf gövdeleri ve yaylı spool’lar"
                width={1200}
                height={900}
                sizes="(max-width: 900px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="process" aria-labelledby="surec-title">
        <div className="wrap">
          <div className="cards-head rv">
            <p className="badge">Süreç</p>
            <h2 id="surec-title">
              Revizyon <span className="serif-accent">nasıl yapılır?</span>
            </h2>
          </div>
          <ValveStory />
        </div>
      </section>
    </>
  );
}
