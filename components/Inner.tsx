import Link from "next/link";
import { whatsappQuote } from "@/lib/site";

type Crumb = { href?: string; label: string };

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Crumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Sayfa yolu">
      {crumbs.map((c, i) => (
        <span key={c.label}>
          {i > 0 ? " / " : null}
          {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
        </span>
      ))}
    </nav>
  );
}

/**
 * İç sayfa açılış sahnesi: hap etiket + büyük başlık (serif vurgu) +
 * lead + isteğe bağlı medya sütunu. Ana sayfa hero diliyle aynı aile.
 */
export function PageHero({
  kicker,
  title,
  accent,
  lead,
  crumbs,
  media,
  children,
}: {
  kicker?: string;
  title: string;
  /** Başlığın serif-italik vurgulanan kısmı (ayrı satır). */
  accent?: string;
  lead?: string;
  crumbs: Crumb[];
  media?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className={`page-hero${media ? " has-media" : ""}`}>
      <div className="wrap page-hero-grid">
        <div className="page-hero-copy">
          <Crumbs crumbs={crumbs} />
          {kicker ? <p className="badge page-kicker">{kicker}</p> : null}
          <h1>
            {title}
            {accent ? (
              <>
                {" "}
                <span className="serif-accent">{accent}</span>
              </>
            ) : null}
          </h1>
          {lead ? <p className="lead">{lead}</p> : null}
          {children}
        </div>
        {media ? <div className="page-hero-media">{media}</div> : null}
      </div>
    </header>
  );
}

/** Eski sade iç sayfa kabı (yasal sayfalar vb. için korunur). */
export function Inner({
  kicker,
  title,
  lead,
  crumbs,
  children,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <article className="page">
      <div className="wrap">
        <Crumbs crumbs={crumbs} />
        {kicker ? (
          <p className="kicker" style={{ marginTop: "1.25rem" }}>
            {kicker}
          </p>
        ) : null}
        <h1>{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        <div className="prose">{children}</div>
      </div>
    </article>
  );
}

/** Genel bölüm kabı: hap + başlık (serif vurgu) + içerik. */
export function Section({
  id,
  kicker,
  title,
  accent,
  lead,
  tone,
  children,
}: {
  id?: string;
  kicker?: string;
  title: string;
  accent?: string;
  lead?: string;
  tone?: "soft" | "plain";
  children: React.ReactNode;
}) {
  const hid = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      className={`page-sec${tone === "soft" ? " page-sec-soft" : ""}`}
      aria-labelledby={hid}
    >
      <div className="wrap">
        <div className="sec-head rv">
          {kicker ? <p className="badge">{kicker}</p> : null}
          <h2 id={hid}>
            {title}
            {accent ? (
              <>
                {" "}
                <span className="serif-accent">{accent}</span>
              </>
            ) : null}
          </h2>
          {lead ? <p className="sec-lead">{lead}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function QuoteCta({
  title = "Fotoğrafla teklif al",
  note = "Makine marka ve modeli, parça tipi ve bir fotoğraf yeterlidir. Garanti koşulları yazılı teklifte belirtilir.",
}: {
  title?: string;
  note?: string;
}) {
  return (
    <div className="quote-cta rv">
      <div className="wrap quote-cta-card">
        <h2>
          İşin ilk adımı <span className="serif-accent">bir fotoğraf.</span>
        </h2>
        <p>{note}</p>
        <div className="page-cta">
          <Link href="/teklif" className="btn btn-primary">
            {title}
            <Arrow />
          </Link>
          <a href={whatsappQuote} className="btn btn-outline">
            WhatsApp ile fotoğraf gönder
          </a>
        </div>
      </div>
    </div>
  );
}

/** Akordiyon SSS listesi; her soru paylaşılabilir `#` kimliği taşır. */
export function FaqList({
  items,
  idPrefix = "soru",
}: {
  items: readonly { q: string; a: string }[];
  idPrefix?: string;
}) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details className="faq-item" key={item.q} id={`${idPrefix}-${i + 1}`}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Marka seçici hapleri. */
export function BrandChips({
  heading = "Marka seçin",
  slugs,
}: {
  heading?: string;
  slugs: readonly { slug: string; name: string }[];
}) {
  return (
    <nav className="chip-row" aria-label={heading}>
      {slugs.map((b) => (
        <Link key={b.slug} href={`/revizyon/marka/${b.slug}`} className="chip">
          {b.name}
        </Link>
      ))}
    </nav>
  );
}
