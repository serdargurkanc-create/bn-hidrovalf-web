"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      "Revizyon teklifi talebi",
      `Makine: ${data.get("makine") || "—"}`,
      `Parça: ${data.get("tur") || "—"} / ${data.get("tip") || "—"}`,
      `Arıza: ${data.get("ariza") || "—"}`,
      `Aciliyet: ${data.get("aciliyet") || "—"}`,
      `Teslimat: ${data.get("teslimat") || "—"}`,
      `Ad: ${data.get("ad") || "—"}`,
      `Telefon: ${data.get("telefon") || "—"}`,
    ];
    const url =
      "https://wa.me/905418835331?text=" + encodeURIComponent(lines.join("\n"));
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        <span>Ad soyad veya firma</span>
        <input name="ad" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Telefon</span>
        <input name="telefon" type="tel" autoComplete="tel" required />
      </label>
      <label>
        <span>Makine marka / model</span>
        <input name="makine" type="text" required />
      </label>
      <label>
        <span>Parça türü</span>
        <select name="tur" required defaultValue="valf">
          <option value="valf">Valf</option>
          <option value="pompa">Pompa</option>
          <option value="diger">Diğer / emin değilim</option>
        </select>
      </label>
      <label>
        <span>Valf veya pompa tipi (biliniyorsa)</span>
        <input name="tip" type="text" />
      </label>
      <label>
        <span>Arıza belirtisi</span>
        <textarea name="ariza" required />
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
          <option value="otobus">Otobüs kurye (hızlı çözüm)</option>
        </select>
      </label>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>
        Fotoğraf veya kısa videoyu WhatsApp sohbetine ekleyebilirsiniz. Form, {site.phone}{" "}
        numarasına hazır bir mesaj açar.
      </p>
      <button type="submit" className="btn btn-primary">
        WhatsApp ile teklif mesajı aç
      </button>
      {sent ? (
        <p role="status">
          WhatsApp penceresi açıldı. Fotoğrafı oradan ekleyebilirsiniz. Açılmazsa{" "}
          <a href={site.whatsapp}>bu bağlantıyı kullanın</a>.
        </p>
      ) : null}
    </form>
  );
}
