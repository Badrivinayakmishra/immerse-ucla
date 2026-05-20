import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper pt-28 pb-10">
      <div className="absolute inset-0 dotgrid opacity-50" aria-hidden />
      <ScatterDots />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="sticker bg-sky">UCLA · Est. 2026</span>
            <span className="sticker bg-cream">Pre-Health × XR</span>
            <span className="sticker bg-lime">Now Recruiting</span>
          </div>

          <h1 className="display text-[clamp(3rem,9.5vw,8.5rem)] text-ink">
            <span className="block">Medicine,</span>
            <span className="block">
              <span className="text-forest">re</span>
              <span className="scribble-underline">imagined</span>
              <span className="text-amber">.</span>
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
              className="inline-flex items-center gap-2 rounded-full bg-forest text-paper px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-ink transition-colors shadow-[5px_5px_0_var(--color-ink)]"
            >
              Become a member <span aria-hidden>→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors shadow-[5px_5px_0_var(--color-ink)]"
            >
              See our work
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <HeroIllustration />
          </div>

          <SpeechBubble />
          <CaseCard />
          <DnaSticker />
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}

function ScatterDots() {
  const dots = [
    { top: "8%", left: "12%", c: "var(--orange)", s: 14 },
    { top: "22%", left: "44%", c: "var(--amber)", s: 10 },
    { top: "70%", left: "8%", c: "var(--forest)", s: 16 },
    { top: "85%", left: "55%", c: "var(--orange)", s: 12 },
    { top: "35%", left: "92%", c: "var(--lime)", s: 18 },
    { top: "60%", left: "70%", c: "var(--sky)", s: 14 },
  ];
  return (
    <>
      {dots.map((d, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute rounded-full"
          style={{
            top: d.top,
            left: d.left,
            width: d.s,
            height: d.s,
            background: d.c,
            border: "2px solid var(--color-ink)",
          }}
        />
      ))}
    </>
  );
}

function SpeechBubble() {
  return (
    <div className="absolute -top-4 -left-6 rotate-[-8deg] z-20 hidden md:block">
      <div className="bg-cream border-2 border-ink rounded-3xl px-4 py-2.5 shadow-[3px_3px_0_var(--color-ink)] relative">
        <span className="text-sm font-bold flex items-center gap-1.5">
          <span className="text-base">⚡</span>
          <span>Built by Bruins</span>
          <span className="text-base">🥽</span>
        </span>
        <span
          aria-hidden
          className="absolute -bottom-[10px] left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-cream"
        />
        <span
          aria-hidden
          className="absolute -bottom-[13px] left-7 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-ink -z-10"
        />
      </div>
    </div>
  );
}

function CaseCard() {
  return (
    <div className="absolute -bottom-6 -right-2 rotate-[5deg] z-20 hidden md:block">
      <div className="bg-sky border-2 border-ink rounded-2xl p-4 w-56 shadow-[5px_5px_0_var(--color-ink)]">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-ink/70">
          Demo of the month
        </div>
        <div className="display text-2xl text-ink leading-none mt-1.5">
          Suture<br />Sandbox.
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase">Quest 3 · WebXR</span>
          <span className="bg-ink text-paper rounded-full px-2.5 py-1 text-[10px] font-semibold">
            See ↗
          </span>
        </div>
      </div>
    </div>
  );
}

function DnaSticker() {
  return (
    <div className="absolute top-1/3 -left-8 rotate-[14deg] z-20 hidden lg:block">
      <div className="bg-amber border-2 border-ink rounded-full px-3.5 py-1.5 shadow-[3px_3px_0_var(--color-ink)]">
        <span className="text-xs font-bold uppercase tracking-wider">🧬 DNA · 🫀 MD · 🔬 PhD</span>
      </div>
    </div>
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
