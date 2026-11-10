import type { Metadata } from "next";
import { Inner, QuoteCta } from "@/components/Inner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Valf ve pompa revizyonu",
  description:
    "BN Hidrovalf Makina, her marka iş makinasında valf ve pompa revizyonu yapar. Spool imalatı, iç grup yüzey taşlama, videolu test kaydı. İvedik OSB, Ankara.",
  alternates: { canonical: "/revizyon" },
};

export default function Page() {
  return (
    <Inner
      kicker="Ana hizmet"
      title="Valf ve pompa revizyonu"
      lead="BN Hidrovalf Makina, İvedik OSB’deki atölyesinde her marka iş makinası valf ve pompa revizyonu yapar. Her iş videolu test kaydı ile teslim edilir."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "Revizyon" }]}
    >
      <p>
        Valf tarafında spool imalatı, arıza çözümü ve valf testi; pompa tarafında iç grup
        yüzey taşlama ve pompa testi kapsamdadır. Teslimat Türkiye geneline kargo ile
        adrese, hızlı çözüm olarak otobüs kurye ile yapılır.
      </p>
      <ul>
        <li>
          <Link href="/revizyon/valf">İş makinası valf revizyonu</Link>
        </li>
        <li>
          <Link href="/revizyon/pompa">İş makinası pompa revizyonu</Link>
        </li>
        <li>
          <Link href="/revizyon/surec">Süreç, test ve teslimat</Link>
        </li>
      </ul>
      <QuoteCta />
    </Inner>
  );
}
