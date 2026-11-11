/**
 * Özgün, şematik SVG sahneleri — "işi animasyonla anlat" dili.
 * Tamamı dekoratiftir (aria-hidden); metin her sahnenin dışında verilir.
 * Davranış: html.js + .anim.in ile canlanır (IntersectionObserver, motion.js),
 * JS yokken veya prefers-reduced-motion'da SON KARE durağan görünür.
 * Yalnız transform/opacity/stroke animasyonu — CLS üretmez.
 */

type P = { className?: string };

function Scene({
  children,
  viewBox,
  className,
  label,
}: {
  children: React.ReactNode;
  viewBox: string;
  className: string;
  label?: string;
}) {
  return (
    <div className={`scene anim ${className}`} aria-hidden="true">
      <svg viewBox={viewBox} fill="none">
        {children}
      </svg>
      {label ? <span className="scene-tag">{label}</span> : null}
    </div>
  );
}

/* ---------- Valf hikâyesi: 5 sahne ---------- */

/** Ortak valf gövdesi (kesit): 3 kanallı blok. */
function ValveBody({ y = 64 }: { y?: number }) {
  return (
    <g className="sk-body">
      <rect x="36" y={y} width="168" height="48" rx="10" className="sc-fill" />
      <rect x="58" y={y + 48} width="14" height="16" rx="3" className="sc-fill" />
      <rect x="113" y={y + 48} width="14" height="16" rx="3" className="sc-fill" />
      <rect x="168" y={y + 48} width="14" height="16" rx="3" className="sc-fill" />
      <line x1="48" y1={y + 24} x2="192" y2={y + 24} className="sc-dash" />
    </g>
  );
}

/** Spool: mil + 3 boğaz. */
function Spool({ className = "" }: { className?: string }) {
  return (
    <g className={`sc-spool ${className}`}>
      <line x1="10" y1="12" x2="150" y2="12" className="sc-line" />
      <rect x="22" y="2" width="26" height="20" rx="4" className="sc-accent-fill" />
      <rect x="66" y="2" width="26" height="20" rx="4" className="sc-accent-fill" />
      <rect x="110" y="2" width="26" height="20" rx="4" className="sc-accent-fill" />
    </g>
  );
}

/** 1 — Söküm: kapak kalkar, cıvatalar çıkar. */
export function SceneSokum({ className }: P) {
  return (
    <Scene viewBox="0 0 240 150" className={`sc-sokum ${className || ""}`}>
      <ValveBody y={74} />
      <g className="sc-cap">
        <rect x="36" y="48" width="168" height="18" rx="6" className="sc-fill" />
        <circle cx="62" cy="57" r="4" className="sc-accent" />
        <circle cx="178" cy="57" r="4" className="sc-accent" />
      </g>
      <g className="sc-bolt sc-bolt-a">
        <line x1="90" y1="30" x2="90" y2="44" className="sc-line" />
        <circle cx="90" cy="26" r="5" className="sc-accent" />
      </g>
      <g className="sc-bolt sc-bolt-b">
        <line x1="150" y1="30" x2="150" y2="44" className="sc-line" />
        <circle cx="150" cy="26" r="5" className="sc-accent" />
      </g>
    </Scene>
  );
}

/** 2 — Ölçüm: spool dışarıda, mikrometre çenesi kapanır. */
export function SceneOlcum({ className }: P) {
  return (
    <Scene viewBox="0 0 240 150" className={`sc-olcum ${className || ""}`}>
      <g transform="translate(44 96)">
        <Spool />
      </g>
      {/* mikrometre C-gövdesi */}
      <g className="sc-mic">
        <path d="M96 96c0-26 18-44 44-44s44 18 44 44" className="sc-line" />
        <rect x="112" y="40" width="56" height="14" rx="4" className="sc-fill" />
        <line x1="123" y1="62" x2="123" y2="86" className="sc-line sc-anvil" />
        <line x1="157" y1="62" x2="157" y2="86" className="sc-line" />
      </g>
      <path d="M118 128h44" className="sc-dash sc-measure" pathLength={100} />
    </Scene>
  );
}

/** 3 — Taşlama: dönen taş + kıvılcım. */
export function SceneTaslama({ className }: P) {
  return (
    <Scene viewBox="0 0 240 150" className={`sc-taslama ${className || ""}`}>
      <g className="sc-wheel-g">
        <circle cx="150" cy="52" r="34" className="sc-fill" />
        <circle cx="150" cy="52" r="34" className="sc-wheel" pathLength={100} />
        <circle cx="150" cy="52" r="6" className="sc-accent" />
      </g>
      <g transform="translate(44 104)">
        <Spool />
      </g>
      <g className="sc-sparks">
        <line x1="138" y1="92" x2="128" y2="102" className="sc-spark" />
        <line x1="146" y1="94" x2="144" y2="107" className="sc-spark" />
        <line x1="154" y1="92" x2="162" y2="104" className="sc-spark" />
        <line x1="132" y1="88" x2="118" y2="94" className="sc-spark" />
      </g>
    </Scene>
  );
}

