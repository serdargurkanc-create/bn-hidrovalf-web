import Link from "next/link";
import { asset } from "@/lib/paths";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-brand" aria-label="BN Hidrovalf Makina">
            <img
              src={asset("/logo/bn-hidrovalf-logo-112.webp")}
              srcSet={`${asset("/logo/bn-hidrovalf-logo-112.webp")} 112w, ${asset("/logo/bn-hidrovalf-logo-160.webp")} 160w`}
              sizes="140px"
              alt="BN Hidrovalf Makina"
              width={240}
              height={112}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </Link>
          <p>
            BN Hidrovalf Makina, Ankara İvedik OSB Yenimahalle’de 20+ yıldır valf ve
            pompa revizyonu yapan bağımsız bir atölyedir. Her marka iş makinasında
            söküm, spool imalatı, iç grup yüzey taşlama ve tezgâhta videolu test bu
            adreste tamamlanır. Resmi bayi değildir; parça Türkiye genelinden tek
            atölyeye gelir.
          </p>
          <ul className="footer-contact">
            <li>
              <a href={`tel:${site.phoneTel}`}>
                <span className="footer-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 4h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4h2z" />
                  </svg>
                </span>
                <span>{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <span className="footer-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 7 9-7" />
                  </svg>
                </span>
                <span>{site.email}</span>
              </a>
            </li>
            <li>
              <a href={site.maps} target="_blank" rel="noopener noreferrer">
                <span className="footer-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.2" />
                  </svg>
                </span>
                <span>{site.address.line}</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Hizmetler</h2>
          <ul>
            <li>
              <Link href="/revizyon">Valf ve pompa revizyonu</Link>
            </li>
            <li>
              <Link href="/revizyon/valf">Valf revizyonu</Link>
            </li>
            <li>
              <Link href="/revizyon/pompa">Pompa revizyonu</Link>
            </li>
            <li>
              <Link href="/revizyon/surec">Süreç ve teslimat</Link>
            </li>
            <li>
              <Link href="/revizyon/videolu-test">Videolu test</Link>
            </li>
            <li>
              <Link href="/revizyon/ariza-belirtileri">Arıza belirtileri</Link>
            </li>
            <li>
              <Link href="/revizyon/marka">Marka sayfaları</Link>
            </li>
            <li>
              <Link href="/imalat">CNC ve özel imalat</Link>
            </li>
            <li>
              <Link href="/yedek-parca">Yedek parça</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Kurumsal</h2>
          <ul>
            <li>
              <Link href="/hakkimizda">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/sss">Sık sorulan sorular</Link>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
            <li>
              <Link href="/teklif">Fotoğrafla teklif al</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-legal">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a
          className="footer-credit"
          href="https://sumdijital.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="sumdijital.com"
        >
          <img
            src={asset("/logo/sum-dijital.webp")}
            alt=""
            width={160}
            height={74}
          />
        </a>
        <nav aria-label="Yasal">
          <Link href="/gizlilik">KVKK ve gizlilik</Link>
          <Link href="/cerez-politikasi">Çerez politikası</Link>
        </nav>
      </div>
    </footer>
  );
}
