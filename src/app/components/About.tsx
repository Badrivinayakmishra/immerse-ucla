import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative bg-cream py-32 md:py-44 px-6 md:px-10 overflow-hidden border-y-2 border-ink">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Reveal direction="up">
            <span className="sticker bg-paper">01 / About</span>
            <h2 className="display text-[clamp(2.75rem,6.5vw,5.5rem)] mt-6 text-ink leading-[0.92]">
              We put <span className="text-forest">medicine</span> inside a <span className="italic text-orange">headset</span>.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-7 text-lg md:text-xl leading-relaxed text-ink/85">
          <Reveal direction="up" delay={120}>
            <p className="text-2xl md:text-3xl font-medium text-ink leading-snug">
              IMMERSE is a community of pre-medical students, engineers,
              designers, and researchers at UCLA building the next generation
              of immersive tools for healthcare.
            </p>
          </Reveal>
          <Reveal direction="up" delay={240}>
            <p>
              From surgical simulators to molecular visualization, from anatomy
              education to clinical empathy training. We host workshops on
              Unity and WebXR, run faculty-paired research projects with the
              David Geffen School of Medicine, and ship demos you can actually
              put on your face.
            </p>
          </Reveal>
          <Reveal direction="up" delay={360}>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <Stat n="3" label="Pillars: build, study, translate." />
              <Stat n="4" label="Quarters of programming per year." />
              <Stat n="∞" label="Reasons to wear a VR headset to lecture." />
            </div>
          </Reveal>
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
