import type { Metadata } from "next";
import { Inner, QuoteCta } from "@/components/Inner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "BN Hidrovalf Makina iletişim: Genç Kardeşler Sanayi Sitesi, İvedik OSB, 2285. Sk. No:40, Yenimahalle/Ankara. Tel +90 541 883 53 31, bnhidro@gmail.com.",
  alternates: { canonical: "/iletisim" },
};

export default function Page() {
  return (
    <Inner
      title="İletişim"
      lead="Adres, telefon, WhatsApp ve e-posta. Çalışma saati bu sayfada yayınlanmaz."
      crumbs={[{ href: "/", label: "Ana sayfa" }, { label: "İletişim" }]}
    >
      <p>
        <strong>Adres: </strong>
        <a href={site.maps} rel="noopener noreferrer" target="_blank">
          {site.address.line}
        </a>
      </p>
      <p>
        <strong>Telefon / WhatsApp: </strong>
        <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
      </p>
      <p>
        <strong>E-posta: </strong>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <QuoteCta />
    </Inner>
  );
}
