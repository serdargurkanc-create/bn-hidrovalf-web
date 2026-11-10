import type { Metadata } from "next";
import { Inner, QuoteCta } from "@/components/Inner";
import { journey } from "@/lib/site";

export const metadata: Metadata = {
  title: "Revizyon süreci, test ve teslimat",
  description:
    "Ön değerlendirme, söküm, yazılı teklif, revizyon ve videolu test kaydı. Teslimat kargo ile adrese veya otobüs kurye. BN Hidrovalf Makina.",
  alternates: { canonical: "/revizyon/surec" },
};

export default function Page() {
  return (
    <Inner
      kicker="Süreç"
      title="Süreç, test ve teslimat"
      lead="Fotoğraf veya kısa video ile ön değerlendirme başlar. Test sonucu videolu kayıt olarak verilir."
      crumbs={[
        { href: "/", label: "Ana sayfa" },
        { href: "/revizyon", label: "Revizyon" },
        { label: "Süreç" },
      ]}
    >
      <ol>
        {journey.map((step) => (
          <li key={step.id} style={{ marginBottom: "1rem" }}>
            <strong>{step.title}.</strong> {step.body}
          </li>
        ))}
      </ol>
      <QuoteCta />
    </Inner>
  );
}
