import type { Metadata } from "next";
import { Inner, QuoteCta } from "@/components/Inner";

export const metadata: Metadata = {
  title: "İş makinası valf revizyonu",
  description:
    "Her marka iş makinası valf revizyonu, spool imalatı, arıza çözümü ve valf testi. Test sonucu videolu kayıttır. BN Hidrovalf Makina, İvedik OSB, Ankara.",
  alternates: { canonical: "/revizyon/valf" },
};

export default function Page() {
  return (
    <Inner
      kicker="Valf"
      title="İş makinası valf revizyonu"
      lead="Her marka iş makinası valf revizyonu yapılır. Kapsama spool imalatı, arıza çözümü ve valf testi dahildir."
      crumbs={[
        { href: "/", label: "Ana sayfa" },
        { href: "/revizyon", label: "Revizyon" },
        { label: "Valf" },
      ]}
    >
      <p>
        Test sonucu yazılı rapor olarak değil, videolu kayıt olarak verilir. Teklif için
        makine marka ve modeli, valf tipi veya bir fotoğraf yeterlidir.
      </p>
      <QuoteCta />
    </Inner>
  );
}
