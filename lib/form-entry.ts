/**
 * Sunucusuz form köprüsü (statik export uyumlu): [data-wa-form] işaretli
 * formlar gönderildiğinde etiketli alanlardan Türkçe bir WhatsApp mesajı
 * derler ve wa.me derin bağlantısını açar. API rotası veya e-posta sunucusu
 * gerekmez; JS kapalıyken sayfadaki görünür wa.me yedeği kullanılır.
 * KVKK kutusu işaretli değilse gönderim durur. mailto yedeği aynı metni taşır.
 */
const WA = "https://wa.me/905418835331";
const MAIL = "bnhidro@gmail.com";
const KVKK_MSG = "Devam etmek için aydınlatma metnini onaylayın.";

function fieldLabel(form: HTMLFormElement, name: string): string {
  const el = form.elements.namedItem(name);
  const input = (Array.isArray(el) ? el[0] : el) as HTMLElement | null;
  const wrap = input?.closest("label");
  const span = wrap?.querySelector("span");
  return (span?.textContent || name).trim();
}

function selectedText(el: Element): string {
  if (el instanceof HTMLSelectElement) {
    return el.selectedOptions[0]?.textContent?.trim() || el.value;
  }
  if (el instanceof HTMLInputElement && el.type === "checkbox") {
    return el.checked ? el.value.trim() || "evet" : "";
  }
  if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
    return el.value.trim();
  }
  return "";
}

function buildMessage(form: HTMLFormElement): string {
  const title = form.dataset.waTitle || "Teklif talebi";
  const lines: string[] = [title];
  const seen = new Set<string>();
  for (const el of Array.from(form.elements)) {
    const name = (el as HTMLInputElement).name;
    if (!name || seen.has(name)) continue;
    seen.add(name);
    const value = selectedText(el);
    lines.push(`${fieldLabel(form, name)}: ${value || "—"}`);
  }
  return lines.join("\n");
}

function kvkkInput(form: HTMLFormElement): HTMLInputElement | null {
  const el = form.querySelector('input[name="kvkk"]');
  return el instanceof HTMLInputElement ? el : null;
}

function showKvkkError(form: HTMLFormElement, on: boolean) {
  const box = kvkkInput(form);
  const err = form.querySelector<HTMLElement>("[data-kvkk-error]");
  if (box) {
    box.setCustomValidity(on ? KVKK_MSG : "");
    box.setAttribute("aria-invalid", on ? "true" : "false");
  }
  if (err) err.hidden = !on;
}

function mailHref(form: HTMLFormElement): string {
  const subject = form.dataset.waTitle || "Talep";
  const body = buildMessage(form);
  return `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function init() {
  document
    .querySelectorAll<HTMLFormElement>("form[data-wa-form]")
    .forEach((form) => {
      const mail = form.querySelector<HTMLAnchorElement>("[data-mail-fallback]");
      const syncMail = () => {
        if (mail) mail.href = mailHref(form);
      };
      form.addEventListener("input", syncMail);
      syncMail();
      kvkkInput(form)?.addEventListener("change", () => {
        const box = kvkkInput(form);
        if (box?.checked) showKvkkError(form, false);
      });
      mail?.addEventListener("click", (e) => {
        const box = kvkkInput(form);
        if (box && !box.checked) {
          e.preventDefault();
          showKvkkError(form, true);
          box.reportValidity();
          return;
        }
        syncMail();
      });
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const box = kvkkInput(form);
        showKvkkError(form, !!box && !box.checked);
        if (!form.reportValidity()) return;
        const url = `${WA}?text=${encodeURIComponent(buildMessage(form))}`;
        const status = form.querySelector<HTMLElement>("[data-wa-status]");
        if (status) {
          status.hidden = false;
          const a = status.querySelector("a");
          if (a) a.href = url;
        }
        window.open(url, "_blank", "noopener,noreferrer");
      });
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
