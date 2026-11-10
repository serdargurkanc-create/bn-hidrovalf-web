import { site, whatsappQuote } from "@/lib/site";

export function MobileDock() {
  return (
    <nav className="dock" aria-label="Hızlı iletişim">
      <a href={`tel:${site.phoneTel}`}>Ara</a>
      <a href={whatsappQuote}>WhatsApp</a>
    </nav>
  );
}
