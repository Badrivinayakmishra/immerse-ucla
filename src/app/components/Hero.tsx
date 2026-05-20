import { HeroIllustration } from "./HeroIllustration";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper pt-32 pb-16">
      <div className="absolute inset-0 dotgrid opacity-40" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <Reveal direction="up" delay={50}>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="sticker bg-sky">UCLA / Est. 2026</span>
              <span className="sticker bg-cream">Pre-Health x XR</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <h1 className="display text-[clamp(3.25rem,10vw,9rem)] text-ink">
              <span className="block">Medicine,</span>
              <span className="block">
                <span className="text-forest">re</span>
                <span className="scribble-underline">imagined</span>
                <span className="text-amber">.</span>
              </span>
              <span className="block">In <span className="italic text-orange">three</span> dimensions.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-ink/80">
              IMMERSE is a UCLA student organization building, studying, and
              translating immersive technology (VR, AR, and spatial computing)
              into healthcare, biomedical research, and clinical training.
            </p>
          </Reveal>

          <Reveal direction="up" delay={450}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-full bg-forest text-paper px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-ink transition-colors shadow-[5px_5px_0_var(--color-ink)]"
              >
                Become a member <span aria-hidden>→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
              >
                See our work
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative">
          <Parallax speed={0.12}>
            <Reveal direction="scale" delay={250}>
              <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <HeroIllustration />
              </div>
            </Reveal>
          </Parallax>

          <Reveal direction="left" delay={650}>
            <div className="absolute -top-4 -left-6 rotate-[-8deg] z-20 hidden md:block">
              <div className="bg-cream border-2 border-ink rounded-3xl px-4 py-2.5 shadow-[3px_3px_0_var(--color-ink)]">
                <span className="text-sm font-bold flex items-center gap-1.5">
                  <span className="text-base">⚡</span>
                  <span>Built by Bruins</span>
                  <span className="text-base">🥽</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={800}>
            <div className="absolute -bottom-4 -right-2 rotate-[5deg] z-20 hidden md:block">
              <div className="bg-sky border-2 border-ink rounded-2xl p-4 w-56 shadow-[5px_5px_0_var(--color-ink)]">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-ink/70">
                  Demo of the month
                </div>
                <div className="display text-2xl text-ink leading-none mt-1.5">
                  Suture<br />Sandbox.
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase">Quest 3 / WebXR</span>
                  <span className="bg-ink text-paper rounded-full px-2.5 py-1 text-[10px] font-semibold">
                    See ↗
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}

function ScrollCue() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/60 text-[10px] uppercase tracking-[0.3em] z-10">
      <span>Scroll</span>
      <span className="w-px h-8 bg-ink/40 animate-pulse" />
    </div>
  );
}
