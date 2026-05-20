"use client";

import { useEffect } from "react";

export function ScrollChoreography() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main .stage > section, main > section")
    );
    if (sections.length === 0) return;

    let ticking = false;

    const update = () => {
      const vh = window.innerHeight;
      sections.forEach((section, i) => {
        const next = sections[i + 1];
        let progress = 0;
        if (next) {
          const nextTop = next.getBoundingClientRect().top;
          progress = Math.max(0, Math.min(1, (vh - nextTop) / vh));
        }

        const rect = section.getBoundingClientRect();
        const offscreen = rect.bottom < -50 || rect.top > vh + 50;
        if (offscreen && progress <= 0) {
          section.style.opacity = "";
          section.style.transform = "";
          section.style.borderRadius = "";
          return;
        }

        if (progress <= 0) {
          section.style.transform = "";
          section.style.borderRadius = "";
          section.style.opacity = "";
        } else {
          const scale = 1 - progress * 0.06;
          const radius = progress * 24;
          const opacity = 1 - progress * 0.25;
          section.style.transform = `scale(${scale.toFixed(4)}) translateZ(0)`;
          section.style.borderRadius = `${radius.toFixed(1)}px`;
          section.style.opacity = opacity.toFixed(3);
        }
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
