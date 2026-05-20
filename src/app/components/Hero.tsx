import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper">
      <div className="absolute inset-0 dotgrid opacity-60" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-36 md:pt-44 pb-24">
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-3">
            <span className="sticker bg-sky">UCLA · Est. 2026</span>
            <span className="sticker bg-cream">Pre-Health × XR</span>
          </div>

          <h1 className="display text-[clamp(3.5rem,13vw,12rem)] text-ink">
            <span className="block">Medicine,</span>
            <span className="block">
              <span className="text-forest">re</span>
              <span className="scribble-underline">imagined</span>
              <span className="text-amber"> .</span>
            </span>
            <span className="block">In <span className="italic text-orange">three</span> dimensions.</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl leading-relaxed text-ink/80">
            IMMERSE is a UCLA student organization building, studying, and
            translating immersive technology — VR, AR, and spatial computing —
            into healthcare, biomedical research, and clinical training.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-forest text-paper px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-ink transition-colors"
            >
              Become a member <span aria-hidden>→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
            >
              See our work
            </a>
          </div>
        </div>

        <FloatingStickers />
      </div>

      <ScrollCue />
    </section>
  );
}

function FloatingStickers() {
  return (
    <>
      <div className="hidden md:block absolute top-32 right-10 rotate-6">
        <div className="bg-sky border-2 border-ink rounded-2xl p-5 w-56 shadow-[6px_6px_0_var(--color-ink)]">
          <div className="text-xs font-semibold uppercase tracking-widest text-ink/70 mb-2">
            Now hiring
          </div>
          <div className="display text-2xl text-ink leading-none">
            Founding<br />team.
          </div>
          <div className="mt-3 text-xs text-ink/70">
            Apply by week 4 of fall ‘26.
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-28 right-24 -rotate-3">
        <div className="bg-lime border-2 border-ink rounded-full px-5 py-3 shadow-[4px_4px_0_var(--color-ink)]">
          <span className="text-sm font-bold uppercase tracking-wider">
            🥽 First demo · Spring quarter
          </span>
        </div>
      </div>

      <div className="hidden md:block absolute top-1/2 right-1/3 rotate-12">
        <div className="bg-amber border-2 border-ink rounded-xl px-3 py-1.5 shadow-[3px_3px_0_var(--color-ink)]">
          <span className="text-xs font-bold uppercase">DNA · VR · MD</span>
        </div>
      </div>
    </>
  );
}

function ScrollCue() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/60 text-[11px] uppercase tracking-[0.3em]">
      <span>Scroll</span>
      <span className="w-px h-10 bg-ink/40 animate-pulse" />
    </div>
  );
}
