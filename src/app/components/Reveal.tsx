"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  amount?: number;
  className?: string;
  as?: "div" | "span" | "section" | "article" | "li";
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  amount = 60,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const offset = (() => {
    if (shown) return "translate3d(0,0,0) scale(1)";
    switch (direction) {
      case "left":  return `translate3d(${-amount}px,0,0) scale(0.98)`;
      case "right": return `translate3d(${amount}px,0,0) scale(0.98)`;
      case "scale": return "translate3d(0,0,0) scale(0.9)";
      default:      return `translate3d(0,${amount}px,0) scale(0.98)`;
    }
  })();

  const style: CSSProperties = {
    transform: offset,
    opacity: shown ? 1 : 0,
    transition: `transform 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 700ms ease ${delay}ms`,
    willChange: "transform, opacity",
  };

  const Tag = as as "div";
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} style={style} className={className}>
      {children}
    </Tag>
  );
}
