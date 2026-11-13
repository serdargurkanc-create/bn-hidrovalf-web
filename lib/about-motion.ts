import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Hakkımızda: GSAP ScrollTrigger. Görünür öğeler gizlenmez; sayaç, ray ve rota çizilir. */
export function startAbout() {
  const root = document.querySelector<HTMLElement>("[data-about]");
  if (!root) return;

  const reduced =
    document.documentElement.classList.contains("reduced") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? "";
    if (!Number.isFinite(target)) return;
    if (reduced) {
      el.textContent = `${target}${suffix}`;
      return;
    }
    const state = { n: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(state, {
          n: target,
          duration: 1.15,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(state.n)}${suffix}`;
          },
        });
      },
    });
  });

  if (reduced) return;

  root.querySelectorAll<HTMLElement>("[data-rise]").forEach((el) => {
    // autoAlpha kartı görünmez bırakabiliyor; kaydırma yalnızca yer değiştirir.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    gsap.from(el, {
      y: 22,
      duration: 0.65,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
    });
  });

  const rail = root.querySelector<HTMLElement>("[data-rail]");
  const fill = rail?.querySelector<HTMLElement>("[data-rail-fill]");
  if (rail && fill) {
    gsap.set(fill, { scaleY: 0, transformOrigin: "top center" });
    gsap.to(fill, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: rail,
        start: "top 72%",
        end: "bottom 65%",
        scrub: 0.35,
      },
    });
  }

  root.querySelectorAll<SVGGeometryElement>("[data-draw]").forEach((path) => {
    const len = path.getTotalLength();
    if (!Number.isFinite(len) || len <= 0) return;
    const draw = () => {
      gsap.killTweensOf(path);
      gsap.fromTo(
        path,
        { strokeDasharray: len, strokeDashoffset: len },
        { strokeDashoffset: 0, duration: 1.35, ease: "power2.out" }
      );
    };
    if (path.getBoundingClientRect().top < window.innerHeight * 0.9) {
      draw();
      return;
    }
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    const st = ScrollTrigger.create({
      trigger: path,
      start: "top 88%",
      once: true,
      onEnter: draw,
    });
    window.setTimeout(() => {
      const off = Number.parseFloat(getComputedStyle(path).strokeDashoffset || "0");
      if (off > 2) {
        st.kill();
        gsap.set(path, { strokeDashoffset: 0 });
      }
    }, 2800);
  });
}
