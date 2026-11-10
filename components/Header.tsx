import { nav, site } from "@/lib/site";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Header() {
  return (
    <>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" aria-label="Menüyü aç veya kapat" />
      <header className="header">
        <div className="header-inner">
          <a href="/" className="brand">
            <img
              src="/logo/bn-hidrovalf-makine-gecici-160.webp"
              alt=""
              width={160}
              height={95}
              fetchPriority="low"
            />
            <span className="brand-name">
              BN Hidrovalf
              <span>Makina</span>
            </span>
          </a>

          <nav className="nav" aria-label="Ana menü">
            {nav.map((item) =>
              "children" in item && item.children ? (
                <details key={item.href}>
                  <summary>{item.label}</summary>
                  <ul>
                    <li>
                      <a href={item.href}>Tüm revizyon</a>
                    </li>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <a href={c.href}>{c.label}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              )
            )}
          </nav>

          <a href="/teklif" className="btn btn-ink header-cta">
            Teklif Alın
            <Arrow />
          </a>

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
      </header>

      <label htmlFor="menu-toggle" className="backdrop"><span className="sr-only">Menüyü kapat</span></label>

      <div id="mobil-menu" className="drawer">
        <nav aria-label="Mobil menü">
          {nav.map((item) => (
            <div key={item.href}>
              <a href={item.href}>{item.label}</a>
              {"children" in item && item.children ? (
                <ul>
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <a href={c.href}>{c.label}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <a href="/teklif" className="btn btn-ink" style={{ marginTop: "1.25rem", width: "100%" }}>
            Teklif Alın
            <Arrow />
          </a>
        </nav>
      </div>
    </>
  );
}
