import type { Metadata } from "next";
import { Inner, QuoteCta } from "@/components/Inner";

export const metadata: Metadata = {
  title: "CNC ve özel imalat",
  description:
    "Valf revizyonunda spool, pompa revizyonunda iç grup yüzey taşlama atölyede yapılır. Torna, freze ve taşlama kabiliyeti. BN Hidrovalf Makina, İvedik OSB.",
  alternates: { canonical: "/imalat" },
};

export default function Page() {
  return (
    <Inner
      kicker="İkincil hizmet"
      title="CNC ve özel imalat"
      lead="Valf revizyonunda spool, pompa revizyonunda iç grup yüzey taşlama gibi işler atölyede yapılır. Bunun için torna, freze ve taşlama kabiliyeti kullanılır."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "CNC ve özel imalat" }]}
    >
      <p>
        CNC ve özel imalat, ana hizmet olan valf ve pompa revizyonunu destekler. Ayrı bir
        özel parça işi için de teklif alınabilir.
      </p>
      <QuoteCta />
    </Inner>
  );
}
