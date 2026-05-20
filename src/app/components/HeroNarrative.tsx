"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroNarrative() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const svg = document.querySelector<SVGSVGElement>(".hero-illustration");
    if (!svg) return;

    const q = (sel: string) =>
      Array.from(svg.querySelectorAll<SVGGraphicsElement>(sel));

    const card = q('[data-hero="card"]');
    const dotgrid = q('[data-hero="dotgrid"]');
    const head = q('[data-hero="head"]');
    const visorGroup = q('[data-hero="visor-group"]');
    const earL = q('[data-hero="ear-l"]');
    const earR = q('[data-hero="ear-r"]');
    const strapL = q('[data-hero="strap-l"]');
    const strapR = q('[data-hero="strap-r"]');
    const armL = q('[data-hero="arm-l"]');
    const armR = q('[data-hero="arm-r"]');
    const shadow = q('[data-hero="shadow"]');
    const molecule = q('[data-hero="molecule"]');
    const dna = q('[data-hero="dna"]');
    const heart = q('[data-hero="heart"]');
    const microscope = q('[data-hero="microscope"]');
    const label = q('[data-hero="label"]');

    let ctx: gsap.Context | null = null;
    ctx = gsap.context(() => {
      gsap.set([head, visorGroup, earL, earR, strapL, strapR, armL, armR, shadow, molecule, dna, heart, microscope, label], {
        opacity: 0,
        transformOrigin: "50% 50%",
      });
      gsap.set([head, shadow], { y: 40, scale: 0.7 });
      gsap.set(visorGroup, { y: -30, scale: 0.5 });
      gsap.set([earL, earR], { scale: 0 });
      gsap.set([strapL, strapR], { scaleY: 0, transformOrigin: "50% 0%" });
      gsap.set([armL, armR], { scaleX: 0, transformOrigin: "50% 0%" });
      gsap.set(molecule, { scale: 0.3, rotation: -45, transformOrigin: "50% 50%" });
      gsap.set(dna, { scaleY: 0, transformOrigin: "50% 50%" });
      gsap.set(heart, { scale: 0, rotation: -20 });
      gsap.set(microscope, { scale: 0, rotation: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-stage",
          start: "top top",
          end: () => `+=${window.innerHeight * 0.9}`,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl.to(card, { opacity: 1, duration: 0.05 }, 0);
      tl.to(dotgrid, { opacity: 0.5, duration: 0.1 }, 0.05);
      tl.to(shadow, { opacity: 0.18, y: 0, scale: 1, duration: 0.15 }, 0.1);
      tl.to(head, { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "back.out(1.4)" }, 0.15);
      tl.to([earL, earR], { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(1.6)", stagger: 0.05 }, 0.3);
      tl.to(visorGroup, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.4)" }, 0.4);
      tl.to([strapL, strapR], { opacity: 1, scaleY: 1, duration: 0.18, ease: "power3.out", stagger: 0.04 }, 0.5);
      tl.to([armL, armR], { opacity: 1, scaleX: 1, duration: 0.25, stagger: 0.06, ease: "power3.out" }, 0.55);
      tl.to(molecule, { opacity: 1, scale: 1, rotation: 0, duration: 0.3, ease: "back.out(1.5)" }, 0.65);
      tl.to(dna, { opacity: 1, scaleY: 1, duration: 0.3, ease: "power3.out" }, 0.7);
      tl.to(heart, { opacity: 1, scale: 1, rotation: 0, duration: 0.25, ease: "back.out(1.7)" }, 0.78);
      tl.to(microscope, { opacity: 1, scale: 1, rotation: 0, duration: 0.25, ease: "back.out(1.7)" }, 0.83);
      tl.to(label, { opacity: 1, duration: 0.1 }, 0.9);

      gsap.to('[data-hero="molecule"]', {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
        delay: 1.2,
      });
      gsap.to('[data-hero="dna"]', {
        rotationY: 360,
        duration: 6,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
        delay: 1.2,
      });
    });

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
