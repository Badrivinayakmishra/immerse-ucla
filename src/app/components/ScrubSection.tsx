"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: ReactNode;
  dwell?: number;
  recede?: boolean;
  bg?: string;
  className?: string;
};

export function ScrubSection({
  children,
  dwell = 1.0,
  recede = true,
  bg = "bg-paper",
  className = "",
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const inner = outer.firstElementChild as HTMLElement | null;
    if (!inner) return;

    let pinTrigger: ScrollTrigger | null = null;
    let recedeTl: gsap.core.Timeline | null = null;

    const ctx = gsap.context(() => {
      const distance = () => Math.round(window.innerHeight * dwell);

      pinTrigger = ScrollTrigger.create({
        trigger: outer,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: inner,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      if (recede) {
        recedeTl = gsap.timeline({
          scrollTrigger: {
            trigger: outer,
            start: () => `top top-=${distance() * 0.55}`,
            end: () => `top top-=${distance()}`,
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });
        recedeTl.to(inner, {
          scale: 0.94,
          opacity: 0.75,
          borderRadius: 20,
          ease: "power2.in",
          force3D: true,
        });
      }
    }, outerRef);

    return () => {
      pinTrigger?.kill();
      recedeTl?.kill();
      ctx.revert();
    };
  }, [dwell, recede]);

  return (
    <div
      ref={outerRef}
      className={`${bg} ${className} relative`}
      style={{ overflow: "hidden" }}
    >
      {children}
    </div>
  );
}
