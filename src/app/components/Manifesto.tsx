import { Reveal } from "./Reveal";

type Props = {
  bg: string;
  textColor: string;
  lines: string[];
  kicker?: string;
  accentWord?: string;
  accentColor?: string;
};

const shoutStyle = {
  fontFamily: "var(--font-shout), Impact, sans-serif",
  fontWeight: 400,
  textTransform: "uppercase" as const,
  letterSpacing: "-0.005em",
  lineHeight: 0.86,
};

export function Manifesto({
  bg,
  textColor,
  lines,
  kicker,
  accentWord,
  accentColor,
}: Props) {
  return (
    <section className={`${bg} ${textColor} border-y-2 border-ink py-28 md:py-40 px-6 md:px-10`}>
      <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
        {kicker && (
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.35em] opacity-70 mb-8 block">
              {kicker}
            </span>
          </Reveal>
        )}
        <Reveal direction="up" amount={90}>
          <h2 className="text-[clamp(4.5rem,17vw,17rem)]" style={shoutStyle}>
            {lines.map((line, i) => {
              if (accentWord && line.includes(accentWord)) {
                const parts = line.split(accentWord);
                return (
                  <span key={i} className="block">
                    {parts[0]}
                    <span style={{ color: accentColor }}>{accentWord}</span>
                    {parts[1]}
                  </span>
                );
              }
              return <span key={i} className="block">{line}</span>;
            })}
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
