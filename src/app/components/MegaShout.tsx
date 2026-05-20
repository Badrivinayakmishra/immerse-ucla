import { Reveal } from "./Reveal";

type Props = {
  bg: string;
  textColor: string;
  lines: string[];
  align?: "center" | "left";
};

const shoutStyle = {
  fontFamily: "var(--font-shout), Impact, sans-serif",
  fontWeight: 400,
  textTransform: "uppercase" as const,
  letterSpacing: "-0.005em",
  lineHeight: 0.86,
};

export function MegaShout({ bg, textColor, lines, align = "left" }: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <section className={`${bg} ${textColor} border-y-2 border-ink min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 overflow-hidden`}>
      <div className={`w-full max-w-[1600px] mx-auto flex flex-col ${alignment}`}>
        {lines.map((line, i) => (
          <Reveal
            key={`${line}-${i}`}
            direction="up"
            amount={120}
            delay={i * 120}
            className="w-full"
          >
            <h2
              className="text-[clamp(3.5rem,13.5vw,13.5rem)] break-words"
              style={shoutStyle}
            >
              {line}
            </h2>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
