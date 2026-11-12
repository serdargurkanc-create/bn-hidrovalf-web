import Link from "next/link";
import { site } from "@/lib/site";

/** Teklif ve yedek parça formlarında zorunlu KVKK onayı. */
export function KvkkConsent() {
  return (
    <div className="kvkk-field">
      <label className="kvkk-label">
        <input
          type="checkbox"
          name="kvkk"
          value="kabul"
          required
          aria-invalid="false"
          aria-describedby="kvkk-hata"
        />
        <span>
          Kişisel verilerimin <Link href="/gizlilik">Aydınlatma Metni</Link>{" "}
          kapsamında işlenmesini kabul ediyorum.
        </span>
      </label>
      <p id="kvkk-hata" className="form-error" data-kvkk-error hidden role="alert">
        Devam etmek için aydınlatma metnini onaylayın.
      </p>
    </div>
  );
}

/** WhatsApp kullanmayanlar için: alanlar konu ve gövdeye yazılır. */
export function MailFallback() {
  return (
    <p className="form-mail">
      WhatsApp kullanmıyorsanız{" "}
      <a data-mail-fallback href={`mailto:${site.email}`}>
        {site.email} adresine e-posta ile gönderin
      </a>
      .
    </p>
  );
}
