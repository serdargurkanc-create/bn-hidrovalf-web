/**
 * Tema diline uygun hafif animasyonlu alanlar. Hepsi CSS/SVG tabanlıdır,
 * görünür olunca (.in sınıfı, motion.js IntersectionObserver) canlanır ve
 * prefers-reduced-motion: reduce ile son karede durağan kalır. JS yokken
 * son kare görünür (içerik asla opacity:0 ile gizlenmez).
 */

const GAUGE_MAX = 400;
const GAUGE_SWEEP = 240;
const GAUGE_C = 100;

function gaugeAngle(bar: number) {
  return -GAUGE_SWEEP / 2 + (bar / GAUGE_MAX) * GAUGE_SWEEP;
}

function polar(deg: number, r: number) {
  const a = (deg * Math.PI) / 180;
  return { x: GAUGE_C + r * Math.sin(a), y: GAUGE_C - r * Math.cos(a) };
}

function arcPath(fromBar: number, toBar: number, r: number) {
  const a = polar(gaugeAngle(fromBar), r);
  const b = polar(gaugeAngle(toBar), r);
  const large = ((toBar - fromBar) / GAUGE_MAX) * GAUGE_SWEEP > 180 ? 1 : 0;
  return `M${a.x.toFixed(2)} ${a.y.toFixed(2)} A${r} ${r} 0 ${large} 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
}

/**
 * Basınç göstergesi: tezgâh manometresi dili. Görünür olunca ibre 0’dan
 * hedefe yükselir, aşar, yerine oturur ve hafif titreşir; sayı aynı eğriyle
 * sayar (CSS + hafif JS). JS yokken ve reduced-motion’da son kare durağan.
 */
export function Gauge({
  bar,
  label,
  delayMs = 0,
}: {
  bar: 240 | 320;
  label: string;
  delayMs?: number;
}) {
  const angle = gaugeAngle(bar);
  const arcLen = (bar / GAUGE_MAX) * 100;
  const minor = Array.from({ length: GAUGE_MAX / 10 + 1 }, (_, i) => i * 10);
  const numbers = [0, 100, 200, 300, 400];
  const uid = `g${bar}-${label.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 12)}`;
  const scale = arcPath(0, GAUGE_MAX, 72);
  return (
    <div
      className="gauge anim"
      role="img"
      aria-label={`${bar} bar — ${label}`}
      style={{
        ["--gauge-angle" as string]: `${angle}deg`,
        ["--gauge-arc" as string]: String(100 - arcLen),
        ["--d" as string]: `${delayMs}ms`,
      }}
      data-gauge-bar={bar}
    >
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <radialGradient id={`${uid}-dial`} cx="50%" cy="42%" r="62%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.72" stopColor="#fbf9f5" />
            <stop offset="1" stopColor="#ece6dc" />
          </radialGradient>
          <linearGradient id={`${uid}-bezel`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4a4038" />
            <stop offset="0.5" stopColor="#1a1612" />
            <stop offset="1" stopColor="#3a322b" />
          </linearGradient>
          <linearGradient id={`${uid}-rim`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3ede4" />
            <stop offset="0.5" stopColor="#a69b8d" />
            <stop offset="1" stopColor="#e6dfd3" />
          </linearGradient>
          <linearGradient id={`${uid}-fill`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#e39a4e" />
            <stop offset="0.6" stopColor="#d07825" />
            <stop offset="1" stopColor="#a4531a" />
          </linearGradient>
          <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx={GAUGE_C} cy={GAUGE_C} r="99" className="gauge-glow" />
        <circle cx={GAUGE_C} cy={GAUGE_C} r="96" fill={`url(#${uid}-bezel)`} />
        <circle cx={GAUGE_C} cy={GAUGE_C} r="89" fill="none" stroke={`url(#${uid}-rim)`} strokeWidth="2.4" />
        <circle cx={GAUGE_C} cy={GAUGE_C} r="87" fill={`url(#${uid}-dial)`} />
        <circle cx={GAUGE_C} cy={GAUGE_C} r="86" className="gauge-inner-shade" />

        {/* Skala rayı ve dolum */}
        <path d={scale} className="gauge-arc-track" pathLength={100} fill="none" />
        <path d={scale} className="gauge-arc" pathLength={100} fill="none" stroke={`url(#${uid}-fill)`} />
        {/* Üst sınır bandı */}
        <path d={arcPath(360, GAUGE_MAX, 80)} className="gauge-redline" fill="none" />

        {/* Taksimat */}
        {minor.map((b) => {
          const major = b % 50 === 0;
          const r1 = major ? 76 : 78.5;
          const r2 = major ? 84 : 83;
          const a = polar(gaugeAngle(b), r1);
          const c = polar(gaugeAngle(b), r2);
          return (
            <line
              key={b}
              x1={a.x.toFixed(2)}
              y1={a.y.toFixed(2)}
              x2={c.x.toFixed(2)}
              y2={c.y.toFixed(2)}
              className={major ? "gauge-tick gauge-tick-major" : "gauge-tick"}
            />
          );
        })}
        {numbers.map((n) => {
          const p = polar(gaugeAngle(n), 62);
          return (
            <text key={n} x={p.x.toFixed(2)} y={(p.y + 3.6).toFixed(2)} textAnchor="middle" className="gauge-scale">
              {n}
            </text>
          );
        })}

        <text x={GAUGE_C} y="80" textAnchor="middle" className="gauge-unit-top">
          bar
        </text>

        {/* İbre: merkez orijinli grup */}
        <g transform={`translate(${GAUGE_C} ${GAUGE_C})`}>
          <g className="gauge-needle">
            <path d="M0 -70 L2.6 -6 L2.6 14 L-2.6 14 L-2.6 -6 Z" className="gauge-needle-shadow" transform="translate(1.6 2.6)" />
            <path d="M0 -70 L2.6 -6 L2.6 14 L-2.6 14 L-2.6 -6 Z" className="gauge-needle-body" />
            <circle cx="0" cy="0" r="7.5" className="gauge-needle-dot" />
          </g>
        </g>
        <circle cx={GAUGE_C} cy={GAUGE_C} r="7" className="gauge-hub" />
        <circle cx={GAUGE_C} cy={GAUGE_C} r="2.6" className="gauge-hub-pin" />

        {/* Okuma */}
        <rect x="58" y="134" width="84" height="32" rx="8" className="gauge-readout" />
        <text x={GAUGE_C} y="157" textAnchor="middle" className="gauge-value">
          <tspan className="gauge-num" data-gauge-num suppressHydrationWarning>
            {bar}
          </tspan>
          <tspan dx="4" className="gauge-value-unit">
            bar
          </tspan>
        </text>

        {/* Cam parlaması */}
        <ellipse cx="78" cy="62" rx="52" ry="30" fill={`url(#${uid}-glass)`} transform="rotate(-28 78 62)" className="gauge-glass" />
      </svg>
      <p className="gauge-label">{label}</p>
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
