import { startAbout } from "./about-motion";

/** Sayaç metni hidrasyondan önce değişmesin. */
function boot() {
  if (document.documentElement.dataset.hydrated === "1") {
    startAbout();
    return;
  }
  document.addEventListener("bn-hydrated", () => startAbout(), { once: true });
}

boot();
