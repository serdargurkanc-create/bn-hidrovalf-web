import Link from "next/link";
import { Gauge } from "@/components/Anim";
import { VideoFigure } from "@/components/VideoFigure";
import { videos } from "@/lib/media";

/** Ana sayfa: videolu test kanıtı — kayıtlı 240/320 bar örnekleri. */
export function TestProof() {
  return (
    <section className="test-proof" aria-labelledby="test-title">
      <div className="wrap">
        <div className="cards-head rv">
          <p className="badge">Videolu test</p>
          <h2 id="test-title">
            Rapor yok, <span className="serif-accent">kayıt var.</span>
          </h2>
          <p style={{ color: "var(--ink-soft)", margin: 0 }}>
            Her iş, test tezgâhında çekilen videoyla teslim edilir. Aşağıdaki
            değerler gerçek kayıtlardan okunmuştur.
          </p>
        </div>
        <div className="test-proof-grid">
          <div className="gauge-pair rv-l">
            <Gauge bar={240} label="Yanmar valf testi kaydı" />
            <Gauge bar={320} label="Çok dilimli valf testi kaydı" />
          </div>
          <div className="test-proof-media rv-r">
            <VideoFigure video={videos.test320} />
          </div>
        </div>
        <p className="sec-note" style={{ textAlign: "center" }}>
          <Link href="/revizyon/videolu-test">Videolu test uygulamasını inceleyin</Link>
        </p>
      </div>
    </section>
  );
}
