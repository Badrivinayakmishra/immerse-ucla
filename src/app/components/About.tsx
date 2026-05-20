export function About() {
  return (
    <section id="about" className="relative bg-paper py-28 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="absolute top-20 left-10 rotate-[-12deg]">
        <div className="bg-lime border-2 border-ink rounded-full px-4 py-1.5 shadow-[3px_3px_0_var(--color-ink)] hidden md:block">
          <span className="text-xs font-bold uppercase tracking-wider">✺ Since &apos;26</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <span className="sticker bg-cream">01 — About</span>
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-6 text-ink">
            We put <span className="text-forest">medicine</span> inside a <span className="italic text-orange">headset</span>.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg md:text-xl leading-relaxed text-ink/85">
          <p className="text-2xl md:text-3xl font-medium text-ink">
            IMMERSE is a community of pre-medical students, engineers, designers,
            and researchers at UCLA building the next generation of immersive
            tools for healthcare.
          </p>
          <p>
            From surgical simulators to molecular visualization, from anatomy
            education to clinical empathy training — we host workshops on Unity
            and WebXR, run faculty-paired research projects with the David
            Geffen School of Medicine, and ship demos you can actually put on
            your face.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6">
            <Stat n="3" label="Pillars: build, study, translate." />
            <Stat n="4" label="Quarters of programming per year." />
            <Stat n="∞" label="Reasons to wear a VR headset to lecture." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t-2 border-ink pt-4">
      <div className="display text-5xl md:text-6xl text-forest">{n}</div>
      <div className="text-xs md:text-sm uppercase tracking-wider text-ink/70 mt-2">
        {label}
      </div>
    </div>
  );
}
