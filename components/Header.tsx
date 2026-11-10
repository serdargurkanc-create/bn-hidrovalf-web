import Link from "next/link";
import { asset } from "@/lib/paths";
import { nav } from "@/lib/site";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/**
 * Üst gezinme. Tamamı tek <header> landmark'ı içindedir (axe "region"
 * uyarısı için); <header> display:contents olduğundan yapışkan çubuk ve
 * sabit çekmece düzeni bozulmaz. Menü onay kutusu + CSS ile çalışır.
 */
export function Header() {
  return (
    <header className="header-root">
      <input type="checkbox" id="menu-toggle" className="menu-toggle" aria-label="Menüyü aç veya kapat" />
      <div className="header">
        <div className="header-inner">
          <Link href="/" className="brand">
            <img
              src={asset("/logo/bn-hidrovalf-makine-gecici-160.webp")}
              alt=""
              width={160}
              height={95}
              fetchPriority="low"
            />
            <span className="brand-name">
              BN Hidrovalf
              <span>Makina</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Ana menü">
            {nav.map((item) =>
              "children" in item && item.children ? (
                <details key={item.href}>
                  <summary>{item.label}</summary>
                  <ul>
                    <li>
                      <Link href={item.href}>Tüm revizyon</Link>
                    </li>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link href="/teklif" className="btn btn-ink header-cta">
            Teklif Alın
            <Arrow />
          </Link>

          <label htmlFor="menu-toggle" className="menu-btn" aria-controls="mobil-menu">
            <span className="sr-only">Menüyü aç veya kapat</span>
            <svg className="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h10" />
            </svg>
            <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </label>
        </div>
      </div>

      <label htmlFor="menu-toggle" className="backdrop"><span className="sr-only">Menüyü kapat</span></label>

      <div id="mobil-menu" className="drawer">
        <nav aria-label="Mobil menü">
          {nav.map((item) => (
            <div key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {"children" in item && item.children ? (
                <ul>
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <Link href="/teklif" className="btn btn-ink" style={{ marginTop: "1.25rem", width: "100%" }}>
            Teklif Alın
            <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}
