"use client";

import { useEffect } from "react";

/** Yaprak ada: GSAP/Lenis yalnızca ilk etkileşimde yüklenir. LCP'yi etkilemez. */
export function MotionRoot() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let started = false;

    const boot = () => {
      if (started) return;
      started = true;
      window.removeEventListener("scroll", boot);
      window.removeEventListener("wheel", boot);
      window.removeEventListener("touchstart", boot);
      window.removeEventListener("pointerdown", boot);
      window.removeEventListener("keydown", boot);
      void import("@/lib/motion").then((mod) => {
        cleanup = mod.startMotion();
      });
    };

    const opts: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener("scroll", boot, opts);
    window.addEventListener("wheel", boot, opts);
    window.addEventListener("touchstart", boot, opts);
    window.addEventListener("pointerdown", boot, opts);
    window.addEventListener("keydown", boot, opts);

    return () => {
      window.removeEventListener("scroll", boot);
      window.removeEventListener("wheel", boot);
      window.removeEventListener("touchstart", boot);
      window.removeEventListener("pointerdown", boot);
      window.removeEventListener("keydown", boot);
      cleanup?.();
    };
  }, []);

  return null;
}
