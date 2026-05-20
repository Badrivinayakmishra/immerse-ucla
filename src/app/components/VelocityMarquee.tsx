"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  items: string[];
  baseSpeed?: number;
  direction?: 1 | -1;
  className?: string;
  itemClassName?: string;
};

export function VelocityMarquee({
  items,
  baseSpeed = 60,
  direction = 1,
  className = "",
  itemClassName = "",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    gsap.registerPlugin(ScrollTrigger);

    let xPos = 0;
    let scrollVelocity = 0;
    let currentDir = direction;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        onUpdate: (self) => {
          scrollVelocity = self.getVelocity();
          if (Math.abs(scrollVelocity) > 1) {
            const newDir: 1 | -1 = scrollVelocity > 0 ? 1 : -1;
            if (newDir !== currentDir) currentDir = newDir;
          }
        },
      });

      const tick = () => {
        const speedMul = 1 + Math.min(Math.abs(scrollVelocity) / 1500, 3);
        const halfWidth = track.scrollWidth / 2;
        xPos -= currentDir * (baseSpeed / 60) * speedMul;
        if (-xPos >= halfWidth) xPos += halfWidth;
        if (xPos > 0) xPos -= halfWidth;
        track.style.transform = `translate3d(${xPos.toFixed(2)}px, 0, 0)`;
        scrollVelocity *= 0.92;
      };

      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
        trigger.kill();
      };
    }, trackRef);

    return () => ctx.revert();
  }, [baseSpeed, direction]);

  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className={`whitespace-nowrap ${itemClassName}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
