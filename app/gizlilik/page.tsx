import type { Metadata } from "next";
import { Inner } from "@/components/Inner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK ve gizlilik",
  alternates: { canonical: "/gizlilik" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Inner
      title="KVKK ve gizlilik"
      lead="Ayrıntılı metin hukuki incelemeden sonra yayınlanacaktır."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "KVKK ve gizlilik" }]}
    >
      <p>
        Kişisel veri talepleri ve bilgi talepleri için {site.email} ve {site.phone} üzerinden
        ulaşabilirsiniz.
      </p>
    </Inner>
  );
}
