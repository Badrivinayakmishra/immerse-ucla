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

        if (progress <= 0) {
          section.style.transform = "";
          section.style.filter = "";
          section.style.borderRadius = "";
          section.style.opacity = "";
          section.style.boxShadow = "";
        } else {
          const scale = 1 - progress * 0.085;
          const blur = progress * 4;
          const radius = progress * 28;
          const opacity = 1 - progress * 0.32;
          section.style.transform = `scale(${scale}) translateZ(0)`;
          section.style.transformOrigin = "center top";
          section.style.filter = `blur(${blur}px)`;
          section.style.borderRadius = `${radius}px`;
          section.style.opacity = `${opacity}`;
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
      sections.forEach((s) => {
        s.style.transform = "";
        s.style.filter = "";
        s.style.borderRadius = "";
        s.style.opacity = "";
        s.style.boxShadow = "";
        s.style.transformOrigin = "";
      });
    };
  }, []);

  return null;
}