/** 4 — Montaj: spool gövdeye geri kayar. */
export function SceneMontaj({ className }: P) {
  return (
    <Scene viewBox="0 0 240 150" className={`sc-montaj ${className || ""}`}>
      <ValveBody y={64} />
      <rect x="36" y="76" width="168" height="24" rx="6" className="sc-bore" />
      <g transform="translate(52 76)">
        <g className="sc-slide">
          <Spool />
        </g>
      </g>
    </Scene>
  );
}

/** 5 — Test: hortum, akış ve ibre. */
export function SceneTest({ className }: P) {
  return (
    <Scene viewBox="0 0 240 150" className={`sc-test ${className || ""}`}>
      <rect x="22" y="84" width="92" height="36" rx="8" className="sc-fill" />
      <line x1="34" y1="102" x2="102" y2="102" className="sc-dash" />
      <path d="M114 102h34c12 0 16-6 16-16V74" className="sc-line" />
      <path d="M114 102h34c12 0 16-6 16-16V74" className="sc-flow" />
      <circle cx="164" cy="48" r="26" className="sc-fill" />
      <g className="sc-needle-g">
        <line x1="164" y1="48" x2="164" y2="28" className="sc-needle" />
      </g>
      <circle cx="164" cy="48" r="3.5" className="sc-accent" />
      <path d="M196 112l8 9 14-17" className="sc-check" pathLength={100} />
    </Scene>
  );
}

/* ---------- Pompa: patlatılmış iç grup ---------- */

/** Pistonlu pompa iç grubu: kayar plaka, pistonlar, silindir bloğu, valf plakası. */
export function PumpExploded({ className }: P) {
  const pistons = [0, 1, 2, 3];
  return (
    <Scene viewBox="0 0 300 170" className={`sc-pump ${className || ""}`}>
      {/* kayar plaka (eğik) */}
      <g className="px-plate">
        <rect x="34" y="38" width="14" height="94" rx="5" className="sc-fill" transform="rotate(-12 41 85)" />
      </g>
      {/* pistonlar + pabuçlar */}
      <g className="px-pistons">
        {pistons.map((i) => (
          <g key={i} className={`px-piston px-p${i}`}>
            <circle cx="64" cy={52 + i * 22} r="5" className="sc-accent" />
            <line x1="69" y1={52 + i * 22} x2="108" y2={52 + i * 22} className="sc-line" />
            <rect x="108" y={45 + i * 22} width="18" height="14" rx="4" className="sc-accent-fill" />
          </g>
        ))}
      </g>
      {/* silindir bloğu */}
      <g className="px-block">
        <rect x="140" y="34" width="66" height="102" rx="12" className="sc-fill" />
        {pistons.map((i) => (
          <line key={i} x1="148" y1={52 + i * 22} x2="198" y2={52 + i * 22} className="sc-dash" />
        ))}
      </g>
      {/* valf plakası: böbrek kanallı */}
      <g className="px-vplate">
        <rect x="224" y="40" width="16" height="90" rx="7" className="sc-fill" />
        <path d="M232 54v26" className="sc-kidney" />
        <path d="M232 90v26" className="sc-kidney" />
      </g>
      {/* eksen çizgisi */}
      <line x1="20" y1="85" x2="280" y2="85" className="sc-axis" />
    </Scene>
  );
}

/* ---------- İmalat: torna/taşlama tezgâhı ---------- */

export function LatheScene({ className }: P) {
  return (
    <Scene viewBox="0 0 280 150" className={`sc-lathe ${className || ""}`}>
      {/* ayna + çeneler */}
      <g className="lt-chuck">
        <circle cx="54" cy="70" r="30" className="sc-fill" />
        <circle cx="54" cy="70" r="30" className="sc-wheel" pathLength={100} />
        <rect x="48" y="36" width="12" height="12" rx="2" className="sc-accent-fill" />
        <rect x="48" y="92" width="12" height="12" rx="2" className="sc-accent-fill" />
        <rect x="22" y="64" width="12" height="12" rx="2" className="sc-accent-fill" />
      </g>
      {/* iş parçası */}
      <g className="lt-work">
        <rect x="84" y="60" width="118" height="20" rx="6" className="sc-fill" />
        <line x1="84" y1="70" x2="202" y2="70" className="sc-dash lt-spin" />
      </g>
      {/* kesici takım */}
      <g className="lt-tool">
        <path d="M186 96l10-14h10l-6 20z" className="sc-accent-fill" />
        <rect x="192" y="102" width="44" height="12" rx="3" className="sc-fill" />
      </g>
      <g className="sc-sparks">
        <line x1="190" y1="80" x2="182" y2="90" className="sc-spark" />
        <line x1="196" y1="82" x2="196" y2="94" className="sc-spark" />
        <line x1="202" y1="80" x2="210" y2="90" className="sc-spark" />
      </g>
    </Scene>
  );
}

/* ---------- Videolu test: tezgah şeması ---------- */

