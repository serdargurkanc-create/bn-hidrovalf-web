export function startMotion() {
  const reduced =
    document.documentElement.classList.contains("reduced") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealSel =
    ".rv:not(.in), .rv-l:not(.in), .rv-r:not(.in), .rv-scale:not(.in), .anim:not(.in), .timeline:not(.in)";
  const pending = new Set<HTMLElement>();
  let io: IntersectionObserver | null = null;
  let sweepRaf = 0;
  let failsafe = 0;

  const markIn = (el: HTMLElement) => {
    io?.unobserve(el);
    pending.delete(el);
    if (!el.isConnected) return;
    // Gösterge: başlangıç karesinin bir kez boyanması için çift rAF;
    // aksi halde .in aynı karede gelince CSS transition atlanır.
    if (el.classList.contains("gauge") && !el.dataset.gaugePlayed) {
      el.dataset.gaugePlayed = "1";
      el.classList.remove("in");
      void el.offsetWidth;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add("in");
          runGaugeCount(el);
        });
      });
      return;
    }
    el.classList.add("in");
  };

  const sweep = () => {
    pending.forEach((el) => {
      if (!el.isConnected) {
        pending.delete(el);
        return;
      }
      if (el.getBoundingClientRect().bottom < window.innerHeight + 80) markIn(el);
    });
  };

  const armReveals = () => {
    const reveals = [...document.querySelectorAll<HTMLElement>(revealSel)].filter(
      (el) => !pending.has(el)
    );
    if (!reveals.length) return;
    if (reduced) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            markIn(entry.target as HTMLElement);
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
      );
      const onScroll = () => {
        if (sweepRaf) return;
        sweepRaf = requestAnimationFrame(() => {
          sweepRaf = 0;
          sweep();
        });
      };
      addEventListener("scroll", onScroll, { passive: true });
    }
    reveals.forEach((el) => {
      if (!el.style.getPropertyValue("--d")) {
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children).filter(
              (c) =>
                c.classList.contains("rv") ||
                c.classList.contains("rv-l") ||
                c.classList.contains("rv-r") ||
                c.classList.contains("rv-scale")
            )
          : [];
        const idx = Math.max(0, siblings.indexOf(el));
        el.style.setProperty("--d", `${Math.min(idx * 90, 540)}ms`);
      }
      pending.add(el);
      io?.observe(el);
    });
    sweep();
    window.clearTimeout(failsafe);
    failsafe = window.setTimeout(() => {
      [...pending].forEach((el) => markIn(el));
      pending.clear();
    }, 1600);
  };

  armReveals();
  document.addEventListener("bn-hydrated", () => {
    armReveals();
    bindStoryRails(reduced);
  });

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

/** Gösterge sayısı: 0 → hedef bar, ibre süresiyle senkron.
 * Metin, React hidrasyonu bitmeden değişmez (aksi halde #418). */
