import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  description: "Aradığınız sayfa bulunamadı. BN Hidrovalf Makina.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <article className="page nf">
      <div className="wrap nf-wrap">
        <div className="nf-art" aria-hidden="true">
          <svg viewBox="0 0 160 120" fill="none">
            <rect x="18" y="38" width="124" height="44" rx="10" className="nf-body" />
            <circle cx="46" cy="60" r="12" className="nf-port" />
            <circle cx="114" cy="60" r="12" className="nf-port" />
            <rect x="70" y="24" width="20" height="14" rx="4" className="nf-stem" />
            <path d="M58 96c8 10 36 10 44 0" className="nf-drip" />
          </svg>
        </div>
        <p className="badge">404</p>
        <h1>
          Bu sayfa <span className="serif-accent">devrede değil.</span>
        </h1>
        <p className="lead">
          Aradığınız adres taşınmış veya hiç var olmamış olabilir. Aşağıdaki
          yollardan devam edebilirsiniz.
        </p>
        <ul className="nf-links">
          <li>
            <Link href="/">Ana sayfa</Link>
          </li>
          <li>
            <Link href="/revizyon/valf">Valf revizyonu</Link>
          </li>
          <li>
            <Link href="/revizyon/pompa">Pompa revizyonu</Link>
          </li>
          <li>
            <Link href="/teklif">Fotoğrafla teklif al</Link>
          </li>
          <li>
            <Link href="/iletisim">İletişim</Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
