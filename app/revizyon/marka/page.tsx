import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, PageHero, QuoteCta, Section } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { brands } from "@/lib/brands";
import { videos } from "@/lib/media";
import { pageMeta } from "@/lib/meta";
import { PhotoBand, RevFacts, RevLinks, VideoBand, shots } from "@/components/revizyon/Frame";

export const metadata: Metadata = pageMeta({
  title: "Marka bazlı valf ve pompa revizyonu",
  description:
    "Komatsu, CAT, Hitachi, Volvo, JCB, Hyundai iş makinaları ile Rexroth, Kawasaki, Linde valf ve pompa gruplarının revizyonu. Gereken parça tedarik edilir veya atölyede imal edilir.",
  path: "/revizyon/marka",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { href: "/revizyon", label: "Revizyon" },
  { label: "Markalar" },
];

const faqItems = [
  {
    q: "Listede olmayan marka için teklif verilir mi?",
    a: "Evet. Marka sayfaları sık gelen iş makinası ve komponent adlarını toplar. Listede olmayan valf ve pompa için de fotoğraf ve etiket bilgisiyle teklif istenir.",
  },
  {
    q: "Marka sayfası ne anlatır?",
    a: "O markanın valf ve pompasında atölyede yapılan işi anlatır. İş Ankara İvedik OSB’deki tek atölyede biter; test sonucu videolu kayıttır. Gereken parça tedarik edilir veya atölyede imal edilir.",
  },
];

export default function Page() {
  const makine = brands.filter((b) => b.kind === "makine");
  const komponent = brands.filter((b) => b.kind === "komponent");
  return (
    <>
      <SchemaLd
        path="/revizyon/marka"
        crumbs={crumbs}
        faqs={faqItems}
        service={{
          name: "Marka bazlı valf ve pompa revizyonu",
          description:
            "Komatsu, CAT, Hitachi, Volvo, JCB, Hyundai, Rexroth, Kawasaki ve Linde valf ve pompa revizyonu. Ankara İvedik OSB.",
        }}
      />
      <PageHero
        kicker="Markalar"
        title="Her marka,"
        accent="tek atölye"
        lead="Aşağıdaki markaların iş makinası valf ve pompaları revizyona kabul edilir; listede olmayan markalar için de teklif istenebilir."
        crumbs={crumbs}
      />
      <RevFacts />

      <Section
        id="makine"
        kicker="İş makinası üreticileri"
        title="Makinasına göre"
        accent="seçin"
      >
        <div className="support-grid brand-grid">
          {makine.map((b, i) => (
            <Link
              key={b.slug}
              href={`/revizyon/marka/${b.slug}`}
              className="support-card rv"
              style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}
            >
              <strong>{b.name}</strong>
              <p>{b.scope}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="komponent"
        kicker="Valf / pompa üreticileri"
        title="Parçasına göre"
        accent="seçin"
        tone="soft"
      >
        <div className="support-grid brand-grid">
          {komponent.map((b, i) => (
            <Link
              key={b.slug}
              href={`/revizyon/marka/${b.slug}`}
              className="support-card rv"
              style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}
            >
              <strong>{b.name}</strong>
              <p>{b.scope}</p>
            </Link>
          ))}
        </div>
      </Section>

      <PhotoBand shots={shots.marka} title="Marka işinden" accent="kareler" />
      <VideoBand clips={[videos.spoolTaslama, videos.icCapIsleme]} title="Tezgâh" accent="kayıtları" />
      <Section id="sss" kicker="SSS" title="Marka" accent="soruları" tone="soft">
        <FaqList items={faqItems} idPrefix="marka-soru" />
      </Section>
      <RevLinks current="/revizyon/marka" />
      <QuoteCta />
    </>
  );
}