function runGaugeCount(el: HTMLElement) {
  if (document.documentElement.dataset.hydrated !== "1") {
    if (el.dataset.gaugeWait === "1") return;
    el.dataset.gaugeWait = "1";
    document.addEventListener(
      "bn-hydrated",
      () => {
        delete el.dataset.gaugeWait;
        runGaugeCount(el);
      },
      { once: true }
    );
    return;
  }
  const target = Number(el.dataset.gaugeBar || 0);
  const num = el.querySelector<HTMLElement>("[data-gauge-num]");
  if (!num || !target) return;
  const delay = parseFloat(getComputedStyle(el).getPropertyValue("--d")) || 0;
  const dur = 1550;
  num.textContent = "0";
  const startAt = performance.now() + delay;
  const tick = (now: number) => {
    if (now < startAt) {
      requestAnimationFrame(tick);
      return;
    }
    const t = Math.min(1, (now - startAt) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    num.textContent = String(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
    else num.textContent = String(target);
  };
  requestAnimationFrame(tick);
}

let storyScroll = false;

/** Valf merceği: kaydırma/adım seçimi ile 1→5; imleç glow. */
function bindStoryRails(reduced: boolean) {
  const rails = [...document.querySelectorAll<HTMLElement>("[data-story-rail]")].filter(
    (rail) => rail.dataset.railBound !== "1"
  );
  if (!rails.length) return;

  const applyStep = (rail: HTMLElement, index: number, n: number) => {
    const i = Math.max(0, Math.min(n - 1, index));
    rail.dataset.active = String(i);
    rail.style.setProperty("--story-p", n <= 1 ? "1" : (i / (n - 1)).toFixed(4));
    rail.querySelectorAll<HTMLElement>(".pl-frame").forEach((frame, fi) => {
      const on = fi === i;
      frame.classList.toggle("is-on", on);
      frame.querySelector(".story-scene")?.classList.toggle("play", on);
    });
    rail.querySelectorAll<HTMLElement>(".pl-steps > li").forEach((li, li_i) => {
      li.classList.toggle("is-on", li_i === i);
      li.classList.toggle("is-done", li_i < i);
    });
  };

  const scrub = () => {
    const vh = window.innerHeight || 1;
    document.querySelectorAll<HTMLElement>("[data-story-rail]").forEach((rail) => {
      if (rail.dataset.locked === "1") return;
      const n = Number(rail.dataset.steps) || rail.querySelectorAll(".pl-frame").length;
      if (!n) return;
      if (reduced) {
        applyStep(rail, n - 1, n);
        return;
      }
      const stepItems = [...rail.querySelectorAll<HTMLElement>(".pl-steps > li")];
      // Mobil: yapışkan mercek + adım listesi; hangi madde tetik çizgisini geçtiyse o oynar
      if (stepItems.length === n && window.matchMedia("(max-width: 959px)").matches) {
        const trigger = vh * 0.62;
        let hi = 0;
        for (let i = 0; i < n; i++) {
          if (stepItems[i].getBoundingClientRect().top <= trigger) hi = i;
        }
        applyStep(rail, hi, n);
        return;
      }
      const box = rail.getBoundingClientRect();
      const start = vh * 0.75;
      const end = vh * 0.28;
      const p = Math.min(1, Math.max(0, (start - box.top) / Math.max(1, start - end)));
      applyStep(rail, Math.round(p * (n - 1)), n);
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

  rails.forEach((rail) => {
    rail.dataset.railBound = "1";
    const stage = rail.querySelector<HTMLElement>("[data-process-lens]");
    const n = Number(rail.dataset.steps) || rail.querySelectorAll(".pl-frame").length;

    rail.querySelectorAll<HTMLElement>("[data-story-goto]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const i = Number(btn.dataset.storyGoto);
        if (!Number.isFinite(i)) return;
        rail.dataset.locked = "1";
        applyStep(rail, i, n);
        window.setTimeout(() => {
          delete rail.dataset.locked;
        }, 1800);
      });
    });

    if (stage && !reduced) {
      let gx = 0.5;
      let gy = 0.42;
      let tx = gx;
      let ty = gy;
      let glowRaf = 0;
      const tickGlow = () => {
        gx += (tx - gx) * 0.12;
        gy += (ty - gy) * 0.12;
        stage.style.setProperty("--lx", `${(gx * 100).toFixed(2)}%`);
        stage.style.setProperty("--ly", `${(gy * 100).toFixed(2)}%`);
        glowRaf = 0;
        if (Math.abs(tx - gx) > 0.001 || Math.abs(ty - gy) > 0.001) {
          glowRaf = requestAnimationFrame(tickGlow);
        }
      };
      const onMove = (e: PointerEvent) => {
        const b = stage.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - b.left) / Math.max(1, b.width)));
        ty = Math.min(1, Math.max(0, (e.clientY - b.top) / Math.max(1, b.height)));
        if (!glowRaf) glowRaf = requestAnimationFrame(tickGlow);
      };
      stage.addEventListener("pointermove", onMove, { passive: true });
      stage.addEventListener(
        "pointerleave",
        () => {
          tx = 0.5;
          ty = 0.42;
          if (!glowRaf) glowRaf = requestAnimationFrame(tickGlow);
        },
        { passive: true }
      );
      stage.style.setProperty("--lx", "50%");
      stage.style.setProperty("--ly", "42%");
    }

    applyStep(rail, 0, n);
  });

  scrub();
  if (!storyScroll) {
    storyScroll = true;
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll, { passive: true });
  }
}
