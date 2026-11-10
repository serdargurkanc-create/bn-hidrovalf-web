import type { Metadata } from "next";
import Link from "next/link";
import {
  IndependentNotice,
  PageHero,
  QuoteCta,
  Section,
} from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { brands } from "@/lib/brands";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Marka bazlı valf ve pompa revizyonu",
  description:
    "Komatsu, CAT, Hitachi, Volvo, JCB, Hyundai iş makinaları ile Rexroth, Kawasaki, Linde valf ve pompa gruplarının revizyonu. Bağımsız atölye; resmi bayilik yoktur.",
  path: "/revizyon/marka",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { href: "/revizyon", label: "Revizyon" },
  { label: "Markalar" },
];

export default function Page() {
  const makine = brands.filter((b) => b.kind === "makine");
  const komponent = brands.filter((b) => b.kind === "komponent");
  return (
    <>
      <SchemaLd path="/revizyon/marka" crumbs={crumbs} />
      <PageHero
        kicker="Markalar"
        title="Her marka,"
        accent="tek atölye"
        lead="Aşağıdaki markaların iş makinası valf ve pompaları revizyona kabul edilir; listede olmayan markalar için de teklif istenebilir."
        crumbs={crumbs}
      >
        <IndependentNotice />
      </PageHero>

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

      <QuoteCta />
    </>
  );
}
