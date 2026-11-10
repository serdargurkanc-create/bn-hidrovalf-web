import type { Metadata } from "next";
import { faqs } from "@/lib/site";
import { Inner, QuoteCta } from "@/components/Inner";

export const metadata: Metadata = {
  title: "Sık sorulan sorular",
  description:
    "Ankara, İvedik ve Ostim’de iş makinası valf veya pompa revizyonu, videolu test kaydı ve teslimat hakkında sık sorulan sorular. BN Hidrovalf Makina.",
  alternates: { canonical: "/sss" },
};

export default function Page() {
  return (
    <Inner
      title="Sık sorulan sorular"
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "SSS" }]}
    >
      {faqs.map((item) => (
        <section key={item.q} style={{ marginBottom: "1.75rem" }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.4rem" }}>{item.q}</h2>
          <p>{item.a}</p>
        </section>
      ))}
      <QuoteCta />
    </Inner>
  );
}
