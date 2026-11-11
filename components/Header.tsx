import Link from "next/link";
import { asset } from "@/lib/paths";
import { nav, whatsappQuote } from "@/lib/site";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.99.58 3.84 1.6 5.4L2 22l4.92-1.6a9.9 9.9 0 0 0 5.12 1.41h.01c5.46 0 9.89-4.4 9.89-9.83S17.5 2 12.04 2zm5.75 13.9c-.24.67-1.4 1.23-1.93 1.31-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.78-4.16-4.93-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.18 0 .41-.06.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.16.28.73 1.2 1.56 1.94 1.07.96 1.97 1.26 2.25 1.4.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.67-.17 1.34z" />
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
          <Link href="/" className="brand" aria-label="BN Hidrovalf Makina — ana sayfa">
            <img
              src={asset("/logo/bn-hidrovalf-logo-112.webp")}
              srcSet={`${asset("/logo/bn-hidrovalf-logo-56.webp")} 56w, ${asset("/logo/bn-hidrovalf-logo-112.webp")} 112w, ${asset("/logo/bn-hidrovalf-logo-160.webp")} 160w`}
              sizes="120px"
              alt="BN Hidrovalf Makina"
              width={240}
              height={112}
              fetchPriority="high"
            />
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
          <a
            href={whatsappQuote}
            className="btn btn-whatsapp"
            style={{ marginTop: "0.65rem", width: "100%" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
