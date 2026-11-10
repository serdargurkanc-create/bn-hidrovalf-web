import Link from "next/link";
import { asset } from "@/lib/paths";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="brand-name">{site.name}</p>
          <p>
            20+ yıllık tecrübeye sahip kurumsal çözüm ortağı. Her marka iş makinasında
            valf ve pompa revizyonu. İvedik OSB, Ankara.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            {site.address.line}
          </p>
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
        <Link href="/gizlilik">KVKK ve gizlilik</Link>
        <Link href="/cerez-politikasi">Çerez politikası</Link>
        <a href={asset("/llms.txt")} type="text/markdown" rel="alternate">
          llms.txt
        </a>
      </div>
    </footer>
  );
}
