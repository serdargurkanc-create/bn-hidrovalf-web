import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, QuoteCta, Section } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Arıza belirtileri rehberi",
  description:
    "İş makinasında güç kaybı, ısınma, iç kaçak, spool sıkışması, gürültü gibi belirtiler ve olası nedenleri. Kesin tespit atölyede yapılır. BN Hidrovalf Makina.",
  path: "/revizyon/ariza-belirtileri",
});

const crumbs = [
  { href: "/", label: "Ana sayfa" },
  { href: "/revizyon", label: "Revizyon" },
  { label: "Arıza belirtileri" },
];

type Symptom = {
  s: string;
  nedenler: string[];
  oneri: string;
};

const valfBelirtileri: Symptom[] = [
  {
    s: "Bir fonksiyon (bom, kova, yürüyüş) çalışmıyor veya yavaş",
    nedenler: [
      "İlgili valf dilimindeki spool aşınması veya sıkışması",
      "Dilim içindeki emniyet/çek valfin görev yapmaması",
      "Pilot basıncı veya kumanda hattı sorunu",
    ],
    oneri:
      "Valf revizyonu kapsamında dilim sökülür, spool ölçülür; gerekirse spool yeniden imal edilir.",
  },
  {
    s: "Kumanda bırakılınca hareket durmayıp kayıyor (tırmanma)",
    nedenler: [
      "Spool-gövde boşluğunun artması (iç kaçak)",
      "Yük tutucu çek valf oturma yüzeyinin bozulması",
    ],
    oneri:
      "İç kaçak tezgâh testinde doğrulanır; kaynağına göre spool imalatı veya oturma yüzeyi düzeltilir.",
  },
  {
    s: "Kumanda kolu sert, spool takılıyor",
    nedenler: [
      "Spool üzerinde çapak, kirlenme veya sarma başlangıcı",
      "Yay/merkezleme mekanizması hasarı",
    ],
    oneri:
      "Spool yüzeyi ve gövde kanalı incelenir; temizlik, taşlama veya yeni spool ile çözülür.",
  },
];

const pompaBelirtileri: Symptom[] = [
  {
    s: "Makine genelinde güç kaybı, yük altında yavaşlama",
    nedenler: [
      "Pompa iç grubunda (blok, piston, ayna) aşınma",
      "Kayar plaka yüzeyinde çizilme",
      "Regülatör ayar veya arıza durumu",
    ],
    oneri:
      "Pompa sökülüp iç grup mikrometre ile ölçülür; yüzeyler taşlanır, test tezgâhında debi-basınç davranışı doğrulanır.",
  },
  {
    s: "Hidrolik yağ aşırı ısınıyor",
    nedenler: [
      "İç kaçak nedeniyle enerjinin ısıya dönmesi",
      "Aşınmış iç grup veya valf iç kaçağı",
      "Yağ ve filtre bakım durumu",
    ],
    oneri:
      "Isınmanın kaynağı (pompa mı valf mi) atölyede testle ayrıştırılır; ilgili grup revize edilir.",
  },
  {
    s: "Pompadan gelen gürültü, titreşim",
    nedenler: [
      "Kavitasyon (emişte hava/daralma)",
      "Rulman veya iç grup hasarı",
    ],
    oneri:
      "Gürültünün tipi söküme yön verir; rulman, iç grup ve emiş hattı birlikte değerlendirilir.",
  },
];

function SymptomList({ items, idPrefix }: { items: Symptom[]; idPrefix: string }) {
  return (
    <div className="wizard">
      {items.map((b, i) => (
        <details key={b.s} className="wizard-item" id={`${idPrefix}-${i + 1}`}>
          <summary>{b.s}</summary>
          <div className="wizard-panel">
            <h4>Olası nedenler</h4>
            <ul>
              {b.nedenler.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <h4>Atölyede ne yapılır?</h4>
            <p>{b.oneri}</p>
            <p className="wizard-cta">
              <Link href="/teklif" className="btn btn-primary">
                Bu belirtiyle teklif iste
              </Link>
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SchemaLd path="/revizyon/ariza-belirtileri" crumbs={crumbs} />
      <PageHero
        kicker="Rehber"
        title="Belirtiden"
        accent="olası nedene"
        lead="Belirtinizi seçin; olası nedenleri ve atölyede ne yapıldığını görün. Buradaki eşleştirmeler ön bilgidir, kesin teşhis değildir: kesin tespit, parça atölyede söküldükten sonra yapılır."
        crumbs={crumbs}
      />

      <Section
        id="valf"
        kicker="Valf"
        title="Valf kaynaklı"
        accent="belirtiler"
      >
        <SymptomList items={valfBelirtileri} idPrefix="valf-belirti" />
      </Section>

      <Section
        id="pompa"
        kicker="Pompa"
        title="Pompa kaynaklı"
        accent="belirtiler"
        tone="soft"
      >
        <SymptomList items={pompaBelirtileri} idPrefix="pompa-belirti" />
      </Section>

      <Section id="not" kicker="Önemli not" title="Bu bir" accent="kesin teşhis değildir">
        <p className="notice rv">
          Aynı belirti birden fazla kaynaktan doğabilir; ısınma veya güç kaybı
          hem pompadan hem valften gelebilir. Kesin tespit, atölyede söküm ve
          tezgâh testiyle yapılır. Fotoğraf ve belirtiyle{" "}
          <Link href="/teklif">ön değerlendirme</Link> ücretsiz başlar.
        </p>
      </Section>

      <QuoteCta />
    </>
  );
}
