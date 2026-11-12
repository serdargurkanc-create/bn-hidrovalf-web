import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BrandChips,
  FaqList,
  PageHero,
  QuoteCta,
  Section,
} from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { brandBlurb, brands, getBrand } from "@/lib/brands";
import { videos } from "@/lib/media";
import { pageMeta } from "@/lib/meta";
import { PhotoBand, RevFacts, RevLinks, VideoBand, shots } from "@/components/revizyon/Frame";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/revizyon/marka/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return pageMeta({
    title: `${brand.slug === "cat" ? "CAT" : brand.name} valf ve pompa revizyonu`,
    description: brandBlurb(brand.slug),
    path: `/revizyon/marka/${brand.slug}`,
  });
}

export default async function Page({
  params,
}: PageProps<"/revizyon/marka/[slug]">) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const crumbs = [
    { href: "/", label: "Ana sayfa" },
    { href: "/revizyon", label: "Revizyon" },
    { href: "/revizyon/marka", label: "Markalar" },
    { label: brand.name },
  ];

  const faqItems = [
    {
      q: `${brand.name} valf veya pompa revizyonu burada yapılır mı?`,
      a: `Evet. ${brand.name} valf ve pompaları İvedik OSB’deki atölyede sökülür, ölçülür; gereken taşlama veya imalat yapılır ve tezgâhta videolu test edilir. Parça işe göre tedarik edilir veya atölyede imal edilir.`,
    },
    {
      q: `${brand.name} için yedek parça stoğunuz var mı?`,
      a: "Sahte veya hazır stok kataloğu yayınlanmaz. Revizyonun gerektirdiği parçalar işe göre tedarik edilir; spool gibi parçalar atölyede imal edilebilir.",
    },
    {
      q: "Teklif için ne göndermeliyim?",
      a: `Makine veya parça üzerindeki etiket bilgisi (model, seri) ve bir fotoğraf yeterlidir. Parça, kargo veya otobüs kurye ile Ankara İvedik OSB’deki atölyeye gönderilir.`,
    },
  ];

  const digerleri = brands.filter((b) => b.slug !== brand.slug);

  return (
    <>
      <SchemaLd
        path={`/revizyon/marka/${brand.slug}`}
        crumbs={crumbs}
        service={{
          name: `${brand.name} valf ve pompa revizyonu`,
          description: brand.scope,
        }}
        faqs={faqItems}
      />
      <PageHero
        kicker={
          brand.kind === "makine"
            ? "İş makinası markası"
            : "Valf / pompa üreticisi"
        }
        title={brand.name}
        accent="valf ve pompa revizyonu"
        lead={brand.scope}
        crumbs={crumbs}
      />
      <RevFacts />

      <Section id="kapsam" kicker="Kapsam" title="Bu markada" accent="yapılan iş">
        <div className="prose prose-wide">
          <p>{brand.context}</p>
          <p>
            Revizyon süreci marka fark etmeksizin aynıdır: fotoğrafla{" "}
            <Link href="/teklif">ön değerlendirme</Link>, söküm ve tespit,
            yazılı teklif, revizyon ve{" "}
            <Link href="/revizyon/videolu-test">videolu test</Link> ile teslim.
            Valf tarafında <Link href="/revizyon/valf">spool imalatı ve arıza
            çözümü</Link>, pompa tarafında{" "}
            <Link href="/revizyon/pompa">iç grup yüzey taşlama</Link> kapsam
            dahilindedir.
          </p>
          <p>
            Teslimat Türkiye geneline{" "}
            <Link href="/revizyon/teslimat">kargo ile adrese; hızlı seçenek
            otobüs kurye</Link> ile yapılır.
          </p>
        </div>
      </Section>

      <Section id="sss" kicker="SSS" title={brand.name} accent="soruları" tone="soft">
        <FaqList items={faqItems} idPrefix={`${brand.slug}-soru`} />
      </Section>

      <Section id="diger" kicker="Diğer markalar" title="Başka marka mı" accent="arıyorsunuz?">
        <BrandChips slugs={digerleri} />
      </Section>

      <PhotoBand shots={shots.marka} title={`${brand.name} işinden`} accent="kareler" lead="Atölyedeki valf ve pompa işlerinden kareler." />
      <VideoBand clips={[videos.spoolLogo, videos.govdeHazirlik]} title={`${brand.name}`} accent="kayıtları" lead="Tezgâh kayıtları. Tıklayınca oynar." />
      <RevLinks current={`/revizyon/marka/${brand.slug}`} />
      <QuoteCta />
    </>
  );
}
