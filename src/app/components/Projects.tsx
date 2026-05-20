type Project = {
  title: string;
  kicker: string;
  blurb: string;
  tag: string;
  color: string;
  textColor?: string;
};

const projects: Project[] = [
  {
    kicker: "Anatomy lab",
    title: "Cadaver→Cloud",
    blurb:
      "A walkthrough VR build of UCLA's anatomy lab specimens, scanned and rebuilt for first-year med students.",
    tag: "Build",
    color: "bg-sky",
  },
  {
    kicker: "Surgical sim",
    title: "Suture Sandbox",
    blurb:
      "Haptic-glove suturing practice scored on tension, angle, and consistency. Built with the Meta Quest 3 SDK.",
    tag: "Build",
    color: "bg-amber",
  },
  {
    kicker: "Research",
    title: "Empathy in XR",
    blurb:
      "Pilot study with the Geffen behavioral lab measuring whether VR perspective-taking changes physician communication scores.",
    tag: "Study",
    color: "bg-forest",
    textColor: "text-cream",
  },
  {
    kicker: "Outreach",
    title: "Headsets in Hospitals",
    blurb:
      "Loaning curated VR experiences to pediatric patients at UCLA Mattel Children's during long inpatient stays.",
    tag: "Translate",
    color: "bg-orange",
    textColor: "text-paper",
  },
  {
    kicker: "Workshop series",
    title: "WebXR Fridays",
    blurb:
      "Weekly hands-on session: build a working WebXR scene in 60 minutes. No prior 3D experience required.",
    tag: "Build",
    color: "bg-lime",
  },
  {
    kicker: "Publication",
    title: "The Headset Journal",
    blurb:
      "Undergraduate-run quarterly summarizing recent literature at the intersection of medicine and immersive computing.",
    tag: "Study",
    color: "bg-cream",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="sticker bg-cream">02 — Projects</span>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-6 text-ink max-w-2xl">
              What we&apos;re <span className="text-forest scribble-underline">shipping</span>.
            </h2>
          </div>
          <p className="md:max-w-sm text-ink/70 text-base">
            Our quarter-long projects sit at one of three pillars: building tools,
            studying outcomes, or translating both back to patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, kicker, blurb, tag, color, textColor }: Project) {
  return (
    <article
      className={`group ${color} ${textColor ?? "text-ink"} border-2 border-ink rounded-3xl p-7 flex flex-col gap-6 min-h-[280px] shadow-[6px_6px_0_var(--color-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_var(--color-ink)] transition-all`}
    >
      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest opacity-80">
        <span>{kicker}</span>
        <span className="border-2 border-current rounded-full px-2 py-0.5">{tag}</span>
      </div>
      <h3 className="display text-4xl md:text-5xl leading-none">{title}</h3>
      <p className="text-sm md:text-base leading-relaxed opacity-90 mt-auto">
        {blurb}
      </p>
    </article>
  );
}
