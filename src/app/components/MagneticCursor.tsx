"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("has-magnetic-cursor");

    const dotPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: dotPos.x, y: dotPos.y };

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.2, ease: "power3.out" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.2, ease: "power3.out" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
      dotPos.x = e.clientX;
      dotPos.y = e.clientY;
    };

    let hoveredEl: HTMLElement | null = null;
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, .magnet'
      ) as HTMLElement | null;
      if (interactive && interactive !== hoveredEl) {
        hoveredEl = interactive;
        const text = interactive.getAttribute("data-cursor") || "";
        gsap.to(ring, {
          scale: 2.6,
          duration: 0.35,
          ease: "expo.out",
          borderColor: "var(--color-forest)",
        });
        gsap.to(dot, { scale: 0, duration: 0.2 });
        if (text) {
          label.textContent = text;
          gsap.to(label, { opacity: 1, scale: 1, duration: 0.25 });
        }
      } else if (!interactive && hoveredEl) {
        hoveredEl = null;
        gsap.to(ring, { scale: 1, duration: 0.4, ease: "expo.out" });
        gsap.to(dot, { scale: 1, duration: 0.2 });
        gsap.to(label, { opacity: 0, scale: 0.6, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-magnetic-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="magnetic-ring fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-ink pointer-events-none z-[80]"
        style={{ transform: "translate3d(-100px,-100px,0)", mixBlendMode: "difference" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="magnetic-dot fixed top-0 left-0 w-2 h-2 rounded-full bg-ink pointer-events-none z-[81]"
        style={{ transform: "translate3d(-100px,-100px,0)", marginLeft: -4, marginTop: -4 }}
      />
      <div
        ref={labelRef}
        aria-hidden
        className="magnetic-label fixed top-0 left-0 pointer-events-none z-[82] text-[10px] uppercase tracking-widest font-bold text-paper bg-ink px-2 py-1 rounded-full opacity-0"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
    </>
  );
}
