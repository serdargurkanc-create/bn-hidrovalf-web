import Link from "next/link";
import { whatsappQuote } from "@/lib/site";

type Crumb = { href?: string; label: string };

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
        <nav className="crumbs" aria-label="Sayfa yolu">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {i > 0 ? " / " : null}
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>
        {kicker ? <p className="kicker" style={{ marginTop: "1.25rem" }}>{kicker}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        <div className="prose">{children}</div>
      </div>
    </article>
  );
}

export function QuoteCta() {
  return (
    <div className="page-cta">
      <Link href="/teklif" className="btn btn-primary">
        Fotoğrafla Teklif Al
      </Link>
      <a href={whatsappQuote} className="btn btn-ghost">
        WhatsApp ile fotoğraf gönder
      </a>
    </div>
  );
}
