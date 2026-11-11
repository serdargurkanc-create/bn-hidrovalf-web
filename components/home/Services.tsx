import Link from "next/link";
import { IconValf, IconPompa, IconCnc, IconParca } from "@/components/anim/Scenes";
function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Services() {
  return (
    <section className="pillars" aria-labelledby="hizmet-title">
      <div className="wrap">
        <h2 id="hizmet-title" className="sr-only">
          Hizmetler
        </h2>
        <div className="pillars-grid">
          <Link href="/revizyon/valf" className="pillar pillar-valf rv-l">
            <div>
              <IconValf />
              <p className="badge">Ana hizmet</p>
              <h2>
                Valf <span className="serif-accent">revizyonu</span>
              </h2>
              <p>
                Her marka iş makinası valf revizyonu, spool imalatı, arıza çözümü ve valf
                testi.
              </p>
            </div>
            <span className="go">
              İnceleyin
              <Arrow />
            </span>
          </Link>
          <Link href="/revizyon/pompa" className="pillar pillar-pompa rv-r">
            <div>
              <IconPompa />
              <p className="badge">Ana hizmet</p>
              <h2>
                Pompa <span className="serif-accent">revizyonu</span>
              </h2>
              <p>
                Her marka iş makinası pompa revizyonu, iç grup yüzey taşlama ve pompa testi.
              </p>
            </div>
            <span className="go">
              İnceleyin
              <Arrow />
            </span>
          </Link>
        </div>
        <div className="support-grid">
          <Link href="/imalat" className="support-card rv" style={{ ["--d" as string]: "0ms" }}>
            <span className="support-top">
              <IconCnc />
              <span>
                <span className="support-kicker">Destek</span>
                <strong>CNC ve özel imalat</strong>
              </span>
            </span>
            <p>
              Revizyonu destekleyen spool ve özel parça imalatı. Ölçü mevcut
              parçadan alınır; teknik resim şart değildir.
            </p>
            <ul className="support-points">
              <li>Spool imalatı</li>
              <li>Yüzey taşlama</li>
              <li>Flanş işleme</li>
            </ul>
            <span className="support-go">
              İnceleyin
              <Arrow />
            </span>
          </Link>
          <Link href="/yedek-parca" className="support-card rv" style={{ ["--d" as string]: "90ms" }}>
            <span className="support-top">
              <IconParca />
              <span>
                <span className="support-kicker">Destek</span>
                <strong>Yedek parça</strong>
              </span>
            </span>
            <p>
              İşin gerektirdiği yerde parça temini. Katalog yoktur; parça talebe
              göre tedarik edilir veya atölyede imal edilir.
            </p>
            <ul className="support-points">
              <li>Talebe göre tedarik</li>
              <li>Fotoğrafla talep</li>
              <li>Atölyede imalat</li>
            </ul>
            <span className="support-go">
              Parça iste
              <Arrow />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
