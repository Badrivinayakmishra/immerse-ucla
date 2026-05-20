"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
  perWordDelay?: number;
  startDelay?: number;
  as?: "h2" | "h1" | "h3" | "p" | "div" | "span";
};

export function RevealWords({
  text,
  className = "",
  style,
  perWordDelay = 80,
  startDelay = 0,
  as = "h2",
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
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");

  const Tag = as as "h2";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={style}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-baseline"
        >
          <span
            className="inline-block"
            style={{
              transform: shown ? "translate3d(0,0,0)" : "translate3d(0,100%,0)",
              transition: `transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)`,
              transitionDelay: `${startDelay + i * perWordDelay}ms`,
              willChange: "transform",
            }}
          >
            {word}
            {i < words.length - 1 && " "}
          </span>
        </span>
      ))}
    </Tag>
  );
}
