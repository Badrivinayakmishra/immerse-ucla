"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CardStackProjects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".project-card"));
    if (cards.length === 0) return;

    let ctx: gsap.Context | null = null;
    ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const offsetX = (Math.random() - 0.5) * 400;
        const offsetY = 220 + Math.random() * 80;
        const rot = (Math.random() - 0.5) * 28;
        gsap.set(card, {
          x: offsetX,
          y: offsetY,
          rotation: rot,
          opacity: 0,
          transformOrigin: "50% 50%",
        });

        gsap.to(card, {
          x: 0,
          y: 0,
          rotation: card.dataset.finalRotation
            ? parseFloat(card.dataset.finalRotation)
            : 0,
          opacity: 1,
          duration: 1.05,
          ease: "back.out(1.4)",
          delay: i * 0.06,
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
