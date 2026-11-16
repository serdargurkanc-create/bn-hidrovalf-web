/**
 * Sunucusuz form köprüsü (statik export uyumlu): [data-wa-form] işaretli
 * formlar Web3Forms üzerinden bnhidro@gmail.com adresine gider.
 * KVKK kutusu işaretli değilse gönderim durur. Başarıda dataLayer'a
 * form_submit_success olayı eklenir. mailto yedeği aynı metni taşır.
 * Durum metni Next hidrasyonundan sonra yeniden uygulanır.
 */
const W3_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "e2f77d80-5cde-471f-9e39-e6fcd23b712f";
const FROM_NAME = "bnhidrovalf.com";
const MAIL = "bnhidro@gmail.com";
const KVKK_MSG = "Devam etmek için aydınlatma metnini onaylayın.";
const SUCCESS_MSG = "Talebiniz iletildi. En kısa sürede dönüş yapılacak.";
const ERROR_MSG =
  "Gönderilemedi. Lütfen tekrar deneyin veya e-posta / WhatsApp kullanın.";

const lastStatus = new Map<string, { kind: "success" | "error"; text: string }>();

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

function formNameOf(form: HTMLFormElement): string {
  return (form.dataset.waTitle || "Form").trim();
}

function buildMessage(form: HTMLFormElement): string {
  const title = formNameOf(form);
  const lines: string[] = [title];
  const seen = new Set<string>();
  for (const el of Array.from(form.elements)) {
    const name = (el as HTMLInputElement).name;
    if (!name || seen.has(name)) continue;
    if (name === "botcheck" || name === "access_key" || name === "from_name") {
      continue;
    }
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

function ensureHoneypot(form: HTMLFormElement) {
  if (form.querySelector('[name="botcheck"]')) return;
  const input = document.createElement("input");
  input.type = "text";
  input.name = "botcheck";
  input.className = "sr-only";
  input.tabIndex = -1;
  input.autocomplete = "off";
  input.setAttribute("aria-hidden", "true");
  form.prepend(input);
}

function collectPayload(form: HTMLFormElement): Record<string, string> {
  const name = formNameOf(form);
  const override = form
    .querySelector<HTMLInputElement>('input[name="subject"]')
    ?.value.trim();
  const payload: Record<string, string> = {
    access_key: ACCESS_KEY,
    from_name: FROM_NAME,
    botcheck:
      form.querySelector<HTMLInputElement>('input[name="botcheck"]')?.value.trim() ||
      "",
    subject: override || `BN Hidrovalf web formu - ${name}`,
  };
  const seen = new Set(["access_key", "from_name", "botcheck", "subject"]);
  for (const el of Array.from(form.elements)) {
    const field = el as HTMLInputElement;
    const key = field.name;
    if (!key || seen.has(key)) continue;
    if (field.type === "submit" || field.type === "button" || field.type === "file") {
      continue;
    }
    seen.add(key);
    const value = selectedText(field);
    if (value) payload[key] = value;
  }
  if (payload.eposta && !payload.email) payload.email = payload.eposta;
  return payload;
}

function setStatus(form: HTMLFormElement, kind: "success" | "error" | "hide", text?: string) {
  const status = form.querySelector<HTMLElement>("[data-wa-status]");
  if (!status) return;
  if (kind === "hide") {
    status.hidden = true;
    status.classList.remove("form-error");
    return;
  }
  status.hidden = false;
  status.classList.toggle("form-error", kind === "error");
  if (text) status.textContent = text;
}

function rememberStatus(form: HTMLFormElement, kind: "success" | "error", text: string) {
  lastStatus.set(formNameOf(form), { kind, text });
  setStatus(form, kind, text);
}

function reapplyStatuses() {
  document.querySelectorAll<HTMLFormElement>("form[data-wa-form]").forEach((form) => {
    const saved = lastStatus.get(formNameOf(form));
    if (saved) setStatus(form, saved.kind, saved.text);
  });
}

function pushSuccess(form: HTMLFormElement) {
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "form_submit_success",
    form_name: formNameOf(form),
  });
}

async function sendForm(form: HTMLFormElement): Promise<{ ok: boolean; message: string }> {
  const res = await fetch(W3_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(collectPayload(form)),
  });
  const json = (await res.json().catch(() => null)) as
    | { success?: boolean; message?: string }
    | null;
  const ok = !!json && json.success === true;
  return { ok, message: json?.message || (ok ? SUCCESS_MSG : ERROR_MSG) };
}

function syncMail(form: HTMLFormElement) {
  const mail = form.querySelector<HTMLAnchorElement>("[data-mail-fallback]");
  if (mail) mail.href = mailHref(form);
}

function bindForm(form: HTMLFormElement) {
  if (form.dataset.w3Bound === "1") return;
  form.dataset.w3Bound = "1";
  ensureHoneypot(form);
  syncMail(form);
  form.addEventListener("input", () => syncMail(form));
  kvkkInput(form)?.addEventListener("change", () => {
    const box = kvkkInput(form);
    if (box?.checked) showKvkkError(form, false);
  });
  form.querySelector<HTMLAnchorElement>("[data-mail-fallback]")?.addEventListener("click", (e) => {
    const box = kvkkInput(form);
    if (box && !box.checked) {
      e.preventDefault();
      showKvkkError(form, true);
      box.reportValidity();
      return;
    }
    syncMail(form);
  });
}

function init() {
  document.querySelectorAll<HTMLFormElement>("form[data-wa-form]").forEach(bindForm);
  reapplyStatuses();
}

if (!(window as Window & { __bnFormSubmit?: boolean }).__bnFormSubmit) {
  (window as Window & { __bnFormSubmit?: boolean }).__bnFormSubmit = true;
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (!(form instanceof HTMLFormElement) || !form.matches("[data-wa-form]")) return;
    e.preventDefault();
    bindForm(form);
    if (form.dataset.submitting === "1") return;
    const box = kvkkInput(form);
    showKvkkError(form, !!box && !box.checked);
    if (!form.reportValidity()) return;
    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    form.dataset.submitting = "1";
    if (submitBtn) submitBtn.disabled = true;
    setStatus(form, "hide");
    sendForm(form)
      .then((result) => {
        if (result.ok) {
          rememberStatus(form, "success", SUCCESS_MSG);
          pushSuccess(form);
        } else {
          rememberStatus(form, "error", ERROR_MSG);
        }
      })
      .catch(() => {
        rememberStatus(form, "error", ERROR_MSG);
      })
      .finally(() => {
        form.dataset.submitting = "0";
        if (submitBtn) submitBtn.disabled = false;
        // Hidrasyon henüz bittiyse veya biraz sonra bitecekse durumu koru.
        requestAnimationFrame(reapplyStatuses);
        setTimeout(reapplyStatuses, 0);
        setTimeout(reapplyStatuses, 300);
        setTimeout(reapplyStatuses, 1000);
      });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
document.addEventListener("bn-hydrated", () => {
  init();
  reapplyStatuses();
});
