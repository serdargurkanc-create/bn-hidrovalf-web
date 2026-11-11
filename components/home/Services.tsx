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
            <IconCnc />
            <strong>CNC ve özel imalat</strong>
            <p>Revizyonu destekleyen spool ve özel parça imalatı.</p>
          </Link>
          <Link href="/yedek-parca" className="support-card rv" style={{ ["--d" as string]: "90ms" }}>
            <IconParca />
            <strong>Yedek parça</strong>
            <p>İşin gerektirdiği yerde, destek niteliğinde parça temini.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
