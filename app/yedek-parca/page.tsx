import type { Metadata } from "next";
import { Inner, QuoteCta } from "@/components/Inner";

export const metadata: Metadata = {
  title: "Yedek parça",
  description:
    "Revizyona bağlı veya ayrı talepte yedek parça tedariki. BN Hidrovalf Makina, İvedik OSB, Ankara.",
  alternates: { canonical: "/yedek-parca" },
};

export default function Page() {
  return (
    <Inner
      kicker="Destek hizmet"
      title="Yedek parça"
      lead="Revizyona bağlı veya ayrı bir talepte parça tedariki. Teklif için parça tipi veya fotoğraf yeterlidir."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "Yedek parça" }]}
    >
      <QuoteCta />
    </Inner>
  );
}
