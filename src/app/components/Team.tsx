import { Portrait } from "./Portrait";
import { Reveal } from "./Reveal";

type Member = {
  name: string;
  role: string;
  cardBg: string;
  portrait: { skin: string; hair: string; shirt: string; bg: string; variant: 1 | 2 | 3 | 4 | 5 | 6 };
  rotate: string;
};

const team: Member[] = [
  {
    name: "Amelia Chen",
    role: "President",
    cardBg: "bg-forest",
    portrait: { skin: "#f5d6b8", hair: "#1a1a1a", shirt: "#fff1c7", bg: "#73f8ff", variant: 1 },
    rotate: "rotate-[-2deg]",
  },
  {
    name: "Diego Ortiz",
    role: "VP, Build",
    cardBg: "bg-sky",
    portrait: { skin: "#d4a574", hair: "#2c1810", shirt: "#25936f", bg: "#fff1c7", variant: 4 },
    rotate: "rotate-[3deg]",
  },
  {
    name: "Priya Anand",
    role: "VP, Study",
    cardBg: "bg-amber",
    portrait: { skin: "#c89a6c", hair: "#1a0e08", shirt: "#ff8639", bg: "#8bd94f", variant: 2 },
    rotate: "rotate-[-3deg]",
  },
  {
    name: "Jordan Williams",
    role: "VP, Translate",
    cardBg: "bg-orange",
    portrait: { skin: "#8b5a3c", hair: "#0e1f1a", shirt: "#fff1c7", bg: "#fff1c7", variant: 3 },
    rotate: "rotate-[2deg]",
  },
  {
    name: "Mira Sato",
    role: "Design Director",
    cardBg: "bg-lime",
    portrait: { skin: "#e8c9a8", hair: "#0e1f1a", shirt: "#73f8ff", bg: "#ff8639", variant: 5 },
    rotate: "rotate-[-1deg]",
  },
  {
    name: "Dr. Reza Patel",
    role: "Faculty Advisor",
    cardBg: "bg-cream",
    portrait: { skin: "#b88860", hair: "#3d2817", shirt: "#25936f", bg: "#73f8ff", variant: 6 },
    rotate: "rotate-[2deg]",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-cream py-32 md:py-44 px-6 md:px-10 border-y-2 border-ink relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <span className="sticker bg-paper">03 / Team</span>
              <h2 className="display text-[clamp(2.75rem,6.5vw,5.5rem)] mt-6 text-ink leading-[0.92]">
                Founding <span className="italic text-orange">crew</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="md:max-w-sm text-ink/70 text-base">
              Six humans who decided IMMERSE needed to exist. We meet Thursdays
              in Royce Hall. Yes, we&apos;ll let you try the headset.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {team.map((m, i) => (
            <Reveal key={m.role} direction="up" delay={i * 80} amount={50}>
              <article
                className={`${m.cardBg} border-2 border-ink rounded-3xl overflow-hidden ${m.rotate} hover:rotate-0 transition-transform duration-300 shadow-[5px_5px_0_var(--color-ink)] hover:shadow-[8px_8px_0_var(--color-ink)]`}
              >
                <div className="border-b-2 border-ink">
                  <Portrait {...m.portrait} />
                </div>
                <div className="p-3 bg-paper">
                  <div className="text-sm font-semibold text-ink leading-tight">{m.name}</div>
                  <div className="text-[10px] text-ink/70 uppercase tracking-wider mt-1">
                    {m.role}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
