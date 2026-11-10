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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
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
      // already in view (e.g. after late boot)
      if (i === 0) {
        /* observed immediately */
      }
    });
  }

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
