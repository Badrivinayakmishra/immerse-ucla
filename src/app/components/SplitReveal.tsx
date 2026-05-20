"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: "words" | "chars" | "lines";
  stagger?: number;
  duration?: number;
  yOffset?: string;
  ease?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
};

export function SplitReveal({
  children,
  className = "",
  style,
  type = "words",
  stagger = 0.07,
  duration = 1.0,
  yOffset = "110%",
  ease = "expo.out",
  as: Tag = "h2",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let split: SplitText | null = null;
    let tween: gsap.core.Tween | null = null;
    let trigger: ScrollTrigger | null = null;

    const ctx = gsap.context(() => {
      split = new SplitText(el, {
        type,
        wordsClass: "split-word inline-block overflow-hidden align-baseline",
        linesClass: "split-line overflow-hidden",
        charsClass: "split-char inline-block",
        mask: type === "words" ? "words" : type === "lines" ? "lines" : undefined,
      });

      const targets =
        type === "chars"
          ? split.chars
          : type === "lines"
          ? split.lines
          : split.words;

      gsap.set(targets, { yPercent: parseFloat(yOffset) || 110 });

      tween = gsap.to(targets, {
        yPercent: 0,
        ease,
        duration,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
      trigger = (tween.scrollTrigger as ScrollTrigger) || null;
    }, ref);

    return () => {
      trigger?.kill();
      tween?.kill();
      split?.revert();
      ctx.revert();
    };
  }, [type, stagger, duration, yOffset, ease]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
