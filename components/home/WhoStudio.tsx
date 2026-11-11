import Link from "next/link";
import { asset } from "@/lib/paths";

const tags = [
  {
    title: "Atölye Odaklı",
    note: "Her şey tezgâhta, ölçülerek başlar.",
    tone: "accent",
    icon: "shop",
  },
  {
    title: "Kayıtla Yönetilen",
    note: "Tahminle değil, videolu testle ilerleriz.",
    tone: "peach",
    icon: "rec",
  },
  {
    title: "Uçtan Uca Revizyon",
    note: "Sökümden teslimata, tek atölye.",
    tone: "teal",
    icon: "link",
  },
] as const;

const services = [
  { href: "/revizyon/valf", label: "Valf", a: "0deg", icon: "valf" },
  { href: "/revizyon/pompa", label: "Pompa", a: "60deg", icon: "pompa" },
  { href: "/imalat", label: "Spool", a: "120deg", icon: "spool" },
  { href: "/revizyon/pompa", label: "Taşlama", a: "180deg", icon: "grind" },
  { href: "/revizyon/videolu-test", label: "Test", a: "240deg", icon: "test" },
  { href: "/yedek-parca", label: "Parça", a: "300deg", icon: "part" },
] as const;

function Glyph({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "shop") {
    return (
      <svg {...common}>
        <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
        <path d="M3 10l2-5h14l2 5" />
        <path d="M9 20v-6h6v6" />
      </svg>
    );
  }
  if (name === "rec") {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="M16 10l5-3v10l-5-3z" />
      </svg>
    );
  }
  if (name === "link") {
    return (
      <svg {...common}>
        <path d="M10 13a5 5 0 0 0 7.07.54l1.43-1.43a5 5 0 0 0-7.07-7.07L10.2 6.2" />
        <path d="M14 11a5 5 0 0 0-7.07-.54L5.5 11.9a5 5 0 0 0 7.07 7.07l1.2-1.2" />
      </svg>
    );
  }
  if (name === "valf") {
    return (
      <svg {...common}>
        <rect x="3" y="9" width="18" height="6" rx="2" />
        <path d="M7 15v3M12 15v3M17 15v3M8 9V6M16 9V6" />
      </svg>
    );
  }
  if (name === "pompa") {
    return (
      <svg {...common}>
        <circle cx="10" cy="12" r="5" />
        <path d="M15 12h6M18 9v6" />
      </svg>
    );
  }
  if (name === "spool") {
    return (
      <svg {...common}>
        <path d="M3 12h18" />
        <rect x="6" y="8" width="3.5" height="8" rx="1" />
        <rect x="11" y="8" width="3.5" height="8" rx="1" />
        <rect x="16" y="8" width="3.5" height="8" rx="1" />
      </svg>
    );
  }
  if (name === "grind") {
    return (
      <svg {...common}>
        <circle cx="9" cy="12" r="5" />
        <path d="M14 12h7M17 9l3 3-3 3" />
      </svg>
    );
  }
  if (name === "test") {
    return (
      <svg {...common}>
        <circle cx="12" cy="13" r="7" />
        <path d="M12 13l4-3M12 6v2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3l7 4v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V7z" />
    </svg>
  );
}

export function WhoStudio() {
  return (
    <section className="who-band" aria-labelledby="biz-title">
      <div className="wrap">
        <div className="who">
          <div className="who-copy rv-l">
            <p className="who-eyebrow">Biz kimiz?</p>
            <h2 id="biz-title" className="who-title">
              Bir Atölyeden Fazlası, Makinenizin <em>Revizyon Gücü.</em>
            </h2>
            <p>
              BN Hidrovalf Makina, kökleri atölyeye dayanan bir revizyon ortağıdır.
              Valf ve pompa revizyonu, spool imalatı ve yüzey taşlama yaparken her işi
              videolu test kaydıyla teslim eder. Söküm, ölçüm ve montajı; tezgâh,
              mikrometre ve testle birleştiririz. Böylece çıkan her parça işe döner,
              her revizyon tezgâhta kanıtlanır.
            </p>
            <div className="who-tags">
              {tags.map((tag) => (
                <div key={tag.title} className={`wtag wtag-${tag.tone}`}>
                  <div className="wic">
                    <Glyph name={tag.icon} />
                  </div>
                  <div>
                    <b>{tag.title}</b>
                    <span>{tag.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="who-visual rv-r" id="whoLens">
            <div className="wv-grid" aria-hidden="true" />
            <div className="wv-strip" aria-hidden="true">
              {Array.from({ length: 8 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
            <div className="wv-glow" aria-hidden="true" />
            <div className="wv-lens">
              <div className="wv-ring r1" aria-hidden="true" />
              <div className="wv-ring r2" aria-hidden="true" />
              <div className="wv-orbit">
                {services.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="wv-svc"
                    style={{ ["--a" as string]: s.a }}
                    aria-label={s.label}
                  >
                    <span className="wv-svc-in">
                      <span className="wv-svc-keep">
                        <b>
                          <Glyph name={s.icon} />
                        </b>
                        <em>{s.label}</em>
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="wv-aperture" aria-hidden="true">
                {Array.from({ length: 6 }, (_, i) => (
                  <span key={i} />
                ))}
              </div>
              <div className="wv-logo">
                <Link href="/" aria-label="BN Hidrovalf Makina">
                  <img
                    src={asset("/logo/bn-hidrovalf-logo-160.webp")}
                    alt=""
                    width={160}
                    height={75}
                    decoding="async"
                    loading="lazy"
                    fetchPriority="low"
                  />
                </Link>
              </div>
            </div>
            <div className="wv-rec">
              <i aria-hidden="true" />
              REC
            </div>
            <div className="wv-hint">Merceğe yaklaşın</div>
            <p className="wv-cap">“Çıkan her parça, bir işe yarar.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
