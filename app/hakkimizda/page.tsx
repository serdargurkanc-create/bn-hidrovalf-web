import type { Metadata } from "next";
import { Inner } from "@/components/Inner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "BN Hidrovalf Makina, Ankara İvedik OSB’de 20+ yıllık tecrübeye sahip kurumsal çözüm ortağıdır. Valf ve pompa revizyonu.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Page() {
  return (
    <Inner
      title="Hakkımızda"
      lead={`${site.name}, İvedik OSB’de yerleşik, 20+ yıllık tecrübeye sahip kurumsal bir çözüm ortağıdır.`}
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "Hakkımızda" }]}
    >
      <p>
        Atölye, Genç Kardeşler Sanayi Sitesi, 2285. Sk. No:40, Yenimahalle/Ankara
        adresindedir. Ostim–İvedik sanayi havzasındaki filo, servis ve atölyelere ve
        Türkiye geneline hizmet verir.
      </p>
      <p>
        Ana iş valf ve pompa revizyonudur. Her marka iş makinası kabul edilir. Test
        sonucu videolu kayıt olarak paylaşılır.
      </p>
    </Inner>
  );
}
