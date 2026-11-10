import type { Metadata } from "next";
import { Inner } from "@/components/Inner";

export const metadata: Metadata = {
  title: "Çerez politikası",
  alternates: { canonical: "/cerez-politikasi" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Inner
      title="Çerez politikası"
      lead="Ayrıntılı çerez metni yayına alınmadan önce hazırlanacaktır. Bu önizlemede zorunlu olmayan izleme çerezi yoktur."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "Çerez politikası" }]}
    />
  );
}
