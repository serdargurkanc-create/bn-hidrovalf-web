export function startMotion() {
  const reduced =
    document.documentElement.classList.contains("reduced") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const reveals = document.querySelectorAll<HTMLElement>(
    ".rv, .rv-l, .rv-r, .rv-scale, .anim, .timeline"
  );

  if (reduced) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const pending = new Set<HTMLElement>(reveals);
    const markIn = (el: HTMLElement) => {
      el.classList.add("in");
      io.unobserve(el);
      pending.delete(el);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          markIn(entry.target as HTMLElement);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    // Hızlı kaydırmada IO'nun atladığı, viewport'u geçmiş öğeleri yakala.
    let raf = 0;
    const sweep = () => {
      pending.forEach((el) => {
        if (el.getBoundingClientRect().bottom < window.innerHeight) markIn(el);
      });
      if (!pending.size) removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        sweep();
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    // Güvenlik ağı: her durumda 3 sn sonra kalan tüm öğeler görünür.
    setTimeout(() => {
      pending.forEach((el) => el.classList.add("in"));
      pending.clear();
      removeEventListener("scroll", onScroll);
    }, 3000);
    reveals.forEach((el, i) => {
      if (!el.style.getPropertyValue("--d")) {
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children).filter((c) =>
              c.classList.contains("rv") ||
              c.classList.contains("rv-l") ||
              c.classList.contains("rv-r") ||
              c.classList.contains("rv-scale")
            )
          : [];
        const idx = Math.max(0, siblings.indexOf(el));
        el.style.setProperty("--d", `${Math.min(idx * 90, 540)}ms`);
      }
      io.observe(el);
    });
    sweep();
  }

  /* Kaydırmayla 1→5 hikâye: akış çizgisi + sırayla .play */
  bindStoryRails(reduced);

  const lb = document.getElementById("lightbox") as HTMLElement | null;
  const lbImg = lb?.querySelector("img");
  const close = () => {
    if (!lb) return;
    lb.hidden = true;
    document.body.style.removeProperty("overflow");
  };
  if (lb && lbImg) {
    document.querySelectorAll<HTMLAnchorElement>("[data-lightbox]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        lbImg.src = a.getAttribute("href") || "";
        lbImg.alt = a.dataset.alt || "";
        lb.hidden = false;
        document.body.style.overflow = "hidden";
        (lb.querySelector("[data-lightbox-close]") as HTMLElement | null)?.focus();
      });
    });
    lb.addEventListener("click", (e) => {
      const t = e.target as HTMLElement;
      if (t === lb || t.hasAttribute("data-lightbox-close")) close();
    });
  }

  return () => close();
}

/** Valf hikâyesi: kaydırma ilerledikçe boru dolar, temas eden sahne oynar. */
function bindStoryRails(reduced: boolean) {
  const rails = document.querySelectorAll<HTMLElement>("[data-story-rail]");
  if (!rails.length) return;

  const layout = (rail: HTMLElement) => {
    const pipe = rail.querySelector<HTMLElement>(".story-pipe");
    const scenes = [...rail.querySelectorAll<HTMLElement>("[data-story-step] .story-scene")];
    if (!pipe || scenes.length < 2) return;
    const rb = rail.getBoundingClientRect();
    const first = scenes[0].getBoundingClientRect();
    const last = scenes[scenes.length - 1].getBoundingClientRect();
    const horizontal = Math.abs(first.top - last.top) < 40;
    if (horizontal) {
      rail.dataset.dir = "h";
      const y = (first.top + first.height / 2) - rb.top;
      const x1 = first.left + first.width / 2 - rb.left;
      const x2 = last.left + last.width / 2 - rb.left;
      pipe.style.top = `${Math.round(y - 1.5)}px`;
      pipe.style.left = `${Math.round(x1)}px`;
      pipe.style.width = `${Math.max(0, Math.round(x2 - x1))}px`;
      pipe.style.height = "3px";
      pipe.style.bottom = "auto";
    } else {
      rail.dataset.dir = "v";
      const x = first.left - rb.left + 10;
      const y1 = first.top + first.height / 2 - rb.top;
      const y2 = last.top + last.height / 2 - rb.top;
      pipe.style.left = `${Math.round(x)}px`;
      pipe.style.top = `${Math.round(y1)}px`;
      pipe.style.height = `${Math.max(0, Math.round(y2 - y1))}px`;
      pipe.style.width = "3px";
      pipe.style.bottom = "auto";
    }
  };

  const midY = (step: HTMLElement) => {
    const el = step.querySelector(".story-scene") || step;
    const b = el.getBoundingClientRect();
    return b.top + b.height * 0.45;
  };

  const scrub = () => {
    const vh = window.innerHeight || 1;
    const trigger = vh * 0.58;
    rails.forEach((rail) => {
      const steps = [...rail.querySelectorAll<HTMLElement>("[data-story-step]")];
      const n = steps.length;
      if (!n) return;
      if (reduced) {
        rail.style.setProperty("--story-p", "1");
        steps.forEach((step) => {
          step.classList.add("is-on");
          step.querySelector(".story-scene")?.classList.add("play");
        });
        return;
      }

      let p = 0;
      if (rail.dataset.dir === "h") {
        // Yatay sıra: tüm sahneler aynı Y'de → dikey kaydırmayı 0→1'e map et
        const box = rail.getBoundingClientRect();
        const start = vh * 0.78;
        const end = vh * 0.22;
        p = Math.min(1, Math.max(0, (start - box.top) / Math.max(1, start - end)));
      } else {
        // Dikey (mobil): her kutu tetik çizgisini geçtikçe ilerle
        let hi = -1;
        for (let i = 0; i < n; i++) {
          if (midY(steps[i]) <= trigger) hi = i;
        }
        if (hi >= n - 1) p = 1;
        else if (hi >= 0) {
          const a = midY(steps[hi]);
          const b = midY(steps[hi + 1]);
          const frac = Math.min(1, Math.max(0, (trigger - a) / Math.max(1, b - a)));
          p = (hi + frac) / (n - 1);
        }
      }

      rail.style.setProperty("--story-p", p.toFixed(4));
      steps.forEach((step, i) => {
        const scene = step.querySelector(".story-scene");
        const threshold = n <= 1 ? 0 : i / (n - 1);
        const play = p >= threshold - 0.001;
        step.classList.toggle("is-on", play);
        scene?.classList.toggle("play", play);
      });
    });
  };

  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      scrub();
    });
  };
  let resizeT = 0;
  const onResize = () => {
    clearTimeout(resizeT);
    resizeT = window.setTimeout(() => {
      rails.forEach(layout);
      scrub();
    }, 80);
  };

  rails.forEach(layout);
  scrub();
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onResize, { passive: true });
}
