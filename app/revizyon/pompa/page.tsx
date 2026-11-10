import type { Metadata } from "next";
import { Inner, QuoteCta } from "@/components/Inner";

export const metadata: Metadata = {
  title: "İş makinası pompa revizyonu",
  description:
    "Her marka iş makinası pompa revizyonu, iç grup yüzey taşlama ve pompa testi. Test sonucu videolu kayıttır. BN Hidrovalf Makina, İvedik OSB, Ankara.",
  alternates: { canonical: "/revizyon/pompa" },
};

export default function Page() {
  return (
    <Inner
      kicker="Pompa"
      title="İş makinası pompa revizyonu"
      lead="Her marka iş makinası pompa revizyonu yapılır. Kapsama iç grup yüzey taşlama ve pompa testi dahildir."
      crumbs={[
        { href: "/", label: "Ana sayfa" },
        { href: "/revizyon", label: "Revizyon" },
        { label: "Pompa" },
      ]}
    >
      <p>
        Test sonucu yazılı rapor olarak değil, videolu kayıt olarak verilir. Teslimat
        kargo ile adrese veya hızlı çözüm olarak otobüs kurye ile yapılır.
      </p>
      <QuoteCta />
    </Inner>
  );
}