export function TestBenchScene({ className }: P) {
  return (
    <Scene viewBox="0 0 320 150" className={`sc-bench ${className || ""}`}>
      {/* güç ünitesi */}
      <rect x="18" y="92" width="64" height="38" rx="8" className="sc-fill" />
      <circle cx="50" cy="111" r="10" className="sc-accent" />
      {/* hat: ünite -> valf -> manometre */}
      <path d="M82 111h54" className="sc-line" />
      <path d="M82 111h54" className="sc-flow" />
      <rect x="136" y="96" width="70" height="30" rx="8" className="sc-fill" />
      <line x1="146" y1="111" x2="196" y2="111" className="sc-dash" />
      <path d="M206 111h28c10 0 14-5 14-14V78" className="sc-line" />
      <path d="M206 111h28c10 0 14-5 14-14V78" className="sc-flow" />
      {/* manometre */}
      <circle cx="248" cy="52" r="26" className="sc-fill" />
      <g className="sc-needle-g">
        <line x1="248" y1="52" x2="248" y2="32" className="sc-needle" />
      </g>
      <circle cx="248" cy="52" r="3.5" className="sc-accent" />
      {/* kayıt (kamera) */}
      <g className="bn-rec">
        <rect x="286" y="96" width="24" height="18" rx="4" className="sc-fill" />
        <path d="M310 101l8-5v18l-8-5z" className="sc-accent-fill" />
        <circle cx="298" cy="88" r="3" className="bn-rec-dot" />
      </g>
    </Scene>
  );
}

/* ---------- Hizmet kartı çizgi ikonları (stroke-draw) ---------- */

function LineIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`line-icon anim ${className || ""}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">{children}</svg>
    </span>
  );
}

export function IconValf({ className }: P) {
  return (
    <LineIcon className={className}>
      <rect x="6" y="16" width="36" height="16" rx="5" className="li-draw" pathLength={100} />
      <line x1="2" y1="24" x2="46" y2="24" className="li-draw li-d2" pathLength={100} />
      <rect x="14" y="19" width="7" height="10" rx="2" className="li-draw li-d3" pathLength={100} />
      <rect x="28" y="19" width="7" height="10" rx="2" className="li-draw li-d3" pathLength={100} />
      <line x1="16" y1="36" x2="16" y2="42" className="li-draw li-d4" pathLength={100} />
      <line x1="32" y1="36" x2="32" y2="42" className="li-draw li-d4" pathLength={100} />
    </LineIcon>
  );
}

export function IconPompa({ className }: P) {
  return (
    <LineIcon className={className}>
      <circle cx="24" cy="24" r="17" className="li-draw" pathLength={100} />
      <circle cx="24" cy="13" r="3.4" className="li-draw li-d2" pathLength={100} />
      <circle cx="33.5" cy="29.5" r="3.4" className="li-draw li-d3" pathLength={100} />
      <circle cx="14.5" cy="29.5" r="3.4" className="li-draw li-d4" pathLength={100} />
      <circle cx="24" cy="24" r="4" className="li-draw li-d4" pathLength={100} />
    </LineIcon>
  );
}

export function IconCnc({ className }: P) {
  return (
    <LineIcon className={className}>
      <circle cx="16" cy="24" r="10" className="li-draw" pathLength={100} />
      <line x1="26" y1="24" x2="42" y2="24" className="li-draw li-d2" pathLength={100} />
      <path d="M34 30l4-6 4 6z" className="li-draw li-d3" pathLength={100} />
      <line x1="38" y1="30" x2="38" y2="38" className="li-draw li-d4" pathLength={100} />
    </LineIcon>
  );
}

export function IconParca({ className }: P) {
  return (
    <LineIcon className={className}>
      <path d="M24 5l16 9v20l-16 9-16-9V14z" className="li-draw" pathLength={100} />
      <circle cx="24" cy="24" r="7" className="li-draw li-d3" pathLength={100} />
    </LineIcon>
  );
}

/* ---------- Ana sayfa / valf sayfası: 5 adımlı görsel hikâye ---------- */

export const valveStorySteps = [
  { id: "01", title: "Söküm", note: "Valf açılır, arıza kaynağı görülür.", Scene: SceneSokum },
  { id: "02", title: "Ölçüm", note: "Spool ve kanallar mikrometreyle ölçülür.", Scene: SceneOlcum },
  { id: "03", title: "Taşlama", note: "Yüzeyler taşlanır; gereken spool imal edilir.", Scene: SceneTaslama },
  { id: "04", title: "Montaj", note: "Parçalar temiz gövdeye geri toplanır.", Scene: SceneMontaj },
  { id: "05", title: "Test", note: "Tezgâhta çalıştırılır, kayıt alınır.", Scene: SceneTest },
] as const;

export function ValveStory() {
  return (
    <ol className="story-grid">
      {valveStorySteps.map((s, i) => (
        <li key={s.id} className="story-step rv" style={{ ["--d" as string]: `${i * 110}ms` }}>
          <s.Scene />
          <h3>
            <span className="story-no">{s.id}</span> {s.title}
          </h3>
          <p>{s.note}</p>
        </li>
      ))}
    </ol>
  );
}
