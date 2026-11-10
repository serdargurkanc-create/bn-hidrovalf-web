import type { Metadata } from "next";
import { Crumbs } from "@/components/Inner";
import { SchemaLd } from "@/components/Schema";
import { pageMeta } from "@/lib/meta";
import { asset } from "@/lib/paths";
import { site, whatsappQuote } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Revizyon teklifi",
  description:
    "Valf veya pompa revizyonu için teklif alın. Makine marka/model, parça tipi, arıza belirtisi ve fotoğraf yeterlidir. Form, WhatsApp mesajı olarak iletilir.",
  path: "/teklif",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "Teklif" }];

export default function Page() {
  return (
    <article className="page">
      <SchemaLd path="/teklif" crumbs={crumbs} />
      <div className="wrap">
        <Crumbs crumbs={crumbs} />
        <p className="badge page-kicker">Teklif</p>
        <h1>
          Fotoğrafla <span className="serif-accent">teklif al</span>
        </h1>
        <p className="lead">
          Makine marka ve modeli, valf veya pompa tipi, arıza belirtisi ve bir
          fotoğraf yeterlidir. Form, sunucuya veri göndermez; bilgiler WhatsApp
          mesajı olarak hazırlanır ve sohbeti sizin cihazınızda açar.
        </p>

        <form className="form" data-wa-form data-wa-title="Revizyon teklifi talebi">
          <fieldset className="form-step">
            <legend>
              <span className="step-no">1</span> Hizmet ve parça
            </legend>
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
              <span>Valf veya pompa tipi (biliniyorsa)</span>
              <input name="tip" type="text" />
            </label>
            <label>
              <span>Arıza belirtisi veya talep açıklaması</span>
              <textarea name="aciklama" required />
            </label>
          </fieldset>

          <fieldset className="form-step">
            <legend>
              <span className="step-no">2</span> Makine
            </legend>
            <label>
              <span>Makine marka / model</span>
              <input name="makine" type="text" required />
            </label>
            <label>
              <span>Aciliyet</span>
              <select name="aciliyet" defaultValue="normal">
                <option value="normal">Normal</option>
                <option value="acil">Acil</option>
              </select>
            </label>
            <label>
              <span>Teslimat tercihi</span>
              <select name="teslimat" defaultValue="kargo">
                <option value="kargo">Kargo ile adrese teslim</option>
                <option value="otobus">Otobüs kurye (hızlı seçenek)</option>
              </select>
            </label>
          </fieldset>

          <fieldset className="form-step">
            <legend>
              <span className="step-no">3</span> İletişim
            </legend>
            <label>
              <span>Ad soyad veya firma</span>
              <input name="ad" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Telefon</span>
              <input name="telefon" type="tel" autoComplete="tel" required />
            </label>
            <label>
              <span>E-posta (isteğe bağlı)</span>
              <input name="eposta" type="email" autoComplete="email" />
            </label>
          </fieldset>

          <p className="form-note">
            Fotoğraf veya kısa videoyu açılan WhatsApp sohbetine
            ekleyebilirsiniz. Garanti koşulları yazılı teklifte belirtilir.
          </p>
          <button type="submit" className="btn btn-primary">
            WhatsApp ile gönder
          </button>
          <p role="status" data-wa-status hidden>
            WhatsApp penceresi açıldı. Açılmadıysa{" "}
            <a href={site.whatsapp}>bu bağlantıyı kullanın</a>.
          </p>
        </form>

        <p className="form-fallback">
          Form çalışmazsa doğrudan{" "}
          <a href={whatsappQuote}>WhatsApp üzerinden yazabilir</a>,{" "}
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a> numarasını
          arayabilir veya{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> adresine e-posta
          gönderebilirsiniz.
        </p>
      </div>
      <script src={asset("/form.js")} defer />
    </article>
  );
}
