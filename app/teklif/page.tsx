import type { Metadata } from "next";
import Link from "next/link";
import { KvkkConsent, MailFallback } from "@/components/FormConsent";
import { FaqList, PageHero, Section } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { pageMeta } from "@/lib/meta";
import { asset } from "@/lib/paths";
import { site, whatsappQuote } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Valf ve pompa revizyon teklifi",
  description:
    "Valf ve pompa revizyon teklifi, İvedik OSB. Marka, belirti ve fotoğraf yeter. Kesin fiyat sökümden sonra yazılı gelir.",
  path: "/teklif",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "Teklif" }];

const faqs = [
  {
    q: "Valf veya pompa revizyonu için teklif nasıl alınır?",
    a: "Makine markası ve modeli, valf veya pompa tipi, arıza belirtisi ve bir fotoğraf yeterlidir. Form bu bilgileri WhatsApp mesajı olarak hazırlar. Fotoğrafı açılan sohbete ekleyebilirsiniz.",
  },
  {
    q: "Fotoğraf göndermeden net fiyat çıkar mı?",
    a: "Hayır. Fotoğraf ve belirti ile ücretsiz ön değerlendirme yapılır. Kesin fiyat, süre ve garanti, parça atölyede sökülüp ölçüldükten sonra yazılı teklifte belirtilir. Onay gelmeden işe başlanmaz.",
  },
  {
    q: "Hangi markalar için teklif verilir?",
    a: "Her marka iş makinasının valf ve pompası için teklif istenir. Komatsu, CAT, Hitachi, Volvo, JCB, Hyundai ile Rexroth, Kawasaki ve Linde grupları sık gelen işlerdendir. Listede olmayan marka da kabul edilir.",
  },
  {
    q: "Teklif talebi nereye gider, parça nereye gönderilir?",
    a: `Form sunucuya kayıt yazmaz; mesaj sizin cihazınızda WhatsApp ile ${site.phone} numarasına açılır. Parça, Genç Kardeşler Sanayi Sitesi, 2285. Sk. No:40, İvedik OSB, Yenimahalle/Ankara adresindeki tek atölyeye gelir. Teslimat kargo veya otobüs kuryedir.`,
  },
] as const;

const need = [
  "Makine markası ve modeli",
  "Valf veya pompa tipi",
  "Arıza belirtisi",
  "Parçanın bir fotoğrafı",
];

export default function Page() {
  return (
    <>
      <SchemaLd
        path="/teklif"
        crumbs={crumbs}
        service={{
          name: "İş makinası valf ve pompa revizyon teklifi",
          description:
            "İvedik OSB’de valf ve pompa revizyon teklifi. Ön değerlendirme fotoğraf ve belirtiyle başlar; kesin fiyat sökümden sonra yazılıdır.",
        }}
        faqs={faqs}
      />
      <PageHero
        kicker="Ankara · İvedik OSB"
        title="Valf ve pompa"
        accent="revizyon teklifi"
        lead="Her marka iş makinası için ön değerlendirme. Makine markası, arıza belirtisi ve bir fotoğraf yeter. Kesin fiyat, parça söküldükten sonra yazılı gelir."
        crumbs={crumbs}
      />

      <section className="quote-page" aria-labelledby="teklif-form-title">
        <div className="wrap quote-grid">
          <form
            className="form quote-form"
            data-wa-form
            data-wa-title="Valf ve pompa revizyon teklifi"
            aria-labelledby="teklif-form-title"
          >
            <div className="quote-form-head">
              <h2 id="teklif-form-title">Talebi yazın</h2>
              <p>Alanlar WhatsApp mesajına dönüşür. Sunucuya kayıt gitmez.</p>
            </div>
            <div className="quote-fields">
              <label>
                <span>Makine marka / model</span>
                <input name="makine" type="text" required placeholder="Örn. Komatsu PC200" />
              </label>
              <label>
                <span>Hizmet türü</span>
                <select name="hizmet" required defaultValue="valf">
                  <option value="valf">Valf revizyonu</option>
                  <option value="pompa">Pompa revizyonu</option>
                  <option value="imalat">CNC / özel imalat</option>
                  <option value="yedek">Yedek parça</option>
                  <option value="diger">Diğer / emin değilim</option>
                </select>
              </label>
              <label>
                <span>Valf veya pompa tipi</span>
                <input name="tip" type="text" placeholder="Biliyorsanız yazın" />
              </label>
              <label>
                <span>Aciliyet</span>
                <select name="aciliyet" defaultValue="normal">
                  <option value="normal">Normal</option>
                  <option value="acil">Acil</option>
                </select>
              </label>
              <label className="is-wide">
                <span>Arıza belirtisi veya talep</span>
                <textarea name="aciklama" required placeholder="Ne oluyor, hangi hareket etkileniyor?" />
              </label>
              <label>
                <span>Teslimat tercihi</span>
                <select name="teslimat" defaultValue="kargo">
                  <option value="kargo">Kargo ile adrese teslim</option>
                  <option value="otobus">Otobüs kurye (hızlı seçenek)</option>
                </select>
              </label>
              <label>
                <span>Ad soyad veya firma</span>
                <input name="ad" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Telefon</span>
                <input name="telefon" type="tel" autoComplete="tel" required />
              </label>
              <label>
                <span>E-posta</span>
                <input name="eposta" type="email" autoComplete="email" placeholder="İsteğe bağlı" />
              </label>
            </div>
            <KvkkConsent />
            <p className="form-note">
              Fotoğrafı veya kısa videoyu açılan WhatsApp sohbetine ekleyin. Garanti koşulları yazılı teklifte belirtilir.
            </p>
            <button type="submit" className="btn btn-primary">
              WhatsApp ile gönder
            </button>
            <p role="status" data-wa-status hidden>
              WhatsApp penceresi açıldı. Açılmadıysa{" "}
              <a href={site.whatsapp}>bu bağlantıyı kullanın</a>.
            </p>
            <MailFallback />
          </form>

          <aside className="quote-aside" aria-labelledby="teklif-aside-title">
            <h2 id="teklif-aside-title">Ne göndermelisiniz?</h2>
            <ul className="quote-need">
              {need.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Sonra ne olur?</h3>
            <ol className="quote-next">
              <li>Fotoğraf ve belirtiyle ön değerlendirme başlar.</li>
              <li>Parça İvedik OSB’deki atölyede sökülür ve ölçülür.</li>
              <li>Yazılı teklif onayından sonra revizyon başlar.</li>
              <li>İş, videolu test kaydıyla teslim edilir.</li>
            </ol>
            <div className="quote-nap">
              <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
              <a href={whatsappQuote}>WhatsApp</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>
                {site.address.street}, {site.address.postalCode} {site.address.locality}/{site.address.region}
              </p>
              <Link href="/iletisim">Adres ve harita</Link>
            </div>
          </aside>
        </div>
        <p className="wrap form-fallback">
          Form açılmazsa doğrudan{" "}
          <a href={whatsappQuote}>WhatsApp’tan yazın</a>,{" "}
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a> numarasını arayın veya{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> adresine e-posta gönderin.
        </p>
      </section>

      <Section id="teklif-sss" kicker="Kısa cevaplar" title="Teklif" accent="soruları" tone="soft">
        <FaqList items={faqs} idPrefix="teklif-soru" />
      </Section>

      <script src={asset("/form.js")} defer />
    </>
  );
}
