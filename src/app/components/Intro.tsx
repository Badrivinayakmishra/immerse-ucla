"use client";

import { useEffect, useState } from "react";

export function Intro() {
  const [count, setCount] = useState(0);
  const [wipe, setWipe] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const paused = new URLSearchParams(window.location.search).has("paused");
    if (sessionStorage.getItem("immerse_intro_played") && !paused) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    if (paused) {
      setCount(72);
      return;
    }

    const start = performance.now();
    const duration = 2200;
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 2.2);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setWipe(true), 220);
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
          sessionStorage.setItem("immerse_intro_played", "1");
        }, 1500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-forest text-cream overflow-hidden ${
        wipe ? "intro-wipe" : ""
      }`}
      aria-hidden
    >
      <div className="absolute inset-0 dotgrid opacity-30" />

      <span className="absolute top-8 left-8 sticker bg-amber text-ink">
        Now loading
      </span>
      <span className="absolute top-8 right-8 sticker bg-cream text-ink">
        IMMERSE / UCLA / MMXXVI
      </span>

      <div className="absolute top-12 right-12 spin-slow">
        <Asterisk />
      </div>
      <div className="absolute bottom-16 left-12 spin-slow-rev">
        <Asterisk small />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
        <div className="relative w-full intro-rise">
          <svg
            viewBox="0 0 1000 230"
            className="w-full h-auto block"
            aria-label="IMMERSE"
            role="img"
          >
            <text
              x="500"
              y="195"
              textAnchor="middle"
              style={{
                fontFamily: "var(--font-shout), Impact, sans-serif",
                fontSize: 240,
                letterSpacing: "-3px",
              }}
              fill="var(--color-cream)"
            >
              <tspan>IMM</tspan>
              <tspan fill="var(--color-amber)">E</tspan>
              <tspan>RSE</tspan>
              <tspan fill="var(--color-orange)">.</tspan>
            </text>
          </svg>
          <span className="absolute -top-2 right-4 md:-top-4 md:right-8 sticker bg-sky text-ink rotate-[8deg]">
            VR x MD
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 flex items-end gap-4">
        <span className="display text-[clamp(4rem,12vw,9rem)] leading-none text-amber tabular-nums">
          {count.toString().padStart(3, "0")}
        </span>
        <span className="display text-3xl md:text-5xl text-cream/70 mb-2">
          %
        </span>
      </div>

      <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-cream/80">
          Putting it on
        </span>
        <span className="w-12 h-px bg-cream/40 origin-left intro-bar" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cream/15">
        <div
          className="h-full bg-amber transition-[width] duration-100"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  );
}

function Asterisk({ small = false }: { small?: boolean }) {
  const s = small ? 60 : 110;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" aria-hidden>
      <g fill="#ffb407" stroke="#fff1c7" strokeWidth="2">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="50"
            rx="6"
            ry="44"
            transform={`rotate(${(i * 180) / 8} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="10" fill="#ff8639" />
      </g>
    </svg>
  );
}
