import { Reveal } from "./Reveal";

type Mark = "headset" | "cross" | "orbit";

type Props = {
  bg: string;
  markColor: string;
  mark: Mark;
  caption?: string;
  captionColor?: string;
};

export function GraphicBreak({ bg, markColor, mark, caption, captionColor }: Props) {
  return (
    <section className={`${bg} border-y-2 border-ink min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-12 px-6 md:px-10`}>
      <Reveal direction="scale" amount={0} className="w-full flex items-center justify-center">
        <div className="w-[min(85vw,72vh)]">
          {mark === "headset" && <HeadsetMark color={markColor} />}
          {mark === "cross" && <CrossMark color={markColor} />}
          {mark === "orbit" && <OrbitMark color={markColor} />}
        </div>
      </Reveal>
      {caption && (
        <Reveal delay={250} className="w-full">
          <p className={`mt-12 text-center text-sm md:text-base uppercase tracking-[0.4em] font-medium ${captionColor ?? "text-ink/80"}`}>
            {caption}
          </p>
        </Reveal>
      )}
    </section>
  );
}

function HeadsetMark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 1000 720" className="w-full h-auto block" aria-hidden>
      <path
        d="M40 220 Q40 60 240 60 L760 60 Q960 60 960 220 L960 500 Q960 660 760 660 L240 660 Q40 660 40 500 Z"
        fill={color}
      />
      <rect x="120" y="260" width="760" height="320" rx="68" fill="var(--color-paper)" />
      <rect x="160" y="300" width="320" height="240" rx="44" fill={color} opacity="0.16" />
      <rect x="520" y="300" width="320" height="240" rx="44" fill={color} opacity="0.16" />
      <rect x="0" y="320" width="40" height="120" rx="12" fill={color} />
      <rect x="960" y="320" width="40" height="120" rx="12" fill={color} />
    </svg>
  );
}

function CrossMark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 800 800" className="w-full h-auto block" aria-hidden>
      <rect x="290" y="20" width="220" height="760" rx="40" fill={color} />
      <rect x="20" y="290" width="760" height="220" rx="40" fill={color} />
      <rect x="20" y="350" width="760" height="100" rx="24" fill="var(--color-ink)" />
      <rect x="60" y="365" width="320" height="70" rx="16" fill={color} opacity="0.55" />
      <rect x="420" y="365" width="320" height="70" rx="16" fill={color} opacity="0.55" />
    </svg>
  );
}

function OrbitMark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 800 800" className="w-full h-auto block" aria-hidden>
      <circle cx="400" cy="400" r="340" fill="none" stroke={color} strokeWidth="32" />
      <circle cx="400" cy="60" r="48" fill={color} />
      <circle cx="740" cy="400" r="40" fill={color} />
      <circle cx="400" cy="740" r="44" fill={color} />
      <circle cx="60" cy="400" r="38" fill={color} />
      <circle cx="400" cy="400" r="110" fill={color} />
    </svg>
  );
}
