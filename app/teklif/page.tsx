import type { Metadata } from "next";
import { Inner } from "@/components/Inner";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Revizyon teklifi",
  description:
    "Valf veya pompa revizyonu için teklif alın. Makine marka/model, parça tipi, arıza belirtisi ve fotoğraf yeterlidir. BN Hidrovalf Makina.",
  alternates: { canonical: "/teklif" },
};

export default function Page() {
  return (
    <Inner
      kicker="Teklif"
      title="Fotoğrafla teklif al"
      lead="Makine marka ve modeli, valf veya pompa tipi, arıza belirtisi ve bir fotoğraf yeterlidir. Teslimat tercihini kargo veya otobüs kurye olarak belirtebilirsiniz."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "Teklif" }]}
    >
      <QuoteForm />
    </Inner>
  );
}
