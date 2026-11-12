import type { Metadata } from "next";
import Link from "next/link";
import { KvkkConsent, MailFallback } from "@/components/FormConsent";
import { Crumbs, FaqList, QuoteCta, Section } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { pageMeta } from "@/lib/meta";
import { asset } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Yedek parça",
  description:
    "Yedek parça talebi: marka, model ve parça tipi. Parça tedarik edilir veya atölyede imal edilir. BN Hidrovalf, Ankara.",
  path: "/yedek-parca",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "Yedek parça" }];

const faqItems = [
  {
    q: "Hazır parça stok listeniz var mı?",
    a: "Çevrim içi bir stok kataloğu yayınlanmaz. Parça, talebe göre tedarik edilir; spool gibi parçalar gerektiğinde atölyede imal edilir. Bu yüzden en pratik yol, parça fotoğrafı ve etiket bilgisiyle talep iletmektir.",
  },
  {
    q: "Yalnızca revizyon yaptırırsam mı parça alabilirim?",
    a: "Hayır. Yedek parça, revizyona bağlı olmadan ayrı bir talep olarak da karşılanabilir. Ana işimiz revizyon olduğu için parça tedariki destek niteliğindedir.",
  },
  {
    q: "Orijinal parça mı veriliyor?",
    a: "Parçanın menşei ve niteliği, talep üzerine verilen yazılı teklifte açıkça belirtilir. 'Orijinal garantisi' gibi kanıtlanamayan bir vaat verilmez.",
  },
  {
    q: "Parça talebinde ne iletmeliyim?",
    a: "Makine marka/model, parça tipi ve mümkünse parça üzerindeki etiket veya parça numarasının fotoğrafı. Aşağıdaki form bu bilgileri WhatsApp mesajı olarak hazırlar.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/yedek-parca"
        crumbs={crumbs}
        service={{
          name: "Yedek parça tedariki",
          description:
            "İş makinası valf ve pompa revizyonunu destekleyen, talebe göre yedek parça tedariki.",
        }}
        faqs={faqItems}
      />
      <header className="page-hero">
        <div className="wrap page-hero-grid">
          <div className="page-hero-copy">
            <Crumbs crumbs={crumbs} />
            <p className="badge page-kicker">Destek hizmet</p>
            <h1>
              Yedek <span className="serif-accent">parça</span>
            </h1>
            <p className="lead">
              Revizyona bağlı veya ayrı talepte parça tedariki. Stok kataloğu
              yerine talebe göre çalışılır: parça tipini ve fotoğrafı iletin,
              teklif yazılı gelsin.
            </p>
          </div>
          <div className="page-hero-media page-hero-form">
            <form
              className="form"
              data-wa-form
              data-wa-title="Yedek parça talebi"
              aria-label="Parça talep sihirbazı"
            >
              <label>
                <span>Makine markası</span>
                <select name="marka" required defaultValue="">
                  <option value="" disabled>
                    Seçin
                  </option>
                  <option>Komatsu</option>
                  <option>CAT (Caterpillar)</option>
                  <option>Hitachi</option>
                  <option>Volvo</option>
                  <option>JCB</option>
                  <option>Hyundai</option>
                  <option>Diğer</option>
                </select>
              </label>
              <label>
                <span>Makine modeli</span>
                <input name="model" type="text" required />
              </label>
              <label>
                <span>Parça tipi</span>
                <select name="parca" required defaultValue="">
                  <option value="" disabled>
                    Seçin
                  </option>
                  <option>Valf / spool</option>
                  <option>Pompa / iç grup</option>
                  <option>Keçe / tamir takımı</option>
                  <option>Diğer</option>
                </select>
              </label>
              <label>
                <span>Açıklama (parça no, adet vb.)</span>
                <textarea name="aciklama" />
              </label>
              <label>
                <span>Telefon</span>
                <input name="telefon" type="tel" autoComplete="tel" required />
              </label>
              <KvkkConsent />
              <button type="submit" className="btn btn-primary">
                WhatsApp ile parça sor
              </button>
              <p role="status" data-wa-status hidden>
                WhatsApp penceresi açıldı. Açılmadıysa{" "}
                <a href={site.whatsapp}>bu bağlantıyı kullanın</a>.
              </p>
              <MailFallback />
              <p className="form-note">
                Form sunucuya veri göndermez; mesaj WhatsApp’ta sizin
                cihazınızda açılır. Çalışmazsa{" "}
                <a href={site.whatsapp}>doğrudan WhatsApp</a> kullanın.
              </p>
            </form>
          </div>
        </div>
      </header>

      <Section
        id="kapsam"
        kicker="Yaklaşım"
        title="Stok değil,"
        accent="çözüm"
        tone="soft"
      >
        <div className="prose prose-wide">
          <p>
            Yedek parça, BN Hidrovalf Makina’da ana iş değil destek hizmettir.
            Amaç, revizyondaki makinenin ayakta kalmasıdır: parça bulunabiliyorsa
            tedarik edilir; spool gibi hassas parçalar bulunamıyorsa{" "}
            <Link href="/imalat">atölyede imal edilir</Link>.
          </p>
          <p>
            Talep ettiğiniz parçanın niteliği ve menşei yazılı teklifte açıkça
            belirtilir; kanıtlanamayan &quot;orijinal garantisi&quot; vaadi verilmez.
          </p>
        </div>
      </Section>

      <Section id="sss" kicker="SSS" title="Yedek parça" accent="soruları">
        <FaqList items={faqItems} idPrefix="parca-soru" />
      </Section>

      <QuoteCta title="Parça talebi ilet" />
      <script src={asset("/form.js")} defer />
    </>
  );
}
