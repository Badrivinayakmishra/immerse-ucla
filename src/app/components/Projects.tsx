import { Reveal } from "./Reveal";

type Project = {
  title: string;
  kicker: string;
  blurb: string;
  tag: string;
  color: string;
  textColor?: string;
  rotateDeg: number;
  emoji: string;
};

const projects: Project[] = [
  {
    kicker: "Anatomy lab",
    title: "Cadaver to Cloud",
    blurb:
      "A walkthrough VR build of UCLA's anatomy lab specimens, scanned and rebuilt for first-year med students.",
    tag: "Build",
    color: "bg-sky",
    rotateDeg: -1.5,
    emoji: "🫀",
  },
  {
    kicker: "Surgical sim",
    title: "Suture Sandbox",
    blurb:
      "Haptic-glove suturing practice scored on tension, angle, and consistency. Built with the Meta Quest 3 SDK.",
    tag: "Build",
    color: "bg-amber",
    rotateDeg: 1,
    emoji: "🧵",
  },
  {
    kicker: "Research",
    title: "Empathy in XR",
    blurb:
      "Pilot study with the Geffen behavioral lab measuring whether VR perspective-taking changes physician communication scores.",
    tag: "Study",
    color: "bg-forest",
    textColor: "text-cream",
    rotateDeg: -1,
    emoji: "🧠",
  },
  {
    kicker: "Outreach",
    title: "Headsets in Hospitals",
    blurb:
      "Loaning curated VR experiences to pediatric patients at UCLA Mattel Children's during long inpatient stays.",
    tag: "Translate",
    color: "bg-orange",
    textColor: "text-paper",
    rotateDeg: 2,
    emoji: "🏥",
  },
  {
    kicker: "Workshop series",
    title: "WebXR Fridays",
    blurb:
      "Weekly hands-on session: build a working WebXR scene in 60 minutes. No prior 3D experience required.",
    tag: "Build",
    color: "bg-lime",
    rotateDeg: -2,
    emoji: "🥽",
  },
  {
    kicker: "Publication",
    title: "Headset Journal",
    blurb:
      "Undergraduate-run quarterly summarizing recent literature at the intersection of medicine and immersive computing.",
    tag: "Study",
    color: "bg-cream",
    rotateDeg: 1.5,
    emoji: "📓",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-32 md:py-44 px-6 md:px-10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <span className="sticker bg-cream">02 / Projects</span>
              <h2 className="display text-[clamp(2.75rem,6.5vw,5.5rem)] mt-6 text-ink max-w-2xl leading-[0.92]">
                What we&apos;re <span className="text-forest scribble-underline">shipping</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="md:max-w-sm text-ink/70 text-base">
              Our quarter-long projects sit at one of three pillars: building
              tools, studying outcomes, or translating both back to patients.
            </p>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={100}>
          <FeaturedCallout />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCallout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-ink text-paper border-2 border-ink rounded-3xl p-7 md:p-10 shadow-[8px_8px_0_var(--color-forest)] rotate-[-0.5deg]">
      <div className="md:col-span-3 flex items-center gap-3">
        <span className="bg-orange text-ink rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest border-2 border-paper">
          ★ Featured
        </span>
      </div>
      <div className="md:col-span-6">
        <div className="text-[11px] uppercase tracking-widest text-amber font-semibold mb-1">
          Demo of the quarter
        </div>
        <h3 className="display text-4xl md:text-5xl">
          <span className="text-amber">Suture</span> Sandbox.
        </h3>
        <p className="text-paper/80 text-sm md:text-base mt-3 max-w-xl">
          A haptic VR suturing trainer scored on tension, angle, and
          consistency. Built in 8 weeks by 4 undergrads. Demoing at UCLA
          Datafest.
        </p>
      </div>
      <div className="md:col-span-3 flex md:justify-end">
        <a
          href="#join"
          className="inline-flex items-center gap-2 rounded-full bg-amber text-ink px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-paper transition-colors"
        >
          Try it ↗
        </a>
      </div>
    </div>
  );
}

function Card({ title, kicker, blurb, tag, color, textColor, rotateDeg, emoji }: Project) {
  return (
    <article
      className={`project-card magnet group ${color} ${textColor ?? "text-ink"} border-2 border-ink rounded-3xl p-7 flex flex-col gap-5 min-h-[290px] shadow-[6px_6px_0_var(--color-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_var(--color-ink)] transition-shadow`}
      data-final-rotation={rotateDeg}
      data-cursor="open"
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    >
      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest opacity-80">
        <span>{kicker}</span>
        <span className="border-2 border-current rounded-full px-2 py-0.5">{tag}</span>
      </div>
      <div className="text-5xl" aria-hidden>{emoji}</div>
      <h3 className="display text-4xl md:text-5xl leading-none">{title}</h3>
      <p className="text-sm md:text-base leading-relaxed opacity-90 mt-auto">
        {blurb}
      </p>
    </article>
  );
}
