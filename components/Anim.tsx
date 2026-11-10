/**
 * Tema diline uygun hafif animasyonlu alanlar. Hepsi CSS/SVG tabanlıdır,
 * görünür olunca (.in sınıfı, motion.js IntersectionObserver) canlanır ve
 * prefers-reduced-motion: reduce ile son karede durağan kalır. JS yokken
 * son kare görünür (içerik asla opacity:0 ile gizlenmez).
 */

/** Basınç göstergesi: kayıtlı test değerine (240 veya 320 bar) dönen ibre. */
export function Gauge({
  bar,
  label,
}: {
  bar: 240 | 320;
  label: string;
}) {
  // Skala 0–400 bar, -120° ile +120° arası.
  const angle = -120 + (bar / 400) * 240;
  const ticks = Array.from({ length: 9 }, (_, i) => -120 + i * 30);
  return (
    <div className="gauge anim" role="img" aria-label={`${bar} bar — ${label}`}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="54" className="gauge-face" />
        {ticks.map((t) => (
          <line
            key={t}
            x1="60"
            y1="14"
            x2="60"
            y2="21"
            className="gauge-tick"
            transform={`rotate(${t} 60 60)`}
          />
        ))}
        <g
          className="gauge-needle"
          style={{ ["--gauge-angle" as string]: `${angle}deg` }}
        >
          <line x1="60" y1="60" x2="60" y2="20" />
        </g>
        <circle cx="60" cy="60" r="5" className="gauge-hub" />
        <text x="60" y="88" textAnchor="middle" className="gauge-value">
          {bar} bar
        </text>
      </svg>
      <p className="gauge-label">{label}</p>
    </div>
  );
}

/** Dekoratif hidrolik akış çizimi: hat üzerinde akan kesik çizgi. */
export function FlowSvg() {
  return (
    <div className="flow-svg anim" aria-hidden="true">
      <svg viewBox="0 0 640 120" fill="none">
        <path
          className="flow-pipe"
          d="M8 96h130c20 0 28-10 34-26l10-26c6-16 14-26 34-26h114c20 0 28 10 34 26l10 26c6 16 14 26 34 26h224"
        />
        <path
          className="flow-oil"
          d="M8 96h130c20 0 28-10 34-26l10-26c6-16 14-26 34-26h114c20 0 28 10 34 26l10 26c6 16 14 26 34 26h224"
        />
        <rect className="flow-node" x="122" y="78" width="36" height="36" rx="8" />
        <rect className="flow-node" x="300" y="2" width="36" height="36" rx="8" />
        <rect className="flow-node" x="478" y="78" width="36" height="36" rx="8" />
      </svg>
    </div>
  );
}

/** Dikey süreç zaman çizelgesi; çizgi görünür oldukça dolar. */
export function Timeline({
  steps,
}: {
  steps: readonly {
    id: string;
    title: string;
    body: string;
    media?: React.ReactNode;
  }[];
}) {
  return (
    <ol className="timeline">
      {steps.map((s) => (
        <li key={s.id} className="timeline-item rv">
          <div className="timeline-dot" aria-hidden="true">
            {s.id}
          </div>
          <div className="timeline-body">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            {s.media ? <div className="timeline-media">{s.media}</div> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
